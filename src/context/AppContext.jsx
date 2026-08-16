import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

// Initial state template for a new participant
const initialParticipantState = {
  coreStability: {
    stateId: false,
    driversLicense: false,
    ssnCard: false,
    birthCertificate: false,
    reliablePhone: false,
    professionalEmail: false,
    emailAddress: '',
    professionalVoicemail: false,
    libraryCard: false,
    bankAccount: false,
    childSupportContact: false,
    transportationPlan: '',
    housingPlan: '',
    legalRequirements: {
      childSupport: false,
      probationClasses: false,
      pendingCharges: false,
      sexOffenderRegistry: false,
      adsap: false,
    }
  },
  employmentReadiness: {
    careerInterest: '', 
    resumeCompleted: false,
    resumeData: {}, 
    workplaceReferences: false,
    interviewPractice: false,
    interviewClothing: false,
    workTools: false,
    jobApplications: [] 
  },
  healthWellness: {
    healthInsurance: false,
    welvistaReferral: false,
    primaryCare: false,
    visionAppointment: false,
    prescriptionNeeds: false,
    medicationsCurrent: false,
    mentalHealthReferral: false,
    substanceRecovery: false,
  },
  financial: {
    bankAccountOpened: false,
    budgetWorksheetCompleted: false,
    budgetData: { income: 0, expenses: 0 },
    understandingPaychecks: false,
    savingsGoal: false,
    creditReport: false,
    childSupportReviewed: false,
    probationObligations: false,
  },
  careerPlanning: {
    careerGoal: '',
    targetIndustry: '',
    entryLevelJob: '',
    nextCredential: '',
    sixMonthGoal: '',
    longTermWageGoal: ''
  },
  dailyActivityLog: [],
  reportedIssues: [],
  lastWeeklyCheckIn: null,
  training: {
    basicsDrillBits: false,
    basicsCordlessDrills: false,
    basicsHandTools: false,
    basicsTapeMeasure: false,
    drywallRemove: false,
    drywallTapeMud: false,
    drywallAnchors: false,
    drywallHang: false,
    drywallTypes: false,
    drywallCut: false,
    weldingTips: false,
    weldingMig: false,
    weldingHelmets: false,
    weldingStainless: false,
    weldingAluminum: false,
    weldingFluxCore: false,
    hvacBasics: false,
    hvacPressures: false,
    hvacCompressors: false,
    hvacDuctwork: false,
    hvacCapacitors: false,
    digitalGmail: false,
    digitalDocs: false,
    digitalSheets: false,
    digitalAi: false,
    simPhone: false,
    simGmail: false,
    simDocs: false,
    simSheets: false,
    simAi: false,
    forkliftExternal: false,
    osha10External: false
  },
  wo_progress: {}
};

export const AppProvider = ({ children }) => {
  const [participants, setParticipantsState] = useState([]);
  const [globalSettings, setGlobalSettings] = useState({ videoOverrides: {} });
  const latestStateRef = React.useRef({}); // Tracks latest state synchronously to prevent race conditions
  const [currentUserId, setCurrentUserId] = useState(() => {
    return localStorage.getItem('briefcase_currentUser') || null;
  });
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(false);

  // Fetch all participants on mount
  useEffect(() => {
    fetchParticipants();
  }, []);

  const fetchParticipants = async () => {
    const { data, error } = await supabase.from('participants').select('*');
    if (!error && data) {
      // 1. Handle Global Settings
      let settingsDoc = data.find(p => p.first_name === '_GLOBAL_SETTINGS_');
      if (settingsDoc) {
        setGlobalSettings(settingsDoc.state_data || { videoOverrides: {} });
      } else {
        // Create global settings document if it doesn't exist
        const newSettings = { videoOverrides: {} };
        await supabase.from('participants').insert([{
          first_name: '_GLOBAL_SETTINGS_',
          last_name: 'SYSTEM',
          location: 'System',
          state_data: newSettings
        }]);
        setGlobalSettings(newSettings);
      }

      // 2. Map DB schema to frontend schema, filtering out global settings
      const mapped = data.filter(p => p.first_name !== '_GLOBAL_SETTINGS_').map(p => ({
        id: p.id,
        firstName: p.first_name,
        lastName: p.last_name,
        location: p.location,
        goal90Day: p.goal_90_day,
        lastLogin: p.last_login,
        coreStability: { ...initialParticipantState.coreStability, ...(p.state_data.coreStability || {}) },
        employmentReadiness: { ...initialParticipantState.employmentReadiness, ...(p.state_data.employmentReadiness || {}) },
        healthWellness: { ...initialParticipantState.healthWellness, ...(p.state_data.healthWellness || {}) },
        financial: { ...initialParticipantState.financial, ...(p.state_data.financial || {}) },
        careerPlanning: { ...initialParticipantState.careerPlanning, ...(p.state_data.careerPlanning || {}) },
        training: { ...initialParticipantState.training, ...(p.state_data.training || {}) },
        dailyActivityLog: p.state_data.dailyActivityLog || [],
        reportedIssues: p.state_data.reportedIssues || [],
        lastWeeklyCheckIn: p.state_data.lastWeeklyCheckIn || null,
        wo_progress: p.state_data.wo_progress || {}
      }));
      mapped.forEach(p => {
        latestStateRef.current[p.id] = p;
      });
      setParticipantsState(mapped);
      setFetchError(false);
    } else {
      console.error("Error fetching participants:", error);
      setFetchError(true);
    }
    setLoading(false);
  };

  const updateGlobalSettings = async (updates) => {
    const nextSettings = { ...globalSettings, ...updates };
    setGlobalSettings(nextSettings);
    
    // Find the ID and update it
    const { data } = await supabase.from('participants').select('id').eq('first_name', '_GLOBAL_SETTINGS_');
    if (data && data.length > 0) {
      await supabase.from('participants').update({ state_data: nextSettings }).eq('id', data[0].id);
    }
  };

  useEffect(() => {
    if (currentUserId) {
      localStorage.setItem('briefcase_currentUser', currentUserId);
    } else {
      localStorage.removeItem('briefcase_currentUser');
    }
  }, [currentUserId]);

  const currentUser = participants.find(p => p.id === currentUserId);

  const login = async (firstName, lastName, location) => {
    if (fetchError) {
      return { success: false, error: "Cannot connect to the database right now. Please refresh the page and try again." };
    }

    const fName = firstName.trim().toLowerCase();
    const lName = lastName.trim().toLowerCase();
    const loc = location.trim().toLowerCase();

    let existing = participants.find(
      p => p.firstName.toLowerCase().trim() === fName && 
           p.lastName.toLowerCase().trim() === lName &&
           p.location.toLowerCase().trim() === loc
    );

    if (existing) {
      setCurrentUserId(existing.id);
      await updateParticipant(existing.id, { lastLogin: new Date().toISOString() }, null, true);
    } else {
      // Create new participant in Supabase
      const stateData = {
        coreStability: initialParticipantState.coreStability,
        employmentReadiness: initialParticipantState.employmentReadiness,
        healthWellness: initialParticipantState.healthWellness,
        financial: initialParticipantState.financial,
        careerPlanning: initialParticipantState.careerPlanning,
        dailyActivityLog: [],
        reportedIssues: [],
        lastWeeklyCheckIn: null,
        training: initialParticipantState.training,
        wo_progress: {}
      };
      
      const { data, error } = await supabase.from('participants').insert([{
        first_name: firstName.trim(),
        last_name: lastName.trim(),
        location: location.trim(),
        state_data: stateData
      }]).select();

      if (error) {
        console.error("Supabase Error creating participant:", error);
        return { success: false, error: error.message || "Failed to connect to database. Did you run the SQL script?" };
      }

      if (data && data.length > 0) {
        const p = data[0];
        const newParticipant = {
          id: p.id,
          firstName: p.first_name,
          lastName: p.last_name,
          location: p.location,
          goal90Day: p.goal_90_day,
          lastLogin: p.last_login,
          ...p.state_data
        };
        latestStateRef.current[p.id] = newParticipant;
        setParticipantsState([...participants, newParticipant]);
        setCurrentUserId(p.id);
        return { success: true };
      } else {
        console.error("Error creating participant: No data returned.");
        return { success: false, error: "Failed to create participant. No data returned." };
      }
    }
    return { success: true };
  };

  const logout = () => {
    setCurrentUserId(null);
  };

  const removeParticipant = async (id) => {
    await supabase.from('participants').delete().eq('id', id);
    delete latestStateRef.current[id];
    setParticipantsState(participants.filter(p => p.id !== id));
    if (currentUserId === id) {
      logout();
    }
  };

  // Internal updater that syncs with Supabase
  const updateParticipant = async (id, rootUpdates, stateDataUpdates, isLogin = false) => {
    const targetUser = latestStateRef.current[id];
    if (!targetUser) return;

    // 1. Synchronously apply updates to the ref to prevent race conditions
    const nextUser = { ...targetUser, ...rootUpdates };
    
    let newStateData = null;
    if (stateDataUpdates && !isLogin) {
      newStateData = {
        coreStability: nextUser.coreStability,
        employmentReadiness: nextUser.employmentReadiness,
        healthWellness: nextUser.healthWellness,
        financial: nextUser.financial,
        careerPlanning: nextUser.careerPlanning || initialParticipantState.careerPlanning,
        dailyActivityLog: nextUser.dailyActivityLog || [],
        reportedIssues: nextUser.reportedIssues || [],
        lastWeeklyCheckIn: nextUser.lastWeeklyCheckIn || null,
        training: nextUser.training || initialParticipantState.training,
        wo_progress: nextUser.wo_progress || {}
      };

      // Apply updates to the payload
      Object.keys(stateDataUpdates).forEach(key => {
        newStateData[key] = stateDataUpdates[key];
      });

      // Update the nextUser with the new sections
      Object.keys(newStateData).forEach(key => {
        nextUser[key] = newStateData[key];
      });
    }

    latestStateRef.current[id] = nextUser;

    // 2. Update React state for the UI
    setParticipantsState(prev => prev.map(p => p.id === id ? nextUser : p));

    // 3. Sync to Supabase
    const dbUpdates = {};
    if (rootUpdates?.goal90Day !== undefined) dbUpdates.goal_90_day = nextUser.goal90Day;
    if (rootUpdates?.lastLogin !== undefined) dbUpdates.last_login = nextUser.lastLogin;
    if (newStateData) dbUpdates.state_data = newStateData;

    await supabase.from('participants').update(dbUpdates).eq('id', id);
  };

  const updateSection = (sectionName, updates, logMessage) => {
    if (!currentUser) return;
    
    const targetUser = latestStateRef.current[currentUser.id];
    if (!targetUser) return;

    const newStateDataUpdate = {
      [sectionName]: {
        ...targetUser[sectionName],
        ...updates
      }
    };
    
    let dailyLogUpdate = {};
    if (logMessage) {
      const today = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      const time = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
      const logEntry = { date: today, activity: `[${time}] ${logMessage}`, timestamp: new Date().toISOString() };
      dailyLogUpdate = {
        dailyActivityLog: [...(targetUser.dailyActivityLog || []), logEntry]
      };
    }

    updateParticipant(currentUser.id, null, {
      ...newStateDataUpdate,
      ...dailyLogUpdate
    });
  };

  const logActivity = (activityDescription) => {
    if (!currentUser) return;
    const targetUser = latestStateRef.current[currentUser.id];
    const today = new Date().toISOString().split('T')[0];
    const logEntry = { date: today, activity: activityDescription, timestamp: new Date().toISOString() };
    
    updateParticipant(currentUser.id, null, {
      dailyActivityLog: [...(targetUser.dailyActivityLog || []), logEntry]
    });
  };

  const reportIssue = (issues) => {
    if (!currentUser) return;
    const targetUser = latestStateRef.current[currentUser.id];
    const today = new Date().toISOString();
    
    const newIssues = issues.map(issue => ({
      id: crypto.randomUUID(),
      date: today,
      type: issue.type,
      description: issue.description,
      status: 'pending'
    }));

    updateParticipant(currentUser.id, null, {
      reportedIssues: [...(targetUser.reportedIssues || []), ...newIssues],
      lastWeeklyCheckIn: today
    });
  };

  // In AppProvider return
  const updateGoal = (goal) => {
    if (currentUser) {
      updateParticipant(currentUser.id, { goal90Day: goal }, null);
    }
  }

  // --- TRADES WORKORDERS SYNC ---
  const getWorkorderProgress = (workorderNum) => {
    if (!currentUser) return {
      answers: { a1: '', a2: '', a3: '' },
      stepsCompleted: [],
      signoffChecked: [],
      status: 'not_started',
      submittedAt: null,
      approvedAt: null,
      approvedBy: null
    };
    const woProgress = currentUser.wo_progress || {};
    return woProgress[workorderNum] || {
      answers: { a1: '', a2: '', a3: '' },
      stepsCompleted: [],
      signoffChecked: [],
      status: 'not_started',
      submittedAt: null,
      approvedAt: null,
      approvedBy: null
    };
  };

  const saveWorkorderProgress = async (workorderNum, progressData) => {
    if (!currentUser) return;
    await updateSection('wo_progress', { [workorderNum]: progressData });
  };

  const submitWorkorder = async (workorderNum, answers, stepsCompleted, signoffChecked) => {
    const progress = {
      answers,
      stepsCompleted,
      signoffChecked,
      status: 'submitted',
      submittedAt: new Date().toISOString(),
      approvedAt: null,
      approvedBy: null
    };
    await saveWorkorderProgress(workorderNum, progress);
    return progress;
  };

  const approveWorkorder = async (userId, workorderNum, pmName) => {
    const targetUser = latestStateRef.current[userId];
    if (!targetUser) return;
    const current = (targetUser.wo_progress || {})[workorderNum] || {};
    const updated = {
      ...current,
      status: 'approved',
      approvedAt: new Date().toISOString(),
      approvedBy: pmName
    };
    const updatedWoProgress = {
      ...(targetUser.wo_progress || {}),
      [workorderNum]: updated
    };
    await updateParticipant(userId, null, { wo_progress: updatedWoProgress });
  };

  const getAllParticipantsProgress = () => {
    return participants.map(p => ({
      user: {
        id: p.id,
        name: `${p.firstName} ${p.lastName}`,
        location: p.location,
        lastLogin: p.lastLogin
      },
      workorders: p.wo_progress || {},
      coreStability: p.coreStability || { completedItems: [], missingItems: [] }
    }));
  };

  return (
    <AppContext.Provider value={{
      participants,
      currentUser,
      loading,
      globalSettings,
      login,
      logout,
      removeParticipant,
      updateParticipant: (id, updates) => updateParticipant(id, updates, null),
      updateGoal,
      updateSection,
      logActivity,
      reportIssue,
      updateGlobalSettings,
      // Trades Curriculum exports
      getWorkorderProgress,
      saveWorkorderProgress,
      submitWorkorder,
      approveWorkorder,
      getAllParticipantsProgress,
      getCloudState: async () => { await fetchParticipants(); }
    }}>
      {!loading && children}
    </AppContext.Provider>
  );
};

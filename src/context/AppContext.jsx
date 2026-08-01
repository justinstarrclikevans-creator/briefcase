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
    transportationPlan: false,
    housingPlan: false,
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
  dailyActivityLog: [] 
};

export const AppProvider = ({ children }) => {
  const [participants, setParticipants] = useState([]);
  const [currentUserId, setCurrentUserId] = useState(() => {
    return localStorage.getItem('briefcase_currentUser') || null;
  });
  const [loading, setLoading] = useState(true);

  // Fetch all participants on mount
  useEffect(() => {
    fetchParticipants();
  }, []);

  const fetchParticipants = async () => {
    const { data, error } = await supabase.from('participants').select('*');
    if (!error && data) {
      // Map DB schema to frontend schema
      const mapped = data.map(p => ({
        id: p.id,
        firstName: p.first_name,
        lastName: p.last_name,
        location: p.location,
        goal90Day: p.goal_90_day,
        lastLogin: p.last_login,
        ...p.state_data
      }));
      setParticipants(mapped);
    } else {
      console.error("Error fetching participants:", error);
    }
    setLoading(false);
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
    let existing = participants.find(
      p => p.firstName.toLowerCase() === firstName.toLowerCase() && 
           p.lastName.toLowerCase() === lastName.toLowerCase() &&
           p.location.toLowerCase() === location.toLowerCase()
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
        dailyActivityLog: []
      };
      
      const { data, error } = await supabase.from('participants').insert([{
        first_name: firstName,
        last_name: lastName,
        location: location,
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
        setParticipants([...participants, newParticipant]);
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
    setParticipants(participants.filter(p => p.id !== id));
    if (currentUserId === id) {
      logout();
    }
  };

  // Internal updater that syncs with Supabase
  const updateParticipant = async (id, rootUpdates, stateDataUpdates, isLogin = false) => {
    // 1. Update local state immediately for fast UI
    setParticipants(prev => prev.map(p => {
      if (p.id === id) {
        const updated = { ...p, ...rootUpdates };
        if (stateDataUpdates) {
          Object.keys(stateDataUpdates).forEach(key => {
            updated[key] = stateDataUpdates[key];
          });
        }
        return updated;
      }
      return p;
    }));

    // 2. Sync to Supabase
    const dbUpdates = {};
    if (rootUpdates?.goal90Day !== undefined) dbUpdates.goal_90_day = rootUpdates.goal90Day;
    if (rootUpdates?.lastLogin !== undefined) dbUpdates.last_login = rootUpdates.lastLogin;
    
    // For nested JSON state data, we need the full current stateData object
    if (stateDataUpdates && !isLogin) {
      const targetUser = participants.find(p => p.id === id) || currentUser;
      
      const newStateData = {
        coreStability: targetUser.coreStability,
        employmentReadiness: targetUser.employmentReadiness,
        healthWellness: targetUser.healthWellness,
        financial: targetUser.financial,
        careerPlanning: targetUser.careerPlanning,
        dailyActivityLog: targetUser.dailyActivityLog,
      };

      // Apply updates to the payload
      Object.keys(stateDataUpdates).forEach(key => {
        newStateData[key] = stateDataUpdates[key];
      });

      dbUpdates.state_data = newStateData;
    }

    await supabase.from('participants').update(dbUpdates).eq('id', id);
  };

  const updateSection = (sectionName, updates) => {
    if (!currentUser) return;
    const newStateDataUpdate = {
      [sectionName]: {
        ...currentUser[sectionName],
        ...updates
      }
    };
    updateParticipant(currentUser.id, null, newStateDataUpdate);
  };

  const logActivity = (activityDescription) => {
    if (!currentUser) return;
    const today = new Date().toISOString().split('T')[0];
    const logEntry = { date: today, activity: activityDescription, timestamp: new Date().toISOString() };
    
    updateParticipant(currentUser.id, null, {
      dailyActivityLog: [...currentUser.dailyActivityLog, logEntry]
    });
  };

  // In AppProvider return
  const updateGoal = (goal) => {
    if (currentUser) {
      updateParticipant(currentUser.id, { goal90Day: goal }, null);
    }
  }

  return (
    <AppContext.Provider value={{
      participants,
      currentUser,
      loading,
      login,
      logout,
      removeParticipant,
      updateParticipant: (id, updates) => updateParticipant(id, updates, null),
      updateGoal,
      updateSection,
      logActivity
    }}>
      {!loading && children}
    </AppContext.Provider>
  );
};

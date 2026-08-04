import { createClient } from '@supabase/supabase-js';

const supabase = createClient('https://koapktcdquynxmooaoqa.supabase.co', 'sb_publishable_dYVdJG5p6wNu4Ivj07YmhQ_cX8Psukf');

async function merge() {
  const { data } = await supabase.from('participants').select('*').ilike('first_name', '%Andres%').order('created_at', { ascending: true });
  
  if (data.length < 2) {
    console.log("Not enough records to merge.");
    return;
  }
  
  const oldP = data[0];
  const newP = data[1];
  
  // We want to combine their state_data.
  // We'll iterate through sections and if oldP has true/data and newP doesn't, we keep oldP's.
  // Actually, a deep merge where true overwrites false, and strings overwrite empty strings.
  
  const mergedState = { ...oldP.state_data };
  
  const sections = ['coreStability', 'employmentReadiness', 'healthWellness', 'financial', 'careerPlanning', 'training'];
  
  sections.forEach(sec => {
    if (newP.state_data[sec]) {
      Object.keys(newP.state_data[sec]).forEach(key => {
        const newVal = newP.state_data[sec][key];
        const oldVal = mergedState[sec][key];
        
        if (typeof newVal === 'boolean') {
          mergedState[sec][key] = oldVal || newVal;
        } else if (typeof newVal === 'string') {
          mergedState[sec][key] = newVal || oldVal;
        } else if (Array.isArray(newVal)) {
          // just combine arrays if jobApplications or something
          mergedState[sec][key] = [...(oldVal || []), ...(newVal || [])];
        }
      });
    }
  });
  
  // Combine activity logs
  mergedState.dailyActivityLog = [
    ...(oldP.state_data.dailyActivityLog || []),
    ...(newP.state_data.dailyActivityLog || [])
  ];
  
  // Update old record with merged data
  const { error: updateErr } = await supabase.from('participants').update({ state_data: mergedState, last_login: newP.last_login }).eq('id', oldP.id);
  if (updateErr) {
    console.error("Error updating:", updateErr);
    return;
  }
  
  // Delete new record
  const { error: deleteErr } = await supabase.from('participants').delete().eq('id', newP.id);
  if (deleteErr) {
    console.error("Error deleting:", deleteErr);
    return;
  }
  
  console.log("Successfully merged Andres Bonham into ID:", oldP.id);
}
merge();

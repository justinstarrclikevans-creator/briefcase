import { createClient } from '@supabase/supabase-js';

const supabase = createClient('https://koapktcdquynxmooaoqa.supabase.co', 'sb_publishable_dYVdJG5p6wNu4Ivj07YmhQ_cX8Psukf');

async function test() {
  const { data: fetch1 } = await supabase.from('participants').select('*').limit(1);
  const p = fetch1[0];
  
  const newStateData = JSON.parse(JSON.stringify(p.state_data));
  newStateData.coreStability.stateId = !newStateData.coreStability.stateId;
  
  const { data: updateData, error: updateError } = await supabase.from('participants')
    .update({ state_data: newStateData })
    .eq('id', p.id)
    .select();
  
  console.log("Update matched rows:", updateData?.length);
  
  const { data: fetch2 } = await supabase.from('participants').select('*').eq('id', p.id);
  console.log("Old stateId:", p.state_data.coreStability.stateId);
  console.log("New stateId:", fetch2[0].state_data.coreStability.stateId);
}
test();

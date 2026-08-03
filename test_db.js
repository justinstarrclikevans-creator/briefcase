import { createClient } from '@supabase/supabase-js';

const supabase = createClient('https://koapktcdquynxmooaoqa.supabase.co', 'sb_publishable_dYVdJG5p6wNu4Ivj07YmhQ_cX8Psukf');

async function test() {
  const { data, error } = await supabase.from('participants').select('*').limit(1);
  if (error) {
    console.error("Fetch error:", error);
    return;
  }
  console.log("Fetched participant:", data);
  if (data.length > 0) {
    const p = data[0];
    const { data: updateData, error: updateError } = await supabase.from('participants').update({ goal_90_day: 'Test Goal' }).eq('id', p.id);
    console.log("Update error:", updateError);
    console.log("Update data:", updateData);
  }
}
test();

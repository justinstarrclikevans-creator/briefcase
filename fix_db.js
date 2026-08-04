import { createClient } from '@supabase/supabase-js';

const supabase = createClient('https://koapktcdquynxmooaoqa.supabase.co', 'sb_publishable_dYVdJG5p6wNu4Ivj07YmhQ_cX8Psukf');

async function fix() {
  const { data, error } = await supabase.from('participants').select('*').ilike('first_name', '%Andres%');
  if (error) {
    console.error(error);
    return;
  }
  
  console.log("Found participants:", data.map(p => ({
    id: p.id,
    first_name: `"${p.first_name}"`,
    last_name: `"${p.last_name}"`,
    location: `"${p.location}"`,
    created_at: p.created_at,
    last_login: p.last_login
  })));
}
fix();

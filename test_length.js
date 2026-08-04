import { createClient } from '@supabase/supabase-js';

const supabase = createClient('https://koapktcdquynxmooaoqa.supabase.co', 'sb_publishable_dYVdJG5p6wNu4Ivj07YmhQ_cX8Psukf');

async function test() {
  const { data } = await supabase.from('participants').select('*').ilike('first_name', '%Andres%');
  data.forEach(p => {
    console.log(`ID: ${p.id}`);
    console.log(`First name: '${p.first_name}' (Length: ${p.first_name.length})`);
    console.log(`Last name: '${p.last_name}' (Length: ${p.last_name.length})`);
    console.log(`Location: '${p.location}' (Length: ${p.location.length})`);
  });
}
test();

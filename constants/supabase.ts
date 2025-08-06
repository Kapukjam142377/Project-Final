import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://kxkrylxfkfjkgbgtxfog.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt4a3J5eWx4ZmtramdiZ3R4Zm9nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY4MDA1ODMsImV4cCI6MjA2MjM3NjU4M30.CDUqZSXA8IxaUBUU7tcxDXn7qyM4i6pma_3dURjvmyU';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

import { Auth } from '@supabase/auth-ui-react'
import { supabase } from '../supabaseClient'
import {
  // Import predefined theme
  ThemeSupa,
} from '@supabase/auth-ui-shared'

const App = () => (
  <Auth
    supabaseClient={supabase}
    appearance={{ theme: ThemeSupa }}
    theme="dark"
  />
)
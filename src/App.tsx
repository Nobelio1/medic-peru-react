import { Route, Routes } from 'react-router-dom'
import { AuthPage, ChatIAPage, ChatPage, Dashboard, LandingPage, ProfilePage, RegisterPage } from './pages/index'

import WithSidebar from './components/shared/WithSidebar'
import WithAuth from './components/shared/WithAuth'
import { RegisterDoctor, RegisterPacient } from './components/auth'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />

        <Route element={<WithAuth />}>
          <Route path='/auth' element={<AuthPage />} />
          <Route path='/register-doctor' element={<RegisterDoctor />} />
          <Route path='/register-paciente' element={<RegisterPacient />} />
        </Route>

        <Route element={<WithSidebar />}>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/chat' element={<ChatPage />} />
          <Route path='/chat-ia' element={<ChatIAPage />} />
          <Route path='/register-doctor' element={<ProfilePage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App

import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import AuthPage from './pages/AuthPage'
import Dashboard from './pages/Dashboard'
import RegisterPage from './pages/RegisterPage'
import ChatPage from './pages/ChatPage'
import WithSidebar from './components/shared/WithSidebar'
import ProfilePage from './pages/ProfilePage'
import ChatIAPage from './pages/ChatIAPage'
import WithAuth from './components/shared/WithAuth'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />

        <Route element={<WithAuth />}>
          <Route path='/auth' element={<AuthPage />} />
          <Route path='/register-doctor' element={<RegisterPage />} />
          <Route path='/register-paciente' element={<RegisterPage />} />
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

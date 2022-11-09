import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import React, { useContext } from "react"
import { AuthProvider, AuthContext } from './context/auth';
import Home from './pages/home'
import Login from './pages/loginPage'
import Register from './pages/registerPage'



const AppRoutes = () => {

  const Private = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext)
    if (loading) {
      return <div>Carregando...</div>
    }
    if (!authenticated) {
      return <Navigate to="/login" />
    }
    return children
  }


  return (
    <Router>
      <AuthProvider >
        <Routes>
          <Route
            exact path='/'
            element={<Home />}>
          </Route>
          <Route
            exact path='/login'
            element={<Login />}>
          </Route>
          <Route
            exact path='/register'
            element={<Register />}>
          </Route>

        </Routes>
      </AuthProvider>
    </Router>

  )

}
export default AppRoutes
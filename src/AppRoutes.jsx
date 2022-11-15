import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import React, { useContext } from "react"
import { AuthProvider, AuthContext } from './context/auth';
import Home from './pages/home'
import Login from './pages/loginPage'
import Register from './pages/registerPage'
import Biblioteca from './pages/biblioteca';
import VideoAula1 from './pages/videoAula';
import VideoAula2 from './pages/videoAula/videoaula2';
import VideoAula3 from './pages/videoAula/videoaula3';
import Ex1 from './pages/exercicios/ex1';
import Ex2 from './pages/exercicios/ex2';
import Perfil from './pages/perfil';



const AppRoutes = () => {

  const Private = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext)
    if (loading) {
      return <div>Carregando...</div>
    }
    // if (!authenticated) {
    //   return <Navigate to="/login" />
    // }
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
        {/* private */}
        <Private>
          <Routes>
            <Route
              exact path='/biblioteca'
              element={<Biblioteca />}>
            </Route>
            <Route
              exact path='/aula1'
              element={<VideoAula1 />}>
            </Route>
            <Route
              exact path='/aula2'
              element={<VideoAula2 />}>
            </Route>
            <Route
              exact path='/aula3'
              element={<VideoAula3 />}>
            </Route>
            <Route
              exact path='/ex1'
              element={<Ex1 />}>
            </Route>
            <Route
              exact path='/ex2'
              element={<Ex2 />}>
            </Route>
            <Route
              exact path='/ex1'
              element={<Ex1 />}>
            </Route>
            <Route
              exact path='/ex1'
              element={<Ex1 />}>
            </Route>
            <Route
              exact path='/perfil'
              element={<Perfil />}>
            </Route>
          </Routes>

        </Private>
      </AuthProvider>
    </Router>

  )

}
export default AppRoutes
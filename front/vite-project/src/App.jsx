import { Routes, Route } from 'react-router-dom';
import Home from './view/Home/Home';
import Login from './view/Login/Login';
import MisTurnos from './view/MisTurnos/misTurnos';
import Register from './view/Register/Register';
import NotFound from './components/Not found/NotFound';
import Navbar from './components/Navbar/Navbar';
import { useState, useEffect, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { UsersContext } from './context/UsersContex';
import AgendarCita from './view/AgendarTurno/AgendarTurno';


function App() {

  const [isNotFound, setIsNotFound] = useState(false);
  const { user} = useContext(UsersContext)

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {

    const validateRoutes = ["/", "/login", "/register", "/misturnos",  "/agendarCita"];
    if (!validateRoutes.includes(location.pathname)) setIsNotFound(true)
    else  setIsNotFound(false)

    if (!user && (location.pathname !== "/login" && location.pathname !== "/register")) {
      navigate("/login");
    }
    
    if (user && (location.pathname === "/login" || location.pathname === "/register")) {
      navigate("/")
    }

    

  }, [user, navigate, location.pathname]);

  return (
    <>
    {
      !user ? (    
          <main className={"body "}>
            <div className="container">
              <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              </Routes>
            </div>
          </main>
      ) : (
        <>
        {
          !isNotFound && (
          <header>
          <Navbar />
          </header>
          )
        }
        
        <main className={"body "}>
          <Routes>
            <Route path="/misturnos" element={<MisTurnos />} />
            <Route path="/agendarCita" element={<AgendarCita />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        </>
      )
    }
    </>
  )
}

export default App;

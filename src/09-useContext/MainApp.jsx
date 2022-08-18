import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage, AboutPage, LoginPage, Navbar } from "./";


export const MainApp = () => {
  return (
    <>
        <Navbar />
        <hr />

        <Routes>
          <Route path="/" element={ <HomePage /> }  />
          <Route path="login" element={ <LoginPage /> }  />
          <Route path="about" element={ <AboutPage /> }  />
          

          {/* Cuando no se hace match con una ruta */}
          {/* <Route path="/*" element={ <LoginPage /> } /> */}
          <Route path="/*" element={ <Navigate to="/about" /> } />

        </Routes>

    </>
  )
}

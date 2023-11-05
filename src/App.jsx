import { useEffect } from "react"
import { Navigate, Route, Routes, useNavigate } from "react-router-dom"
import Home from "./components/Home"
import { auth } from "./configuration/firebase.config"


function App() {

  const navigate = useNavigate();

  // Getting info of logged in individual
  useEffect(() => {
    const unsub = auth.onAuthStateChanged(userCred => {
      if (userCred) {
        console.log(userCred?.providerData[0]);
      } else {
        navigate("/home/auth", { replace: true });
      }
    })
  }, [])


  return (
    <div className="w-screen h-screen flex items-start justify-start overflow-hidden bg-[#131417] bg-gradient-to-tr from-[#1A1A4E] to-[#292A75]">
      <Routes>
        <Route path="/home/*" element={<Home />} />



        {/* If no route path matches*/}
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </div>
  )
}

export default App

import { Navigate, Route, Routes } from "react-router-dom"
import Home from "./components/Home"


function App() {


  return (
    <div className="w-screen h-screen flex items-start justify-start overflow-hidden bg-[#131417] bg-gradient-to-tr from-[#1A1A4E] to-[#292A75]">
      <Routes>
        <Route path="/home/*" element={<Home />} />

        

        {/* If no route path matches*/}
        <Route path="*" element={<Navigate to="/home"/>}/>
      </Routes>
    </div>
  )
}

export default App

import {Route, Routes} from 'react-router-dom'
import './App.css'
import Index from './Pages/Index'
import Register from './Pages/Register'
import ContactPage from './Pages/Contact'
import AllProduct from './Pages/product'
import { UserProvider } from './context/UserContext'
import UserVisitor from './Pages/Userspace'
import UpdateVisitor from './Pages/UpdateVisitor'



function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/product" element={<AllProduct />} />
        <Route path="/uservisitor" element={<UserVisitor />} />
        {/* <Route path="/read/id" element={<Read />} /> */}
        <Route path="/updatevisitor/:id" element={<UpdateVisitor/>} />

      </Routes>
    </UserProvider>
  )
}

export default App

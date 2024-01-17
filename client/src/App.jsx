import {Route, Routes} from 'react-router-dom'
import './App.css'
import Index from './Pages/Index'
import Register from './Pages/Register'
import ContactPage from './Pages/Contact'
import AllProduct from './Pages/Product'
import { UserProvider } from './context/UserContext'
import UserVisitor from './Pages/Userspace'
import UpdateVisitor from './Pages/UpdateVisitor'
import ProtectedRoute from './components/protectroute/ProtectedRoute'
import Visitorspace from './Pages/Visitorspace'
import CreateProduct from './Pages/AddProduct'
import ProductDetails from './Pages/ProductDetails'
import { CartProvider } from './context/CartContext'
import Cart from './Pages/Cart'
import Restaurant from './Pages/Restaurant'





function App() {
  return (
    <UserProvider>
      <CartProvider>
        <Routes>
          
        <Route path="/" element={<Index />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/product" element={<AllProduct />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/restaurant/:restaurantId" element={<Restaurant/>} />
        <Route path="/uservisitor" element={<ProtectedRoute><UserVisitor /></ProtectedRoute>} />
        <Route path="/visitor" element={<ProtectedRoute><Visitorspace /></ProtectedRoute>} />
        <Route path="/details/:productId" element={<ProductDetails />} />
        <Route path="/createproduct" element={<ProtectedRoute><CreateProduct /></ProtectedRoute>} />
        
        {/* <Route path="/read/id" element={<Read />} /> */}
        <Route path="/updatevisitor/:id" element={<ProtectedRoute><UpdateVisitor/></ProtectedRoute>} />

      </Routes>
      </CartProvider>
    </UserProvider>
  )
}

export default App

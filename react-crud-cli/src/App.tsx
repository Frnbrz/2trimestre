import { Route, Routes } from "react-router-dom"
import AddProduct from "./components/AddProduct"
import Header from "./components/Header"
import ProductsList from "./components/ProductsList"
import Tutorial from "./components/Tutorial"

function App() {
  return (
    <>
      <Header />
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<ProductsList />} />
          <Route path="/products" element={<ProductsList />} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/tutorials/:id" element={<Tutorial />} />
        </Routes>
      </div>
    </>
  )
}

export default App
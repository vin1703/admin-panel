import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
import Topbar from "./Components/Topbar/Topbar";
import Home from "./Pages/Home/Home";
import UserList from "./Pages/UserList/UserList";
import ProductList from "./Pages/ProductList/ProductList";
import Login from "./Pages/Login/Login";
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function App() {
  // const userString = localStorage.getItem("persist:root");
  // const user = userString ? JSON.parse(JSON.parse(userString).user) : null;
  // const admin = user?.currentUser?.isAdmin;

  const admin = useSelector(state=>state.user?.currentUser?.isAdmin);

  return (
    <Router>
      <Routes>
      <Route exact path="/" element={admin ? <Navigate to="/home" replace={true} /> : <Login />} />
        {admin && <Route path="/*" element={<PrivateRoutes />} />}
      </Routes>
    </Router>
  );
}

function PrivateRoutes() {
  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/users" element={<UserList />} />
          <Route exact path="/products" element={<ProductList />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

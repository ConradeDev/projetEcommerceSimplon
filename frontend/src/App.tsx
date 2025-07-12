/* eslint-disable @typescript-eslint/ban-ts-comment */
import {BrowserRouter, Route,Routes} from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";
import Home from "./pages/shopPage/Home";
import Register from "./pages/shopPage/Register";
 
import Login from "./pages/shopPage/Login";
import AdminLayout from "./components/Admin/AdminLayout";

import { Toaster } from "sonner";
import Profile from "./pages/shopPage/Profile";
import AdminHomePage from "./pages/AdminPage/AdminHomePage";
import UserManagement from "./components/Admin/UserManagement";


// import { Provider } from "react-redux";

// // @ts-expect-error

// import store from "./redux/store"

const App = () => {
  return (
    // <Provider store={store}></Provider>
    <BrowserRouter 
    // future={{ v7_startTransition:true,v7_relativeSplatPath:true}}
    >
    <Toaster position="top-right"/>
    <Routes>
      <Route path="/" element={<UserLayout/>}>
        <Route index  element={<Home/>} />
        <Route path="electronique" element={<Home/>}  />
        <Route path="maison"  />
        <Route path="beaute"/>
        <Route path="contact"/>
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register/>} />
        <Route path="profile" element={<Profile/>} />
      </Route>
      <Route path="/admin" element={<AdminLayout/>}>
      <Route index  element={<AdminHomePage/>} />
      <Route path="users" element={<UserManagement/>}  />
      </Route>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App;

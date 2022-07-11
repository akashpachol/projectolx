import React,{useEffect,useContext} from 'react';
import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';


/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Create from "./Pages/Create";
import View from "./Pages/ViewPost";
import { AuthContext, FirebaseContext } from './Store/Context';
import Post from './Store/PostContext';

function App() {
const {setUser}=useContext(AuthContext)
const{firebase}=useContext(FirebaseContext)
  useEffect(() => {
 firebase.auth().onAuthStateChanged((user)=>{
  console.log(user);
  setUser(user)
 })
    
  }, [])
  
  
  return (
    <Post>
    <Router> 
    <div>
    
     <Routes>
        <Route exact path={'/'} element={<Home />} /> 
        
        
        <Route path={'/signup'} element={<Signup />} /> 
        
   
        <Route path={'/login'} element={  <Login />} /> 
      
        <Route path={'/create'} element={  <Create/>} /> 

        <Route path={'/viewpost'} element={<View />} /> 
     </Routes>
      
    </div>
    </Router>
    </Post>
  );
}

export default App;
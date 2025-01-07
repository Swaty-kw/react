import React from "react";
import { useState } from "react";
import UserContext from "./UserContext";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Leftmenu from "./components/Leftmenu"
import MainPage from './screens/MainPage'

  const App = ()=> 
  { const [user, setUser] = useState(!!localStorage.getItem("token"));

return ( 
  <div>

<UserContext.Provider value={[user, setUser]}>
        {/* <Footer/> */}
        {/* <Navbar/> */}
        {/* <Leftmenu/> */}
        <MainPage/>
       
      </UserContext.Provider>

  </div>
);

}


console.log(console.error)








export default App 
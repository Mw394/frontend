import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Main from './main/main';
import {useEffect, useState} from "react";
import { get } from './components/httpClient/httpClient';

function App() {
const  [loggedIn, setLoggedIn] = useState(false);


 useEffect(() => {
   get("auth/loggedIn", true, 9092).then((response) =>  {
     if (response.status == 200) {
       response.json().then((e) => {
         console.log(e)
         if (e.loggedIn) {
           setLoggedIn(true)
         } else {
           setLoggedIn(false)
         }
       })
     }
   })
 }, [])
 

const isLoggedin = (loggedIn) => {
  setLoggedIn(loggedIn);
}

  return (
    <div className="App">
      <Header loggedIn={loggedIn} setLoggedIn={isLoggedin}/>
      <Main loggedIn={loggedIn} setLoggedIn={isLoggedin}/>
      <Footer loggedIn={loggedIn} setLoggedIn={isLoggedin}/>
    </div>
  );
}

export default App;

import { useEffect } from "react";
import Chat from "./components/chat/Chat"
import Details from "./components/details/Detaisl"
import List from "./components/list/List"
import Login from "./components/login/Login";
import Notification from "./components/notification/Notification";
import { onAuthStateChanged} from "firebase/auth";
import { auth } from "./lib/firebase";
import { useUserStore } from "./lib/userStore";


const App = () => {


  const {current,isLoading,fetchUserInfo} = useUserStore()

  useEffect(()=>{
    const unSub = onAuthStateChanged(auth,(user)=>{
      fetchUserInfo(user.uid);
    });

    return()=>{
      unSub();
    };
  },[fetchUserInfo]);



  if(isLoading) return <div className="loading">Loading...</div>

  return (
    <div className='container'>
      {current?( <><List/>
      <Chat/>
      <Details/>
      </>):
      (<Login/>)}
     <Notification/>
    </div>
  )
}

export default App
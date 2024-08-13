import ChatList from '../chatList/ChatList';
import Userinfo from '../Userinfo.jsx/Userinfo';
import './List.css';
const List=()=>{
    return (
       <div className='list'>
        <Userinfo/>
        <ChatList/>
       </div>
    )
}

export default List

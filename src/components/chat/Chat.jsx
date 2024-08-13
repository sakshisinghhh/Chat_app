
import { useEffect, useRef, useState } from 'react'
import './Chat.css'
import EmojiPicker from 'emoji-picker-react'

const Chat=()=>{
  
    const[open, setOpen] = useState(false);
    const[text, settext] = useState("");


    const endRef = useRef(null);
    useEffect(()=>{
        endRef.current?.scrollIntoView({behavior:'smooth'})
    },[]);

    const handleEmoji = (e) =>{
        settext((prev)=>prev + e.emoji);
        setOpen(false)
       };


     return (
        <div className='chat'>
            <div className="top">
                <div className="user">
                    <img src='./avatar.png' alt=''/>
                    <div className="text">
                        <span>Jane Doe</span>
                        <p>Lorem ipsum dolor, sit amet.</p>
                    </div>
                </div>
                <div className="icon">
                    <img src='./phone.png' alt=''/>
                    <img src='./video.png' alt=''/>
                    <img src='./info.png' alt=''/>
                </div>
            </div>
            <div className="center">
                

                <div className="message">
                    <img src='./avatar.png' alt=''/>
                    <div className="texts">
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi aliquid quod hic ipsum accusantium voluptate veritatis? Aspernatur enim ducimus ullam, recusandae possimus placeat reprehenderit, perspiciatis maiores quibusdam, pariatur culpa laborum.
                        </p>
                        <span>1 Min ago</span>
                    </div>
                </div>

                <div className="message own">
                    
                    <div className="texts">
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi aliquid quod hic ipsum accusantium voluptate veritatis? Aspernatur enim ducimus ullam, recusandae possimus placeat reprehenderit, perspiciatis maiores quibusdam, pariatur culpa laborum.
                        </p>
                        <span>1 Min ago</span>
                    </div>
                </div>

                <div className="message">
                    <img src='./avatar.png' alt=''/>
                    <div className="texts">
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi aliquid quod hic ipsum accusantium voluptate veritatis? Aspernatur enim ducimus ullam, recusandae possimus placeat reprehenderit, perspiciatis maiores quibusdam, pariatur culpa laborum.
                        </p>
                        <span>1 Min ago</span>
                    </div>
                </div>

                
                <div className="message own">
                    
                    <div className="texts">
                        <img src='https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cq_auto:eco%2Cw_1200/MTk3MjI5OTczMDA0NjI0OTc5/cute-pet-names.png' alt=''/>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi aliquid quod hic ipsum accusantium voluptate veritatis? Aspernatur enim ducimus ullam, recusandae possimus placeat reprehenderit, perspiciatis maiores quibusdam, pariatur culpa laborum.
                        </p>
                        <span>1 Min ago</span>
                    </div>
                </div>

                <div ref = {endRef}></div>
            </div>
            <div className="bottom">
                <div className="icons">
                    <img src='./img.png' alt=''/>
                    <img src='./camera.png' alt=''/>
                    <img src='./mic.png' alt=''/>
                     </div>
                    <input type='text' placeholder='Type a message...'
                    value={text}
                    onChange={(e)=>settext(e.target.value)}></input>
                    <div className='emoji'>
                        <img src='./emoji.png' alt='' onClick={()=>setOpen(prev => !prev)}/>
                        <div className="picker">
                        <EmojiPicker open={open} onEmojiClick={handleEmoji}/>
                        </div>
                    </div>

                    <button className='sendButton'></button>
                </div>
            
        </div>
     )
}

export default Chat

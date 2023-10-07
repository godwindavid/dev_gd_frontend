import React, { useEffect, useRef, useState } from 'react'
import { UserService } from '../../services/userService'
import { Box } from '@mui/material'
import SendIcon from "../../assets/sendIcon2.png"
import { io } from "socket.io-client";

function UserListPage() {

    const socket = io('http://localhost:4000');
    const userService = new UserService()
    const [allUsers, setAllUsers] = useState([])
    const [activeUser, setActiveUser] = useState(0)
    const [message, setMessage] = useState("")

    const getallUsers = async () => {
        const resPonse = await userService.getUsers({})
        setAllUsers(resPonse.data);
    }

    const handleChange = (e) => {
        setMessage(e.target.value)
    }

    const handleSend = (e) => {
        socket.on('connect', () => {
            console.log('Connected to the server');
        });
    }

    useEffect(() => {
        getallUsers()
    }, [])

    useEffect(() => {
        
        return () => {
            socket.disconnect();
        };
    }, []);

    return (
        <Box className="userListPage">
            {
                allUsers.length ? allUsers.map((ele, index) => (
                    <Box key={index} className={`eachUser${activeUser === index ? " active" : ""}`} onClick={() => setActiveUser(index)}>
                        <div className="leftpart"><div className='online'></div>
                            {ele.name}
                        </div>
                        <div style={activeUser === index ? {} : { display: "none" }} className="rightpart">
                            <input onChange={handleChange} type="text" placeholder='Type message' value={message} />
                            <img src={SendIcon} alt="" onClick={()=>handleSend({name: ele.name,message})}/>
                        </div>
                    </Box>
                )) : <></>
            }
        </Box>
    )
}

export default UserListPage
import React,{forwardRef} from 'react';
import {Card,CardContent,Typography} from '@material-ui/core';
import './Message.css'

const Message= forwardRef(({message,username},ref)=>{
    const isUser = username === message.username;
    return (
        <div ref={ref} className={`message__card ${isUser &&'message__user'}`}>
            <Card className={isUser ? 'message__usercard':'message__guestcard'} >
                <CardContent>
                    <Typography color="white" variant="h7" component="h5">
                        {!isUser && `${message.username||"Unknown_user"}:`}{message.message}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )

})
export default Message;

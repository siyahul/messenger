import React,{useState, useEffect } from 'react';
import {Button,FormControl,InputLabel,Input} from '@material-ui/core';
import Message from './Massage'
import './App.css';
import db from './firebase'
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import {IconButton} from '@material-ui/core';

function App() {
  const [input,setInput]=useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect (()=>{
    db.collection('Messages')
    .orderBy('timestamp','desc')
    .onSnapshot(snapshot =>{
      setMessages(snapshot.docs.map(doc =>({id: doc.id, message: doc.data()})))
    });
  },[])


  useEffect (()=>{
    setUsername(prompt('Please Enter your name...'));
  },[]);

  const sendMessage =(event) => {
    event.preventDefault();

    db.collection('Messages').add({
      message:input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }

  console.log(input);
  console.log(messages);
  /*const sendMessage = (event) => {
    event.preventDefault();
    setMessages([...messages,{username:username,message:input}]);
    
  }*/
  return (
    <div className="App">
      <h1 className="App__h1"> ...Hello haq's friends lets chat 😝...</h1>
      <h2 className="App__h2">Hey {username} how are you?...</h2>
      <form className="app__form">
        <FormControl className="app__formcontrol">
          
          <Input className="app__input" placeholder="Enter a message..." value={input} onChange={event => setInput(event.target.value)}/>
          <IconButton className="app__iconButton" disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>
          <SendIcon />
          </IconButton>
        </FormControl>
      </form>
      <FlipMove>
        {messages.map(({id,message}) =>(
          <Message key={id} username={username} message={message}/>
        ))}
      </FlipMove>

      

    </div>
  );
}

export default App;

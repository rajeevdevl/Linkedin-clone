import { useEffect, useState } from 'react';
import CreateIcon from '@material-ui/icons/Create';
import InputOption from '../../Components/InputOption/InputOption';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import './feed.css';
import Post from '../../Components/Post/Post';
import { db } from '../../firebase';
import firebase from 'firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import FlipMove  from 'react-flip-move';



const Feed = () => {
    const [input,setInput] = useState("");
    const [posts,setPosts] = useState([]);
    const user = useSelector(selectUser);

   useEffect(() => {
       db.collection("posts").orderBy('timestamp','desc').onSnapshot(snapshot => 
       setPosts(
           snapshot.docs.map((doc) => (
            {
           id:doc.id,
           data:doc.data(),
            }
       )))
       );
   },[])

     const sendPost = (e) => {
        e.preventDefault();
        db.collection("posts").add({
            name:user.displayName,
            description:user.email,
            message:input,
            photoUrl:user.photoUrl || '',
            timestamp:firebase.firestore.FieldValue.serverTimestamp()
        });

        setInput('')
    }
    return (
        <section className="feed">
             <div className="feed__inputContainer">
                 {/* input field */}
                 <div className="feed__input">
                     <CreateIcon />
                     <form action="#">
                         <input type="text" onChange={(e) => setInput(e.target.value)} value={input}/>
                         <button onClick={sendPost} type="submit">Send</button>
                     </form>
                  </div>
                {/* input options */}
                 <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} title="photo" color="#70b5f9"/>
                    <InputOption Icon={SubscriptionsIcon} title="video" color="#e7a33e"/>
                    <InputOption Icon={EventNoteIcon} title="Event" color="#cocbcd"/>
                    <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#7fc15e"/>
                 </div>
             </div>

            {/* map through the posts */}
            <FlipMove>
                {posts.map(({id,data:{name,description,message,photoUrl}}) => (
                <Post 
                key={id} 
                name={name} 
                description={description} 
                message={message} 
                photoUrl={photoUrl}
                />
                ))}
            </FlipMove>
            
        </section>
    )
}

export default Feed;
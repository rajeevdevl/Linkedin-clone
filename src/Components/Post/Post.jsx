import { Avatar } from '@material-ui/core';
import InputOption from '../InputOption/InputOption';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon  from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import './post.css';
import { forwardRef } from 'react';

const Post = forwardRef(({name,description,message,photoUrl},ref) => {

return(
    <section ref={ref} className="post">
        {/* Post with name and descriptio about the user */}
        <header className="post__header">
            <Avatar src={photoUrl}></Avatar> 
            <div className="post__info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </header>
{/* Post with the message of user */}
        <section className="post__body">
            <p>{message}</p>
        </section>

        <div className="post__buttons">
            <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray"/>
            <InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray"/>
            <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray"/>
            <InputOption Icon={SendOutlinedIcon} title="Send" color="gray"/>
        </div>
    </section>
)
})

export default Post;
import { Avatar } from '@material-ui/core'
import { useSelector } from 'react-redux';
import RecentItem from '../../Components/recentItem/RecentItem';
import { selectUser } from '../../features/userSlice';
import './sidebar.css'

const Sidebar = () => {

    const user = useSelector(selectUser)

    return(
        <section className="sidebar">
            {/* Top part of the sidebar havign avatar,name... */}
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fGNvbG9yZnVsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="colorful background" />
                <Avatar src={user.photoUrl} className="sidebar__avatar">{user.email[0]}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>

{/* middle part of the sidebar having status */}
            <div className="sidebar__stats">
                 <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">2,520</p>
                 </div>
                 <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">3,453</p>
                 </div>
            </div>

            {/* Bottom part of the sidebar */}
            <div className="sidebar__bottom">
                <p>Recent</p>
              <RecentItem topic="reactJs"/>
              <RecentItem topic="Programming"/>
              <RecentItem topic="Design"/>
              <RecentItem topic="javaScript"/>
              <RecentItem topic="Responsive"/>
              <RecentItem topic="Firebase"/>
            </div>
        </section>
    )
}

export default Sidebar;
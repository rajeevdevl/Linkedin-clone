import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from '../../Components/HeaderOption/HeaderOption'
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import './header.css';
import { useDispatch} from 'react-redux';
import { logout} from '../../features/userSlice';
import { auth } from '../../firebase';

const Header = () => {
    
    const dispatch = useDispatch();

    const logOutApp = () => {
        dispatch(logout())
        auth.signOut();
    }

    return( 
    // the header container
    <header className="header">

    {/* Linkedin logo with the search bar */}
    <div className="header__left">
        <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="linkedin logo" />

        <div className="header__search">
            <SearchIcon/>
            <input type="text" placeholder="Search"/>
        </div>
    </div>

{/* other header options  */}
    <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home"/>
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption avatar={true} title="Me" onClick={logOutApp}/>
    </div>
    </header>
    )
}

export default Header;
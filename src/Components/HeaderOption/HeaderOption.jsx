import { Avatar } from '@material-ui/core';
import './headerOption.css';


const HeaderOption = ({avatar, Icon,title,onClick}) => {


return (
    <div onClick={onClick} className="headerOption">
        {Icon && <Icon className="headerOption__icon" />}
        {avatar && <Avatar className="headerOption__icon" />}
        <h3 className="headerOption__title">{title}</h3>
    </div>
)
}

export default HeaderOption;
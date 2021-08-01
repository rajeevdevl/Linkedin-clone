 import './recentItem.css';
 const RecentItem = ({topic}) => {
        return (
            <div className="recentItem">
                <span className="recentItem__hash">#</span>
                <p>{topic}</p>
            </div>
        )
    }

    export default RecentItem;
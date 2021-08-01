import { FiberManualRecord } from '@material-ui/icons';
import './newsArticle.css';

const NewsArticle = ({heading,subtitle}) => {
    return(
        <article className="newsArticle">
            <div className="newsArticle__left">
                <FiberManualRecord />
            </div>
            <div className="newsArticle__right">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </article>
    )
}

export default NewsArticle;
import InfoIcon from '@material-ui/icons/Info';
import NewsArticle from '../../Components/newsArticle/NewsArticle';
import news from '../../../src/news';
import './widget.css';

const Widgets = () => {


    return(
    <section className="widgets">
        <div className="widgets__header">
            <h2>Linkedin News</h2>
            <InfoIcon/>
        </div>

        {news.map((data) => {
        return <NewsArticle key={data.id} heading={data.heading} subtitle={data.subtitle}/>}
        )}
    </section>
    )
}

export default Widgets;
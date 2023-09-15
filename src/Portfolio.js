import image1 from './images1.jpg';
import image2 from './images2.jpg';
import image3 from './images3.jpg';

const Portfolio = () => {
    return (
        <div className="portfolio">
            <h1>Portfolio</h1>
            <div className="grid-container">
                <div className='grid-item'>
                    <div className="item-content">
                        <img src={image1} alt="portfolio1" />
                        <label>Portfolio Website</label>
                    </div>
                </div>
                <div className='grid-item'>
                    <div className="item-content">
                        <img src={image2} alt="portfolio2" />
                        <label>Job Hunt Tracker</label>
                    </div>
                </div>
                <div className='grid-item'>
                    <div className="item-content">
                        <img src={image3} alt="portfolio3" />
                        <label>Patient Name Sorter</label>
                    </div>
                </div>
                <div className='grid-item'>
                    <div className="item-content">
                        <img src={image1} alt="portfolio4" />
                        <label>Journey to Web Dev Pro</label>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Portfolio;
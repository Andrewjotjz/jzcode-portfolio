import image1 from './portfolio-website.jpg';
import image2 from './job-hunt-tracker.jpg';
import image3 from './patient-name-sorting.jpg';
import image4 from './inventory-mng-system.jpg';

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
                        <img src={image4} alt="portfolio4" />
                        <label>Inventory Management System</label>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Portfolio;
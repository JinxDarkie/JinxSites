/*Template of a website page. App should basically determine which page to load through a function that takes an input string
* and goes to the Landing.js component of the folder with that name. Ideally one day I wanna have a way to automatically create
* webpages from some Google Spreadsheet thing or convenient interface/free server.
*/

import {Link} from 'react-router-dom';


const Landing = () => {
    return (
        <main>
            <nav>
                <Link to="/Wiki" className='nav-item'>Lore Wiki</Link>
            </nav>
        </main>
    );
}

export default Landing;
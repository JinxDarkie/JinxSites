import {Link} from 'react-router-dom';

const Wiki = () => {
    return (
        <main>
            <nav>
                <Link to="/JinxSites" className='nav-item'>Home</Link>
            </nav>
            <div className='Line'>
                <p>Registering user...</p>
            </div>
            <div className='Line'>
                <p>...</p>
            </div>
            <div className='Line'>
                <p>Registered.</p>
            </div>
            <div className='Line'>
                <p>WELCOME, CITIZEN</p>
            </div>
            <div className='Line'>
                <p>Select category.</p>
            </div>
            <div className='Line'>
                <ul>
                    <li>[CATEGORY]</li>
                    <li>[CATEGORY]</li>
                    <li>[CATEGORY]</li>
                </ul>
            </div>
        </main>
    );
}

export default Wiki;
import React from 'react';
import { Link } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css'; // tu brak zdefiniowanej klasy .navbar-header
//import 'bootstrap/dist/css/bootstrap-theme.css'; // nie ma takiego komponentu w paczce bootstrapa

// poniższa wersja <Navigation> ma usuniętę dwie klasy bootstrapowe, które chowały menu; oryginalny plik z kursu wykomentowany poniżej
const Navigation = props => (
    <div>
        <nav>
            <div className='container-fluid'>
                <div className='navbar-header'>
                    <Link className='navbar-brand' to='/'>Państwa.js</Link>
                </div>
                <div>
                    <ul className='nav navbar-nav'>
                        <li><Link to='/countries'>Countries</Link></li>
                        <li><Link to='/continents'>Continents</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
        <div className='container-fluid'>
            {props.children}
        </div>
    </div>
);

/*
const Navigation = props => (
    <div>
        <nav className='navbar navbar-default'> // -------------------- tu usunięty className --------------------
            <div className='container-fluid'>
                <div className='navbar-header'>
                    <Link className='navbar-brand' to='/'>Państwa.js</Link>
                </div>
                <div className='collapse navbar-collapse'> // -------------------- tu usunięty className --------------------
                    <ul className='nav navbar-nav'>
                        <li><Link to='/countries'>Countries</Link></li>
                        <li><Link to='/continents'>Continents</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
        <div className='container-fluid'>
            {props.children}
        </div>
    </div>
);
*/

export default Navigation;
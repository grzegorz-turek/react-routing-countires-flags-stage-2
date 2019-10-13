import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Navigation from './presentational/navigation.component';
import Home from './presentational/home.component';
import Contact from './presentational/contact.component';
import NotFound from './presentational/not-found.component';

// -------------------- TEST START --------------------
const Countries = () => <h1>COUNTRIES</h1>
const Continents = () => <h1>CONTINENTS</h1>
// -------------------- TEST STOP --------------------

export default (
    <Route path='/' component={Navigation}>
        <IndexRoute component={Home} />
        <Route path='/countries' component={Countries} />
        <Route path='/continents' component={Continents} />
        <Route path='/contact' component={Contact} />
        <Route path='*' component={NotFound} />
    </Route>
);
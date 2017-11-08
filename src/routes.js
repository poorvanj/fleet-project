import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Home from './components/home';
import AirProviders from './components/airproviders.js';
import OceanProviders from './components/oceanproviders.js';
import CustomBrokerProviders from './components/custombrokerproviders.js';
import Landing from './components/landing';

export default (
	<Route path="/" component={ Home } >
	    <IndexRoute component={ Landing }/>
		<Route path="air" component={ AirProviders } />
		<Route path="ocean" component={ OceanProviders } />
		<Route path="customBroker" component={ CustomBrokerProviders } />
	</Route>
);
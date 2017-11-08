import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';

export default class Home extends Component {
    constructor(props) {
    	super(props);
    	this.state = {
    		loading: true
    	}
    }

    render() {
        return (
        	<div>
        	    <Header path={this.props.location.pathname}/>
          			{this.props.children}
          		<Footer/>
          	</div>
        );
    }
}


import React, { Component } from 'react';
import { connect } from 'react-redux';
import {browserHistory} from 'react-router';
import { bindActionCreators } from 'redux';
import { providerSelected }from '../actions/index';

class OceanProviders extends Component {

	constructor(props) {
    	super(props);
    	this.state = {
    		loading: true
    	}
    }

	componentWillMount() {
		
		let elem = this;
      	var promise = new Promise(function(resolve, reject) {
			let res;
			if(res = elem.props.providerSelected('air')) {
				resolve(res);
			}
			else {
				reject(res);
			}
		});

		promise
		.then(function(){
			elem.removeLoader();
		})
		.catch(e => {
			console.log(e);
		});
	}

	removeLoader() {
		setTimeout(() => this.setState({ loading: false }), 1500);
	}

	render() {

		if(this.state.loading == true) {

  			return(<div className="loader-container">
  				       <div className="loader-screen">Loading your experience ...</div>
  				   </div>);
      	}


		let result = [];
		this.props.providers.map(function(elem, index) {
			if(result.length < 21 && elem.yearStarted >= 2010)
				result.push(elem);
		});

		result.sort(function(a,b) {
			if(a.companyName < b.companyName) return -1;
			if(a.companyName > b.companyName) return 1;
			return 0;
		});
		let count = 0;
		let final = result.map(function(elem, index) {
				count++;
				return (<li className="provider-block" key={elem.companyName}><img src={ elem.images['Company Logo'].url }/><span>{elem.companyName}</span></li>);
		});
		return (<div className="home-container"><h1 className="heading">{count} Air Providers</h1><ul className="providers"> { final } </ul></div>);
	}
}

function mapStateToProps(state) {
	return {
		providers: state.providers
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({providerSelected: providerSelected}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(OceanProviders);

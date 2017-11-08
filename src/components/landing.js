import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { providerSelected }from '../actions/index';
import { Redirect } from 'react-router';
import {browserHistory} from 'react-router';


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			redirect: false
		}

	}

	setProvider(providerType) {
		this.props.providerSelected(providerType);
		browserHistory.push('/' + providerType);
	}

	render() {
		return (<div className="home-container">
      	<div className="air-container" onClick={() => this.setProvider('air')}>
      		<FontAwesome className="user-fonts" name='plane' size='5x'/>
      		<span className="title">Air</span>
      	</div>

      	<div className="ocean-container" onClick={() => this.setProvider('ocean')}>
      		<FontAwesome className="user-fonts" name='ship' size='5x'/>
      		<span className="title">Ocean</span>
      	</div>

      	<div className="customs-container" onClick={() => this.setProvider('customBroker')}>
      		<FontAwesome className="user-fonts" name='street-view' size='5x'/>
      		<span className="title">Customs Brokers</span>
      	</div>
      </div>);
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


export default connect(mapStateToProps, mapDispatchToProps)(App);
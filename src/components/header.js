import React, { Component } from 'react';

class Header extends Component {
	
	render() {
		let headerBottomText = "";

		switch(this.props.path) {
		case '/air': headerBottomText = "Air Providers";
						break;
		case '/ocean': headerBottomText = "Ocean Providers";
						break;
		case '/customBrokers': headerBottomText = "Custom Broker Providers";
						break;

		default: headerBottomText = "Popular Services";
	}

	 	return(<div>
				<div className="header">
					<div>DEMO</div>
					<div>Log In</div>
				</div>
				<div className="header-bottom">{ headerBottomText }</div>
		       </div>);
	}
}

export default Header;
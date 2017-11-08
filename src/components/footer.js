import React, { Component } from 'react';

const Footer = function() {
	return (<div className="footer">
				<div className="footer-container">
					<div className="column">
						<a href="#">Home</a>
						<a href="#">Manage Account</a>
						<a>Help</a>
					</div>
					<div className="column">
						<a href="#">Terms & Conditions</a>
						<a href="#">Privacy Policy</a>
						<a href="#">Collection Statement</a>
					</div>
					<div className="column column-icons">
						<a href="#"><img src="/src/assets/facebook.svg"/></a>
						<a href="#"><img src="/src/assets/twitter.svg"/></a>
						<a href="#"><img src="/src/assets/linkedin.svg"/></a>
					</div>
					<div className="base">
						<p>Copyright ©2017 Fleet Demo</p>
					</div>
				</div>
			</div>);
}

export default Footer;
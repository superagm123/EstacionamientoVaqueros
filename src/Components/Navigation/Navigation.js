import React from 'react';
import './Navigation.css';
import Bars from '../img/bars.svg';
import Logo from '../Logo/Logo.js';

const Navigation = ({scrollNavigation, responsiveNavigation}) => {
	return(
		<React.Fragment>
			<header className="header bg-green shadow-5 pa3">
			<div className="logo-container mt3 flex justify-center items-center">
				<a href="#about"><Logo></Logo></a>
				<h1 
				className="near-white baskerville animate__animated 
				animate__lightSpeedInRight animate__infinite infinite
				animate__slow logo-title">
				estacionamiento vaqueros
				</h1>
			</div>
				<div 
				className="mobile-menu"
				onClick={responsiveNavigation}
				>
					<img alt="responsive menu" src={Bars}/>
				</div>
				<nav className="f2 links ttu">
					<a
					href="#about"
					className="mr2 hover-light-yellow pointer near-white grow no-underline"
					onClick={scrollNavigation}>
					inicio
					</a>
					<a 
					href="#services"
					className="mr2 hover-light-yellow pointer near-white grow no-underline"
					onClick={scrollNavigation}
					>
					servicios
					</a>
					<a 
					href="#location" 
					className="mr2 pointer hover-light-yellow  near-white grow no-underline"
					onClick={scrollNavigation}>
					ubicación
					</a>
					<a 
					href="#contact" 
					className="grow pointer hover-light-yellow  near-white no-underline"
					onClick={scrollNavigation}>
					contacto
					</a>
				</nav>
			</header>
		</React.Fragment>
	);
}

export default Navigation; 
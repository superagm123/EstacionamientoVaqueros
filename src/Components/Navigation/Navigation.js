import React from 'react';
import './Navigation.css';
import Bars from '../img/bars.svg';

const Navigation = ({scrollNavigation, responsiveNavigation}) => {
	return(
		<React.Fragment>
			<header className="header bg-green shadow-5 pa4">
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
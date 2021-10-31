import React from 'react';
import './Navigation.css';

const Navigation = ({scrollNavigation}) => {
	return(
		<React.Fragment>
			<header className="header">
				<nav className="bg-green f2 links shadow-5 pa4 ttu">
					<a
					href="#about"
					className="mr2 pointer near-white grow no-underline"
					onClick={scrollNavigation}>
					inicio
					</a>
					<a 
					href="#services"
					className="mr2 pointer near-white grow no-underline"
					onClick={scrollNavigation}
					>
					servicios
					</a>
					<a 
					href="#location" 
					className="mr2 pointer near-white grow no-underline"
					onClick={scrollNavigation}>
					ubicación
					</a>
					<a 
					href="#contact" 
					className="grow pointer near-white no-underline"
					onClick={scrollNavigation}>
					contacto
					</a>
				</nav>
			</header>
		</React.Fragment>
	);
}

export default Navigation; 
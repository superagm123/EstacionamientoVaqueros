import React from 'react';
import './Navigation.css';

const Navigation = () => {
	return(
		<React.Fragment>
			<header className="header">
				<nav className="bg-green f2 shadow-5 pa4 ttu">
					<a href="#" className="mr2 pointer near-white grow no-underline">inicio</a>
					<a href="#" className="mr2 pointer near-white grow no-underline">servicios</a>
					<a href="#" className="mr2 pointer near-white grow no-underline">ubicación</a>
					<a href="#" className="grow pointer near-white no-underline">contacto</a>
				</nav>
			</header>
		</React.Fragment>
	);
}

export default Navigation; 
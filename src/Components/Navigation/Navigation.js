import React from 'react';
import './Navigation.css';

const Navigation = () => {
	return(
		<nav className="bg-green f2 shadow-5 pa4 ttu">
			<p className="mr2 pointer near-white grow no-underline">inicio</p>
			<p className="mr2 pointer near-white grow no-underline">servicios</p>
			<p className="mr2 pointer near-white grow no-underline">ubicación</p>
			<p className="grow pointer near-white no-underline">contacto</p>
		</nav>
	);
}

export default Navigation; 
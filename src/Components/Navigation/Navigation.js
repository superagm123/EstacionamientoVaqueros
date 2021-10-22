import React from 'react';
import './Navigation.css';

const Navigation = () => {
	return(
		<nav className="bg-green f2 shadow-5 pa4 ttu">
			<p href="#" className="mr2 pointer near-white grow no-underline">inicio</p>
			<p href="#" className="mr2 pointer near-white grow no-underline">servicios</p>
			<p href="#" className="mr2 pointer near-white grow no-underline">ubicación</p>
			<p href="#" className="grow pointer near-white no-underline">contacto</p>
		</nav>
	);
}

export default Navigation; 
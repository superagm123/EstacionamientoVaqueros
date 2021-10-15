import React from 'react';
import './Navigation.css';

const Navigation = () => {
	return(
		<nav className="pa3 pointer ttu">
			<a href="#" className="mr2 near-white grow no-underline">inicio</a>
			<a href="#" className="mr2 near-white grow no-underline">nosotros</a>
			<a href="#" className="mr2 near-white grow no-underline">ubicación</a>
			<a href="#" className="grow near-white no-underline">contacto</a>
		</nav>
	);
}

export default Navigation; 
import React from 'react'; 
import './Footer.css';

const Footer = () => {
	let date = new Date().getFullYear();
	return(
		<React.Fragment>
			<footer className="tc bg-green near-white">
				<h1 className="f2">Estacionamiento Vaqueros</h1>
				<p className="f2">
				{`Estacionamiento Vaqueros - Todos los derechos reservados ${date}`} 
				&copy;
				</p>
			</footer>
		</React.Fragment>
	);
}

export default Footer;
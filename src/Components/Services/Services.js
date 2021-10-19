import React from 'react';
import './Services.css';

const Services = () => {
	return(
		<div className="bg-light-red tc container near-white">
			<h1 className="f-subheadline f-subheadline about-title">Sobre Nosotros</h1>
			<div className="services">
				<div className="service">
					<h1 className="service-title"></h1>
					<i className="service-icon"></i>
					<p className="service-content"></p>
				</div>
			</div>
		</div>//.container
	);
}

export default Services;
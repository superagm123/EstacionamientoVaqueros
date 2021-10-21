import React from 'react';
import './Services.css';
import Service from './Service/Service.js';

const Services = () => {
	return(
		<div className="bg-light-red tc container near-white">
			<h1 className="f-subheadline f-subheadline about-title">Servicios</h1>
			<div className="services">
				<Service 
				title="valet parking"
				icon = ""
				content = "
				Sed eleifend, nisi sit amet cursus cursus, nunc odio interdum erat, 
				id tempus felis enim ac nisi. Integer auctor nunc eget nibh efficitur gravida.
				Cras vel ex lobortis elit volutpat fermentum vitae vel nisl.
				"
				></Service>
				<Service 
				title="techado"
				icon = ""
				content = "
				Nullam non dictum felis. Pellentesque sagittis vestibulum elit, nec tincidunt 
				quam fermentum sit amet. Sed imperdiet ligula sed justo posuere, non iaculis 
				massa tincidunt. 
				"
				></Service>
				<Service 
				title="Pension"
				icon = ""
				content = "
				Nullam non dictum felis. Pellentesque sagittis vestibulum elit, 
				nec tincidunt quam fermentum sit amet. Sed imperdiet ligula sed justo posuere,
				non iaculis massa tincidunt. 
				"
				></Service>
			</div>
		</div>//.container
	);
}

export default Services;
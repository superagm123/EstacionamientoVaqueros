import React from 'react';
import './Services.css';
import Service from './Service/Service.js';
import icon1 from './Icons/icon_1.png';
import icon2 from './Icons/icon_2.png';
import icon3 from './Icons/icon_3.png';

const Services = () => {
	return(
		<div id="services" className="bg-light-red mv6 tc container near-white">
			<h1 className="f-subheadline f-subheadline about-title">Servicios</h1>
			<div className="services">
				<Service 
				title="valet parking"
				icon = {icon1}
				link = "https://www.flaticon.com/authors/freepik"
				content = "
				Sed eleifend, nisi sit amet cursus cursus, nunc odio interdum erat, 
				id tempus felis enim ac nisi. Integer auctor nunc eget nibh efficitur gravida.
				Cras vel ex lobortis elit volutpat fermentum vitae vel nisl.
				"
				></Service>
				<Service 
				title="techado"
				link="https://www.flaticon.com/authors/those-icons"
				icon = {icon2}
				content = "
				Nullam non dictum felis. Pellentesque sagittis vestibulum elit, nec tincidunt 
				quam fermentum sit amet. Sed imperdiet ligula sed justo posuere, non iaculis 
				massa tincidunt. 
				"
				></Service>
				<Service 
				title="Pension"
				link=""
				icon = {icon3}
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
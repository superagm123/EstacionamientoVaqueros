import React from 'react';

const Service = ({title, icon, link, content}) => {
	return(
		<React.Fragment>
			<div className="service br4 shadow-5 grow pa4 bg-light-yellow black">
				<h1 className=" f1 service-title">{title}</h1>
				<a 
				href={link} 
				target="_blank"
				rel="noopener noreferrer">
					<img className="service-icon pointer" alt="icon" src={icon}/>
				</a>
				<p className="f2 service-content">{content}</p>
			</div>
		</React.Fragment>
	);
}

export default Service;
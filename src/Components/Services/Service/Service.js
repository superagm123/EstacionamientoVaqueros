import React from 'react';

const Service = ({title, icon, content}) => {
	return(
		<React.Fragment>
			<div className="service pa4 bg-light-yellow black">
				<h1 className=" f1 service-title">{title}</h1>
				<i></i>
				<p className="f2 service-content">{content}</p>
			</div>
		</React.Fragment>
	);
}

export default Service;
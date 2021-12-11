import React from 'react'; 
import LogoImage from '../img/logo.png'

const Logo = () => {
	return(
		<React.Fragment>
			<img 
			className="logo"
			src={LogoImage} 
			alt="site logo"
			style={{width: '7rem'}}/>
		</React.Fragment>
	);
}

export default Logo;
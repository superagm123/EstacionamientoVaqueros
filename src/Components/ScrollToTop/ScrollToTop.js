import React, {useEffect, useState} from 'react'; 
import {useWindowScroll} from 'react-use';
import './ScrollToTop.css';
import Arrow from '../img/Arrow.png';

const ScrollToTop = () => {
	const {y: pageYOffset} = useWindowScroll();
	const [visible, setVisibility] = useState(false);

	useEffect(() => {
		pageYOffset > 800 ? setVisibility(true) : setVisibility(false);
	}, [pageYOffset]);

	if(!visible) return false;
	
	return(
		<React.Fragment>
			<div className="scrollTop bg-light-red pointer shadow-2 hover-bg-red"
			onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}
			>
				<img className="scrollIcon" alt="arrow icon" src={Arrow}/>
			</div>
		</React.Fragment>
	);
}

export default ScrollToTop;
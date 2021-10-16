import React from 'react';
import Car from './Car.png';
import './Story.css';

const Story = () => {
	return(
		<div className="story-container">
			<div className="image center">
				<a href="https://www.pexels.com/photo/photography-of-gray-sports-car-919073/" rel="noopener noreferrer nofollow" target="_blank">
					<img alt="Car" src={Car}/>
				</a>
			</div>
			<div className="tc athelas">
				<h1 className="f-subheadline lh-title">Nuestra Historia</h1>
				<p className="f2 lh-solid">
				  Nullam mattis mauris nec accumsan consectetur. Morbi sed ipsum urna. Ut quis lorem luctus, cursus neque sit amet, imperdiet massa.
				  Nullam lobortis mauris sit amet enim tristique porta. Pellentesque justo ante, aliquam ut porttitor vel, volutpat non enim. Nullam ac justo magna. Suspendisse porttitor molestie neque vitae pretium. Maecenas cursus est in magna iaculis pretium. Suspendisse vitae felis ac dolor convallis venenatis vitae auctor purus.
				</p>
			</div>
		</div>//image-container
	);
}

export default Story;
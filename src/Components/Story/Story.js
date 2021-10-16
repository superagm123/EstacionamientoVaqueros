import React from 'react';
import Car from './Car.png';
import Car2 from './Car2.png';
import './Story.css';

const Story = () => {
	return(
		<div className="story-container">
			<div className="image-container">
				<a href="#">
					<div className="image">
						<img alt="Car" src={Car}/>
					</div>
				</a>
				<a href="#">
					<div className="image image-position">
						<img alt="Car" src={Car2}/>
					</div>
				</a>
			</div>
			<div className="tc dib v-top athelas">
				<h1 className="f1 lh-title">Nuestra Historia</h1>
				<p className="f3 lh-solid">
				  Nullam mattis mauris nec accumsan consectetur. Morbi sed ipsum urna. Ut quis lorem luctus, cursus neque sit amet, imperdiet massa.
				  Nullam lobortis mauris sit amet enim tristique porta. Pellentesque justo ante, aliquam ut porttitor vel, volutpat non enim. Nullam ac justo magna. Suspendisse porttitor molestie neque vitae pretium. Maecenas cursus est in magna iaculis pretium. Suspendisse vitae felis ac dolor convallis venenatis vitae auctor purus.
				</p>
			</div>
		</div>//image-container
	);
}

export default Story;
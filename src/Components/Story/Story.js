import React from 'react';
import Car from './Car.png';
import Car2 from './Car2.png';
import './Story.css';

const Story = () => {
	return(
		<div className="image-container">
			<div>
				<a href="#">
					<div className="image">
						<img alt="Car" src={Car}/>
					</div>
				</a>
				<a href="#">
					<div className="image imagePosition">
						<img alt="Car" src={Car2}/>
					</div>
				</a>
			</div>
			<div className="tc">
				<h1>Nuestra Historia</h1>
				<p>
				  Nullam mattis mauris nec accumsan consectetur. Morbi sed ipsum urna. Ut quis lorem luctus, cursus neque sit amet, imperdiet massa.
				  Nullam lobortis mauris sit amet enim tristique porta. Pellentesque justo ante, aliquam ut porttitor vel, volutpat non enim. Nullam ac justo magna. Suspendisse porttitor molestie neque vitae pretium. Maecenas cursus est in magna iaculis pretium. Suspendisse vitae felis ac dolor convallis venenatis vitae auctor purus.
				</p>
			</div>
		</div>//imag-container
	);
}

export default Story;
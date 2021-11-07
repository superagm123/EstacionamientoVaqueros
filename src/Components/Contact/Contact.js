import React from 'react';
import './Contact.css'; 

const Contact = () => {
	return(
		<React.Fragment>
			<div id="contact" className="container mv6 bg-light-green near-white">
				<h1 className="f-subheadline tc">Contacto</h1>
				<form>
					<fieldset className="ba b--transparent ph0 mh0">
						<legend className="f1 tc fw6 ph0 mh0">
						Tus datos
						</legend>
						<div className="mt3">
							<label 
							className="db fw6 lh-copy f2"
							htmlFor="name">
							Nombre
							</label>
							<input 
							id="name"
							className="pa2 input-reset ba
							hover-bg-black hover-white w-100"
							type="text"/>
						</div>
						<div className="mv3">
							<label 
							className="db fw6 lh-copy f2"
							htmlFor="email">
							Correo electrónico
							</label>
							<input 
							id="email"
							className="pa2 input-reset ba
							hover-bg-black hover-white w-100"
							type="email"/>
						</div>
						<div className="mv3">
							<label 
							className="db fw6 lh-copy f2"
							htmlFor="message">
							Mensaje
							</label>
							<textarea 
							className="w-100 pa2 ba 
							hover-bg-black hover-white"
							rows="10">	
							</textarea>
						</div>
					</fieldset>
					<div className="flex justify-end">
						<input 
						className="b ph3 pv2 input-reset ba b--white w-50 grow 
						pointer near-white bg-green fw6 f3 dib"
						type="submit"/>
					</div>
				</form>
			</div>
		</React.Fragment>
	);
}

export default Contact;
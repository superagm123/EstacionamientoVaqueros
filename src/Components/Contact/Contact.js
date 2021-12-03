import React, {Component} from 'react';
import './Contact.css'; 

class Contact extends Component{
	constructor(){
		super();
		this.state = {
			name: '',
			email: '', 
			message: ''
		}
	}

	onNameChange = event => {
		this.setState({name: event.target.value});
	}

	onEmailChange = event => {
		this.setState({email: event.target.value}); 
	}

	onMessageChange = event => {
		this.setState({message: event.target.value});
	}

	cleanEntries = () => {
		let inputName = document.querySelector("#name");
		let inputEmail = document.querySelector("#email");
		let inputMessage = document.querySelector("#message");

		inputName.value = "";
		inputEmail.value = "";
		inputMessage.value = "";
	}

	onSubmitForm = event => {
		event.preventDefault();
		const {name, email, message} = this.state;
		const {cleanEntries} = this;
		if(name.length > 0 && email.length > 0 && message.length > 0){
			fetch('http://localhost:3001/send-email', {
				method: 'post',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({
					name: name,
					email: email,
					message: message 
				})
			})
			  .then(response => response.json())
			  .then(message => {
				  	if(message){
				  		alert('Error al enviar el mensaje');
				  	}
			  })
			  cleanEntries();
			}else{
				alert("El formulario no debe estar vacío");
			}
	}

	render(){
		const {onNameChange, onEmailChange, onMessageChange, onSubmitForm} = this;
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
							type="text"
							onChange={onNameChange}/>
						</div>
						<div className="mv3" >
							<label 
							className="db fw6 lh-copy f2"
							htmlFor="email">
							Correo electrónico
							</label>
							<input 
							id="email"
							className="pa2 input-reset ba
							hover-bg-black hover-white w-100"
							type="email"
							onChange={onEmailChange}/>
						</div>
						<div className="mv3">
							<label 
							className="db fw6 lh-copy f2"
							htmlFor="message">
							Mensaje
							</label>
							<textarea 
							id="message"
							className="w-100 pa2 ba 
							hover-bg-black hover-white"
							rows="10"
							maxlength="800"
							onChange={onMessageChange}>	
							</textarea>
						</div>
					</fieldset>
					<div className="flex justify-end">
						<input 
						className="b ph3 pv2 input-reset ba b--white w-50 grow 
						pointer near-white bg-green fw6 f3 dib"
						type="submit"
						value="Enviar"
						onClick={onSubmitForm}/>
					</div>
				</form>
			</div>
		</React.Fragment>
		);
	}
}

export default Contact;
import React, {Component} from 'react';
import Swal from 'sweetalert2';
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

	onRefreshPage = () => {
		window.location.reload();
	}

	onShowAlert = (message, icon) => {
		const {onRefreshPage} = this;
		Swal.fire(
			  	{
			  		title: `${message}`,
			  		text: 'presionar por fuera del mensaje o presionar el botón para cerrar',
			  		icon: `${icon}`,
			  		confirmButtonText: 'Cerrar'
			  	}
			  ).then(result => {
			  	if(result.value && icon === 'success'){
			  		onRefreshPage();
			  	}
			  });
	}

	onEmailValidation = email => {
		const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
		return emailPattern.test(email);
	}

	onSendingEmail = (url, name, email, message) => {
		fetch(url, {
				method: 'post',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({
					name: name,
					email: email,
					message: message 
				})
		})
		  .then(response => response.json())
		  .catch(error => {
		  	console.log(error);
		  })
	} 


	onSubmitForm = event => {
		const {name, email, message} = this.state;
		const {onShowAlert, onEmailValidation, onSendingEmail} = this;
		event.preventDefault();
		if(name.length > 0 && email.length > 0 && message.length > 0){
			if(onEmailValidation(email)){
				  onSendingEmail(
				  	'http://localhost:3001/send-email',
				  	name,
				  	email, 
				  	message
				  )
				  onShowAlert("Correo enviado exitosamente", "success");
			}else{
				onShowAlert("Debes introducir un correo válido", "warning");
			}
			
		}else{
			onShowAlert("Ningún campo del formulario debe estar vacío", "error");
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
							maxLength="800"
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
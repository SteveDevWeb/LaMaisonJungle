import { useState } from 'react'
import '../styles/Footer.css'

const Footer = () => {
	const [inputValue, setInputValue] = useState('')

	const handleInput = (e) => {
		setInputValue(e.target.value)
	}


    const handleSubmit = () => {
        if (inputValue.includes('@') === false) {
			alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥")
		}
        else { setInputValue("") 
        alert('Votre mail a bien été envoyé !')}
    }

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
			<input className='lmj-footer-elem'
				placeholder='Entrez votre mail'
				onChange={handleInput}
                value={inputValue}
			/>
            <button className='newsletter-button' onClick={handleSubmit}>Envoyer 📩</button>
		</footer>
	)
}

export default Footer
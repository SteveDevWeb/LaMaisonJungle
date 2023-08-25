import { useState, useEffect } from 'react'
import '../styles/Cart.css'

function Cart({ cart, updateCart }) {

	

	const [isOpen, setIsOpen] = useState(true)

	const total = cart.reduce(
		(acc, plantType) => acc + plantType.amount * plantType.price,
		0
	)

	useEffect(() => {
		document.title = `Panier: ${total}€ `;
	}, [total])


	

	
	return isOpen ? (
		<div className='lmj-cart'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer le Panier
			</button>
			{cart.length > 0 ? (
				<div>
					<h2>Panier</h2>
					<ul>
						{cart.map(({ name, price,cover, amount }, index) => (
							<li key={`${name}-${index}`} className='lmj-cart-item'>
								<img alt='' className='lmj-cart-img' src={cover}/>
								<span> {name} </span> 
								<span>| {price}€ </span> 
								<span>| x{amount}</span>
							</li>
						))}
					</ul>
					<h3>Total : {total}€</h3>
					<button className='lmj-empty-cart' onClick={() => updateCart([])}>Vider le panier</button>
				</div>
			) : (
				<div>Votre panier est vide.</div>
			)}
		</div>
	) : (
		<div className='lmj-cart-closed'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Ouvrir le Panier
			</button>
		</div>
	)
}

export default Cart
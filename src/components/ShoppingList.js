import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'
import '../styles/ShoppingList.css'
import Categories from './Categories'
import { useState } from 'react'
import Modal from './Modal'

function ShoppingList({ cart, updateCart }) {

	/* Add to Cart function */
	function addToCart(name, price, cover) {
		// On cherche la plante si elle est dans cart, le panier actuel
		const currentPlantSaved = cart.find((plant) => plant.name === name)
		// Si la plante est deja dans le panier
		if (currentPlantSaved) {
			// On creer temporairement un tableau SANS la plante actuelle
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			//On met a jour cart, en se basant sur le panier temporaire ,en ajoutant la nouvelle plant avec amount + 1 
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price,cover, amount: currentPlantSaved.amount + 1 }
			])

		} 
		// Si la plante n'est pas dans le panier, on l'ajoute simplement a cart en tant que nouvel objet et amount = 1
		else {
			updateCart([...cart, { name, price,cover, amount: 1 }])
		}
	}

	/* Categories */
	const [selectedCategory, setSelectedCategory] = useState("All");
    const filteredPlant = selectedCategory==="All" ? plantList: plantList.filter(plant => plant.category === selectedCategory)



	/* Modal */
	const [modalOpen,setModalOpen] = useState(false)

	const [description,setDescription] = useState("")
	const [name,setName] = useState("")

	const openModal = (description,name) => {
		setModalOpen(true)
		setDescription(description)
		setName(name)
	}
	



	return (
		<div className='lmj-shopping-list'>
			<Categories selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
			<ul className='lmj-plant-list'>
				{filteredPlant.map(({ id, cover, name, water, light, price,description }) => (
					<li key={id}>
						<PlantItem
							cover={cover}
							name={name}
							water={water}
							light={light}
							price={price}
						/>
						<button className='add-to-cart-button' onClick={() => addToCart(name, price,cover)}> Ajouter</button>
						<button className='more-infos' onClick={() => openModal(description,name)}>Découvrir</button>
					</li>
				))}
			</ul>
			<Modal modalOpen={modalOpen} setModalOpen={setModalOpen} description={description} name={name}/>
		</div>
	)
}

export default ShoppingList
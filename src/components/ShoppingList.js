import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'
import '../styles/ShoppingList.css'
import Categories from './Categories'
import { useState } from 'react'

function ShoppingList({ cart, updateCart }) {


	function addToCart(name, price, cover) {
		const currentPlantSaved = cart.find((plant) => plant.name === name)
		if (currentPlantSaved) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price,cover, amount: currentPlantSaved.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price,cover, amount: 1 }])
		}
	}

	const [selectedCategory, setSelectedCategory] = useState("All");
    const filteredPlant = selectedCategory==="All" ? plantList: plantList.filter(plant => plant.category === selectedCategory)


	const [modalOpen,setModalOpen] = useState(false)

	const [description,setDescription] = useState("")

	const openModal = (description) => {
		setModalOpen(true)
		setDescription(description)

	}
	const closeModal = () => {
		setModalOpen(false)
	}

	function Modal({modalOpen}) {
		return(
		modalOpen ? 
		(<div className="modal">
			<div className="modal-content">
			<h2>Modal</h2>
			<p>{description}</p>
			<button onClick={closeModal}>Fermer</button>
			</div>
		</div>)
		:null )
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
						<button className='more-infos' onClick={() => openModal(description)}>?</button>
					</li>
				))}
			</ul>
			<Modal modalOpen={modalOpen}/>
		</div>
	)
}

export default ShoppingList
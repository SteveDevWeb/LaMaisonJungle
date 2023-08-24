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



	return (
		<div className='lmj-shopping-list'>
			<Categories selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
			<ul className='lmj-plant-list'>
				{filteredPlant.map(({ id, cover, name, water, light, price }) => (
					<div key={id}>
						<PlantItem
							cover={cover}
							name={name}
							water={water}
							light={light}
							price={price}
						/><button className='add-to-cart-button' onClick={() => addToCart(name, price,cover)}> Ajouter</button>
					</div>
				))}
			</ul>
		</div>
	)
}

export default ShoppingList
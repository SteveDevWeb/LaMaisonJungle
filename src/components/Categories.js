
import { plantList } from '../datas/plantList'
import  '../styles/Categories.css'

const Categories = ({selectedCategory,setSelectedCategory}) => {

    const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)
    
   


    return ( 
    <div className='lmj-categories'>

        <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)} className='lmj-categories-select'>
            <option value={"All"}>Toutes les catégories</option>
        {categories.map((categorie)=>(
                <option key={categorie} value={categorie}> {categorie}</option>
        ) )}
        </select>
    </div>
)
}

export default Categories
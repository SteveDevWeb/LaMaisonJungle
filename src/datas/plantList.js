import monstera from '../assets/monstera.jpg'
import lyrata from '../assets/lyrata.jpg'
import pothos from '../assets/pothos.jpg'
import succulent from '../assets/succulent.jpg'
import olivier from '../assets/olivier.jpg'
import basil from '../assets/basil.jpg'
import mint from '../assets/mint.jpg'
import calathea from '../assets/calathea.jpg'
import cactus from '../assets/cactus.jpg'

export const plantList = [
	{
		name: 'monstera',
		category: 'classique',
		id: '1ed',
		light: 1,
		water: 3,
		cover: monstera,
		price: 15,
		description:"Ce sont des lianes sempervirentes, pouvant grimper dans les arbres jusqu'à 20 m de hauteur. Ces lianes produisent des racines aériennes qui renforcent l'accrochage de la plante sur son support et qui peuvent aussi rejoindre le sol pour s'y replanter."
	},
	{
		name: 'ficus lyrata',

		category: 'classique',
		id: '2ab',
		light: 3,
		water: 1,
		cover: lyrata,
		price: 16,
		description:"Ficus lyrata est une espèce de figuier de la famille des Moraceae. Elle est originaire d'Afrique de l'Ouest. Son habitat va de l'ouest du Cameroun à la Sierra Leone, dans la forêt tropicale pluvieuse. Il s'agit d'un arbre ornemental commun dans les jardins tropicaux et subtropicaux, parfois utilisée comme plante verte d'intérieur."

	},

	{
		name: 'pothos argenté',
		category: 'classique',
		id: '3sd',
		light: 1,
		water: 2,
		cover: pothos,
		price: 9,
		description:"Le Pothos argenté est une plante tropicale grimpante originaire d'Asie. Faisant partie de la famille des Araceae, il est caractérisé par son feuillages en forme d'As et ses taches d'argent. Pouvant supporter des températures allant jusqu'à 15°C, le pothos argenté est un bon compagnon d'intérieur."
	},
	{
		name: 'calathea',
		category: 'classique',
		id: '4kk',
		light: 2,
		water: 3,
		cover: calathea,
		price: 20,
		description:"Le Calathea zebrina est appelé la plante zèbre. Son feuillage, régulièrement strié de bandes vert sombre sur un fond vert clair, est épais et disposé à l'horizontale."
	},
	{
		name: 'olivier',
		category: 'extérieur',
		id: '5pl',
		light: 2,
		water: 1,
		cover: olivier,
		price: 25,
		description:"Arbre appartenant à la famille des Oléacées, au tronc noueux, à petites feuilles persistantes de forme ovale-lancéolée d'un vert foncé au-dessus, argenté en dessous, dont le fruit est une drupe comestible et oléagineuse (v. olive)."
	},

	{
		name: 'cactus',
		category: 'plante grasse',
		id: '8fp',
		light: 2,
		water: 3,
		cover: cactus,
		price: 6,
		description:"Les cactus sont des plantes grasses, dont la caractéristique première est de posséder des aréoles, sortes de creux dans leur épiderme d'où partent épines, fleurs, feuilles (rarement), nouveaux segments ou glochides (qui sont des épines toutes petites et regroupées)."
	},
	{
		name: 'basilique',
		category: 'extérieur',
		id: '7ie',
		light: 2,
		water: 3,
		cover: basil,
		price: 5,
		description:"Le basilic, ou Ocimum basilicum, connu aussi sous les noms d'oranger des savetiers ou herbe aux sauces, est une plante condimentaire annuelle originaire d'Inde et appartenant à la famille des Lamiacées. C'est une herbacée de 20 à 40 cm, qui peut atteindre 80 cm."
	},
	{
		name: 'succulente',
		category: 'plante grasse',
		id: '9vn',
		light: 2,
		water: 1,
		cover: succulent,
		price: 8,
		description:"“Succulentes” provient du mot latin “suculentus”, qui signifie « plein de suc ». Ces plantes sont en effet capables de stocker de l'eau dans leurs feuilles, leurs tiges et leurs racines, et de la transformer en suc mucilagineux qui leur permet de survivre dans les milieux les plus hostiles."
	},

	{
		name: 'menthe',
		category: 'extérieur',
		id: '6uo',
		light: 2,
		water: 2,
		cover: mint,
		price: 4,
		description:"La menthe est une plante pleine d'ardeur, d'une couleur éclatante, vert vif à vert gris argenté, qui propose, selon les variétés, une gamme étendue de parfums, d'arômes et de saveurs intenses et rafraîchissantes."
	}
]
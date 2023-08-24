const CareScale = ({scaleValue, careType} ) => {
	const range = [1, 2, 3, 4, 5]
    
    let scaleType = null
    let messageType = null;

    switch (careType) {
        case "light":
            scaleType='☀️'
            messageType=`de lumière`
            break;
        case "water":
            scaleType='💧'
            messageType=`d'arrosage`
            break; 
    
        default:
            scaleType=null
            break;
    }

    let messageModeration = null;
    switch (scaleValue) {
        case 1:
            messageModeration=`peu`
            break;
        case 2:
            messageModeration=`modérement`
            break;
        case 3:
            messageModeration=`beaucoup`
            break;    
        default:
            break;
    }


    const handleClick = (e) => {
        e.stopPropagation()
        alert(`Cette plante requiert ${messageModeration} ${messageType}`)
    }


	return (
		<div className="lmj-advice-plant">
			{range.map((rangeElem) =>
                // On regarde la valeur en paramètre scaleValue, on la compare a rangeElem et tant qu'on ne dépasse pas, on boucle
				scaleValue >= rangeElem ? (
					<span key={rangeElem} onClick={handleClick} >{scaleType}</span>
				) : null
			)}
		</div>
	)
}

export default CareScale
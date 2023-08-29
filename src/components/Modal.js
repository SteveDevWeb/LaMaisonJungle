import '../styles/Modal.css'


export default function Modal({modalOpen,setModalOpen,description,name}) {

    const closeModal = () => {
		setModalOpen(false)
	}

    return(
    modalOpen ? 
    (<div className="modal">
        <div className="modal-content">
            <h2>En savoir plus : {name} </h2>
            <p>{description}</p>
            <button onClick={closeModal}>Fermer</button>
        </div>
    </div>)
    :null )
}
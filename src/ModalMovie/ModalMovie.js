import Modal from 'react-bootstrap/Modal';
import {Button} from 'react-bootstrap';

function ModalMovie({cardInfo, show, handleClose})
{
    return (
        <div>
        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>add Favorite</Modal.Title>
            </Modal.Header>
            <Modal.Body className="body">
                <h3>{cardInfo.title}</h3>
                <img alt="Movie poster picture" src={`api.themoviedb.org/3/movie/550?api_key=${process.env}`}/>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary"> put in  Favorite </Button>
            </Modal.Footer>
        </Modal>
    </div>
    )
}

export default ModalMovie; 
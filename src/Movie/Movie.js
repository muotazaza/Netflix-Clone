import ModalMovie from '../ModalMovie/ModalMovie';
import { useState, useEffect } from 'react';
import { Button, Container, Row, Card, Col } from 'react-bootstrap';


function Movie(props) {
   
    const [cardInfo, setCardInfo] = useState({});
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    return (
        <div>
            <Col key={props.data.id} md={4}>
                <Card className='div-card'>
                    <Card.Img className='div-card-img' variant="top" src={`https://api.themoviedb.org/3/movie/550?api_key=${process.env}`} />
                    <Card.Body>
                        <Card.Title className='div-card-title'>{props.data.title}</Card.Title>
                        <p>{props.data.release_date}</p>
                        <div>
                            <Button className='div-card-button' variant="primary"
                                onClick={() => {
                                    setCardInfo(props.data)
                                    setShow(true);
                                }}>Add To Favorites</Button>
                        </div>
                    </Card.Body>
                    {
                        <ModalMovie cardInfo={cardInfo} show={show} handleClose={handleClose} />
                    }
                </Card>
            </Col>
        </div>


    )

}

export default Movie;
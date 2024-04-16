import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Item/Item.css';
import { Link } from 'react-router-dom';

export const Item = ({ item }) => {
    return (
        <>
            <section className="PadreSectionCards">
                <div className="divCards">
                    <Card className="cards">
                        <Card.Img className="imgCard" variant="top" src={item.img} alt={item.producto} />
                        <Card.Body className="cardBody">
                            <Card.Title>{item.producto}</Card.Title>
                            <Card.Text>{item.detalle}</Card.Text>
                            <Card.Text>{item.category}</Card.Text>
                            <Link to={`/item/${item.id}`}>
                                <Button variant="primary" className="boton">
                                    Ver +
                                </Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </div>
            </section>
        </>
    );
};

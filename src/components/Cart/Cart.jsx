import Table from 'react-bootstrap/Table';
import 'react-bootstrap/Container';
import '../Cart/Cart.css';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { getFirestore, addDoc, collection } from 'firebase/firestore';
import Swal from 'sweetalert2';

const valoresIniciales = {
    name: '',
    phone: '',
    email: '',
};
export const Cart = () => {
    const [buyer, setBuyer] = useState(valoresIniciales);
    const { items, clear, removeItem } = useContext(CartContext);

    const redirigirPagina = () => {
        location.href = '/';
    };

    const handleChange = (evento) => {
        const { name, value } = evento.target;

        setBuyer((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    };

    const total = items.reduce((acu, act) => acu + act.price * act.quantity, 0);
    const handleOrder = () => {
        const order = {
            buyer,
            items,
            total,
        };

        const db = getFirestore();
        const orderCollection = collection(db, 'orders');

        addDoc(orderCollection, order).then(({ id }) => {
            const mostrarAlerta = () => {
                Swal.fire({
                    title: 'FELICITACIONES!',
                    text: `Su orden ${id} ha sido completada!`,
                    timer: '3000',
                    color: '#fa9200',
                    confirmButtonColor: '#3085d6',
                });
            };

            const mostrarAlerta2 = () => {
                Swal.fire({
                    text: 'Por Favor! Ingrese datos válidos',
                    icon: 'error',
                    timer: '3000',
                    color: 'red',
                    confirmButtonColor: '#3085d6',
                    title: '¡ERROR!',
                });
            };

            // EN ESTE CONDICIONAL UTILIZO EL METODO Object.values() y .some(), EL PRIMER METODO DEVUELVE UN ARRAY DEL OBJETO Y .some() ITERA EL ARRAY, SI ALGUN ELEMENTO CONTIENE UNA CADENA VACIO, RETORNA "true". LO UTILIZO PARA PODER VALIDAR QUE SE HAYAN INGRESADO DATOS EN EL FORMULARIO.

            if (id && items.length > 0 && !Object.values(buyer).some((x) => x === '')) {
                mostrarAlerta();
                setTimeout(() => {
                    redirigirPagina();
                }, 3000);
            } else {
                mostrarAlerta2();
            }
        });
    };

    return (
        <div className="cart-body mt-4">
            <h1 className="titulo-cart">Mi CARRiTO</h1>
            <Table striped bordered hover variant="dark" className="mt-4">
                <thead>
                    <tr>
                        <th>PRODUCTO</th>
                        <th>CANTIDAD</th>
                        <th>VALOR</th>
                        <th>TOTAL</th>
                        <th>ELIMINAR</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => {
                        const totalUnidad = item.quantity * item.price;
                        return (
                            <tr key={item.id}>
                                <td>{item.title}</td>
                                <td>{item.quantity}</td>
                                <td>$ {item.price}</td>
                                <td>$ {totalUnidad}</td>
                                <td>
                                    <i className="bi bi-trash-fill btnEliminar " onClick={() => removeItem(item.id)}></i>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
            <p className="total">TOTAL = $ {total}</p>
            <div className="d-grid gap-2 col-6 mx-auto divbtn">
                <button type="button" className="botonn bot btn btn-success" onClick={clear}>
                    Vaciar Carrito
                </button>
            </div>
            <h2 className="titulo-datos mt-5">TUS DATOS</h2>
            <form className="form-cart">
                <label className="box"></label>
                <input
                    type="text"
                    className="form-control"
                    name="name"
                    required
                    placeholder="Nombre"
                    value={buyer.name}
                    onChange={handleChange}
                />
                <label className="box"></label>
                <input
                    type="text"
                    className="form-control"
                    name="phone"
                    required
                    placeholder="Celular"
                    value={buyer.phone}
                    onChange={handleChange}
                />
                <label className="box"></label>
                <input
                    type="email"
                    className="form-control"
                    name="email"
                    required
                    placeholder="Email"
                    value={buyer.email}
                    onChange={handleChange}
                />
                <div className="d-grid gap-2 col-6 mx-auto divbtn">
                    <button type="button" className="botonn bot btn btn-success" onClick={handleOrder}>
                        Comprar ahora
                    </button>
                </div>
            </form>
        </div>
    );
};

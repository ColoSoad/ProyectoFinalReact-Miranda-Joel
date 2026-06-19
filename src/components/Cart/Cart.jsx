import Table from 'react-bootstrap/Table';
import 'react-bootstrap/Container';
import '../Cart/Cart.css';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { getFirestore, addDoc, collection, doc, updateDoc, increment } from 'firebase/firestore';
import { mostrarAlerta, mostrarAlerta2, mostrarAlerta3 , redirigirPagina } from '../../utils/alerts';



const valoresIniciales = {
    name: '',
    phone: '',
    email: '',
};


export const Cart = () => {
    const [buyer, setBuyer] = useState(valoresIniciales);
    const { items, clear, removeItem } = useContext(CartContext);

    

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

        if (!Object.values(buyer).some((x) => x === '')) {
            const db = getFirestore();
            const orderCollection = collection(db, 'orders');
            addDoc(orderCollection, order).then( async ({ id }) => {
            
            // EN ESTE CONDICIONAL UTILIZO EL METODO Object.values() y .some(), EL PRIMER METODO DEVUELVE UN ARRAY DEL OBJETO Y .some() ITERA EL ARRAY, SI ALGUN ELEMENTO CONTIENE UNA CADENA VACIO, RETORNA "true". LO UTILIZO PARA PODER VALIDAR QUE SE HAYAN INGRESADO DATOS EN EL FORMULARIO.
                if (id && items.length > 0) {
                    for (const item of items) {
                        const productoRef = doc(db, 'items', item.id);

                        await updateDoc(productoRef, {
                            stock: increment(-item.quantity),
                        });
                    }               
                }
                mostrarAlerta(id);
                clear()
                setTimeout(() => {
                    redirigirPagina();
                }, 3000);

            });
            
        
        }
        else {
            mostrarAlerta3()
        }

        
        
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
                    
                    <button type="button" className="botonn bot btn btn-success" onClick={handleOrder} >
                        Comprar ahora
                    </button>
                    
                </div>
            </form>
        </div>
    );
};

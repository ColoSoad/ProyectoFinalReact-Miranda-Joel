import Swal from 'sweetalert2';

export const mostrarAlerta = (id) => {
                Swal.fire({
                    title: 'FELICITACIONES!',
                    text: `Su orden ${id} ha sido completada!`,
                    timer: '3000',
                    color: '#fa9200',
                    confirmButtonColor: '#3085d6',
                });
    }
export const mostrarAlerta2 = () => {
                Swal.fire({
                    text: 'Por Favor! Ingrese datos válidos',
                    icon: 'error',
                    timer: '3000',
                    color: 'red',
                    confirmButtonColor: '#3085d6',
                    title: '¡ERROR!',
                });
    };

export const mostrarAlerta3 = () => {
                Swal.fire({
                    text: 'Por Favor! Complete los campos',
                    icon: 'error',
                    timer: '3000',
                    color: 'red',
                    confirmButtonColor: '#3085d6',
                    title: '¡ERROR!',
                });
    };
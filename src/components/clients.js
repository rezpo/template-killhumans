import React from 'react';
import Slider from 'react-slick';

const ClienteComponent = (props) => {
    return (
        <div className="carousel--item">
            <a href={props.link}><img src={props.logo} alt={props.nombre} /></a>
        </div>
    )
}

class ClientsClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            clientes: [
                {
                    cliente: 'cliente 1',
                    logotipo: 'https://via.placeholder.com/100x100',
                    link: 'https://acid.cl'
                },
                {
                    cliente: 'cliente 2',
                    logotipo: 'https://via.placeholder.com/100x100',
                    link: 'https://acid.cl'
                },
                {
                    cliente: 'cliente 3',
                    logotipo: 'https://via.placeholder.com/100x100',
                    link: 'https://acid.cl'
                },
                {
                    cliente: 'cliente 4',
                    logotipo: 'https://via.placeholder.com/100x100',
                    link: 'https://acid.cl'
                },
                {
                    cliente: 'cliente 5',
                    logotipo: 'https://via.placeholder.com/100x100',
                    link: 'https://acid.cl'
                },
                {
                    cliente: 'cliente 6',
                    logotipo: 'https://via.placeholder.com/100x100',
                    link: 'https://acid.cl'
                },
                {
                    cliente: 'cliente 7',
                    logotipo: 'https://via.placeholder.com/100x100',
                    link: 'https://acid.cl'
                },
                {
                    cliente: 'cliente 8',
                    logotipo: 'https://via.placeholder.com/100x100',
                    link: 'https://acid.cl'
                },
            ]
        }
    }

    render() {
        var clientesCarrusel = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 8,
            autoplay: true,
            arrows: false,
            slidesToScroll: 8,
            responsive: [
                {
                    breakpoint: 840,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                }
            ]
        };
        return (
            <div className="container--flex__middle clients--container">
                <div>
                    <h2>Nuestros clientes</h2>
                    <div className="clients--container__carousel">
                        <Slider {...clientesCarrusel}>
                            {this.state.clientes.map(item =>
                                <ClienteComponent
                                    nombre={item.cliente}
                                    logo={item.logotipo}
                                    link={item.link}
                                    key={item.cliente}
                                />
                            )}
                        </Slider>
                    </div>
                </div>
            </div>
        )
    }
}

export default ClientsClass;
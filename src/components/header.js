import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const HeaderComponent = (props) => {
    return (
        <li className="link"><a href={props.linkMenu}>{props.textoMenu}</a></li>
    )
}

const HeaderComponentButtons = (props) => {
    return (
        <li className="boton"><a href={props.linkBoton} className={props.estadoBoton}><FontAwesomeIcon icon="star" style={{ marginRight: 10 }} />{props.textoBoton}</a></li>
    )
}

class HeaderClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            headerItems: [
                {
                    caption: 'Sobre Nosotros',
                    link: 'http://acid.cl/'
                },
                {
                    caption: 'Contacto',
                    link: 'http://acid.cl/'
                }
            ],
            headerButtons: [
                {
                    boton: 'Planes',
                    link: 'https://acid.cl',
                    color: 'limon',
                    icono: 'star'
                },
                {
                    boton: 'Nuestra reputación',
                    link: 'https://acid.cl',
                    color: 'berry',
                    icono: 'star'
                },
            ]
        }
    }

    render() {
        return (
            <header className="container--flex__between">
                <div className="container--flex__start">
                    <div className="logo--box__desktop"><a href="https://acid.cl">SitiosWebChile</a></div>
                    <div className="logo--box__mobile"><a href="https://acid.cl">SWC</a></div>
                    <ul className="container--flex__evenly menu--item">
                        {this.state.headerItems.map(item =>
                            <HeaderComponent
                                textoMenu={item.caption}
                                linkMenu={item.link}
                                key={item.caption}
                            />
                        )}
                    </ul>
                    <ul className="container--flex__evenly menu--item">
                        {this.state.headerButtons.map(item =>
                            <HeaderComponentButtons
                                textoBoton={item.boton}
                                linkBoton={item.link}
                                estadoBoton={item.color}
                                iconoBoton={item.icono}
                                key={item.boton}
                            />
                        )}
                    </ul>
                </div>
                <ul className="container--flex__around menu--item">
                    <li className="social"><a href="https://acid.cl"><FontAwesomeIcon icon={['fab', 'facebook']} /></a></li>
                    <li className="social"><a href="https://acid.cl"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a></li>
                    <li className="social"><a href="https://acid.cl"><FontAwesomeIcon icon={['fab', 'instagram']} /></a></li>
                </ul>
            </header>
        )
    }
}

export default HeaderClass;
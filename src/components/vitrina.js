import React from 'react';
import Slider from 'react-slick';
import bot_torso from './imgs/robot-torso.svg';
import bot_brazo_der from './imgs/robot-brazo-derecho.svg';
import bot_brazo_izq from './imgs/robot-brazo-izquierdo.svg';
import bot_brillo from './imgs/robot-brillo.svg';
import bot_flot from './imgs/robot-flot.svg';
import bot_laser from './imgs/robot-laser.svg';
import bot_ojo from './imgs/robot-ojo.svg';
import NumberFormat from 'react-number-format';
import { TweenMax, Bounce } from 'gsap/TweenMax';

const CarruselVitrina = (props) => {
    return (
        <div>
            <h2>{props.tituloCarrusel}</h2>
            <span>{props.nombreCarrusel}</span>
            <ul className="vit--list">
                {props.bulletsCarrusel.map(item =>
                    <li key={item}>{item}</li>
                )}
            </ul>
            <mark><NumberFormat value={props.precioCarrusel} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} prefix={'$'} /></mark>
            <div className="container--flex__middle">
                <a href={props.linkCarrusel}><button className="carousel__button">{props.botonCarrusel}</button></a>
            </div>
        </div>
    )
}

class VitrinaClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            packs: [
                {
                    titulo: 'Magna cupidatat esse et est sit',
                    heightLigth: 'Diseño economico',
                    bullets: ['Consequat aute', 'cillum id aliquip', 'fugiat qui', 'pariatur quis ven', 'cillum id ali', 'Cequat aute'],
                    precio: 130000,
                    link: 'http://acid.cl',
                    textoBoton: 'Dime más...',
                    id: 1
                },
                {
                    titulo: 'Proident veniam Lorem sit',
                    heightLigth: 'Diseño medio',
                    bullets: ['Consequat', 'cillum id', 'fugiat qu', 'quis ven', 'cillum i aliquip', 'Conequat aute'],
                    precio: 345000,
                    link: 'http://acid.cl',
                    textoBoton: 'Dime más...',
                    id: 2
                },
                {
                    titulo: 'Aliqua labore veniam cupidatat',
                    heightLigth: 'Diseño caro',
                    bullets: ['Consequa aute', 'cillum id aliuip', 'fuiat qui', 'pariatur qis ven', 'cllum id aliquip', 'Cosequat ate'],
                    precio: 799990,
                    link: 'http://acid.cl',
                    textoBoton: 'Dime más...',
                    id: 3
                }
            ]
        }
        this.theLaser = null;
        this.theBody = null;
        this.theArmR = null;
        this.theArmL = null;
        this.theGlow = null;
        this.theBase = null;
        this.theEye = null;
        this.theMotionLaser = null;
        this.theMotionBody = null;
        this.theMotionArmR = null;
        this.theMotionArmL = null;
        this.theMotionGlow = null;
        this.theMotionBase = null;
        this.theMotionEye = null;
    }

    componentDidMount() {
        this.theMotionBody = TweenMax.fromTo([this.theBody], 1, { y: -200 }, { ease: Bounce.easeOut, y: -160 });
        this.theMotionEye = TweenMax.fromTo([this.theEye], 1, { y: -200 }, { ease: Bounce.easeOut, y: -160 });
        this.theMotionArmL = TweenMax.fromTo([this.theArmL], 1, { y: -200 }, { rotation: 50, ease: Bounce.easeOut, y: -180 });
        this.theMotionArmR = TweenMax.fromTo([this.theArmR], 1, { y: -200 }, { rotation: -50, ease: Bounce.easeOut, y: -180 });
        this.theMotionGlow = TweenMax.fromTo([this.theGlow], 1, { y: -200 }, { ease: Bounce.easeOut, y: -160 });
        this.theMotionBase = TweenMax.fromTo([this.theBase], 1, { y: -200 }, { ease: Bounce.easeOut, y: -160 });
        this.theMotionLaser = TweenMax.fromTo([this.theLaser], 1, { autoAlpha: 0, y: -200 }, { ease: Bounce.easeOut, autoAlpha: 1 });
        this.theMotionBody.delay(1);
        this.theMotionBody.repeat(3);
        this.theMotionBody.yoyo(true);
        this.theMotionEye.delay(1);
        this.theMotionEye.repeat(3);
        this.theMotionEye.yoyo(true);
        this.theMotionArmL.delay(1);
        this.theMotionArmL.repeat(3);
        this.theMotionArmL.yoyo(true);
        this.theMotionArmR.delay(1);
        this.theMotionArmR.repeat(3);
        this.theMotionArmR.yoyo(true);
        this.theMotionGlow.delay(1);
        this.theMotionGlow.repeat(3);
        this.theMotionGlow.yoyo(true);
        this.theMotionBase.delay(1);
        this.theMotionBase.repeat(3);
        this.theMotionBase.yoyo(true);
        this.theMotionLaser.delay(5);
        this.theMotionLaser.repeat(3);
        this.theMotionLaser.yoyo(true);
    }

    render() {
        var carrusel = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            autoplay: true,
            arrows: false,
            dotsClass: 'custom--dots',
            slidesToScroll: 1
        };
        return (
            <main className="container--flex__evenly vit--background">
                <div className="container--flex__start container--promo width-5">
                    <div className="width-10 relative">
                        <div className="promo relative">
                            <h1 className="vit--title__main">Tu sitio web por tan solo <strong>$80.000</strong> </h1>
                            <div className="container--flex__middle">
                                <a href="https://acid.cl"><button className="boton vit--button__berry">Contrata hoy mismo</button></a>
                            </div>
                        </div>
                        <div className="width-10">
                            <div className="absolute vit--avatar">
                                <img src={bot_brillo} className="absolute bot_brillo" alt="robot" ref={img => this.theGlow = img} />
                                <img src={bot_laser} className="absolute bot_laser" alt="robot" ref={img => this.theLaser = img} />
                                <img src={bot_flot} className="absolute bot_flot" alt="robot" ref={img => this.theBase = img} />
                                <img src={bot_ojo} className="absolute bot_ojo" alt="robot" ref={img => this.theEye = img} />
                                <img src={bot_torso} className="absolute bot_torso" alt="robot" ref={img => this.theBody = img} />
                                <img src={bot_brazo_der} className="absolute bot_brazo_der" alt="robot" ref={img => this.theArmR = img} />
                                <img src={bot_brazo_izq} className="absolute bot_brazo_izq" alt="robot" ref={img => this.theArmL = img} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container--flex__middle width-5">

                    <div className="vit--title__carousel">
                        <Slider {...carrusel}>
                            {this.state.packs.map(item =>
                                <CarruselVitrina
                                    tituloCarrusel={item.titulo}
                                    nombreCarrusel={item.heightLigth}
                                    bulletsCarrusel={item.bullets}
                                    precioCarrusel={item.precio}
                                    linkCarrusel={item.link}
                                    botonCarrusel={item.textoBoton}
                                    key={item.id}
                                />
                            )}
                        </Slider>
                    </div>

                </div>
            </main>
        )
    }

}

export default VitrinaClass;
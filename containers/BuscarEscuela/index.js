import React, { Component } from 'react';
import Link from 'next/link'
/*import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';*/
import { Header, Footer, Wrapper, Boton } from '../../components';
import { 
    Buscador,
    Form,
    Resultados,
    Card,
    CardImg,
    TitulosCard,
 
} from './styles';


export default class BuscarEscuelaContainer extends Component {
    render(){
    
    return (
    <>
        <Wrapper direction="column">
      <Buscador>
        <Form>

            <select name="Barrio" id="Barrio">
                <option name="Barrio">Barrio</option>
                <option value="Flores">Flores</option>
                <option value="Caballito">Caballito</option>
                <option value="Palermo">Palermo</option>
                <option value="Boedo">Boedo</option>
                <option value="Devoto">Devoto</option>
                <option value="Villa Crespo">Villa Crespo</option>
            </select>


            <input type="submit" value="Buscar" />
        </Form>
    </Buscador>

    <Resultados>
        <Card>
            <CardImg>
                <img src= '/img/home/escuela5.jpg' />
            </CardImg>
                <TitulosCard>
                    <h2>Escuela Botincitos</h2>
                    <h3>Palermo</h3>
                    <h4>Edades: 8 a 12 años</h4>
                    <h5>Horarios: 16 a 19 hs</h5>
                </TitulosCard>
        </Card>

        <Card>
            <CardImg>
                <img src= '/img/home/escuela5.jpg' />
            </CardImg>
                <TitulosCard>
                    <h2>Escuela Botincitos</h2>
                    <h3>Palermo</h3>
                    <h4>Edades: 8 a 12 años</h4>
                    <h5>Horarios: 16 a 19 hs</h5>
                </TitulosCard>
        </Card>

        <Card>
            <CardImg>
                <img src= '/img/home/escuela5.jpg' />
            </CardImg>
                <TitulosCard>
                    <h2>Escuela Botincitos</h2>
                    <h3>Palermo</h3>
                    <h4>Edades: 8 a 12 años</h4>
                    <h5>Horarios: 16 a 19 hs</h5>
                </TitulosCard>
        </Card>

        <Card>
            <CardImg>
                <img src= '/img/home/escuela5.jpg' />
            </CardImg>
                <TitulosCard>
                    <h2>Escuela Botincitos</h2>
                    <h3>Palermo</h3>
                    <h4>Edades: 8 a 12 años</h4>
                    <h5>Horarios: 16 a 19 hs</h5>
                </TitulosCard>
        </Card>

        <Card>
            <CardImg>
                <img src= '/img/home/escuela5.jpg' />
            </CardImg>
                <TitulosCard>
                    <h2>Escuela Botincitos</h2>
                    <h3>Palermo</h3>
                    <h4>Edades: 8 a 12 años</h4>
                    <h5>Horarios: 16 a 19 hs</h5>
                </TitulosCard>
        </Card>
    </Resultados>


    </Wrapper>
   
    </>

);
}
}

//export default HomeContainer;

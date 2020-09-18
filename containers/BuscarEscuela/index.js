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
        <Header />
        </Wrapper>

        <Wrapper direction="row">
      <Buscador>
        <Form>
            <select name="Categoría" id="Categoría">
                <option name="Categoria">Categoria</option>
                <option value="2004">2004</option>
                <option value="2005">2005</option>
                <option value="2006">2006</option>
                <option value="2007">2007</option>
            </select>

            <select name="Barrio" id="Barrio">
                <option name="Barrio">Barrio</option>
                <option value="Flores">Flores</option>
                <option value="Caballito">Caballito</option>
                <option value="Palermo">Palermo</option>
                <option value="Boedo">Boedo</option>
                <option value="Devoto">Devoto</option>
                <option value="Villa Crespo">Villa Crespo</option>
            </select>

            <select name="Género" id="Género">
                <option name="Género">Género</option>
                <option value="Femenino">Femenino</option>
                <option value="Masculino">Masculino</option>
                <option value="Mixto">Mixto</option>
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

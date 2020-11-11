import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import {firebase} from "../../lib";
const firebaseDB = firebase.database();
/*import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';*/
import { Header, Footer, Wrapper, Boton, Filter } from '../../components';
import { 
    Buscador,
    Form,
    Resultados,
    Card,
    CardImg,
    TitulosCard,
 
} from './styles';


function BuscarEscuelaContainer () {
    const [escuelas, setEscuelas] = useState([]);


    const getData = async () => {
       
        firebaseDB.ref('escuelas').once('value', (snapshot) => {
            const escuelasArr = [];
            snapshot.forEach((childSnapshot) => {
            escuelasArr.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            })
            })
            // escuelasArr.reverse()
            console.log('getData',escuelasArr);
            setEscuelas(escuelasArr);
        })

       
             
    };

 
    const [onFilterChange, barrio] =  useState([]);
    console.log("escuelas: ",escuelas)
    
    useEffect(() => {
        getData();
    }, []);

    
    return (
    <>
        <Wrapper direction="column">
        {/* <option value="select">Todos</option> */}
        

        <h2>Filtrar por barrio: </h2>
      
            <select onChange={onFilterChange} escuela={barrio}>           
            {escuelas.map(escuela => <option value={escuela.barrio} key={escuela.barrio}>{escuela.barrio}</option>)}
            </select>

    <Resultados>
        {escuelas.slice(0,10).map(escuela =>(
        <Card>
            <CardImg>
                <img src= '/img/home/escuela5.jpg' />
            </CardImg>
                <TitulosCard>
                    <h2>{escuela.name}</h2>
                    <h3>{escuela.barrio}</h3>
                    <h4>{escuela.direccion}</h4>
                    <h5>Contacto: {escuela.telefono}</h5>
                </TitulosCard>
        </Card>
        ))}
    </Resultados>


    </Wrapper>
   
    </>

    )};
export default BuscarEscuelaContainer;

    // const filteredBarrio = async () =>{
        
    //     const dataFiltrada = _.filter(escuelas, escuela => escuela.barrio === 'Caballito')
    //     setEscuelas(dataFiltrada)
    // };
    
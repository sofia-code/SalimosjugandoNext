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
    const [barrios, setBarrios] = useState([]);
    const [escuelasOriginales, setEscuelasOriginales] = useState([]);


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
            setEscuelasOriginales(escuelasArr);

            const barriosFiltrados = filtrarBarrios(escuelasArr);

            setBarrios(barriosFiltrados);
        })

             
    };

 const filtrarBarrios = (data) => 
    data.reduce((acumulador, escuela) => {
        if (!acumulador.includes(escuela.barrio)) return [...acumulador, escuela.barrio];
        
        return acumulador
    }, []);
 
   
    const onFilterChange = (event) =>{
        const barrioSeleccionado = event.target.value;

       if (barrioSeleccionado === "todos") setEscuelas(escuelasOriginales)
       else {
            const escuelasFiltradas = escuelasOriginales.filter(escuela => escuela.barrio === barrioSeleccionado);

        setEscuelas(escuelasFiltradas);
       }
    }

    useEffect(() => {
        getData();
    }, []);

    useEffect(() =>{} , [escuelas]);
    
    return (
    <>
        <Wrapper direction="column">
        {/* <option value="select">Todos</option> */}
        

        <h2>Filtrar por barrio: </h2>
        
            <select onChange={onFilterChange}>   
            <option value="todos">Todos</option>        
            {barrios.map(barrio => <option value={barrio} key={barrio}>{barrio}</option>)}
            </select>

    <Resultados>
        {escuelas.slice(0,10).map(escuela =>(
        <Card>
            <CardImg>
                <img src= {escuela.imagen} />
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
    
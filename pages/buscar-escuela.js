// import React, { useState, useEffect } from 'react';
import auth0 from '../lib/auth0'
import {Layout, BuscarEscuela as BuscarEscuelaContainer} from "../containers";
import {Wrapper} from "../components";


function BuscarEscuela(){

    return(
         <Layout>
           <Wrapper></Wrapper>
           
             <BuscarEscuelaContainer />
         </Layout>
     )
}

export default BuscarEscuela;
import React from 'react';
import auth0 from '../lib/auth0'
import {Layout, Administrador as AdministradorContainer} from "../containers";

function Administrador(){
    return(
        <Layout>
            <AdministradorContainer />
        </Layout>
    )
}

export default Administrador;
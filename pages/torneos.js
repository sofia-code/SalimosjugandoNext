import React from 'react';
import auth0 from '../lib/auth0'
import {Layout, Torneos as TorneosContainer} from "../containers";

function Torneos(){
    return(
        <Layout>
            <TorneosContainer />
        </Layout>
    )
}

// export async function getServerSideProps({ req, res }) {
//     const session = await auth0.getSession(req);
//     if (!session || !session.user) {
//       res.writeHead(302, {
//         Location: "/api/login",
//       });
//       res.end();
//       return {};
//     }
//     return { props: { user: session.user } };
//   }


export default Torneos;
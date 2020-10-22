//import auth0 from '../../../lib/auth0';
import { firebase } from '../../../lib';
const firebaseDB = firebase.database();
​
export default async (req, res) => {
    try {
​
        //Add auth0
      //  const session = await auth0.getSession(req);
       // if (!session || !session.user) {
        //    res.writeHead(302, {
         //     Location: '/api/login'
         //   });
         //   res.end();
        //    return;
     //   }
​
     //   const { user } = session
      //  const { name:username } = user
​
        //Datos filtrados por username. Se tiene que usar orderByChild para elegir el campo y equalTo para comparalo
        firebaseDB.ref('escuelas').orderByChild('username').equalTo(username).once('value', (snapshot) => {
            const escuelasArr = [];
            snapshot.forEach((childSnapshot) => {
                escuelasArr.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                })
            })
            escuelasArr.reverse()
            res.status(200).json(escuelasArr);
        })
​
    } catch (error) {
        console.error(error);
        res.status(error.status || 500).json({
            code: error.code,
            error: error.message
        });
    }
​
};
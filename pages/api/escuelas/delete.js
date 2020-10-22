//import auth0 from '../../../lib/auth0';
import { firebase } from '../../../lib';
const firebaseDB = firebase.database();
​
export default async (req, res) => {
   if (req.method === 'POST') { //Deberia ser DELETE
        try {   
            const { id } = req.body.data;
            await firebaseDB.ref(`escuelas/${id}`).remove()
            res.statusCode = 200
            res.json({ status: 'deleted', id })
        } catch (error) {
            console.log('tiro error', error)
            res.statusCode = 400
            res.json({ status: 'error', error })
        }
   } else {
       res.statusCode = 405
       res.json({ message: 'We only support POST :(' });
   }
​
}
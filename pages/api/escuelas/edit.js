import { firebase } from '../../../lib';
const firebaseDB = firebase.database();
const actualizarEscuelita = async (nuevosDatos, id) => {
   
     
       try {
        await firebaseDB.ref(`escuelas`).doc(id).update(nuevosDatos)
       } catch (error) {
           console.log("error", error)
       } 
}

export default actualizarEscuelita;
import { firebase } from "../../../lib";
const actualizarEscuela = async (nuevosDatos, id) => {
  try {
    const firebaseDB = firebase.database();

    return await firebaseDB.ref(`escuelas/${id}`).update(nuevosDatos);
  } catch (error) {
    console.log("error", error);
  }
};

export default actualizarEscuela;

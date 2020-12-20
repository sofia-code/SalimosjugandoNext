import auth0 from "../../../lib/auth0";
import { firebase } from "../../../lib";
const firebaseDB = firebase.database();

const agregarEscuelita = async (nuevaEscuelita) => {
  try {
    const responseKey = await firebaseDB.ref("escuelas").push(nuevaEscuelita).getKey();

    console.log("escuelita Creada", responseKey);
  } catch (error) {
    console.error(error);
  }
};

export default agregarEscuelita;

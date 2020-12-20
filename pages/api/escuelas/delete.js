import { firebase } from "../../../lib";
const firebaseDB = firebase.database();

const eliminarEscuela = async (id) => {
  try {
    await firebaseDB.ref(`escuelas/${id}`).remove();
  } catch (error) {
    console.log("tiro error", error);
  }
};

export default eliminarEscuela;

import { firebase } from "../../../lib";

const obtenerEscuelas = async () => {
  try {
    const firebaseDB = firebase.database();

    return firebaseDB
      .ref("escuelas")
      .once("value")
      .then((snapshot) => {
        let escuelasArr = [];

        snapshot.forEach((childSnapshot) => {
          escuelasArr = [
            ...escuelasArr,
            {
              id: childSnapshot.key,
              ...childSnapshot.val(),
            },
          ];
        });

        return escuelasArr;
      });
  } catch (error) {
    console.error(error);
  }
};

export default obtenerEscuelas;

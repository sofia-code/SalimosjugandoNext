import auth0 from '../../../lib/auth0';
import { firebase } from '../../../lib';
const firebaseDB = firebase.database();

export default async (req, res) => {
  try {
    firebaseDB.ref('escuelas').once('value', (snapshot) => {
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

  } catch (error) {
    console.error(error);
    res.status(error.status || 500).json({
      code: error.code,
      error: error.message
    });
  }
};
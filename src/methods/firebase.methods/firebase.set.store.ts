import {doc, setDoc} from "firebase/firestore";
import {firestore} from "../../configs/firebase.config";

export function setToStore(userID:string, nameUser:string, lastName:string, phone:string, city:string, warehouse:string) {
    const userDocRef = doc(firestore, 'users', userID);
    const userData = {
        userId: userID,
        name: nameUser,
        lastName: lastName,
        phone: phone,
        city: city,
        warehouse: warehouse
    }
    setDoc(userDocRef, userData)
        .then(() => {
            console.log("Дані успішно збережені в Firestore");
        })
        .catch((error) => {
            console.error("Помилка при збереженні даних:", error);
        });

}
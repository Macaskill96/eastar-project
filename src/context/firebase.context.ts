import {createContext} from "react";
import firebase from "firebase/app";

export const FirebaseContext = createContext<firebase.FirebaseApp | null>(null)
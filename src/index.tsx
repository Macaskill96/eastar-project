import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import {RouterProvider} from "react-router-dom";
import {router} from "./router";
import {store} from "./redux";
import {FirebaseContext} from "./context/firebase.context";
import {firebaseApp} from "./configs/firebase.config";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
    <Provider store={store}>
        <FirebaseContext.Provider value={firebaseApp}>
            <RouterProvider router={router}/>
        </FirebaseContext.Provider>
</Provider>
)


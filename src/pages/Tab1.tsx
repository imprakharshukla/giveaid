import {IonContent, IonIcon, IonPage} from '@ionic/react';
import './Tab1.css';
import React from "react";
import {logoFacebook, navigateCircle, pin} from "ionicons/icons";

const Tab1: React.FC = () => {
    return (
        <IonPage>
            <IonContent fullscreen>
                <div
                    className={"flex font-sans flex-col justify-center items-center bg-primary space-y-6 px-4 py-5 rounded-b-3xl"}>
                    <h1 className={"text-white font-extrabold"}>Giveaids</h1>
                    <div className="mb-6  flex space-x-5 justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className={"text-white fill-current"} viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M18.364 17.364L12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>
                        <input type="email" id="email"
                               className="bg-secondary text-white font-semibold ring-0 focus:ring-0 focus:ring-offset-0 border-0 placeholder-white text-sm rounded-lg block w-full px-4 py-5"
                               placeholder="Select Pickup Location" required/>
                    </div>
                    <div className="mb-6">
                        <input type="email" id="email"
                               className="bg-secondary text-white font-semibold ring-0 focus:ring-0 focus:ring-offset-0 border-0 placeholder-white text-sm rounded-lg block w-full px-4 py-5"
                               placeholder="Select Pickup Location" required/>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Tab1;

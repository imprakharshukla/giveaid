import {IonContent, IonPage} from '@ionic/react';
import './Tab1.css';
import React from "react";

const Tab1: React.FC = () => {
    return (
        <IonPage>
            <IonContent fullscreen>
                <div
                    className={"flex font-sans flex-col justify-center items-center bg-primary space-y-6 px-4 py-5 rounded-b-3xl"}>
                    <h1 className={"text-white font-extrabold"}>Giveaids</h1>
                    <div className="mb-6">
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

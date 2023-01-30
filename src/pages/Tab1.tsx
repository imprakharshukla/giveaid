import {IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar} from '@ionic/react';
import './Tab1.css';
import React from "react";

const Tab1: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Tab 1</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Dashboard</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <div className={"flex justify-center items-center bg-green-400"}>
                    <IonText>
                        <h1>Giveaid</h1>
                    </IonText>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Tab1;

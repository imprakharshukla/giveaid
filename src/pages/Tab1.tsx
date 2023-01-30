import {IonContent, IonPage} from '@ionic/react';
import './Tab1.css';
import React from "react";


const Tab1: React.FC = () => {
    return (
        <IonPage>
            <IonContent fullscreen>
                <div
                    className={"flex font-sans flex-col justify-center items-center bg-primary space-y-6 px-4 py-5 rounded-b-3xl"}>
                    <h1 className={"text-white font-extrabold"}>GiveAid</h1>
                    <div className="mb-6  flex space-x-5 justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className={"text-white fill-current"}
                             viewBox="0 0 24 24" width="24" height="24">
                            <path fill="none" d="M0 0h24v24H0z"/>
                            <path
                                d="M18.364 17.364L12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
                        </svg>
                        <input type="email" id="email"
                               className="bg-secondary text-white font-semibold ring-0 focus:ring-0 focus:ring-offset-0 border-0 placeholder-white text-sm rounded-lg block w-full px-4 py-5"
                               placeholder="Select Pickup Location" required/>
                    </div>
                    <div className="mb-6  flex space-x-5 justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className={"text-white fill-current"}
                             viewBox="0 0 24 24" width="24" height="24">
                            <path fill="none" d="M0 0H24V24H0z"/>
                            <path
                                d="M19.562 12.098l1.531 2.652c.967 1.674.393 3.815-1.28 4.781-.533.307-1.136.469-1.75.469H16v2l-5-3.5 5-3.5v2h2.062c.088 0 .174-.023.25-.067.213-.123.301-.378.221-.601l-.038-.082-1.531-2.652 2.598-1.5zM7.737 9.384l.53 6.08-1.73-1-1.032 1.786c-.044.076-.067.162-.067.25 0 .245.177.45.41.492l.09.008H9v3H5.938c-1.933 0-3.5-1.567-3.5-3.5 0-.614.162-1.218.469-1.75l1.031-1.786-1.732-1 5.53-2.58zm6.013-6.415c.532.307.974.749 1.281 1.281l1.03 1.786 1.733-1-.53 6.08-5.532-2.58 1.732-1-1.031-1.786c-.044-.076-.107-.14-.183-.183-.213-.123-.478-.072-.631.11l-.052.073-1.53 2.652-2.599-1.5 1.53-2.652c.967-1.674 3.108-2.248 4.782-1.281z"/>
                        </svg>
                        <input type="email" id="email"
                               className="bg-secondary text-white font-semibold ring-0 focus:ring-0 focus:ring-offset-0 border-0 placeholder-white text-sm rounded-lg block w-full px-4 py-5"
                               placeholder="Select Pickup Location" required/>
                    </div>
                    <div className="mb-6  flex space-x-5 justify-center items-center">
                        <button className="text-primary bg-white px-36 py-4 rounded-md">Continue</button>
                    </div>
                </div>
                {/*THIS IS THE PARENT DIV BELOW THE GREEN THING*/}
                <div className={"pt-12 mx-8"}>
                    <div className={"bg-gray-200 rounded-lg drop-shadow"}>
                    {/*DIV FOR UPPER PART OF COMPONENT*/}
                        <div className={"flex justify-between px-6 py-4"}>
                        {/*TEXT DIV*/}
                            <div>
                                <span className={"text-xl block"}>Clothes</span>
                                <span className={"ml-1 tracking-tight"}>In transit.</span>
                            </div>
                        </div>
                        <div className={"border-t border-gray-300 pl-8 py-2"}>
                            <span className={"text-gray-500"}>Kikari Orphanage →</span>
                        </div>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Tab1;

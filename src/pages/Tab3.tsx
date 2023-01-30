import {IonContent, IonPage} from '@ionic/react';
import './Tab3.css';
import React from "react";

const Tab3: React.FC = () => {
    return (<IonPage>
            <IonContent fullscreen>
                <div
                    className={"flex font-sans flex-col justify-center items-center bg-primary px-4 py-6 rounded-b-3xl"}>
                    <span className={"text-white text-3xl font-extrabold"}>GiveAid</span>
                </div>
                {/*THIS IS THE PARENT DIV BELOW THE GREEN THING*/}
                <div className={"pt-12 mx-8 flex flex-col gap-y-6"}>

                    <div className={"bg-gray-50 border border-gray-100 rounded-lg drop-shadow"}>
                        {/*DIV FOR UPPER PART OF COMPONENT*/}
                        <div className={"flex justify-between px-6 py-4"}>
                            {/*TEXT DIV*/}
                            <div className={"flex flex-row justify-items-start gap-x-6"}>
                                <div>*</div>
                                <div>
                                    <div className={"text-xl block"}>Dispatched</div>
                                    <div className={"ml-1 text-sm text-gray-600 tracking-tighter"}>To: Paras Old Age Home</div>
                                </div>
                            </div>
                        </div>
                        <div className={"border-t border-gray-300 pl-6 py-2"}>
                            <button><span className={"text-gray-500"}>Summary →</span></button>
                        </div>
                    </div>

                    <div className={"bg-gray-50 border border-gray-100 rounded-lg drop-shadow"}>
                        {/*DIV FOR UPPER PART OF COMPONENT*/}
                        <div className={"flex justify-between px-6 py-4"}>
                            {/*TEXT DIV*/}
                            <div className={"flex flex-row justify-items-start gap-x-6"}>
                                <div>*</div>
                                <div>
                                    <div className={"text-xl block"}>Dispatched</div>
                                    <div className={"ml-1 text-sm text-gray-600 tracking-tighter"}>To: Paras Old Age Home</div>
                                </div>
                            </div>
                        </div>
                        <div className={"border-t border-gray-300 pl-6 py-2"}>
                            <button><span className={"text-gray-500"}>Summary →</span></button>
                        </div>
                    </div>

                    <div className={"bg-gray-50 border border-gray-100 rounded-lg drop-shadow"}>
                        {/*DIV FOR UPPER PART OF COMPONENT*/}
                        <div className={"flex justify-between px-6 py-4"}>
                            {/*TEXT DIV*/}
                            <div className={"flex flex-row justify-items-start gap-x-6"}>
                                <div>*</div>
                                <div>
                                    <div className={"text-xl block"}>Dispatched</div>
                                    <div className={"ml-1 text-sm text-gray-600 tracking-tighter"}>To: Paras Old Age Home</div>
                                </div>
                            </div>
                        </div>
                        <div className={"border-t border-gray-300 pl-6 py-2"}>
                            <button><span className={"text-gray-500"}>Summary →</span></button>
                        </div>
                    </div>
                </div>
            </IonContent>
        </IonPage>);
};

export default Tab3;

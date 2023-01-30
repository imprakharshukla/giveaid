import {IonContent, IonPage} from '@ionic/react';
import './Tab2.css';
import React from "react";

const Tab2: React.FC = () => {
    return (
        <IonPage>
            <IonContent fullscreen>
                <div
                    className={"flex font-sans flex-col justify-center items-center bg-primary px-4 py-6 rounded-b-3xl"}>
                    <span className={"text-white text-3xl font-extrabold"}>GiveAid</span>
                </div>
                {/*THIS IS THE PARENT DIV BELOW THE GREEN THING*/}
                <div className={"pt-12 mx-6 mb-6"}>
                    <div className={"bg-white rounded-lg drop-shadow pb-3"}>
                        {/*DIV FOR UPPER PART OF COMPONENT*/}
                        <div className={"border-b border-gray-300 py-2 px-6 flex justify-between items-center"}>
                            <div className={"text-gray-500 tracking-tight "}>Estimated Delivery Date</div>
                            <div>*</div>
                        </div>
                        <div className={"flex justify-between px-6 py-4"}>
                            {/*TEXT DIV*/}
                            <div>
                                <div className={"font-sans text-4xl"}>Monday</div>
                                <div className={"font-sans text-xl"}>February</div>
                                <div className={"font-sans text-blue-800 text-8xl"}>25</div>
                                <div className={"font-sans text-4xl text-amber-400 mt-4"}>In Transit.</div>
                                <div className={"font-sans text-lg text-blue-500 font-semibold mt-6"}>Request Delivery
                                </div>
                            </div>
                        </div>
                        <div className={"border-t border-gray-300 mx-4 py-2"}/>
                        {/*Part that has DHL Image*/}
                        <div className={"flex justify-between mx-6 font-sans py-4"}>
                            <div className={"flex flex-row"}>
                                {/*Image Div*/}
                                <div className={"w-24 rounded-lg overflow-hidden border border-gray-200"}>
                                    <img src={"https://unsplash.it/400/400?random?=oogabooga"}
                                         className={"object-fit"} alt={"Shipping partner"}/>
                                </div>
                                <div className={"ml-3 flex flex-col justify-between pb-2"}>
                                    <div className={"text-xl pt-1"}>ShipRocket</div>
                                    <a href={"https://reddit.com/r/therewasanattempt"}>Support?</a>
                                </div>
                            </div>
                            <div className={"flex flex-col justify-between pb-2"}>
                                <div className={"text-xl pt-1"}>Tracking ID</div>
                                <a href={"https://reddit.com/r/sounding"}>133769240</a>
                            </div>
                        </div>
                        {/*Timeline Part*/}
                        <div className={"px-6 py-2"}>
                            <ol className="relative border-l border-gray-200 dark:border-gray-700">
                                <li className="mb-10 ml-4">
                                    <div
                                        className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                    <time
                                        className="mb-1 text-lg font-sans leading-none text-gray-800 dark:text-gray-500">February
                                        2022
                                    </time>
                                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get
                                        access to over 20+ pages including a dashboard layout, charts, kanban board,
                                        calendar, and pre-order E-commerce & Marketing pages.</p>
                                </li>
                                <li className="mb-10 ml-4">
                                    <div
                                        className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                    <time
                                        className="mb-1 text-lg font-sans leading-none text-gray-800 dark:text-gray-500">March
                                        2022
                                    </time>
                                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">All of the
                                        pages and components are first designed in Figma and we keep a parity between
                                        the two versions even as we update the project.</p>
                                </li>
                                <li className="ml-4">
                                    <div
                                        className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                    <time
                                        className="mb-1 text-lg font-sans leading-none text-gray-800 dark:text-gray-500">April
                                        2022
                                    </time>
                                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">Get started
                                        with dozens of web components and interactive elements built on top of Tailwind
                                        CSS.</p>
                                </li>
                            </ol>

                        </div>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Tab2;

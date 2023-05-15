import React from "react";
import BaseApp from "../baseApp";

export default function Border(){
    return(
        <BaseApp>
            <div>
                <h1>Border Utilities</h1>
                <p>Bootstrap's default utility classes can be found on the official Bootstrap Documentation page. The custom utilities below were created to extend this theme past the default utility classes built into Bootstrap's framework.</p>
            </div>
            <div className="boorder-component-container">
                <div className="border-component" style={{borderLeft:"5px solid #4E73DF"}}>
                .border-left-primary
                </div>
                <div className="border-component" style={{borderBottom:"5px solid #4E73DF"}}>
                .border-bottom-primary
                </div>
                <div className="border-component" style={{borderLeft:"5px solid brown"}}>
                .border-left-secondary
                </div>
                <div className="border-component" style={{borderBottom:"5px solid brown"}}>
                .border-bottom-secondary
                </div>
                <div className="border-component" style={{borderLeft:"5px solid lightgreen"}}>
                .border-left-success
                </div>
                <div className="border-component" style={{borderBottom:"5px solid lightgreen"}}>
                .border-bottom-success
                </div>
                <div className="border-component" style={{borderLeft:"5px solid skyblue"}}>
                .border-left-info
                </div>
                <div className="border-component" style={{borderBottom:"5px solid skyblue"}}>
                .border-bottom-info
                </div>
            </div>
        </BaseApp>
    )
}
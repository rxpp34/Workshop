import React from "react";
import Image from "./Assets/IMAGES/harcel.png"
import "./Assets/CSS/Stop.css"


function Stop()
{
    return (
        <div id="MainDiv-STOP">
            <img src={Image}/>
            <p> 
                Félicitations pour avoir complété ce quiz ! Rappelez-vous que vos mots et actions en ligne ont un impact. Ne laissez jamais le harcèlement vous affecter ou affecter les autres. Si vous êtes témoin de harcèlement, ayez le courage de dire STOP et de signaler ces comportements. Ensemble, nous pouvons rendre Internet plus bienveillant
            </p>

            <button> J'ai compris</button>
        </div>
    )
}


export default Stop ; 
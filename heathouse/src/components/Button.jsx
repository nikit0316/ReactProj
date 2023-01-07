import React from "react";

/*const HeaderButtons = props => {
    return(
        <button
        onClick={props.openPDF}
        id={props.value}> 
        <div
            id={props.value}
            className="text-red-900 text-xl font-bold w-full">
            {props.text}
        </div>

        </button>
    )
}

export default HeaderButtons; */

export default function Button(props) {
    return(
        <button
            onClick = {props.openPDF}
            src = {props.pdf}
            className ="text-red-900 text-xl font-bold"
        >
                <div>
                    {props.text}
                </div>
        </button>
    )
}
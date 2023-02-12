import React from "react";

export default function Joke({setup,punch}){
    return (
        <div className="card">
            <p className="setup">
                {setup}
            </p>
            <p className="punch">
                {punch}
            </p>
        </div>
    )
}
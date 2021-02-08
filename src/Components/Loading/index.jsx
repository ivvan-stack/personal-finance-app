import React from "react";

export const Loading = () => {
    return (
        <div className="re-central--small full full-center">
            <div className="columns is-mobile">
                <div className="column is-half is-offset-one-quarter">
                    <h3 className="title is-4 text-center">Cargando...</h3>
                    <progress className="progress is-large is-dark" max={100}></progress>
                </div>
            </div>
        </div>
    )
};

export default Loading;
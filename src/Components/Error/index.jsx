import React from "react";

export const Error = () => {
    return (
        <article className="message is-danger">
            <div className="message-header">
                <p>Upps!</p>
                <button className="delete" aria-label="delete" />
            </div>
            <div className="message-body">
                ¡Ha ocurrido un error! <br/>
                ¡No eres tu, somos nosotros!
            </div>
        </article>
    )
};

export default Error;
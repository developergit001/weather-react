import React from 'react';
import './style.css';

function Error() {
        return(
            <div className="error" >
                Hubo un error, por favor recargá la página.
                <br /><span className="error__sorry">Disculpe las molestias ocasionadas.</span>
            </div>
        );
}
export default Error;
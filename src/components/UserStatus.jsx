import React, { useState } from "react";
import PropTypes from "prop-types";
import { Contact } from "../models/contact";

function UserStatus({ contact }) {
    const [isConnected, setIsConnected] = useState(contact.connect);
    return (
        <button onClick={()=>setIsConnected(!isConnected)}>
            {isConnected ? "Contacto en Linea" : "Contacto no disponible"}
        </button>
    );
}

UserStatus.prototype = {
    contact: PropTypes.instanceOf(Contact),
};

export default UserStatus;

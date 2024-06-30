import React from 'react';
import { Redirect } from 'react-router-dom';

const ExternalRedirect = () => {
    window.location.href = 'https://www.petconnectrescue.org/resources/';
    return null; // or you can render a loading indicator here
};

export default ExternalRedirect;

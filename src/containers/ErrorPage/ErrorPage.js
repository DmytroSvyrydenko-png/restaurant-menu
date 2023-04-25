import React from "react";

import image from './yuppie.jpg';

export const ErrorPage = () => {
  return (
    <div>
      <h1>Kļūda, lapa nav atrasta!</h1>
      <img src={image} alt="Error" className="img" />
    </div>
  );
}
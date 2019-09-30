import React, { useState, useEffect } from "react";
import axios from "axios";

// Se puede aplicar destructuring: {phrase}, y se quita props
const Phrase = (props) => {
  return (
    <div className="frase">
      <h1> {props.phrase.quote} </h1>
      <p> - {props.phrase.author} </p>
    </div>
  );
}

const App = () => {
  // phrase = frase && quotes = frases
  const [phrase, setPhrase] = useState({});

  // Metodo para consultar datos de la API
  const getApi = async () => {
    const res = await axios(
      "https://breaking-bad-quotes.herokuapp.com/v1/quotes"
    );

    // console.log(res.data[0]);
    // Agregar el resultado de la API al state, (similar a this.setState)
    setPhrase(res.data[0]);
  };

  // consulta a rest API
  useEffect(
    () => {
      getApi();
    },
    [] // Que se tiene que actualizar para que el consultar api se llame de nuevo
  );

  // phrase = this.state
  // console.log(phrase);

  return (
    <div className="contenedor">
      <Phrase
        phrase = { phrase }
      />
      <button
        onClick={getApi}
      >
        Generar Nueva Frase
      </button>
    </div>
  );
};

export default App;

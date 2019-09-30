# Ejemplo 3 de react hooks

Este ejemplo se base en el uso de useEffect.
La llamada a la API se hace con el modulo axios

### Código basico:
```
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

```

### Vista Final proyecto:
![view proyect](https://github.com/OmarGC/frases-api-axios-hooks/blob/master/src/assets/frases.png)


#### Desarrollador: OmarGC

### uigradients, ##### https://uigradients.com/#ElectricViolet
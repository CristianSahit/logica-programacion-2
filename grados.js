function solicitarTemperatura() {
    let entrada = prompt("Ingrese la temperatura en grados Celsius:");//Muestra una ventana de entrada al usuario para que ingrese la temperatura en grados Celsius. 
    
    // Verificar que la entrada no esté vacía, no sea nula y sea un número válido
    while (entrada === null || entrada.trim() === "" || isNaN(entrada)) {
      alert("Error: Debe ingresar un número válido.");
      entrada = prompt("Ingrese la temperatura en grados Celsius:");
    }
    
    return parseFloat(entrada);//Una vez que el usuario ingresa un valor válido, lo convierte a número decimal con parseFloat() y lo devuelve para que se use en el resto del programa.
  }
  
  // Función que convierte de Celsius a Kelvin y Fahrenheit
  function convertirTemperaturas(celsius) {
    const kelvin = celsius + 273.15;
    const fahrenheit = (celsius * 9/5) + 32;
    return { kelvin, fahrenheit };
  }
  
  // Solicitar la temperatura al usuario
  const celsius = solicitarTemperatura();
  
  // Convertir la temperatura
  const resultados = convertirTemperaturas(celsius);
  
  // Imprimir los resultados en la consola (redondeados a 2 decimales)
  console.log("Grados Kelvin: " + resultados.kelvin.toFixed(2));
  console.log("Grados Fahrenheit: " + resultados.fahrenheit.toFixed(2));
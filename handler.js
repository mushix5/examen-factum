'use strict';
var {esfibonacci, getFibonacci}  = require('./funciones/fibonacci');
var {getCollatz}  = require('./funciones/collatz');
var {getFactorial, esFactorial}  = require('./funciones/factorial');
var {esPrimo}  = require('./funciones/primo');
var {getIMC}  = require('./funciones/imc');
var {getArrayNumbers}  = require('./funciones/operaciones');

const DATA_RESPONSE = {
  statusCode: 200,
}

async function Cfibonacci (event) {
  let numero = parseInt(`${event.pathParameters.numero}`);
  console.log(typeof numero)
  if(!numero){
    return {
      statusCode: 400,
      body: {},
    }
  }
  let info = await esFactorial(numero);

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: info,// ? 'Es fibonacci':'no es fibonacci',
      },
      null,
      2
    ),
  };
};

async function validaciones (event) {
  let numero = parseInt(`${event.pathParameters.numero}`);
  console.log(typeof numero)
  if(!numero){
    return {
      statusCode: 400,
      body: {}
    }
  }
  let response = DATA_RESPONSE; 
  let result = {
    fibonacci: false,
    factorial: false,
    primo: false,
    palindromo: false
  }

  try {
    result.factorial = await esFactorial(numero);
    result.fibonacci = await esfibonacci(numero);
    result.primo = await esPrimo(numero);
    result.palindromo = await esPrimo(numero);
    response.body = JSON.stringify(result);
  } catch (error) {
    console.log(error);
    response.statusCode = 500;
  }
  return response;
}

async function fibonacci(event){
  let numero = parseInt(`${event.pathParameters.numero}`);
  console.log(typeof numero)
  if(!numero){
    return {
      statusCode: 400,
      body: {}
    }
  }
  let response = DATA_RESPONSE; 
  let fibonacci = [];

  try {
    fibonacci = await getFibonacci(numero);
    response.body = JSON.stringify({"result": fibonacci});
  } catch (error) {
    console.log(error);
    response.statusCode = 500;
  }
  return response;
}

async function collatz(event){
  let numero = parseInt(`${event.pathParameters.numero}`);
  console.log(typeof numero)
  if(!numero){
    return {
      statusCode: 400,
      body: {}
    }
  }
  let response = DATA_RESPONSE; 
  let collatz = [];

  try {
    collatz = await getCollatz(numero);
    response.body = JSON.stringify({"result": collatz});
  } catch (error) {
    console.log(error);
    response.statusCode = 500;
  }
  return response;
}

async function factorial(event){
  let numero = parseInt(`${event.pathParameters.numero}`);
  console.log(typeof numero)
  if(!numero){
    return {
      statusCode: 400,
      body: {}
    }
  }
  let response = DATA_RESPONSE; 
  let factorial = [];

  try {
    factorial = await getFactorial(numero);
    response.body = JSON.stringify({"result": factorial});
  } catch (error) {
    console.log(error);
    response.statusCode = 500;
  }
  return response;
}

async function imc(event){
  let peso = parseInt(`${event.pathParameters.peso}`);
  let altura = parseInt(`${event.pathParameters.altura}`);
  
  if(!peso || !altura){
    return {
      statusCode: 400,
      body: {}
    }
  }
  let response = DATA_RESPONSE; 
  let imc = [];

  try {
    imc = await getIMC(peso, altura);
    response.body = JSON.stringify({"result": imc});
  } catch (error) {
    console.log(error);
    response.statusCode = 500;
  }
  return response;
}

async function operaciones(event){
  let cantidad = parseInt(`${event.pathParameters.cantidad}`);
  let max = parseInt(`${event.pathParameters.max}`);
  let min = parseInt(`${event.pathParameters.min}`);
  
  if(!cantidad || !max || !min){
    return {
      statusCode: 400,
      body: {}
    }
  }
  let response = DATA_RESPONSE; 
  let operaciones = [];

  try {
    operaciones = await getArrayNumbers(cantidad, max, min);
    response.body = JSON.stringify({"result": operaciones});
  } catch (error) {
    console.log(error);
    response.statusCode = 500;
  }
  return response;
}
module.exports = {
  validaciones,
  Cfibonacci,
  fibonacci,
  collatz,
  factorial,
  operaciones,
  imc
}
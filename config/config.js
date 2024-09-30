const axios = require ('axios');
const { response } = require('express');
const configUrl = 'https://manifest.engpro.totvs.com.br/apiConfig.json';
const dataUrl = 'https://manifest.engpro.totvs.com.br/apiData.json';

 const getConfig = async () => {

try{

  const response = await axios.get(configUrl);
return response.data;

} catch(error) {
  console.error('Erro ao carregar apiConfig.json',error);
}

 };

  const getData = async () => {

    try{
      const response = await axios.get(dataUrl);
      return response.data;
    }catch(error){
      console;error('Erro ao carregar apiData.json',error);
    }
  };

  module.exports = {
    getConfig,getData
  };
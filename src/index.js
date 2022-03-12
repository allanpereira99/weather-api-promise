const axios = require("axios");
const { parse } = require("./utils/parser.js");

const url = "http://servicos.cptec.inpe.br/XML/";

class weather {
  static locale(city) {
    return new Promise((resolve, reject) => {
      try {
        resolve(
          axios
            .get(`${url}listaCidades?city=${city.replace(" ", "%20")}`)
            .then((response) => response.data)
            .then((response) => parse(response))
            .then((response) => response.cidades.cidade)
            .then((response) => (response ? response : "not found"))
        );
      } catch (e) {
        reject("you need to pass a locale string");
      }
    });
  }
  static forecast(cod) {
    return new Promise((resolve, reject) => {
      try {
        if (typeof cod == "number") {
          resolve(
            axios
              .get(`${url}cidade/7dias/${cod}/previsao.xml`)
              .then((response) => response.data)
              .then((response) => parse(response))
              .then((response) => response.cidade.previsao)
          );
        } else {
          resolve("the parameter is not a number");
        }
      } catch (e) {
        reject("failure to get data");
     }
    });
  }
  static capitals() {
    return new Promise((resolve) => {
      resolve(
        axios
          .get(`${url}capitais/condicoesAtuais.xml`)
          .then((response) => response.data)
          .then((response) => parse(response))
          .then((response) => response.capitais.metar)
      );
    });
  }
}

module.exports = { weather: weather };

const convert = require("xml-js");

function parse(xml) {
  return new Promise((resolve, reject) => {
    const xmlParse = convert.xml2json(xml, { compact: true, spaces: 1 });
    const response = JSON.parse(xmlParse);
    resolve(response);
  });
}
module.exports = { parse: parse };

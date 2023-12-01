module.exports = (temp, product) => {
    let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName);
    output = output.replace(/{%IMAGE%}/g, product.image);
    output = output.replace(/{%DESC%}/g, product.desc);
    output = output.replace(/{%ÜLKELER%}/g, product.ülkeler);
    output = output.replace(/{%ID%}/g, product.id);
;
    return output;
  }

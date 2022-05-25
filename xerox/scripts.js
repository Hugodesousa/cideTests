
const definePrice = (quant) => {
    quant <= 10 ? valor = 0.50 : valor = 0.25;
    if (quant >= 100) {
        valor = 0.20
    } if (quant > 200) {
        valor = 0.15
    }
    const endValue = 1 + (valor * (quant - 1));
    return `R$ ${endValue.toFixed(2)}`
}
console.log(definePrice(0))
module.exports = { definePrice }


// quant <= 10 ? valor = 0.50 : valor = 0.25;
// quant >= 100 && quant < 200 ? valor = 0.20 : valor = 0.15;
// const endValue = 1 + (valor * (quant - 1));
// return `R$ ${endValue.toFixed(2)}`
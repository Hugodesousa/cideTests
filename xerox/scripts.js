const defineprice = () => {
    const valorImp5 = 0.50
    const primeira = 1
    const quant = 101
    function valor (quant) {
            if (quant <= 10) {
        valor = 0.50 
            }else{
        valor = 0.25
        } if (quant >= 100) { 
        valor = 0.20
        } if (quant > 200) { 
        valor = 0.15
    }
              
    return "R$" + (primeira + (valor * (quant - 1)) )
    }
}
module.exports = {defineprice} 
const {definePrice} = require('./scripts')

describe('Verifica se a função definePrice retornas os valores esperados', () => {
    it('Ao receber 5, 48, 117, 230, retorna R$ 3,00, R$ 12,75, R$ 24,20 e R$ 35,35 respctivamente.', () => {
      expect(definePrice(5)).toEqual('R$ 3.00');
      expect(definePrice(48)).toEqual('R$ 12.75');
      expect(definePrice(117)).toEqual('R$ 24.20');
      expect(definePrice(230)).toEqual('R$ 35.35');
    })
    });
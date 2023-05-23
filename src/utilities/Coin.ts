export default class Coin{
    static formatCoin(value: number){
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(value)
    }
}

// // Coin.formatCoin(1)
// const coinFormat = new Coin()
// coinFormat.formatCoin
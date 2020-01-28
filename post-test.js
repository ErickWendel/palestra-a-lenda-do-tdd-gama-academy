/**
 * buscar agua
 * esquentar agua
 * buscar cafe
 * filtrar cafe
 */


function fazerCafe() {
    if(naoTemAgua()) throw Error('Nao tem agua')
    const agua = buscarAgua()
    if(naoTemFogao()) throw Error('Não tem fogao')
    const temperaturaFogao = 100 * 0.3
    const aguaQuente = esquentarAgua(agua, temperaturaFogao)
    if(!aguaQuente) throw Error('Agua continua gelada!')
    const cafe = buscarCafe()
    const cafeFiltrado = filtrarCafe(cafe)
    return cafeFiltrado
}
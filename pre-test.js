/**
 * buscar agua
 * esquentar agua
 * buscar cafe
 * filtrar cafe
 */
 function existeAgua() {
     return true 
 }

 function buscarAgua() {
    if(!existeAgua()) throw Error('Não tem agua')
    return 'agua'
 }
 
 function existeFogaoDisponivel() {
     return true
 }

 function esquentar(agua) {
    if(!existeFogaoDisponivel()) throw Error('Fogao indisponivel')    

    return 'agua quente'
 }

 function temCafe() {
     return true 
 }

 function buscarCafe() {
    if(!temCafe()) throw Error('Não tem café')

    return 'café'
 }

 function filtrar(cafe, agua) {
     return 'filtrado'
 }


 //2 refatorar
 function validar() {
    if(!temCafe()) throw Error('Não tem café')
    if(!existeFogaoDisponivel()) throw Error('Fogao indisponivel')    
    if(!existeAgua()) throw Error('Não tem agua')
     
    return true 
 }

 function fazerCafe() {
    // refactoring...
    validar()

    const agua = buscarAgua()
    const aguaQuente = esquentar(agua)
    const cafe = buscarCafe()
    return filtrar(cafe, aguaQuente)
 }

 
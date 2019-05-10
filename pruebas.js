async function print() {
    console.log("Imprimir");
    printNumAwait(1)
    console.log("Fin imprimir");
    
}

function printNum(num) {
    esperarConPromesa(2).then(respuesta => {
        console.log(`Esto se ejecuta despues de ${num} seg`);
    }).catch(error => {
        console.log(`Capturando el error`);
        
    }).finally(()=>{
        console.log(`Despues de exito o error`);
        
    })
}

async function printNumAwait(num) {
    let response = await esperarConPromesa(num)
    console.log(`${num}`);
    return response
}

function esperarSinPromesa(sec) {
    setTimeout(function() {
        console.log(`Despues de esperar ${sec} segundos`);
        
    }, sec*1000)
}

function esperarConPromesa(sec) {
    return new Promise(resolve => setTimeout(resolve, sec*1000))
}

async function esperarConPromesa2(sec) {
    throw `Enviando error desde promesa 2`
}

print()
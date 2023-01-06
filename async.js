let data = [
    {
        id:1,
        nombre: "Fernando",
    },
    {
        id:2,
        nombre: "Jorge",
    },
    {
        id:3,
        nombre: "Sofia",
    },
]

//Recorrer array con .map (forma que tenemos de guardar un array en otro array)
// Pq usamos esto en react? => 

console.log(data.map(persona => persona.nombre).join(" - "))
//Recorrer array con bucle for. (es un bucle muy primitivo, es preferible no usarlo.)
for (let i = 0; i < data.length; i++) {
    console.log(data[i].nombre);
}
//Recorrer array con forEach()-
data.forEach((res)=>{
    console.log(res.nombre)
})


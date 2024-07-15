let guardar=document.getElementById("guardar")
let notas=[{
    id:1,
    titulo: 'Sacar la basura',
    texto: 'mi mama me va a retar si no lo hago',
    realizada: false
}]
let idGlobal=notas[0].id

let contenedor= document.getElementById('contenedorNotas')

function pintar(notas){
    if(notas.length==0){
        let anuncio = document.createElement('p')
        anuncio.id = "anuncio"
        anuncio.innerHTML = `NO HAY NOTAS PARA MOSTRAR`
        contenedor.appendChild(anuncio)

    } else {
    for (i=0; i<notas.length;i++){
        let espacioNota = document.createElement('div')
        espacioNota.id = `nota${notas[i].id}`
        espacioNota.className = 'card p-2 m-2'
        if (notas[i].realizada==false){
            espacioNota.innerHTML = `
                <div class="card-header row"> 
                <input class="form-check-input " id = "botonRealizada" onClick="marcarRealizada(${notas[i].id})" type="checkbox" ${notas[i].realizada? "checked": ""}>
                <h4 class="card-title col-7"> ${notas[i].titulo} </h4>
                </div>
                <div class="card-body text-center">
                <p id = "textoNota${notas[i].id}" class="card-text">${notas[i].texto}</p>
                <button type="button" class="btn btn-danger  m-1" id="borradoNota" onClick="borrarNota(${notas[i].id})">Borrar nota</button>
                </div>
            `
        } else {
            espacioNota.innerHTML = `
                <div class="card-header row"> 
                <input class="form-check-input " id = "botonRealizada" onClick="marcarRealizada(${notas[i].id})" type="checkbox" ${notas[i].realizada? "checked": ""}>
                <h4 class="card-title col-7"> ${notas[i].titulo} </h4>
                </div>
                <div class="card-body text-center">
                <p id = "textoNota${notas[i].id}" class="card-text text-decoration-line-through">${notas[i].texto}</p>
                <button type="button" class="btn btn-danger  m-1" id="borradoNota" onClick="borrarNota(${notas[i].id})">Borrar nota</button>
                </div>
            `

        }
       contenedor.appendChild(espacioNota) 

    }
        
     
}
}
pintar(notas)

guardar.addEventListener('click', (agregarNota)=>{
    if (document.getElementById("titulo").value==""&&document.getElementById("nota").value=="")
        {alert('no se puede guardar una nota sin contenido ni titulo')

        } else if (document.getElementById("nota").value=="") 
            {alert('no se puede guardar una nota sin contenido')}
            else if (document.getElementById("titulo").value=="") 
                {alert('no se puede guardar una nota sin titulo')}
            else {
                notas.push({
                    id: idGlobal+1,
                    titulo: document.getElementById("titulo").value,
                    texto: document.getElementById("nota").value,
                    realizada: false
                }
                ) 
                document.getElementById("titulo").value = ""
                document.getElementById("nota").value = ""
                idGlobal=notas[notas.length-1].id
            
                espacioNota = document.createElement('div')
                espacioNota.id = `nota${notas[notas.length-1].id}`
                espacioNota.className = 'card p-2 m-2'
                espacioNota.innerHTML = `
                        <div class="card-header row"> 
                        <input class="form-check-input " id = "botonRealizada" onClick="marcarRealizada(${notas[notas.length-1].id})" type="checkbox" ${notas[notas.length-1].realizada? "checked": ""}>
                        <h4 class="card-title col-7"> ${notas[notas.length-1].titulo} </h4>
                        </div>
                        <div class="card-body text-center">
                        <p id = "textoNota${notas[notas.length-1].id}" class="card-text">${notas[notas.length-1].texto}</p>
                        <button type="button" class="btn btn-danger  m-1" id="borradoNota" onClick="borrarNota(${notas[notas.length-1].id})">Borrar nota</button>
                        </div>
                    `
                contenedor.appendChild(espacioNota)
                let quitarAnuncio = document.getElementById('anuncio')
                if (quitarAnuncio!=null){
                    quitarAnuncio.remove()
                }
                

            } 
    
}
)

let botonBorrar = document.getElementById("borradoNota")


function borrarNota(id) {
    let notaBorrar = document.getElementById("nota" + id)
    notaBorrar.remove() 
    notas=notas.filter(notas => notas.id != id)
    if(notas.length==0){ 
        let anuncio = document.createElement('p')
        anuncio.id = "anuncio"
        anuncio.innerHTML = `NO HAY NOTAS PARA MOSTRAR`
        contenedor.appendChild(anuncio)
        
    } 
    
}  
botonBorrar.addEventListener('click', (borrar) => {
    onclick   
}  )

let borrar=document.getElementById("borrar")
borrar.addEventListener('click', (limpiarNota)=>{
    document.getElementById("titulo").value=""
    document.getElementById("nota").value=""
})

let botonRealizada = document.getElementById("botonRealizada")

 function marcarRealizada(id){
    notas.forEach(notas => {
        if (notas.id===id){
            if(notas.realizada===false){
                notas.realizada=true
                let textoNota = document.getElementById("textoNota" + id)
                textoNota.className="card-text text-decoration-line-through"
            } else {
                notas.realizada=false
                let textoNota = document.getElementById("textoNota" + id)
                textoNota.className="card-text"
            }
        
        }
        
    });
    
}



let filtroRealizadas = document.getElementById("realizadas")

filtroRealizadas.addEventListener('change', (e) => {
    contenedor.innerHTML=""
    if (filtroRealizadas.checked) {
        let notasTituloFiltro = notas.filter(a => a.realizada===true&&(a.titulo.toLowerCase().includes(document.getElementById("buscar").value.toLowerCase())||a.texto.toLowerCase().includes(document.getElementById("buscar").value.toLowerCase())))
        botonBorrar.addEventListener('click', (borrar) => {
            onclick   
        }  )
        botonRealizada.addEventListener('click', (r) => {onclick})
        pintar(notasTituloFiltro)
    } else {
        botonBorrar.addEventListener('click', (borrar) => {
            onclick   
        }  )
        pintar(notas)

    }
}
)

let busqueda = document.getElementById("buscar")

busqueda.addEventListener('keyup', (b) => {
    contenedor.innerHTML=""
    if (document.getElementById("buscar").value!=""){
        botonBorrar.addEventListener('click', (borrar) => {
            onclick   
        }  )
        botonRealizada.addEventListener('click', (r) => {onclick})
        let notasTitulo = notas.filter(a => a.titulo.toLowerCase().includes(document.getElementById("buscar").value.toLowerCase())||a.texto.toLowerCase().includes(document.getElementById("buscar").value.toLowerCase()))
        pintar(notasTitulo)
        filtroRealizadas.addEventListener('change', (e) => {
            contenedor.innerHTML=""
            if (filtroRealizadas.checked) {
                botonRealizada.addEventListener('click', (r) => {onclick})
                let notasTituloFiltro = notas.filter(a => a.realizada===true&&(a.titulo.toLowerCase().includes(document.getElementById("buscar").value.toLowerCase())||a.texto.toLowerCase().includes(document.getElementById("buscar").value.toLowerCase())))
                botonBorrar.addEventListener('click', (borrar) => {
                    onclick   
                }  )
                pintar(notasTituloFiltro)
            } else {
                botonBorrar.addEventListener('click', (borrar) => {
                    onclick   
                }  )
                pintar(notasTitulo)

            }
        }
        )
        
    } else {
        pintar(notas)
    }
}
)


//elementos
//nombre
const pokemon = document.getElementById("Pokemon");

//movimientos
const Mov = document.getElementById("PokeMov");

//estadisiticas
const Ps = document.getElementById("hp");
const Atk = document.getElementById("attack");
const Def = document.getElementById("defense");
const SpAtk = document.getElementById("specialAttack");
const SpDef = document.getElementById("specialDefense");
const Speed = document.getElementById("speed");



//funcion para conseguir los datos del pokemon
const fetchPokemon = () => {
    // nombre del pokemon
    const Pokename = document.getElementById("Pokename");
    //toLowerCase lo manda a minusculas
    let pokeInput = Pokename.value.toLowerCase();

     //url de imagen y nombre
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;


    //(fetch(url))consulta al api en donde solicita la información que se tiene en el url
    //Api es una programación asincrona
    //por eso se ocupan las promesas que son los datos que se procesaran para obtener la informacion del api
    //la promesa se utiliza con el comando .then recibiendo una funcion por medio de una respuesta creando una funcion
    fetch(url).then((res) => {
         //esto todavia es una promesa
        
        //muestra lo que se tiene
       // console.log(res);

        //manejo de errores
        //consulta para validar que si se tenga un pokemon con el nombre ingresado
        //200 es el correcto
        if (res.status != "200") {
            console.log(res);
             //se manda imagen indicando el error
            pokeImage("assets/pikachu.jpg")
        }
        else {
            //devuelve la respuesta siempre y cuando sea valida
            return res.json();
        }

    }).then((data) => {
        //esto seria la data de la respuesta
        //console.log(data);


        //muestra la imagen
        //.sprites.front_default son los niveles que tiene el api 
        
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            console.log(pokeImg);

            //funcion para estadisticas
            estadisticas(data);

            //funcion para movimientos
            movimientos(data);

        }
    });
}

//funcion para cambiar la imagen
const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}

//funcion en donde muestra los movimientos del pokemon
const movimientos = (data) => {
    let moves = data.moves;
    Mov.innerHTML = "";

    for (let i=0;i<moves.length; i++)
    {
        const moves = document.createElement("li");
        Mov.appendChild(mov);

        moves.innerText = moves[i].moves.name;
    }
}

//funcion para mostrar las estadisticas
const estadisticas = (data) => {
    Ps.innerText = data.stats[0].base_stat;
    Atk.innerText = data.stats[1].base_stat;
    Def.innerText = data.stats[2].base_stat;
    SpAtk.innerText = data.stats[3].base_stat;
    SpDef.innerText = data.stats[4].base_stat;
    Speed.innerText = data.stats[5].base_stat;
}


//funcion para imprimir el nombre (NO SE USA)
const imprimir = () => {
    //.document lee el documento de html y busca en el, algo que tenga el nombre del id que se busca
    const Pokename = document.getElementById("Pokename");
    //se crea variable. value es lo que tiene dentro del input(el usuario escribio)
    let pokeInput = Pokename.value;
    console.log("Hola soy " + pokeInput);
}

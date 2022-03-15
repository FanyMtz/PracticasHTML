//funcion fecha
const fetchPokemon = () => {
    // nombre del pokemon
    const Pokename = document.getElementById("Pokename");
    //toLowerCase lo manda a minusculas
    let pokeInput = Pokename.value.toLowerCase();

    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    //(fetch(url))consulta al api en donde solicita la información que se tiene en el url
    //Api es una programación asincrona
    //por eso se ocupan las promesas que son los datos que se procesaran para obtener la informacion del api
    //la promesa se utiliza con el comando .then recibiendo una funcion por medio de una respuesta creando una funcion
    fetch(url).then((res) => {
        //esto todavia es una promesa
        
        //muestra lo que se tiene
        console.log(res);

        //manejo de errores
        //consulta para validar que si se tenga un pokemon con el nombre ingresado
        //200 es el correcto
        if(res.status != 200)
        {
            console.log(res);
            //se manda imagen indicando el error
            pokeImage("assets/pikachu.jpg")
        }
        else
        {
            //devuelve la respuesta siempre y cuando sea valida
            return res.json();
        }

        
    }).then((data) => {
        //esto seria la data de la respuesta
        console.log(data);


        //muestra la imagen
        //.sprites.front_default son los niveles que tiene el api 
        let pokeImg = data.sprites.front_default;
        console.log(pokeImg);
        pokeImage(pokeImg);


        //muestra el tipo de pokemon

        //muestra las estadisticas

        //muestra los movimientos
        let pokeMov = data.sprites.moves;
        console.log(pokeMov);
    }) 
}

//sirve para ejecutar la funcion
//fetchPokemon();


//funcion para cambiar la imagen
const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImg");
    //el atributo que se cambiara es el src por eso se menciona que se cambiara a la url
    pokeImg.src = url;
}



//funcion para imprimir el nombre (NO SE USA)
const imprimir = () => {
    //.document lee el documento de html y busca en el, algo que tenga el nombre del id que se busca
    const Pokename = document.getElementById("Pokename");
    //se crea variable. value es lo que tiene dentro del input(el usuario escribio)
    let pokeInput = Pokename.value;
    console.log("Hola " + pokeInput);
}
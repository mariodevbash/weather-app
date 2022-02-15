require('dotenv').config();
const { leerInput, inquirerMenu, pausa, listarLugares } = require('./helpers/inquirer');
const Busquedas = require('./models/busquedas');

const main = async () => {

    const busquedas = new Busquedas();
    let opt;

    do {
        opt = await inquirerMenu();

        switch (opt) {
            case 1:
                //Mostrar Mensaje
                const termino = await leerInput('Ciudad: ');
                const lugares = await busquedas.ciudad(termino);

                //Buscar los lugares
                const id = await listarLugares(lugares);
                const lugarSel = lugares.find(lugar => lugar.id === id);
                console.log(lugarSel);

                // Seleccionar el lugar

                //Clima

                //Mostrar Resultados
                console.log('\nInformación de la ciudad\n'.green);
                console.log('Ciudad: ', lugarSel.nombre);
                console.log('Lat: ', lugarSel.lat);
                console.log('Lng: ', lugarSel.lng);
                console.log('Temperatura: ');
                console.log('Mínima: ');
                console.log('Máxima: ');
                await pausa();

                break;
            case 2:
                console.log(opt);
                break;
        }

        if (opt === 0) await pausa();

    } while (opt !== 0)

}

main();
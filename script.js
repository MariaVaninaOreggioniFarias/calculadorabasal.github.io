const ERROR = document.getElementById("error")
const DIARIO = document.getElementById("diario")
const FLU = document.getElementById("flu")
const MAN = document.getElementById("man")
const INPUT = document.getElementById("peso")
const BUTTON = document.getElementById("calcular")
const OBSERVACIÓN = document.getElementById("observacion")

BUTTON.addEventListener("click", () => {
    let peso = INPUT.valueAsNumber;

    if(peso > 0 && peso<=30) {
        console.log("calcular");
        ERROR.style.display = "none";
        let resultadodiario = Math.round(holliday(peso));
        let rest = resultadodiario/24;
        const res = Math.round(rest)
        DIARIO.innerHTML = 'Total al día: ' + resultadodiario + ' cc.'
        DIARIO.style.display = "block";
        FLU.innerHTML = 'Total por hora: ' + res + ' cc.';
        FLU.style.display = "block";
        console.log(res)
        let mantenimiento = res*1.5;
        MAN.innerHTML = 'Mantenimiento: ' + mantenimiento + ' cc/hr';
        MAN.style.display = 'block';
        OBSERVACIÓN.style.display = "none";
    
      } else if(peso>30){
        let superficiecorporal = ((peso * 4) + 7) / (peso + 90)
        let opcion1 = superficiecorporal * 1500;
        let opcion2 = superficiecorporal * 2000;

        const redondeoopcion1 = Math.round(opcion1);
        const redondeoopcion2 = Math.round(opcion2);
        FLU.innerHTML = redondeoopcion1+ "cc";
        DIARIO.innerHTML = redondeoopcion2 + "cc";
        FLU.style.display = "block";
        DIARIO.style.display = "block";
        MAN.display = "none";
        OBSERVACIÓN.innerHTML = 'OBSERVACIÓN: El primer resultado está multiplicado por 1500 y el segundo por 2000, quedando a su elección cual utilizar.';
        OBSERVACIÓN.display = "block";

      
    } else{
        console.log("error")
        ERROR.style.display = "block";
    }

});
    function holliday(peso){
          let volumen;
          //algoritmo
        if (peso <= 10){
          volumen = peso*100
        } else if (peso >10 && peso <=20){
          volumen = 1000 + (peso-10)*50
        } else {
          volumen = 1500 + (peso - 20)*20;
        }
          return volumen;
    }
  









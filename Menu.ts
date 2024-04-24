class Menu extends itemMenu {
    imprimirMenu (){
        console.log(
            `1 - Atacar 
             2 - Ataque especial
             3 - Tomar poção de Cura de HP
             4 - Tomar poção que restaura MP
             5 - Defender`)
    }
}

let menu  = new Menu();
menu.imprimirMenu()
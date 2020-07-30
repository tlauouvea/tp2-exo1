function deplcer_diode_dans_colonne (colonne: string) {
    for (let ligne = 0; ligne <= 4; ligne++) {
        let colonne = 0
        if (led.point(colonne, ligne)) {
            ligne_suivante = 0
        }
    }
}
let ligne_suivante = 0
let directions = [1, 1, 1, 1, -1]
for (let i = 0; i <= 4; i++) {
    led.plot(i, i)
}
basic.forever(function () {
    for (let colonne_boucle = 0; colonne_boucle <= 4; colonne_boucle++) {
        deplcer_diode_dans_colonne(colonne_boucle)
    }
})

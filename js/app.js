console.log("JS funcionando");
import Remera from "./Remera.js";

const contenedor = document.getElementById("contenedor");

const remeras = [
    new Remera("Oversize", 20000, "img/berserk_front.jpeg", {
        S: 0,
        M: 0,
        L: 0,
        XL: 0
    }),
    new Remera("Oversize", 20000, "img/berserk_back.jpeg", {
        S: 0,
        M: 0,
        L: 0,
        XL: 0
        }),
    new Remera("Oversize", 20000, "img/toji_front.jpeg", {
        S: 0,
        M: 0,
        L: 0,
        XL: 0
    }),
    new Remera("Oversize", 20000, "img/toji_back.jpeg", {
        S: 0,
        M: 0,
        L: 0,
        XL: 0
    }),
    new Remera("Oversize", 20000, "img/one_piece_front.jpeg", {
        S: 0,
        M: 0,
        L: 0,
        XL: 0
    }),
    new Remera("Oversize", 20000, "img/one_piece_back.jpeg", {
        S: 0,
        M: 0,
        L: 0,
        XL: 0
    }),
    new Remera("Top mujer", 10000, "img/gojo_eye.jpeg", {
        Talle_Unico: 1
    }),
    new Remera("Top mujer", 10000, "img/heart_red.jpeg", {
        Talle_Unico: 1
    }),
    new Remera("BoxyFit", 18000, "img/fentanxl.jpeg", {
        S: 1,
        M: 0,
        L: 1,
        XL: 2
    }),
    new Remera("Remera Mujer Classic", 15000, "img/butterfly.jpeg", {
        S: 0,
        M: 0,
        L: 0,
        XL: 1
    }),
    new Remera("Baby Body", 10000, "img/abejita.jpeg", {
        1: 0,
        2: 0,
        3: 0,
        4: 0
    }),
    new Remera("Remera Niño", 12000, "img/lila.jpeg", {
        S: 0,
        M: 0,
        L: 0,
        XL: 0
    }),
    
    new Remera("Remera Mujer Classic", 15000, "img/luci.jpeg", {
        S: 0,
        M: 0,
        L: 0,
        XL: 0
    }),
    

];

remeras.forEach(remera => {
    contenedor.innerHTML += remera.render();
});

/* Javascript para este Tooltip

Se ingresan las funciones dentro de los for que harian que el tooltip se active cada vez el
mouse este encima  y que desaparezca cuando se deja de pasar el mouse por ahi.

Ademas se agregara el keyword this que investigamos, este en este caso se va a utilizar
para referirnos al elemento que recive el evento. */

let codigo_tooltip = document.getElementsByClassName("codigo_tooltip");

for (let i = 0; i < codigo_tooltip.length; i++) {
    codigo_tooltip[i].addEventListener("mouseover", function () {
        let tooltip = this.getElementsByClassName("tooltip")[0];
        tooltip.style.display = 'inline'
    });
    codigo_tooltip[i].addEventListener("mouseout", function () {
        let tooltip = this.getElementsByClassName("tooltip")[0];
        tooltip.style.display = 'none';
    });
}

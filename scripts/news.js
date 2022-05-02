// Ude Import export (MANDATORY)
import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML=navbar();

let data =  JSON.parse(localStorage.getItem("news"));

console.log(data);

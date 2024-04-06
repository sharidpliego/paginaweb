var n;

function cambia_imagen(n) 
{
	var nombre_imagen, titulo, imagen, texto;

	nombre_imagen = document.images[n].src;
	titulo = document.images[n].alt;

	imagen = document.images["imagen_grandota"];
	imagen.src = nombre_imagen;

	texto = document.getElementById("titulo_imagen");
	texto.innerHTML = titulo;
}
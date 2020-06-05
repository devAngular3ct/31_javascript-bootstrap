var tabla = [
	{ equipo: 'América', puntos: 15},
	{ equipo: 'Chivas', puntos: 15},
	{ equipo: 'Cruz Azul', puntos: 16},
	{ equipo: 'Pumas', puntos: 18},
	{ equipo: 'Jaguares', puntos: 11},
	{ equipo: 'Morelia', puntos: 9}
];
/*
	Probando la carga de mis eventos
*/
window.onload = cargarEventos;

//Función cargarEventos
function cargarEventos(){
	document.getElementById("mostrar-tabla").addEventListener("click",mostrarTabla,false);
	document.getElementById("nuevo-equipo").addEventListener("submit",nuevoEquipo,false);
}

//Función mostrarTabla
function mostrarTabla(){
	var cuerpoTabla = document.getElementById("equipos-tabla");
	var tablaLlena ="";
	//cuerpoTabla.innerHTML = "<tr><td>  Veracruz  </td><td>  18  </td></tr>";
	//cuerpoTabla.innerHTML = "<tr><td>" + tabla[0].equipo + "</td><td>" + tabla[0].puntos + "</td></tr>";

	for(i = 0; i < tabla.length; i ++){
		tablaLlena += "<tr><td>" + tabla[i].equipo + "</td><td>" + tabla[i].puntos + "</td></tr>";
	}
	cuerpoTabla.innerHTML = tablaLlena;
}

//Función para registrar unn nuevo equipo
function nuevoEquipo(event){
	event.preventDefault();
	var equipoInsert = document.getElementById("equipo").value;
	var puntosInsert = document.getElementById("puntos").value;

	var nuevoEquipo = { equipo: equipoInsert , puntos: puntosInsert};
	tabla.push(nuevoEquipo);
}
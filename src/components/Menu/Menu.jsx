import React from 'react';
import data from '../../data.json';
import Card from '../Card/Card';

/* Renderizar todas las categorias obtendias del archivo JSON
console.log(data[0]);

var objeto = data[0].Categorias;
var CategoryInfo = [];
for (const property in objeto) {
	if (objeto[property].catPadre === 1) {
		console.log(`${property}: ${objeto[property].nombreCat}`);
		CategoryInfo.push({ id: objeto[property].idCategoria, name: objeto[property].nombreCat });
	}
}
console.log('categorias: ', CategoryInfo);
 */
var CategoryInfo = [];
CategoryInfo.push({ id: 7, name: 'Pizzas' });
CategoryInfo.push({ id: 9, name: 'Hamburgesas' });
CategoryInfo.push({ id: 83, name: 'Fritas' });
CategoryInfo.push({ id: 102, name: 'Combos' });

var objeto2 = data[0].Productos;
var ProductInfo = [];
for (const property in objeto2) {
	//console.log(`${property}: ${objeto2[property].nombreProducto}`);
	ProductInfo.push({
		id: objeto2[property].idCategoria,
		name: objeto2[property].nombreProducto,
		description: objeto2[property].descriProducto,
		imagenProducto: objeto2[property].imagenProducto,
		idProducto: objeto2[property].idProducto,
		precioProducto: objeto2[property].precioProducto,
	});
}

var productDisplay1 = ProductInfo.filter((e) => e.id === 7);
var productDisplay2 = ProductInfo.filter((e) => e.id === 9);
var productDisplay3 = ProductInfo.filter((e) => e.id === 83);
var productDisplay4 = ProductInfo.filter((e) => e.id === 102);
//.log('productos: ', ProductInfo);

export default function Menu() {
	function openCity(cityName) {
		var i;
		var x = document.getElementsByClassName('city');
		for (i = 0; i < x.length; i++) {
			x[i].style.display = 'none';
		}
		document.getElementById(cityName).style.display = 'block';
	}

	return (
		<div>
			<div className="w3-bar w3-black">
				{CategoryInfo.map((e) => (
					<button key={e.id} className="w3-bar-item w3-button" onClick={() => openCity(`${e.name}`)}>
						{e.name}
					</button>
				))}
			</div>

			<div id="Pizzas" className="city">
				<h2>Pizzas</h2>
				{productDisplay1.map((e) => (
					<Card
						key={e.idProducto}
						imagenProducto={e.imagenProducto}
						name={e.name}
						description={e.description}
						precioProducto={e.precioProducto}
					/>
				))}
			</div>
			<div id="Hamburgesas" className="city" style={{ display: 'none' }}>
				<h2>Hamburgesas</h2>
				{productDisplay2.map((e) => (
					<Card
						key={e.idProducto}
						imagenProducto={e.imagenProducto}
						name={e.name}
						description={e.description}
						precioProducto={e.precioProducto}
					/>
				))}
			</div>
			<div id="Fritas" className="city" style={{ display: 'none' }}>
				<h2>Fritas</h2>
				{productDisplay3.map((e) => (
					<Card
						key={e.idProducto}
						imagenProducto={e.imagenProducto}
						name={e.name}
						description={e.description}
						precioProducto={e.precioProducto}
					/>
				))}
			</div>
			<div id="Combos" className="city" style={{ display: 'none' }}>
				<h2>Combos</h2>
				{productDisplay4.map((e) => (
					<Card
						key={e.idProducto}
						imagenProducto={e.imagenProducto}
						name={e.name}
						description={e.description}
						precioProducto={e.precioProducto}
					/>
				))}
			</div>
		</div>
	);
}

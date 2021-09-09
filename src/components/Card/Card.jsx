import React from 'react';

export default function Card({imagenProducto, name, description, precioProducto}) {
	return (
		<div className="prodContent">
			<div className="prodImg">
				<img src={imagenProducto} alt="imagen" />
			</div>
			<div className="prodInfo">
				<div className="prodName">{name}</div>
				<div className="prodDesc">{description}</div>
				<div className="prodPrice">$ {precioProducto}</div>
			</div>

			<div className="prodBtn">
				<button className="prodBtnCant">-</button>
				<button className="prodBtnCant">+</button>
				<button className="prodBtnFav">💙</button>
				<button className="prodBtnShare">➤</button>
			</div>
		</div>
	);
}

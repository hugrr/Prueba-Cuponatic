import React from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";

export const Mapa = () => (
	<div className="container row xxx">
		<div className="mapSombra">
			{" "}
			<Link to="/sort">
				<button id="boton2" type="button" className="btn btn-light text-black-50">
					<i id="iconButon" className="fas fa-sort-amount-down text-black-50" />
					Orden
				</button>
			</Link>
			<Link to="/filter">
				<button id="boton2" type="button" className=" btn btn-light text-black-50">
					<i id="iconButon2" className="fas fa-sliders-h" />
					Filtros
				</button>
			</Link>
			<Link to="/">
				<button id="boton2" type="button" className="btn btn-light text-black-50">
					<i id="iconButon" className="fas fa-map text-black-50" />
					Galeria
				</button>
			</Link>
		</div>

		<div className="cardMaps">
			<img id="imagenMapa" className="card-img-top" src="/images/mapaSsntiago.png" alt=" " />
		</div>
	</div>
);

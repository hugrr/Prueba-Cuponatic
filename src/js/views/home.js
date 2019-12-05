import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Link } from "react-router-dom";

export const Home = () => (
	<div className="container row">
		<div>
			{" "}
			<Link to="/sort">
				<button id="boton2" type="button" className="btn btn-light text-black-50">
					<i id="iconButon" className="fas fa-sort-amount-down text-black-50" />
					Orden
				</button>
			</Link>
			<Link to="/filter">
				<button id="boton2" type="button" className=" btn btn-light text-black-50 ">
					<i id="iconButon2" className="fas fa-sliders-h" />
					Filtros
				</button>
			</Link>
			<Link to="/mapa">
				<button id="boton2" type="button" className=" btn btn-light text-black-50">
					<i id="iconButon" className="fas fa-map text-black-50" />
					Mapa
				</button>
			</Link>
		</div>

		<div id="card" className="card  card-text text-black-50">
			<div className="card-body2">
				<p className="card-text text-black-50" />
			</div>

			<div className="card-body">
				<p id="textCard" className="card-text text-black-50">
					¡2X1! 10 S. Levantamiento de Glúteos y Reafirmante abdomen
				</p>
			</div>
			<div className="row">
				<button id="boton" type="button" className="btn btn-primary">
					43%
				</button>
				<div>
					<p id="precio1">$5.990</p>
					<p id="precio2">$5.990</p>
				</div>
			</div>

			<hr size="10" />
			<div className="row">
				<p className="textFinal">1,8 km providencia</p>
				<i id="iconoFooter" className="fas fa-star" />
				<p id="footer"> 4,3(81)</p>
			</div>
		</div>
		<div id="card" className="card  card-text text-black-50">
			<div className="card-body2">
				<p className="card-text text-black-50" />
			</div>

			<div className="card-body">
				<p id="textCard" className="card-text text-black-50">
					¡2X1! 10 S. Levantamiento de Glúteos y Reafirmante abdomen
				</p>
			</div>
			<div className="row">
				<button id="boton" type="button" className="btn btn-primary">
					43%
				</button>
				<div>
					<p id="precio1">$5.990</p>
					<p id="precio2">$5.990</p>
				</div>
			</div>
			<hr size="10" />
			<div className="row">
				<p className="textFinal">1,8 km providencia</p>
				<i id="iconoFooter" className="fas fa-star" />
				<p id="footer"> 4,3(81)</p>
			</div>
		</div>
	</div>
);

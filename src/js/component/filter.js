import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Link } from "react-router-dom";

export const Filter = () => (
	<div id="Filter1" className="container ">
		<div>
			<div>
				<Link to="/">
					<i id="iconFilter2" className="fas fa-times text-black-50" />
				</Link>
			</div>
			<div>
				<p className="text-black-50">
					<Link to="/">
						<i id="textFilter" className="fas fa-less-than" />
					</Link>
					Filtrar por
				</p>
				<ul id="list" className="list-group text-black-50">
					<li className="list-group-item">
						Categorias <i id="textFilterx" className="fas fa-less-than " />{" "}
					</li>
					<li className="list-group-item">
						Comunas <i id="textFilterx2" className="fas fa-less-than " />{" "}
					</li>
					<li className="list-group-item">
						Rango de distancia <i id="textFilterx3" className="fas fa-less-than " />
					</li>
					<li className="list-group-item">
						Distancia de distancia <i id="textFilterx4" className="fas fa-less-than " />
					</li>
				</ul>
			</div>
		</div>
	</div>
);

import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Link } from "react-router-dom";

export const Sort = () => (
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
						<i id="textFilter" className="fas fa-less-than" />{" "}
					</Link>
					Ordenar por
				</p>
				<ul id="list" className="list-group text-black-50">
					<li className="list-group-item">Menor precio</li>
					<li className="list-group-item">Mayor precio</li>
					<li className="list-group-item">Lo nuevo</li>
					<li className="list-group-item">Distancia</li>
				</ul>
			</div>
		</div>
	</div>
);

import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Link } from "react-router-dom";

export const Sort = () => (
	<div id="Filter1" className="container xxx ">
		<div>
			<div>
				<Link to="/">
					<i id="iconFilter2" className="fas fa-times text-black-50" />
				</Link>
			</div>
			<div>
				<p className="textComponent">
					<Link to="/">
						<i id="textFilter" className="fas fa-less-than" />
					</Link>
					Ordenar por
				</p>
				<ul id="list" className="list-group ">
					<li className=" blue2 list-group-item  ">
						<div id="blue" />
						<p className="textList ">Menor precio</p>
					</li>
					<li className="list-group-item blue2  ">
						<p className="textList">Mayor precio</p>
					</li>
					<li className="list-group-item blue2 ">
						<p className="textList">Lo nuevo</p>
					</li>
					<li className="list-group-item blue2 ">
						<p className="textList "> Distancia</p>
					</li>
				</ul>
			</div>
		</div>
	</div>
);

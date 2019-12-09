import React from "react";

import "../../styles/home.scss";
import { Link } from "react-router-dom";

export const Filter = () => (
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
					Filtrar por
				</p>
				<ul id="list" className="list-group s ">
					<li className=" blue2 list-group-item  ">
						<p className="textList ">
							Categorias
							<i id="textFilterx" className="fas fa-less-than " />
						</p>
					</li>
					<li className="list-group-item blue2  ">
						<p className="textList ">
							Comunas <i id="textFilterx2" className="fas fa-less-than " />
						</p>
					</li>
					<li className="list-group-item blue2 ">
						<p className="textList ">
							Distancia <i id="textFilterx3" className="fas fa-less-than " />
						</p>
					</li>
					<li className="list-group-item blue2 ">
						<p className="textList ">
							Rango de distancia <i id="textFilterx4" className="fas fa-less-than " />
						</p>
					</li>
				</ul>
			</div>
		</div>
	</div>
);

import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<div id="nav" className="container">
			<div className="row">
				<p id="hora">10:30</p>
				<div>
					<i id="iconTop1" className="fas fa-signal" />
					<i id="iconTop2" className="fas fa-wifi" />
					<i id="iconTop3" className="fas fa-battery-three-quarters" />
				</div>

				<div className="row">
					<div id="menu">
						&#9776;
						<p id="main">MENU</p>{" "}
					</div>
					<div>
						<p id="title" className="font-italic">
							CUPONATIC
						</p>
					</div>

					<div>
						<i id="search" className="fas fa-search" />
						<p id="search2">BUSCAR</p>
					</div>
					<div>
						<i id="account" className="fas fa-user-circle" />
						<p id="account2">CUENTA</p>
					</div>
				</div>
			</div>
		</div>
	);
};

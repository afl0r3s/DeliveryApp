import React from 'react';
import { Link } from 'react-router-dom';


export default function Navbar() {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
				<div className="container-fluid">
					<span className="navbar-brand">DeliverApp</span>
                    <div className="iconApp">🍔</div>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNavAltMarkup"
						aria-controls="navbarNavAltMarkup"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
						<div className="navbar-nav">
                            <Link className="nav-link active" to='/' >Home</Link>
                            <Link className="nav-link" to='/about' >About</Link>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
}
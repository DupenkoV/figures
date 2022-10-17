import React from "react";
import "./burger.css"

export default class Burger extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-mdb-toggle="collapse"
                    data-mdb-target="#navbarToggleExternalContent2" aria-controls="navbarToggleExternalContent2"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars"></i>
                    </button>
                </div>
            </nav>
        )
    }
}
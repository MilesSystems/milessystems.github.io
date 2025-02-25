import {PropsWithChildren} from "react";
import CarbonRed from "src/assets/img/Carbon-red.png";
import {Link} from "react-router-dom";

export default function Wrapper({children}: PropsWithChildren<{}>) {
    return (
        <div
            style={{
                height: "100vh",
                width: "100vw",
                backgroundImage: `url(${CarbonRed})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
            }}
        >
            <div className="wrapper" style={{backgroundColor: "transparent", height: "100vh", overflow: "scroll"}}>
                <nav className="navbar navbar-expand-lg navbar-dark bg-danger fixed-top" style={{height: "8vh"}}>
                    <div className="container-fluid m-0">
                        <a href="/" className="navbar-brand ms-3" style={{
                            fontSize: "1.3em"
                        }}>
                            <b>Miles</b>.Systems <small>LLC</small>
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbar-collapse"
                            aria-controls="navbar-collapse"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbar-collapse">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="tel:8177893294">
                                        <i className="fas fa-phone" style={{paddingRight: "5px"}}></i>Call
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="mailto:Richard@Miles.Systems">
                                        <i className="fas fa-envelope" style={{paddingRight: "5px"}}></i>Email
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <footer className="main-footer bg-black" style={{height: "8vh", paddingTop: "8vh"}}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-6">
                                <strong>
                                    Copyright © 2014-2017{" "}
                                    <a href="/">
                                        <span className="text-danger">Richard Miles</span>
                                    </a>
                                </strong>
                            </div>
                            <div className="col-6 text-end">
                                <Link to="/Privacy/" className="text-danger" style={{paddingRight: "5px"}}>
                                    Privacy Policy
                                </Link>
                                <i className="fas fa-lock"></i>
                            </div>
                        </div>
                    </div>
                </footer>
                <div className="content-wrapper" style={{backgroundColor: "transparent", marginTop: "8vh"}}>
                    <div id="alert"></div>
                    {children}
                </div>
            </div>
        </div>
    );
}

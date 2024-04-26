import {PropsWithChildren} from "react";
import {Link} from "react-router-dom";
import CarbonRed from "src/assets/img/Carbon-red.png";

export default function Wrapper({children}: PropsWithChildren<{}>) {

    return <div style={{
        height: "100vh",
        width: "100vw",
        backgroundImage: "url("+CarbonRed+")",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center", /* Center the background image */
        backgroundAttachment: "fixed",
    }}>
        <div className="pace  pace-inactive">
            <div className="pace-progress" data-progress-text="100%" data-progress="99"
                 style={{transform: "translate3d(100%, 0px, 0px)"}}>
                <div className="pace-progress-inner"></div>
            </div>
            <div className="pace-activity"></div>
        </div>
        <div className="wrapper" style={{backgroundColor: "transparent", height: "100vh", minHeight: "100%", overflow:"scroll"}}>
            <header className="main-header">
                <nav className="navbar navbar-static-top">
                    <div className="navbar-header">
                        <a href="/" className="navbar-brand" id="mytitle"><b>Miles</b>.Systems
                            <small> LLC</small>
                        </a>
                    </div>
                    {/**<div className="collapse navbar-collapse pull-left" id="navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li><Link to="/About">About<span className="sr-only">(current)</span></Link></li>
                            <li><Link to="/Portfolio">Portfolio</Link></li>
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Demos <span className="caret"></span></a>
                                <ul className="dropdown-menu" role="menu">
                                    <li><a href="/Designers">The Team</a></li>
                                    <li className="divider"></li>
                                    <li><a href="https://richardtmiles.github.io/GameDefense/">Play Game Defense</a></li>
                                    <li className="divider"></li>
                                    <li><a href="https://carbonorm.dev/">CarbonORM.dev</a></li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Strategy<span className="caret"></span></a>
                                <ul className="dropdown-menu" role="menu">
                                    <li><a href="/Designers">The Team</a></li>
                                    <li><a href="/Speed">Quick Content</a></li>
                                    <li><a href="/Turnaround">Our Turnaround</a></li>
                                    <li className="divider"></li>
                                    <li><a href="/Price">Price Point</a></li>
                                    <li className="divider"></li>
                                    <li><a href="/Mail">Contact Us</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>**/}

                    <div className="collapse navbar-collapse pull-right" id="navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li><a href="tel:8177893294">
                                <i className="fa fa-phone" aria-hidden="true"
                                   style={{padding: "0 15px"}}></i>Call</a></li>
                            <li><a href="mailto: Richard@Miles.Systems">
                                <i className="fa fa-envelope" aria-hidden="true"
                                   style={{padding: "0 15px"}}></i>Email</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
            <footer className="main-footer bg-black" style={{border: "none", paddingTop: "65px"}}>
                <div className="container">
                    <div className="pull-right hidden-xs">
                        <Link to="/Privacy/" className="text-red" style={{paddingRight: "5px"}}>Privacy Policy</Link>
                        <i className="fa fa-lock" aria-hidden="true"></i>
                    </div>
                    <strong>Copyright © 2014-2017 <a href="/"> <span
                        className="text-red">Richard Miles</span></a></strong>
                </div>
            </footer>
            <div className="content-wrapper" style={{
                backgroundColor: "transparent",
            }}>
                <div id="alert"></div>
                <div className="col-md-offset-1 col-md-10">
                    {children}
                </div>
                <div className="clearfix"></div>
            </div>
        </div>
    </div>

}
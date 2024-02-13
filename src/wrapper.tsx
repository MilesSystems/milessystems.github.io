export default function Wrapper() {

    return <>
        <div className="pace  pace-inactive">
            <div className="pace-progress" data-progress-text="100%" data-progress="99"
                 style={{transform: "translate3d(100%, 0px, 0px)"}}>
                <div className="pace-progress-inner"></div>
            </div>
            <div className="pace-activity"></div>
        </div>
        <div className="wrapper" style={{backgroundColor: "transparent", height: "auto", minHeight: "100%"}}>
            <header className="main-header">
                <nav className="navbar navbar-static-top">
                    <div className="navbar-header">
                        <a href="/" className="navbar-brand" id="mytitle"><b>Miles</b>.Systems
                            <small> LLC</small>
                        </a>
                    </div>
                    <div className="collapse navbar-collapse pull-left" id="navbar-collapse">
                        <ul className="nav navbar-nav">
                            {/*<!--<li><a href="/About">About Us<span class="sr-only">(current)</span></a></li>
                            <li><a href="/Portfolio">Portfolio</a></li>
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">Strategy <span class="caret"></span></a>
                                <ul class="dropdown-menu" role="menu">
                                    <li><a href="/Designers">The Team</a></li>
                                    <li><a href="/Speed">Quick Content</a></li>
                                    <li><a href="/Turnaround">Our Turnaround</a></li>
                                    <li class="divider"></li>
                                    <li><a href="/Price">Price Point</a></li>
                                    <li class="divider"></li>
                                    <li><a href="/Mail">Contact Us</a></li>
                                </ul>
                            </li>-->*/}
                        </ul>
                    </div>

                    <div className="navbar-custom-menu">
                        <ul className="nav navbar-nav">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink"
                                   role="button"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Explore <i className="fa fa-angle-down"></i>
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a className="dropdown-item" href="https://richardtmiles.github.io/GameDefense/"
                                       target="_blank">Play Game Defense</a>
                                    <a className="dropdown-item" href="https://carbonorm.dev/" target="_blank">Explore
                                        CarbonORM.dev</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <footer className="main-footer bg-black" style={{border: "none", paddingTop: "65px"}}>
                <div className="container">
                    <div className="pull-right hidden-xs">
                        <a href="/Privacy/" className="text-red" style={{paddingRight: "5px"}}>Privacy Policy</a>
                        <i className="fa fa-lock" aria-hidden="true"></i>
                    </div>
                    <strong>Copyright © 2014-2017 <a href="/"> <span
                        className="text-red">Richard Miles</span></a></strong>
                </div>
            </footer>
            <div className="content-wrapper"
                 style={{
                     height: "100vh", width: "100vw",
                     backgroundImage: "url(/assets/img/Carbon-red.png)",
                     backgroundSize: "100vw 100vh",
                     backgroundRepeat: "no-repeat",
                     backgroundAttachment: "fixed", paddingTop: "10px", minHeight: "900px"
                 }}>
                <div id="alert"></div>
                <div className="col-md-offset-1 col-md-10">
                    <div id="pjax-content">
                        <script type="text/javascript"
                                src="https://platform.linkedin.com/badges/js/profile.js"></script>

                        <div className="col-xs-12 col-sm-offset-3 col-sm-9 col-md-offset-5 col-md-7"
                             style={{marginTop: "50px", marginBottom: "100px"}}>
                            {/*<!-- login-box -->
                            <!--
                            <div class="col-xs-offset-4 col-xs-8 col-sm-offset-4 col-sm-7 col-md-offset-6 col-md-6" style="margin-top: 50px">
                            <a href="<? /!*= SITE *!/ ?>Designers class">
                                <blockquote class="pull-right text-gray" style="background-color: rgba(0, 0, 0, 0.7); border-radius: 10px; ">
                                    <h1 class="text-red" style="margin-top: 0"><b>Miles Systems <span style="font-size: medium">LLC</span></b></h1>
                                    <p>We are committed to client success, developing industry leaders, and encouraging lifelong
                                        wellness.</p>
                                    <small>The <cite title="Source Title">Miles Systems llc Team</cite></small>
                                </blockquote>
                            </a>-->*/}
                            <section className="top-card-layout top-card-layout--show-current-hide-past-position">
                                <figure className="cover-img onload lazy-loaded" data-delayed-background=""
                                        style={{backgroundImage: "url('/assets/img/Carbon-black.png')"}}></figure>
                                <div className="top-card-layout__card">
                                    <div className="top-card__profile-image-container" data-section="picture">
                                        <img
                                            className="artdeco-entity-image artdeco-entity-image--profile artdeco-entity-image--circle-8 top-card-layout__entity-image top-card__profile-image top-card__profile-image--real-image onload lazy-loaded"
                                            data-ghost-classes="artdeco-entity-image--ghost artdeco-entity-image--ghost-profile"
                                            data-ghost-url="https://static-exp1.licdn.com/sc/h/djzv59yelk5urv2ujlazfyvrk"
                                            alt="Richard Tyler Miles" src="/assets/img/defaults/richard2.png"/>

                                        <img
                                            className="artdeco-entity-image artdeco-entity-image--profile artdeco-entity-image--circle-8 artdeco-entity-image--ghost artdeco-entity-image--ghost-profile top-card-layout__entity-image top-card__profile-image top-card__profile-image--ghost-image onload lazy-loaded"
                                            data-ghost-classes="artdeco-entity-image--ghost artdeco-entity-image--ghost-profile"
                                            data-ghost-url="https://static-exp1.licdn.com/sc/h/djzv59yelk5urv2ujlazfyvrk"
                                            alt="Richard Tyler Miles"
                                            src="https://static-exp1.licdn.com/sc/h/djzv59yelk5urv2ujlazfyvrk"/></div>
                                    <div className="top-card-layout__entity-info-container">
                                        <div className="top-card-layout__entity-info"><h1
                                            className="top-card-layout__title">Richard
                                            Tyler
                                            Miles</h1>
                                            <h2 className="top-card-layout__headline">Sr. Software
                                                Developer &amp; Founder</h2>
                                            <h3 className="top-card-layout__first-subline"><span
                                                className="top-card__subline-item">Highlands Ranch, Colorado</span>
                                            </h3>
                                            <div className="top-card-layout__cta-container">
                                                <a
                                                    className="top-card-layout__cta top-card-layout__cta--primary"
                                                    href="https://www.linkedin.com/signup/public-profile-join?vieweeVanityName=richardtmiles&amp;trk=public_profile-settings_top-card-primary-button-join-to-connect"
                                                    data-tracking-control-name="public_profile-settings_top-card-primary-button-join-to-connect"
                                                    data-tracking-will-navigate="">Message on LinkedIn <i
                                                    className="fa fa-linkedin-square" aria-hidden="true"
                                                    style={{paddingLeft: "5px"}}></i>
                                                </a></div>
                                        </div>
                                        <div
                                            className="top-card-layout__entity-info top-card-layout__entity-info--right-column">
                                            <div className="top-card__links-container">
                                                <div data-section="currentPositionsDetails"
                                                     className="top-card__right-column-link top-card__position-info with-transition">
                                                    <a className="top-card-link top-card-link--link"
                                                       href="https://www.linkedin.com/company/mckesson?trk=public_profile-settings_topcard_current_company"
                                                       data-tracking-will-navigate=""
                                                       data-tracking-control-name="public_profile-settings_topcard_current_company"><img
                                                        className="artdeco-entity-image artdeco-entity-image--company artdeco-entity-image--square-1 top-card-link__logo lazy-loaded"
                                                        data-ghost-classes="artdeco-entity-image--ghost artdeco-entity-image--ghost-company"
                                                        data-ghost-url="https://static-exp1.licdn.com/sc/h/ck48xrmh3ctwna0w2y1hos0ln"
                                                        alt="McKesson" src="/assets/img/work/dropingaming.jpeg"/><span
                                                        className="top-card-link__description">Drop-in Gaming</span></a>
                                                </div>


                                                <div data-section="pastPositionsDetails"
                                                     className="top-card__right-column-link top-card__position-info with-transition">
                                                    <a className="top-card-link top-card-link--link"
                                                       href="https://www.linkedin.com/company/mckesson?trk=public_profile-settings_topcard_current_company"
                                                       data-tracking-will-navigate=""
                                                       data-tracking-control-name="public_profile-settings_topcard_past_company"><img
                                                        className="artdeco-entity-image artdeco-entity-image--company artdeco-entity-image--square-1 top-card-link__logo lazy-loaded"
                                                        data-ghost-classes="artdeco-entity-image--ghost artdeco-entity-image--ghost-company"
                                                        data-ghost-url="https://static-exp1.licdn.com/sc/h/ck48xrmh3ctwna0w2y1hos0ln"
                                                        alt="McKesson" src="/assets/img/work/mckesson.jpeg"/><span
                                                        className="top-card-link__description">McKesson</span></a></div>


                                                <div data-section="pastPositionsDetails"
                                                     className="top-card__right-column-link top-card__position-info with-transition">
                                                    <a className="top-card-link top-card-link--link"
                                                       href="https://www.linkedin.com/company/praesidium-inc-?trk=public_profile-settings_topcard_past_company"
                                                       data-tracking-will-navigate=""
                                                       data-tracking-control-name="public_profile-settings_topcard_past_company"><img
                                                        className="artdeco-entity-image artdeco-entity-image--company artdeco-entity-image--square-1 top-card-link__logo lazy-loaded"
                                                        data-ghost-classes="artdeco-entity-image--ghost artdeco-entity-image--ghost-company"
                                                        data-ghost-url="https://static-exp1.licdn.com/sc/h/ck48xrmh3ctwna0w2y1hos0ln"
                                                        alt="Praesidium, Inc."
                                                        src="/assets/img/work/praesidium.jpeg"/><span
                                                        className="top-card-link__description">Praesidium, Inc.</span></a>
                                                </div>


                                                <div data-section="educationsDetails"
                                                     className="top-card__right-column-link top-card__education-info with-transition">
                                                    <a className="top-card-link top-card-link--link"
                                                       href="https://www.linkedin.com/school/northtexas/?trk=public_profile-settings_topcard_school"
                                                       data-tracking-will-navigate=""
                                                       data-tracking-control-name="public_profile-settings_topcard_school"><img
                                                        className="artdeco-entity-image artdeco-entity-image--school artdeco-entity-image--square-1 top-card-link__logo lazy-loaded"
                                                        data-ghost-classes="artdeco-entity-image--ghost artdeco-entity-image--ghost-school"
                                                        data-ghost-url="https://static-exp1.licdn.com/sc/h/8zyvax2j09k9jfspjn2wi17un"
                                                        alt="University of North Texas"
                                                        src="/assets/img/work/northtexas.png"/><span
                                                        className="top-card-link__description">University of North Texas</span></a>
                                                </div>


                                                <a href="/Portfolio">
                                                    <div data-section="websites"
                                                         className="top-card__right-column-link top-card__websites with-transition">
                                                        <div>
                                                            <button className="modal__outlet websites__outlet"
                                                                    data-tracking-control-name="public_profile-settings_websites-modal-outlet"
                                                                    data-modal="default-outlet">
                                                                <div className="top-card-link">
                                                                    <img
                                                                        className="top-card-link__logo top-card-link__logo--link-icon artdeco-entity-image artdeco-entity-image--square-1 lazy-loaded"
                                                                        alt="Websites" aria-hidden="true"
                                                                        src="https://static-exp1.licdn.com/sc/h/9o8qqup6da04vhqijz8ft1j5g"/>
                                                                    <span
                                                                        className="top-card-link__description">Portfolio</span>
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>

                        <div className="clearfix"></div>
                    </div>
                </div>
                <div className="clearfix"></div>
            </div>
        </div>
    </>
        ;

}
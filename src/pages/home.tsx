import CarbonBlack from "/assets/img/Carbon-black.png";
import Me from "/assets/img/defaults/richard2.png";

import DropInGaming from "assets/img/work/dropingaming.jpeg";
import MilesSystemsLLC from "assets/img/work/milesSystemsLLC.png";
import McKesson from "assets/img/work/mckesson.jpeg";
import NorthTexas from "assets/img/work/northtexas.png";
import Praesidium from "assets/img/work/praesidium.jpeg";
import Chess from "assets/img/work/chess.png";
import SMU from "assets/img/work/SMU.png";

// Define an array for work experience
const workExperience = [
    {
        name: "Miles Systems LLC",
        img: MilesSystemsLLC,
        link: "#", // Replace with actual link if available
        type: "current",
    },
    {
        name: "Chess.com",
        img: Chess,
        link: "",
        type: "past"
    },
    {
        name: "Drop-in Gaming",
        img: DropInGaming,
        link: "https://www.linkedin.com/company/mckesson?trk=public_profile-settings_topcard_current_company",
        type: "past",
    },
    {
        name: "McKesson",
        img: McKesson,
        link: "https://www.linkedin.com/company/mckesson?trk=public_profile-settings_topcard_current_company",
        type: "past",
    },
    {
        name: "Praesidium, Inc.",
        img: Praesidium,
        link: "https://www.linkedin.com/company/praesidium-inc-?trk=public_profile-settings_topcard_past_company",
        type: "past",
    },
    {
        name: "Southern Methodist University",
        img: SMU,
        link: "https://www.linkedin.com/school/smudallas/",
        type: "past",
    },
    {
        name: "University of North Texas",
        img: NorthTexas,
        link: "https://www.linkedin.com/school/northtexas/?trk=public_profile-settings_topcard_school",
        type: "past",
    },
];

export default function Home() {
    return (
        <div className="row mt-5">
            <div className="mt-5 offset-4 col-7 justify-content-end" style={{marginTop: "50px", marginBottom: "100px"}}>
                <section className="top-card-layout" style={{
                    backgroundColor: "rgba(0,0,0,0.5)",
                    bottom: "-100px"
                }}>
                    <figure className="cover-img mt-5"
                            style={{backgroundImage: `url(${CarbonBlack})`}}></figure>
                    <div className="top-card-layout__card">
                        {/* Profile Picture */}
                        <div className="top-card__profile-image-container" data-section="picture" style={{
                            top:"-100px"
                        }}>
                            <img
                                className="artdeco-entity-image artdeco-entity-image--circle-8 top-card__profile-image onload lazy-loaded"
                                alt="Richard Tyler Miles" src={Me}/>
                        </div>

                        {/* Personal Information */}
                        <div className="row">
                            <div className="col-8">
                                <h1 className="top-card-layout__title">Richard Tyler Miles</h1>
                                <h2 className="top-card-layout__headline">Sr. Software Developer &amp; Founder</h2>
                                <h3 className="top-card-layout__first-subline">
                                    <div className="top-card__subline-item">
                                        Highlands Ranch, Colorado
                                        <br/>
                                        <a style={{color: "#d0d0d0"}} href="mailto:Richard@Miles.Systems">
                                            Richard@Miles.Systems
                                        </a>
                                        <br/>
                                        <a style={{color: "#d0d0d0"}} href="tel:(817)789-3294">
                                            (817) 789-3294
                                        </a>
                                        <br/>
                                    </div>
                                </h3>

                                {/* CTA Buttons */}
                                <div className="row top-card-layout__cta-container">
                                    <div className="col-6">
                                        <a className="col-12 top-card-layout__cta top-card-layout__cta--primary"
                                           href="https://www.linkedin.com/signup/public-profile-join?vieweeVanityName=richardtmiles">
                                            Connect On LinkedIn <i className="fab fa-linkedin"></i>
                                        </a>
                                    </div>
                                    <div className="col-6">
                                        <a className="col-12 top-card-layout__cta top-card-layout__cta--success"
                                           style={{backgroundColor: "#27c02a"}}
                                           href="https://github.com/RichardTMiles/Resume/blob/main/RichardTylerMiles.pdf">
                                            Check Out My Resume <i className="fa fa-paper-plane ml-5"></i>
                                        </a>
                                    </div>
                                    <div className="col-12">
                                        <a className="col-12 mt-2 top-card-layout__cta top-card-layout__cta--success"
                                           style={{backgroundColor: "#000000"}}
                                           href="https://github.com/RichardTMiles/">
                                            My Projects on GitHub <i className="fab fa-github"
                                                                     style={{padding: "0 7px"}}></i>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Work Experience (Refactored using an Array) */}
                            <div className="col-4">
                                <div className="row">
                                    {workExperience.map((work, index) => (
                                        <div key={index}
                                             className="top-card__right-column-link top-card__position-info with-transition">
                                            <a className="top-card-link top-card-link--link" href={work.link}>
                                                <img
                                                    className="artdeco-entity-image artdeco-entity-image--company artdeco-entity-image--square-1 top-card-link__logo lazy-loaded"
                                                    alt={work.name} src={work.img}/>
                                                <span className="top-card-link__description">{work.name}</span>
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div className="clearfix"></div>
        </div>
    );
}

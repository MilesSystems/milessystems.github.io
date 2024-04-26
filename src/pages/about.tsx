

export const ABOUT = 'about/'

export default function About() {

    return <><div className="col-md-offset-6 col-md-6 col-sm-offset-2 col-sm-8"
                style={{marginTop: "40px"}}>
        <a href="/About">

            <div className="box box-danger">
                <div className="box-header with-border bg-gray-active" style={{borderBottomColor: "black"}}>
                    <h2 className="box-title text-red"><i className="fa fa-sitemap"></i> We can do it</h2></div>
                <div className="box-body bg-gray">
                    <p><b>Miles Systems <small>LLC</small>
                    </b>
                        is a technology company with the resources to make your next big idea.
                        We create everything from Android, iPhone, Windows, and Mac apps,
                        progressive websites, to personal tech solutions like touch screen kiosks
                        for your business.
                    </p>
                </div>
            </div>


        </a>

        <div id="alert"></div>

        <div className="box box-danger">
            <div className="box-header with-border bg-gray-active" style={{borderBottomColor: "black"}}>
                <i className="fa fa-hourglass-1"></i>
                <h3 className="box-title">On average, our apps load in <span
                    className="text-red"><b>under 1/2 a second</b></span>
                </h3>
            </div>
            <div className="box-body clearfix bg-gray">
                <div className="row">
                    <div className="col-xs-12">
                        <blockquote className="pull-right" style={{borderRadius: "10px"}}>
                            <p>40% of users will wait no more than three seconds before abandoning a website.</p>`
                            <small>Think With <a
                                href="https://www.thinkwithgoogle.com/marketing-resources/experience-design/speed-is-key-optimize-your-mobile-experience/"><cite
                                title="Source Title" className="text-red">Google</cite></a></small>
                        </blockquote>
                    </div>
                </div>
                <p>Step one to engaging a customer is maintaining a ridiculously fast load time.
                    We believe this should be a standard not an upgrade. We base our reputation
                    on our work, so you can rest assured we produce nothing but the best.</p>
                <br/>
                    <div className="row">
                        <div className="col-xs-offset-2 col-xs-4">
                            <a href="/Portfolio" type="button" className="btn btn-block bg-black">Our
                                Success</a>
                        </div>
                        <div className=" col-xs-4">
                            <a href="/Mail" type="button" className="btn btn-block btn-danger">Lets Talk!</a>
                        </div>
                    </div>
            </div>

        </div>


    </div>
</>
}
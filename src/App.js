import React from "react";
import "./App.css";

function App() {
  return (
        
    <div data-spy="scroll" data-target=".fixed-top">

    {/* Preloader */}
    <div className="spinner-wrapper">
      <div className="spinner">
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
      </div>
    </div>
    {/* end of preloader */}


    {/* Navbar */}
    <nav className="navbar navbar-expand-md navbar-dark navbar-custom fixed-top">
      {/* Image Logo */}
      <div className="navbar-brand logo-image" style={{ width: "32px" }}><img src="images/logo.svg" alt="alternative"/></div>
      <div className="navbar-brand logo-text page-scroll">Michelle McConville</div>   

    {/* Mobile Menu Toggle Button */}
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-awesome fas fa-bars"></span>
      <span className="navbar-toggler-awesome fas fa-times"></span>
    </button> {/* end of mobile menu toggle button */}

      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link page-scroll" href="#header">HOME <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link page-scroll" href="#intro">ABOUT</a>
          </li>
          <li className="nav-item">
            <a className="nav-link page-scroll" href="#projects">PORTFOLIO</a>
          </li>
          <li className="nav-item">
            <a className="nav-link page-scroll" href="#contact">CONTACT</a>
          </li>
          <li className="nav-item">
            <a className="nav-link page-scroll" href="images/MichelleMcConville.pdf" rel="noreferrer" target="_blank">RESUME</a>
          </li>
        </ul>

        <span className="nav-item social-icons">
          <span className="fa-stack"><a href="https://www.linkedin.com/in/mchelmcconvillekc/" rel="noreferrer" target="_blank"><span className="hexagon"></span>
            <i className="fab fa-linkedin-in fa-stack-1x"></i></a>
          </span>

          <span className="fa-stack"><a href="https://github.com/MichelleMcConville" rel="noreferrer" target="_blank"><span className="hexagon"></span>
            <i className="fab fa-github fa-stack-1x"></i></a>
          </span>
        </span>
      </div> {/* end of collapsible navbar */}
    </nav>
    {/* end of navbar */}


    {/* Header */}
    <header id="header" className="header">
      <div className="header-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-container">
                <h1>Interested in <span id="js-rotating">Front End, UX/UI, Full Stack</span></h1><br/><br/>
                  <p className="p-heading p-large">QA Engineer turned Full Stack Web Developer!</p><br/>
                  <a className="btn-solid-lg page-scroll" href="#intro">About</a>
              </div>
            </div> {/* end of col */}
          </div> {/* end of row */}
        </div> {/* end of container */}
      </div> {/* end of header-content */}
    </header>
    {/* end of header */}


    {/* Intro */}
    <div id="intro" className="basic-1">
      <div className="container">
        <div className="row">

          <div className="col-lg-7">
            <div className="text-container">
              <h2>About Me</h2>
              <p style={{ color: "#333" }}>My name is Michelle McConville, wife and mother of two. I love to cook, create & hang with family!</p>
              <p style={{ color: "#333" }}>I'm a experienced QA Engineer, passionate about working hand-in-hand with developers, product owners, and business analyst to test requirements and specifications that accurately reflect the business needs.</p>
              <p style={{ color: "#333" }}>Currently attending KU Coding Boot Camp (University of Kansas), where I will gain full-stack developer certificate, which will lead into a software development job!</p>

            </div> {/* end of text-container */}
          </div> {/* end of col */}

          <div className="col-lg-5">
            <div className="image-container"><br/>
              <img className="img-fluid" src="images/heyMe.png" alt="alternative"/>
            </div> {/* end of image-container */}
          </div> {/* end of col */}

        </div> {/* end of row */}
      </div> {/* end of container */}
    </div> {/* end of basic-1 */}
    {/* end of intro */}


    {/* Skills */}
    <div className="slider">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2>Skills</h2><br/>
            {/* <p className="p-heading">Here are some of my current and past skills</p> */}
          </div> {/* end of col */}
        </div> {/* end of row */}

        <div className="row">
          <div className="col-lg-12">

          {/* Card Slider */}
          <div className="slider-container">
            <div className="swiper-container card-slider">
              <div className="swiper-wrapper">
                  
                {/* Slide */}
                <div className="swiper-slide">
                  <div className="card">
                  <img className="card-image" src="images/logo-github.jpg" alt="alternative"/>
                    <div className="card-body">
                      <div className="testimonial-author">GitHub</div>
                    </div>
                  </div>
                </div> {/* end of swiper-slide */}
                {/* end of slide */}

                {/* Slide */}
                <div className="swiper-slide">
                  <div className="card">
                  <img className="card-image" src="images/logo-css.svg" alt="alternative"/>
                    <div className="card-body">
                      <div className="testimonial-author">CSS</div>
                    </div>
                  </div>        
                </div> {/* end of swiper-slide */}
                {/* end of slide */}

                {/* Slide */}
                <div className="swiper-slide">
                  <div className="card">
                  <img className="card-image" src="images/logo-html.svg" alt="alternative"/>
                    <div className="card-body">
                      <div className="testimonial-author">HTML</div>
                    </div>
                  </div>        
                </div> {/* end of swiper-slide */}
                {/* end of slide */}

                {/* Slide */}
                <div className="swiper-slide">
                  <div className="card">
                  <img className="card-image" src="images/logo-bootstrap.png" alt="alternative"/>
                    <div className="card-body">
                      <div className="testimonial-author">Bootstrap</div>
                    </div>
                  </div>        
                </div> {/* end of swiper-slide */}
                {/* end of slide */}

                {/* Slide */}
                <div className="swiper-slide">
                  <div className="card">
                  <img className="card-image" src="images/logo-js.png" alt="alternative"/>
                    <div className="card-body">
                      <div className="testimonial-author">JavaScript</div>
                    </div>
                  </div>
                </div> {/* end of swiper-slide */}
                {/* end of slide */}

                {/* Slide */}
                <div className="swiper-slide">
                  <div className="card">
                    <img className="card-image" src="images/logo-jQuery.png" alt="alternative"/>
                    <div className="card-body">
                      <div className="testimonial-author">jQuery</div>
                    </div>
                  </div>        
                </div> {/* end of swiper-slide */}
                {/* end of slide */}

                {/* Slide */}
                <div className="swiper-slide">
                  <div className="card">
                    <img className="card-image" src="images/logo-nodeJs.svg" alt="alternative"/>
                    <div className="card-body">
                      <div className="testimonial-author">Node.js</div>
                    </div>
                  </div>        
                </div> {/* end of swiper-slide */}
                {/* end of slide */}

                {/* Slide */}
                <div className="swiper-slide">
                  <div className="card">
                    <img className="card-image" src="images/logo-mySQL.png" alt="alternative"/>
                    <div className="card-body">
                      <div className="testimonial-author">MySQL</div>
                    </div>
                  </div>        
                </div> {/* end of swiper-slide */}
                {/* end of slide */}

                {/* Slide */}
                <div className="swiper-slide">
                  <div className="card">
                    <img className="card-image" src="images/logo-mongoDB.png" alt="alternative"/>
                    <div className="card-body">
                      <div className="testimonial-author">MongoDB</div>
                    </div>
                  </div>        
                </div> {/* end of swiper-slide */}
                {/* end of slide */}

                {/* Slide */}
                <div className="swiper-slide">
                  <div className="card">
                    <img className="card-image" src="images/logo-react.svg" alt="alternative"/>
                    <div className="card-body">
                      <div className="testimonial-author">React</div>
                    </div>
                  </div>        
                </div> {/* end of swiper-slide */}
                {/* end of slide */}

                {/* Slide */}
                <div className="swiper-slide">
                  <div className="card">
                    <img className="card-image" src="images/logo-aem.jpg"   alt="alternative"/>
                    <div className="card-body">
                      <div className="testimonial-author">AEM</div>
                    </div>
                  </div>        
                </div> {/* end of swiper-slide */}
                {/* end of slide */}

                {/* Slide */}
                <div className="swiper-slide">
                  <div className="card">
                    <img className="card-image" src="images/logo-jira.svg" alt="alternative"/>
                    <div className="card-body">
                      <div className="testimonial-author">JIRA</div>
                    </div>
                  </div>        
                </div> {/* end of swiper-slide */}
                {/* end of slide */}

                {/* Slide */}
                <div className="swiper-slide">
                  <div className="card">
                    <img className="card-image" src="images/logo-msOffice.png" alt="alternative"/>
                    <div className="card-body">
                      <div className="testimonial-author">MS Office</div>
                    </div>
                  </div>        
                </div> {/* end of swiper-slide */}
                {/* end of slide */}

                {/* Slide */}
                <div className="swiper-slide">
                  <div className="card">
                    <img className="card-image" src="images/logo-sa_badge.png" alt="alternative"/>
                    <div className="card-body">
                      <div className="testimonial-author">Agile Methodology</div>
                    </div>
                  </div>        
                </div> {/* end of swiper-slide */}
                {/* end of slide */}

              </div> {/* end of swiper-wrapper */}

              {/* Add Arrows */}
              <div className="swiper-button-next"></div>
              <div className="swiper-button-prev"></div>
              {/* end of add arrows */}

            </div> {/* end of swiper-container */}
          </div> {/* end of sliedr-container */}
          {/* end of card slider */}

          </div> {/* end of col */}
        </div> {/* end of row */}
      </div> {/* end of container */}
    </div> {/* end of slider */}
    {/* end of testimonials */}


    {/* Projects */}
    <div id="projects" className="filter">
      <div className="container">

        <div className="row">
          <div className="col-lg-12">
            <h2>My Portfolio</h2>
          </div> {/* end of col */}
        </div> {/* end of row */}

        <div className="row">
          <div className="col-lg-12">

            {/* Filter */}
            <div className="button-group filters-button-group">
              {/* <a className="button is-checked" data-filter="*"><span>SHOW ALL</span></a> */}
              <button type="button" class="button is-checked" data-filter="*">SHOW ALL</button>
              {/* <a className="button" data-filter=".project"><span>PROJECT</span></a> */}
              <button type="button" class="button" data-filter=".project">PROJECT</button>
              {/* <a className="button" data-filter=".homework"><span>HOMEWORK</span></a> */}
              <button type="button" class="button" data-filter=".homework">HOMEWORK</button>
              {/* <a className="button" data-filter=".fs"><span>FULL STACK APP</span></a> */}
              <button type="button" class="button" data-filter=".fs">FULL STACK APP</button>
              {/* <a className="button" data-filter=".cli"><span>COMMAND LINE INTERFACE</span></a> */}
              <button type="button" class="button" data-filter=".cli">COMMAND LINE INTERFACE</button>
              {/* <a className="button" data-filter=".misc"><span>MISC</span></a> */}
              <button type="button" class="button" data-filter=".misc">MISC</button>
            </div> {/* end of button group */}

            <div className="grid">
              <div className="element-item project fs">
                <a className="popup-with-move-anim" href="#project-2"><div className="element-item-overlay"><span>Project #2</span></div><img src="images/project-2.jpg" alt="alternative"/></a>
              </div>
              <div className="element-item project">
                <a className="popup-with-move-anim" href="#project-1"><div className="element-item-overlay"><span>Project #1</span></div><img src="images/project-1.jpg" alt="alternative"/></a>
              </div>
              <div className="element-item design homework fs">
                <a className="popup-with-move-anim" href="#homework-13"><div className="element-item-overlay"><span>Burger 🍔 Logger</span></div><img src="images/homework-13.jpg" alt="alternative"/></a>
              </div>
              <div className="element-item design homework cli">
                <a className="popup-with-move-anim" href="#homework-12"><div className="element-item-overlay"><span>Employee 🧑‍🤝‍🧑 Tracker</span></div><img src="images/homework-12.jpg" alt="alternative"/></a>
              </div>
              <div className="element-item design homework fs">
                <a className="popup-with-move-anim" href="#homework-11"><div className="element-item-overlay"><span>Note 📝 Taker</span></div><img src="images/homework-11.jpg" alt="alternative"/></a>
              </div>
              <div className="element-item design homework cli">
                <a className="popup-with-move-anim" href="#homework-10"><div className="element-item-overlay"><span>Team 💼 Roster</span></div><img src="images/homework-10.jpg" alt="alternative"/></a>
              </div>
              <div className="element-item homework cli">
                <a className="popup-with-move-anim" href="#homework-09"><div className="element-item-overlay"><span>README ⚙️ Generator</span></div><img src="images/homework-09.jpg" alt="alternative"/></a>
              </div>
              <div className="element-item homework">
                <a className="popup-with-move-anim" href="#homework-06"><div className="element-item-overlay"><span>Weather 🌤️ Dashboard</span></div><img src="images/homework-06.jpg" alt="alternative"/></a>
              </div>
              <div className="element-item homework">
                <a className="popup-with-move-anim" href="#homework-05"><div className="element-item-overlay"><span>Day 📆 Planner</span></div><img src="images/homework-05.jpg" alt="alternative"/></a>
              </div>
              <div className="element-item homework">
                <a className="popup-with-move-anim" href="#homework-04"><div className="element-item-overlay"><span>Code ⏲️ Quiz</span></div><img src="images/homework-04.jpg" alt="alternative"/></a>
              </div>
              <div className="element-item homework">
                <a className="popup-with-move-anim" href="#homework-03"><div className="element-item-overlay"><span>Password 🔒 Generator</span></div><img src="images/homework-03.jpg" alt="alternative"/></a>
              </div>
              <div className="element-item homework misc">
                <a className="popup-with-move-anim" href="#homework-00"><div className="element-item-overlay"><span>Favorites 🌸 Page</span></div><img src="images/homework-00.jpg" alt="alternative"/></a>
              </div>
            </div> 
            {/* end of grid */}
            {/* end of filter */}
              
          </div> {/* end of col */}
        </div> {/* end of row */}

      </div> {/* end of container */}
    </div> {/* end of filter */}
    {/* end of projects */}

    {/* Project Lightboxes */}
    {/* Lightbox */}
    <div id="project-2" className="lightbox-basic zoom-anim-dialog mfp-hide">
      <div className="row">
        <button title="Close (Esc)" type="button" className="mfp-close x-button">×</button>

        <div className="col-lg-8">
          <img className="img-fluid" src="images/project-2.jpg" alt="alternative" style={{ border: "solid, 2px" }}/>
        </div> {/* end of col */}

        <div className="col-lg-4">
          <h3>TPoops</h3>
          <hr className="line-heading"/><br/>
          <h6>Toilet 🚽 Paper Finder</h6>
            <p>Annoyed you cannot find any TP, use this app if you have located or in search of this priceless commodity!</p>
          <div className="testimonial-container">
            <p className="testimonial-author">Team Members</p><br/>
            <p className="testimonial-text">Michelle McConville</p>
            <p className="testimonial-text">Kendra Hallam</p>
            <p className="testimonial-text">Kobe Hill</p>
            <p className="testimonial-text">Paul LaBounty</p>
          </div>
            <a className="btn-solid-reg" href="https://mkkp-project2.herokuapp.com/" rel="noreferrer" target="_blank">WEBSITE</a>
            <a className="btn-outline-reg mfp-close as-button" href="#projects">BACK</a> 
            <a className="btn-solid-reg" href="https://github.com/MichelleMcConville/P2-tpoops" rel="noreferrer" target="_blank">CODE</a>
        </div> {/* end of col */}

      </div> {/* end of row */}
    </div> {/* end of lightbox-basic */}
    {/* end of lightbox */}

    {/* Lightbox */}
    <div id="project-1" className="lightbox-basic zoom-anim-dialog mfp-hide">
      <div className="row">
        <button title="Close (Esc)" type="button" className="mfp-close x-button">×</button>

        <div className="col-lg-8">
          <img className="img-fluid" src="images/project-1.jpg" alt="alternative" style={{ border: "solid 2px" }}/>
        </div> {/* end of col */}

        <div className="col-lg-4">
          <h3>NPS Camp Finder</h3>
          <hr className="line-heading"/><br/>
          <h6>Camping Spot 🏕️Finder</h6>
            <p>Looking for a place to camp in the National Parks! Use this app.</p>
            <div className="testimonial-container">
              <p className="testimonial-author">Team Members</p><br/>
              <p className="testimonial-text">Michelle McConville</p>
              <p className="testimonial-text">MD Mahbubur Rahman</p>
              <p className="testimonial-text">Julian Viso</p>
            </div>
          <a className="btn-solid-reg" href="https://michellemcconville.github.io/P1-camping-spot-finder/" rel="noreferrer" target="_blank">WEBSITE</a>
          <a className="btn-outline-reg mfp-close as-button" href="#projects">BACK</a>
          <a className="btn-solid-reg" href="https://github.com/MichelleMcConville/P1-camping-spot-finder"  rel="noreferrer" target="_blank">CODE</a>
        </div> {/* end of col */}

      </div> {/* end of row */}
    </div> {/* end of lightbox-basic */}
    {/* end of lightbox */}

    {/* Lightbox */}
    <div id="homework-13" className="lightbox-basic zoom-anim-dialog mfp-hide">
      <div className="row">
        <button title="Close (Esc)" type="button" className="mfp-close x-button">×</button>

        <div className="col-lg-8">
          <img className="img-fluid" src="images/homework-13.jpg" alt="alternative" style={{ border: "solid 2px" }}/>
        </div> {/* end of col */}

        <div className="col-lg-4">
          <h3>Eat-Da-Burger</h3>
          <hr className="line-heading"/><br/>
          <h6>Burger 🍔 Logger</h6>
            <p>Keep track of any & all burgers you have tried!</p><br/>
            <a className="btn-solid-reg" href="https://mchel-burger-app.herokuapp.com/" rel="noreferrer" target="_blank">WEBSITE</a>
            <a className="btn-outline-reg mfp-close as-button" href="#projects">BACK</a>
            <a className="btn-solid-reg" href="https://github.com/MichelleMcConville/13-burger" rel="noreferrer" target="_blank">CODE</a>
        </div> {/* end of col */}

      </div> {/* end of row */}
    </div> {/* end of lightbox-basic */}
    {/* end of lightbox */}

    {/* Lightbox */}
    <div id="homework-12" className="lightbox-basic zoom-anim-dialog mfp-hide">
      <div className="row">
        <button title="Close (Esc)" type="button" className="mfp-close x-button">×</button>

        <div className="col-lg-8">
          <img className="img-fluid" src="images/homework-12.jpg" alt="alternative" style={{ border: "solid 2px" }}/>
        </div> {/* end of col */}

        <div className="col-lg-4">
          <h3>Employee 🧑‍🤝‍🧑 Tracker</h3>
          <hr className="line-heading"/><br/>
          <h6>Command Line Interface App</h6>
            <p>Use this CLI app to maintain a list of employees for your company!</p><br/>
            <a className="btn-outline-reg mfp-close as-button" href="#projects">BACK</a>
            <a className="btn-solid-reg" href="https://github.com/MichelleMcConville/12-employee-tracker" rel="noreferrer" target="_blank">CODE</a>
        </div> {/* end of col */}

      </div> {/* end of row */}
    </div> {/* end of lightbox-basic */}
    {/* end of lightbox */}

    {/* Lightbox */}
    <div id="homework-11" className="lightbox-basic zoom-anim-dialog mfp-hide">
      <div className="row">
        <button title="Close (Esc)" type="button" className="mfp-close x-button">×</button>

        <div className="col-lg-8">
          <img className="img-fluid" src="images/homework-11.jpg" alt="alternative" style={{ border: "solid 2px" }}/>
        </div> {/* end of col */}

        <div className="col-lg-4">
          <h3>Note 📝 Taker</h3>
          <hr className="line-heading"/><br/>
          <h6>Put your notes here</h6>
            <p>Save paper by using this cute little notes app!</p><br/>
            <a className="btn-solid-reg" href="https://mchel-note-taker.herokuapp.com/" rel="noreferrer" target="_blank">WEBSITE</a>
            <a className="btn-outline-reg mfp-close as-button" href="#projects">BACK</a>
            <a className="btn-solid-reg" href="https://github.com/MichelleMcConville/11-note-taker" rel="noreferrer" target="_blank">CODE</a>
        </div> {/* end of col */}

      </div> {/* end of row */}
    </div> {/* end of lightbox-basic */}
    {/* end of lightbox */}

    {/* Lightbox */}
    <div id="homework-10" className="lightbox-basic zoom-anim-dialog mfp-hide">
      <div className="row">
        <button title="Close (Esc)" type="button" className="mfp-close x-button">×</button>

        <div className="col-lg-8">
          <img className="img-fluid" src="images/homework-10.jpg" alt="alternative" style={{ border: "solid 2px" }}/>
        </div> {/* end of col */}

        <div className="col-lg-4">
          <h3>Team 💼 Roster</h3>
          <hr className="line-heading"/><br/>
          <h6>Command Line Interface App</h6>
            <p>Use this CLI app to maintain a list of employees in your team!</p><br/>
            <a className="btn-outline-reg mfp-close as-button" href="#projects">BACK</a>
            <a className="btn-solid-reg" href="https://github.com/MichelleMcConville/10-employee-summary/" rel="noreferrer" target="_blank">CODE</a>
        </div> {/* end of col */}

      </div> {/* end of row */}
    </div> {/* end of lightbox-basic */}
    {/* end of lightbox */}

    {/* Lightbox */}
    <div id="homework-09" className="lightbox-basic zoom-anim-dialog mfp-hide">
      <div className="row">
        <button title="Close (Esc)" type="button" className="mfp-close x-button">×</button>

        <div className="col-lg-8">
          <img className="img-fluid" src="images/homework-09.jpg" alt="alternative" style={{ border: "solid 2px" }}/>
        </div> {/* end of col */}

        <div className="col-lg-4">
          <h3>README ⚙️ Generator</h3>
          <hr className="line-heading"/><br/>
          <h6>Command Line Interface App</h6>
            <p>Create your README.md using this CLI app!</p><br/>
            <a className="btn-outline-reg mfp-close as-button" href="#projects">BACK</a>
            <a className="btn-solid-reg" href="https://github.com/MichelleMcConville/09-readme-generator" rel="noreferrer" target="_blank">CODE</a>
        </div> {/* end of col */}

      </div> {/* end of row */}
    </div> {/* end of lightbox-basic */}
    {/* end of lightbox */}

    {/* Lightbox */}
    <div id="homework-06" className="lightbox-basic zoom-anim-dialog mfp-hide">
      <div className="row">
        <button title="Close (Esc)" type="button" className="mfp-close x-button">×</button>

        <div className="col-lg-8">
          <img className="img-fluid" src="images/homework-06.jpg" alt="alternative" style={{ border: "solid 2px" }}/>
        </div> {/* end of col */}

        <div className="col-lg-4">
          <h3>Weather 🌤️ Dashboard</h3>
          <hr className="line-heading"/><br/>
          <h6>A 5 day weather forecast</h6>
            <p>Check today's weather & the 5-Day forecast for a city near you!</p><br/>
            <a className="btn-solid-reg" href="https://michellemcconville.github.io/06-weather-dashboard/" rel="noreferrer" target="_blank">WEBSITE</a>
            <a className="btn-outline-reg mfp-close as-button" href="#projects">BACK</a>
            <a className="btn-solid-reg" href="https://github.com/MichelleMcConville/06-weather-dashboard" rel="noreferrer" target="_blank">CODE</a>
        </div> {/* end of col */}

      </div> {/* end of row */}
    </div> {/* end of lightbox-basic */}
    {/* end of lightbox */}

    {/* Lightbox */}
    <div id="homework-05" className="lightbox-basic zoom-anim-dialog mfp-hide">
      <div className="row">
        <button title="Close (Esc)" type="button" className="mfp-close x-button">×</button>

        <div className="col-lg-8">
          <img className="img-fluid" src="images/homework-05.jpg" alt="alternative" style={{ border: "solid 2px" }}/>
        </div> {/* end of col */}

        <div className="col-lg-4">
          <h3>Day 📆 Planner</h3>
          <hr className="line-heading"/><br/>
          <h6>Daily Planner</h6>
            <p>Keep track of your workday schedule with this handy day planner!</p><br/>
            <a className="btn-solid-reg" href="https://michellemcconville.github.io/05-work-day-scheduler/" rel="noreferrer" target="_blank">WEBSITE</a>
            <a className="btn-outline-reg mfp-close as-button" href="#projects">BACK</a>
            <a className="btn-solid-reg" href="https://github.com/MichelleMcConville/05-work-day-scheduler" rel="noreferrer" target="_blank">CODE</a>
        </div> {/* end of col */}

      </div> {/* end of row */}
    </div> {/* end of lightbox-basic */}
    {/* end of lightbox */}

    {/* Lightbox */}
    <div id="homework-04" className="lightbox-basic zoom-anim-dialog mfp-hide">
      <div className="row">
        <button title="Close (Esc)" type="button" className="mfp-close x-button">×</button>

        <div className="col-lg-8">
          <img className="img-fluid" src="images/homework-04.jpg" alt="alternative" style={{ border: "solid 2px" }}/>
        </div> {/* end of col */}

        <div className="col-lg-4">
          <h3>Code ⏲️ Quiz</h3>
          <hr className="line-heading"/><br/>
          <h6>Play a code quiz</h6>
            <p>Test your knowledge against your friends with this fun code quiz!</p><br/>
            <a className="btn-solid-reg" href="https://michellemcconville.github.io/04-code-quiz/" rel="noreferrer" target="_blank">WEBSITE</a>
            <a className="btn-outline-reg mfp-close as-button" href="#projects">BACK</a>
            <a className="btn-solid-reg" href="https://github.com/MichelleMcConville/04-code-quiz" rel="noreferrer" target="_blank">CODE</a>
        </div> {/* end of col */}

      </div> {/* end of row */}
    </div> {/* end of lightbox-basic */}
    {/* end of lightbox */}

    {/* Lightbox */}
    <div id="homework-03" className="lightbox-basic zoom-anim-dialog mfp-hide">
      <div className="row">
        <button title="Close (Esc)" type="button" className="mfp-close x-button">×</button>

        <div className="col-lg-8">
          <img className="img-fluid" src="images/homework-03.jpg" alt="alternative" style={{ border: "solid 2px" }}/>
        </div> {/* end of col */}

        <div className="col-lg-4">
          <h3>Password 🔒 Generator</h3>
          <hr className="line-heading"/><br/>
          <h6>Use this app to create a secure password from 8-128 in length!</h6>
            <p>Need help generating a password? Use this app to create a secure password!</p><br/>
            <a className="btn-solid-reg" href="https://michellemcconville.github.io/03-password-generator/" rel="noreferrer" target="_blank">WEBSITE</a>
            <a className="btn-outline-reg mfp-close as-button" href="#projects">BACK</a>
            <a className="btn-solid-reg" href="https://github.com/MichelleMcConville/03-password-generator" rel="noreferrer" target="_blank">CODE</a>
        </div> {/* end of col */}

      </div> {/* end of row */}
    </div> {/* end of lightbox-basic */}
    {/* end of lightbox */}

    {/* Lightbox */}
    <div id="homework-00" className="lightbox-basic zoom-anim-dialog mfp-hide">
      <div className="row">
        <button title="Close (Esc)" type="button" className="mfp-close x-button">×</button>

        <div className="col-lg-8">
          <img className="img-fluid" src="images/homework-00.jpg" alt="alternative" style={{ border: "solid 2px" }}/>
        </div> {/* end of col */}

        <div className="col-lg-4">
          <h3>Favorites 🌸 Page</h3>
          <hr className="line-heading"/><br/>
          <h6>A html based favorites page</h6>
            <p>A template to use for organizing all your bookmarked sites into a fun 1-page format!</p><br/>
            <a className="btn-solid-reg" href="https://michellemcconville.github.io/bookmarks/" rel="noreferrer" target="_blank">WEBSITE</a>
            <a className="btn-outline-reg mfp-close as-button" href="#projects">BACK</a>
            <a className="btn-solid-reg" href="https://github.com/MichelleMcConville/bookmarks" rel="noreferrer" target="_blank">CODE</a>
        </div> {/* end of col */}

      </div> {/* end of row */}
    </div> {/* end of lightbox-basic */}
    {/* end of lightbox */}


    {/* Contact */}
    <div id="contact" className="form-2">
      <div className="container">
        <div className="row">

          <div className="col-lg-6">
            <div className="text-container">

            <h2>Want to get in touch with me</h2>
            <ul className="list-unstyled li-space-lg">
              <li className="address"><i className="fa fa-map-marker-alt"></i>Kansas City Metro Area, USA</li>
              <li><i className="fa fa-phone"></i><a href="tel:18163223389">816-322-3389</a></li><br/>
              <li><i className="fa fa-envelope"></i><a href="mailto:office@aria.com">mchelmconvl@gmail.com</a></li>
            </ul>

            <h3>Follow Me On Social Media</h3>

            <span className="fa-stack"><a href="https://www.facebook.com/michelle.l.mcconville" rel="noreferrer" target="_blank"><span className="hexagon"></span>
              <i className="fab fa-facebook-f fa-stack-1x"></i></a>
            </span>

            <span className="fa-stack"><a href="https://twitter.com/MchelMconvl" rel="noreferrer" target="_blank"><span className="hexagon"></span>
              <i className="fab fa-twitter fa-stack-1x"></i></a>
            </span>

            <span className="fa-stack"><a href="https://www.pinterest.com/mchelmconvl/_saved/" rel="noreferrer" target="_blank"><span className="hexagon"></span>
              <i className="fab fa-pinterest fa-stack-1x"></i></a>
            </span>

            <span className="fa-stack"><a href="https://www.instagram.com/mchelmconvl/" rel="noreferrer" target="_blank"><span className="hexagon"></span>
              <i className="fab fa-instagram fa-stack-1x"></i></a>
            </span>

            <span className="fa-stack"><a href="https://www.linkedin.com/in/mchelmcconvillekc/" rel="noreferrer" target="_blank"><span className="hexagon"></span>
              <i className="fab fa-linkedin-in fa-stack-1x"></i></a>
            </span>

            </div> {/* end of text-container */}
          </div> {/* end of col */}
              
          <div className="col-lg-6">
            {/* Contact Form */}
            <form id="contactForm" data-toggle="validator" data-focus="false">

            <div className="form-group">
              <input type="text" className="form-control-input" id="cname" required/>
              <label className="label-control" for="cname">Name</label>
              <div className="help-block with-errors"></div>
            </div>

            <div className="form-group">
              <input type="email" className="form-control-input" id="cemail" required/>
              <label className="label-control" for="cemail">Email</label>
              <div className="help-block with-errors"></div>
            </div>

            <div className="form-group">
              <textarea className="form-control-textarea" id="cmessage" required></textarea>
              <label className="label-control" for="cmessage">Your message</label>
              <div className="help-block with-errors"></div>
            </div>

            <div className="form-group">
              <button type="submit" className="form-control-submit-button">SUBMIT MESSAGE</button>
            </div>

            <div className="form-message">
              <div id="cmsgSubmit" className="h3 text-center hidden"></div>
            </div>

            </form> {/* end of contact form */}
          </div> {/* end of col */}

        </div> {/* end of row */}
      </div> {/* end of container */}
    </div> {/* end of form-2 */}
    {/* end of contact */}


    {/* Copyright */}
    <div className="copyright">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <p className="p-small">Copyright © 2021 by Michelle McConville</p>
          </div>
        </div>
      </div>
    </div>

    </div>

  );
}

export default App;

import React from "react";
import "./App.css";

function App() {
  return (
        
    <div data-spy="scroll" data-target=".fixed-top">

    {/* Preloader */}
    <div class="spinner-wrapper">
      <div class="spinner">
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
      </div>
    </div>
    {/* end of preloader */}


    {/* Navbar */}
    <nav class="navbar navbar-expand-md navbar-dark navbar-custom fixed-top">
      {/* Image Logo */}
      <a class="navbar-brand logo-image" style="width: 32px;"><img src="images/logo.svg" alt="alternative"/></a>
      <a class="navbar-brand logo-text page-scroll">Michelle McConville</a>   

    {/* Mobile Menu Toggle Button */}
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-awesome fas fa-bars"></span>
      <span class="navbar-toggler-awesome fas fa-times"></span>
    </button> {/* end of mobile menu toggle button */}

      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link page-scroll" href="#header">HOME <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link page-scroll" href="#intro">ABOUT</a>
          </li>
          <li class="nav-item">
            <a class="nav-link page-scroll" href="#projects">PORTFOLIO</a>
          </li>
          <li class="nav-item">
            <a class="nav-link page-scroll" href="#contact">CONTACT</a>
          </li>
          <li class="nav-item">
            <a class="nav-link page-scroll" href="images/MichelleMcConville.pdf" target="_blank">RESUME</a>
          </li>
        </ul>

        <span class="nav-item social-icons">
          <span class="fa-stack"><a href="https://www.linkedin.com/in/mchelmcconvillekc/" target="_blank"><span class="hexagon"></span>
            <i class="fab fa-linkedin-in fa-stack-1x"></i></a>
          </span>

          <span class="fa-stack"><a href="https://github.com/MichelleMcConville" target="_blank"><span class="hexagon"></span>
            <i class="fab fa-github fa-stack-1x"></i></a>
          </span>
        </span>
      </div> {/* end of collapsible navbar */}
    </nav>
    {/* end of navbar */}


    {/* Header */}
    <header id="header" class="header">
      <div class="header-content">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="text-container">
                <h1>Interested in <span id="js-rotating">Front End, UX/UI, Full Stack</span></h1><br/><br/>
                  <p class="p-heading p-large">QA Engineer turned Full Stack Web Developer!</p><br/>
                  <a class="btn-solid-lg page-scroll" href="#intro">About</a>
              </div>
            </div> {/* end of col */}
          </div> {/* end of row */}
        </div> {/* end of container */}
      </div> {/* end of header-content */}
    </header>
    {/* end of header */}


    {/* Intro */}
    <div id="intro" class="basic-1">
      <div class="container">
        <div class="row">

          <div class="col-lg-7">
            <div class="text-container">
              <h2>About Me</h2>
              <p style="color: #333;">My name is Michelle McConville, wife and mother of two. I love to cook, create & hang with family!</p>
              <p style="color: #333;">I'm a experienced QA Engineer, passionate about working hand-in-hand with developers, product owners, and business analyst to test requirements and specifications that accurately reflect the business needs.</p>
              <p style="color: #333;">Currently attending KU Coding Boot Camp (University of Kansas), where I will gain full-stack developer certificate, which will lead into a software development job!</p>

            </div> {/* end of text-container */}
          </div> {/* end of col */}

          <div class="col-lg-5">
            <div class="image-container"><br/>
              <img class="img-fluid" src="images/heyMe.png" alt="alternative"/>
            </div> {/* end of image-container */}
          </div> {/* end of col */}

        </div> {/* end of row */}
      </div> {/* end of container */}
    </div> {/* end of basic-1 */}
    {/* end of intro */}


    {/* Skills */}
    <div class="slider">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h2>Skills</h2><br/>
            {/* <p class="p-heading">Here are some of my current and past skills</p> */}
          </div> {/* end of col */}
        </div> {/* end of row */}

        <div class="row">
          <div class="col-lg-12">

          {/* Card Slider */}
          <div class="slider-container">
            <div class="swiper-container card-slider">
              <div class="swiper-wrapper">
                  
                {/* Slide */}
                <div class="swiper-slide">
                  <div class="card">
                  <img class="card-image" src="images/logo-github.jpg" alt="alternative"/>
                    <div class="card-body">
                      <div class="testimonial-author">GitHub</div>
                    </div>
                  </div>
                </div> {/* end of swiper-slide */}
                {/* end of slide */}

                {/* Slide */}
                <div class="swiper-slide">
                  <div class="card">
                  <img class="card-image" src="images/logo-css.svg" alt="alternative"/>
                    <div class="card-body">
                      <div class="testimonial-author">CSS</div>
                    </div>
                  </div>        
                </div> {/* end of swiper-slide */}
                {/* end of slide */}

                {/* Slide */}
                <div class="swiper-slide">
                  <div class="card">
                  <img class="card-image" src="images/logo-html.svg" alt="alternative"/>
                    <div class="card-body">
                      <div class="testimonial-author">HTML</div>
                    </div>
                  </div>        
                </div> {/* end of swiper-slide */}
                {/* end of slide */}

                {/* Slide */}
                <div class="swiper-slide">
                  <div class="card">
                  <img class="card-image" src="images/logo-bootstrap.png" alt="alternative"/>
                    <div class="card-body">
                      <div class="testimonial-author">Bootstrap</div>
                    </div>
                  </div>        
                </div> {/* end of swiper-slide */}
                {/* end of slide */}

                {/* Slide */}
                <div class="swiper-slide">
                  <div class="card">
                  <img class="card-image" src="images/logo-js.png" alt="alternative"/>
                    <div class="card-body">
                      <div class="testimonial-author">JavaScript</div>
                    </div>
                  </div>
                </div> {/* end of swiper-slide */}
                {/* end of slide */}

                {/* Slide */}
                <div class="swiper-slide">
                  <div class="card">
                    <img class="card-image" src="images/logo-jQuery.png" alt="alternative"/>
                    <div class="card-body">
                      <div class="testimonial-author">jQuery</div>
                    </div>
                  </div>        
                </div> {/* end of swiper-slide */}
                {/* end of slide */}

                {/* Slide */}
                <div class="swiper-slide">
                  <div class="card">
                    <img class="card-image" src="images/logo-nodeJs.svg" alt="alternative"/>
                    <div class="card-body">
                      <div class="testimonial-author">Node.js</div>
                    </div>
                  </div>        
                </div> {/* end of swiper-slide */}
                {/* end of slide */}

                {/* Slide */}
                <div class="swiper-slide">
                  <div class="card">
                    <img class="card-image" src="images/logo-mySQL.png" alt="alternative"/>
                    <div class="card-body">
                      <div class="testimonial-author">MySQL</div>
                    </div>
                  </div>        
                </div> {/* end of swiper-slide */}
                {/* end of slide */}

                {/* Slide */}
                <div class="swiper-slide">
                  <div class="card">
                    <img class="card-image" src="images/logo-mongoDB.png" alt="alternative"/>
                    <div class="card-body">
                      <div class="testimonial-author">MongoDB</div>
                    </div>
                  </div>        
                </div> {/* end of swiper-slide */}
                {/* end of slide */}

                {/* Slide */}
                <div class="swiper-slide">
                  <div class="card">
                    <img class="card-image" src="images/logo-react.svg" alt="alternative"/>
                    <div class="card-body">
                      <div class="testimonial-author">React</div>
                    </div>
                  </div>        
                </div> {/* end of swiper-slide */}
                {/* end of slide */}

                {/* Slide */}
                <div class="swiper-slide">
                  <div class="card">
                    <img class="card-image" src="images/logo-aem.jpg"   alt="alternative"/>
                    <div class="card-body">
                      <div class="testimonial-author">AEM</div>
                    </div>
                  </div>        
                </div> {/* end of swiper-slide */}
                {/* end of slide */}

                {/* Slide */}
                <div class="swiper-slide">
                  <div class="card">
                    <img class="card-image" src="images/logo-jira.svg" alt="alternative"/>
                    <div class="card-body">
                      <div class="testimonial-author">JIRA</div>
                    </div>
                  </div>        
                </div> {/* end of swiper-slide */}
                {/* end of slide */}

                {/* Slide */}
                <div class="swiper-slide">
                  <div class="card">
                    <img class="card-image" src="images/logo-msOffice.png" alt="alternative"/>
                    <div class="card-body">
                      <div class="testimonial-author">MS Office</div>
                    </div>
                  </div>        
                </div> {/* end of swiper-slide */}
                {/* end of slide */}

                {/* Slide */}
                <div class="swiper-slide">
                  <div class="card">
                    <img class="card-image" src="images/logo-sa_badge.png" alt="alternative"/>
                    <div class="card-body">
                      <div class="testimonial-author">Agile Methodology</div>
                    </div>
                  </div>        
                </div> {/* end of swiper-slide */}
                {/* end of slide */}

              </div> {/* end of swiper-wrapper */}

              {/* Add Arrows */}
              <div class="swiper-button-next"></div>
              <div class="swiper-button-prev"></div>
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
    <div id="projects" class="filter">
      <div class="container">

        <div class="row">
          <div class="col-lg-12">
            <h2>My Portfolio</h2>
          </div> {/* end of col */}
        </div> {/* end of row */}

        <div class="row">
          <div class="col-lg-12">

            {/* Filter */}
            <div class="button-group filters-button-group">
              <a class="button is-checked" data-filter="*"><span>SHOW ALL</span></a>
              <a class="button" data-filter=".project"><span>PROJECT</span></a>
              <a class="button" data-filter=".homework"><span>HOMEWORK</span></a>
              <a class="button" data-filter=".fs"><span>FULL STACK APP</span></a>
              <a class="button" data-filter=".cli"><span>COMMAND LINE INTERFACE</span></a>
              <a class="button" data-filter=".misc"><span>MISC</span></a>
            </div> {/* end of button group */}

            <div class="grid">
              <div class="element-item project fs">
                <a class="popup-with-move-anim" href="#project-2"><div class="element-item-overlay"><span>Project #2</span></div><img src="images/project-2.jpg" alt="alternative"/></a>
              </div>
              <div class="element-item project">
                <a class="popup-with-move-anim" href="#project-1"><div class="element-item-overlay"><span>Project #1</span></div><img src="images/project-1.jpg" alt="alternative"/></a>
              </div>
              <div class="element-item design homework fs">
                <a class="popup-with-move-anim" href="#homework-13"><div class="element-item-overlay"><span>Burger 🍔 Logger</span></div><img src="images/homework-13.jpg" alt="alternative"/></a>
              </div>
              <div class="element-item design homework cli">
                <a class="popup-with-move-anim" href="#homework-12"><div class="element-item-overlay"><span>Employee 🧑‍🤝‍🧑 Tracker</span></div><img src="images/homework-12.jpg" alt="alternative"/></a>
              </div>
              <div class="element-item design homework fs">
                <a class="popup-with-move-anim" href="#homework-11"><div class="element-item-overlay"><span>Note 📝 Taker</span></div><img src="images/homework-11.jpg" alt="alternative"/></a>
              </div>
              <div class="element-item design homework cli">
                <a class="popup-with-move-anim" href="#homework-10"><div class="element-item-overlay"><span>Team 💼 Roster</span></div><img src="images/homework-10.jpg" alt="alternative"/></a>
              </div>
              <div class="element-item homework cli">
                <a class="popup-with-move-anim" href="#homework-09"><div class="element-item-overlay"><span>README ⚙️ Generator</span></div><img src="images/homework-09.jpg" alt="alternative"/></a>
              </div>
              <div class="element-item homework">
                <a class="popup-with-move-anim" href="#homework-06"><div class="element-item-overlay"><span>Weather 🌤️ Dashboard</span></div><img src="images/homework-06.jpg" alt="alternative"/></a>
              </div>
              <div class="element-item homework">
                <a class="popup-with-move-anim" href="#homework-05"><div class="element-item-overlay"><span>Day 📆 Planner</span></div><img src="images/homework-05.jpg" alt="alternative"/></a>
              </div>
              <div class="element-item homework">
                <a class="popup-with-move-anim" href="#homework-04"><div class="element-item-overlay"><span>Code ⏲️ Quiz</span></div><img src="images/homework-04.jpg" alt="alternative"/></a>
              </div>
              <div class="element-item homework">
                <a class="popup-with-move-anim" href="#homework-03"><div class="element-item-overlay"><span>Password 🔒 Generator</span></div><img src="images/homework-03.jpg" alt="alternative"/></a>
              </div>
              <div class="element-item homework misc">
                <a class="popup-with-move-anim" href="#homework-00"><div class="element-item-overlay"><span>Favorites 🌸 Page</span></div><img src="images/homework-00.jpg" alt="alternative"/></a>
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
    <div id="project-2" class="lightbox-basic zoom-anim-dialog mfp-hide">
      <div class="row">
        <button title="Close (Esc)" type="button" class="mfp-close x-button">×</button>

        <div class="col-lg-8">
          <img class="img-fluid" src="images/project-2.jpg" alt="alternative" style="border: solid 2px"/>
        </div> {/* end of col */}

        <div class="col-lg-4">
          <h3>TPoops</h3>
          <hr class="line-heading"/><br/>
          <h6>Toilet 🚽 Paper Finder</h6>
            <p>Annoyed you cannot find any TP, use this app if you have located or in search of this priceless commodity!</p>
          <div class="testimonial-container">
            <p class="testimonial-author">Team Members</p><br/>
            <p class="testimonial-text">Michelle McConville</p>
            <p class="testimonial-text">Kendra Hallam</p>
            <p class="testimonial-text">Kobe Hill</p>
            <p class="testimonial-text">Paul LaBounty</p>
          </div>
            <a class="btn-solid-reg" href="https://mkkp-project2.herokuapp.com/" target="_blank">WEBSITE</a>
            <a class="btn-outline-reg mfp-close as-button" href="#projects">BACK</a> 
            <a class="btn-solid-reg" href="https://github.com/MichelleMcConville/P2-tpoops" target="_blank">CODE</a>
        </div> {/* end of col */}

      </div> {/* end of row */}
    </div> {/* end of lightbox-basic */}
    {/* end of lightbox */}

    {/* Lightbox */}
    <div id="project-1" class="lightbox-basic zoom-anim-dialog mfp-hide">
      <div class="row">
        <button title="Close (Esc)" type="button" class="mfp-close x-button">×</button>

        <div class="col-lg-8">
          <img class="img-fluid" src="images/project-1.jpg" alt="alternative" style="border: solid 2px"/>
        </div> {/* end of col */}

        <div class="col-lg-4">
          <h3>NPS Camp Finder</h3>
          <hr class="line-heading"/><br/>
          <h6>Camping Spot 🏕️Finder</h6>
            <p>Looking for a place to camp in the National Parks! Use this app.</p>
            <div class="testimonial-container">
              <p class="testimonial-author">Team Members</p><br/>
              <p class="testimonial-text">Michelle McConville</p>
              <p class="testimonial-text">MD Mahbubur Rahman</p>
              <p class="testimonial-text">Julian Viso</p>
            </div>
          <a class="btn-solid-reg" href="https://michellemcconville.github.io/P1-camping-spot-finder/" target="_blank">WEBSITE</a>
          <a class="btn-outline-reg mfp-close as-button" href="#projects">BACK</a>
          <a class="btn-solid-reg" href="https://github.com/MichelleMcConville/P1-camping-spot-finder"  target="_blank">CODE</a>
        </div> {/* end of col */}

      </div> {/* end of row */}
    </div> {/* end of lightbox-basic */}
    {/* end of lightbox */}

    {/* Lightbox */}
    <div id="homework-13" class="lightbox-basic zoom-anim-dialog mfp-hide">
      <div class="row">
        <button title="Close (Esc)" type="button" class="mfp-close x-button">×</button>

        <div class="col-lg-8">
          <img class="img-fluid" src="images/homework-13.jpg" alt="alternative" style="border: solid 2px"/>
        </div> {/* end of col */}

        <div class="col-lg-4">
          <h3>Eat-Da-Burger</h3>
          <hr class="line-heading"/><br/>
          <h6>Burger 🍔 Logger</h6>
            <p>Keep track of any & all burgers you have tried!</p><br/>
            <a class="btn-solid-reg" href="https://mchel-burger-app.herokuapp.com/" target="_blank">WEBSITE</a>
            <a class="btn-outline-reg mfp-close as-button" href="#projects">BACK</a>
            <a class="btn-solid-reg" href="https://github.com/MichelleMcConville/13-burger" target="_blank">CODE</a>
        </div> {/* end of col */}

      </div> {/* end of row */}
    </div> {/* end of lightbox-basic */}
    {/* end of lightbox */}

    {/* Lightbox */}
    <div id="homework-12" class="lightbox-basic zoom-anim-dialog mfp-hide">
      <div class="row">
        <button title="Close (Esc)" type="button" class="mfp-close x-button">×</button>

        <div class="col-lg-8">
          <img class="img-fluid" src="images/homework-12.jpg" alt="alternative" style="border: solid 2px"/>
        </div> {/* end of col */}

        <div class="col-lg-4">
          <h3>Employee 🧑‍🤝‍🧑 Tracker</h3>
          <hr class="line-heading"/><br/>
          <h6>Command Line Interface App</h6>
            <p>Use this CLI app to maintain a list of employees for your company!</p><br/>
            <a class="btn-outline-reg mfp-close as-button" href="#projects">BACK</a>
            <a class="btn-solid-reg" href="https://github.com/MichelleMcConville/12-employee-tracker" target="_blank">CODE</a>
        </div> {/* end of col */}

      </div> {/* end of row */}
    </div> {/* end of lightbox-basic */}
    {/* end of lightbox */}

    {/* Lightbox */}
    <div id="homework-11" class="lightbox-basic zoom-anim-dialog mfp-hide">
      <div class="row">
        <button title="Close (Esc)" type="button" class="mfp-close x-button">×</button>

        <div class="col-lg-8">
          <img class="img-fluid" src="images/homework-11.jpg" alt="alternative" style="border: solid 2px"/>
        </div> {/* end of col */}

        <div class="col-lg-4">
          <h3>Note 📝 Taker</h3>
          <hr class="line-heading"/><br/>
          <h6>Put your notes here</h6>
            <p>Save paper by using this cute little notes app!</p><br/>
            <a class="btn-solid-reg" href="https://mchel-note-taker.herokuapp.com/" target="_blank">WEBSITE</a>
            <a class="btn-outline-reg mfp-close as-button" href="#projects">BACK</a>
            <a class="btn-solid-reg" href="https://github.com/MichelleMcConville/11-note-taker" target="_blank">CODE</a>
        </div> {/* end of col */}

      </div> {/* end of row */}
    </div> {/* end of lightbox-basic */}
    {/* end of lightbox */}

    {/* Lightbox */}
    <div id="homework-10" class="lightbox-basic zoom-anim-dialog mfp-hide">
      <div class="row">
        <button title="Close (Esc)" type="button" class="mfp-close x-button">×</button>

        <div class="col-lg-8">
          <img class="img-fluid" src="images/homework-10.jpg" alt="alternative" style="border: solid 2px"/>
        </div> {/* end of col */}

        <div class="col-lg-4">
          <h3>Team 💼 Roster</h3>
          <hr class="line-heading"/><br/>
          <h6>Command Line Interface App</h6>
            <p>Use this CLI app to maintain a list of employees in your team!</p><br/>
            <a class="btn-outline-reg mfp-close as-button" href="#projects">BACK</a>
            <a class="btn-solid-reg" href="https://github.com/MichelleMcConville/10-employee-summary/" target="_blank">CODE</a>
        </div> {/* end of col */}

      </div> {/* end of row */}
    </div> {/* end of lightbox-basic */}
    {/* end of lightbox */}

    {/* Lightbox */}
    <div id="homework-09" class="lightbox-basic zoom-anim-dialog mfp-hide">
      <div class="row">
        <button title="Close (Esc)" type="button" class="mfp-close x-button">×</button>

        <div class="col-lg-8">
          <img class="img-fluid" src="images/homework-09.jpg" alt="alternative" style="border: solid 2px"/>
        </div> {/* end of col */}

        <div class="col-lg-4">
          <h3>README ⚙️ Generator</h3>
          <hr class="line-heading"/><br/>
          <h6>Command Line Interface App</h6>
            <p>Create your README.md using this CLI app!</p><br/>
            <a class="btn-outline-reg mfp-close as-button" href="#projects">BACK</a>
            <a class="btn-solid-reg" href="https://github.com/MichelleMcConville/09-readme-generator" target="_blank">CODE</a>
        </div> {/* end of col */}

      </div> {/* end of row */}
    </div> {/* end of lightbox-basic */}
    {/* end of lightbox */}

    {/* Lightbox */}
    <div id="homework-06" class="lightbox-basic zoom-anim-dialog mfp-hide">
      <div class="row">
        <button title="Close (Esc)" type="button" class="mfp-close x-button">×</button>

        <div class="col-lg-8">
          <img class="img-fluid" src="images/homework-06.jpg" alt="alternative" style="border: solid 2px"/>
        </div> {/* end of col */}

        <div class="col-lg-4">
          <h3>Weather 🌤️ Dashboard</h3>
          <hr class="line-heading"/><br/>
          <h6>A 5 day weather forecast</h6>
            <p>Check today's weather & the 5-Day forecast for a city near you!</p><br/>
            <a class="btn-solid-reg" href="https://michellemcconville.github.io/06-weather-dashboard/" target="_blank">WEBSITE</a>
            <a class="btn-outline-reg mfp-close as-button" href="#projects">BACK</a>
            <a class="btn-solid-reg" href="https://github.com/MichelleMcConville/06-weather-dashboard" target="_blank">CODE</a>
        </div> {/* end of col */}

      </div> {/* end of row */}
    </div> {/* end of lightbox-basic */}
    {/* end of lightbox */}

    {/* Lightbox */}
    <div id="homework-05" class="lightbox-basic zoom-anim-dialog mfp-hide">
      <div class="row">
        <button title="Close (Esc)" type="button" class="mfp-close x-button">×</button>

        <div class="col-lg-8">
          <img class="img-fluid" src="images/homework-05.jpg" alt="alternative" style="border: solid 2px"/>
        </div> {/* end of col */}

        <div class="col-lg-4">
          <h3>Day 📆 Planner</h3>
          <hr class="line-heading"/><br/>
          <h6>Daily Planner</h6>
            <p>Keep track of your workday schedule with this handy day planner!</p><br/>
            <a class="btn-solid-reg" href="https://michellemcconville.github.io/05-work-day-scheduler/" target="_blank">WEBSITE</a>
            <a class="btn-outline-reg mfp-close as-button" href="#projects">BACK</a>
            <a class="btn-solid-reg" href="https://github.com/MichelleMcConville/05-work-day-scheduler" target="_blank">CODE</a>
        </div> {/* end of col */}

      </div> {/* end of row */}
    </div> {/* end of lightbox-basic */}
    {/* end of lightbox */}

    {/* Lightbox */}
    <div id="homework-04" class="lightbox-basic zoom-anim-dialog mfp-hide">
      <div class="row">
        <button title="Close (Esc)" type="button" class="mfp-close x-button">×</button>

        <div class="col-lg-8">
          <img class="img-fluid" src="images/homework-04.jpg" alt="alternative" style="border: solid 2px"/>
        </div> {/* end of col */}

        <div class="col-lg-4">
          <h3>Code ⏲️ Quiz</h3>
          <hr class="line-heading"/><br/>
          <h6>Play a code quiz</h6>
            <p>Test your knowledge against your friends with this fun code quiz!</p><br/>
            <a class="btn-solid-reg" href="https://michellemcconville.github.io/04-code-quiz/" target="_blank">WEBSITE</a>
            <a class="btn-outline-reg mfp-close as-button" href="#projects">BACK</a>
            <a class="btn-solid-reg" href="https://github.com/MichelleMcConville/04-code-quiz" target="_blank">CODE</a>
        </div> {/* end of col */}

      </div> {/* end of row */}
    </div> {/* end of lightbox-basic */}
    {/* end of lightbox */}

    {/* Lightbox */}
    <div id="homework-03" class="lightbox-basic zoom-anim-dialog mfp-hide">
      <div class="row">
        <button title="Close (Esc)" type="button" class="mfp-close x-button">×</button>

        <div class="col-lg-8">
          <img class="img-fluid" src="images/homework-03.jpg" alt="alternative" style="border: solid 2px"/>
        </div> {/* end of col */}

        <div class="col-lg-4">
          <h3>Password 🔒 Generator</h3>
          <hr class="line-heading"/><br/>
          <h6>Use this app to create a secure password from 8-128 in length!</h6>
            <p>Need help generating a password? Use this app to create a secure password!</p><br/>
            <a class="btn-solid-reg" href="https://michellemcconville.github.io/03-password-generator/" target="_blank">WEBSITE</a>
            <a class="btn-outline-reg mfp-close as-button" href="#projects">BACK</a>
            <a class="btn-solid-reg" href="https://github.com/MichelleMcConville/03-password-generator" target="_blank">CODE</a>
        </div> {/* end of col */}

      </div> {/* end of row */}
    </div> {/* end of lightbox-basic */}
    {/* end of lightbox */}

    {/* Lightbox */}
    <div id="homework-00" class="lightbox-basic zoom-anim-dialog mfp-hide">
      <div class="row">
        <button title="Close (Esc)" type="button" class="mfp-close x-button">×</button>

        <div class="col-lg-8">
          <img class="img-fluid" src="images/homework-00.jpg" alt="alternative" style="border: solid 2px"/>
        </div> {/* end of col */}

        <div class="col-lg-4">
          <h3>Favorites 🌸 Page</h3>
          <hr class="line-heading"/><br/>
          <h6>A html based favorites page</h6>
            <p>A template to use for organizing all your bookmarked sites into a fun 1-page format!</p><br/>
            <a class="btn-solid-reg" href="https://michellemcconville.github.io/bookmarks/" target="_blank">WEBSITE</a>
            <a class="btn-outline-reg mfp-close as-button" href="#projects">BACK</a>
            <a class="btn-solid-reg" href="https://github.com/MichelleMcConville/bookmarks" target="_blank">CODE</a>
        </div> {/* end of col */}

      </div> {/* end of row */}
    </div> {/* end of lightbox-basic */}
    {/* end of lightbox */}


    {/* Contact */}
    <div id="contact" class="form-2">
      <div class="container">
        <div class="row">

          <div class="col-lg-6">
            <div class="text-container">

            <h2>Want to get in touch with me</h2>
            <ul class="list-unstyled li-space-lg">
              <li class="address"><i class="fa fa-map-marker-alt"></i>Kansas City Metro Area, USA</li>
              <li><i class="fa fa-phone"></i><a href="tel:18163223389">816-322-3389</a></li><br/>
              <li><i class="fa fa-envelope"></i><a href="mailto:office@aria.com">mchelmconvl@gmail.com</a></li>
            </ul>

            <h3>Follow Me On Social Media</h3>

            <span class="fa-stack"><a href="https://www.facebook.com/michelle.l.mcconville" target="_blank"><span class="hexagon"></span>
              <i class="fab fa-facebook-f fa-stack-1x"></i></a>
            </span>

            <span class="fa-stack"><a href="https://twitter.com/MchelMconvl" target="_blank"><span class="hexagon"></span>
              <i class="fab fa-twitter fa-stack-1x"></i></a>
            </span>

            <span class="fa-stack"><a href="https://www.pinterest.com/mchelmconvl/_saved/" target="_blank"><span class="hexagon"></span>
              <i class="fab fa-pinterest fa-stack-1x"></i></a>
            </span>

            <span class="fa-stack"><a href="https://www.instagram.com/mchelmconvl/" target="_blank"><span class="hexagon"></span>
              <i class="fab fa-instagram fa-stack-1x"></i></a>
            </span>

            <span class="fa-stack"><a href="https://www.linkedin.com/in/mchelmcconvillekc/" target="_blank"><span class="hexagon"></span>
              <i class="fab fa-linkedin-in fa-stack-1x"></i></a>
            </span>

            </div> {/* end of text-container */}
          </div> {/* end of col */}
              
          <div class="col-lg-6">
            {/* Contact Form */}
            <form id="contactForm" data-toggle="validator" data-focus="false">

            <div class="form-group">
              <input type="text" class="form-control-input" id="cname" required/>
              <label class="label-control" for="cname">Name</label>
              <div class="help-block with-errors"></div>
            </div>

            <div class="form-group">
              <input type="email" class="form-control-input" id="cemail" required/>
              <label class="label-control" for="cemail">Email</label>
              <div class="help-block with-errors"></div>
            </div>

            <div class="form-group">
              <textarea class="form-control-textarea" id="cmessage" required></textarea>
              <label class="label-control" for="cmessage">Your message</label>
              <div class="help-block with-errors"></div>
            </div>

            <div class="form-group">
              <button type="submit" class="form-control-submit-button">SUBMIT MESSAGE</button>
            </div>

            <div class="form-message">
              <div id="cmsgSubmit" class="h3 text-center hidden"></div>
            </div>

            </form> {/* end of contact form */}
          </div> {/* end of col */}

        </div> {/* end of row */}
      </div> {/* end of container */}
    </div> {/* end of form-2 */}
    {/* end of contact */}


    {/* Copyright */}
    <div class="copyright">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <p class="p-small">Copyright © 2021 by Michelle McConville</p>
          </div>
        </div>
      </div>
    </div>

    </div>

  );
}

export default App;

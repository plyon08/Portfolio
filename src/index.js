import React from 'react';
import ReactDOM from 'react-dom';
import './css/styles.css';
import './css/flexboxgrid.css';


  function DisplayTopHeader() {
    return (
      <section className='row'>
        <div className='col-xs contact'>
          <div><a id='tel' href='tel:6518953142'>651-895-3142</a></div>
          <div><a id='mail' href='mail:plyon08@gmail.com'>plyon08@gmail.com</a></div>
          <h1 className='heading'>Welcome!</h1>
          <h2 className='subheading'>Portfolio for Paul Lyon, Web Developer</h2>
          <h2><a href='https://github.com/plyon08'>Github Account</a></h2>
        </div>
      </section>
    );
  }

  function DisplaySkills(props) {
    let goodSkills = props.goodSkills.map((skills) => <div key={skills} className='skills-list'>{skills}</div>);
    let noviceSkills = props.noviceSkills.map((skills) => <div key={skills} className='skills-list'>{skills}</div>);
    return (
      <section className='row center section-bg-25'>
        <div className='col-xs-12 col-md-6'>
          <p className='skills-heading'>Proficient Skills</p>
          {goodSkills}
        </div>
        <div className='col-xs-12 col-md-6'>
          <p className='skills-heading'>Novice Skills</p>
          {noviceSkills}
        </div>
      </section>
    );
  }

  function DisplaySection(props) {
    let commonUrl = 'https://paullyon.info/img/';
    let imgsourceurl = commonUrl + props.imgsource;
    return (
      <section id={props.ID} className='row center section-bg-25'>
        <div className='col-xs-12'>
          <div className='section-img'>
            <img src={imgsourceurl} alt={props.heading} />
          </div>
          <div className='section-link'>
            <p className='p'><a href={props.alink} target='_blank' rel='noopener noreferer'>Check out<br/>{props.heading}</a></p>
          </div>
          <div className='section-site-info'>
            <p>{props.websiteInfo}</p>
          </div>
        </div>
      </section>
    );
  }

class App extends React.Component {

  componentDidMount() {
    document.title = "Paul Lyon Portfolio";
  }
  
  render() {
    let goodSkills = ['HTML5','CSS3','Javascript','ReactJS','PHP','Laravel','SQL','LAMP Stack','GIT','Responsive Design']
    let noviceSkills = ['Java','Android','Python']
    let recipes = {
      pageLink: 'recipes-web-app',
      outsideLink: 'https://paullyon.info/recipe-app/',
      imgFileName: 'recipes-thumbnail.png',
      websiteName: 'Recipe Web App',
      websiteInfo: "This is a personal project that I started so my fiancee and I can keep track of various recipes we like to use. We tried several other recipe apps and websites but didn't fully like them and wanted more control on what would be displayed and how it would be displayed. The frontend was created using HTML/CSS, jQuery was used for animation, and the backend is powered by PHP and a MySQL database."
    }
    let rvrpz = {
      pageLink: 'rvrpz-website',
      outsideLink: 'http://rivervalleyrpz.com',
      imgFileName: 'rvrpz-thumbnail.png',
      websiteName: 'River Valley RPZ & Plumbing Website',
      websiteInfo: "A website I created for a plumbing business south of the Twin Cities. The owner gave me a rough mockup of what he wanted the website to look like and we worked together to finalize it and he was very happy with the outcome. HTML/CSS is used for most of the website while Javascript and JQuery is used for some animation. PHP was used to create a Model and allow me to consolidate info relevant to the company."
    }
    let braintree = {
      pageLink: 'braintree-website',
      outsideLink: 'http://braintreechiro.com',
      imgFileName: 'braintreechiro-thumbnail.png',
      websiteName: 'Braintree Chiropractic Website',
      websiteInfo: "I did not originally create this website for this chiropractic business on the east coast but I did update and modify it for the owner. He wanted to change some of the fields on the forms on the Contact page and also how he received the data from forms. I updated the information of the footer per his request and also improved the layout after the update so the footer would display better. There was also text and image changes he wanted to almost all the other pages on his website. Most pages required reconfiguring the layout of each page so all the pages displayed the same."
    }
    let outdoor = {
      pageLink: 'outdoor-web-app',
      outsideLink: 'https://paullyon.info/outdoors/',
      imgFileName: 'outdoor-thumbnail.png',
      websiteName: 'Outdoor Journal Web App',
      websiteInfo: "For a while I had been using a notebook so I could write down and keep track of notes, thoughts, and general observations I had while I was out hiking, camping, hunting, and fishing. Then I had the idea of setting up a web app for my future journal but since I didn't want just anyone looking at my notes I wanted to make sure there was a safe and secure authentication and authorization system to handle the data. PHP was mainly used to create the project and a MySQL database to hold all the data along with Javascript and jQuery for added functionality."
    }

    return (
      <div className='container-fluid'>
        <header className='bg-25'>
          <DisplayTopHeader />
        </header>
        <main>
          <DisplaySkills goodSkills={goodSkills} noviceSkills={noviceSkills} />

          <DisplaySection ID={recipes.pageLink} alink={recipes.outsideLink} heading={recipes.websiteName} imgsource={recipes.imgFileName} websiteInfo={recipes.websiteInfo} />
          <DisplaySection ID={rvrpz.pageLink} alink={rvrpz.outsideLink} heading={rvrpz.websiteName} imgsource={rvrpz.imgFileName} websiteInfo={rvrpz.websiteInfo} />
          <DisplaySection ID={braintree.pageLink} alink={braintree.outsideLink} heading={braintree.websiteName} imgsource={braintree.imgFileName} websiteInfo={braintree.websiteInfo} />
          <DisplaySection ID={outdoor.pageLink} alink={outdoor.outsideLink} heading={outdoor.websiteName} imgsource={outdoor.imgFileName} websiteInfo={outdoor.websiteInfo} />
        </main>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
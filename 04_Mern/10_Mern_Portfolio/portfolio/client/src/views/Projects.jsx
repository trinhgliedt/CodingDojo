import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/ProjectStyles.css";
import ProjectCard from '../components/ProjectCard';
import sunflowersVideo from '../videos/_1_Django_Ecommerce.mp4';
import aqiMapVideo from '../videos/_2_AQIMap.mp4';
import letsMeetVideo from '../videos/_3_Let_Meet.mp4';
import equityXVideo from '../videos/_4_equityX.mp4';

const Projects = (props) => {
    return (
        <> 
        <div className="row justify-content-center">
            {/* EquityX */}
            <div className="col-sm-10 col-md-10 col-lg-6 col-xl-5">
                <ProjectCard expanded={true} id="1" title="EquityX" imageLink={equityXVideo} 
                    description=" Helping companies and investors manage their cap tables, valuation, investments, and equity plans" 
                    technologies="React, Javascript, HTML, CSS" 
                    inspiration="Coming from business and accounting background, I have seen the need of having cap tables and cap valuation done correctly. A service such as EquityX would be of help for companies that want to delegate the work burden or need an expert advise." 
                    challenges="With the page acting like store front for a business, it took a bit of effort to figure out the right presentation of the elements on the page, and also to be sure that all elements fits nicely in different screen sizes." 
                    nextSteps="A lot more content can be added to the sub-pages. And it would be good to build dynamic theme for the user to choose based on their liking." 
                    collaborators={<p>None</p>} 
                    links={<a target="_blank" rel="noreferrer" href="https://github.com/trinhgliedt/equityX">GitHub Repo</a>} />
            </div>
            {/* SunFlowers */}
            <div className="col-sm-10 col-md-10 col-lg-6 col-xl-5">
                <ProjectCard id="2" title={<a href="http://18.191.91.140/" target="_blank" rel="noreferrer">Sunflowers</a>} imageLink={sunflowersVideo} 
                    description="Easy fashion shopping from the comfort of your home - You want it: You've got it!" 
                    technologies="Python, Django MVC, Javascript, HTML, CSS, Bootstrap" 
                    inspiration="I love the convenience of being able to browse and shop for clothes from the comfort of your home, and I also think eCommerce sites are widely needed by many businesses. Both of those reasons had me want to try building this site for our Python stack coding boot camp project.  We used Python, HTML, CSS for front-end and Django framework for back-end. We also utilized Django Admin function to upload product photos and product details." 
                    challenges="One of the biggest challenges was figuring out the best relationship structure between different objects so that information will be reflected properly. We have documented our thought process in the relevant files to make it easy for code viewer to understand." 
                    nextSteps="More functionalities can be added so that owner of the shop can add and update inventory, add cash to the business and view a simple set of the financial operation reports. For sales tax, an API call can be made so that the sales tax rate can be updated automatically based on the customer's address." 
                    collaborators={<p><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/howard-shin/">Howard Shin</a>, <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/madhuri-ravuri/">Madhuri Ravuri</a></p>}
                    links={<a target="_blank" rel="noreferrer" href="https://github.com/trinhgliedt/Ecommerce_Django_Project">GitHub Repo</a>}/>
            </div>
            {/* AQI Maps */}
            <div className="col-sm-10 col-md-10 col-lg-6 col-xl-5">
                <ProjectCard id="3" title="AQI Maps" imageLink={aqiMapVideo} 
                    description="A single page application displaying real time Air Quality Index on Google Maps" 
                    technologies="Javascript, React, Express, API, HTML, CSS" 
                    inspiration="With the recent wildfires in the West Coast, we wanted to build an app so that user can have easy access to real time air quality index (AQI) which can help them arrange their outdoor activity accordingly. This application could detect user's current location and, upon their consent, display the maps for their location. Users could also search to view the AQI for a specific location, or for the whole U.S. and filter to the relevant AQI value that they want to see." 
                    challenges="One of our challenges was to integrate the two layers of API, one from World Air Quality Index API and one from GoogleMaps API, to ensure the information is displayed correctly." 
                    nextSteps="More API calls could be made from World Air Quality Index for the forecast air quality index value."
                    collaborators={<p><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/howard-shin/">Howard Shin</a></p>}
                    links={<a target="_blank" rel="noreferrer" href="https://github.com/SHJoon/AQI-Maps">GitHub Repo</a>}/>
            </div>
            {/* Let's Meet */}
            <div className="col-sm-10 col-md-10 col-lg-6 col-xl-5">
                <ProjectCard id="4" title="Let's Meet" imageLink={letsMeetVideo} 
                    description="A event organization tool that helps connect people with mutual interests" 
                    technologies="Java, SpringBoot, MAMP, MySQL, HTML, CSS" 
                    inspiration="I have enjoyed utilizing event organizer apps such as Meetup.com and Facebook Groups, and wanted to rebuild a similar tool to enable people with multure interests to connect." 
                    challenges="We were lucky to be smooth sailing with the project. Implementing Spring Authorization took a bit to figured out, and we were able to set clear control on which pages a user can access if they didn't log in." 
                    nextSteps="It would be great to have Web Socket implemented on the comment page so that the users do not need to refresh the page to see new comments."
                    collaborators={<p><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/howard-shin/">Howard Shin</a>, <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/madhuri-ravuri/">Madhuri Ravuri</a> </p>}
                    links={<a target="_blank" rel="noreferrer" href="https://github.com/trinhgliedt/Let_s_Meet_Java_Project">GitHub Repo</a>}/>
            </div>
        </div>
        </>
     );
}
 
export default Projects;

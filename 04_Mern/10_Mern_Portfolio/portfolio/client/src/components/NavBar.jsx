import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import '../styles/NavBarStyle.scss';



function NavBar(props) {
  $(function(){
    $(document).ready(function(){
      var i, stop;
      i = 1;
      stop = 4; //num elements
      setInterval(function(){
        if (i > stop){
          return;
        }
        $('#len'+(i++)).toggleClass('bounce');
      }, 500)
    });
  });

  const {selectedTab, setSelectedTab} = props;

    function handleSelection(e){
      setSelectedTab(e.target.id);
    }

  return (
    <>
    <div id="navbarwrap" className="row d-flex justify-content-around" style={{ position: 'relative', zIndex: '2'}}>
      {/* About Me */}
      <div className="hoverable text-center mb-lg-2 mb-md-2 mb-sm-1" >
        <div id="intro"
        className={selectedTab === "intro" ? "px-lg-5 px-md-4 px-sm-2 activeTab btn col text-success" : "px-lg-5 px-md-4 px-sm-2 menuItem hoverable btn col text-white"} 
        onClick={e => handleSelection(e)}
        >About Me</div>
      </div>
      
      {/* Projects */}
      <div  className="hoverable text-center mb-lg-2 mb-md-2 mb-sm-1" >
        <div id="projects" 
        className={selectedTab === "projects" ? "px-lg-5 px-md-4 px-sm-2 activeTab btn col text-success" : "px-lg-5 px-md-4 px-sm-2 menuItem hoverable btn col text-white"} 
        onClick={e => handleSelection(e)}
        >Projects</div>
      </div>

      {/* Resume */}
      <div  className="hoverable text-center mb-lg-2 mb-md-2 mb-sm-1">
        <div id="resume" 
        className={selectedTab === "resume" ? "px-lg-5 px-md-4 px-sm-2 activeTab btn col text-success" : "px-lg-5 px-md-4 px-sm-2 menuItem hoverable btn col text-white"} 
        onClick={e => handleSelection(e)}
        >Resume</div>
      </div>
      
      {/* LinkedIn */}
      <div  className="hoverable text-center mb-lg-2 mb-md-2 mb-sm-1">
        <a href="https://www.linkedin.com/in/trinhgliedt/" target="_blank" rel="noreferrer"
        style={{ position: 'relative', zIndex: '3'}}
        className={selectedTab === "linkedIn" ? "px-lg-5 px-md-4 px-sm-2 activeTab btn col text-success" : "px-lg-5 px-md-4 px-sm-2 menuItem hoverable btn col text-white"} 
        onClick={e => handleSelection(e)}
        >LinkedIn</a>
      </div>
      
      {/* Github */}
      <div id="gitHub" className="hoverable text-center mb-lg-2 mb-md-2 mb-sm-1">
        <a href="https://github.com/trinhgliedt" target="_blank" rel="noreferrer"
        className={selectedTab === "gitHub" ? "px-lg-5 px-md-4 px-sm-2 activeTab btn col text-success" : "px-lg-5 px-md-4 px-sm-2 menuItem hoverable btn col text-white"} 
        onClick={e => handleSelection(e)}
        >GitHub</a>
      </div>

      {/* Certificates */}
      <div id="certificates" className="hoverable text-center mb-lg-2 mb-md-2 mb-sm-1">
      <div id="certificates" 
        className={selectedTab === "certificates" ? "px-lg-5 px-md-4 px-sm-2 activeTab btn col text-success" : "px-lg-5 px-md-4 px-sm-2 menuItem hoverable btn col text-white"} 
        onClick={e => handleSelection(e)}
        >Certificates</div>
      </div>
    </div>


    <div className={selectedTab === "gitHub" ? "linkNote" : "linkNoteHidden"} 
    id="gitHubLinkClicked">..... You were directed to my Github page ..... </div>
    <div  className={selectedTab === "linkedIn" ? "linkNote" : "linkNoteHidden"}  
    id="linkedInLinkClicked">..... You were directed to my LinkedIn page .....</div>
    </>
  );
}

export default NavBar;

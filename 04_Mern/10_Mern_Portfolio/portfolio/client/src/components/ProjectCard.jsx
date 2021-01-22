import React, { useState } from 'react';
import "../styles/ProjectStyles.css"

const ProjectCard = (props) => {
    const {imageLink, title, description, technologies, inspiration, challenges, nextSteps, collaborators, links} = props;

    const [isExpanded, setIsExpanded] = useState(false);

    return ( 
        <div className={isExpanded ? "projectCardMore card card-expanded my-3 text-center" : "projectCardLess card my-3 text-center"}>
            <div className="row justify-content-center">
                <div className="col text-center">
                    <video width="100%"  controls>
                        <source src={imageLink} type="video/mp4"/>
                    </video>
                </div>
            </div>
            
            <div className="card-body pt-1">
                <p className="title mb-1">{title}</p>
                <p className="card-text description mb-2">{description}</p>
                <div className="row my-2">
                    <div className="col d-flex justify-content-center align-items-center">
                        <small className="">{technologies}</small>
                    </div>
                </div>
                <div className="row my-2 align-items-center">
                    <div className="col btn-group">
                        <button type="button" onClick={ e => setIsExpanded(!isExpanded)} className="btn btn-sm btn-outline-secondary bgYellow text-white">{isExpanded ? "Less Info" : "More Info"}</button>
                    </div>
                </div>
                {
                    isExpanded &&
                    <> 
                    <div className="lightGreenFont row my-2 row-title text-left">
                        Inspiration:
                    </div>
                    <div className="row my-2 body-text text-left">
                        {inspiration}
                    </div>
                    <div className="orangeFont row my-2 row-title text-left">
                        Challenges:
                    </div>
                    <div className="row my-2 body-text text-left">
                        {challenges}
                    </div>
                    <div className="purpleFont row my-2 row-title text-left">
                        Next Steps:
                    </div>
                    <div className="row my-2 body-text text-left">
                        {nextSteps}
                    </div>
                    <div className="row my-2 row-title text-left">
                        Collaborators:
                    </div>
                    <div className="row my-2 body-text text-left">
                        {collaborators}
                    </div>
                    <div className="row my-2 row-title text-left">
                        Links:
                    </div>
                    <div className="row my-2 body-text text-left">
                        {links}
                    </div>
                    </>
                }
            </div>
        </div>
     );
};
export default ProjectCard;
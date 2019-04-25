// DEPENDENCIES
import React from 'react'

// COMPONENTS
import './styles/Projects.css'
//- Images - Icon
import GitHub from './images/GitHub.png'
import Surge from './images/Surge.png'
//- Images - Languages, Frameworks, and OSs
import CSSIcon from './images/badges/languages/CSS3.png'
import expressIcon from './images/badges/languages/express.png'
import HTMLIcon from './images/badges/languages/HTML5.png'
import JavaScriptIcon from './images/badges/languages/JavaScript.png'
import LinuxIcon from './images/badges/languages/Linux.png'
import MongoDBIcon from './images/badges/languages/MongoDB.png'
import NodeJSIcon from './images/badges/languages/node.png'
import ReactIcon from './images/badges/languages/React.png'
import UbuntuIcon from './images/badges/languages/ubuntu.png'
import VBAIcon from './images/badges/languages/VBA.png'
//- Images - Screenshots
import AxiosToDos from './images/screenshots/AxiosToDos.png'
import Mario1 from './images/screenshots/Mario1.png'
import Mario2 from './images/screenshots/Mario2.png'
import Mario3 from './images/screenshots/Mario3.png'
import Mario4 from './images/screenshots/Mario4.png'
import Mario5 from './images/screenshots/Mario5.png'
import PickAPupper from './images/screenshots/PickAPupper.png'
import YarnBomb1 from './images/screenshots/YarnBomb1.png'
import YarnBomb2 from './images/screenshots/YarnBomb2.png'
import YarnBomb3 from './images/screenshots/YarnBomb3.png'
import YarnBomb4 from './images/screenshots/YarnBomb4.png'

const Projects = () => {
    const projectsData = [
        {
            name: "Yarn Bomb",
            coverImg: [YarnBomb1],
            class: "yarn-bomb",
            blurb: "Platform to design, write, and publish fiber-art patterns.",
            deploylink: "",
            deployhost: "",
            deployicon: "",
            githublink: "https://github.com/MeghanBomberger/yarn-bomb",
            used: [
                {
                    name: "HTML",
                    icon: HTMLIcon
                },{
                    name: "CSS",
                    icon: CSSIcon
                },{
                    name: "Javascript",
                    icon: JavaScriptIcon
                },{
                    name: "React",
                    icon: ReactIcon
                },{
                    name: "MongoDB",
                    icon: MongoDBIcon
                },{
                    name: "express",
                    icon: expressIcon
                },{
                    name: "Node.js",
                    icon: NodeJSIcon
                }
            ]
        },{
            name: "Pick a Pupper",
            coverImg: [PickAPupper],
            class: "pick-a-pupper",
            blurb: "Inspired by the twitter account WeRateDogs",
            deploylink: "http://pick-a-pupper.surge.sh",
            deployhost: "Surge",
            deployicon: Surge,
            githublink: "https://github.com/MeghanBomberger/pick-a-pupper",
            used: [
                {
                    name: "HTML",
                    icon: HTMLIcon
                },{
                    name: "CSS",
                    icon: CSSIcon
                },{
                    name: "Javascript",
                    icon: JavaScriptIcon
                },{
                    name: "React",
                    icon: ReactIcon
                }
            ]
        },{
            name: "Simple Axios Todo",
            coverImg: [AxiosToDos],
            class: "axios-todos",
            blurb: "Basic to do site.",
            deploylink: "http://axios-simple-todo-exercise.surge.sh/",
            deployhost: "Surge",
            deployicon: Surge,
            githublink: "https://github.com/MeghanBomberger/simple-axios-todo",
            used: [
                {
                    name: "HTML",
                    icon: HTMLIcon
                },{
                    name: "CSS",
                    icon: CSSIcon
                },{
                    name: "Javascript",
                    icon: JavaScriptIcon
                }
            ]
        },{
            name: "Mario Pest Control",
            coverImg: [Mario1],
            class: "mario-pest",
            blurb: "Quick invoice display from Mario to Peach for pest removal services.",
            deploylink: "http://mario-pest-control-exercise.surge.sh/",
            deployhost: "Surge",
            deployicon: Surge,
            githublink: "https://github.com/MeghanBomberger/mario-pest-control",
            used: [
                {
                    name: "HTML",
                    icon: HTMLIcon
                },{
                    name: "CSS",
                    icon: CSSIcon
                },{
                    name: "Javascript",
                    icon: JavaScriptIcon
                }
            ]
        }
    ]

    const mapProjects = projectsData.map((project, i) => {
        const mapIcons = project.used.map((language, j) => {
            return  <div 
                        className="use-icon"
                        key={`project${i}madewith${j}`}
                        style={{
                            backgroundImage: `url(${language.icon})`,
                            backgroundPosition: "center",
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat"
                        }}
                    >
                    </div>
        })
        return  <div 
                    className={`project-card`}
                    key={`projectcard${i}`}
                    alt={project.name}
                >
                    <a href={project.deploylink === "" ? project.githublink : project.deploylink}>
                        <img alt="card-cover" src={project.coverImg} className="cover"/>
                    </a>
                    <h1 className="project-name">{project.name}</h1>
                    <h2 className="project-blurb">{project.blurb}</h2>
                    {
                        project.deploylink === ""
                            ?   <div className="deployment-status">
                                    <p>NOTE: This project is still in progress. Follow along at it's GitHub repo. </p>
                                    <a href={project.githublink}>
                                        <img alt="github" src={GitHub} className="github-icon"/>
                                    </a>
                                </div>
                            :   <div className="deployment-status">
                                    <a href={project.deploylink}>
                                        <p>Deployed on {project.deployhost}</p>
                                        <img
                                            alt={project.deployhost}
                                            src={project.deployicon}
                                            className="deploy-icon"
                                        />
                                    </a>

                                    <a href={project.githublink}>
                                        <p>Check out the repo </p>
                                        <img 
                                            alt="github" 
                                            src={GitHub} 
                                            className="github-icon"
                                        />
                                    </a>
                                </div>
                                
                    }
                    <p>This project was made using:</p>
                    <div className="use-icons-container">
                        {mapIcons}
                    </div>
                </div>
    })

    return (
        <div className="projects-container">
            {mapProjects}
        </div>
    )
}

export default Projects
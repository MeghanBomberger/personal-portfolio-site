// DEPENDENCIES
import React from 'react'

// COMPONENTS
//- Styles
import "./styles/Skills.css"
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
//- Images - Additional Programs
import AdobeIllustratorIcon from './images/badges/programs/AdobeIllustrator.png'
import AdobePhotoshopIcon from './images/badges/programs/AdobePhotoshop.png'
import AirtableIcon from './images/badges/programs/Airtable.png'
import CuraIcon from './images/badges/programs/Cura.png'
import EncompassIcon from './images/badges/programs/Encompass.png'
import ExcelIcon from './images/badges/programs/Excel.png'
import PowerPointIcon from './images/badges/programs/PowerPoint.png'
import QuickBooksIcon from './images/badges/programs/QuickBooks.png'
//- Images - eCommerce Platforms
import ArtFireIcon from './images/badges/platforms/ArtFire.png'
import BigCommerceIcon from './images/badges/platforms/BigCommerce.png'
import EtsyIcon from './images/badges/platforms/Etsy.png'
import RedBubbleIcon from './images/badges/platforms/RedBubble.png'
import ShopifyIcon from './images/badges/platforms/Shopify.png'
import SquareIcon from './images/badges/platforms/Square.png'
import StorenvyIcon from './images/badges/platforms/Storenvy.png'
import VolusionIcon from './images/badges/platforms/Volusion.png'
import ZibbetIcon from './images/badges/platforms/Zibbet.png'

const Skills = () => {
    const languages = [
        {
            icon: ReactIcon,
            name: "React"
        },{
            icon: NodeJSIcon,
            name: "Node.js"
        },{
            icon: MongoDBIcon,
            name: "MongoDB"
        },{
            icon: expressIcon,
            name: "express"
        },{
            icon: JavaScriptIcon,
            name: "Javascript"
        },{
            icon: LinuxIcon,
            name: "Linux"
        },{
            icon: UbuntuIcon,
            name: "Ubuntu"
        },{
            icon: VBAIcon,
            name: "VB"
        }
    ]   

    const programs = [
        {
            icon: AdobeIllustratorIcon,
            name: "Adobe Illustrator"
        },{
            icon: AdobePhotoshopIcon,
            name: "Adobe Photoshop"
        },{
            icon: CuraIcon,
            name: "Cura"
        },{
            icon: EncompassIcon,
            name: "Ellie Mae Encompass"
        },{
            icon: QuickBooksIcon,
            name: "Quick Books"
        },{
            icon: AirtableIcon,
            name: "Airtable"
        },{
            icon: ExcelIcon,
            name: "Excel"
        },{
            icon: PowerPointIcon,
            name: "PowerPoint"
        }
    ]

    const platforms = [
        {
            icon: ShopifyIcon,
            name: "Shopify"
        },{
            icon: VolusionIcon,
            name: "Volusion"
        },{
            icon: EtsyIcon,
            name: "Etsy"
        },{
            icon: BigCommerceIcon,
            name: "Big Commerce"
        },{
            icon: SquareIcon,
            name: "Square"
        },{
            icon: RedBubbleIcon,
            name: "RedBubble"
        },{
            icon: ArtFireIcon,
            name: "ArtFire"
        },{
            icon: ZibbetIcon,
            name: "Zibbet"
        },{
            icon: StorenvyIcon,
            name: "Storenvy"
        }
    ]
    
    const mapLangIcons = languages.map((badge, i) => {
        return  <div
                    key={`langbadge${i}`}
                    alt={badge.name}
                    className="badge-icon" 
                    style={{
                        backgroundImage: `url(${badge.icon})`,
                        backgroundPosition: "center",
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat"
                    }}
                ></div>
    })

    const mapProgIcons = programs.map((badge, i) => {
        return  <div
                    key={`progbadge${i}`}
                    alt={badge.name}
                    className="badge-icon" 
                    style={{
                        backgroundImage: `url(${badge.icon})`,
                        backgroundPosition: "center",
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat"
                    }}
                ></div>
    })

    const mapPlatIcons = platforms.map((badge, i) => {
        return  <div
                    key={`platbadge${i}`}
                    alt={badge.name}
                    className="badge-icon" 
                    style={{
                        backgroundImage: `url(${badge.icon})`,
                        backgroundPosition: "center",
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat"
                    }}
                ></div>
    })

    return (
        <div className="skills-container">
            <h1>my toolbox</h1>
            <h2>Languages, Programs, and OS</h2>
            {mapLangIcons}
            <h2>Additional Programs</h2>
            {mapProgIcons}
            <h2>eCommerce Platforms</h2>
            {mapPlatIcons}

        </div>
    )
}

export default Skills
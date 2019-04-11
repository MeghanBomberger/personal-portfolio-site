// DEPENDENCIES
import React from 'react'

// COMPONENTS
import './styles/WorkHistory.css'

const WorkingHistory = () => {
    const tempData = [
        {
            title: "Office Manager and Executive Assistant",
            company: "Real Caring Integrative Therapy",
            location: "Salt Lake City, UT",
            startMonth: "October",
            startYear: "2014",
            endMonth: "January",
            endYear: "2016",
            bullets: [
                "Created the patient intake, patient follow-up, medical billing, and medical record processes for the company.",
                "Designed, produced, and distributed promotional and educational material."
            ]
        },{
            title: "Project Developer and Social Media Curator",
            company: "Real Caring Integrative Therapy",
            location: "Salt Lake City, UT",
            startMonth: "October",
            startYear: "2014",
            endMonth: "",
            endYear: "",
            bullets: [
                "Social media curation targeting extended patient support, education, and motivation.",
                "Porject development and implemenation on an as needed basis."
            ]
        },{
            title: "Records Manager",
            company: "Therapeutic Lifestyles of Utah",
            location: "Salt Lake City, UT",
            startMonth: "June",
            startYear: "2015",
            endMonth: "",
            endYear: "",
            bullets: [
                "Created digitization of records process and storage, and corresponding documentation for training purposes.",
                "Maintained digital records for the practice."
            ]
        },{    
            title: "ECOA Compliance Specialist",
            company: "Primary Residental Mortgage",
            location: "Salt Lake City, UT",
            startMonth: "August",
            startYear: "2016",
            endMonth: "October",
            endYear: "2016",
            bullets: [
                "Worked with dev team to develop new additions to company software.",
                "Redesigned the internal QA as part of a project that resulted in the company accuracy rate going from 71% to 99.5% in regulatory audits.",
                "Developed and managed a new task assignment procedure designed to draw on team member’s individual strengths.",
                "Researched and implemented procedures for industry regulation changes.",
                "Headed a project to better identify at risk borrowers and implement an improved counteroffer process to provide clients with more opportunities rather than defaulting to denial of their loan.",
                "Wrote the new department training manual and new job-aides for multiple departments.",
                "Resolved a 15,000 file backlog within first two weeks."
            ]
        },{
            title: "Mortgage Auditor and File Intake Specialist",
            company: "Mortgage Compliance Advisors",
            location: "Murray, UT",
            startMonth: "August",
            startYear: "2012",
            endMonth: "November",
            endYear: "2013",
            bullets: [
                "Resolved 65,000 file intake backlog and restructured the duties of the position to prevent future backlogs.",
                "Worked with dev team to create a more user friendly file submission process for the customers."
            ]
        },{
            title: "Co-Owner",
            company: "GeekeryMade",
            location: "Millcreek, UT",
            startMonth: "May",
            startYear: "2008",
            endMonth: "",
            endYear: "",
            bullets: [
                "Designing and producing handmade, geek themed home decor, toys, clothing, and accessories.",
                "Grew the business from a small booth at a local farmer's market to shipping internationally during the early stages of the handmade artisian movement.",
                "Organize and execute both online sales, consignment fullfilment, and vending at large scale events.",
                "Recently launched sister company, GeekeryBathe, an off-shoot that creates geek themed bath products."
            ]
        },{
            title: "Tax Auditor",
            company: "Internal Revenue Service",
            location: "Ogden, UT",
            startMonth: "February",
            startYear: "2008",
            endMonth: "November",
            endYear: "2012",
            bullets: [
                "Audited paper tax files for compliance and fraud detection.",
                "Assisted in changing receipt and control  procedure error that resolved a communication gap between departments and saved  up to $32,000 per week in our unit alone."
            ]
        }
    ]

    const mapData = tempData.map((job, i) => {
        const endDate = () => {
            if(job.endMonth === ""){
                return "Present"
            } else {
                return `${job.endMonth} ${job.endYear}`
            }
        }

        const mapBullets = job.bullets.map((bullet, j) => {
            return <li key={`job{i}bullet{j}`}>{bullet}</li>
        })

        return  <div className="job-card" key={`job${i}`}>
                    <h1 className="job-title">{job.title}</h1>
                    <h2>{job.company}</h2>
                    <h2>{job.location}</h2>
                    <h3>{job.startMonth} {job.startYear} to {endDate()}</h3>
                    <ul>
                        {mapBullets}
                    </ul>
                </div>
    })

    return (
        <div className="work-history-container">
            <h1>My Work History</h1>
            {mapData}
        </div>
    )
}

export default WorkingHistory
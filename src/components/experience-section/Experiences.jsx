import Experience from "./experience/Experience";
import "./Experiences.css";
import ArchLogo from "/logos/companies/company-arch.png";
import GlobeLogo from "/logos/companies/company-globe.png";
import CHCLogo from "/logos/companies/company-chg.png";
import { useEffect, useRef, useState } from "react";


// to add: switch to tabbed content
function Experiences() {
    const [activeTab, setActiveTab] = useState("Arch")
    // console.log(order)
    const [btnDetails, setBtnOrder] = useState([
        {
            companyState: "Globe",
            companyName: "Globe Group",
            companyLogo: GlobeLogo

        },
        {
            companyState: "Arch",
            companyName: "Arch Global Services",
            companyLogo: ArchLogo

        },
        {
            companyState: "CHG",
            companyName: "Change Healthcare",
            companyLogo: CHCLogo

        }
    ])

    const [yTranslations, setYTranslations] = useState([0, 363, 1057])
    const archRef = useRef(null);
    const globeRef = useRef(null);
    const chgRef = useRef(null);
    
    useEffect(() => {
        console.log(archRef.current)
        archRef.current.style.transform = `translateY(${yTranslations[0]}px)`;
        globeRef.current.style.transform = `translateY(${yTranslations[1]}px)`;
        chgRef.current.style.transform = `translateY(${yTranslations[2]}px)`;
    },[yTranslations])




    const handleTabClick = (e, tabName, newMididx) => {
        e.preventDefault()

        setBtnOrder(prevOrder=>{
            const newBtnOrder = [...prevOrder]
            const currMidValue =  prevOrder[1]

            newBtnOrder[1] = prevOrder[newMididx]
            newBtnOrder[newMididx] = currMidValue
            return newBtnOrder
        });

        setActiveTab(tabName)
        switch(tabName){
            case "Arch":
                setYTranslations([0, 363, 1057])
                break;
            case "Globe":
                setYTranslations([694, 0, 1057])
                break;
            case "CHG":
                setYTranslations([168, 531, 0])
                break;
        }
    }
    return (
        <section className="experiences-section">
            <div className="tab-selector">
                {
                    btnDetails.map((buttonDetail, idx) => {
                        const {companyState, companyName, companyLogo} = buttonDetail
                        return <button
                            className={`
                                ${activeTab === companyState ? "active" : ""}
                                ${companyState}-btn
                            `}
                            disabled={activeTab === companyState}
                            onClick={e=>handleTabClick(e, companyState, idx)}
                            key={`${companyState}-btn`}
                        >
                            <img src={companyLogo} alt="company-logo" />
                            <p>{companyName}</p>
                        </button>
                    })
                }
            </div>

            <div className="tab-container">
                <Experience 
                    ref={archRef}
                    company="Arch Global Services"
                    jobDescriptions={[
                        {
                            jobTitle: "Software Engineer",
                            startDate: "April 2025",
                            endDate: "Present",
                            description: "As a software engineer in Arch, I mainly tasked with supporting, maintaining, and enhancing the technical implementation of our proprietary predictive models, scoring engines, and analytical tools. Tasks/Features/Projects  I've worked on are:",
                            tasks: [
                                "Logging system modernization - From sending log data to databases, we opted to use an Azure-managed service called Application Insights for our APIs. This change resulted in simplified code - reduced database calls, and log data configuration, reduced overhead - eliminated the need for database management and configuration, data dashboards - application insights allowed us to create custom data boards based on the logs recorded",
                                "Streamlined Data Flow - Automated data processing, and transformation from a single table to several downstream tables using event-triggered snowflake tasks and streams for different projects. This centralized the data entry point of the projects, offloading data transformation, and processing logic from the application."
                            ]
                        }
                    ]}
                />
                <Experience 
                    ref={globeRef}
                    company="Globe Group"
                    jobDescriptions={[
                        {
                            jobTitle: "Software Developer",
                            startDate: "February 2023",
                            endDate: "April 2025",
                            description: "Being a Software Developer for Globe Group required adaptability, and agility to work with several technology stacks, and customer-obsession to deliver high-quality applications tailored to diverse business needs.",
                            tasks: [
                                "Workforce Management Application - Developed REST APIs for a workforce management application tha will be responsible for assigning, managing, and tracking installation, and repair requests from requests, and human resources.",
                                "Gitops-hosted RPA - Continuously developed a Robotics Process Automation (RPA) that emulated human interactions with an internal website, saving 91% FTE or approximately 15 hours a month. The application was ultimately containerized and deployed using GitLab CI for continuous integration and delivery.",
                                "AzureOpenAI Chatbot Development - Spearheaded the development of large language model (LLM) chatbots using AzureOpenAI. The chatbot was able to answer common customer queries through ingestion of internal documents.",
                                "Automated Data Processing - Developed a time-triggered serverless function to automate data processing by scanning DynamoDB tables, performing validation checks, and executing actions based on validation outcomes."
                            ]
                        },
                        {
                            jobTitle: "Technical Cadet",
                            startDate: "June 2022",
                            endDate: "February 2023",
                            description: "The Globe Group Technical Cadetship Program was an intensive 8-month training designed to develop cloud-native technical professionals. As a cadet, I completed comprehensive training in cloud engineering (AWS), DevOps, software engineering, and machine learning engineering, gaining hands-on experience across multiple domains of modern software development.",
                            tasks: [
                                "Automated Data Validation Pipeline - Designed and implemented an automated, multi-stage validation pipeline for a predictive machine learning workflow. The system fetched data from external sources, performed cleaning and processing, stored validated datasets, and compared final outputs against the model's predictions. This automation saved up to 2 hours per day, and reduced the overall time taken to under a minute per run."
                            ]
                        }
                    ]}
                />
                <Experience 
                    ref={chgRef}
                    company="Change Healthcare"
                    jobDescriptions={[
                        {
                            jobTitle: "Coputer Operator",
                            startDate: "October 2021",
                            endDate: "June 2022",
                            description: "As a computer operator for Change Healthcare (formerly PDX Inc.), I was responsible for maintaining operational standards, executing and documenting daily system procedures, and ensuring timely resolution of customer concerns.",
                            tasks: []
                        }
                    ]}
                />
            </div>

        </section>
    )
}

export default Experiences;
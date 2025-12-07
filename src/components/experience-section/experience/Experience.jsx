import { forwardRef } from "react"
import "./Experience.css"


function Experience({className = "", company, jobDescriptions}, ref) { 
  /*
    company: string - The name of the company
    jobTitle: string - The title of the job position
    startDate: string - The start date of the job
    endDate: string - The end date of the job (or "Present" if currently employed)
    description: string - A brief description of the job responsibilities and achievements
    logo: string - URL or path to the company's logo image
  */
  // const style = {
    // --url: url('https://download.unsplash.com/photo-1420708392410-3c593b80d416');
    // '--company-logo': logo
  // };

  return (
    <section className={`job-experience ${company} ${className}`} ref={ref}>
      <h3 className="job-experience header">{company}</h3>
      {jobDescriptions.map((jobDescription) => {
        const {jobTitle, startDate, endDate, description, tasks} = jobDescription
        return <div className="job-experience body" key={company+jobTitle}>
          <div className="job-experience subheading">
              <h4 className="job-experience title">{jobTitle}</h4>
              <h4 className="job-experience duration">{startDate}-{endDate}</h4>
          </div>
          <p className="job-experience description">{description}</p>
          <ul className="job-experience tasks">
            {tasks.map((task, idx) => {
              return <li className="job-experience task-item" key={`${company}-task${idx}`}>{task}</li>
            })}
          </ul>
        </div>
      })}
    </section>
    )
}

export default forwardRef(Experience);

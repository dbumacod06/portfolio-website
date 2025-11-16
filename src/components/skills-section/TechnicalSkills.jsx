// Software Development skills
import HTMLLogo from "/logos/skills/software-development/skill-html.png";
import CSSLogo from "/logos/skills/software-development/skill-css.png";
import JSLogo from "/logos/skills/software-development/skill-javascript.png";
import TSLogo from "/logos/skills/software-development/skill-typescript.png";
import NJSLogo from "/logos/skills/software-development/skill-nodejs.png";
import SQLLogo from "/logos/skills/software-development/skill-sql.png";
import RDSLogo from "/logos/skills/software-development/skill-mssql.png";
import DynamoLogo from "/logos/skills/software-development/skill-dynamodb.png";
import MongoLogo from "/logos/skills/software-development/skill-mongodb.png";
import SnowflakeLogo from "/logos/skills/software-development/skill-snowflake.png";
import PythonLogo from "/logos/skills/software-development/skill-python.png";
import ReactLogo from "/logos/skills/software-development/skill-react.png";
import SubSectionHeading from "../section-heading/sub-heading/SectionHeading";

// DevOps Skills
import AWSLogo from "/logos/skills/devops/skills-aws.png"
import AzureLogo from "/logos/skills/devops/skills-azure.png"
import GCPLogo from "/logos/skills/devops/skills-gcp.svg"
import TerraformLogo from "/logos/skills/devops/skills-terraform.png"
import GitlabLogo from "/logos/skills/devops/skills-gitlabci.svg"
import GHALogo from "/logos/skills/devops/skills-gha.png"
import DockerLogo from "/logos/skills/devops/skills-docker.png";
import K8sLogo from "/logos/skills/devops/skills-kubernetes.png"

import SkillList from "./skills/SkillList";
import "./TechnicalSkills.css";


function TechnicalSkills()   {
    return (
        <section className="skills-section">
            <SubSectionHeading subHeadingText="Software Development"/>
            <section className="technical-skills SoftwareDevelopment">
                <SkillList
                    skillgroup="SoftwareDevelopment"
                    skilllist={[
                        {"skilllogo": HTMLLogo, "skillname": "HTML"},
                        {"skilllogo": CSSLogo, "skillname": "CSS"},
                        {"skilllogo": ReactLogo, "skillname": "React"},
                        {"skilllogo": JSLogo, "skillname": "Javascript"},
                        {"skilllogo": TSLogo, "skillname": "Typescript"},
                        {"skilllogo": NJSLogo, "skillname": "Nodejs"},
                        {"skilllogo": PythonLogo, "skillname": "Python"},
                        {"skilllogo": SQLLogo, "skillname": "SQL"},
                        {"skilllogo": RDSLogo, "skillname": "MSSQL"},
                        {"skilllogo": DynamoLogo, "skillname": "DynamoDB"},
                        {"skilllogo": MongoLogo, "skillname": "MongoDB"},
                        {"skilllogo": SnowflakeLogo, "skillname": "Snowflake"}
                    ]}
                />
            </section>
            <SubSectionHeading subHeadingText="Cloud and DevOps"/>
            <section className="technical-skills CloudAndDevOps">
                <SkillList
                    skillgroup="CloudAndDevOps"
                    skilllist={[
                        {"skilllogo": AWSLogo, "skillname": "AWS"},
                        {"skilllogo": AzureLogo, "skillname": "Azure"},
                        {"skilllogo": GCPLogo, "skillname": "GCP"},
                        {"skilllogo": GitlabLogo, "skillname": "Gitlab CI"},
                        {"skilllogo": GHALogo, "skillname": "Github Actions"},
                        {"skilllogo": TerraformLogo, "skillname": "Terraform"},
                        {"skilllogo": DockerLogo, "skillname": "Docker"},
                        // {"skilllogo": HTMLLogo, "skillname": "Helm"},
                        {"skilllogo": K8sLogo, "skillname": "Kubernetes"},
                    ]}
                />
            </section>
        </section>
    )
}

export default TechnicalSkills;
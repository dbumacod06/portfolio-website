import "./Skill.css";

function Skill ({skilllogo, skillname}) {
    return (
        <li className="skill-item">
            <img src={skilllogo} alt={skillname} title={skillname}/>
            <span className="skill-name">{skillname}</span>
        </li>
    )
}

export default Skill;
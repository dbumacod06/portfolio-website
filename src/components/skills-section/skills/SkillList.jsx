import "./SkillList.css"
import Skill from "./skill/Skill.jsx"



function SkillList({skillgroup, skilllist})   {
    return (
        <section className={`skills-list ${skillgroup}`}>
            <ul className="skill-list">
                {skilllist.map(({id, skilllogo, skillname}) => (
                    <Skill
                        key={`${skillname}-${id}`}
                        skilllogo={skilllogo}
                        skillname={skillname}
                    />
                ))}
            </ul>
        </section>
    
    )
}

export default SkillList;
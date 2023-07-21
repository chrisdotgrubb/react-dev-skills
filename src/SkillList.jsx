import SkillListItem from "./SkillListItem";
import './SkillList.css'

export default function SkillList() {
    const skills = [
        {name: "HTML", level: 5},
        {name: "CSS", level: 3},
        {name: "JavaScript", level: 4},
        {name: "Python", level: 2},
    ];
    const items = skills.map((skill, idx) => {
        return (
            <SkillListItem
                skill={skill}
                idx={idx}
                key={`li-${idx}`}
            />
        )
    })
    return (
        <ul className={'SkillList'}>
            {items}
        </ul>
    )
}
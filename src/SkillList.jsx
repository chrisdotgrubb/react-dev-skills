import SkillListItem from "./SkillListItem";
import './SkillList.css'

export default function SkillList({skills}) {

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
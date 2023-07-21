import './SkillListItem.css'
import SkillListItemLevel from "./SkillListItemLevel";

export default function SkillListItem({skill, idx}) {
    return (
        <li className={'SkillListItem'}>
            {skill.name} <SkillListItemLevel level={skill.level}/>
        </li>
    )
}
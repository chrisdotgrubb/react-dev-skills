import './NewSkillForm.css'
import {useState} from "react";

export default function NewSkillForm({addSkill}) {
    const defaultData = {name: '', level: 3}
    const [formData, setFormData] = useState(defaultData)
    function handleSelection(e) {
        const newFormData = {...formData, [e.target.name]: e.target.value}
        setFormData(newFormData)
    }
    function handleAddSkill(e) {
        e.preventDefault()
        addSkill(formData)
        setFormData(defaultData)

    }
    return (
        <form className={'NewSkillForm'} onSubmit={e => handleAddSkill(e)}>
            <label>
                Skill:
                <input
                    type="text"
                    name={'name'}
                    value={formData.name}
                    onChange={handleSelection}
                />
            </label>
            <label>
                Level:
                <select
                    name={'level'}
                    value={formData.level}
                    onChange={handleSelection}
                >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
            </label>
            <button>ADD SKILL</button>
        </form>
    )
}
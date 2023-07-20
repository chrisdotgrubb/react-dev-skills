import logo from './logo.svg';
import './App.css';
import SkillList from "./SkillList";
import NewSkillForm from "./NewSkillForm";

function App() {
  return (
      <>
        <h1>React Dev Skills</h1>
        <SkillList />
        <hr/>
        <NewSkillForm />
      </>
  );
}

export default App;

import Wrapper from './components/Wrapper';
import Sidebar from './components/Sidebar';
import AboutMe from './components/AboutMe';
import contacts from './data/contacts.json';
import techSkills from './data/techSkills.json';
import softSkills from './data/softSkills.json';
import projects from './data/projects.json';
import experience from './data/experience.json';

function App() {
  return (
    <Wrapper>
      <Sidebar
        contacts={contacts}
        techSkills={techSkills}
        softSkills={softSkills}
      />
      <AboutMe projects={projects} experience={experience} />
    </Wrapper>
  );
}

export default App;

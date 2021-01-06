import Wrapper from './components/Wrapper';
import Sidebar from './components/Sidebar';
import contacts from './data/contacts.json';
import techSkills from './data/techSkills.json';
import softSkills from './data/softSkills.json';

function App() {
  return (
    <Wrapper>
      <Sidebar
        contacts={contacts}
        techSkills={techSkills}
        softSkills={softSkills}
      />
    </Wrapper>
  );
}

export default App;

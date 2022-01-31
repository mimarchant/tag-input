import './App.css';
import TagInput from './components/tag-input';

function App() {
  
  const selectedTags = tags => {
    console.log(tags)
  }
  return (
    <div className='container'>
      <h1>Tags Input</h1>
      <TagInput selectedTags={selectedTags}/>
    </div>
  );
}

export default App;

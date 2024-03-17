import './App.css'
import {TagList} from "./components/TagList.tsx";

function App() {

  return (
    <>
        <div className={'w-screen h-screen bg-primary'}>
        <TagList
            tagList={['All', 'React', 'Typescript']}
            onTagClick={console.log}
        />
        </div>
    </>
  )
}

export default App

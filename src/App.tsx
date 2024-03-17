import './App.css'
import {Label} from "./components/Label.tsx";
import {DefaultTextField} from "./components/DefaultTextField.tsx";
import {useState} from "react";

function App() {
  const [isError, setIsError] = useState(false)

  return (
    <>
      <Label htmlFor={'email'}>Email</Label>
      <DefaultTextField
          id={'email'}
          placeholder={'Write email'}
          value={''}
          errorMessage={'Check email'}
          isError={isError}
          iconPath={'/vite.svg'}
          iconAlt={'delete'}
          onIconClick={() => {}}
          onChange={() => {}}
      />
      <div className={'my-20'}></div>
      <Label htmlFor={'address'}>Address</Label>
      <DefaultTextField
          id={'address'}
          placeholder={'Write address'}
          value={''}
          errorMessage={'Check address'}
          isError={isError}
          iconPath={'/vite.svg'}
          iconAlt={'delete'}
          onIconClick={() => {}}
          onChange={() => {}}
      />
      <button
          onClick={() => setIsError(!isError)}>
          Error Toggle
      </button>
    </>
  )
}

export default App

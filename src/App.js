import React, {useEffect, useState,useCallback,useContext} from 'react'
import {AllTasks} from './components/AllTasks'
import FormList from './components/FormList'
import {useTaskList} from './hooks/useUpdateList'
import {Language} from './context'
import {SelectedLanguage} from './components/SelectedLanguage'
import {ChangeLanguage} from './components/ChangeLanguage'
import './App.css';
const initialTask=[{
  text: "tarea 1"
},{
  text: "tarea 2"
},{
  text: "tarea 3"
}]


function App() {
  const {lang,setlangAndSave}=useContext(Language)
  const {tasks,addTasks}=useTaskList(initialTask)
  const submitFromApp = useCallback(
    (inputValue) => {
        
        addTasks(inputValue);
    },
    [],
  );
  
  return (
    <div>
      <SelectedLanguage lang={lang}/>
      <ChangeLanguage change={setlangAndSave}/>
     <FormList onSubmit={submitFromApp} />
    <AllTasks  tasks={tasks}/>
    </div>
  );
}

export default App;



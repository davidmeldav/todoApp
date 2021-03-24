import React, {useEffect, useState,useCallback,useContext} from 'react'
import {AllTasks} from './components/AllTasks'
import FormList from './components/FormList'
import {useTaskList} from './hooks/useUpdateList'
import {useLanguage} from './hooks/useLanguage'
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

  const {tasks,addTasks}=useTaskList(initialTask)
  const submitFromApp = useCallback(
    (inputValue) => {
        
        addTasks(inputValue);
    },
    [],
  );
 //así sería sin desestructurar
  //  const data=useLanguage();
  //  const update=data.setLangAndSave;
  const {setLangAndSave:update}=useLanguage();
  console.log("update",update)
  return (
    <div>
      <SelectedLanguage />
      <ChangeLanguage change={update}/> 
      <FormList onSubmit={submitFromApp} />
      <AllTasks  tasks={tasks}/>
    </div>
  );
}

export default App;



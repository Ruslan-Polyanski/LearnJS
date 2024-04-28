import React from "react";
import { useEffect, useState } from "react";
import { fetchTask } from './task-api';


const ToDoList = ({items}) => {

  return (
    <>
      <ul>
        {items.length && items.map((item, index) => {
          return <li key={index}>{item.text}</li>
        })}
      </ul>
    </>
  )

};


const App = () => {

  const [tasks, setTasks] = useState(null);

  const handleRefreshTasks = (e) => {
    if(e.key = 'r') {
      const tasks = fetchTask();
      setTasks(tasks)
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleRefreshTasks)
  })

  return (
    <div>

      <h2>Пример задач: </h2>
      <ToDoList items={[
        {id: 1, text: 'Полить цветы'}
        {id: 2, text: 'Помыть машину'}
        {id: 3, text: 'Выкинуть мусор'}
      ]} />

      <h2>Сегодня: </h2>
      <ToDoList items={tasks} />

      <h2>Завтра</h2>
      <ToDoList items={[]} />

    </div>
  )

};


export default App;

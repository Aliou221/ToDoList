import { useEffect, useState } from "react";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import TaskInput from "./taskInput/TaskInput";
import TaskList from "./taskList/TaskList";

export default function TaskContainer(){

   const [taskList , setTaskList] = useState([])
   const [nextId , setNextId] = useState(1)

   useEffect(() => {
      const tabTasks = localStorage.getItem('taskList')
      const tabId = localStorage.getItem('nextId')

      if(tabTasks && tabId){
         setTaskList(JSON.parse(tabTasks))
         setNextId(tabId)
      }
   },[])

   const saveTaskStorage = (task) => {
      localStorage.setItem('taskList', JSON.stringify(task))
   }

   const saveIdTaskStorage = (id) => {
      localStorage.setItem('nextId', id)
   }

   const addTask = (title) => {
      const tasks = {
         id: nextId,
         title: title,
         success: false
      }
      const myTask = [...taskList , tasks]
      setTaskList(myTask)
      setNextId(nextId + 1)
      saveTaskStorage(myTask)
      saveIdTaskStorage(nextId)
   }

   const editeTask = (id , success) => {
      const newTask = taskList.map((task) => task.id == id ?  {...task, success: !success } : task)
      setTaskList(newTask)
      saveTaskStorage(newTask)
   }

   const deleteTask = (id) => {
      const newTask = taskList.filter((task) => task.id != id)
      setTaskList(newTask)
      saveTaskStorage(newTask)
   }

   const getTacheAccomplir = () => {
      const taskSuccess = taskList.filter(task => task.success === true).length
      const taskNotSuccess = taskList.length - taskSuccess

      return {
         taskSuccess, taskNotSuccess
      }
   }

   const { taskSuccess , taskNotSuccess } = getTacheAccomplir()

   
   return (
      <main>
         <Header/>
         <TaskInput addTasks={addTask} />
         <TaskList taskLists={taskList} taskNotSuccess={taskNotSuccess} deleteTask={deleteTask} editeTask={editeTask}/>
         <Footer taskSuccess={taskSuccess}/>
      </main>
   )
}
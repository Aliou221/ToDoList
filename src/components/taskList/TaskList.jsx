import TaskItem from "../taskItem/TaskItem";

export default function TaskList({ deleteTask, taskNotSuccess, taskLists, editeTask }) {

   if (taskLists.length > 0) {
      return (
         <ul className="mt-5 bg-gray-900 shadow-xl rounded-md px-4 py-3">
            <div className="flex items-center flex-wrap justify-between">
               {
                  taskNotSuccess > 0 ?
                     <h2 className="pb-2 font-semibold">
                        Il vous reste <span className="p-1 bg-gray-700 rounded text-sm">{taskNotSuccess}</span> tâche{taskNotSuccess > 1 ? 's' : ''} à accomplir !
                     </h2>
                     :
                     <h2 className="pb-2 font-semibold">
                        Bravo, vous avez accompli toutes les tâches !
                     </h2>
               }
               <button 
                  onClick={() => { localStorage.clear(); location.reload(); }}
                  className="border cursor-pointer hover:bg-red-800 border-red-600 font-medium text-sm px-4 py-2 mb-2 rounded bg-red-700">
                  Supprimer toutes les tâches
               </button>
            </div>
            {taskLists.map((task) => (
               <TaskItem
                  key={task.id}
                  id={task.id}
                  taskTitle={task.title}
                  deleteTask={deleteTask}
                  editeTask={editeTask}
                  success={task.success}
               />
            ))}
         </ul>
      );
   } else {
      return (
         <p className="mt-5 font-semibold text-center text-white bg-gray-900 shadow-xl rounded-md px-4 py-3">
            Bienvenue ! <br />Ajoutez votre première tâche pour commencer.
         </p>
      );
   }
}
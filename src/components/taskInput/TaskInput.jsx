import { useState } from "react";

export default function TaskInput({ addTasks }) {

   const [taskTitle, setTaskTitle] = useState('');
   const [isEmpty, setIsEmpty] = useState(true);

   const handleValue = (e) => {
      setTaskTitle(e.target.value);
      setIsEmpty(true); // On suppose que l'utilisateur saisit quelque chose
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      if (taskTitle.trim().length > 0) {
         addTasks(taskTitle.trim());
         setTaskTitle('');
         setIsEmpty(true);
      } else {
         setIsEmpty(false);
      }
   };

   return (
      <div className="mt-4 bg-gray-900 shadow-2xl p-3 shadow-gray-900 rounded-md">
         <form onSubmit={handleSubmit} className="flex flex-col gap-3 p-2">
            <label htmlFor="tache" className="text-base font-semibold">
               Ajouter ta prochaine tâche
            </label>
            <div className="flex items-center gap-4">
               <input
                  id="tache"
                  type="text"
                  className={`${isEmpty ? 'border-blue-500 focus:outline-blue-500' : 'border-red-500 focus:outline-red-500'
                     } focus:outline rounded-md border px-4 py-2 flex-1 w-full`}
                  autoComplete="off"
                  placeholder="Écrivez votre tâche ici..."
                  onChange={handleValue}
                  value={taskTitle}
               />
               <button
                  type="submit"
                  className="px-4 py-2 border border-transparent text-blue-400 font-medium hover:bg-gray-800 bg-gray-700 hover:transition-all hover:duration-300 ease cursor-pointer rounded-md hover:border-blue-500"
               >
                  Ajouter
               </button>
            </div>
            {!isEmpty && (
               <p className="text-red-500 font-medium text-sm">
                  Le champ est obligatoire !
               </p>
            )}
         </form>
      </div>
   );
}

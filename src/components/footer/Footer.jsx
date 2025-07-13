export default function Footer({ taskSuccess }) {
   if (!taskSuccess) return null;

   return (
      <footer className="mt-4 text-center text-sm text-gray-400">
         <p>
            Tu as accompli{" "}
            <span className="p-1 bg-gray-700 rounded text-sm">
               {taskSuccess}
            </span>{" "}
            tâche{taskSuccess > 1 ? "s" : ""} !
         </p>
      </footer>
   );
}

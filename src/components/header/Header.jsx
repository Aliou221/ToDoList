import reactLogo from '../../assets/react.svg';
import styles from './header.module.css';

export default function Header() {
   return (
      <header className="flex items-center gap-3 mb-4">
         <img 
            src={reactLogo} 
            alt="Logo React" 
            className={styles.img} 
         />

         <div className="flex flex-col">
            <h1 className="text-2xl font-bold text-white">Tâches</h1>
            <p className="text-sm font-light text-gray-400">
               Bienvenue ! Ajoutez vos tâches à faire
            </p>
         </div>
      </header>
   );
}

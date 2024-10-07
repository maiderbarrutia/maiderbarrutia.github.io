// src/components/sections/Main/Main.tsx
import React from 'react';
import Intro from '@/components/sections/Intro/Intro';
import About from '@components/sections/About/About';
import Projects from '@components/sections/Projects/Projects';
import Experience from '@components/sections/Experience/Experience';
import Contact from '@components/sections/Contact/Contact';

const Home: React.FC = () => {
  return (
    <div>
      <Intro />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
};

export default Home;



// src/components/sections/Main/Main.tsx
// import React, { useState } from 'react';
// import Intro from '@/components/sections/Intro/Intro';
// import About from '@components/sections/About/About';
// import Projects from '@components/sections/Projects/Projects';
// import Experience from '@components/sections/Experience/Experience';
// import Contact from '@components/sections/Contact/Contact';

// const Home: React.FC = () => {

//   const [isPopupOpen, setIsPopupOpen] = useState(false); // Estado para controlar la visibilidad del popup

//   const togglePopup = () => {
//     setIsPopupOpen(!isPopupOpen); // Alterna la visibilidad del popup
//   };

//   return (
//     <div>
//       <Intro />
//       <About />
//       <Projects />
//       <Experience />
//       <Contact />

//       {/* Botón para abrir el popup */}
//       <button onClick={togglePopup} style={{ marginTop: '20px' }}>
//         {isPopupOpen ? 'Cerrar Home' : 'Abrir Home'}
//       </button>

//       {/* Popup que contiene el contenido de Home */}
//       {isPopupOpen && (
//         <div className="popup">
//           <div className="popup-content">
//             <span className="close" onClick={togglePopup}>&times;</span>
//             <h2>Contenido de Home</h2>
//             <Home /> {/* Aquí se renderiza el contenido de Home */}
//           </div>
//         </div>
//       )}

//       {/* Estilos para el popup */}
//       <style>{`
//         .popup {
//           position: fixed;
//           left: 0;
//           top: 0;
//           width: 100%;
//           height: 100%;
//           background-color: rgba(0, 0, 0, 0.5); /* Fondo semi-transparente */
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           z-index: 999; /* Asegura que el popup esté por encima del contenido */
//         }
//         .popup-content {
//           background-color: white;
//           padding: 20px;
//           border-radius: 8px;
//           width: 80%;
//           max-width: 600px;
//           position: relative;
//         }
//         .close {
//           position: absolute;
//           top: 10px;
//           right: 10px;
//           cursor: pointer;
//           font-size: 24px;
//         }
//       `}</style>

//     </div>
//   );
// };

// export default Home;

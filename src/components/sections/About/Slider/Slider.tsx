import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { getAssetSrc } from '@/utils/srcUtils'; 
import { Navigation } from 'swiper/modules'; 
import styles from './Slider.module.scss'; 

// Importar los estilos de Swiper
import 'swiper/css';
import 'swiper/css/navigation';

// Lista de herramientas (simuladas)
// const tools = [
//   'Angular', 'Asana', 'Bootstrap', 'CSS3', 'Figma', 'Git', 
//   'Gulp', 'HTML5', 'Illustrator', 'Indesign', 'Javascript ES6', 
//   'Photoshop', 'React', 'SASS', 'SEO', 'Trello', 'Typescript', 
//   'Wordpress', 'XD', 'jest'
// ];
const tools = [
  'Angular', 'Asana', 'Bootstrap', 'CSS3', 'Figma', 'Git', 'HTML5', 'Javascript ES6', 
  'Photoshop', 'React', 'SASS', 'SEO', 'Trello', 'Typescript', 
  'Wordpress', 'jest'
];

const ToolsCarousel = () => {
  const [hoveredTool, setHoveredTool] = useState<string | null>(null);

  return (
    <div className={styles['swiper-container']} style={{ width: '100%', margin: '0 auto' }}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={8}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        breakpoints={{
            1200: { slidesPerView: 8 },
            992: { slidesPerView: 6 },
            768: { slidesPerView: 4 },
            576: { slidesPerView: 3 },
            0: { slidesPerView: 1 }
        }}
      >
        {Array.isArray(tools) && tools.length > 0 && tools.map((tool) => {
          const isHovered = hoveredTool === tool;
          const backgroundImage = getAssetSrc(`icons/tools/${tool.toLowerCase().replace(/\s/g, '-')}-icon${isHovered ? '' : '-black'}.png`);

          return (
            <SwiperSlide key={tool} style={{ display: 'flex', justifyContent: 'center' }}>
              <li className={styles['tool']} style={{ listStyle: 'none' }}>
                <div
                  title={tool}
                  className={styles['tool-icon']}
                  onMouseEnter={() => setHoveredTool(tool)}
                  onMouseLeave={() => setHoveredTool(null)}
                  style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    width: '80px',
                    height: '80px',
                    transition: 'background-image 0.3s ease'
                  }}
                />
                {/* Descomentar si necesitas mostrar el nombre de la herramienta */ }
                {/* <div className="tool-name">{tool}</div> */ }
              </li>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <style>
        {`
        .swiper-wrapper{
            width: 80%;
        }
        .swiper-button-next, .swiper-button-prev {
            color: #333;
            width: 30px;
            height: 30px;
        }
        .swiper-button-prev {
            height: 100%;
            top: 0;
            margin: 0;
            padding: 0 20px 0 0;
            left: 0;
            background: #5DAC6D;
        }
        .swiper-button-next {
            height: 100%;
            top: 0;
            margin: 0;
            padding: 0 0 0 20px;
            right: 0;
            background: #5DAC6D;
        }
        `}
      </style>
    </div>
  );
};

export default ToolsCarousel;


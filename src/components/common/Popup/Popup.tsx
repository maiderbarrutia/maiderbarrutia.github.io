import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css'; // Importa los estilos principales de Swiper
import 'swiper/css/navigation'; // Importa los estilos para la navegación
import 'swiper/css/pagination'; // Importa los estilos para la paginación
import styles from './Popup.module.scss';

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[]; // Recibe un array de imágenes
  initialImageIndex: number; // Índice inicial de la imagen seleccionada
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose, images, initialImageIndex }) => {
  const [zoom, setZoom] = useState(false);

  if (!isOpen) return null;

  const toggleZoom = () => {
    setZoom(!zoom);
  };

  return (
    <div className={styles.popupOverlay} onClick={onClose}>
      <div className={`${styles.popupContent} ${zoom ? styles.zoomed : ''}`} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>✖</button>

        <Swiper
          initialSlide={initialImageIndex}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          modules={[Navigation]}
          className={styles.swiper} // Añadir una clase para personalizar estilos
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className={styles.imageContainer} onClick={toggleZoom}>
                <img src={image} alt={`Imagen ${index + 1}`} className={`${styles.popupImage} ${zoom ? styles.zoomed : ''}`} />
              </div>
            </SwiperSlide>
          ))}
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
            background: white;
        }
        .swiper-button-next {
            height: 100%;
            top: 0;
            margin: 0;
            padding: 0 0 0 20px;
            right: 0;
            background: white;
        }
        `}
      </style>
      </div>
    </div>
  );
};

export default Popup;


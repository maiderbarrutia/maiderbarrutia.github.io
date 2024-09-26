import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Zoom } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/zoom';
import styles from './Popup.module.scss';

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  initialImageIndex: number;
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose, images, initialImageIndex }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.popupOverlay} onClick={onClose}>
      <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>✖</button>

        <Swiper
          initialSlide={initialImageIndex}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          zoom
          modules={[Navigation, Zoom]}
          className={styles.swiper}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="swiper-zoom-container">
                <img src={image} alt={`Imagen ${index + 1}`} className={styles.popupImage} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <style>
          {`
            .swiper-button-next,
            .swiper-button-prev {
              color: #333;
              width: 30px;
              height: 30px;
            }
            .swiper-button-prev {
              margin-left: 10px;
            }
            .swiper-button-next {
              margin-right: 10px;
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default Popup;

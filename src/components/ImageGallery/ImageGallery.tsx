import ImageCard from '../ImageCard/ImageCard';
import style from './ImageGallery.module.css';
import { Image } from '../../types';

interface ImageGalleryProps {
  images: Image[];
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  setSelectedImage: (image: Image) => void;
}

export default function ImageGallery({
  images,
  isOpen,
  openModal,
  closeModal,
  setSelectedImage,
}: ImageGalleryProps): JSX.Element {
  return (
    <ul className={style.imageList}>
      {images.map(image => (
        <li className={style.imgListItem} key={image.id}>
          <ImageCard
            image={image}
            openModal={openModal}
            setSelectedImage={setSelectedImage}
          />
        </li>
      ))}
    </ul>
  );
}

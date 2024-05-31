import style from './ImageCard.module.css';
import { Image } from '../../types';

interface ImageCardProps {
  setSelectedImage: (image: Image) => void;
  image: Image;
  openModal: () => void;
}

export default function ImageCard({
  setSelectedImage,
  image: {
    alt_description,
    likes,
    user: { name, portfolio_url, instagram_username },
    urls: { small, regular },
  },
  openModal,
}: ImageCardProps): JSX.Element {
  return (
    <div className={style.imageContainer}>
      <img
        src={small}
        alt={alt_description}
        onClick={() => {
          setSelectedImage({
            id: '',
            urls: { small, regular },
            alt_description,
            likes,
            user: { name, portfolio_url, instagram_username },
            url: regular,
            alt: alt_description,
            author: name,
            portfolio: portfolio_url,
            instagram: instagram_username,
          });
          openModal();
        }}
      />
    </div>
  );
}

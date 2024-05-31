import style from "./ImageCard.module.css"

export default function ImageCard({ setSelectedImage, image: {
    alt_description,
    likes,
    user:{name, portfolio_url, instagram_username},
     urls: {small, regular},
    }, openModal,
}) {
    return (
        <div className={style.imageContainer}>
            <img  src={small} alt={alt_description}
                onClick={() => {
                   setSelectedImage({
                       url: regular,
                       alt: alt_description,
                        likes: likes,
                       author: name,
                       portfolio: portfolio_url,
                       instagram: instagram_username,
                   });
                   
                    openModal();
            }}/>
            </div>
    )
}

















// import React from 'react';
// import style from './ImageCard.module.css';
// import { Image } from '../types';

// interface ImageCardProps {
//   image: Image;
//   setSelectedImage: (image: Image) => void;
//   openModal: () => void;
// }

// const ImageCard: React.FC<ImageCardProps> = ({ image, setSelectedImage, openModal }) => {
//   return (
//     <div className={style.imageContainer}>
//       <img
//         src={image.urls.small}
//         alt={image.alt_description}
//         onClick={() => {
//           setSelectedImage(image);
//           openModal();
//         }}
//       />
//     </div>
//   );
// };

// export default ImageCard;




import ImageCard from "../ImageCard/ImageCard";

import style from "./ImageGallery.module.css"

export default function ImageGallery({ images, isOpen, openModal, closeModal, setSelectedImage  }) {
    return (
        <ul className={style.imageList}>
            {images.map((image) => (
            <li className={style.imgListItem} key={image.id}>
                    <ImageCard image={image}
                        
          openModal={openModal}

          setSelectedImage={setSelectedImage} /></li>))}

        </ul>
    )
}
























// import React from 'react';
// import ImageCard from '../ImageCard/ImageCard';
// import style from './ImageGallery.module.css';
// import { Image } from '../types';

// interface ImageGalleryProps {
//   images: Image[];
//   openModal: () => void;
//   setSelectedImage: (image: Image) => void;
// }

// const ImageGallery: React.FC<ImageGalleryProps> = ({ images, openModal, setSelectedImage }) => {
//   return (
//     <ul className={style.imageList}>
//       {images.map((image) => (
//         <li className={style.imgListItem} key={image.id}>
//           <ImageCard
//             image={image}
//             openModal={openModal}
//             setSelectedImage={setSelectedImage}
//           />
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default ImageGallery;
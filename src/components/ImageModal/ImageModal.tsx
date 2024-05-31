import Modal from "react-modal";
import css from './ImageModal.module.css'

export default function ImageModal({ isOpen, onClose, selectedImage }) {
    if (!isOpen) return null;
  
  
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName={css.overlay}
      className={css.content }
    >
          <div>
              <img className={css.image } src={selectedImage.url} alt={selectedImage.alt} />
            <ul className={css.cardList}>
                  <li className={css.cardListItem}>
      <h3 className={css.cardListTitle}>Likes:</h3>
     <p className={css.cardText}> {selectedImage.likes}</p>
     </li>
     <li className={css.cardListItem}>
     <h3 className={css.cardListTitle}>Author:</h3>
     <p className={css.cardText}>{selectedImage.author}</p>
     </li>
     {selectedImage.portfolio && ( 
                       <li className={css.cardListItem}>
              <a className={css.cardListLink}
                href={selectedImage.portfolio}>Author's <br />portfolio</a>
                        </li>
                    )}
      {selectedImage.instagram && ( 
                        <li className={css.cardListItem}>
              <a className={css.cardListLink}
                href={selectedImage.instagram}>Author's <br /> instagram</a>
                        </li>
                    )}
     </ul></div>
          
    </Modal>
  );
}
























// import React from 'react';
// import Modal from 'react-modal';
// import css from './ImageModal.module.css';
// import { Image } from '../types';

// interface ImageModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   selectedImage: Image;
// }

// const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, selectedImage }) => {
//   if (!isOpen) return null;

//   return (
//     <Modal
//       isOpen={isOpen}
//       onRequestClose={onClose}
//       overlayClassName={css.overlay}
//       className={css.content}
//     >
//       <div>
//         <img className={css.image} src={selectedImage.urls.regular} alt={selectedImage.alt_description} />
//         <ul className={css.cardList}>
//           <li className={css.cardListItem}>
//             <h3 className={css.cardListTitle}>Likes:</h3>
//             <p className={css.cardText}>{selectedImage.likes}</p>
//           </li>
//           <li className={css.cardListItem}>
//             <h3 className={css.cardListTitle}>Author:</h3>
//             <p className={css.cardText}>{selectedImage.user.name}</p>
//           </li>
//           {selectedImage.user.portfolio_url && (
//             <li className={css.cardListItem}>
//               <a className={css.cardListLink} href={selectedImage.user.portfolio_url}>Author's portfolio</a>
//             </li>
//           )}
//           {selectedImage.user.instagram_username && (
//             <li className={css.cardListItem}>
//               <a className={css.cardListLink} href={`https://instagram.com/${selectedImage.user.instagram_username}`}>Author's Instagram</a>
//             </li>
//           )}
//         </ul>
//       </div>
//     </Modal>
//   );
// };

// export default ImageModal;
import style from "./LoadMoreBtn.module.css"

export default function LoadMoreBtn({ onLoadMore }) {
    return (
        
        <button className={style.loadMoreBtn} onClick={onLoadMore} type="button">Load more</button>
    )
}
















// import React from 'react';
// import style from './LoadMoreBtn.module.css';

// interface LoadMoreBtnProps {
//   onLoadMore: () => void;
// }

// const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onLoadMore }) => {
//   return (
//     <button className={style.loadMoreBtn} onClick={onLoadMore} type="button">
//       Load more
//     </button>
//   );
// };

// export default LoadMoreBtn;
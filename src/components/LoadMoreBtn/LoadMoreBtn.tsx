import style from './LoadMoreBtn.module.css';

interface LoadMoreBtnProps {
  onLoadMore: () => void;
}

export default function LoadMoreBtn({ onLoadMore }: LoadMoreBtnProps) {
  return (
    <button className={style.loadMoreBtn} onClick={onLoadMore} type="button">
      Load more
    </button>
  );
}

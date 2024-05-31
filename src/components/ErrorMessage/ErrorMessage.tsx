import style from './ErrorMessage.module.css';

export default function ErrorMessage(): JSX.Element {
  return (
    <div className={style.errorWrapper}>
      <p className={style.errorText}>
        Oops! Something went wrong... Please refresh the page
      </p>
    </div>
  );
}

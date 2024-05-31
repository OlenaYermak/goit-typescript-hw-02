import style from "./ErrorMessage.module.css"


export default function ErrorMessage() {
    return (
        <div className={style.errorWrapper}>
            <p className={style.errorText}>Oops! Something went wrong... Please refresh the page</p>
        </div>
        
    )
}
















// import React from 'react';
// import style from './ErrorMessage.module.css';

// const ErrorMessage: React.FC = () => {
//   return (
//     <div className={style.errorWrapper}>
//       <p className={style.errorText}>Oops! Something went wrong... Please refresh the page</p>
//     </div>
//   );
// };

// export default ErrorMessage;
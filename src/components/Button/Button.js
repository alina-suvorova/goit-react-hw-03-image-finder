import style from './Button.module.css'

const Button = ({loadMore}) => {
    return (
        <button id="scrollHeight" className={style.Button} onClick={loadMore} >
            Load More
        </button>
    );
};

export default Button;

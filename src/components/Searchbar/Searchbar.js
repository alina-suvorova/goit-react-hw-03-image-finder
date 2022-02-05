import style from './Searchbar.module.css'

const Searchbar = ({ onHandleSubmit}) => {
    return (
        <header className={style.Searchbar}>
            <form className={style.SearchForm} onSubmit={onHandleSubmit}>
                <button type="submit" className={style.SearchFormButton} onSubmit={onHandleSubmit}>
                    <span className={style.SearchFormButtonLabel}>Search</span>
                </button>
                <label >
                    <input
                        className={style.SearchFormInput}
                        type="text"
                        name="search"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </label>
            </form>
        </header>
        
    );
}

export default Searchbar;
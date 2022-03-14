import React from "react";
import style from "./Searchbar.module.css";

class Searchbar extends React.Component {
    state = {
        searchQuery: "",
    };

    inputValue = (el) => {
        let textValue = el.target.value;
        this.setState({ searchQuery: textValue });
    };

    addRequest = (el) => {
        el.preventDefault();
        this.props.searchText(this.state.searchQuery);
        this.setState({ searchQuery: "" });
    };

    render() {
        return (
            <header className={style.Searchbar}>
                <form className={style.SearchForm} onSubmit={this.addRequest}>
                    <button type="submit" className={style.SearchFormButton}>
                        <span className={style.SearchFormButtonLabel}>Search</span>
                    </button>

                    <input
                        className={style.SearchFormInput}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={this.state.searchQuery}
                        onChange={this.inputValue}
                    />
                </form>
            </header>
        );
    }
}

export default Searchbar;

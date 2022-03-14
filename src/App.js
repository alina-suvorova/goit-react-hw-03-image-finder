import React, {Component} from "react";
import Api from "./components/Api";
import Searchbar from "./components/Searchbar/Searchbar";
import LoaderAnimation from "./components/Loader/Loader";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Modal from "./components/Modal/Modal";
import Button from "./components/Button/Button";
import style from "./App.module.css";



class App extends Component {
    state = {
        searchQuery: "",
        imageData: [],
        isLoading: false,
        showModalStatus: false,
        largeImage: "",
        currentPage: 1,
        loadMoreStatus: false,
    };

    componentDidMount() {
        document.addEventListener("keydown", this.closeModalWindow, false);
    }

    componentDidUpdate(prevProps, prevState) {
        const { searchQuery, currentPage } = this.state;
        if (
            prevState.searchQuery !== this.state.searchQuery ||
            prevState.currentPage !== this.state.currentPage
        ) {
            this.addData(searchQuery, currentPage);
        }
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.closeModalWindow, false);
    }

    addData = (searchQuery, currentPage) => {
        this.setState({ isLoading: true });
        Api.getImage(searchQuery, currentPage)
            .then((imageData) =>
                this.setState((prevState) => {
                    if (imageData.length !== 0) {
                        return {
                            imageData: prevState.imageData.concat(imageData),
                            loadMoreStatus: true,
                        };
                    } else {
                        return { loadMoreStatus: false };
                    }
                })
            )
            .then(() =>
                window.scrollTo({
                    top: document.documentElement.scrollHeight,
                    behavior: "smooth",
                })
            )
            .catch((error) => console.log(error))
            .finally(() => this.setState({ isLoading: false }));
    };

    searchText = (inputText) => {
        this.setState({
            searchQuery: inputText,
            currentPage: 1,
            imageData: [],
            loadMore: true,
        });
    };

    showModalWindow = (urlLarge) => {
        this.setState({ showModalStatus: true, largeImage: urlLarge });
    };

    closeModalWindow = (e) => {
        if (e.keyCode === 27 || e.target.tagName === "DIV") {
            this.setState({ showModalStatus: false, largeImage: "" });
        }
    };

    loadMore = () => {
        this.setState((prevState) => {
            if (this.state.imageData.length % 12 !== 0) {
                return { loadMoreStatus: false };
            } else return { currentPage: prevState.currentPage + 1 };
        });
    };

    render() {
        const {
            isLoading,
            imageData,
            largeImage,
            showModalStatus,
            loadMoreStatus,
        } = this.state;
        return (
            <div className={style.App}>
                <Searchbar searchText={this.searchText} />
                {isLoading ? <LoaderAnimation /> : null}
                <ImageGallery imageData={imageData} showModalWindow={this.showModalWindow} />
                {showModalStatus && (
                    <Modal urlLarge={largeImage} closeModalWindow={this.closeModalWindow} />
                )}
                {loadMoreStatus && <Button loadMore={this.loadMore} />}
            </div>
        );
    }
}

export default App;



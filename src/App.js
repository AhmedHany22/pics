import React, { Component } from "react";
import ImagesList from "./comps/imagesList";
import SearchBar from "./comps/searchBar";
import Pagination from "./comps/pagination";
import unsplash from "./Api/unsplash";

class App extends Component {
  state = { images: [], cPage: 1, term: "", pagesCount: 1 };

  onSubmitSerach = async (term, p = 1) => {
    const { data } = await unsplash.get("/search/photos", {
      params: { query: term, page: p, per_page: 30 },
    });
    this.setState({ images: data.results, term, pagesCount: 2, cPage: p });
  };
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    const { cPage, pagesCount } = this.state;
    return (
      <div className="ui mansory-container">
        <SearchBar onSubmit={this.onSubmitSerach} />
        <ImagesList images={this.state.images} />
        <Pagination
          cPage={cPage}
          pagesCount={pagesCount}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
  handlePageChange = async (p) => {
    this.setState({ cPage: p });
    this.onSubmitSerach(this.state.term, p);
  };
}

export default App;

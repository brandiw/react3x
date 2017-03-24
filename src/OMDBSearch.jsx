import React, {Component} from 'react';
import MovieResult from './MovieResult';

class OMDBSearch extends Component{
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      results: []
    };
  }
  search(e){
    e.preventDefault();
    const url = 'http://omdbapi.com/?s=' + this.state.searchTerm;
    fetch(url).then(response => {
        response.json().then(data => {
          this.setState({ results: data.Search });
        });
      });
  }
  searchChange(e){
    e.preventDefault();
    this.setState({ searchTerm: e.target.value });
  }
  render(){
    return (
      <div className="container">
        <h2 className="text-center">Search for movies</h2>
        <form onSubmit={(e) => this.search(e)}>
          <input type="text"
            className='form-control'
            value={this.state.searchTerm}
            onChange={(e) => this.searchChange(e)} />
          <input type='submit' className='btn btn-success' />
        </form>
        {this.results()}
      </div>
      );
  }
  results(){
    return this.state.results.map(movie => {
      return <MovieResult key={movie.imbdID} imdbID={movie.imdbID} poster={movie.Poster} title={movie.Title} year={movie.Year} />
    });
  }
}

module.exports = OMDBSearch;

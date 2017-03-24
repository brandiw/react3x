import React, {Component} from 'react';
const Link = require('react-router').Link;

class MovieResult extends Component {
  constructor(props){
    super(props);
    console.log(this.props);
  }
  render(){
    return (
    <div>
      <h2>Results</h2>
      <h3>
        <Link to={'/search/' + this.props.imdbID}>
          {this.props.title}
        </Link>
        <a href='/search'>
          Search page
        </a>
      </h3>
      <p>Released in {this.props.year}</p>
      <img src={this.props.poster} width="150" height="250" alt="poster" />
    </div>
    );
  }
}

module.exports = MovieResult;

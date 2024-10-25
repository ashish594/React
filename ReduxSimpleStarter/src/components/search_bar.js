import React, { Component } from "react";

// const SearchBar = () => {
//     return <input />
// }
// to add additional functionality like maintaining state we class component
// class SearchBar extends React.Component{
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
  }

  render() {
    return (
      <div className="search-bar" placeholder="search">
        <input
          value={this.state.term}
          onChange={(event) => this.onInputChange(event.target.value)}
        />
        <br />
      </div>
    );
  }
  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }

  // onChange(event){
  //     console.log(event.target.value);
  // }
}

export default SearchBar;
// to add additional functionality like maintaining state we class component
// class SearchBar extends React.Component{

// to add additional functionality like maintaining state we class component
// class SearchBar extends React.Component{

//akshaya reddy is clever

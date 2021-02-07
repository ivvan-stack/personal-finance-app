import React, {Component} from 'react';
import Home from './components/home';
import unirest from 'unirest';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      items: [],
    }
  }
  getData() {
    unirest
    .get('https://google-search3.p.rapidapi.com/api/v1/search/q=elon+musk&num=100')
    .headers({
      "x-rapidapi-key": "703cf35a7dmshc982c4c821e6777p1ff3b0jsn1ee918a350d4",
      "x-rapidapi-host": "google-search3.p.rapidapi.com",
      "useQueryString": true
    })
    .then((response)=>{
      console.log(response.body.answers);
    })
  }

  componentDidMount() {
    this.getData();
  }

  render(){
    return (
      <div className="App">
        <Home></Home>
      </div>
    );
  }

}

export default App;

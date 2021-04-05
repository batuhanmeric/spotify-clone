import React, { Component } from "react";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import Sidebar from "./Components/Sidebar";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
    };
  }
  componentDidMount() {
    axios
      .get("http://zmdp.cloud/iseAlim/spotify.json")
      .then(res => this.setState({ cards: res.data.allPLaylists }));
  }

  render() {
    return (
      <div className="spotify">
        <Sidebar className="sidebar" />
        <Main className="main" cards={this.state.cards} />
        <Footer className="footer" />
      </div>
    );
  }
}
export default App;

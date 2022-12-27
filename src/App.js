import "./App.css";
import React, { Component, Fragment } from "react";
import Navbar from "./component/Navbar";
import News from "./component/News";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize=5;

  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }

  render() {
    return (
      <div>
        <Router>
          <Fragment>
            <Navbar />
            <LoadingBar
            height={3}
        color='#f11946'
        progress={this.state.progress}
    
      />
            <Routes>
              <Route
                exact
                path="/home"
                element={<News setProgress={this.setProgress}  key="general" country="in" category="general" pageSize={this.pageSize}/>}
              />
              <Route
                exact
                path="/entertaniment"
                element={
                  <News setProgress={this.setProgress} 
                    key="entertainment"
                    country="in"
                    category="entertainment" pageSize={this.pageSize}
                  />
                }
              />
              <Route
                exact
                path="/business"
                element={
                  <News setProgress={this.setProgress}  key="business" country="in" category="business" pageSize={this.pageSize}/>
                }
              />
              <Route
                exact
                path="/general"
                element={<News setProgress={this.setProgress}  key="general" country="in" category="general" pageSize={this.pageSize} />}
              />
              <Route
                exact
                path="/health"
                element={<News setProgress={this.setProgress}  key="health" country="in" category="health" pageSize={this.pageSize} />}
              />
              <Route
                exact
                path="/science"
                element={<News setProgress={this.setProgress}  key="science" country="in" category="science" pageSize={this.pageSize} />}
              />
              <Route
                exact
                path="/sports"
                element={<News setProgress={this.setProgress}  key="sports" country="in" category="sports" pageSize={this.pageSize}/>}
              />
              <Route
                exact
                path="/technology"
                element={
                  <News setProgress={this.setProgress}  key="technology" country="in" category="technology" pageSize={this.pageSize} />
                }
              />
            </Routes>
          </Fragment>
        </Router>
      </div>
    );
  }
}

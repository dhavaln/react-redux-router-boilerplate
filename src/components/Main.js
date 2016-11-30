import React from 'react';
import {Link} from 'react-router';

const Main = React.createClass({
    render(){
      return (
        <div className="App">
          <h1 className="">React App</h1>
          <hr/>
          {React.cloneElement(this.props.children, this.props)}
          <hr/>
          <Link to="/page1">Page1</Link> | <Link to="/page2">Page2</Link> | <Link to="/">Home</Link>
        </div>
      )
    }
});

export default Main;

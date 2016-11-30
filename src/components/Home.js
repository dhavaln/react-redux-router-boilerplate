import React from 'react';

const Home = React.createClass({
  render(){
    return (
      <div>
        <h1>Home Page</h1>
        <div>
          Page 1 Clicks: {this.props.page1.click}
        </div>
        <div>
          Page 2 Clicks: {this.props.page2.click}
        </div>
      </div>
    )
  }
});

export default Home;

import React from 'react';

import {Link} from 'react-router';

const Page1 = React.createClass({
  render(){
    return (
      <div>
        <h1>You are on Page1</h1>
        <div>
          Total Click: {this.props.page1.click}
        </div>
        <button onClick={this.props.page1Click}>Page1 Click</button>        
      </div>
    )
  }
});

export default Page1;

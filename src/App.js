import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Main from './components/Main';
import * as actionCreators from './actions/index';

import './App.css';

const mapStateToProps = function(state){
  return {
    page1: state.page1,
    page2: state.page2
  }
}

const mapDispatchToProps = function(dispatch){
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;

import React, { Component } from 'react';
import Layout from './component/Layout/Layout';
import PropTypes from 'prop-types';
import Profile from './component/Profile/Profile';
import { getProfiledata } from './helper/profileHelper';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: 'androidajeet',
      userData: [],
      userRepos: [],
      perPage: 5
    };
  }


  componentDidMount() {
    getProfiledata('https://api.github.com/users/' + this.state.username + '?client_id=' + this.props.clientId + '&client_secret=' + this.props.clientSecret).then(response => {
      console.log("from outside", response.data);
      this.setState({ userData: response.data });
    }).catch(response => {
      console.log(response);
    });


  }


  render() {
    return (
      <div >
        <Layout>
          <Profile userData={this.state.userData}></Profile>
        </Layout>
      </div>
    );
  }
}

App.propTypes = {
  clientId: PropTypes.string,
  clientSecret: PropTypes.string
};
App.defaultProps = {
  clientId: 'Iv1.bebca7b8c9836838',
  clientSecret: '033eb6cad534a1c333e69441b68dc6c28dcd01ab'
}

export default App;

//brije111
//amdroidajeet
//deeksha080502


  // getApiData('https://api.github.com/users/' + this.state.username + '?client_id=' + this.props.clientId + '&client_secret=' + this.props.clientSecret).then(res => {
    //   console.log("from normal", res);
    //   this.setState({ userData: res.data });
    // }).catch(error => {
    //   console.log(error)
    // });

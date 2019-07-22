import React, { Component } from 'react';
import Layout from './component/Layout/Layout';
import PropTypes from 'prop-types';
import Profile from './component/Profile/Profile';
import { getProfiledata } from './helper/profileHelper';
import { getReposatoriesData } from './helper/repoHelper';
import Spinner from './component/Spinner/Spinner';

let status = "";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'androidajeet',
      userData: [],
      userRepos: [],
      perPage: 5,
      loading: false
    };
  }


  componentDidMount() {
    this.fetchProfileDataFromApi();
    this.fetchRepoFromApi()
  }

  render() {
    if (this.state.loading) {
      return <Spinner />;
    } else {
      return (
        <div >
          <Layout onFormSubmit={this.handleFormSubmit.bind(this)}>
            {(status === "")
              ? <Profile {...this.state} />
              : <p className="container" style={{ textAlign: "center", marginTop: "15%", fontSize: "26px" }}> {status}</p>
            }
          </Layout>
        </div>
      );
    }
  }


  fetchProfileDataFromApi = () => {
    this.setState({ loading: true });
    getProfiledata('https://api.github.com/users/' + this.state.username + '?client_id=' + this.props.clientId + '&client_secret=' + this.props.clientSecret).then(response => {
      console.log(" fetchProfileDataFromApi()", response.data);
      status = ""
      this.setState({ userData: response.data, loading: false });
    }).catch(response => {
      status = response.message;
      console.log(response.message);
      this.setState({
        loading: false
      });
    });
  }

  fetchRepoFromApi = () => {
    this.setState({ loading: true });
    getReposatoriesData(
      'https://api.github.com/users/' + this.state.username + '/repos?per_page=' + this.state.perPage + '&client_id=' + this.props.clientId + '&client_secret=' + this.props.clientSecret
      + '&sort=created').then(response => {
        console.log("fetchRepoFromApi()", response.data);
        status = ""
        this.setState({ userRepos: response.data, loading: false });
      }).catch(response => {
        status = response.message;
        console.log(response.message);
        this.setState({
          loading: false
        });
      });
  }

  handleFormSubmit(username) {
    console.log(username);
    if (username !== this.state.username) {
      this.setState({
        username: username,
        userData: [],
        userRepos: []
      }, function () {
        this.fetchProfileDataFromApi();
        this.fetchRepoFromApi();
      });
    }
  }

}

App.propTypes = {
  clientId: PropTypes.string,
  clientSecret: PropTypes.string
};
App.defaultProps = {
  clientId: 'Iv1.bebca7b8c9836838',
  clientSecret: '033eb6cad534a1c333e69441b68dc6c28dcd01ab'
};


export default App;

//brije111
//androidajeet
//deeksha080502
///ayush099




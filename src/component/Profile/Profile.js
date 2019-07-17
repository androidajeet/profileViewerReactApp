import React, { Component } from 'react';


class Profile extends Component {


    render() {
        return (
            <div className="card mb-12" >
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={this.props.userData.avatar_url} className="card-img" alt="avtar" />
                    </div>

                    <div className="col-md-8">
                        <div className="card-body">
                            <h4 className="card-title"><b>{this.props.userData.name}</b></h4>
                            <h6 className="card-title">@{this.props.userData.login}</h6>
                            <div className="row">
                                <div className="col-md-12">
                                    <span className="label label-primary"><b>Repos </b>{this.props.userData.public_repos}</span>
                                    <span className="label label-success"><b>  Public Gists </b>{this.props.userData.public_gists}</span>
                                    <span className="label label-info"><b>  Followers </b>{this.props.userData.followers}</span>
                                    <span className="label label-danger"><b>  Following </b>{this.props.userData.following}</span>
                                </div>
                            </div>
                            <p className="card-text"><q>{this.props.userData.bio}</q></p>
                            <div className="row">
                                <div className="col-md-12">
                                    <ul className="list-group">
                                        <li className="list-group-item"><strong>Username: </strong> {this.props.userData.login}</li>
                                        <li className="list-group-item"><strong>Location: </strong> {this.props.userData.location}</li>
                                        <li className="list-group-item"><strong>Company: </strong> {this.props.userData.company}</li>
                                    </ul>
                                </div>
                            </div>
                            <p className="card-text"><small className="text-muted">Last updated {this.props.userData.updated_at}</small></p>
                            <a className="btn btn-primary" target="_blank" href={this.props.userData.html_url}>Visit Profile</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Profile
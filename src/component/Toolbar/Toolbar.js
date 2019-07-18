import React, { Component } from 'react';

class Toolbar extends Component {

    onSubmit(e) {
        e.preventDefault();
        let username = this.refs.username.value.trim();
        if (!username) {
            alert('Please enter a username');
            return;
        }
        this.props.onFormSubmit(username);
        this.refs.username.value = '';
    }


    render() {
        // console.log("in Toolbar", this.props.username);
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">GitHub Profile Viewer </a>
                    <div className="container">
                        <div className="col-md-8">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Features</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">About</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <form onSubmit={this.onSubmit.bind(this)} >
                                <input type="text" ref="username" className="form-control mr-md-4" placeholder="Search Github username" aria-label="Search" />
                            </form>

                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Toolbar;
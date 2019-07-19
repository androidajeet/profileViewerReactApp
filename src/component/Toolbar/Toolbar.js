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
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div className="col-xs-4">
                        <a className="navbar-brand" href="#">GitHub Profile Viewer </a>
                    </div>
                    <div className="col-xs-8">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="col-xs-8 navbar-toggler-icon"></span>
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
                                <li className="nav-item">
                                    <form onSubmit={this.onSubmit.bind(this)} >
                                        <input type="text" ref="username" className="form-control mr-md-4" placeholder="Search Github username" aria-label="Search" />
                                    </form>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Toolbar;
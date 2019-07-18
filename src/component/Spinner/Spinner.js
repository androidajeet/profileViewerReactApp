import React, { Component } from 'react';

class Spinner extends Component {

    render() {
        return (

            <div style={{ width: "100%", height: "100%", marginTop: "250px", opacity: 0.5 }} className="d-flex justify-content-center">
                <div className="spinner-grow text-dark" role="status" />
                <span className="sr-only">Loading...</span>
                <div className="spinner-grow text-dark" role="status" />
                <span className="sr-only">Loading...</span>
                <div className="spinner-grow text-dark" role="status" />
                <span className="sr-only">Loading...</span>
            </div>
        );
    }
}

export default Spinner;
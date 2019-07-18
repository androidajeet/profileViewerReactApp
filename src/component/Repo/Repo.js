import React, { Component } from 'react';

class Repo extends Component {

    render() {
        const { repo } = this.props;
        return (
            <div >
                <a rel="noopener noreferrer" href={repo.html_url} className="list-group-item list-group-item-action">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-5">{repo.name}</h5>
                        <small className="text-muted">Created at {repo.created_at}</small>
                    </div>
                    <p className="mb-1">Description : {repo.description}</p>
                    <p className="mb-1">Default Branch : {repo.default_branch}</p>
                    <p className="mb-1">Url : {repo.html_url}</p>
                    <p className="mb-1">Open issues : {repo.open_issues}</p>
                    <small className="text-muted">node_id : {repo.node_id}</small>



                </a>

            </div>
        )
    }
}

export default Repo;
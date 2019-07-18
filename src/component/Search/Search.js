import React, { Component } from 'react'

class Search extends Component {
    state = {}
    render() {
        return (<div className="card mb-12">
            <form >
                <input class="form-control mr-sm-2" type="search" placeholder="Search Github username" aria-label="Search" />
            </form>

        </div>);
    }
}

export default Search;
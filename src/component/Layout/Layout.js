import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import './Layout.css';
import '../Toolbar/Toolbar';
import Toolbar from '../Toolbar/Toolbar';




class Layout extends Component {


    render() {
        //  console.log("in Layout", this.props.onFormSubmit);
        return (
            <Aux>
                <Toolbar {...this.props} />
                <main>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}



export default Layout;
import React, { Component } from 'react';
import { Route } from 'react-router';
import TableComponent from './components/TableComponent';

import './custom.css'

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Route path='/' component={TableComponent} />
        );
    }
}

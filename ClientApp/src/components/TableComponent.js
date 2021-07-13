import React from 'react';
import Person from './Person';
import { Container } from 'reactstrap';

const headers = ['First Name', 'Last Name', 'Age'];

class TableComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            rows: []
        };
    }
    renderTable = (newRow) => {
        let { rows } = this.state;
        rows.push(newRow);
        this.setState({ rows: rows });
    }
    render() {
        return (
            <Container>
                <Person renderRow={this.renderTable} />
                <br />
                <br />

                <table>
                    <tr>
                        {headers.map(h => <th style={{ border: '1px solid black' }}>{h}</th>)}
                    </tr>
                    {this.state.rows.map((r) => (
                        <tr>
                            {r.map(c => <td style={{ border: '1px solid black' }}>{c}</td>)}
                        </tr>
                    ))}
                </table>
            </Container>
        );
    }

}

export default TableComponent;

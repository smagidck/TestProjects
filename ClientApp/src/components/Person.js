import React from 'react';
import ReactDom from 'react-dom';
import PeopleComponent from "./PeopleComponent";
import TableComponent from "./TableComponent";

class Person extends React.Component {
    constructor() {
        super()
        this.state = {
            person: {
                firstName: '',
                lastName: '',
                age: 0
            }
        };
    }


    OnFirstNameChange = (value) => {
        let { person } = this.state;
        this.setState({  person: {...person, firstName: value } });
    }
    OnLastNameChange = (value) => {
        let { person } = this.state;
        this.setState({ person: { ...person, lastName: value } });
    }
    OnAgeChange = (value) => {
        let { person } = this.state;
        this.setState({  person: {...person, age: value } });
    }

    OnSubmitClick = () => {
        this.props.renderRow(Object.values(this.state.person));
        this.setState({ person: { firstName: '', lastName: '', age: 0 } })
    }


    render() {
        return (
            <div>
                <PeopleComponent
                    OnFirstNameChange={this.OnFirstNameChange}
                    OnLastNameChange={this.OnLastNameChange}
                    OnAgeChange={this.OnAgeChange}
                    OnSubmitClick={this.OnSubmitClick}
                    State={this.state} />
            </div>
        );
    }

}
export default Person;

import React from 'react';
import Person from './Person';

class PeopleComponent extends React.Component {


    OnFirstNameChange = (e) => {
        this.props.OnFirstNameChange(e.target.value);
    }
    OnLastNameChange = (e) => {
        this.props.OnLastNameChange(e.target.value);
    }
    OnAgeChange = (e) => {
        this.props.OnAgeChange(e.target.value);
    }

    OnSubmitClick = () => {
        this.props.OnSubmitClick()
    }

    render() {
        return (
            <div>
                <p>
                    First Name
                <input
                        type="text"
                        className="form-control col-md-3"
                        onChange={this.OnFirstNameChange}
                        value={this.props.State.person.firstName} />
                </p>
                <p>
                    Last Name
                <input
                        type="text"
                        className="form-control col-md-3"
                        onChange={this.OnLastNameChange}
                        value={this.props.State.person.lastName} />
                </p>
                <p>
                    Age
                <input
                        type="text"
                        className="form-control col-md-3"
                        onChange={this.OnAgeChange}
                        value={this.props.State.person.age} />
                </p>
                <br />
                <button className="btn-primary" onClick={this.OnSubmitClick} style={{ marginTop: 5 }}>Add Person</button>
            </div>
        );
    }

}

export default PeopleComponent;

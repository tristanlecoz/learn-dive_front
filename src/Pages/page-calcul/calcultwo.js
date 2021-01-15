import React, { Component } from 'react';
import FormUserDetails from './component-calcul/formtwo';

export class UserForm extends Component {
  state = {
    taille: '',
    pression: '',
    profondeur: '',
    duree: '',
    table: '',
  };


  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
    console.log(this.state);
  };

  render() {
    const { firstName, lastName, email, occupation, city, bio } = this.state;
    const values = { firstName, lastName, email, occupation, city, bio };

    return(
          <FormUserDetails
            handleChange={this.handleChange}
            values={values}
          />
    )
  }
}

export default UserForm;
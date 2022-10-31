import React, { Component } from 'react';
import { v4 as uuid } from "uuid";
import s from './ContactForm.module.css';
import PropTypes from 'prop-types';

class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };
    

    handleInputChange = evt => {
        const { name, value } = evt.currentTarget;
        this.setState({
      [name]: value,
      id: uuid(),
        });
      };

      handleSubmit = evt => {
        evt.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
      };
      reset = () => {
        this.setState({
          name: '',
          number: '',
        });
      };
    
    
    render() {
        const { name, number } = this.state;
        return (
            <form className={s.form} onSubmit={this.handleSubmit}>
            <label className={s.label}>
              Name
         <input className={s.name}
          type="text"
          onChange={this.handleInputChange}
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        </label>
        
        <label className={s.label}>
              Number
         <input className={s.number}
          type="tel"
          onChange={this.handleInputChange}
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        </label>
        <button className={s.btn} type="submit">
                  Add contact
                </button>
        
        </form> 
        );
    }
};

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
};

export default ContactForm;
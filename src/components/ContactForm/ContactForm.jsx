import { Component } from "react";
import css from "./ContactForm.module.css"

class ContactForm extends Component {

state = {
 name: '',
 number: '',
}    


hangleChange = event=> {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
}

handleSabmit = event => {
  event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };
  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
}


render(){
    return(
    <div className={css.formDiv}>
      <form onSubmit={this.handleSabmit}>
      <label className="label">
    <h1>Phonebook</h1>

                Name
                <input
                className={css.contactInput}
                type="text"
                name="name"
                // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                // required
                onChange={this.hangleChange}
                value={this.state.name}
                 /> 
                 </label>
          
            <label className="lable">
                Number
                <input
                className={css.contactInput}
                type="tel"
                name="number"
                // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                // required
                onChange={this.hangleChange}
                value={this.state.number}
                 /> 
                 </label>
                 <button className={css.sabmitBtn} type="submit">Add contact
                 </button>
        </form>
        </div>       
    )
}
}

export default ContactForm;

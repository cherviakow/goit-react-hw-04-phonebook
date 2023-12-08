import { useState } from "react";
import css from "./ContactForm.module.css"

const ContactForm = ({onSubmit}) => {

const [name, setName] = useState('');
const [number, setNumber] = useState('');  

const hangleChange = (event) => {
    const { name, value } = event.currentTarget;
  if (name === 'number'){
    setNumber(value);
  }
  if (name === 'name'){
    setName(value);
  }
}

const handleSabmit = event => {
  event.preventDefault();
    onSubmit(name, number);
    reset();
  };

  const reset = () => {
      setName('');
      setNumber('');
}



    return(
    <div className={css.formDiv}>
      <form onSubmit={handleSabmit}>
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
                onChange={hangleChange}
                value={name}
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
                onChange={hangleChange}
                value={number}
                 /> 
                 </label>
                 <button className={css.sabmitBtn} type="submit">Add contact
                 </button>
        </form>
        </div>       
    )
}


export default ContactForm;

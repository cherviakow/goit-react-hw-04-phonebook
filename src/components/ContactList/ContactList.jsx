import React from 'react';
import css from './ContactList.module.css';

const ContactList = ({ contacts, OnDelite }) => {
    return (
      <ul className={css.contList}>
        {contacts.map(({ id, name, number }) => {
          return (
            <li className={css.contactItem} key={id}>
              <p className="contactText">{name}:</p>
              <p className="contactText">{number}</p>
              <button className={css.btnDelete} onClick={() => OnDelite(id)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    );
  };
  
  export default ContactList;



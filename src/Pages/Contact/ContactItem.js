import React from 'react';

const ContactItem = ({ contact }) => {
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <img className='h-[200px]' src={contact.img} alt="" />
            <div className="card-body">
                <h2 className="card-title">{contact.title}</h2>
                <p>{contact.email}</p>
                <p>{contact.localContact}</p>
                <p>{contact.Fax}</p>

            </div>
        </div>
    );
};

export default ContactItem;
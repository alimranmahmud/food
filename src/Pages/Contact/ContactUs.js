import React from 'react';
import ContactItem from './ContactItem';
const contacts = [
    {
        id: 1,
        title: 'Main Office',
        email: 'food-market@email.com',
        localContact: "1-555-0167-828",
        Fax: "1-555-0167-578",
        img: 'https://food-market.cmsmasters.net/wp-content/uploads/2016/06/1.jpg'
    },
    {
        id: 2,
        title: 'Customer Service Team',
        email: 'service@email.com',
        localContact: " 1-555-0138-172",
        Fax: "1-555-0138-174",
        img: 'https://food-market.cmsmasters.net/wp-content/uploads/2016/06/2.jpg'


    },
    {
        id: 3,
        title: 'Delivery Pass Team',
        email: 'deliverypass@email.com',
        localContact: "1-555-0138-172",
        Fax: "1-555-0138-174",
        img: 'https://food-market.cmsmasters.net/wp-content/uploads/2016/06/3.jpg'
    },
    {
        id: 4,
        title: 'Tech Support',
        email: 'techsupport@email.com',
        localContact: "1-555-0138-172",
        Fax: " 1-555-0138-174",
        img: "data:image/jpeg;base64,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"
    },
]
const ContactUs = () => {
    return (
        <div>
            <h1>GOOGLE MAP</h1>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5'>
                {
                    contacts.map(contact => <ContactItem key={contact.id} contact={contact}></ContactItem>)
                }
            </div>
            <div>
                <div className='flex mt-8'>
                    <div className='w-1/2'>
                        <h1>FAQ</h1>
                        <div className="collapse collapse-plus bg-base-200">
                            <input type="radio" name="my-accordion-4" checked="checked" />
                            <div className="collapse-title text-xl font-medium">
                                Does Food Market deliver in my area?
                            </div>
                            <div className="collapse-content">
                                <p>We deliver to most USA residential addresses. To check whether we deliver to yours, first register with us, then visit the grocery homepage and book a delivery. If we’re unable to deliver to your address,we’ll explain why.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus bg-base-200">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium">
                                What are your delivery hours?
                            </div>
                            <div className="collapse-content">
                                <p>Depending on the size of your order and the location of the restaurant you ordered from, delivery times may vary. On average, however, you should only expect to spend around 20-30 minutes waiting.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus bg-base-200">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium">
                                What credit card / debit cards do you accept for payment?
                            </div>
                            <div className="collapse-content">
                                <p>Yes, you can use a credit card for food. You can buy food with a credit card at grocery stores, restaurants, wholesale clubs, food trucks, fast food locations, and anywhere else that sells food and accepts credit card payments.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus bg-base-200">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium">
                                What′s your returns policy?
                            </div>
                            <div className="collapse-content">
                                <p>The number of days or deadline to return the product. The type of refund they will receive (store credit, exchange, full refund). The information they need to bring in-store or send online for the refund (receipts, credit card, etc). Conditions the product must be in to be valid for return.</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-1/2 '>
                        <h1>ContactUs</h1>
                        <div className='border'>
                            <div className='flex p-4'>
                                <div >
                                    <p>Name</p>
                                    <input required className='p-4' placeholder='name' type="text" />
                                </div>
                                <div>
                                    <p>Email</p>
                                    <input required className='p-4' placeholder='email' type="text" />
                                </div>
                            </div >
                            <div className='mt-4 p-4'>
                                <p>Message</p>
                                <textarea placeholder='message' required className='border' name="message" id="" cols="20" rows="5"></textarea> <br />
                                <button className="mt-8  btn btn-outline btn-error">SEND MESSAGE</button>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default ContactUs;
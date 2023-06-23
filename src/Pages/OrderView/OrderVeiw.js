import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ContextProvider } from '../../Firbase/AuthContext';

const OrderVeiw = () => {
    const { users } = useContext(ContextProvider)
    const foodDatas = useLoaderData()
    console.log(foodDatas)
    const handleClickOrder = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = `${form.first.value} ${form.last.value}`
        const phone = form.phone.value;
        const location = form.location.value;
        const user = {
            service: foodDatas._id,
            price: foodDatas.price,
            customerName: name,
            phone,
            email: users?.email,
            location,
            serviceName: foodDatas.title,
            image: foodDatas.img
        }
        console.log(user)
        fetch('http://localhost:5000/order/press', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user)

        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('your order successfully')
                    form.reset()
                }
                console.log(data)

            })

    }
    return (
        <div>
            <div className='flex justify-center items-center m-[20px]  '>
                <img className='w-[150px] rounded-full' src={foodDatas.img} alt="" />
                <p className='font-bold ml-[30px]'>Your Food Name : {foodDatas.title}</p>
            </div>
            <form onSubmit={handleClickOrder}>
                <div className='grid grid-cols-2 gap-4 '>
                    <input className='p-[15px] border' name='first' placeholder='first name' type="text" />
                    <input className='p-[15px] border' name='last' placeholder='last name' type="text" />
                    <input className='p-[15px] border' name='email' defaultValue={users?.email} readOnly placeholder='email' type="text" />
                    <input className='p-[15px] border' name='phone' placeholder='phone number' type="text" />
                    <input className='p-[15px] border' name='location' placeholder='your address' type="text" />
                </div>
                <div className='flex justify-center mt-8 mb-8'>
                    <button className='btn btn-outline '>Order</button>
                </div>
            </form>
        </div>
    );
};

export default OrderVeiw;
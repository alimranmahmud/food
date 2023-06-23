import React, { useContext, useEffect, useState } from 'react';
import OderListTable from './OderListTable';
import { ContextProvider } from '../../Firbase/AuthContext';

const OrderList = () => {
    const { users } = useContext(ContextProvider)
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/orderItem?email=${users?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [users?.email])




    //deleteFunction

    const handleClickDelete = (id, foodname) => {
        const procced = window.confirm(`are you sure this ${foodname} food item delete ???`)
        if (procced) {
            fetch(`http://localhost:5000/hello/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        const remaining = orders.filter(order => order._id !== id)
                        setOrders(remaining)
                        alert('delete successfully')
                    }
                    console.log(data)
                })
        }


    }





    return (
        <div className="overflow-x-auto">
            {
                orders.length === 0 ? <p className='text-center font-bold text-4xl'>No Order Items</p> :
                    <>
                        <h1 className='text-center font-bold text-4xl'>Order : {orders.length}</h1>
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <th>Food Name</th>
                                    <th>Location</th>
                                    <th>Phone Number</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orders.map(order => <OderListTable key={order._id} order={order} handleClickDelete={handleClickDelete}></OderListTable>)
                                }



                            </tbody>


                        </table>
                    </>
            }
        </div>
    );
};

export default OrderList;
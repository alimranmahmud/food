import React from 'react';
import { AiOutlineDelete, IconName } from "react-icons/ai";

const OderListTable = ({ order, handleClickDelete }) => {





    console.log(order)
    const { customerName, serviceName, location, image, phone, price, _id } = order
    return (
        <tr>
            <th>

                <AiOutlineDelete onClick={() => handleClickDelete(_id, serviceName)} className='text-2xl'></AiOutlineDelete>

            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image} alt="" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{serviceName}</div>
                        <div className="text-sm opacity-50">{price} tk</div>
                    </div>
                </div>
            </td>
            <td>

                {customerName}

                <br />
                <span className="badge badge-ghost badge-sm"> {location}</span>
            </td>
            <td>{phone}</td>
            <th>
                <button className="btn btn-ghost btn-xs">pending</button>
            </th>
        </tr>
    );
};

export default OderListTable;
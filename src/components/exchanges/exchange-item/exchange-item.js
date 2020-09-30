import React from 'react';
import './exchange-item.css'

export default function ExchangeItem({name,exchangeName, status }){
    return(
        <div className='card exchange-item'>
            <h4 className='exchange-item_name' >
                {name}
            </h4>
            <div className='exchange-item_flex'>
                <span className='exchange-item_fond'>
                    {exchangeName} :
                </span>
                <span className={status == 'inactive' ? 'exchange-item_status danger' : 'exchange-item_status sucsses'}>
                    {
                        status == 'inactive' ? 'Нективен' : 'Активен'
                    }
                </span>
            </div>
        </div>
    )
}
import React from 'react';
import './journal-item.css';

export default function JournalItem(){
    return(
        <div className='card journal-item'>
            <p сlassName='journal-item_pair'>
                Пара: Парапам
            </p>
            <div className='journal-item_action'>
                <p>
                23.09.2020 12:46:38
                </p>

                <p>
                Ордер покупка
                </p>

                <p>
                1-9600
                </p>
            </div>
        </div>
    )
}
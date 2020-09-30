import React from 'react';
import './journal.css';
import JournalItem from './journal-item/journal-item.js';

export default function Journal(){
    return(
        <section className='section journal-section'>
            <h2 className='section-title'>
                Журнал
            </h2>
            <div className='journal-section_list'>
                <JournalItem/>
                <JournalItem/>
                <JournalItem/>
            </div>
        </section>
    )
}
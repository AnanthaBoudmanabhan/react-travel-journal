import React from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import data from './data';

export default function App() {

    let cards = data.map(item => (
        <Card
            key={item.id}
            {...item}
        />
    ))

    return (
        <div>
            <Navbar />
            <section className="card-section">
                {cards}
            </section>
        </div>
    )
}
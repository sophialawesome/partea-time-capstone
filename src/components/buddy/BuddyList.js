import React, { useState, useEffect } from 'react';
//import the components we will need
import BuddyCard from './BuddyCard';
import BuddyManager from '../modules/BuddyManager';

const BuddyList = props => {
    // The initial state is an empty array
    const [buddies, setBuddies] = useState([]);

    const getBuddies = () => {
        // After the data comes back from the API, we
        //  use the setBuddies function to update state
        return BuddyManager.getAll().then(buddiesFromAPI => {
            setBuddies(buddiesFromAPI)
        });
    };

    // got the buddies from the API on the component's first render
    useEffect(() => {
        getBuddies();
    }, []);

    const deleteBuddy= id => {
        //console.log(id)
        BuddyManager.delete(id)
            .then(() => BuddyManager.getAll().then(setBuddies));
    };


    // Finally we use map() to "loop over" the buddies array to show a list of buddy cards
    return (

        //add this button above your display of buddy cards
        <section className="section-content">
            <button type="button"
                className="btn"
                onClick={() => {props.history.push("/buddies/new") }}>
                Add Buddy
            </button>
            <div className="container-cards">
            {buddies.map(buddy =>
                <BuddyCard
                    key={buddy.id}
                    buddy={buddy}
                    deleteBuddy={deleteBuddy} />
            )}
        </div>
        </section>

  
        
    );



};


export default BuddyList
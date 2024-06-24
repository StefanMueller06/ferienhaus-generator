import React from 'react';
import Header from '../components/Header';
import TripManager from '../components/TripManager';
import Profile from '../components/Profile';

const Index = () => {
    return (
        <div className={styles.container}>
            <Header/>
            <TripManager/>
            <Profile/>
        </div>
    );
};

export default Index;
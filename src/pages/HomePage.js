import React from 'react';
import ImageCarousel from '../components/ImageCarousel';
import BPOSection from '../components/BPOSection';
// import CardsSection from '../components/CardsSection';
import ServicesSection from '../components/ServicesSection';
import ProcessSection from '../components/ProcessSection';
import WhyChooseUs from '../components/WhyChooseUs';
import Courses from '../components/Courses';
import Logos from '../components/Logos';
import ContactForm from '../components/ContactForm';
// import TextSection from '../components/TextSection';
// import ClientsSection from '../components/ClientsSection';
// import ContactForm from '../components/ContactForm';
// import AboutSection from '../components/AboutSection';

import '../App.css';

const HomePage = () => {
    return (
        <div>
            <ImageCarousel />
            <BPOSection />
            <ServicesSection />
            <ProcessSection />
            <WhyChooseUs />
            <Courses />
            <Logos />
            <ContactForm />

        </div>
    );
};

export default HomePage;





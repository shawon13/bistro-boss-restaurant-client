import React from 'react';

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className='text-center mb-8 w-96 mx-auto'>
            <h4 className='mb-2 text-xl italic font-inter capitalize' style={{ color: '#D99904' }}>--- {subHeading} ---</h4>
            <h3 className='border-y-2 font-normal py-2.5 uppercase text-4xl font-inter'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;
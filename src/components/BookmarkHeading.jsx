import React from 'react';

const BookmarkHeading = ({ left, middle, right, departmentHeading, companyHeading }) => {
    return (

        <div className='w-full flex items-center justify-between'>

            <div className={`bg-purple-600 w-14 h-10 sm:w-24 sm:h-16 ${left ? '' : 'invisible'}`} style={{ clipPath: 'polygon(0 0, 100% 0,62% 50%, 100% 100%, 0 100%)' }}></div>

            <div className={`bg-purple-600 max-sm:p-2 sm:py-2 sm:px-4 rounded-md text-center text-sm sm:text-lg font-medium text-white ${middle ? '' : 'invisible'} ${companyHeading ? 'max-sm:text-lg flex-shrink-0 sm:text-2xl font-extrabold sm:px-12 mt-3' : ''} `}>{departmentHeading || companyHeading}</div>

            <div className={`bg-purple-600 w-14 h-10  sm:w-24 sm:h-16 ${right ? '' : 'invisible'}`} style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%, 38% 50%)' }}></div>

        </div>
    );
};

export default BookmarkHeading;

export const updateBasicDetails = ( fullname, email, phoneNumber ) => {
    return{
        type: 'UPDATE_BASIC_DETAILS',
        payload: { fullname, email, phoneNumber },
    };
};

export const updateDesignationDetails = ( position, instituteName, experience ) => {
    return{
        type: 'UPDATE_DESIGNATION_DETAILS',
        payload: { position, instituteName, experience },
    };
};

export const updatePersonalDetails = ( address, city, country, state, zipcode ) => {
    return{
        type: 'UPDATE_PERSONAL_DETAILS',
        payload: { address, city, country, state, zipcode },
    };
};

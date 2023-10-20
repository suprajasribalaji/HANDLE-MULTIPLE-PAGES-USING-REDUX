const initialState = {
    basicDetails:{
        fullname: '',
        email: '',
        phoneNumber: '',
    },

    designationDetails : {
        position : '',
        instituteName : '',
        experience : '',
    },

    personalDetails : {
        address : '',
        city : '',
        country : '',
        state : '',
        zipcode : '',
    },
};

const Reducers = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_BASIC_DETAILS':
            return { ...state, basicDetails: action.payload, };
        case 'UPDATE_DESIGNATION_DETAILS':
            return { ...state, designationDetails: action.payload, };
        case 'UPDATE_PERSONAL_DETAILS':
            return { ...state, personalDetails: action.payload, };
        default:
            return state;
    };
};

export default Reducers;
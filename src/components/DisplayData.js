import React from "react";
import { useSelector } from "react-redux";

const DisplayData = () => {
    const { fullname, email, phoneNumber } = useSelector((state) => state.data.basicDetails);
    const { position, instituteName, experience } = useSelector((state) => state.data.designationDetails);
    const { address, city, country, state, zipcode } = useSelector((state) => state.data.personalDetails);

    return (
        <div className=" bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                <h1 className="text-3xl font-bold mb-6 text-center">Form Details</h1>

                <div className="mb-4">
                    <h2 className="text-xl font-semibold mb-2">Basic Details</h2>
                    <div>
                        <p>Fullname: {fullname}</p>
                        <p>Email: {email}</p>
                        <p>Phone number: {phoneNumber}</p>
                    </div>
                </div>

                <div className="mb-4">
                    <h2 className="text-xl font-semibold mb-2">Designation Details</h2>
                    <div>
                        <p>Position: {position}</p>
                        <p>Institution Name: {instituteName}</p>
                        <p>Experience: {experience}</p>
                    </div>
                </div>

                <div>
                    <h2 className="text-xl font-semibold mb-2">Personal Details</h2>
                    <div>
                        <p>Address: {address}</p>
                        <p>City: {city}</p>
                        <p>Country: {country}</p>
                        <p>State: {state}</p>
                        <p>Zipcode: {zipcode}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DisplayData;

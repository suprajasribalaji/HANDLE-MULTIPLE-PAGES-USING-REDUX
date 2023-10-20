import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateBasicDetails } from "../actions";

const FirstPage = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const { fullname, email, phoneNumber } = useSelector((state) => state.data.basicDetails);

  const [fullnameError, setFullnameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");

  const handleFullnameChange = (event) => {
    dispatch(updateBasicDetails(event.target.value, email, phoneNumber));
  }

  const handleEmailChange = (event) => {
    dispatch(updateBasicDetails(fullname, event.target.value, phoneNumber));
  }

  const handlePhoneNumberChange = (event) => {
    dispatch(updateBasicDetails(fullname, email, event.target.value));
  }

  const validateFullname = (value) => {
    if (value.trim() === "") {
      return "Full name is required";
    }
    return "";
  }

  const validateEmail = (value) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    if (!emailRegex.test(value)) {
      return "Invalid email address";
    }
    return "";
  }

  const validatePhoneNumber = (value) => {
    const phoneRegex = /^\d{10}$/; // You can adjust this regex for your specific phone number format
    if (!phoneRegex.test(value)) {
      return "Invalid phone number";
    }
    return "";
  }

  const HandleClick = (event) => {
    event.preventDefault();

    const fullnameValidation = validateFullname(fullname);
    const emailValidation = validateEmail(email);
    const phoneNumberValidation = validatePhoneNumber(phoneNumber);

    if (fullnameValidation || emailValidation || phoneNumberValidation) {
      setFullnameError(fullnameValidation);
      setEmailError(emailValidation);
      setPhoneNumberError(phoneNumberValidation);
      return;
    }
    else{
      console.log("Full Name:", fullname);
      console.log("Email:", email);
      console.log("Phone Number:", phoneNumber);
      Navigate("/section2");
    }
  }

  return (
    <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <h2 className="font-semibold text-xl text-gray-600 pb-6">Section - 1</h2>

          <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <form onSubmit={HandleClick}>
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                <div className="text-gray-600">
                  <p className="font-medium text-lg pb-2">Basic Details</p>
                  <p>* Please fill out all the fields.</p>
                </div>

                <div className="lg:col-span-2">
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    <div className="md:col-span-5">
                      <label htmlFor="full_name">Full Name</label>
                      <input
                        type="text"
                        name="full_name"
                        id="full_name"
                        placeholder="Full name with initial"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={fullname}
                        onChange={handleFullnameChange}
                      />
                      {fullnameError && <div className="text-red-600">{fullnameError}</div>}
                    </div>

                    <div className="md:col-span-5">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="email@domain.com"
                      />
                      {emailError && <div className="text-red-600">{emailError}</div>}
                    </div>

                    <div className="md:col-span-5">
                      <label htmlFor="phone_number">Phone Number</label>
                      <input
                        type="text"
                        name="phone_number"
                        id="phone_number"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                        placeholder="1234567890"
                      />
                      {phoneNumberError && <div className="text-red-600">{phoneNumberError}</div>}
                    </div>

                    <div className="md:col-span-5 text-right pt-8 pb-2">
                      <div className="inline-flex items-end">
                        <button className="bg-blue-500 hover-bg-blue-700 text-white font-bold py-2 px-4 rounded">
                          Next
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;

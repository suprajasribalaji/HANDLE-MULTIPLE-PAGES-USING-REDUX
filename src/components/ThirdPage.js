import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updatePersonalDetails } from "../actions";

const ThirdPage = () => {
  
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const {address, city, country, state, zipcode} = useSelector((state) => state.data.personalDetails);

  const [addressError, setAddressError] = useState("");
  const [cityError, setCityError] = useState("");
  const [countryError, setCountryError] = useState("");
  const [stateError, setStateError] = useState("");
  const [zipcodeError, setZipcodeError] = useState("");

  const handleAddressChange = (event) => {
    dispatch(updatePersonalDetails(event.target.value, city, country, state, zipcode));
  }

  const handleCityChange = (event) => {
    dispatch(updatePersonalDetails(address, event.target.value, country, state, zipcode));
  }

  const handleCountryChange = (event) => {
    dispatch(updatePersonalDetails(address, city, event.target.value, state, zipcode));
  }

  const handleStateChange = (event) => {
    dispatch(updatePersonalDetails(address, city, country, event.target.value, zipcode));
  }

  const handleZipcodeChange = (event) => {
    dispatch(updatePersonalDetails(address, city, country, state, event.target.value));
  }

  const validateAddress = (value) => {
    if (value.trim() === "") {
      return "Address is required";
    }
    return "";
  }
  
  const validateCity = (value) => {
    if (value.trim() === "") {
      return "City is required";
    }
    return "";
  }
  
  const validateCountry = (value) => {
    if (value.trim() === "") {
      return "Country is required";
    }
    return "";
  }
  
  const validateState = (value) => {
    if (value.trim() === "") {
      return "State is required";
    }
    return "";
  }
  
  const validateZipcode = (value) => {
    if (value.trim() === "") {
      return "Zipcode is required";
    }
    if (!/^\d{6}$/.test(value)) {
      return "Invalid zipcode format";
    }
    return "";
  }

  const HandleClick = (event) => {

    event.preventDefault();

    const addressValidation = validateAddress(address);
    const cityValidation = validateCity(city);
    const countryValidation = validateCountry(country);
    const stateValidation = validateState(state);
    const zipcodeValidation = validateZipcode(zipcode);

    if(addressValidation || cityValidation || countryValidation || stateValidation || zipcodeValidation){
      setAddressError(addressValidation);
      setCityError(cityValidation);
      setCountryError(countryValidation);
      setStateError(stateValidation);
      setZipcodeError(zipcodeValidation);
    }
    else{
      console.log("Address: ", address);
      console.log("City: ", city);
      console.log("Country: ", country);
      console.log("State: ", state);
      console.log("Zipcode: ", zipcode);
      Navigate('/details');
    }
  }

  return (
    <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <h2 className="font-semibold text-xl text-gray-600 pb-6">Section - 3</h2>

          <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <form onClick={HandleClick}>
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div className="text-gray-600">
                <p className="font-medium text-lg">Personal Details</p>
                <p>* Please fill out all the fields.</p>
              </div>

              <div className="lg:col-span-2">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">

                  <div className="md:col-span-3">
                    <label htmlFor="address">Address / Street</label>
                    <input type="text" name="address" id="address" placeholder="Permanent Address" value={address} onChange={handleAddressChange} className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                    {addressError && <div className="text-red-600">{addressError}</div>}
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="city">City</label>
                    <input type="text" name="city" id="city" placeholder="City" value={city} onChange={handleCityChange} className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                    {cityError && <div className="text-red-600">{cityError}</div>}
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="country">Country / region</label>
                    <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <input name="country" id="country" placeholder="Country" value={country} onChange={handleCountryChange} className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" />
                      {countryError && <div className="text-red-600">{countryError}</div>}
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="state">State / province</label>
                    <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <input name="state" id="state" placeholder="State" value={state} onChange={handleStateChange} className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" />
                      {stateError && <div className="text-red-600">{stateError}</div>}
                    </div>
                  </div>

                  <div className="md:col-span-1">
                    <label htmlFor="zipcode">Zipcode</label>
                    <input type="number" name="zipcode" id="zipcode" placeholder="Zipcode" value={zipcode} onChange={handleZipcodeChange} className="flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                    {zipcodeError && <div className="text-red-600">{zipcodeError}</div>}
                  </div>
                  
                  <div className="md:col-span-5 text-right pt-8">
                    <div className="inline-flex items-end">
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >Submit</button>
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

export default ThirdPage;
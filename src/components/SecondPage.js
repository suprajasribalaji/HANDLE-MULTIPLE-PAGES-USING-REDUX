import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateDesignationDetails } from "../actions";

const SecondPage = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const { position, instituteName, experience } = useSelector((state) => state.data.designationDetails);

  const [positionError, setPositionError] = useState("");
  const [instituteNameError, setInstituteNameError] = useState("");
  const [experienceError, setExperienceError] = useState("");

  const handlePositionChange = (event) => {
    dispatch(updateDesignationDetails(event.target.value, instituteName, experience));
  }
  
  const handleInstitutionNameChange = (event) => {
    console.log(event.target.value);
    dispatch(updateDesignationDetails(position, event.target.value, experience));
  }

  const handleExperienceChange = (event) => {
    const newValue = parseInt(event.target.value);
    dispatch(updateDesignationDetails(position, instituteName, newValue));
  }

  const validatePosition = (value) => {
    if (value && value.trim() === "") {
      return "Position is required";
    }
    return "";
  }

  const validateInstitutionName = (value) => {
    if (value && value.trim() === "") {
      return "Institution name is required";
    }
    return "";
  }

  const validateExperience = (value) => {
    if (!value) {
      return "Experience is required";
    }
    if (isNaN(value) || value < 0) {
      return "Experience must be a non-negative number";
    }
    return "";
  }

  const HandleClick = (event) => {
    event.preventDefault();

    const positionValidation = validatePosition(position);
    const instituteNameValidation = validateInstitutionName(instituteName);
    const experienceValidation = validateExperience(experience);

    if (positionValidation || instituteNameValidation || experienceValidation) {
      setPositionError(positionValidation);
      setInstituteNameError(instituteNameValidation);
      setExperienceError(experienceValidation);
      return;
    } else {
      console.log("Position:", position);
      console.log("Institution Name:", instituteName);
      console.log("Experience:", experience);
      Navigate('/section3');
    }
  }

  return (
    <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <h2 className="font-semibold text-xl text-gray-600 pb-6">Section - 2</h2>

          <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <form onClick={HandleClick}>
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div className="text-gray-600">
                <p className="font-medium text-lg pb-2">Designation Details</p>
                <p>* Please fill out all the fields.</p>
              </div>

              <div className="lg:col-span-2">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                  <div className="md:col-span-5">
                    <label htmlFor="position">Position</label>
                    <input type="text" name="position" id="position" placeholder="Current Position" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={position} onChange={handlePositionChange} />
                    {positionError && <div className="text-red-600">{positionError}</div>}
                  </div>

                  <div className="md:col-span-5">
                    <label htmlFor="instituteName">Institute Name</label>
                    <input type="text" name="instituteName" id="instituteName" placeholder="Current Workspace Name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={instituteName} onChange={handleInstitutionNameChange} />
                    {instituteNameError && <div className="text-red-600">{instituteNameError}</div>}
                  </div>

                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    <div className="md:col-span-5">
                      <label htmlFor="experience">Experience</label>
                      <input type="number" name="experience" id="experience" placeholder="Experience" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={experience} onChange={handleExperienceChange} />
                      {experienceError && <div className="text-red-600">{experienceError}</div>}
                    </div>

                    <div className="text-right ml-96 pl-24">
                      <div className="inline-flex items-end">
                        <button className="bg-blue-500 hover-bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-end ml-20" >Next</button>
                      </div>
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

export default SecondPage;

import React, { useState } from "react";
import styled from "styled-components";
import { storage } from "../../../utils/firebase";
const SecondHeadingText = styled.h2`
  font: normal normal 600 20px/30px Segoe UI;
  color: ${(props) => props.color};
`;
const Input = styled.input`
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 3px solid #e3e3e3;
  border-radius: 13px;
  height: 75px;
  font: normal normal 600 20px/30px Segoe UI;
  padding: 18px;
  width: ${(props) => props.width};
`;
const Select = styled.select`
  width: ${(props) => props.width};
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 3px solid #e3e3e3;
  color: #909090;
  font: normal normal 600 20px/30px Segoe UI;
  padding: 20px;
  border-radius: 13px;
  height: 75px;
  width: ${(props) => props.width};
`;
const Option = styled.option`
  width: ${(props) => props.width};
  margin: 20px;
`;
const SubmitButton = styled.button`
  width: 250px;
  padding: 15px;
  color: black;
  font: normal normal 600 20px/30px Segoe UI;
  background: #ffd500 0% 0% no-repeat padding-box;
  border-radius: 11px;
`;
const Farmers = () => {
  const [farmer, setFarmer] = useState({
    name: "",
    farmSize: "",
    cropType: "",
    email: "",
    farmLocation: "",
    phone: "",
    yield: "",
    date: "",
    identity: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    const image = e.target[7].files[0];
    farmer.name = e.target.name.value;
    farmer.farmSize = e.target.farmSize.value;
    farmer.cropType = e.target.cropType.value;
    farmer.email = e.target.email.value;
    farmer.farmLocation = e.target.farmLocation.value;
    farmer.phone = e.target.phone.value;
    farmer.yield = e.target.yield.value;
    farmer.identity = image.name;
    farmer.date = `${new Date().toDateString()}, ${new Date().toTimeString()}`;
    console.log(farmer.identity);
    const fileRef = storage.child(`${farmer.name}, ${new Date()}`);
    await fileRef.put(image);
    fetch("http://localhost:3000/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(farmer),
    })
      .then((response) => response.json())
      .then(({ success }) => {
        console.log("Success:", success);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div>
      <form onSubmit={onSubmit} className="px-28 pt-10">
        <div className="flex">
          <div>
            <Input type="text" width="575px" placeholder="Name" name="name" />
          </div>
          <div>
            <Input
              width="250px"
              type="text"
              placeholder="Farm Size"
              className="ml-24"
              name="farmSize"
            />
          </div>

          <div className="relative">
            <Select width="275px" className="ml-20" name="cropType">
              <Option value="">Crop Type</Option>
              <Option>Crop Type2s</Option>
              <Option>Crop Type3s</Option>
            </Select>
            <img
              src="/images/interface/option-select.png"
              alt="icon"
              className="absolute top-1/2 right-5 w-4"
            />
          </div>
        </div>

        <div className="pt-10 flex">
          <Input width="575px" placeholder="Email Address" name="email" />
          <Input
            width="450px"
            placeholder="Farm Location"
            className="ml-24"
            name="farmLocation"
          />
        </div>

        <div className="pt-10 flex">
          <div>
            <Input width="350px" placeholder="Tel Phone" name="phone" />
          </div>

          <div className="relative">
            <Select width="200px" className="ml-8" name="yield">
              <Option value="">Yield / Month</Option>
              <Option>Crop Type2s</Option>
              <Option>Crop Type3s</Option>
            </Select>
            <img
              src="/images/interface/option-select.png"
              alt="icon"
              className="absolute top-1/2 right-5 w-4"
            />
          </div>

          <div className="relative ml-24">
            <label className="custom-file-upload">
              <img
                src="/images/interface/upload.svg"
                alt="icon"
                className="absolute top-1/3 right-8 w-10"
              />
              <input type="file" />
              Means of Identification
            </label>
          </div>
        </div>

        <div className="py-10 flex items-center">
          <input
            type="checkbox"
            className="h-6 bg-white p-10 w-6 border-2 rounded border-gray-300"
          />
          <SecondHeadingText className="ml-5 text-black">
            I agree with Terms , Privacy Policy and E- Sign Consent
          </SecondHeadingText>
        </div>

        <SubmitButton className="mb-10">Submit</SubmitButton>
      </form>
    </div>
  );
};

export default Farmers;

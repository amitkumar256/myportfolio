import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/createUser", formData);

      if (response.status === 201) {
        console.log("Form data submitted successfully");
      } else {
        console.error("Error submitting form data:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting form data:", error.message);
    }
  };

  return (
    <div className="max-w-[1208px] flex flex-col    mx-4 xl:mx-auto mt-10 md:mt-14">
      <div className="flex justify-center items-center text-4xl font-bold text-white">
        Contact Me
      </div>
      <div className="bg-black mt-10 rounded-3xl p-5 sm:p-10">
        <form onSubmit={handleSubmit} className="">
          <div className="flex justify-center space-x-10 mt-10">
            <label className="text-white text-xl font-bold">Name:</label>
            <input
              className=" sm:w-3/5 w-4/5 text-center"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="flex justify-center space-x-10 mt-10">
            <label className="text-white text-xl font-bold">Email:</label>
            <input
              className=" sm:w-3/5 w-4/5 text-center"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="flex justify-center space-x-10 mt-10">
            <label className="text-white text-xl font-bold">Phone:</label>
            <input
              className=" sm:w-3/5 w-4/5 text-center"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-center mt-10">
            <button
              className="
          p-1
          sm:p-2
          mt-5
          rounded-md
          font-bold
          bg-gradient-to-r
          from-orange-400
          to-red-600
          text-base
          sm:text-lg "
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;

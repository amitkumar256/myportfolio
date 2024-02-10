import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

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
        setFormData({
          name: "",
          email: "",
          phone: "",
        });
        toast.success("Your Data is saved.", {
          position: "top-center",
        });
      } else {
        console.error("Error submitting form data:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting form data:", error.message);
      toast.info("something is wrong try again.", {
        position: "top-center",
      });
    }
  };

  return (
    <div
      className="max-w-[1250px] flex flex-col pt-4 pb-4 border-2 border-blue-400 rounded-tl-[50px] rounded-br-[45px]  mx-4 xl:mx-auto mt-10 md:mt-14"
      id="contact"
    >
      <div className=" flex justify-center font-serif items-center text-4xl md:text-5xl font-bold text-white">
        Contact Me
      </div>
      <div className="bg-black mt-5 rounded-3xl p-5 sm:p-10">
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
            {/* to check data store or not */}
            {/* <div className="text-white text-xl">
              {JSON.stringify(formData.name)}
            </div> */}
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
              className="hover:scale-110 transition-transform
              duration-500 hover:text-white
          p-1
          w-36
          sm:w-44
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

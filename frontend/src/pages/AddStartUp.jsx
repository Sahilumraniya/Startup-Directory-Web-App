import React from "react";
import StartUpForm from "../components/StartUpForm";

const AddStartUp = () => {
  return (
    <>
    <div className="py-8">
      <h1 className="text-center text-5xl my-4 font-semibold">Add Start-Up</h1>
      <StartUpForm />
    </div>
    </>
  );
};

export default AddStartUp;

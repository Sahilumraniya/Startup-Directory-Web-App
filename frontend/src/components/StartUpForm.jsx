import React, { useState } from "react";
import { useForm } from "react-hook-form";

const StartUpForm = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      StartupName: "",
      IndustryVertical: "",
      SubVertical: "",
      date: "",
      CityLocation: "",
      InvestorsName: "",
      InvestmentType: "",
      AmountInUSD: "",
      Remarks: "",
    },
  });

  const submit = (data) => {
    setLoading(true);
    console.log(data);
    console.log(typeof data);
    console.log(JSON.stringify(data));
    console.log(typeof JSON.stringify(data));

    if (data.StartupName === "") {
      setError("StartupName", {
        type: "manual",
        message: "Startup Name is required",
      });
      return;
    }

    fetch(`${import.meta.env.VITE_APP_API_URL}/api/v1/startups`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoading(false);
        reset();
      });
  };

  return (
    <>
      <div>
        {loading ? (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-300 bg-opacity-50 rounded-md">
            <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-700 h-12 w-12"></div>
          </div>
        ) : (
          <form
            className="w-full max-w-lg mx-auto"
            onSubmit={handleSubmit(submit)}
          >
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3 my-2">
                <label
                  className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                  htmlFor="StartupName"
                >
                  Startup Name
                </label>
                <input
                  name="StartupName"
                  {...register("StartupName", {
                    required: true,
                  })}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="text"
                />
              </div>

              <div className="w-full px-3 my-2">
                <label
                  className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                  htmlFor="IndustryVertical"
                >
                  Industry Vertical
                </label>
                <input
                  name="IndustryVertical"
                  {...register("IndustryVertical")}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                />
              </div>
              <div className="w-full px-3 my-2">
                <label
                  className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                  htmlFor="SubVertical"
                >
                  Sub Vertical
                </label>
                <input
                  name="SubVertical"
                  {...register("SubVertical")}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                />
              </div>
              <div className="w-full px-3 my-2">
                <label
                  className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                  htmlFor="StartingYear"
                >
                  Starting Year
                </label>
                <input
                  name="StartingYear"
                  {...register("date")}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white"
                  type="date"
                />
              </div>
              <div className="w-full px-3 my-2">
                <label
                  className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                  htmlFor="CityLocation"
                >
                  City Location
                </label>
                <input
                  name="CityLocation"
                  {...register("CityLocation")}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white"
                  type="text"
                />
              </div>
              <div className="w-full px-3 my-2">
                <label
                  className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                  htmlFor="InvestorsName"
                >
                  Investors Name
                </label>
                <input
                  name="InvestorsName"
                  {...register("InvestorsName")}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white"
                  type="text"
                />
              </div>
              <div className="w-full px-3 my-2">
                <label
                  className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                  htmlFor="InvestmentType"
                >
                  Investment Type
                </label>
                <input
                  name="InvestmentType"
                  {...register("InvestmentType")}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white"
                  type="text"
                />
              </div>
              <div className="w-full px-3 my-2">
                <label
                  className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                  htmlFor="AmountInUSD"
                >
                  Amount In USD
                </label>
                <input
                  name="AmountInUSD"
                  {...register("AmountInUSD")}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white"
                  type="number"
                />
              </div>
              <div className="w-full px-3 my-2">
                <label
                  className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                  htmlFor="Remarks"
                >
                  Remarks
                </label>
                <input
                  name="Remarks"
                  {...register("Remarks")}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white"
                  type="text"
                />
              </div>
              <div className="w-full px-3 my-2">
                <input
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                  value={"Add Start-Up"}
                ></input>
              </div>
            </div>
          </form>
        )}
      </div>
    </>
  );
};

export default StartUpForm;

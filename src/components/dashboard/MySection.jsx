import Select from "react-select";
import React, { useState } from "react";
const MySection = () => {
  const owner = localStorage.getItem("admin");
  const options = [
    { value: "react", label: "React" },
    { value: "npm", label: "yarn" },
    { value: "yarn", label: "yarn" },
    { value: "angular", label: "Angular" },
    { value: "Javascript", label: "JavaScript" },
  ];
  const [getData, setGetData] = useState([]);
  const [submitData, setSubmitData] = useState([]);
  const [inputData, setInputData] = useState({
    projectImg: "",
    projectName: "",
    description: "",
    tags: [],
    github: "",
    live: "",
  });

  const handleMultiSelectChange = (selectedOptions) => {
    const tags = selectedOptions.map((option) => option.value);
    setInputData((prevInputData) => ({
      ...prevInputData,
      tags: tags,
    }));
  };

  const handleSubmitData = async (e) => {
    e.preventDefault();
    const { projectImg, projectName, description, tags, github, live } =
      inputData;
    const res = fetch("https://portfolio-a4c27-default-rtdb.firebaseio.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        projectImg: projectImg,
        projectName: projectName,
        description: description,
        tags: tags,
        github: github,
        live: live,
      }),
    });

    if (res) {
      alert("data submitted");
    } else {
      alert("data not submitted");
    }
  };

  // console.log(getData);
  const getInputData = (e) => {
    const { name, value } = e.target;
    setInputData((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };
  console.log(inputData);

  return (
    <div>
      {owner ? (
        <div>
          <form method="POST" onSubmit={handleSubmitData}>
            <input type="file" name="projectImg" onChange={getInputData} />
            <input type="text" name="projectName" onChange={getInputData} />
            <textarea
              name="description"
              id=""
              cols="30"
              rows="10"
              onChange={getInputData}
            />
            <Select
              isMulti
              name="tags"
              options={options}
              className="basic-multi-select"
              classNamePrefix="select"
              onChange={handleMultiSelectChange}
            />
            <input type="url" name="github" onChange={getInputData} />
            <input type="url" name="live" onChange={getInputData} />

            <button type="submit">Submit</button>
          </form>
        </div>
      ) : (
        <h1>get loss</h1>
      )}
    </div>
  );
};

export default MySection;

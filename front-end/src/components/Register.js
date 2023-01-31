import React, { useState } from "react";
import { NavLink,useNavigate } from "react-router-dom";
const Register = () => {
  const history = useNavigate();

  const [inpval, setINP] = useState({
    name: "",
    email: "",
    age: "",
    mobile: "",
    work: "",
    address: "",
    description: "",
  });
  const setData = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setINP((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const addInpData = async (e) => {
    e.preventDefault();
    const { name, email, age, mobile, work, address, description } = inpval;
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        age,
        mobile,
        work,
        address,
        description,
      }),
    });

    const data = await res.json();
    console.log(data);
    if (res.status === 404 || !data) {
      alert("Error");
      console.log("error")
    }
    else{
      alert("Data Added");
      history('/');
    }
  };
  return (
    <div className="container">
      <button className="btn btn-primary">
        Home
        <NavLink to="/">Home Page</NavLink>
      </button>
      <form>
        <div className="row">
          <div className="mb-3 col-md-6 col-lg-6 col-12">
            <label htmlFor="" className="form-label">
              Name
            </label>
            <input
              type="text"
              onChange={setData}
              name="name"
              value={inpval.name}
              className="form-control"
            />
          </div>

          <div className="mb-3 col-md-6 col-lg-6 col-12">
            <label htmlFor="" className="form-label">
              Email
            </label>
            <input
              type="email"
              onChange={setData}
              name="email"
              value={inpval.email}
              className="form-control"
            />
          </div>
          <div className="mb-3 col-md-6 col-lg-6 col-12">
            <label htmlFor="" className="form-label">
              Age
            </label>
            <input
              type="age"
              onChange={setData}
              name="age"
              value={inpval.age}
              className="form-control"
            />
          </div>
          <div className="mb-3 col-md-6 col-lg-6 col-12">
            <label htmlFor="" className="form-label">
              Mobile
            </label>
            <input
              type="number"
              onChange={setData}
              name="mobile"
              value={inpval.mobile}
              className="form-control"
            />
          </div>
          <div className="mb-3 col-md-6 col-lg-6 col-12">
            <label htmlFor="" className="form-label">
              Work
            </label>
            <input
              type="text"
              onChange={setData}
              name="work"
              value={inpval.work}
              className="form-control"
            />
          </div>

          <div className="mb-3 col-md-6 col-lg-6 col-12">
            <label htmlFor="" className="form-label">
              Address
            </label>
            <input
              type="text"
              onChange={setData}
              name="address"
              value={inpval.address}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label for="">Description</label>
            <textarea
              class="form-control"
              name="description"
              rows="3"
              value={inpval.description}
              onChange={setData}
            ></textarea>
          </div>
          <button
            type="submit"
            onClick={addInpData}
            className="btn btn-primary"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;

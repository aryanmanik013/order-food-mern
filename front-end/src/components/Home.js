import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
export const Home = () => {
  const [getuserData, setuserData] = useState([]);
  console.log(getuserData);
  const getData = async (e) => {
    const res = await fetch("/getUser", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);
    if (res.status === 404 || !data) {
      console.log("error");
    } else {
      setuserData(data);
      console.log("Get Data");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const deleteUser = async (id) => {
    const resp2 = await fetch(`/deleteUser/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const deleteData = await resp2.json();
    console.log(deleteData);

    if (resp2.status===422 || !deleteData) {
      console.log("Error")
    }
    else{
      console.log("User Deleted");
      getData();
    }
  };
  return (
    <div className="mt-5">
      <div className="container">
        <div className="add_btn mt-2">
          <NavLink to="/register" className="btn btn-primary mb-2">
            Add Data
          </NavLink>
        </div>
        <div className="table-responsive">
          <table class="table">
            <thead>
              <tr className="table-dark">
                <th scope="col">ID</th>
                <th scope="col">User Name</th>
                <th scope="col">Email</th>
                <th scope="col">Job Number</th>
                <th scope="col"> Number</th>
                <th scope="col"> Actions</th>
              </tr>
            </thead>
            <tbody>
              {getuserData.map((el, id) => {
                return (
                  <>
                    <tr>
                      <th>{id + 1}</th>
                      <td>{el.name}</td>
                      <td>{el.email}</td>
                      <td>{el.work}</td>
                      <td>{el.mobile}</td>
                      <td className="d-flex justify-content-between">
                        <NavLink to={`profile/${el._id}`}>
                          <button type="button" class="btn btn-success">
                            <i class="fa-solid fa-eye"></i>
                          </button>
                        </NavLink>

                        <NavLink to={`edit/${el._id}`}>
                          <button type="button" class="btn btn-primary">
                            <i class="fa-solid fa-pencil"></i>
                          </button>
                        </NavLink>
                        <button
                          type="button"
                          onClick={()=>deleteUser(el._id)}
                          class="btn btn-danger"
                        >
                          <i class="fa-solid fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Home;

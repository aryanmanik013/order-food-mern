import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Profile = () => {
  const { id } = useParams();
  console.log(id);
  const [getuserData, setuserData] = useState([]);
  console.log(getuserData);

  const getData = async () => {
    const res = await fetch(`/getUserby/${id}`, {
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
  return (
    <div className="container">
      <h2>Welcome </h2>
      <div className="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>Occupation</th>
              <th>Mobile</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{getuserData.name}</td>
              <td>{getuserData.age}</td>
              <td>{getuserData.email}</td>
              <td>{getuserData.work}</td>
              <td>{getuserData.mobile}</td>
              <td>{getuserData.address}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Profile;

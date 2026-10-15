import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

function Userlist() {
  const [a, b] = useState([]);

  const myuserdata = () => {
    axios.get("http://localhost:5000/users").then((d) => {
      console.log(d.data);
      b(d.data);
    });
  };

  useEffect(() => {
    myuserdata();
  }, []);

  const UserDelete = (d) => {
    console.log(d);
    axios.delete(`http://localhost:5000/users/${d}`).then((r) => {
      //console.log(r);
      toast.success("user is deleted", { autoClose: 800, theme: "dark" });
      myuserdata();
    });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 p-2">
          <p className="h4">List of users</p>
          <ToastContainer />
        </div>
        <div className="col-md-6 text-end p-2">
          <Link to="adduser" className="btn btn-info">
            Add User
          </Link>
        </div>
        <div className="col-12 table-responsive">
          <table class="table table-bordered border-primary">
            <thead>
              <tr>
                <th scope="col">Sno</th>
                <th scope="col">Id</th>
                <th scope="col">Firstname</th>
                <th scope="col">Lastname</th>
                <th scope="col">Password</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>

                <th scope="col">Gender</th>
                <th scope="col">Color</th>
                <th scope="col">Course</th>
                <th scope="col">Country</th>
                <th scope="col">City</th>
                <th scope="col">Postal</th>
                <th scope="col">Address</th>
                <th scope="col">Job Type</th>
                <th scope="col">Experience years</th>
                <th scope="col">Portfolio URL</th>
                <th scope="col">Skill level</th>
                <th scope="col">Bio</th>
                <th scope="col">Resume</th>
                <th scope="col">Recent Pic</th>
                <th scope="col">Accept</th>

                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {a.map((u, i) => {
                return (
                  <tr>
                    <th scope="row">{++i}</th>
                    <th scope="row">{u.id}</th>
                    <td>{u.username}</td>
                    <td>{u.lastname}</td>
                    <td>{u.password}</td>
                    <td>{u.email}</td>
                    <td>{u.phone}</td>
                    <td>{u.gender}</td>
                    <td>{u.color}</td>
                    <td>{u.course}</td>
                    <td>{u.country}</td>
                    <td>{u.city}</td>
                    <td>{u.postal}</td>
                    <td>{u.padd}</td>
                    <td>{u.job}</td>
                    <td>{u.exp}</td>
                    <td>{u.url1}</td>
                    <td>{u.range1}</td>
                    <td>{u.bio1}</td>
                    <td>{u.file1}</td>
                    <td>{u.file2}</td>
                    <td>{u.check1}</td>

                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => UserDelete(u.id)}
                      >
                        Del
                      </button>
                      <Link
                        to={"useredit/" + u.id}
                        className="btn btn-warning btn-sm"
                      >
                        Edit
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Userlist;

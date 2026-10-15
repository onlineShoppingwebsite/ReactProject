import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

function Useredit() {
  const { id } = useParams();
  const mynav = useNavigate();
  const [status, setStatus] = useState("");
  const [course, setCourse] = useState("");
  const [check1, setCheck] = useState("");
  const [user, updateuser] = useState({
    email: "",
    username: "",
  });

  const singledata = () => {
    axios.get(`http://localhost:5000/users/${id}`).then((r) => {
      console.log(r.data);
      updateuser(r.data);
      setStatus(r.data.gender);
      setCourse(r.data.course);
      setCheck(r.data.check1);
    });
  };

  useEffect(() => {
    singledata();
  }, []);

  const fieldupdate = (s) => {
    updateuser({
      ...user,
      [s.target.name]: s.target.value,
    });
  };

  const submitupdate = () => {
    axios.patch(`http://localhost:5000/users/${id}`, user).then((d) => {
      console.log(d);
      toast.success("update successfully", { autoClose: 800, theme: "dark" });
      setTimeout(() => {
        mynav("/dashboard/userlistpage");
      }, 800);
    });
  };

  return (
    <div className="container card bg-dark text-white p-3">
      <div className="row">
        <div className="col-md-12">
          <div class="mb-3">
            <h2 class="mx-auto">Add User Data</h2>
          </div>
        </div>

        <div className="col-md-3">
          <div class="mb-3">
            <label className="form-label">First name {id}</label>
            <input
              type="text"
              className="form-control"
              value={user.username}
              name="username"
              onInput={fieldupdate}
            />
          </div>
        </div>

        <div className="col-md-3">
          <div class="mb-3">
            <label className="form-label">Last name</label>
            <input
              type="text"
              className="form-control"
              value={user.lastname}
              name="lastname"
              onInput={fieldupdate}
            />
          </div>
        </div>

        <div className="col-md-3">
          <div class="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              value={user.password}
              name="password"
              onInput={fieldupdate}
            />
          </div>
        </div>

        <div className="col-md-3">
          <div class="mb-3">
            <label className="form-label">Phone no.</label>
            <input
              type="tel"
              className="form-control"
              value={user.phone}
              name="phone"
              onInput={fieldupdate}
            />
          </div>
        </div>

        <div className="col-md-3">
          <div class="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              value={user.email}
              name="email"
              onInput={fieldupdate}
            />
          </div>
        </div>

        <div className="col-md-3">
          <div class="mb-3">
            <label className="form-label">Gender</label>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                value={user.gender}
                name="gender"
                onChange={fieldupdate}
              />
              <label class="form-check-label">Female</label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="gender"
                value={user.gender}
                onChange={fieldupdate}
              />
              <label class="form-check-label">Male</label>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div class="mb-3">
            <label className="form-label">Pick Theme Color</label>
            <label for="exampleColorInput" class="form-label">
              Color picker
            </label>
            <input
              type="color"
              class="form-control form-control-color"
              id="exampleColorInput"
              title="Choose your color"
              value={user.color}
              name="color"
              onInput={fieldupdate}
            />
          </div>
        </div>

        <div className="col-md-3">
          <div class="mb-3">
            <label className="form-label">Select Courses</label>

            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value={user.course}
                name="course"
                onChange={fieldupdate}
              />
              <label class="form-check-label">MERN Full Stack</label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value={user.course}
                name="course"
                onChange={fieldupdate}
              />
              <label class="form-check-label">MEAN Full Stack</label>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div class="mb-3">
            <label className="form-label">Select Your Country</label>
            <select
              class="form-select"
              aria-label="Small select example"
              value={user.country}
              name="country"
              onChange={fieldupdate}
            >
              <option selected>Select Country</option>
              <option value="India">India</option>
              <option value="United State">United State</option>
              <option value="Canada">Canada</option>
            </select>
          </div>
        </div>

        <div className="col-md-3">
          <div class="mb-3">
            <label className="form-label">Select Your City</label>
            <select
              class="form-select"
              aria-label="Small select example"
              value={user.city}
              name="city"
              onChange={fieldupdate}
            >
              <option selected>Select City</option>
              <option value="Delhi">Delhi</option>
              <option value="Noida">Noida</option>
              <option value="Dwarka">Dwarka</option>
            </select>
          </div>
        </div>

        <div className="col-md-3">
          <div class="mb-3">
            <label className="form-label">Pincode</label>
            <input
              type="text"
              className="form-control"
              value={user.postal}
              name="postal"
              onInput={fieldupdate}
            />
          </div>
        </div>

        <div className="col-md-3">
          <div class="mb-3">
            <label className="form-label">Permanent Address</label>
            <textarea
              type="text"
              className="form-control"
              value={user.padd}
              name="padd"
              onInput={fieldupdate}
            />
          </div>
        </div>
        <div className="col-md-3">
          <div class="mb-3">
            <label className="form-label">Job type</label>
            <input
              type="text"
              className="form-control"
              value={user.job}
              name="job"
              onInput={fieldupdate}
            />
          </div>
        </div>

        <div className="col-md-3">
          <div class="mb-3">
            <label className="form-label">Years of Experience</label>
            <input
              type="number"
              min="0"
              max="50"
              className="form-control"
              value={user.exp}
              name="exp"
              onInput={fieldupdate}
            />
          </div>
        </div>

        <div className="col-md-3">
          <div class="mb-3">
            <label className="form-label">Portfolio URL</label>
            <input
              type="url"
              className="form-control"
              value={user.url1}
              name="url1"
              onInput={fieldupdate}
            />
          </div>
        </div>

        <div className="col-md-3">
          <div class="mb-3">
            <label className="form-label">Skills Level slider (1-10)</label>
            <input
              type="range"
              className="form-control bg-primary"
              min="1"
              max="10"
              value={user.range1}
              name="range1"
              onInput={fieldupdate}
            />
          </div>
        </div>

        <div className="col-md-6">
          <div class="mb-3">
            <label className="form-label">Add short biography</label>
            <textarea
              className="w-100"
              value={user.bio1}
              name="bio1"
              onInput={fieldupdate}
            />
          </div>
        </div>

        <div className="col-md-3">
          <div class="mb-3">
            <label className="form-label">upload Resume here</label>
            <input type="file" accept=".pdf, application/pdf" />
          </div>
        </div>

        <div className="col-md-3">
          <div class="mb-3">
            <label className="form-label">upload your passport pic here</label>
            <input type="file" accept="image/*" />
          </div>
        </div>

        <div className="col-6">
          <div class="mb-3">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value={user.check1}
                name="check1"
                onChange={fieldupdate}
              />
              <label class="form-check-label">
                I accept Terms and condition
              </label>
            </div>
          </div>
        </div>

        <div className="col-md-12">
          <div className="mb-3">
            <input
              type="button"
              className="btn btn-danger  mx-auto  h-50 w-100"
              value="update"
              onClick={submitupdate}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Useredit;

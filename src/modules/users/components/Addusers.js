import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

function Addusers() {
  const { register, handleSubmit } = useForm();

  const submitdata = (formdata) => {
    axios.post("http://localhost:5000/users", formdata).then((s) => {
      console.log(s);
    });
  };

  return (
    <div className="container-fluid card bg-info text-white p-3">
      <div className="row">
        <div className="col-md-12">
          <div class="mb-3">
            <h2 class="mx-auto">Add User Data</h2>
          </div>
        </div>

        <div className="col-md-3">
          <div class="mb-3">
            <label className="form-label">First name</label>
            <input
              type="text"
              className="form-control"
              {...register("username")}
            />
          </div>
        </div>

        <div className="col-md-3">
          <div class="mb-3">
            <label className="form-label">Last name</label>
            <input
              type="text"
              className="form-control"
              {...register("lastname")}
            />
          </div>
        </div>

        <div className="col-md-3">
          <div class="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              {...register("password")}
            />
          </div>
        </div>

        <div className="col-md-3">
          <div class="mb-3">
            <label className="form-label">Phone no.</label>
            <input type="tel" className="form-control" {...register("phone")} />
          </div>
        </div>

        <div className="col-md-3">
          <div class="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              {...register("email")}
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
                name="gender"
                value="female"
                {...register("gender")}
              />
              <label class="form-check-label">Female</label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="gender"
                value="male"
                {...register("gender")}
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
              {...register("color")}
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
                value="MERN"
                {...register("course")}
              />
              <label class="form-check-label">MERN Full Stack</label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value="MEAN"
                {...register("course")}
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
              {...register("country")}
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
              {...register("city")}
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
              {...register("postal")}
            />
          </div>
        </div>

        <div className="col-md-3">
          <div class="mb-3">
            <label className="form-label">Permanent Address</label>
            <textarea
              type="text"
              className="form-control"
              {...register("padd")}
            />
          </div>
        </div>
        <div className="col-md-3">
          <div class="mb-3">
            <label className="form-label">Job type</label>
            <input type="text" className="form-control" {...register("job")} />
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
              {...register("exp")}
            />
          </div>
        </div>

        <div className="col-md-3">
          <div class="mb-3">
            <label className="form-label">Portfolio URL</label>
            <input type="url" className="form-control" {...register("url1")} />
          </div>
        </div>

        <div className="col-md-3">
          <div class="mb-3">
            <label className="form-label">Skills Level slider (1-10)</label>
            <input
              type="range"
              className="form-control bg-primary"
              name="skill_level"
              min="1"
              max="10"
              {...register("range1")}
            />
          </div>
        </div>

        <div className="col-md-6">
          <div class="mb-3">
            <label className="form-label">Add short biography</label>
            <textarea className="w-100" {...register("bio1")} />
          </div>
        </div>

        <div className="col-md-3">
          <div class="mb-3">
            <label className="form-label">upload Resume here</label>
            <input
              type="file"
              accept=".pdf, application/pdf"
              {...register("file11")}
            />
          </div>
        </div>

        <div className="col-md-3">
          <div class="mb-3">
            <label className="form-label">upload your passport pic here</label>
            <input type="file" accept="image/*" {...register("file12")} />
          </div>
        </div>

        <div className="col-6">
          <div class="mb-3">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value="yes"
                {...register("check1")}
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
              value="Add User"
              onClick={handleSubmit(submitdata)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Addusers;

import React from "react";
import PropTypes from "prop-types";
import DashboardBreadcrumps from "../shared/dashboard-breadcrumps/DashboardBreadcrumps";
import UserDetail from "../shared/user-details/UserDetail";

function UserProfile(props) {
  return (
    <React.Fragment>
      <DashboardBreadcrumps title="User Profile" />
      <UserDetail />

      <div className="card">
        <div className="card-header">
          <h4>Basic Detail</h4>
        </div>
        <div className="card-body">
          <form>
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-12">
                <div className="form-group">
                  <label>Employer Name</label>
                  <input type="text" className="form-control" />
                </div>
              </div>

              <div className="col-xl-6 col-lg-6 col-md-12">
                <div className="form-group">
                  <label>Email ID</label>
                  <input type="text" className="form-control" />
                </div>
              </div>

              <div className="col-xl-6 col-lg-6 col-md-12">
                <div className="form-group">
                  <label>Phone No.</label>
                  <input type="text" className="form-control" />
                </div>
              </div>

              <div className="col-xl-6 col-lg-6 col-md-12">
                <div className="form-group">
                  <label>Website</label>
                  <input type="text" className="form-control" />
                </div>
              </div>

              <div className="col-xl-6 col-lg-6 col-md-12">
                <div className="form-group">
                  <label>Founded Year</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12">
                <div className="form-group">
                  <label>Company Category</label>
                  <div className="select-ops">
                    <select>
                      <option value="1">Web & Application</option>
                      <option value="2">Banking Services</option>
                      <option value="3">UI/UX Design</option>
                      <option value="4">IOS/App Application</option>
                      <option value="5">Education</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12">
                <div className="form-group">
                  <label>Company Size</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12">
                <div className="form-group">
                  <label>Video</label>
                  <input type="text" className="form-control" />
                </div>
              </div>

              <div className="col-xl-12 col-lg-12 col-md-12">
                <div className="form-group">
                  <label>About Company</label>
                  <textarea className="form-control ht-80"></textarea>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h4>Award</h4>
        </div>
        <div className="card-body">
          <div className="single-edc-wrap">
            <div className="single-edc-box">
              <div className="single-edc-remove-box">
                <div className="cd-resume-cancel">
                  <a href="JavaScript:Void(0);" className="cancel-link">
                    <i className="fa-solid fa-xmark"></i>
                  </a>
                </div>
              </div>
              <div className="single-edc-title-box">
                <a
                  className="btn btn-collapse"
                  data-bs-toggle="collapse"
                  href="#BCPIL"
                  role="button"
                  aria-expanded="false"
                  aria-controls="BCPIL"
                >
                  BCPIL Award
                </a>
              </div>
            </div>
            <div className="single-edc-caption">
              <div className="collapse" id="BCPIL">
                <div className="card card-body">
                  <form>
                    <div className="row mb-3">
                      <label className="col-md-2 col-form-label">Award Title</label>
                      <div className="col-md-10">
                        <input type="text" className="form-control" value="BCPIL Award" />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label className="col-md-2 col-form-label">Award Year</label>
                      <div className="col-md-10">
                        <input type="text" className="form-control" value="01-12-2012" />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label className="col-md-2 col-form-label">Description</label>
                      <div className="col-md-10">
                        <textarea className="form-control ht-80">
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                          Lorem Ipsum has been the industry's standard dummy text ever since the
                          1500s, when an unknown printer took a galley of type and scrambled it to
                          make a type specimen book. It has survived not only five centuries
                        </textarea>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="single-edc-wrap">
            <div className="single-edc-box">
              <div className="single-edc-remove-box">
                <div className="cd-resume-cancel">
                  <a href="JavaScript:Void(0);" className="cancel-link">
                    <i className="fa-solid fa-xmark"></i>
                  </a>
                </div>
              </div>
              <div className="single-edc-title-box">
                <a
                  className="btn btn-collapse"
                  data-bs-toggle="collapse"
                  href="#RIZZA"
                  role="button"
                  aria-expanded="false"
                  aria-controls="RIZZA"
                >
                  RIZZA Award
                </a>
              </div>
            </div>
            <div className="single-edc-caption">
              <div className="collapse" id="RIZZA">
                <div className="card card-body">
                  <form>
                    <div className="row mb-3">
                      <label className="col-md-2 col-form-label">Award Title</label>
                      <div className="col-md-10">
                        <input type="text" className="form-control" value="RIZZA Award" />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label className="col-md-2 col-form-label">Award Year</label>
                      <div className="col-md-10">
                        <input type="text" className="form-control" value="01-12-2016" />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label className="col-md-2 col-form-label">Description</label>
                      <div className="col-md-10">
                        <textarea className="form-control ht-80">
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                          Lorem Ipsum has been the industry's standard dummy text ever since the
                          1500s, when an unknown printer took a galley of type and scrambled it to
                          make a type specimen book. It has survived not only five centuries
                        </textarea>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="single-edc-wrap">
            <div className="single-edc-box">
              <div className="single-edc-remove-box">
                <div className="cd-resume-cancel">
                  <a href="JavaScript:Void(0);" className="cancel-link">
                    <i className="fa-solid fa-xmark"></i>
                  </a>
                </div>
              </div>
              <div className="single-edc-title-box">
                <a
                  className="btn btn-collapse"
                  data-bs-toggle="collapse"
                  href="#FIFFA"
                  role="button"
                  aria-expanded="false"
                  aria-controls="FIFFA"
                >
                  FIFFA Award
                </a>
              </div>
            </div>
            <div className="single-edc-caption">
              <div className="collapse" id="FIFFA">
                <div className="card card-body">
                  <form>
                    <div className="row mb-3">
                      <label className="col-md-2 col-form-label">Award Title</label>
                      <div className="col-md-10">
                        <input type="text" className="form-control" value="FIFFA ICL" />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label className="col-md-2 col-form-label">Award Year</label>
                      <div className="col-md-10">
                        <input type="text" className="form-control" value="01-12-2022" />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label className="col-md-2 col-form-label">Description</label>
                      <div className="col-md-10">
                        <textarea className="form-control ht-80">
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                          Lorem Ipsum has been the industry's standard dummy text ever since the
                          1500s, when an unknown printer took a galley of type and scrambled it to
                          make a type specimen book. It has survived not only five centuries
                        </textarea>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="single-edc-wrap">
            <a
              href="JavaScript:Void(0);"
              data-bs-toggle="modal"
              data-bs-target="#award"
              className="add-light-btn"
            >
              Add More Award
            </a>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h4>Contact Detail</h4>
        </div>
        <div className="card-body">
          <form>
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-12">
                <div className="form-group">
                  <label>Your Email</label>
                  <input type="text" className="form-control" />
                </div>
              </div>

              <div className="col-xl-6 col-lg-6 col-md-12">
                <div className="form-group">
                  <label>Phone no.</label>
                  <input type="text" className="form-control" />
                </div>
              </div>

              <div className="col-xl-6 col-lg-6 col-md-12">
                <div className="form-group">
                  <label>Temporary Address</label>
                  <input type="text" className="form-control" />
                </div>
              </div>

              <div className="col-xl-6 col-lg-6 col-md-12">
                <div className="form-group">
                  <label>Address</label>
                  <input type="text" className="form-control" />
                </div>
              </div>

              <div className="col-xl-6 col-lg-6 col-md-12">
                <div className="form-group">
                  <label>Address 2</label>
                  <input type="text" className="form-control" />
                </div>
              </div>

              <div className="col-xl-6 col-lg-6 col-md-12">
                <div className="form-group">
                  <label>Country</label>
                  <div className="select-ops">
                    <select>
                      <option value="1">India</option>
                      <option value="2">United State</option>
                      <option value="3">United kingdom</option>
                      <option value="4">Austrailia</option>
                      <option value="5">Russia</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="col-xl-6 col-lg-6 col-md-12">
                <div className="form-group">
                  <label>State/City</label>
                  <div className="select-ops">
                    <select>
                      <option value="1">California</option>
                      <option value="2">Denver</option>
                      <option value="3">New York</option>
                      <option value="4">Canada</option>
                      <option value="5">Poland</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="col-xl-6 col-lg-6 col-md-12">
                <div className="form-group">
                  <label>Zip Code</label>
                  <input type="text" className="form-control" />
                </div>
              </div>

              <div className="col-xl-6 col-lg-6 col-md-12">
                <div className="form-group">
                  <label>Latitude</label>
                  <input type="text" className="form-control" />
                </div>
              </div>

              <div className="col-xl-6 col-lg-6 col-md-12">
                <div className="form-group">
                  <label>longitude</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h4>Social Login</h4>
        </div>
        <div className="card-body">
          <form>
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-12">
                <div className="form-group">
                  <label>Facebook</label>
                  <input type="text" className="form-control" />
                </div>
              </div>

              <div className="col-xl-6 col-lg-6 col-md-12">
                <div className="form-group">
                  <label>Twitter</label>
                  <input type="text" className="form-control" />
                </div>
              </div>

              <div className="col-xl-6 col-lg-6 col-md-12">
                <div className="form-group">
                  <label>Instagram</label>
                  <input type="text" className="form-control" />
                </div>
              </div>

              <div className="col-xl-6 col-lg-6 col-md-12">
                <div className="form-group">
                  <label>Linked In</label>
                  <input type="text" className="form-control" />
                </div>
              </div>

              <div className="col-xl-6 col-lg-6 col-md-12">
                <div className="form-group">
                  <label>Twitter</label>
                  <input type="text" className="form-control" />
                </div>
              </div>

              <div className="col-xl-6 col-lg-6 col-md-12">
                <div className="form-group">
                  <label>Google Plus</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12 col-md-12">
          <button type="submit" className="btn ft--medium btn-primary">
            Save Profile
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

UserProfile.propTypes = {};

export default UserProfile;

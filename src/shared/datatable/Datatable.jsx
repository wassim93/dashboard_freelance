import React from "react";
import PropTypes from "prop-types";
import "./datatable.scss";

function Datatable(props) {
  return (
    <div className="row">
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
        <div className="card">
          <div className="card-header">
            <h6 className="mb-0">Recent Posted Jobs</h6>
          </div>
          <div className="card-body">
            <div className="row justify-content-start gx-3 gy-4">
              <div className="col-xl-12 col-lg-12 col-md-12">
                <div className="jbs-list-box border">
                  <div className="jbs-list-head">
                    <div className="jbs-list-head-thunner">
                      <div className="jbs-list-emp-thumb jbs-verified">
                        <a href="job-detail.html">
                          <figure>
                            <img src="https://placehold.co/200x200" className="img-fluid" alt="" />
                          </figure>
                        </a>
                      </div>
                      <div className="jbs-list-job-caption">
                        <div className="jbs-job-employer-wrap">
                          <span>Tripadvisor</span>
                        </div>
                        <div className="jbs-job-title-wrap">
                          <h4>
                            <a href="job-detail.html" className="jbs-job-title">
                              Technical Content Writer
                            </a>
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="jbs-list-applied-users">
                      <span className="text-sm-muted text-light bg-warning label">
                        244 Applicants
                      </span>
                    </div>
                    <div className="jbs-list-postedinfo">
                      <p className="m-0 text-sm-muted">
                        <strong>Posted:</strong>
                        <span className="text-success">17 Apr 2023</span>
                      </p>
                      <p className="m-0 text-sm-muted">
                        <strong>Expired:</strong>
                        <span className="text-danger">12 Jun 2024</span>
                      </p>
                    </div>
                    <div className="jbs-list-head-last">
                      <a href="#" className="rounded btn-md text-success bg-light-success px-3">
                        <i className="fa-solid fa-pencil"></i>
                      </a>
                      <a href="#" className="rounded btn-md text-danger bg-light-danger px-3">
                        <i className="fa-solid fa-trash-can"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-12 col-lg-12 col-md-12">
                <div className="jbs-list-box border">
                  <div className="jbs-list-head">
                    <div className="jbs-list-head-thunner">
                      <div className="jbs-list-emp-thumb jbs-verified">
                        <a href="job-detail.html">
                          <figure>
                            <img src="https://placehold.co/200x200" className="img-fluid" alt="" />
                          </figure>
                        </a>
                      </div>
                      <div className="jbs-list-job-caption">
                        <div className="jbs-job-employer-wrap">
                          <span>Pintrest</span>
                        </div>
                        <div className="jbs-job-title-wrap">
                          <h4>
                            <a href="job-detail.html" className="jbs-job-title">
                              New Shopify Developer
                            </a>
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="jbs-list-applied-users">
                      <span className="text-sm-muted text-light bg-info label">110 Applicants</span>
                    </div>
                    <div className="jbs-list-postedinfo">
                      <p className="m-0 text-sm-muted">
                        <strong>Posted:</strong>
                        <span className="text-success">17 Apr 2023</span>
                      </p>
                      <p className="m-0 text-sm-muted">
                        <strong>Expired:</strong>
                        <span className="text-danger">12 Jun 2024</span>
                      </p>
                    </div>
                    <div className="jbs-list-head-last">
                      <a href="#" className="rounded btn-md text-success bg-light-success px-3">
                        <i className="fa-solid fa-clock"></i>
                      </a>
                      <a href="#" className="rounded btn-md text-danger bg-light-danger px-3">
                        <i className="fa-solid fa-trash-can"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-12 col-lg-12 col-md-12">
                <div className="jbs-list-box border">
                  <div className="jbs-list-head">
                    <div className="jbs-list-head-thunner">
                      <div className="jbs-list-emp-thumb jbs-verified">
                        <a href="job-detail.html">
                          <figure>
                            <img src="https://placehold.co/200x200" className="img-fluid" alt="" />
                          </figure>
                        </a>
                      </div>
                      <div className="jbs-list-job-caption">
                        <div className="jbs-job-employer-wrap">
                          <span>Shopify</span>
                        </div>
                        <div className="jbs-job-title-wrap">
                          <h4>
                            <a href="job-detail.html" className="jbs-job-title">
                              Sr. Magento Developer
                            </a>
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="jbs-list-applied-users">
                      <span className="text-sm-muted text-light bg-info label">320 Applicants</span>
                    </div>
                    <div className="jbs-list-postedinfo">
                      <p className="m-0 text-sm-muted">
                        <strong>Posted:</strong>
                        <span className="text-success">17 Apr 2023</span>
                      </p>
                      <p className="m-0 text-sm-muted">
                        <strong>Expired:</strong>
                        <span className="text-danger">12 Jun 2024</span>
                      </p>
                    </div>
                    <div className="jbs-list-head-last">
                      <a href="#" className="rounded btn-md text-success bg-light-success px-3">
                        <i className="fa-solid fa-pencil"></i>
                      </a>
                      <a href="#" className="rounded btn-md text-danger bg-light-danger px-3">
                        <i className="fa-solid fa-trash-can"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-12 col-lg-12 col-md-12">
                <div className="jbs-list-box border">
                  <div className="jbs-list-head">
                    <div className="jbs-list-head-thunner">
                      <div className="jbs-list-emp-thumb jbs-verified">
                        <a href="job-detail.html">
                          <figure>
                            <img src="https://placehold.co/200x200" className="img-fluid" alt="" />
                          </figure>
                        </a>
                      </div>
                      <div className="jbs-list-job-caption">
                        <div className="jbs-job-employer-wrap">
                          <span>Dreezoo</span>
                        </div>
                        <div className="jbs-job-title-wrap">
                          <h4>
                            <a href="job-detail.html" className="jbs-job-title">
                              Sr. Code Ignetor Developer
                            </a>
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="jbs-list-applied-users">
                      <span className="text-sm-muted text-light bg-info label">170 Applicants</span>
                    </div>
                    <div className="jbs-list-postedinfo">
                      <p className="m-0 text-sm-muted">
                        <strong>Posted:</strong>
                        <span className="text-success">17 Apr 2023</span>
                      </p>
                      <p className="m-0 text-sm-muted">
                        <strong>Expired:</strong>
                        <span className="text-danger">12 Jun 2024</span>
                      </p>
                    </div>
                    <div className="jbs-list-head-last">
                      <a href="#" className="rounded btn-md text-success bg-light-success px-3">
                        <i className="fa-solid fa-pencil"></i>
                      </a>
                      <a href="#" className="rounded btn-md text-danger bg-light-danger px-3">
                        <i className="fa-solid fa-trash-can"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-12 col-lg-12 col-md-12">
                <div className="jbs-list-box border">
                  <div className="jbs-list-head">
                    <div className="jbs-list-head-thunner">
                      <div className="jbs-list-emp-thumb jbs-verified">
                        <a href="job-detail.html">
                          <figure>
                            <img src="https://placehold.co/200x200" className="img-fluid" alt="" />
                          </figure>
                        </a>
                      </div>
                      <div className="jbs-list-job-caption">
                        <div className="jbs-job-employer-wrap">
                          <span>Photoshop</span>
                        </div>
                        <div className="jbs-job-title-wrap">
                          <h4>
                            <a href="job-detail.html" className="jbs-job-title">
                              Java & Python Developer
                            </a>
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="jbs-list-applied-users">
                      <span className="text-sm-muted text-light bg-info label">190 Applicants</span>
                    </div>
                    <div className="jbs-list-postedinfo">
                      <p className="m-0 text-sm-muted">
                        <strong>Posted:</strong>
                        <span className="text-success">17 Apr 2023</span>
                      </p>
                      <p className="m-0 text-sm-muted">
                        <strong>Expired:</strong>
                        <span className="text-danger">12 Jun 2024</span>
                      </p>
                    </div>
                    <div className="jbs-list-head-last">
                      <a href="#" className="rounded btn-md text-success bg-light-success px-3">
                        <i className="fa-solid fa-pencil"></i>
                      </a>
                      <a href="#" className="rounded btn-md text-danger bg-light-danger px-3">
                        <i className="fa-solid fa-trash-can"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-12 col-lg-12 col-md-12">
                <div className="jbs-list-box border">
                  <div className="jbs-list-head">
                    <div className="jbs-list-head-thunner">
                      <div className="jbs-list-emp-thumb jbs-verified">
                        <a href="job-detail.html">
                          <figure>
                            <img src="https://placehold.co/200x200" className="img-fluid" alt="" />
                          </figure>
                        </a>
                      </div>
                      <div className="jbs-list-job-caption">
                        <div className="jbs-job-employer-wrap">
                          <span>Firefox</span>
                        </div>
                        <div className="jbs-job-title-wrap">
                          <h4>
                            <a href="job-detail.html" className="jbs-job-title">
                              Sr. UI/UX Designer
                            </a>
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="jbs-list-applied-users">
                      <span className="text-sm-muted text-light bg-danger label">Expired</span>
                    </div>
                    <div className="jbs-list-postedinfo">
                      <p className="m-0 text-sm-muted">
                        <strong>Posted:</strong>
                        <span className="text-success">17 Apr 2023</span>
                      </p>
                      <p className="m-0 text-sm-muted">
                        <strong>Expired:</strong>
                        <span className="text-danger">12 Jun 2024</span>
                      </p>
                    </div>
                    <div className="jbs-list-head-last">
                      <a href="#" className="rounded btn-md text-success bg-light-success px-3">
                        <i className="fa-solid fa-clock"></i>
                      </a>
                      <a href="#" className="rounded btn-md text-danger bg-light-danger px-3">
                        <i className="fa-solid fa-trash-can"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-12 col-lg-12 col-md-12">
                <div className="jbs-list-box border">
                  <div className="jbs-list-head">
                    <div className="jbs-list-head-thunner">
                      <div className="jbs-list-emp-thumb jbs-verified">
                        <a href="job-detail.html">
                          <figure>
                            <img src="https://placehold.co/200x200" className="img-fluid" alt="" />
                          </figure>
                        </a>
                      </div>
                      <div className="jbs-list-job-caption">
                        <div className="jbs-job-employer-wrap">
                          <span>Airbnb</span>
                        </div>
                        <div className="jbs-job-title-wrap">
                          <h4>
                            <a href="job-detail.html" className="jbs-job-title">
                              Jr. Laravel Developer
                            </a>
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="jbs-list-applied-users">
                      <span className="text-sm-muted text-light bg-info label">205 Applicants</span>
                    </div>
                    <div className="jbs-list-postedinfo">
                      <p className="m-0 text-sm-muted">
                        <strong>Posted:</strong>
                        <span className="text-success">17 Apr 2023</span>
                      </p>
                      <p className="m-0 text-sm-muted">
                        <strong>Expired:</strong>
                        <span className="text-danger">12 Jun 2024</span>
                      </p>
                    </div>
                    <div className="jbs-list-head-last">
                      <a href="#" className="rounded btn-md text-success bg-light-success px-3">
                        <i className="fa-solid fa-pencil"></i>
                      </a>
                      <a href="#" className="rounded btn-md text-danger bg-light-danger px-3">
                        <i className="fa-solid fa-trash-can"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-12 col-lg-12 col-md-12">
                <div className="jbs-list-box border">
                  <div className="jbs-list-head">
                    <div className="jbs-list-head-thunner">
                      <div className="jbs-list-emp-thumb jbs-verified">
                        <a href="job-detail.html">
                          <figure>
                            <img src="https://placehold.co/200x200" className="img-fluid" alt="" />
                          </figure>
                        </a>
                      </div>
                      <div className="jbs-list-job-caption">
                        <div className="jbs-job-employer-wrap">
                          <span>Snapchat</span>
                        </div>
                        <div className="jbs-job-title-wrap">
                          <h4>
                            <a href="job-detail.html" className="jbs-job-title">
                              Sr. WordPress Developer
                            </a>
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="jbs-list-applied-users">
                      <span className="text-sm-muted text-light bg-info label">320 Applicants</span>
                    </div>
                    <div className="jbs-list-postedinfo">
                      <p className="m-0 text-sm-muted">
                        <strong>Posted:</strong>
                        <span className="text-success">17 Apr 2023</span>
                      </p>
                      <p className="m-0 text-sm-muted">
                        <strong>Expired:</strong>
                        <span className="text-danger">12 Jun 2024</span>
                      </p>
                    </div>
                    <div className="jbs-list-head-last">
                      <a href="#" className="rounded btn-md text-success bg-light-success px-3">
                        <i className="fa-solid fa-pencil"></i>
                      </a>
                      <a href="#" className="rounded btn-md text-danger bg-light-danger px-3">
                        <i className="fa-solid fa-trash-can"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-12 col-lg-12 col-md-12">
                <div className="jbs-list-box border">
                  <div className="jbs-list-head">
                    <div className="jbs-list-head-thunner">
                      <div className="jbs-list-emp-thumb jbs-verified">
                        <a href="job-detail.html">
                          <figure>
                            <img src="https://placehold.co/200x200" className="img-fluid" alt="" />
                          </figure>
                        </a>
                      </div>
                      <div className="jbs-list-job-caption">
                        <div className="jbs-job-employer-wrap">
                          <span>Dribbble</span>
                        </div>
                        <div className="jbs-job-title-wrap">
                          <h4>
                            <a href="job-detail.html" className="jbs-job-title">
                              Exp. Project manager
                            </a>
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="jbs-list-applied-users">
                      <span className="text-sm-muted text-light bg-danger label">Expired</span>
                    </div>
                    <div className="jbs-list-postedinfo">
                      <p className="m-0 text-sm-muted">
                        <strong>Posted:</strong>
                        <span className="text-success">17 Apr 2023</span>
                      </p>
                      <p className="m-0 text-sm-muted">
                        <strong>Expired:</strong>
                        <span className="text-danger">12 Jun 2024</span>
                      </p>
                    </div>
                    <div className="jbs-list-head-last">
                      <a href="#" className="rounded btn-md text-success bg-light-success px-3">
                        <i className="fa-solid fa-clock"></i>
                      </a>
                      <a href="#" className="rounded btn-md text-danger bg-light-danger px-3">
                        <i className="fa-solid fa-trash-can"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-12 col-lg-12 col-md-12">
                <div className="jbs-list-box border">
                  <div className="jbs-list-head">
                    <div className="jbs-list-head-thunner">
                      <div className="jbs-list-emp-thumb jbs-verified">
                        <a href="job-detail.html">
                          <figure>
                            <img src="https://placehold.co/200x200" className="img-fluid" alt="" />
                          </figure>
                        </a>
                      </div>
                      <div className="jbs-list-job-caption">
                        <div className="jbs-job-employer-wrap">
                          <span>Skype</span>
                        </div>
                        <div className="jbs-job-title-wrap">
                          <h4>
                            <a href="job-detail.html" className="jbs-job-title">
                              Jr. PHP Developer
                            </a>
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="jbs-list-applied-users">
                      <span className="text-sm-muted text-light bg-info label">150 Applicants</span>
                    </div>
                    <div className="jbs-list-postedinfo">
                      <p className="m-0 text-sm-muted">
                        <strong>Posted:</strong>
                        <span className="text-success">17 Apr 2023</span>
                      </p>
                      <p className="m-0 text-sm-muted">
                        <strong>Expired:</strong>
                        <span className="text-danger">12 Jun 2024</span>
                      </p>
                    </div>
                    <div className="jbs-list-head-last">
                      <a href="#" className="rounded btn-md text-success bg-light-success px-3">
                        <i className="fa-solid fa-pencil"></i>
                      </a>
                      <a href="#" className="rounded btn-md text-danger bg-light-danger px-3">
                        <i className="fa-solid fa-trash-can"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Datatable.propTypes = {};

export default Datatable;

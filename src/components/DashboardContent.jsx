import React from "react";
import PropTypes from "prop-types";

function DashboardContent(props) {
  return (
    <>
      <div className="dashboard-tlbar d-block mb-4">
        <div className="row">
          <div className="colxl-12 col-lg-12 col-md-12">
            <h1 className="mb-1 fs-3 fw-medium">Employer Dashboard</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item text-muted">
                  <a href="#">Employer</a>
                </li>
                <li className="breadcrumb-item text-muted">
                  <a href="#">Dashboard</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#" className="text-primary">
                    Employer Dashboard
                  </a>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      <div className="dashboard-widg-bar d-block">
        <div className="dashboard-widg-bar d-block">
          <div className="row align-items-center gx-4 gy-4 mb-4">
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
              <div className="dash-wrap-bloud">
                <div className="dash-wrap-bloud-icon">
                  <div className="bloud-icon text-success bg-light-success">
                    <i className="fa-solid fa-business-time"></i>
                  </div>
                </div>
                <div className="dash-wrap-bloud-caption">
                  <div className="dash-wrap-bloud-content">
                    <h5 className="ctr">760</h5>
                    <p>Posted jobs</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
              <div className="dash-wrap-bloud">
                <div className="dash-wrap-bloud-icon">
                  <div className="bloud-icon text-warning bg-light-warning">
                    <i className="fa-solid fa-bookmark"></i>
                  </div>
                </div>
                <div className="dash-wrap-bloud-caption">
                  <div className="dash-wrap-bloud-content">
                    <h5 className="ctr">12560</h5>
                    <p>Saved Candidates</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
              <div className="dash-wrap-bloud">
                <div className="dash-wrap-bloud-icon">
                  <div className="bloud-icon text-danger bg-light-danger">
                    <i className="fa-solid fa-user-clock"></i>
                  </div>
                </div>
                <div className="dash-wrap-bloud-caption">
                  <div className="dash-wrap-bloud-content">
                    <h5 className="ctr">672</h5>
                    <p>Applicants</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
              <div className="dash-wrap-bloud">
                <div className="dash-wrap-bloud-icon">
                  <div className="bloud-icon text-info bg-light-info">
                    <i className="fa-sharp fa-solid fa-comments"></i>
                  </div>
                </div>
                <div className="dash-wrap-bloud-caption">
                  <div className="dash-wrap-bloud-content">
                    <h5 className="ctr">215</h5>
                    <p>Total Review</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row gx-4 gy-4 mb-4">
            <div className="col-xl-8 col-lg-12 col-md-12 col-sm-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="mb-0">Extra Area Chart</h4>
                </div>
                <div className="card-body">
                  <ul className="list-inline text-center m-t-40">
                    <li>
                      <h5>
                        <i className="fa fa-circle me-1 text-warning"></i>Active jobs
                      </h5>
                    </li>
                    <li>
                      <h5>
                        <i className="fa fa-circle me-1 text-danger"></i>Expired Jobs
                      </h5>
                    </li>
                    <li>
                      <h5>
                        <i className="fa fa-circle me-1 text-success"></i>Applied Applicants
                      </h5>
                    </li>
                  </ul>
                  <div className="chart" id="line-chart" style={{ height: "300px" }}></div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12">
              <div className="card">
                <div className="card-header">
                  <h4>Notifications</h4>
                </div>
                <div className="ground-list ground-list-hove">
                  <div className="ground ground-single-list">
                    <a href="#">
                      <div className="btn-circle-40 text-warning bg-light-warning">
                        <i className="fas fa-home"></i>
                      </div>
                    </a>

                    <div className="ground-content">
                      <h6>
                        <a href="#">
                          <strong>Kr. Shaury Preet</strong> Replied your message
                        </a>
                      </h6>
                      <span className="small">Just Now</span>
                    </div>
                  </div>

                  <div className="ground ground-single-list">
                    <a href="#">
                      <div className="btn-circle-40 text-danger bg-light-danger">
                        <i className="fa-solid fa-comments"></i>
                      </div>
                    </a>

                    <div className="ground-content">
                      <h6>
                        <a href="#">
                          Mortin Denver accepted your resume on <strong>Job Stock</strong>
                        </a>
                      </h6>
                      <span className="small">20 min ago</span>
                    </div>
                  </div>

                  <div className="ground ground-single-list">
                    <a href="#">
                      <div className="btn-circle-40 text-info bg-light-info">
                        <i className="fa-solid fa-heart"></i>
                      </div>
                    </a>

                    <div className="ground-content">
                      <h6>
                        <a href="#">
                          Your job #456256 expired yesterday <strong>View More</strong>
                        </a>
                      </h6>
                      <span className="small">1 day ago</span>
                    </div>
                  </div>

                  <div className="ground ground-single-list">
                    <a href="#">
                      <div className="btn-circle-40 text-danger bg-light-danger">
                        <i className="fa-solid fa-thumbs-up"></i>
                      </div>
                    </a>

                    <div className="ground-content">
                      <h6>
                        <a href="#">
                          <strong>Daniel Kurwa</strong> has been approved your resume!.
                        </a>
                      </h6>
                      <span className="small">10 days ago</span>
                    </div>
                  </div>

                  <div className="ground ground-single-list">
                    <a href="#">
                      <div className="btn-circle-40 text-success bg-light-success">
                        <i className="fa-solid fa-comment-dots"></i>
                      </div>
                    </a>

                    <div className="ground-content">
                      <h6>
                        <a href="#">
                          Khushi Verma left a review on <strong>Your Message</strong>
                        </a>
                      </h6>
                      <span className="small">Just Now</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

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
                                  <img
                                    src="https://placehold.co/200x200"
                                    className="img-fluid"
                                    alt=""
                                  />
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
                            <a
                              href="#"
                              className="rounded btn-md text-success bg-light-success px-3"
                            >
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
                                  <img
                                    src="https://placehold.co/200x200"
                                    className="img-fluid"
                                    alt=""
                                  />
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
                            <span className="text-sm-muted text-light bg-info label">
                              110 Applicants
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
                            <a
                              href="#"
                              className="rounded btn-md text-success bg-light-success px-3"
                            >
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
                                  <img
                                    src="https://placehold.co/200x200"
                                    className="img-fluid"
                                    alt=""
                                  />
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
                            <span className="text-sm-muted text-light bg-info label">
                              320 Applicants
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
                            <a
                              href="#"
                              className="rounded btn-md text-success bg-light-success px-3"
                            >
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
                                  <img
                                    src="https://placehold.co/200x200"
                                    className="img-fluid"
                                    alt=""
                                  />
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
                            <span className="text-sm-muted text-light bg-info label">
                              170 Applicants
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
                            <a
                              href="#"
                              className="rounded btn-md text-success bg-light-success px-3"
                            >
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
                                  <img
                                    src="https://placehold.co/200x200"
                                    className="img-fluid"
                                    alt=""
                                  />
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
                            <span className="text-sm-muted text-light bg-info label">
                              190 Applicants
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
                            <a
                              href="#"
                              className="rounded btn-md text-success bg-light-success px-3"
                            >
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
                                  <img
                                    src="https://placehold.co/200x200"
                                    className="img-fluid"
                                    alt=""
                                  />
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
                            <span className="text-sm-muted text-light bg-danger label">
                              Expired
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
                            <a
                              href="#"
                              className="rounded btn-md text-success bg-light-success px-3"
                            >
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
                                  <img
                                    src="https://placehold.co/200x200"
                                    className="img-fluid"
                                    alt=""
                                  />
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
                            <span className="text-sm-muted text-light bg-info label">
                              205 Applicants
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
                            <a
                              href="#"
                              className="rounded btn-md text-success bg-light-success px-3"
                            >
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
                                  <img
                                    src="https://placehold.co/200x200"
                                    className="img-fluid"
                                    alt=""
                                  />
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
                            <span className="text-sm-muted text-light bg-info label">
                              320 Applicants
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
                            <a
                              href="#"
                              className="rounded btn-md text-success bg-light-success px-3"
                            >
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
                                  <img
                                    src="https://placehold.co/200x200"
                                    className="img-fluid"
                                    alt=""
                                  />
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
                            <span className="text-sm-muted text-light bg-danger label">
                              Expired
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
                            <a
                              href="#"
                              className="rounded btn-md text-success bg-light-success px-3"
                            >
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
                                  <img
                                    src="https://placehold.co/200x200"
                                    className="img-fluid"
                                    alt=""
                                  />
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
                            <span className="text-sm-muted text-light bg-info label">
                              150 Applicants
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
                            <a
                              href="#"
                              className="rounded btn-md text-success bg-light-success px-3"
                            >
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
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <div className="py-3 text-center">© 2015 - 2023 Job Stock® Themezhub.</div>
        </div>
      </div>
    </>
  );
}

DashboardContent.propTypes = {};

export default DashboardContent;

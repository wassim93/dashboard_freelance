import React from "react";
import PropTypes from "prop-types";
import "./header.styles.scss";
import Icon from "../assets/logo.png";

function Header(props) {
  return (
    <div className="header header-light head-fixed">
      <div className="container">
        <nav id="navigation" className="navigation navigation-landscape">
          <div className="nav-header">
            <a className="nav-brand" href="#">
              <img src={Icon} className="logo" alt="" />
            </a>
            <div className="nav-toggle"></div>
            <ul className="mobile_nav dhsbrd">
              <li>
                <div className="btn-group account-drop">
                  <button
                    type="button"
                    className="btn btn-order-by-filt"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fa-regular fa-comments"></i>
                    <span className="noti-status"></span>
                  </button>
                  <div className="dropdown-menu pull-right animated flipInX">
                    <div className="drp_menu_headr bg-primary">
                      <h4>Notifications</h4>
                    </div>
                    <div className="ntf-list-groups">
                      <div className="ntf-list-groups-single">
                        <div className="ntf-list-groups-icon text-purple">
                          <i className="fa-solid fa-house-medical-circle-check"></i>
                        </div>
                        <div className="ntf-list-groups-caption">
                          <p className="small">
                            <strong>Kr. Shaury Preet</strong> Replied Your Message
                          </p>
                        </div>
                      </div>
                      <div className="ntf-list-groups-single">
                        <div className="ntf-list-groups-icon text-warning">
                          <i className="fa-solid fa-envelope"></i>
                        </div>
                        <div className="ntf-list-groups-caption">
                          <p className="small">
                            Mortin Denver Accepted Your Resume{" "}
                            <strong className="text-success">On Job Stock</strong>
                          </p>
                        </div>
                      </div>
                      <div className="ntf-list-groups-single">
                        <div className="ntf-list-groups-icon text-success">
                          <i className="fa-solid fa-sack-dollar"></i>
                        </div>
                        <div className="ntf-list-groups-caption">
                          <p className="small">
                            Your Job #456256 Expired Yesterday <strong>View job</strong>
                          </p>
                        </div>
                      </div>
                      <div className="ntf-list-groups-single">
                        <div className="ntf-list-groups-icon text-danger">
                          <i className="fa-solid fa-comments"></i>
                        </div>
                        <div className="ntf-list-groups-caption">
                          <p className="small">
                            <strong>Daniel kurwa</strong> Has Been Approved Your Resume!.
                          </p>
                        </div>
                      </div>
                      <div className="ntf-list-groups-single">
                        <div className="ntf-list-groups-icon text-info">
                          <i className="fa-solid fa-circle-dollar-to-slot"></i>
                        </div>
                        <div className="ntf-list-groups-caption">
                          <p className="small">
                            Khushi Verma Left A Review On{" "}
                            <strong className="text-danger">Your Message</strong>
                          </p>
                        </div>
                      </div>
                      <div className="ntf-list-groups-single">
                        <a href="#" className="ntf-more">
                          View All Notifications
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="btn-group account-drop">
                  <button
                    type="button"
                    className="btn btn-order-by-filt"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img src="https://placehold.co/500x500" className="img-fluid circle" alt="" />
                  </button>
                  <div className="dropdown-menu pull-right animated flipInX">
                    <div className="drp_menu_headr bg-primary">
                      <h4>Hi, Dhananjay</h4>
                      <div className="drp_menu_headr-right">
                        <button type="button" className="btn btn-whites">
                          Logout
                        </button>
                      </div>
                    </div>
                    <ul>
                      <li>
                        <a href="candidate-dashboard.html">
                          <i className="fa fa-tachometer-alt"></i>Dashboard
                          <span className="notti_coun style-1">4</span>
                        </a>
                      </li>
                      <li>
                        <a href="candidate-profile.html">
                          <i className="fa fa-user-tie"></i>My Profile
                        </a>
                      </li>
                      <li>
                        <a href="candidate-resume.html">
                          <i className="fa fa-file"></i>My Resume
                          <span className="notti_coun style-2">7</span>
                        </a>
                      </li>
                      <li>
                        <a href="candidate-saved-jobs.html">
                          <i className="fa-solid fa-bookmark"></i>Saved Resume
                        </a>
                      </li>
                      <li>
                        <a href="candidate-messages.html">
                          <i className="fa fa-envelope"></i>Messages
                          <span className="notti_coun style-3">3</span>
                        </a>
                      </li>
                      <li>
                        <a href="candidate-change-password.html">
                          <i className="fa fa-unlock-alt"></i>Change Password
                        </a>
                      </li>
                      <li>
                        <a href="candidate-delete-account.html">
                          <i className="fa-solid fa-trash-can"></i>Delete Account
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="nav-menus-wrapper" style={{ transitionProperty: "none" }}>
            <ul className="nav-menu">
              <li className="active">
                <a href="#">
                  Home<span className="submenu-indicator"></span>
                </a>
                <ul className="nav-dropdown nav-submenu">
                  <li>
                    <a className="active" href="index.html">
                      Home Layout 1
                    </a>
                  </li>
                  <li>
                    <a href="home-2.html">Home Layout 2</a>
                  </li>
                  <li>
                    <a href="home-3.html">Home Layout 3</a>
                  </li>
                  <li>
                    <a href="home-4.html">Home Layout 4</a>
                  </li>
                  <li>
                    <a href="home-5.html">Home Layout 5</a>
                  </li>
                  <li>
                    <a href="home-6.html">Home Layout 6</a>
                  </li>
                  <li>
                    <a href="home-7.html">Home Layout 7</a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="#">
                  For Candidate<span className="submenu-indicator"></span>
                </a>
                <ul className="nav-dropdown nav-submenu">
                  <li>
                    <a href="#">
                      Browse Jobs<span className="submenu-indicator"></span>
                    </a>
                    <ul className="nav-dropdown nav-submenu">
                      <li>
                        <a href="grid-style-1.html">Job Grid Style 1</a>
                      </li>
                      <li>
                        <a href="grid-style-2.html">Job Grid Stle 2</a>
                      </li>
                      <li>
                        <a href="grid-style-3.html">Job Grid Style 3</a>
                      </li>
                      <li>
                        <a href="grid-style-4.html">Job Grid Style 4</a>
                      </li>
                      <li>
                        <a href="grid-style-5.html">Job Grid Style 5</a>
                      </li>
                      <li>
                        <a href="full-job-grid-1.html">Grid Full Style 1</a>
                      </li>
                      <li>
                        <a href="full-job-grid-2.html">Grid Full Style 2</a>
                      </li>
                      <li>
                        <a href="list-style-1.html">Job List Style 1</a>
                      </li>
                      <li>
                        <a href="list-style-2.html">Job List Style 2</a>
                      </li>
                      <li>
                        <a href="list-style-2.html">Job List Style 3</a>
                      </li>
                      <li>
                        <a href="full-job-list-1.html">List Full Style 1</a>
                      </li>
                      <li>
                        <a href="full-job-list-2.html">List Full Style 2</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      Browse Map Jobs<span className="submenu-indicator"></span>
                    </a>
                    <ul className="nav-dropdown nav-submenu">
                      <li>
                        <a href="half-map.html">Job Search on Map 01</a>
                      </li>
                      <li>
                        <a href="half-map-2.html">Job Search on Map 02</a>
                      </li>
                      <li>
                        <a href="half-map-3.html">Job Search on Map 03</a>
                      </li>
                      <li>
                        <a href="half-map-list-1.html">Job Search on Map 04</a>
                      </li>
                      <li>
                        <a href="half-map-list-2.html">Job Search on Map 05</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      Browse Candidate<span className="submenu-indicator"></span>
                    </a>
                    <ul className="nav-dropdown nav-submenu">
                      <li>
                        <a href="candidate-grid-1.html">Candidate Grid 01</a>
                      </li>
                      <li>
                        <a href="candidate-grid-2.html">Candidate Grid 02</a>
                      </li>
                      <li>
                        <a href="candidate-list-1.html">Candidate List 01</a>
                      </li>
                      <li>
                        <a href="candidate-list-2.html">Candidate List 02</a>
                      </li>
                      <li>
                        <a href="candidate-half-map.html">Candidate Half Map 01</a>
                      </li>
                      <li>
                        <a href="candidate-half-map-list.html">Candidate Half Map 02</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      Single job Detail<span className="submenu-indicator"></span>
                    </a>
                    <ul className="nav-dropdown nav-submenu">
                      <li>
                        <a href="single-layout-1.html">Single Layout 01</a>
                      </li>
                      <li>
                        <a href="single-layout-2.html">Single Layout 02</a>
                      </li>
                      <li>
                        <a href="single-layout-3.html">Single Layout 03</a>
                      </li>
                      <li>
                        <a href="single-layout-4.html">Single Layout 04</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      Candidate Detail<span className="submenu-indicator"></span>
                    </a>
                    <ul className="nav-dropdown nav-submenu">
                      <li>
                        <a href="candidate-detail.html">Candidate Detail 01</a>
                      </li>
                      <li>
                        <a href="candidate-detail-2.html">Candidate Detail 02</a>
                      </li>
                      <li>
                        <a href="candidate-detail-3.html">Candidate Detail 03</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="advance-search.html">Advance Search</a>
                  </li>
                  <li>
                    <a href="candidate-dashboard.html">
                      Candidate Dashboard<span className="new-update">New</span>
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="#">
                  For Employer<span className="submenu-indicator"></span>
                </a>
                <ul className="nav-dropdown nav-submenu">
                  <li>
                    <a href="#">
                      Explore Employers<span className="submenu-indicator"></span>
                    </a>
                    <ul className="nav-dropdown nav-submenu">
                      <li>
                        <a href="employer-grid-1.html">Search Employers 01</a>
                      </li>
                      <li>
                        <a href="employer-grid-2.html">Search Employers 02</a>
                      </li>
                      <li>
                        <a href="employer-list-1.html">Search List Employers 01</a>
                      </li>
                      <li>
                        <a href="employer-half-map.html">Search Employers Map</a>
                      </li>
                      <li>
                        <a href="employer-half-map-list.html">Search List Employers Map</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      Employer Detail<span className="submenu-indicator"></span>
                    </a>
                    <ul className="nav-dropdown nav-submenu">
                      <li>
                        <a href="employer-detail.html">Employer Detail 01</a>
                      </li>
                      <li>
                        <a href="employer-detail-2.html">Employer Detail 02</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="employer-dashboard.html">
                      Employer Dashboard<span className="new-update">New</span>
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="#">
                  Pages<span className="submenu-indicator"></span>
                </a>
                <ul className="nav-dropdown nav-submenu">
                  <li>
                    <a href="about-us.html">About Us</a>
                  </li>
                  <li>
                    <a href="404.html">Error Page</a>
                  </li>
                  <li>
                    <a href="checkout.html">Checkout</a>
                  </li>
                  <li>
                    <a href="blog.html">Blogs Page</a>
                  </li>
                  <li>
                    <a href="blog-detail.html">Blog Detail</a>
                  </li>
                  <li>
                    <a href="privacy.html">Terms & Privacy</a>
                  </li>
                  <li>
                    <a href="pricing.html">Pricing</a>
                  </li>
                  <li>
                    <a href="faq.html">FAQ's</a>
                  </li>
                  <li>
                    <a href="contact.html">Contacts</a>
                  </li>
                </ul>
              </li>

              <li>
                <a
                  href="https://getbootstrap.com/docs/5.3/getting-started/introduction/"
                  target="_blank"
                >
                  Help
                </a>
              </li>
            </ul>

            <ul className="nav-menu nav-menu-social align-to-right dhsbrd">
              <li>
                <div className="btn-group account-drop">
                  <button
                    type="button"
                    className="btn btn-order-by-filt"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fa-regular fa-comments"></i>
                    <span className="noti-status"></span>
                  </button>
                  <div className="dropdown-menu pull-right animated flipInX">
                    <div className="drp_menu_headr bg-primary">
                      <h4>Notifications</h4>
                    </div>
                    <div className="ntf-list-groups">
                      <div className="ntf-list-groups-single">
                        <div className="ntf-list-groups-icon text-purple">
                          <i className="fa-solid fa-house-medical-circle-check"></i>
                        </div>
                        <div className="ntf-list-groups-caption">
                          <p className="small">
                            <strong>Kr. Shaury Preet</strong> Replied Your Message
                          </p>
                        </div>
                      </div>
                      <div className="ntf-list-groups-single">
                        <div className="ntf-list-groups-icon text-warning">
                          <i className="fa-solid fa-envelope"></i>
                        </div>
                        <div className="ntf-list-groups-caption">
                          <p className="small">
                            Mortin Denver Accepted Your Resume{" "}
                            <strong className="text-success">On Job Stock</strong>
                          </p>
                        </div>
                      </div>
                      <div className="ntf-list-groups-single">
                        <div className="ntf-list-groups-icon text-success">
                          <i className="fa-solid fa-sack-dollar"></i>
                        </div>
                        <div className="ntf-list-groups-caption">
                          <p className="small">
                            Your Job #456256 Expired Yesterday <strong>View job</strong>
                          </p>
                        </div>
                      </div>
                      <div className="ntf-list-groups-single">
                        <div className="ntf-list-groups-icon text-danger">
                          <i className="fa-solid fa-comments"></i>
                        </div>
                        <div className="ntf-list-groups-caption">
                          <p className="small">
                            <strong>Daniel kurwa</strong> Has Been Approved Your Resume!.
                          </p>
                        </div>
                      </div>
                      <div className="ntf-list-groups-single">
                        <div className="ntf-list-groups-icon text-info">
                          <i className="fa-solid fa-circle-dollar-to-slot"></i>
                        </div>
                        <div className="ntf-list-groups-caption">
                          <p className="small">
                            Khushi Verma Left A Review On{" "}
                            <strong className="text-danger">Your Message</strong>
                          </p>
                        </div>
                      </div>
                      <div className="ntf-list-groups-single">
                        <a href="#" className="ntf-more">
                          View All Notifications
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="btn-group account-drop">
                  <button
                    type="button"
                    className="btn btn-order-by-filt"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img src="https://placehold.co/500x500" className="img-fluid circle" alt="" />
                  </button>
                  <div className="dropdown-menu pull-right animated flipInX">
                    <div className="drp_menu_headr bg-primary">
                      <h4>Hi, Dhananjay</h4>
                      <div className="drp_menu_headr-right">
                        <button type="button" className="btn btn-whites">
                          Logout
                        </button>
                      </div>
                    </div>
                    <ul>
                      <li>
                        <a href="candidate-dashboard.html">
                          <i className="fa fa-tachometer-alt"></i>Dashboard
                          <span className="notti_coun style-1">4</span>
                        </a>
                      </li>
                      <li>
                        <a href="candidate-profile.html">
                          <i className="fa fa-user-tie"></i>My Profile
                        </a>
                      </li>
                      <li>
                        <a href="candidate-resume.html">
                          <i className="fa fa-file"></i>My Resume
                          <span className="notti_coun style-2">7</span>
                        </a>
                      </li>
                      <li>
                        <a href="candidate-saved-jobs.html">
                          <i className="fa-solid fa-bookmark"></i>Saved Resume
                        </a>
                      </li>
                      <li>
                        <a href="candidate-messages.html">
                          <i className="fa fa-envelope"></i>Messages
                          <span className="notti_coun style-3">3</span>
                        </a>
                      </li>
                      <li>
                        <a href="candidate-change-password.html">
                          <i className="fa fa-unlock-alt"></i>Change Password
                        </a>
                      </li>
                      <li>
                        <a href="candidate-delete-account.html">
                          <i className="fa-solid fa-trash-can"></i>Delete Account
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="list-buttons ms-2">
                <a href="employer-submit-job.html">
                  <i className="fa-solid fa-cloud-arrow-up me-2"></i>Post Job
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

Header.propTypes = {};

export default Header;

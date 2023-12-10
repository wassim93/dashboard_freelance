import React from "react";
import PropTypes from "prop-types";
import "./datatable.scss";

function Datatable({ items, withActions, DatatableActions, onRowActionClick }) {
  return (
    <div className="row">
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
        <div className="card">
          <div className="card-header">
            <h6 className="mb-0">Recent Posted Jobs</h6>
          </div>
          <div className="card-body">
            <div className="row justify-content-start gx-3 gy-4">
              {items?.map((item, index) => (
                <div key={index} className="col-xl-12 col-lg-12 col-md-12">
                  <div className="jbs-list-box border">
                    <div className="jbs-list-head">
                      <div className="jbs-list-head-thunner">
                        <div className="jbs-list-emp-thumb jbs-verified">
                          <a href="job-detail.html">
                            <figure>
                              <img src={item?.icon} className="img-fluid" alt="" />
                            </figure>
                          </a>
                        </div>
                        <div className="jbs-list-job-caption">
                          <div className="jbs-job-employer-wrap">
                            <span>{item?.employerTitle}</span>
                          </div>
                          <div className="jbs-job-title-wrap">
                            <h4>
                              <a href="job-detail.html">
                                <div className="jbs-job-title">{item?.jobTitle}</div>
                              </a>
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="jbs-list-applied-users">
                        <span className="text-sm-muted text-light bg-warning label">
                          {item?.applicationNumber} Applicants
                        </span>
                      </div>
                      <div className="jbs-list-postedinfo">
                        <p className="m-0 text-sm-muted">
                          <strong>Posted:</strong>
                          <span className="text-success">{item?.postedDate}</span>
                        </p>
                        <p className="m-0 text-sm-muted">
                          <strong>Expired:</strong>
                          <span className="text-danger">{item?.expirationDate}</span>
                        </p>
                      </div>
                      {DatatableActions && (
                        <div className="jbs-list-head-last">
                          {DatatableActions?.map((action, index) => (
                            <React.Fragment key={index}>
                              <a
                                // href="#"
                                role="button"
                                onClick={() => onRowActionClick(action, item)}
                                className={`rounded btn-md ${action?.fontAwesomeIconColor} px-3`}
                              >
                                <i className={action?.fontAwesomeIcon}></i>
                              </a>
                            </React.Fragment>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Datatable.propTypes = {
  items: PropTypes.array.isRequired,
  DatatableActions: PropTypes.array,
  onRowActionClick: PropTypes.func,
};
Datatable.defaultProps = {
  DatatableActions: null,
  onRowActionClick: undefined,
};

export default Datatable;

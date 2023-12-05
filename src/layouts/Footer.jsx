import React from "react";
import PropTypes from "prop-types";
import "./footer.scss";

function Footer(props) {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="py-3 text-center">© 2015 - 2023 Job Stock® Themezhub.</div>
      </div>
    </div>
  );
}

Footer.propTypes = {};

export default Footer;

import React from "react";
var d = new Date();
var currYear = d.getFullYear();

function Footer() {
  return (
    <React.StrictMode>
      <div className="copyright-details">
        <div className="copyright">
          <h3>&copy; {currYear}, Made with ❤️ by Doro Biryani</h3>
        </div>
      </div>
    </React.StrictMode>
  );
}

export default Footer;

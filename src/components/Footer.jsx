import React from "react";

const currentyear = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <p>Copy Right @ {currentyear}</p>
    </footer>
  );
}

export default Footer;

import React from "react";

function Apply() {

  return (
    <div>
      <img src={require("../img/mlh-trust-badge-2021-white.png")} alt="mlh badge" class="mlh" width="120px"/> 
      <h1>APPLY!</h1>
      <div class="apply"><b>apply by filling out the form below! you will get a confirmation of your submission to your email :)</b></div>
      <iframe class="check" src="https://docs.google.com/forms/d/e/1FAIpQLSfPEXpmM1iS5id_6oopEQ2bLtgI3_l_cNSKv9Hogf0MrB29mg/viewform" width="750" height="1000" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
    </div>
  );

}

export default Apply;
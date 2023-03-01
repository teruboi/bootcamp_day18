// importing modules
import React from "react";
import { useSelector } from "react-redux";

// module to show form contents
function ShowContent() {
  // get data from store state
  const data = useSelector((state) => state.form);

  // if data is empty, show nothing
  if (data.length === 0) {
    return null;
  } else {
    // function to display employment status
    const employedStats = () => {
      if (data.employed) return "Employed";
      else return "Unemployed";
    };

    const stats = employedStats();

    // function to display preffered technology
    let tech = "";

    if (data.tech === "be") {
      tech = "Back end";
    } else if (data.tech === "fe") {
      tech = "Front end";
    }
    if (data.tech === "fs") {
      tech = "Fullstack";
    }

    return (
      <>
        <h1 style={{ textAlign: "center" }}>
          {data.firstName} {data.lastName}
        </h1>
        <h3 style={{ textAlign: "center" }}>{stats}</h3>
        <br />

        <div style={{ paddingInline: "400px" }}>
          <h2>
            <strong>Data</strong>
          </h2>
          <h5>
            <strong>Education: </strong>
            {data.education}
          </h5>
          <h5>
            <strong>Expertise: </strong>
            <ul>
              {data.expertise.map((e, i) => {
                return <li key={i}>{e}</li>;
              })}
            </ul>
          </h5>
          <h5>
            <strong>Preferred technology: </strong>
            {tech}
          </h5>
          <h5>
            <strong>Notes: </strong>
            <br></br>
            {data.notes}
          </h5>
        </div>
      </>
    );
  }
}

export default ShowContent;

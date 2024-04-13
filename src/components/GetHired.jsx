import React from "react";
import CommonCards from "./CommonCards";
import advertise from "../assets/HostEventsDone/advertise2.png";
import collab from "../assets/HostEventsDone/collab.png";
import merchandise from "../assets/HostEventsDone/merchandise.png";
import sponsers from "../assets/HostEventsDone/sponsers.png";

const GetHired = () => {
  const images = [
    {
      title: "Advertise",
      subtitle: "",
      image: advertise,
    },
    {
      title: "Connect & Collab",
      subtitle: "",
      image: collab,
    },
    {
      title: "Merchandise",
      subtitle: "",
      image: merchandise,
    },
    {
      title: "Sponsers",
      subtitle: "",
      image: sponsers,
    },
  ];

  return (
    <CommonCards
      images={images}
      heading={"Host Events"}
      content={
        "Work with your dream companies by applying to hiring challenges and full-time & part-time jobs/internships."
      }
      type="hired"
    />
  );
};

export default GetHired;

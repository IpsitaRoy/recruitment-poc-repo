import React, { useContext } from "react";
import RecruiterProfile from "../../components/RecruiterProfile";
import CandidateProfile from "../../components/CandidateProfile";
import "./profile.scss";
import { GlobalContext } from "../../App";

const Profile = () => {
  const status = localStorage.getItem("status");
  return (
    <div className="profile">
      {status === "recruiter" && <RecruiterProfile />}
      {status === "candidate" && <CandidateProfile />}
    </div>
  );
};

export default Profile;
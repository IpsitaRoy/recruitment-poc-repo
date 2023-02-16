import React from "react";
import RecruiterProfile from "../../components/RecruiterProfile";
import CandidateProfile from "../../components/CandidateProfile";
import "./profile.scss";

const Profile = () => {
  return (
    <div className="profile">
      <RecruiterProfile />
      <CandidateProfile />
    </div>
  );
};

export default Profile;
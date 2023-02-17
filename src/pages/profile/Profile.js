import React, { useEffect, useState } from "react";
import RecruiterProfile from "../../components/RecruiterProfile";
import CandidateProfile from "../../components/CandidateProfile";
import "./profile.scss";

const Profile = () => {
  const [status, setStatus] = useState('');
  useEffect(() => {
    setStatus(localStorage.getItem('status'));
  });

  return (
    <div className="profile col-md-5 col-lg-5">
      {status === "recruiter" && <RecruiterProfile />}
      {status === "candidate" && <CandidateProfile />}
    </div>
  );
};

export default Profile;
import React, { useContext } from "react";
import RecruiterProfile from "../../components/RecruiterProfile";
import CandidateProfile from "../../components/CandidateProfile";
import "./profile.scss";
import { GlobalContext } from "../../App";

const Profile = () => {
  const [status, setStatus] = useContext(GlobalContext).status;
  return (
    <div className="profile">
      {status === "Recruiter" && <RecruiterProfile />}
      {status === "Candidate" && <CandidateProfile />}
    </div>
  );
};

export default Profile;
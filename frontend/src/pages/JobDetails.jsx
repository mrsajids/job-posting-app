import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../axiosConfig";

const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);

  useEffect(() => {
    api.get(`/jobs/${id}`)
      .then(res => setJob(res.data))
      .catch(err => console.error("Fetch Error:", err));
  }, [id]);

  if (!job) return <div className="container mt-4">Loading...</div>;

  return (
    <div className="container mt-4">
      <div className="card shadow-sm p-4">
        <h2>{job.title}</h2>
        <h5 className="text-muted">{job.company} – {job.location}</h5>
        <p className="mt-3">{job.description}</p>
        <button className="btn btn-secondary mt-3" onClick={() => navigate("/")}>Back</button>
      </div>
    </div>
  );
};

export default JobDetails;

import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../axiosConfig";

const AddEditJob = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = !!id;

  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    description: "",
  });

  useEffect(() => {
    if (isEdit) {
      api.get(`/jobs/${id}`)
        .then(res => setFormData(res.data))
        .catch(err => console.error("Load Error:", err));
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEdit) {
        await api.put(`/jobs/${id}`, formData);
      } else {
        await api.post("/jobs", formData);
      }
      navigate("/");
    } catch (err) {
      console.error("Submit Error:", err);
    }
  };

  return (
    <div className="container mt-4">
      <div className="card shadow-sm p-4">
        <h5>{isEdit ? "Edit Job" : "Add Job"}</h5>
        <form onSubmit={handleSubmit}>
          {["title", "company", "location"].map(field => (
            <div className="mb-1" key={field}>
              <label className="form-label">{field[0].toUpperCase() + field.slice(1)}</label>
              <input
                required
                className="form-control form-control-sm"
                value={formData[field]}
                onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
              />
            </div>
          ))}
          <div className="mb-1">
            <label className="form-label">Description</label>
            <textarea
              required
              className="form-control form-control-sm"
              rows="2"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />
          </div>
          <button className="btn btn-primary">{isEdit ? "Update" : "Create"}</button>
        </form>
      </div>
    </div>
  );
};

export default AddEditJob;

const JobCard = ({ job, onView, onEdit, onDelete }) => (
    <div className="card mb-3 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">{job.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{job.company} - {job.location}</h6>
        <p className="card-text text-truncate">{job.description}</p>
        <div className="d-flex gap-2">
          <button className="btn btn-primary btn-sm" onClick={() => onView(job.id)}>View</button>
          <button className="btn btn-warning btn-sm" onClick={() => onEdit(job.id)}>Edit</button>
          <button className="btn btn-danger btn-sm" onClick={() => onDelete(job.id)}>Delete</button>
        </div>
      </div>
    </div>
  );
  
  export default JobCard;
  
const TimelineItem = ({ title, date, description, designation }) => {
  return (
    <li className="timeline-item">
      <h4 className="h4 timeline-item-title">{title}</h4>
      <div
        style={{
          display: "flex",
          justifyContent: designation ? "space-between" : "flex-start",
          marginBottom: "8px",
        }}
      >
        {designation && <span>{designation}</span>}
        <span>{date}</span>
      </div>
      <p className="timeline-text">{description}</p>
    </li>
  );
};

export default TimelineItem;

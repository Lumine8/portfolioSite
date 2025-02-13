import "./techCards.scss";
export const TechStackCard = ({ Icon, label }) => {
  return (
    <div className="tech-card">
      <Icon style={{ color: "#bfbfbf", fontSize: "2rem" }} />

      <p className="label">{label}</p>
    </div>
  );
};

const Rating = ({ count }) => {
  return (
    <div className="stars">
      {[...Array(count)].map((x, i) => {
        return <Star key={i} />;
      })}
    </div>
  );
};

const Star = () => {
  return <div className="star">⭐️</div>;
};

export default Rating;

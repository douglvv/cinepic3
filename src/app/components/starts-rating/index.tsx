const StarRating = ({ percentage }: { percentage: number }) => {
  const totalStars = 5;

  const calculateRating = () => {
    return Math.ceil((percentage / 100) * totalStars);
  };

  return (
    <div>
      {[...Array(totalStars)].map((_, index) => {
        const starNumber = index + 1;
        const isFilled = calculateRating() >= starNumber;

        return <span key={index}>{isFilled ? "★" : "☆"}</span>;
      })}
    </div>
  );
};

export default StarRating;

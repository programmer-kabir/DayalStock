const SkeletonCard = ({
  imageHeight = "h-36",
  titleWidth = "w-24",
}) => {
  return (
    <div className="animate-pulse">
      <div className="overflow-hidden rounded-xl bg-gray-100">
        <div className={`${imageHeight} w-full bg-gray-300`} />
      </div>

      <div
        className={`mx-auto mt-4 h-4 ${titleWidth} rounded bg-gray-300`}
      />
    </div>
  );
};

export default SkeletonCard;
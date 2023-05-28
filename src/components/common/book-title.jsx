export function BookTitle({ title, size }) {
  const sizeClasses = {
    small: "text-medium",
    medium: "text-lg",
    large: "text-3xl",
  };
  return (
    <h1
      className={`text-gray-900 ${sizeClasses[size]} title-font font-medium mb-1 m-4`}
    >
      {title}
    </h1>
  );
}
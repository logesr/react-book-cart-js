export function Thumbnail({ url, title, size }) {
  const sizeClasses = {
    "small": "h-20",
    "medium": "h-48",
    "large": ""
  }
  return <img className={`w-full object-contain ${sizeClasses[size]}`} src={url} alt={title}></img>;
}

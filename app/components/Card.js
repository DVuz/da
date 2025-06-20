export default function Card({ title, children, className = '' }) {
  return (
    <div
      className={`bg-white rounded-lg shadow-md p-6 mb-6 border-l-4 border-blue-500 ${className}`}
    >
      {title && <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>}
      <div className="text-gray-700">{children}</div>
    </div>
  );
}

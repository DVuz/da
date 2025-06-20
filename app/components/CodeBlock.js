export default function CodeBlock({ children, language = 'javascript' }) {
  return (
    <div className="bg-gray-900 rounded-lg p-4 my-4 overflow-x-auto">
      <div className="text-sm text-gray-400 mb-2">{language}</div>
      <pre className="text-green-400">
        <code>{children}</code>
      </pre>
    </div>
  );
}

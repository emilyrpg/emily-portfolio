export const NotFound = () => {
  return (
    <section
      className="min-h-dvh flex flex-col items-center justify-center bg-white px-4 text-center"
      aria-label="Page not found"
    >
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Not Found
      </h1>
      <p className="text-gray-600 mb-6">
        You should probably go back to the{" "}
        <a href="/" className="text-blue-500 hover:underline">
          Home Page
        </a>
      </p>
      <pre className="text-gray-600 whitespace-pre-wrap text-left max-w-xs">
        {"/ᐠ｡ꞈ｡ᐟ\\"}
      </pre>
    </section>
  );
};

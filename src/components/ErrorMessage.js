function ErrorMessage({ message }) {
  return (
    <div className="text-red-500 text-center p-4 bg-red-100 rounded">
      Error: {message}
    </div>
  );
}

export default ErrorMessage;

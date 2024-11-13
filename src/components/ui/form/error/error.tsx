// Note: Error component
export type ErrorProps = {
  className?: string;
  errorMessage?: string;
};

export const Error = ({ className, errorMessage }: ErrorProps) => {
  if (!errorMessage) {
    return <></>;
  }

  return (
    <div
      role="alert" //show error message to screen readers
      aria-label={errorMessage} //describe the error message if error , screen reader will read this message
      className={className}
    >
      <span className="text-sm font-semibold text-red-500">{errorMessage}</span>
    </div>
  );
};

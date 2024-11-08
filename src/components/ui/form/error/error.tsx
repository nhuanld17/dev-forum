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
        role="alert"
        aria-label={errorMessage}
        className={className}
      >
        <span className="text-sm font-semibold text-red-500">{errorMessage}</span>
      </div>
    );
  };
  
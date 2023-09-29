const Button = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <button
      className={`${className} rounded-xl px-4 py-2 flex items-center gap-x-3 text-white text-base font-bold font-cairo`}
    >
      {children}
    </button>
  );
};

export default Button;

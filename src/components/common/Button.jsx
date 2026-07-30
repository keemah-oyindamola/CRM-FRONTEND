function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const variants = {
    primary:
      "bg-emerald-600 text-white hover:bg-emerald-700",

    secondary:
      "border border-slate-300 bg-white text-slate-800 hover:bg-slate-100",
  };

  return (
    <button
      {...props}
      className={`rounded-xl px-6 py-3 font-semibold transition-all duration-300 ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
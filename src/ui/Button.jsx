function Button({ children, type = "regular", onClick }) {
  if (type === "regular") return <button>{children}</button>;

  if (type === "toggle")
    return (
      <button
        onClick={onClick}
        className="relative flex items-center gap-2 text-base text-whi transition-all duration-500"
      >
        {children}
      </button>
    );
}

export default Button;

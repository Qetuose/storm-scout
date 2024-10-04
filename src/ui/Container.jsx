function Container({ children }) {
  return (
    <div className="flex flex-col gap-3 rounded-xl bg-lightest p-3">
      {children}
    </div>
  );
}

export default Container;

function Container({ children, gap }) {
  return (
    <div
      className={`flex flex-col gap-${gap} overflow-hidden rounded-xl bg-lightest p-3`}
    >
      {children}
    </div>
  );
}

export default Container;

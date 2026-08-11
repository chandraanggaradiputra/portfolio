function Container({ children, direction, style }) {
  return (
    <div
      className={`flex ${direction} justify-center items-center gap-12 container`}
      style={style}
    >
      {children}
    </div>
  );
}
export default Container;

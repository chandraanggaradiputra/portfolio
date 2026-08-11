interface ContainerProps {
  children: React.ReactNode;
  direction?: "row" | "column";
  style?: React.CSSProperties;
}

const Container: React.FC<ContainerProps> = ({
  children,
  direction = "row",
  style,
}) => {
  return (
    <div
      className={`flex ${direction} justify-center items-center gap-12 container`}
      style={style}
    >
      {children}
    </div>
  );
};
export default Container;

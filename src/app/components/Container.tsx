interface ContainerProps {
  children: React.ReactNode;
  direction?: "flex-row" | "flex-col";
  style?: React.CSSProperties;
}

const Container: React.FC<ContainerProps> = ({
  children,
  direction,
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

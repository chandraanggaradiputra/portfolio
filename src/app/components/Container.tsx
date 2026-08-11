interface ContainerProps {
  children: React.ReactNode;
  direction?: string;
}

const Container: React.FC<ContainerProps> = ({ children, direction }) => {
  return (
    <div
      className={`flex ${direction} justify-center items-center gap-12 container`}
    >
      {children}
    </div>
  );
};
export default Container;

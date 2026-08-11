interface SectionProps {
  children: React.ReactNode;
  direction?: "row" | "column";
  id?: string;
}

const Section: React.FC<SectionProps> = ({
  children,
  direction = "row",
  id,
}) => {
  return (
    <section
      id={id}
      className={`flex ${direction} justify-center items-center gap-6 px-10 py-20 min-h-dvh`}
    >
      {children}
    </section>
  );
};
export default Section;

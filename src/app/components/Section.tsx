interface SectionProps {
  children: React.ReactNode;
  direction?: string;
  id?: string;
}

const Section: React.FC<SectionProps> = ({ children, direction, id }) => {
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

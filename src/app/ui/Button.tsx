import Link from "next/link";
import Image from "next/image";

interface ButtonProps {
  href: string;
  target?: string;
  rel?: string;
  CTA?: string;
  logo?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  href,
  target,
  rel,
  CTA,
  logo,
  children,
}) => {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded font-bold text-white transition-all duration-300 ease-in-out">
      <Link href={href} target={target} rel={rel}>
        <Image
          src={logo}
          alt="Logo"
          width={20}
          height={20}
          className="inline-block mr-2"
        />
        {CTA || children}
      </Link>
    </button>
  );
};
export default Button;

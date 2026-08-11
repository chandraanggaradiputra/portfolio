import Image from "next/image";
import Link from "next/link";

function Card({ title, description, imageSrc, linkHref, CTA, rel, target }) {
  return (
    <li className="flex flex-col gap-4 bg-white dark:bg-gray-800 shadow-lg p-6 rounded-2xl w-full">
      <div className="flex flex-col items-center gap-6 w-full grow">
        <Image
          src={imageSrc}
          alt={title}
          width={400}
          height={400}
          className="rounded-lg object-fill aspect-4/3"
        />
        <h3 className="font-bold text-xl grow">{title}</h3>
        <p className="opacity-80 text-md sm:text-left text-center tracking-wide grow">
          {description}
        </p>
        <Link
          href={linkHref}
          className="bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded font-bold text-white transition-colors duration-300 ease-in-out"
          rel={rel}
          target={target}
        >
          {CTA || "Learn More"}
        </Link>
      </div>
    </li>
  );
}
export default Card;

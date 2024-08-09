import { Project } from "@/common/types";
import Image from "next/image";

export default function ProjectTile({
  url,
  title,
  description,
  imageSrc,
  githubUrl,
}: Project) {
  return (
    <div className="cursor-pointer border rounded-md md:w-full scale-100 hover:scale-[1.02] active:scale-[0.97] motion-safe:transform-gpu transition duration-100 motion-reduce:hover:scale-100overflow-hidden h-full flex flex-col">
      {imageSrc && (
        <Image
          src={imageSrc}
          alt={description}
          className="border-b md:h-[180px] object-cover object-center"
          width={430}
          height={180}
          sizes="(min-width: 768px) 347px, 192px"
        />
      )}
      <div className="flex flex-col flex-grow justify-between p-4">
        <div className="flex flex-col items-center">
          <h3 className="text-xl mb-2 leading-snug font-bold border-2 border-black">
            <p className="mr-3 ml-3">{title}</p>
          </h3>
          <p className="text-md leading-relaxed mb-4 mr-2 ml-2">
            {description}
          </p>
        </div>
        <div className="flex justify-center space-x-4 mt-auto">
          {url && (
            <a
              href={url}
              className="font-slim text-black"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              className="font-slim text-black"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

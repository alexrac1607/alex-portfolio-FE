interface ProjectTileProps {
  url: string;
  description: string;
  imageSrc: string; // If you want to include an image for the project
}

export default function ProjectTile({
  url,
  description,
  imageSrc,
}: ProjectTileProps) {
  return (
    <div className="border rounded-lg shadow-lg p-4 m-4 max-w-sm">
      {imageSrc && (
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img
            src={imageSrc}
            alt={description}
            className="w-full h-48 object-cover rounded-md mb-4"
          />
        </a>
      )}
      <p className="text-lg font-semibold mb-2">{description}</p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        View Project
      </a>
    </div>
  );
}

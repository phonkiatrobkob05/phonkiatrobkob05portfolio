function Certifications({ title, description, image, link }) {
  return (
    <div className="p-4 overflow-visible"> {/* ✅ Wrapper with padding and overflow fix */}
      <div className="card shadow-md hover:shadow-lg transition duration-300 hover:cursor-pointer transform hover:scale-105 origin-center z-10 relative p-4">
        <figure className="flex justify-center">
          <img src={image} alt={title} className="h-48 object-cover" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-sm font-semibold">{title}</h2>
          <p className="text-sm text-gray-600">{description}</p>
          <div className="card-actions justify-end mt-2">
            <a
              className="hover:bg-amber-400"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-primary hover:cursor-pointer">
                View Project
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certifications;

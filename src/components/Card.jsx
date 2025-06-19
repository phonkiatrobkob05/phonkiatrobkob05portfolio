function Card({ title, description, image, link }) {
  return (
    <div className="card w-96 shadow-md hover:shadow-lg transition duration-300 hover:cursor-pointer transform hover:scale-105">
      <figure>
        <img src={image} alt={title} className="h-48 w-full object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-xl font-semibold">{title}</h2>
        <p className="text-sm text-gray-600">{description}</p>
        <div className="card-actions justify-end mt-2">
          <a className="hover:bg-amber-400 " href={link} target="_blank" rel="noopener noreferrer">
            <button className="btn btn-primary hover:cursor-pointer">View Project</button>
            <img src="" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
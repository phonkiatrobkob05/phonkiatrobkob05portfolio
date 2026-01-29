function Card({ title, description, image, link, link2, link3, linkimg, linkimg2, linkimg3 }) {
  return (
    <div className="p-4"> {/* ✅ Wrapper with padding and overflow fix */}
      <div className="card w-full shadow-md hover:shadow-lg transition duration-300 hover:cursor-pointer transform hover:scale-105 origin-center z-10 relative p-4">
        <figure className="flex justify-center">
          <img src={image} alt={title} className="h-48 object-cover" />
        </figure>
        <div className="card-body pt-4 ">
          <h2 className="card-title text-sm font-semibold">{title}</h2>
          <p className="text-sm text-gray-600">{description}</p>
          <div className="flex gap-2">
            <div className="card-actions justify-end mt-2">
              <a
                className="hover:bg-amber-400"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="w-6 rounded-full hover:bg-gray-200 transition transform duration-300" src={linkimg} alt="" />
              </a>
            </div>
            <div className="card-actions justify-end mt-2">
              <a
                className="hover:bg-amber-400"
                href={link2}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="w-6 rounded-full hover:bg-gray-200 transition transform duration-300" src={linkimg2} alt="" />
              </a>
            </div>
            <div className="card-actions justify-end mt-2">
              <a
                className="hover:bg-amber-400"
                href={link3}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="w-6 rounded-full hover:bg-gray-200 transition transform duration-300" src={linkimg3} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
import { Link } from "react-router-dom";

const Juice = ({ juice }) => {
  const { name, photo, category, _id } = juice;
  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/juices/${id}`, {
      method: "DELETE",
    }).then(res =>res.json()).then(data=>{
        console.log(data);
    })
  };
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={photo}
            alt="Shoes"
            className="rounded-xl w-full h-64 object-cover"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{category}</p>
          <div className="card-actions">
            <Link to={`updateJuice/${_id}`} className="btn btn-primary">
              Update
            </Link>
            <button
              onClick={() => {
                handleDelete(_id);
              }}
              className="btn btn-primary"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Juice;

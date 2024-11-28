const AddJuice = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const category = form.get("category");
    const photo = form.get("photo");
    const newJuice = { name, category, photo };
    console.log(newJuice);
    fetch("http://localhost:5000/juices", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newJuice),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Add New Juice</h2>
      <form onSubmit={handleSubmit}>
        {/* Juice Name */}
        <div className="mb-4">
          <label
            htmlFor="juiceName"
            className="block text-sm font-medium text-gray-700"
          >
            Juice Name
          </label>
          <input
            type="text"
            name="name"
            id="juiceName"
            className="input input-bordered w-full mt-1"
            required
          />
        </div>
        {/* Juice category */}
        <div className="mb-4">
          <label
            htmlFor="juiceName"
            className="block text-sm font-medium text-gray-700"
          >
            Juice Category
          </label>
          <input
            name="category"
            type="text"
            id="juiceName"
            className="input input-bordered w-full mt-1"
            required
          />
        </div>
        {/* Juice Photo */}
        <div className="mb-4">
          <label
            htmlFor="juiceName"
            className="block text-sm font-medium text-gray-700"
          >
            Photo URL
          </label>
          <input
            name="photo"
            type="text"
            id="juiceName"
            className="input input-bordered w-full mt-1"
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary w-full">
          Add Juice
        </button>
      </form>
    </div>
  );
};

export default AddJuice;

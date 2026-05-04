import { useEffect, useState } from "react";
import axios from "../api/axios";

export default function Admin() {
  const [caseStudies, setCaseStudies] = useState([]);
  const [form, setForm] = useState({
    title: "",
    category: "",
    description: "",
    result: "",
    image: "",
  });

  // Fetch data
  const fetchData = async () => {
    const res = await axios.get("/case-studies");
    setCaseStudies(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Handle input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Submit
const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append("title", form.title);
  formData.append("category", form.category);
  formData.append("description", form.description);
  formData.append("result", form.result);
  formData.append("image", form.image);

  await axios.post("/case-studies", formData);

  fetchData();
};

  // Delete
  const handleDelete = async (id) => {
    await axios.delete(`/case-studies/${id}`);
    fetchData();
  };

  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl mb-4">Admin Dashboard</h1>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-2 mb-6">
        <input name="title" placeholder="Title" onChange={handleChange} value={form.title} className="w-full p-2 bg-gray-800" />
        <input name="category" placeholder="Category" onChange={handleChange} value={form.category} className="w-full p-2 bg-gray-800" />
        <input name="description" placeholder="Description" onChange={handleChange} value={form.description} className="w-full p-2 bg-gray-800" />
        <input name="result" placeholder="Result" onChange={handleChange} value={form.result} className="w-full p-2 bg-gray-800" />
        <input type="file" name="image" onChange={(e) => setForm({...form, image: e.target.files[0]})} />
        <button className="bg-blue-500 px-4 py-2">Add Case Study</button>


        {/* Client logos */}
        <input type="text" name="name" placeholder="Client Name" />
        <input type="file" name="logo" />
        <button>Add Client</button>
      </form>

      {/* List */}
      <div className="space-y-4">
        {caseStudies.map((item) => (
          <div key={item._id} className="bg-gray-900 p-4">
            <h2 className="text-lg">{item.title}</h2>
            <p>{item.description}</p>
            <button
              onClick={() => handleDelete(item._id)}
              className="bg-red-500 px-3 py-1 mt-2"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
import {
  useEffect,
  useState,
} from "react";

import axios from "../../api/axios";

import {
  Plus,
  Trash2,
  ExternalLink,
  LayoutTemplate,
  Pencil,
} from "lucide-react";

export default function Templates() {

  const [templates, setTemplates] =
    useState([]);

  const [loading, setLoading] =
    useState(false);

  const [uploading, setUploading] =
    useState(false);

  const [editingId, setEditingId] =
  useState(null);

  const token =
    localStorage.getItem(
      "adminToken"
    );

  const categories = [
    "Corporate",
    "Restaurant",
    "Real Estate",
    "Construction",
    "Medical",
    "Ecommerce",
    "Education",
    "Portfolio",
  ];

  const techOptions = [
    "React",
    "Next.js",
    "Tailwind",
    "Node.js",
    "MongoDB",
    "Express",
    "Firebase",
    "Stripe",
    "Cloudinary",
    "Framer Motion",
  ];

  const featureOptions = [
    "Responsive",
    "SEO Optimized",
    "Admin Dashboard",
    "Payment Integration",
    "Authentication",
    "Analytics",
    "Dark Mode",
    "WhatsApp Integration",
  ];

  const [formData, setFormData] =
    useState({
      title: "",
      category: "Corporate",
      shortDescription: "",
      thumbnail: "",
      price: "",
      setupPrice: "",
      demoUrl: "",
      technologies: [],
      features: [],
      featured: false,
      popular: false,
      status: "published",
    });

  /* =========================
     FETCH
  ========================== */

  const fetchTemplates =
    async () => {

      try {

        const res =
          await axios.get(
            "/templates"
          );

        setTemplates(
          res.data
        );

      } catch (error) {

        console.log(error);
      }
    };

  useEffect(() => {
    fetchTemplates();
  }, []);

  /* =========================
     INPUT CHANGE
  ========================== */

  const handleChange =
    (e) => {

      const {
        name,
        value,
        type,
        checked,
      } = e.target;

      setFormData({
        ...formData,

        [name]:
          type === "checkbox"
            ? checked
            : value,
      });
    };

  /* =========================
     MULTI SELECT
  ========================== */

  const toggleArrayValue =
    (field, value) => {

      const exists =
        formData[field].includes(
          value
        );

      setFormData({
        ...formData,

        [field]: exists
          ? formData[field].filter(
              (item) =>
                item !== value
            )
          : [
              ...formData[field],
              value,
            ],
      });
    };

  /* =========================
     CLOUDINARY UPLOAD
  ========================== */

  const uploadThumbnail =
    async (file) => {

      try {

        setUploading(true);

        const data =
          new FormData();

        data.append(
          "file",
          file
        );

        data.append(
          "upload_preset",
          "nova_unsigned"
        );

        const res =
          await fetch(
            "https://api.cloudinary.com/v1_1/diszilwhc/image/upload",
            {
              method: "POST",
              body: data,
            }
          );

const uploaded =
  await res.json();

if (uploaded.secure_url) {
  setFormData((prev) => ({
    ...prev,
    thumbnail:
      uploaded.secure_url,
  }));
}

      } catch (error) {

        console.log(error);

      } finally {

        setUploading(false);
      }
    };

  /* =========================
     CREATE
  ========================== */
/* =========================
   RESET FORM
========================== */

const resetForm = () => {

  setEditingId(null);

  setFormData({
    title: "",
    category: "Corporate",
    shortDescription: "",
    thumbnail: "",
    price: "",
    setupPrice: "",
    demoUrl: "",
    technologies: [],
    features: [],
    featured: false,
    popular: false,
    status: "published",
  });
};

/* =========================
   CREATE / UPDATE
========================== */

const handleSubmit =
  async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      const payload = {

        ...formData,

      };

      if (editingId) {

        await axios.put(
          `/templates/${editingId}`,
          payload,
          {
            headers: {
              Authorization:
                `Bearer ${token}`,
            },
          }
        );

      } else {

        await axios.post(
          "/templates",
          payload,
          {
            headers: {
              Authorization:
                `Bearer ${token}`,
            },
          }
        );
      }

      resetForm();

      await fetchTemplates();

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);
    }
  };


  /* =========================
     DELETE
  ========================== */

 const deleteTemplate =
  async (id) => {

    const confirmed =
      window.confirm(
        "Delete this template?"
      );

    if (!confirmed) return;

    try {

      await axios.delete(
        `/templates/${id}`,
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

      await fetchTemplates();

    } catch (error) {

      console.log(error);
    }
  };


  const handleEdit =
  (template) => {

    setEditingId(
      template._id
    );

    setFormData({
      title: template.title,
      category: template.category,
      shortDescription:
        template.shortDescription,
      thumbnail:
        template.thumbnail,
      price: template.price,
      setupPrice:
        template.setupPrice,
      demoUrl:
        template.demoUrl,
      technologies:
        template.technologies || [],
      features:
        template.features || [],
      featured:
        template.featured,
      popular:
        template.popular,
      status:
        template.status,
    });
  };

  return (
    <section>

      {/* TOP */}

      <div
        className="
          flex
          items-center
          justify-between
          mb-6
        "
      >

        <div>

          <h1
            className="
              text-xl
              font-semibold
            "
          >
            Templates
          </h1>

          <p
            className="
              text-sm
              text-gray-500
              mt-1
            "
          >
            Manage deployment-ready systems
          </p>

        </div>

        <div
          className="
            px-4 py-2
            rounded-2xl
            border border-white/10
            bg-white/[0.03]
            text-sm
          "
        >
          {templates.length} Templates
        </div>

      </div>

      {/* FORM */}

      <form
        onSubmit={handleSubmit}
        className="
          rounded-[28px]
          border border-white/10
          bg-white/[0.03]
          p-6
          mb-8
        "
      >

        <div
          className="
            grid
            md:grid-cols-2
            gap-4
          "
        >

          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Template Title"
            className="admin-input"
          />

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="admin-input"
          >

            {categories.map(
              (item) => (

                <option
                  key={item}
                  value={item}
                >
                  {item}
                </option>
              )
            )}

          </select>

          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Template Price"
            className="admin-input"
          />

          <input
            type="text"
            name="setupPrice"
            value={formData.setupPrice}
            onChange={handleChange}
            placeholder="Setup Price"
            className="admin-input"
          />

        </div>

        {/* DESCRIPTION */}

        <textarea
          name="shortDescription"
          value={
            formData.shortDescription
          }
          onChange={handleChange}
          placeholder="Short Description"
          className="
            admin-input
            mt-4
            min-h-[100px]
          "
        />

        {/* THUMBNAIL */}

        <div className="mt-4">

          <label
            className="
              text-sm
              text-gray-400
              block
              mb-2
            "
          >
            Thumbnail
          </label>

          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
  const file = e.target.files?.[0];

  if (file) {
    uploadThumbnail(file);
  }
}}
            className="admin-input"
          />

          {uploading && (
            <p className="text-xs text-blue-400 mt-2">
              Uploading image...
            </p>
          )}

          {formData.thumbnail && (

            <img
              src={formData.thumbnail}
              alt=""
              className="
                h-24
                rounded-2xl
                mt-4
                object-cover
              "
            />
          )}

        </div>

        {/* DEMO URL */}

        <input
          type="text"
          name="demoUrl"
          value={formData.demoUrl}
          onChange={handleChange}
          placeholder="https://demo.com"
          className="admin-input mt-4"
        />

        {/* TECH STACK */}

        <div className="mt-6">

          <p className="text-sm mb-3 text-gray-400">
            Tech Stack
          </p>

          <div className="flex flex-wrap gap-2">

            {techOptions.map(
              (tech) => (

                <button
                  type="button"
                  key={tech}
                  onClick={() =>
                    toggleArrayValue(
                      "technologies",
                      tech
                    )
                  }
                  className={`
                    px-4 py-2
                    rounded-full
                    text-xs
                    border
                    transition

                    ${
                      formData.technologies.includes(
                        tech
                      )
                        ? `
                          border-blue-500/30
                          bg-blue-500/10
                          text-white
                        `
                        : `
                          border-white/10
                          text-gray-400
                        `
                    }
                  `}
                >
                  {tech}
                </button>
              )
            )}

          </div>

        </div>

        {/* FEATURES */}

        <div className="mt-6">

          <p className="text-sm mb-3 text-gray-400">
            Features
          </p>

          <div className="flex flex-wrap gap-2">

            {featureOptions.map(
              (feature) => (

                <button
                  type="button"
                  key={feature}
                  onClick={() =>
                    toggleArrayValue(
                      "features",
                      feature
                    )
                  }
                  className={`
                    px-4 py-2
                    rounded-full
                    text-xs
                    border
                    transition

                    ${
                      formData.features.includes(
                        feature
                      )
                        ? `
                          border-blue-500/30
                          bg-blue-500/10
                          text-white
                        `
                        : `
                          border-white/10
                          text-gray-400
                        `
                    }
                  `}
                >
                  {feature}
                </button>
              )
            )}

          </div>

        </div>

        {/* TOGGLES */}

        <div
          className="
            flex
            items-center
            gap-6
            mt-6
          "
        >

          <label className="flex items-center gap-2 text-sm">

            <input
              type="checkbox"
              name="featured"
              checked={
                formData.featured
              }
              onChange={handleChange}
            />

            Featured

          </label>

          <label className="flex items-center gap-2 text-sm">

            <input
              type="checkbox"
              name="popular"
              checked={
                formData.popular
              }
              onChange={handleChange}
            />

            Popular

          </label>

        </div>

        {/* SUBMIT */}

        <button
          type="submit"
          disabled={
            loading || uploading
          }
          className="
            mt-6
            h-12
            px-6
            rounded-2xl
            bg-blue-600
            hover:bg-blue-500
            transition
            text-sm
            font-medium
            flex
            items-center
            gap-2
          "
        >

         {
  editingId
    ? <Pencil size={16} />
    : <Plus size={16} />
}

      {
  loading
    ? editingId
      ? "Updating..."
      : "Creating..."
    : editingId
      ? "Update Template"
      : "Create Template"
}

        </button>
        {
  editingId && (

    <button
      type="button"
      onClick={resetForm}
      className="
        mt-3
        ml-3
        h-12
        px-6
        rounded-2xl
        border
        border-white/10
        text-sm
      "
    >
      Cancel Edit
    </button>

  )
}

      </form>

      {/* GRID */}

      <div
        className="
          grid
          lg:grid-cols-3
          gap-5
        "
      >

        {templates.map(
          (template) => (

            <div
              key={template._id}
              className="
                rounded-[24px]
                overflow-hidden
                border border-white/10
                bg-white/[0.03]
              "
            >

              <div className="h-[180px] overflow-hidden">

                <img
                  src={template.thumbnail}
                  alt={template.title}
                  className="
                    w-full
                    h-full
                    object-cover
                  "
                />

              </div>

              <div className="p-4">

                <div
                  className="
                    flex
                    items-start
                    justify-between
                  "
                >

                  <div>

                    <p className="text-xs text-blue-400 mb-1">
                      {template.category}
                    </p>

                    <h2 className="font-semibold">
                      {template.title}
                    </h2>

                  </div>

                  <LayoutTemplate
                    size={16}
                    className="text-gray-500"
                  />

                </div>

                <p
                  className="
                    mt-3
                    text-sm
                    text-gray-400
                  "
                >
                  {
                    template.shortDescription
                  }
                </p>

                <div
                  className="
                    flex
                    items-center
                    justify-between
                    mt-5
                  "
                >

                  <h3 className="font-bold">
                    {template.price}
                  </h3>

             <div className="flex gap-2">

  <a
    href={template.demoUrl}
    target="_blank"
    rel="noreferrer"
    className="
      w-9 h-9
      rounded-xl
      border border-white/10
      flex items-center
      justify-center
    "
  >
    <ExternalLink size={14} />
  </a>

  <button
      type="button"
  onClick={() =>
    handleEdit(template)
  }
    className="
      w-9 h-9
      rounded-xl
      border border-blue-500/20
      text-blue-400
      flex items-center
      justify-center
    "
  >
    <Pencil size={14} />
  </button>

  <button
  type="button"
  onClick={() =>
    deleteTemplate(
      template._id
    )
  }
    className="
      w-9 h-9
      rounded-xl
      border border-red-500/20
      text-red-400
      flex items-center
      justify-center
    "
  >
    <Trash2 size={14} />
  </button>

</div>

                </div>

              </div>

            </div>
          )
        )}

      </div>

    </section>
  );
}
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
  UploadCloud,
} from "lucide-react";

export default function Templates() {

  const [templates, setTemplates] =
    useState([]);

  const [loading, setLoading] =
    useState(false);

  const [uploading, setUploading] =
    useState(false);

  const [techInput, setTechInput] =
    useState("");

  const [featureInput, setFeatureInput] =
    useState("");

  const [pageInput, setPageInput] =
    useState("");

  const [formData, setFormData] =
    useState({
      title: "",
      slug: "",

      category: "Corporate",

      shortDescription: "",

      thumbnail: "",

      price: "",
      setupPrice: "",

      demoUrl: "",

      technologies: [],

      features: [],

      pagesIncluded: [],

      featured: false,
      popular: false,

      status: "published",
    });

  const token =
    localStorage.getItem(
      "adminToken"
    );

  /* =========================
     CATEGORY OPTIONS
  ========================== */

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
     SLUG GENERATOR
  ========================== */

  const generateSlug =
    (text) => {

      return text
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, "");
    };

  /* =========================
     HANDLE CHANGE
  ========================== */

  const handleChange =
    (e) => {

      const {
        name,
        value,
        type,
        checked,
      } = e.target;

      if (
        name === "title"
      ) {

        setFormData({
          ...formData,
          title: value,
          slug:
            generateSlug(value),
        });

        return;
      }

      setFormData({
        ...formData,

        [name]:
          type === "checkbox"
            ? checked
            : value,
      });
    };

  /* =========================
     CLOUDINARY UPLOAD
  ========================== */

  const handleThumbnailUpload =
    async (e) => {

      const file =
        e.target.files[0];

      if (!file) return;

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
          "YOUR_UPLOAD_PRESET"
        );

        const res =
          await fetch(
            "https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload",
            {
              method: "POST",
              body: data,
            }
          );

        const uploaded =
          await res.json();

        setFormData({
          ...formData,
          thumbnail:
            uploaded.secure_url,
        });

      } catch (error) {

        console.log(error);

      } finally {

        setUploading(false);
      }
    };

  /* =========================
     ADD TAG ITEMS
  ========================== */

  const addTechnology =
    () => {

      if (
        !techInput.trim()
      ) return;

      setFormData({
        ...formData,

        technologies: [
          ...formData.technologies,
          techInput,
        ],
      });

      setTechInput("");
    };

  const addFeature =
    () => {

      if (
        !featureInput.trim()
      ) return;

      setFormData({
        ...formData,

        features: [
          ...formData.features,
          featureInput,
        ],
      });

      setFeatureInput("");
    };

  const addPage =
    () => {

      if (
        !pageInput.trim()
      ) return;

      setFormData({
        ...formData,

        pagesIncluded: [
          ...formData.pagesIncluded,
          pageInput,
        ],
      });

      setPageInput("");
    };

  /* =========================
     REMOVE TAG
  ========================== */

  const removeTag =
    (
      field,
      index
    ) => {

      const updated =
        [...formData[field]];

      updated.splice(
        index,
        1
      );

      setFormData({
        ...formData,
        [field]: updated,
      });
    };

  /* =========================
     CREATE TEMPLATE
  ========================== */

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        setLoading(true);

        await axios.post(
          "/templates",
          formData,
          {
            headers: {
              Authorization:
                `Bearer ${token}`,
            },
          }
        );

        setFormData({
          title: "",
          slug: "",
          category: "Corporate",

          shortDescription: "",

          thumbnail: "",

          price: "",
          setupPrice: "",

          demoUrl: "",

          technologies: [],

          features: [],

          pagesIncluded: [],

          featured: false,
          popular: false,

          status: "published",
        });

        fetchTemplates();

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

        fetchTemplates();

      } catch (error) {

        console.log(error);
      }
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
              text-xs
              text-gray-400
              mt-1
            "
          >
            Premium system deployments
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

          {/* TITLE */}

          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Template Title"
            className="admin-input"
          />

          {/* CATEGORY */}

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="admin-input"
          >

            {categories.map(
              (cat) => (

                <option
                  key={cat}
                  value={cat}
                >
                  {cat}
                </option>
              )
            )}

          </select>

          {/* PRICE */}

          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Template Price"
            className="admin-input"
          />

          {/* SETUP PRICE */}

          <input
            type="text"
            name="setupPrice"
            value={formData.setupPrice}
            onChange={handleChange}
            placeholder="Setup Price"
            className="admin-input"
          />

        </div>

        {/* SLUG */}

        <div
          className="
            mt-4
            text-xs
            text-gray-500
          "
        >
          Slug:
          {" "}
          {formData.slug}
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
            min-h-[110px]
          "
        />

        {/* DEMO URL */}

        <input
          type="text"
          name="demoUrl"
          value={formData.demoUrl}
          onChange={handleChange}
          placeholder="Demo URL"
          className="admin-input mt-4"
        />

        {/* THUMBNAIL */}

        <div
          className="
            mt-5
            rounded-2xl
            border border-dashed border-white/10
            p-5
          "
        >

          <label
            className="
              flex
              items-center
              gap-3
              cursor-pointer
            "
          >

            <UploadCloud
              size={18}
            />

            <span
              className="
                text-sm
                text-gray-300
              "
            >
              {
                uploading
                  ? "Uploading..."
                  : "Upload Thumbnail"
              }
            </span>

            <input
              type="file"
              hidden
              onChange={
                handleThumbnailUpload
              }
            />

          </label>

          {formData.thumbnail && (

            <img
              src={
                formData.thumbnail
              }

              alt=""

              className="
                mt-5
                h-40
                w-full
                object-cover
                rounded-2xl
              "
            />
          )}

        </div>

        {/* TECH STACK */}

        <div className="mt-5">

          <p
            className="
              text-sm
              mb-3
            "
          >
            Technologies
          </p>

          <div
            className="
              flex
              gap-3
            "
          >

            <input
              value={techInput}
              onChange={(e) =>
                setTechInput(
                  e.target.value
                )
              }

              placeholder="React"

              className="admin-input"
            />

            <button
              type="button"
              onClick={
                addTechnology
              }

              className="
                px-5
                rounded-2xl
                bg-blue-600
                text-sm
              "
            >
              Add
            </button>

          </div>

          <div
            className="
              flex
              flex-wrap
              gap-2
              mt-4
            "
          >

            {formData.technologies.map(
              (
                item,
                index
              ) => (

                <div
                  key={index}

                  className="
                    px-3 py-1
                    rounded-full
                    bg-white/[0.05]
                    border border-white/10
                    text-xs
                    flex
                    items-center
                    gap-2
                  "
                >

                  {item}

                  <button
                    type="button"

                    onClick={() =>
                      removeTag(
                        "technologies",
                        index
                      )
                    }
                  >
                    ×
                  </button>

                </div>
              )
            )}

          </div>

        </div>

        {/* FEATURES */}

        <div className="mt-5">

          <p
            className="
              text-sm
              mb-3
            "
          >
            Features
          </p>

          <div
            className="
              flex
              gap-3
            "
          >

            <input
              value={featureInput}
              onChange={(e) =>
                setFeatureInput(
                  e.target.value
                )
              }

              placeholder="SEO Optimized"

              className="admin-input"
            />

            <button
              type="button"
              onClick={
                addFeature
              }

              className="
                px-5
                rounded-2xl
                bg-blue-600
                text-sm
              "
            >
              Add
            </button>

          </div>

        </div>

        {/* PAGES INCLUDED */}

        <div className="mt-5">

          <p
            className="
              text-sm
              mb-3
            "
          >
            Pages Included
          </p>

          <div
            className="
              flex
              gap-3
            "
          >

            <input
              value={pageInput}
              onChange={(e) =>
                setPageInput(
                  e.target.value
                )
              }

              placeholder="Homepage"

              className="admin-input"
            />

            <button
              type="button"
              onClick={addPage}
              className="
                px-5
                rounded-2xl
                bg-blue-600
                text-sm
              "
            >
              Add
            </button>

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

          <label
            className="
              flex
              items-center
              gap-2
              text-sm
            "
          >

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

          <label
            className="
              flex
              items-center
              gap-2
              text-sm
            "
          >

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

        {/* BUTTON */}

        <button
          type="submit"

          disabled={loading}

          className="
            mt-6
            h-11
            px-5
            rounded-2xl
            bg-blue-600
            hover:bg-blue-500
            transition
            text-sm
            flex
            items-center
            gap-2
          "
        >

          <Plus size={15} />

          {
            loading
              ? "Creating..."
              : "Create Template"
          }

        </button>

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
                rounded-[26px]
                overflow-hidden
                border border-white/10
                bg-white/[0.03]
              "
            >

              {/* IMAGE */}

              <div
                className="
                  relative
                  h-[190px]
                "
              >

                <img
                  src={
                    template.thumbnail
                  }

                  alt={
                    template.title
                  }

                  className="
                    w-full
                    h-full
                    object-cover
                  "
                />

              </div>

              {/* CONTENT */}

              <div className="p-4">

                <div
                  className="
                    flex
                    items-start
                    justify-between
                  "
                >

                  <div>

                    <p
                      className="
                        text-[10px]
                        uppercase
                        tracking-[0.2em]
                        text-blue-400
                        mb-2
                      "
                    >
                      {
                        template.category
                      }
                    </p>

                    <h2
                      className="
                        text-lg
                        font-semibold
                      "
                    >
                      {
                        template.title
                      }
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
                    text-xs
                    text-gray-400
                    leading-relaxed
                  "
                >
                  {
                    template.shortDescription
                  }
                </p>

                {/* TECH */}

                <div
                  className="
                    flex
                    flex-wrap
                    gap-2
                    mt-4
                  "
                >

                  {template.technologies?.slice(
                    0,
                    4
                  ).map(
                    (
                      tech,
                      index
                    ) => (

                      <div
                        key={index}

                        className="
                          px-2 py-1
                          rounded-full
                          bg-white/[0.05]
                          border border-white/10
                          text-[10px]
                        "
                      >
                        {tech}
                      </div>
                    )
                  )}

                </div>

                {/* BOTTOM */}

                <div
                  className="
                    flex
                    items-center
                    justify-between
                    mt-5
                  "
                >

                  <div>

                    <p
                      className="
                        text-[10px]
                        text-gray-500
                      "
                    >
                      Template
                    </p>

                    <h3
                      className="
                        text-base
                        font-semibold
                      "
                    >
                      {
                        template.price
                      }
                    </h3>

                  </div>

                  <div
                    className="
                      flex
                      items-center
                      gap-2
                    "
                  >

                    <a
                      href={
                        template.demoUrl
                      }

                      target="_blank"

                      rel="noreferrer"

                      className="
                        w-9
                        h-9
                        rounded-xl
                        border border-white/10
                        flex
                        items-center
                        justify-center
                      "
                    >
                      <ExternalLink
                        size={14}
                      />
                    </a>

                    <button
                      onClick={() =>
                        deleteTemplate(
                          template._id
                        )
                      }

                      className="
                        w-9
                        h-9
                        rounded-xl
                        border border-red-500/20
                        text-red-400
                        flex
                        items-center
                        justify-center
                      "
                    >
                      <Trash2
                        size={14}
                      />
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
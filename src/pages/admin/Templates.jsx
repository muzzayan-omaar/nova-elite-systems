import {
  useEffect,
  useState,
} from "react";

import axios from "../../api/axios";

import {
  Plus,
  Trash2,
  Star,
  Globe,
  LayoutTemplate,
  ExternalLink,
} from "lucide-react";

export default function Templates() {

  const [templates, setTemplates] =
    useState([]);

  const [loading, setLoading] =
    useState(false);

  const [formData, setFormData] =
    useState({
      title: "",
      slug: "",
      category: "",
      shortDescription: "",
      thumbnail: "",
      price: "",
      setupPrice: "",
      demoUrl: "",
      technologies: "",
      features: "",
      featured: false,
      popular: false,
      status: "published",
    });

  const token =
    localStorage.getItem(
      "adminToken"
    );

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

      setFormData({
        ...formData,

        [name]:
          type === "checkbox"
            ? checked
            : value,
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

        const payload = {

          ...formData,

          technologies:
            formData.technologies
              .split(",")
              .map((item) =>
                item.trim()
              ),

          features:
            formData.features
              .split(",")
              .map((item) =>
                item.trim()
              ),
        };

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

        setFormData({
          title: "",
          slug: "",
          category: "",
          shortDescription: "",
          thumbnail: "",
          price: "",
          setupPrice: "",
          demoUrl: "",
          technologies: "",
          features: "",
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
              text-2xl
              font-bold
            "
          >
            Templates
          </h1>

          <p
            className="
              text-sm
              text-gray-400
              mt-1
            "
          >
            Manage premium ready-made systems
          </p>

        </div>

        <div
          className="
            flex
            items-center
            gap-3
          "
        >

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

          <input
            type="text"
            name="slug"
            value={formData.slug}
            onChange={handleChange}
            placeholder="Slug"
            className="admin-input"
          />

          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Category"
            className="admin-input"
          />

          <input
            type="text"
            name="thumbnail"
            value={formData.thumbnail}
            onChange={handleChange}
            placeholder="Thumbnail URL"
            className="admin-input"
          />

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

        <input
          type="text"
          name="demoUrl"
          value={formData.demoUrl}
          onChange={handleChange}
          placeholder="Demo URL"
          className="admin-input mt-4"
        />

        <input
          type="text"
          name="technologies"
          value={
            formData.technologies
          }

          onChange={handleChange}

          placeholder="React, Tailwind, Node.js"

          className="admin-input mt-4"
        />

        <input
          type="text"
          name="features"
          value={
            formData.features
          }

          onChange={handleChange}

          placeholder="Responsive, SEO Optimized, Dashboard"

          className="admin-input mt-4"
        />

        {/* TOGGLES */}

        <div
          className="
            flex
            items-center
            gap-6
            mt-5
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

        <button
          type="submit"

          disabled={loading}

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

          <Plus size={16} />

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
                rounded-[28px]
                overflow-hidden
                border border-white/10
                bg-white/[0.03]
              "
            >

              {/* IMAGE */}

              <div
                className="
                  relative
                  h-[220px]
                  overflow-hidden
                "
              >

                <img
                  src={template.thumbnail}
                  alt={template.title}

                  className="
                    w-full
                    h-full
                    object-cover
                  "
                />

                <div
                  className="
                    absolute
                    top-4
                    left-4
                    flex
                    gap-2
                  "
                >

                  {template.featured && (

                    <div
                      className="
                        px-3 py-1
                        rounded-full
                        bg-blue-600
                        text-[10px]
                        font-semibold
                      "
                    >
                      FEATURED
                    </div>
                  )}

                  {template.popular && (

                    <div
                      className="
                        px-3 py-1
                        rounded-full
                        bg-orange-500
                        text-[10px]
                        font-semibold
                      "
                    >
                      POPULAR
                    </div>
                  )}

                </div>

              </div>

              {/* CONTENT */}

              <div className="p-5">

                <div
                  className="
                    flex
                    items-start
                    justify-between
                    gap-3
                  "
                >

                  <div>

                    <p
                      className="
                        text-blue-400
                        text-[11px]
                        uppercase
                        tracking-[0.2em]
                        mb-2
                      "
                    >
                      {template.category}
                    </p>

                    <h2
                      className="
                        text-xl
                        font-semibold
                      "
                    >
                      {template.title}
                    </h2>

                  </div>

                  <LayoutTemplate
                    size={18}
                    className="text-gray-500"
                  />

                </div>

                <p
                  className="
                    mt-4
                    text-sm
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
                    mt-5
                  "
                >

                  {template.technologies?.map(
                    (
                      tech,
                      index
                    ) => (

                      <div
                        key={index}

                        className="
                          px-3 py-1
                          rounded-full
                          bg-white/[0.05]
                          border border-white/10
                          text-[11px]
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
                    mt-6
                  "
                >

                  <div>

                    <p
                      className="
                        text-xs
                        text-gray-500
                      "
                    >
                      Template
                    </p>

                    <h3
                      className="
                        text-lg
                        font-bold
                      "
                    >
                      {template.price}
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

                      className="
                        w-10
                        h-10
                        rounded-xl
                        border border-white/10
                        flex
                        items-center
                        justify-center
                        hover:border-blue-500/40
                      "
                    >
                      <ExternalLink size={15} />
                    </a>

                    <button
                      onClick={() =>
                        deleteTemplate(
                          template._id
                        )
                      }

                      className="
                        w-10
                        h-10
                        rounded-xl
                        border border-red-500/20
                        text-red-400
                        flex
                        items-center
                        justify-center
                      "
                    >
                      <Trash2 size={15} />
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
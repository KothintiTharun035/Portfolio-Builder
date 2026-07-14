import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, message } from "antd";

import {
  Showloading,
  HideLoading,
  ReloadData,
} from "../../redux/rootSlice";

import API from "../../api/api";
import ImageUpload from "../../components/ImageUpload";

const AdminProj = () => {
  const dispatch = useDispatch();

  const User = useSelector((state) => state.currentUser);

  const { portfolioData } = useSelector((state) => state.root);

  const filteredProjects =
    portfolioData?.projects?.filter(
      (project) => project.userId === User?.result?._id
    ) || [];

  const [selectedProject, setSelectedProject] = useState(null);

  const [imageUrl, setImageUrl] = useState("");

  const [form] = Form.useForm();

  const handleImageUrlChange = (url) => {
    setImageUrl(url);
  };

  const selectProject = (project) => {
    setSelectedProject(project);

    setImageUrl(project.image || "");

    form.setFieldsValue({
      ...project,
      technologies: project.technologies.join(", "),
    });
  };

  const addNewProject = () => {
    setSelectedProject(null);

    setImageUrl("");

    form.resetFields();
  };

  const onFinish = async (values) => {
    try {
      dispatch(Showloading());

      values.image = imageUrl;

      values.technologies =
        values.technologies
          ?.split(",")
          .map((tech) => tech.trim()) || [];

      let res;

      if (selectedProject) {
        res = await API.post("/api/update-project", {
          ...values,
          _id: selectedProject._id,
        });
      } else {
        res = await API.post("/api/add-project", {
          ...values,
          userId: User?.result._id,
        });
      }

      dispatch(HideLoading());

      if (res.data.success) {
        message.success(res.data.message);

        dispatch(ReloadData(true));

        setSelectedProject(null);

        form.resetFields();

        setImageUrl("");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());

      message.error(error.message);
    }
  };

  const deleteProject = async () => {
    if (!selectedProject) return;

    try {
      dispatch(Showloading());

      const res = await API.post("/api/delete-project", {
        _id: selectedProject._id,
      });

      dispatch(HideLoading());

      if (res.data.success) {
        message.success(res.data.message);

        dispatch(ReloadData(true));

        setSelectedProject(null);

        form.resetFields();

        setImageUrl("");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());

      message.error(error.message);
    }
  };

  return (<>
  <div className="flex gap-8">

    {/* LEFT PANEL */}

    <div className="w-[340px] shrink-0">

      <button
        onClick={addNewProject}
        className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl font-semibold shadow-lg hover:scale-[1.02] transition"
      >
        + Add Project
      </button>

      <div className="mt-6 space-y-4 max-h-[700px] overflow-y-auto pr-2">

        {filteredProjects.length === 0 && (

          <div className="border rounded-xl p-6 text-center text-gray-500">

            No Projects Added

          </div>

        )}

        {filteredProjects.map((project) => (

          <div
            key={project._id}
            onClick={() => selectProject(project)}
            className={`cursor-pointer rounded-2xl border transition-all duration-300 overflow-hidden
            ${
              selectedProject?._id === project._id
                ? "border-indigo-600 shadow-xl"
                : "border-gray-200 hover:border-indigo-400 hover:shadow-lg"
            }`}
          >

            

            <div className="p-4">

              <h2 className="font-bold text-lg text-slate-800">

                {project.title}

              </h2>

              <p className="text-sm text-gray-500 mt-2 line-clamp-2">

                {project.description}

              </p>

              <div className="flex flex-wrap gap-2 mt-4">

                {project.technologies?.slice(0,3).map((tech,index)=>(
                  <span
                    key={index}
                    className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>

    {/* RIGHT PANEL */}

    <div className="flex-1 bg-white rounded-3xl shadow-xl border p-8">

      <div className="flex justify-between items-center border-b pb-5 mb-8">

        <div>

          <h1 className="text-3xl font-bold text-slate-800">

            {selectedProject ? "Edit Project" : "Add Project"}

          </h1>

          <p className="text-gray-500 mt-2">

            Add beautiful portfolio projects for recruiters.

          </p>

        </div>

      </div>

      <Form

        form={form}

        layout="vertical"

        onFinish={onFinish}

        initialValues={

          selectedProject
            ? {
                ...selectedProject,
                technologies:
                  selectedProject.technologies.join(", "),
              }
            : {}

        }

      >

        

        <div className="grid md:grid-cols-2 gap-6">

          <Form.Item
            label="Project Title"
            name="title"
            rules={[{ required:true }]}
          >
            <input placeholder="Portfolio Builder" />
          </Form.Item>

          <Form.Item
  label="GitHub Repository"
  name="github"
  rules={[{ required: true }]}
>
  <input placeholder="https://github.com/username/project" />
</Form.Item>

<Form.Item
  label="Live Demo"
  name="demo"
  rules={[{ required: true }]}
>
  <input placeholder="https://yourwebsite.com" />
</Form.Item>

        </div>

        <Form.Item
          label="Description"
          name="description"
          rules={[{ required:true }]}
        >
          <textarea rows={5} />
        </Form.Item>

        <Form.Item
          label="Technologies"
          name="technologies"
          rules={[{ required:true }]}
        >
          <input placeholder="React, Spring Boot, MongoDB" />
        </Form.Item>        <div className="flex justify-end gap-4 mt-8">

          <div className="flex justify-end gap-4 mt-8">

  

  <button
    type="button"
    onClick={addNewProject}
    className="px-6 py-3 rounded-xl border border-gray-300 hover:bg-gray-100 transition"
  >
    Cancel
  </button>

  <button
    type="submit"
    className="px-8 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 transition"
  >
    {selectedProject ? "Update Project" : "Save Project"}
  </button>

  {selectedProject && (
    <button
  type="button"
  onClick={deleteProject}
  className="px-6 py-3 rounded-xl border border-gray-300 bg-white text-gray-700 hover:border-red-600 hover:text-red-600 transition-all duration-300"
>
  Delete Project
</button>
  )}

</div>


        </div>

      </Form>

    </div>

  </div>

</>

  );
};

export default AdminProj;
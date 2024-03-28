import React from "react";

function Project() {
    return (
        <>
            <div className="row m-0">
                <div className="col-sm me-1 projectinputs_container border p-2 rounded d-flex flex-column justify-content-center align-items-center">
                    <input
                        type="text"
                        name="title_project"
                        className="form-control mb-1"
                        placeholder="Title"
                    />
                    <input
                        type="text"
                        name="linkdemo_project"
                        className="form-control mt-1 mb-1"
                        placeholder="Link"
                    />
                    <textarea
                        name="description_project"
                        rows={3}
                        className="form-control mt-1 mb-1"
                        placeholder="Description"
                    ></textarea>
                    <button
                        type="button"
                        className="btn btn-success add_project_btn align-self-end"
                    >
                        Add
                    </button>
                </div>
                <div className="col-sm ms-1 projectslist_f_container border rounded">
                    <ul className="projectslist"></ul>
                </div>
            </div>
        </>
    );
}

export default Project;

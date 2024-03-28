import Project from "./components/createprofile/Project";
import Qualification from "./components/createprofile/Qualification";
import Skill from "./components/createprofile/Skill";

export default function CreateProfile() {
    return (
        <>
            <div className="container-fluid create_profile_form">
                <h1 className="fs-2 text-primary ms-2 mt-3 mb-3">
                    Create your profile
                </h1>
                <form action="profile" className="border p-3 m-0">
                    <div className="personal_infos_f">
                        <h3 className="text-primary fs-5 fw-bold mb-2">
                            Personal infos*
                        </h3>
                        <div className="trainee_image_f mt-1">
                            <label htmlFor="trainee_image">Trainee Image</label>
                            <input
                                type="file"
                                name="trainee_image"
                                className="form-control"
                            />
                        </div>
                        <div className="trainee_firstName_f mt-1 pe-1">
                            <label htmlFor="trainee_firstName">
                                first name
                            </label>
                            <input
                                type="text"
                                name="trainee_firstName"
                                className="form-control"
                                placeholder="first name"
                            />
                        </div>
                        <div className="trainee_lastName_f mt-1 ps-1">
                            <label htmlFor="trainee_lastName">last name</label>
                            <input
                                type="text"
                                name="trainee_lastName"
                                className="form-control"
                                placeholder="last name"
                            />
                        </div>
                        <div className="trainee_bio_f mt-1 mb-1">
                            <label htmlFor="trainee_bio">Bio</label>
                            <textarea
                                name="trainee_bio"
                                rows={5}
                                className="form-control mt-1 mb-1"
                                placeholder="Bio"
                            ></textarea>
                        </div>
                        <div className="trainee_phone_f mt-1">
                            <label htmlFor="trainee_phone">Trainee phone</label>
                            <input
                                type="text"
                                name="trainee_phone"
                                className="form-control"
                                placeholder="Phone"
                            />
                        </div>
                        <div className="trainee_location_f mt-1">
                            <label htmlFor="trainee_location">
                                trainee location
                            </label>
                            <input
                                type="text"
                                name="trainee_location"
                                className="form-control"
                                placeholder="Location -city-"
                            />
                        </div>
                    </div>
                    <div className="workExperiences_f">
                        <h3 className="text-primary fs-5 fw-bold mt-4 mb-3">
                            Work experiences
                        </h3>
                        <Qualification />
                    </div>
                    <div className="courses_f">
                        <h3 className="text-primary fs-5 fw-bold mt-4 mb-3">
                            Courses
                        </h3>
                        <Qualification />
                    </div>
                    <div className="education_f">
                        <h3 className="text-primary fs-5 fw-bold mt-4 mb-3">
                            Education
                        </h3>
                        <Qualification />
                    </div>
                    <div className="skills_f">
                        <h3 className="text-primary fs-5 fw-bold mt-4 mb-3">
                            Skills
                        </h3>
                        <Skill />
                    </div>
                    <div className="projects_f">
                        <h3 className="text-primary fs-5 fw-bold mt-4 mb-3">
                            Projects
                        </h3>
                        <Project />
                    </div>
                    <div className="CV_f">
                        <h3 className="text-primary fs-5 fw-bold mt-4 mb-3">
                            CV
                        </h3>
                        <div className="cvinput_container_f mt-1">
                            <label htmlFor="trainee_cv">CV file</label>
                            <input
                                type="file"
                                name="trainee_cv"
                                className="form-control"
                            />
                        </div>
                    </div>
                    <div className="d-flex justify-content-end mt-3">
                        <button
                            type="submit"
                            className="btn btn-primary save_profile_btn"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

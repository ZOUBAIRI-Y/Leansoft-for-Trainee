import profilePIC from "../assets/profilePIC.jpg";
export default function Profile() {
    return (
        <>
            <div className="container-fluid profile_container">
                <div className="row m-0 mt-4 p-2">
                    <div className="col-sm personal_infos_p border rounded p-2 me-1">
                        <div className="container d-flex flex-column align-items-center m-0 p-2">
                            <div className="traineeimg_p_container">
                                <img
                                    src={profilePIC}
                                    alt="profile picture"
                                    className=""
                                />
                            </div>
                            <p className="text-primary m-0 mt-2 fs-4 fullname_p">
                                <strong>YASSINE ZOUBAIRI</strong>
                            </p>
                            <p className="text-success m-0  fw-bold specialization_p">
                                Specialization
                            </p>
                        </div>
                    </div>
                    <div className="col-sm bio_courses_container d-flex flex-column align-items-center p-0 ms-1 me-1">
                        <div className="container bio_p_container border rounded p-3 mb-1">
                            <h4 className="text-primary text-center fw-bold fs-5 mb-3">
                                Bio
                            </h4>
                            <p className="bio_p m-0">
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Odio quaerat sit aliquid
                                repellat. Eveniet saepe est qui unde tenetur?
                                Voluptatum aliquid quis labore eos alias, sit
                                consequatur animi debitis deleniti!
                            </p>
                        </div>
                        <div className="container bio_p_container border rounded p-3 mt-1 mb-1">
                            <h4 className="text-primary text-center fw-bold fs-5 mb-3">
                                Courses
                            </h4>
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <p className="course_title fs-5 m-0 me-1 mb-1 text-dark">
                                        <strong>Course title</strong>
                                    </p>
                                    <p className="course_year m-0 ms-1 mb-1 text-gray">
                                        <strong>Course year</strong>
                                    </p>
                                    <p className="course_description m-0 p-2">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Doloribus cumque quasi
                                        suscipit in necessitatibus animi.
                                    </p>
                                </li>
                                <li className="list-group-item">
                                    <p className="course_title fs-5 m-0 me-1 mb-1 text-dark">
                                        <strong>Course title</strong>
                                    </p>
                                    <p className="course_year m-0 ms-1 mb-1 text-gray">
                                        <strong>Course year</strong>
                                    </p>
                                    <p className="course_description m-0 p-2">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Doloribus cumque quasi
                                        suscipit in necessitatibus animi.
                                    </p>
                                </li>
                                <li className="list-group-item">
                                    <p className="course_title fs-5 m-0 me-1 mb-1 text-dark">
                                        <strong>Course title</strong>
                                    </p>
                                    <p className="course_year m-0 ms-1 mb-1 text-gray">
                                        <strong>Course year</strong>
                                    </p>
                                    <p className="course_description m-0 p-2">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Doloribus cumque quasi
                                        suscipit in necessitatibus animi.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm skills_workExp_container d-flex flex-column align-items-center p-0 ms-1">
                        <div className="container skills_p_container border rounded p-3 mb-1">
                            <h4 className="text-primary text-center fw-bold fs-5 mb-3">
                                Skills
                            </h4>
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <p className="skill_name m-0 mb-1 text-dark">
                                        <strong>Skill name</strong>
                                    </p>
                                    <div className="progress skill_level_p">
                                        <div
                                            className="progress-bar bg-success"
                                            role="progressbar"
                                            style={{ width: "70%" }}
                                            aria-valuenow={70}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        />
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <p className="skill_name m-0 mb-1 text-dark">
                                        <strong>Skill name</strong>
                                    </p>
                                    <div className="progress skill_level_p">
                                        <div
                                            className="progress-bar bg-success"
                                            role="progressbar"
                                            style={{ width: "60%" }}
                                            aria-valuenow={60}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        />
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <p className="skill_name m-0 mb-1 text-dark">
                                        <strong>Skill name</strong>
                                    </p>
                                    <div className="progress skill_level_p">
                                        <div
                                            className="progress-bar bg-success"
                                            role="progressbar"
                                            style={{ width: "90%" }}
                                            aria-valuenow={90}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        />
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <p className="skill_name m-0 mb-1 text-dark">
                                        <strong>Skill name</strong>
                                    </p>
                                    <div className="progress skill_level_p">
                                        <div
                                            className="progress-bar bg-success"
                                            role="progressbar"
                                            style={{ width: "40%" }}
                                            aria-valuenow={40}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        />
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="workExperiences_p border rounded p-2 mt-1">
                            <p>
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Odio quaerat sit aliquid
                                repellat. Eveniet saepe est qui unde tenetur?
                                Voluptatum aliquid quis labore eos alias, sit
                                consequatur animi debitis deleniti!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row m-0 ">
                    <div className="col-sm projects_p border rounded m-2 p-2">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ullam minus impedit maiores illum nostrum
                            consectetur earum fuga dignissimos laborum totam.
                            Modi praesentium culpa magnam, harum quasi iusto sed
                            officia labore.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quidem soluta illo libero ipsum dolor
                            distinctio exercitationem. Voluptatibus praesentium
                            obcaecati veritatis inventore minima impedit odio
                            labore voluptatum quae? Quas, aliquid autem.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

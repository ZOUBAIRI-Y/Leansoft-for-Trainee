import React from "react";
import profilePic from "../../../assets/profilePIC.jpg";
function DemandslistItem() {
    return (
        <>
            <div className="row m-0">
                <div className="col-sm-3 col-md-3 col-lg-3 col-xl-4 col-xxl-3 p-0 rounded-start d-flex flex-column justify-content-center">
                    <div className="traineeimg_h_container">
                        <img
                            src={profilePic}
                            className="rounded-start"
                            alt="profile pic"
                        />
                    </div>
                </div>
                <div className="traineedemand_resume col-sm-5 col-md-6 col-lg-5 col-xl-4 col-xxl-4 p-2 d-flex flex-column">
                    <p className="traineename_h text-dark fs-4 m-0 p-0">
                        <strong>Trainee name</strong>
                    </p>
                    <p className="specialization_h text-success m-0 p-0">
                        Specialization
                    </p>
                    <div className="loc_phone_ed_h_container d-flex flex-column justify-content-center ps-3">
                        <div className="trainee_phone_h_container m-0 p-0">
                            <span className="phone_icn me-1">
                                <i class="bi bi-telephone-fill"></i>
                            </span>
                            <p className="m-0 ms-1">
                                <strong>phone: </strong>
                                <span className="trainee_phone_h">
                                    0603777342
                                </span>
                            </p>
                        </div>
                        <div className="trainee_loc_h_container m-0 p-0">
                            <span className="location_icn me-1">
                                <i class="bi bi-geo-alt-fill"></i>
                            </span>
                            <p className="m-0 ms-1">
                                <strong>location: </strong>
                                <span className="trainee_location_h">
                                    Agadir
                                </span>
                            </p>
                        </div>
                        <div className="trainee_ed_h_container m-0 p-0">
                            <span className="grad_icn me-1">
                                <i class="bi bi-mortarboard-fill"></i>
                            </span>
                            <p className="m-0 ms-1">
                                <strong>Education: </strong>
                                <span className="trainee_education_h">
                                    Bacsp+2
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="trainee_skills col-sm-4 col-md-3 col-lg-4 col-xl-4 col-xxl-5 p-2">
                    <p className="traineeskills_h text-dark fs-5 m-0 p-0">
                        <strong>Top skills</strong>
                    </p>
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
                                    style={{ width: "60%" }}
                                    aria-valuenow={60}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default DemandslistItem;

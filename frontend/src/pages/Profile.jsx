import profilePIC from '../assets/profilePIC.jpg'
export default function Profile() {
    return (
        <>
            <div className="container-fluid profile_container">
                <div className="row m-0 mt-4 p-2">
                    <div className="col-sm personal_infos_p border rounded p-2 me-1">
                        <div className="container d-flex flex-column align-items-center m-0 p-0">
                            <h4 className="fs-5 fw-bold text-primary">Personal infos</h4>
                            <div className="traineeimg_p_container">
                                <img src={profilePIC} alt="profile picture" />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm bio_courses_container d-flex flex-column align-items-center p-0 ms-1 me-1">
                        <div className="bio_p border rounded p-2 mb-1">
                            <p>
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Odio quaerat sit aliquid
                                repellat. Eveniet saepe est qui unde tenetur?
                                Voluptatum aliquid quis labore eos alias, sit
                                consequatur animi debitis deleniti!
                            </p>
                        </div>
                        <div className="courses_p border rounded p-2 mt-1">
                            <p>
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Odio quaerat sit aliquid
                                repellat. Eveniet saepe est qui unde tenetur?
                                Voluptatum aliquid quis labore eos alias, sit
                                consequatur animi debitis deleniti!
                            </p>
                        </div>
                    </div>
                    <div className="col-sm skills_workExp_container d-flex flex-column align-items-center p-0 ms-1">
                        <div className="skills_p border rounded p-2 mb-1">
                            <p>
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Odio quaerat sit aliquid
                                repellat. Eveniet saepe est qui unde tenetur?
                                Voluptatum aliquid quis labore eos alias, sit
                                consequatur animi debitis deleniti!
                            </p>
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

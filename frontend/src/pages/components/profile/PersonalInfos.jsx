import profilePIC from "../../../assets/profilePIC.jpg";

function PersonalInfos() {
    return (
        <>
            <div className="traineeimg_p_container">
                <img src={profilePIC} alt="profile picture" className="" />
            </div>
            <p className="text-primary m-0 mt-2 fs-4 fullname_p">
                <strong>YASSINE ZOUBAIRI</strong>
            </p>
            <p className="text-success m-0  fw-bold specialization_p">
                Specialization
            </p>
            <div className="trainee_personal_info mt-5 p-2">
                <p className="m-0 mb-2">
                    <strong>phone: </strong>
                    <span> 0603777342</span>
                </p>
                <p className="m-0">
                    <strong>location: </strong>
                    <span> Agadir</span>
                </p>
            </div>
            <div className="mt-5 border rounded p-2">
                CV file pdf
            </div>
            <div className="mt-5">
                <h4 className="text-primary text-center fw-bold mb-3">
                    Education
                </h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <p className="education_level m-0 me-1 mb-1 text-dark">
                            <strong>Education level</strong>
                        </p>
                        <p className="education_year m-0 ms-1 mb-1 text-gray">
                            <strong>--year</strong>
                        </p>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default PersonalInfos;

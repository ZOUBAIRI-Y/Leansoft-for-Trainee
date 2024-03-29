function Skills() {
    return (
        <>
            <h4 className="text-primary text-center fw-bold mb-3">Skills</h4>
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
        </>
    );
}

export default Skills;

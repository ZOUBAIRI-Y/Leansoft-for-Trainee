function Skill() {
    return (
        <>
            <div className="row m-0">
                <div className="col-sm me-1 skillinputs_container border p-2 rounded d-flex flex-column justify-content-center align-items-center">
                    <input
                        type="text"
                        name="name_skill"
                        className="form-control mb-1"
                        placeholder="Skill"
                    />
                    <label htmlFor="skill_level" className="form-label align-self-start mt-1 mb-1">
                        Skill level
                    </label>
                    <input
                        type="range"
                        name="skill_level"
                        className="form-range mt-1 mb-1"
                    />
                    <button
                        type="button"
                        className="btn btn-success add_skill_btn align-self-end"
                    >
                        Add
                    </button>
                </div>
                <div className="col-sm ms-1 skillslist_f_container border rounded">
                    <ul className="skillslist"></ul>
                </div>
            </div>
        </>
    );
}

export default Skill;

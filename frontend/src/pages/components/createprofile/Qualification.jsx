function Qualification() {
    return (
        <>
            <div className="row m-0">
                <div className="col-sm me-1 qualificationinputs_container border p-2 rounded d-flex flex-column justify-content-center align-items-center">
                    <input
                        type="text"
                        name="title_qualification"
                        className="form-control mb-1"
                        placeholder="Title / Name"
                    />
                    <input
                        type="number"
                        min={1900}
                        max={2025}
                        step={1}
                        name="year_qualification"
                        className="form-control mt-1 mb-1"
                        placeholder="Year"
                    />
                    <textarea
                        name="description_qualification"
                        rows={3}
                        className="form-control mt-1 mb-1"
                        placeholder="Description"
                    ></textarea>
                    <button
                        type="button"
                        className="btn btn-success add_qualification_btn align-self-end"
                    >
                        Add
                    </button>
                </div>
                <div className="col-sm ms-1 qualificationslist_f_container border rounded">
                    <ul className="qualificationslist"></ul>
                </div>
            </div>
        </>
    );
}

export default Qualification;

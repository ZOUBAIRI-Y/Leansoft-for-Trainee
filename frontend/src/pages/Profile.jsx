import Bio from "./components/profile/Bio";
import Courses from "./components/profile/Courses";
import PersonalInfos from "./components/profile/PersonalInfos";
import Projects from "./components/profile/Projects";
import Skills from "./components/profile/Skills";
import WorkExperiences from "./components/profile/WorkExperiences";
export default function Profile() {
    return (
        <>
            <div className="container-fluid profile_container">
                <div className="row m-0 mt-4 p-2">
                    <div className="col-sm personal_infos_p border rounded p-2 me-1">
                        <div className="container d-flex flex-column align-items-center m-0 p-2">
                            <PersonalInfos />
                        </div>
                    </div>
                    <div className="col-sm bio_courses_container d-flex flex-column align-items-center p-0 ms-1 me-1">
                        <div className="container bio_p_container border rounded p-3 mb-1">
                            <Bio />
                        </div>
                        <div className="container courses_p_container border rounded p-3 mt-1">
                            <Courses />
                        </div>
                    </div>
                    <div className="col-sm skills_workExp_container d-flex flex-column align-items-center p-0 ms-1">
                        <div className="container skills_p_container border rounded p-3 mb-1">
                            <Skills />
                        </div>

                        <div className="container workExp_p_container border rounded p-3 mt-1">
                            <WorkExperiences />
                        </div>
                    </div>
                </div>
                <div className="row m-0 ">
                    <div className="col-sm projects_p border rounded m-2 p-2">
                        <Projects />
                    </div>
                </div>
            </div>
        </>
    );
}

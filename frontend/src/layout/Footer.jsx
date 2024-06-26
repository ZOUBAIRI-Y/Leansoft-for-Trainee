export default function Footer() {
    return (
        <>
            <footer className="bg-light mt-3">
                <div className="container d-flex flex-row justify-content-center socials_container p-4">
                    <div className="fb_container">
                        <a href="#">
                            <i className="bi bi-linkedin"></i>
                        </a>
                    </div>
                    <div className="fb_container">
                        <a href="#">
                            <i className="bi bi-github"></i>
                        </a>
                    </div>
                    <div className="fb_container">
                        <a href="#">
                            <i className="bi bi-facebook"></i>
                        </a>
                    </div>
                    <div className="fb_container">
                        <a href="#">
                            <i className="bi bi-twitter"></i>
                        </a>
                    </div>
                </div>

                <div className="text-center text-dark bg-success p-3">
                    © 2024 Copyright: Leansoft for trainee
                </div>
            </footer>
        </>
    );
}

import React from "react";
import {
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBBtn,
    MDBIcon,
    MDBInput,
    MDBCheckbox,
    MDBCard,
    MDBCardBody,
    MDBCardHeader
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="container">
            <MDBContainer fluid className="p-3 my-5 h-custom">
                <MDBRow>
                    <MDBCol col="11" md="7">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            class="img-fluid"
                            alt="Sample image"
                        />
                    </MDBCol>

                    <MDBCol col="3" md="5">
                        <div className="container">
                            <MDBCard className="my-5">
                                <MDBCardHeader className="p-3">
                                    <h3 className="fw-bold text-center text-primary">
                                        Login
                                    </h3>
                                </MDBCardHeader>
                                <MDBCardBody className="p-4">
                                    <MDBInput
                                        wrapperClass="mb-4"
                                        label="username or email"
                                        placeholder="type your username or email"
                                        id="formControlLg"
                                        type="email"
                                    />
                                    <MDBInput
                                        wrapperClass="mb-4"
                                        label="Password"
                                        placeholder="type your password"
                                        id="formControlLg"
                                        type="password"
                                    />

                                    <div className="d-flex justify-content-between mb-4">
                                        <MDBCheckbox
                                            name="flexCheck"
                                            value=""
                                            id="flexCheckDefault"
                                            label="Remember me"
                                        />
                                        <a href="!#">Forgot password?</a>
                                    </div>

                                    <div className="text-center text-md-start mt-4 pt-2">
                                        <MDBBtn
                                            className="w-100 mb-4"
                                            size="lg"
                                        >
                                            Login
                                        </MDBBtn>
                                        <p className="small fw-bold text-center mt-2 pt-1 mb-2">
                                            Don't have an account?{" "}
                                            <Link
                                                to={"/signup"}
                                                className="link-danger"
                                            >
                                                Register
                                            </Link>
                                        </p>
                                    </div>
                                </MDBCardBody>
                            </MDBCard>
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    );
}

export default Login;

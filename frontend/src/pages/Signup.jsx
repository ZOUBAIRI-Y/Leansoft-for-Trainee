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
    MDBCardHeader,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

function Signup() {
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
                                    <h3 className="fw-bold text-center text-primary">Register</h3>
                                </MDBCardHeader>
                                <MDBCardBody className="p-4">
                                    <MDBInput
                                        wrapperClass="mb-4"
                                        label="username"
                                        placeholder="type your username"
                                        id="form1"
                                        type="text"
                                    />

                                    <MDBInput
                                        wrapperClass="mb-4"
                                        label="Email"
                                        placeholder="type your email"
                                        id="form1"
                                        type="email"
                                    />

                                    <MDBRow>
                                        <MDBCol col="6">
                                            <MDBInput
                                                wrapperClass="mb-4"
                                                label="Password"
                                                placeholder="password"
                                                id="form1"
                                                type="password"
                                            />
                                        </MDBCol>

                                        <MDBCol col="6">
                                            <MDBInput
                                                wrapperClass="mb-4"
                                                label="Confirm Password"
                                                placeholder="Confirm Password"
                                                id="form1"
                                                type="password"
                                            />
                                        </MDBCol>
                                    </MDBRow>

                                    <MDBBtn className="w-100 mb-4" size="lg">
                                        sign up
                                    </MDBBtn>
                                    <p className="small fw-bold text-center mt-2 pt-1 mb-2">
                                        you already registered?{" "}
                                        <Link
                                            to={"/login"}
                                            className="link-danger"
                                        >
                                            signin
                                        </Link>
                                    </p>

                                    <div className="text-center">
                                        {/* <p>or sign up with:</p>

                                        <MDBBtn
                                            tag="a"
                                            color="none"
                                            className="mx-3"
                                            style={{ color: "#1266f1" }}
                                        >
                                            <MDBIcon
                                                fab
                                                icon="facebook-f"
                                                size="sm"
                                            />
                                        </MDBBtn>

                                        <MDBBtn
                                            tag="a"
                                            color="none"
                                            className="mx-3"
                                            style={{ color: "#1266f1" }}
                                        >
                                            <MDBIcon
                                                fab
                                                icon="twitter"
                                                size="sm"
                                            />
                                        </MDBBtn>

                                        <MDBBtn
                                            tag="a"
                                            color="none"
                                            className="mx-3"
                                            style={{ color: "#1266f1" }}
                                        >
                                            <MDBIcon
                                                fab
                                                icon="google"
                                                size="sm"
                                            />
                                        </MDBBtn>

                                        <MDBBtn
                                            tag="a"
                                            color="none"
                                            className="mx-3"
                                            style={{ color: "#1266f1" }}
                                        >
                                            <MDBIcon
                                                fab
                                                icon="github"
                                                size="sm"
                                            />
                                        </MDBBtn> */}
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

export default Signup;

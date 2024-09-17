import React from 'react'
import LoginPage from '../uploads/loginPage.jpeg'
import Header from '../layouts/Header'
import { Link } from 'react-router-dom'
<Header></Header>
const Login = () => {
    return (
        <div>
            <Header></Header>
            <section className="vh-100" style={{ backgroundColor: "darkgray" }}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-xl-10">
                        <div className="card" style={{ borderRadius: "1rem" }}>
                            <div className="row g-0">
                                <div className="col-md-6 col-lg-5 d-none d-md-block">
                                    <img
                                        src={LoginPage}
                                        alt="login form"
                                        className=""
                                        style={{ borderRadius: "1rem 0 0 1rem", width: '120%',height:'100%' }}
                                    />
                                </div>
                                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                    <div className="card-body p-4 p-lg-5 text-black">

                                        <form method="post">
                                            <div className="d-flex align-items-center mb-3 pb-1">
                                                <i
                                                    className="fas fa-cubes fa-2x me-3"
                                                    style={{ color: "#ff6219" }}
                                                />
                                                <span className="h1 fw-bold mb-0">WTB Bilişim</span>
                                            </div>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form2Example17">
                                                    E-posta
                                                </label>
                                                <input
                                                    type="email"
                                                    id="form2Example17"
                                                    name="email"
                                                    className="form-control form-control-lg"
                                                    required=""
                                                />
                                            </div>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form2Example27">
                                                    Şifre
                                                </label>
                                                <input
                                                    type="password"
                                                    id="form2Example27"
                                                    name="password"
                                                    className="form-control form-control-lg"
                                                    required=""
                                                />
                                            </div>
                                            <div className="form-check mb-3">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    name="remember"
                                                    id="remember"
                                                />
                                                <label className="form-check-label" htmlFor="remember">
                                                    Beni Hatırla
                                                </label>
                                            </div>
                                            <div className="pt-1 mb-4">
                                                <button
                                                    className="btn btn-dark btn-lg btn-block"
                                                    type="submit"
                                                >
                                                    Giriş
                                                </button>
                                            </div>
                                            
                                            <small>Henüz hesabınmız yok mu <Link to={'/register'}><a href="">buradan </a></Link>  kayıt olabilirsiniz</small>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        </div>
    )
}

export default Login
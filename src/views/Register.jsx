import React from 'react'
import Header from '../layouts/Header'
const Register = () => {
    return (
        <div>
            <Header></Header>
            <section className="mt-10">
                <div
                    className="px-4 py-5 px-md-5 text-center text-lg-start"
                    style={{ backgroundColor: "hsl(0, 0%, 96%)" }}
                >
                    <div className="container">
                        <div className="row gx-lg-5 align-items-center">
                            <div className="col-lg-6 mb-5 mb-lg-0">
                                <h1 className="my-5 display-3 fw-bold ls-tight">
                                    <span style={{color:' #00715d'}} className="">WTB E-Ticaret Sistemi</span>
                                </h1>
                                <p style={{ color: "hsl(217, 10%, 50.8%)" }}>
                                    WTB E-Ticaret Sistemi giriş ekranı
                                </p>
                            </div>
                            <div className="col-lg-6 mb-5 mb-lg-0">
                                <div className="card">
                                    <h1>WTB E-STORE</h1>
                                    <div className="card-body py-5 px-md-5">
                                        <form action="register" method="post">
                                            <div className="row">
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-outline">
                                                        <input type="text" className="form-control" name="name" />
                                                        <label className="form-label" htmlFor="form3Example1">
                                                            İsim
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-outline">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="lastname"
                                                        />
                                                        <label className="form-label" htmlFor="form3Example2">
                                                            Soyisim
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-outline mb-4">
                                                <input type="text" className="form-control" name="phone" />
                                                <label className="form-label"> Telefon Numarası</label>
                                            </div>
                                            <div className="form-outline mb-4">
                                                <input type="email" className="form-control" name="email" />
                                                <label className="form-label">Email Adresi</label>
                                            </div>
                                            <div className="form-outline mb-4">
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    name="password"
                                                />
                                                <label className="form-label">Şifre</label>
                                            </div>
                                            <button
                                            style={{backgroundColor:' #00715d',color:'white'}}
                                                type="submit"
                                                className="btn  btn-block mb-4"
                                            >
                                                kayıt
                                            </button>
                                        </form>
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

export default Register
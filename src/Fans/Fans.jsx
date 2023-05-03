import "./Fans.css"
export function Fans(){
    return(
        <>
        <div className="fondo mb-5"></div>
        <div className="container">
                <div className="row">
                    <div className="col col-md-6 mt-3">
                        <label htmlFor="nombre">Nombre del cliente</label>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">
                                <i class="bi bi-person-circle"></i>
                            </span>
                            <input type="text" className="form-control" placeholder="Nombre" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6 mt-3">
                        <label htmlFor="correo">Correo del cliente</label>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">@</span>
                            <input type="text" className="form-control" placeholder="Correo" />
                        </div>
                    </div>
                </div>
                <div className="input-group mb-3 mt-3">
                    <label htmlFor="floatingInput">Fecha de nacimiento</label>
                    <input type="date" className="form-control w-100"  />
                </div>
                <div className="row">
                    <div className="col-12 col-md-6 mt-3">
                        <label htmlFor="telefono">Telefono del cliente</label>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">@</span>
                            <input type="text" className="form-control" placeholder="Telefono" />
                        </div>
                    </div>
                    <div className="col col-md-6 mt-3">
                        <label htmlFor="nombre">Contraseña</label>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">
                                <i class="bi bi-person-circle"></i>
                            </span>
                            <input type="text" className="form-control" placeholder="Contraseña" />
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-success w-100 my-3">Ingresar</button>
            </div>

            <div className="row mt-3">
                            <div className="col-12 col-md-4 mt-3">
                                <h5>¿Cómo se llaman los fans de Blckpink?</h5>
                                <br />
                                <input type="radio" className="mt-3"/>Black
                                <br />
                                <input type="radio" className="mt-3"/>Blinks
                                <br />
                                <input type="radio" className="mt-3"/>Punks
                                <br />
                            </div>
                            <div className="col-12 col-md-4 mt-3">
                                <h5>¿Quien es la lider del grupo?</h5>
                                <br />
                                <input type="radio" className="mt-3"/>No tienen lider
                                <br />
                                <input type="radio" className="mt-3"/>Jisoo
                                <br />
                                <input type="radio" className="mt-3"/>Lisa
                            </div>
                            <div className="col-12 col-md-4 mt-3">
                                <h5>¿Quien es la vocalista principal?</h5>
                                <br />
                                <input type="radio" className="mt-3"/>Jisoo
                                <br />
                                <input type="radio" className="mt-3"/>Lisa
                                <br />
                                <input type="radio" className="mt-3"/>Rose
                            </div>
                            
                        </div>
                        <div className="row">
                        <div className="col-12 col-md-6 mt-3">
                                <h5>¿En que año debutaron?</h5>
                                <br />
                                <input type="radio" className="mt-3"/>2013
                                <br />
                                <input type="radio" className="mt-3"/>2016
                                <br />
                                <input type="radio" className="mt-3"/>2015
                            </div>
                            <div className="col-12 col-md-6 mt-3">
                                <h5>¿Donde nacio Lisa?</h5>
                                <br />
                                <input type="radio" className="mt-3"/>Tailandia
                                <br />
                                <input type="radio" className="mt-3"/>corea del sur
                                <br />
                                <input type="radio" className="mt-3"/>Japón
                            </div>
                        </div>
                   
        </>
    )
}

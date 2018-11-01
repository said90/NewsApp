import React, { Component } from 'react'

export class Form extends Component {


    categoriaRef = React.createRef();
    paisRef=React.createRef();

    cambiarCategoria = (e) => {
        e.preventDefault();

        //enviar props
        this.props.consultarNoticias(this.categoriaRef.current.value, this.paisRef.current.value);

        //console.log(this.categoriaRef.curren.value);

    }

    render() {
        return (
            <div>
                <div className="buscador row">
                    <div className="col s12 m8 offset-m2">
                        <form onSubmit={this.cambiarCategoria}>
                            <h2>Noticias por Categoria y Pais</h2>
                            <div className="input-field col s12 m8">
                                <select ref={this.categoriaRef}>
                                    <option value="general" defaultValue> General</option>
                                    <option value="business" >Negocios</option>
                                    <option value="entertainment" >Entretenimiento</option>
                                    <option value="health" >Salud</option>
                                    <option value="science" >Ciencia</option>
                                    <option value="sports" >Deportes</option>
                                    <option value="technology" >Tecnologia</option>
                                </select>
                            </div>

                            <div className="input-field col s12 m8">
                                <select ref={this.paisRef}>
                                    <option value="us" defaultValue> Estados Unidos</option>

                                    <option value="ae" > Emiratos Arabes</option>
                                    <option value="ar" >Argentina</option>
                                    <option value="at" >Austria</option>
                                    <option value="au" >Australia</option>
                                    <option value="be" >Belgica</option>
                                    <option value="bg" >Bulgaria</option>
                                    <option value="br" >Brasil</option>
                                    <option value="mx" >Mexico</option>
                                    <option value="ve" >Venezuela</option>
                                    <option value="ma" >Marruecos</option>
                                    <option value="ua" >Ucrania</option>
                                </select>
                            </div>
                            <div className="input-field col s12 m4 enviar">
                                <input type="submit" className="btn amber darken-2" value="Buscar" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form

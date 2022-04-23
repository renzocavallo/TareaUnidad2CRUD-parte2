import React from "react";
import "../styles/components/pages/ContactoPage.css";

const ContactoPage = (props) =>{
    return(
    <main className="holder">
    <div className="columna left">
    <h2>Contacto Rápido</h2>
    <form action=""method=""class="formulario">
    <p>
    <label for="">Nombre</label>
    <input type="text"/>
    </p>
    <p>
    <label for="">Email</label>
    <input type="text"/>
    </p>
    <p>
    <label for="">Teléfono</label>
    <input type="text"/>
    </p>
    <p>
    <label for="">Comentario</label>
    <textarea id="comentario"></textarea>
    </p>
    <p className="acciones">
    <input type="submit" value="Enviar"/>
    </p>
    </form>
    </div>
    <div className="columna right">
    <h2>Otras vias de contacto</h2>
    <p>Tambien se pueden comunicar con nosotros ... </p>
    <ul>
    <li>Teléfono: +54-342000001</li>
    <li>Email: contacto@chaltendestinos.com.ar</li>
    </ul>
    <div className="icono" id="whatsapp">
    <i className="fab fa-whatsapp"></i>
    </div>
    <div className="icono" id="telegram">
    <i className="fab fa-telegram"></i>
    </div>
    </div>
    </main>
    );
}

export default ContactoPage;
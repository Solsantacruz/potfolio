import React from "react";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';


const FormContacto = () => {
    const form = useRef();
    const [formData, setFormData] = useState({
      nombre: "",
      email: "",
      asunto: "",
      mensaje: "",
    });
    const [enviado, setEnviado] = useState(false);
  
    const sendEmail = (event) => {
      event.preventDefault();
  
      emailjs.sendForm('service_5t9101f', 'template_cf0hbun', form.current, 'DCwkRdyTCdYij_com')
        .then((response) => {
          console.log('Correo enviado con éxito:', response);
          setEnviado(true);
          setFormData({
            nombre: "",
            email: "",
            asunto: "",
            mensaje: "",
          });
        })
        .catch((error) => {
          console.error('Error al enviar el correo:', error);
        });
    };
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    return (
      <div>
        {enviado ? (
          <div>
            <p className="text-lg">¡Correo enviado con éxito!</p>
            <button className="btn btn-md bg-rose hover:bg-violet" onClick={() => setEnviado(false)}>Enviar otro correo</button>
          </div>
        ) : (
          <form className="space-y-8 w-full max-w-[780px]" ref={form} onSubmit={sendEmail}>
            {/* Campos de formulario */}
            <div className="flex gap-8">
              <input
                className="input"
                type="text"
                placeholder="Nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                
              />
              <input
                className="input"
                type="email"
                placeholder="E-mail"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <input
              className="input"
              type="text"
              placeholder="Asunto"
              name="asunto"
              value={formData.asunto}
              onChange={handleChange}
            />
            <textarea
              className="textarea"
              placeholder="Mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
            ></textarea>
            <button className="btn btn-lg bg-rose hover:bg-violet" type="submit">
              Enviar
            </button>
          </form>
        )}
      </div>
    );
  };

  export default FormContacto;
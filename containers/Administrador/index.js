import React, { useState, useEffect } from "react";

import { Header, Footer, Wrapper, Boton } from "../../components";
import { Escuelas, ContenedorAgregar, ContenedorEscuelita } from "./styles";
import agregarEscuelita from "../../pages/api/escuelas/add";
import obtenerEscuelas from "../../pages/api/escuelas/index";
import eliminarEscuela from "../../pages/api/escuelas/delete";
import actualizarEscuela from "../../pages/api/escuelas/edit";

function AdministradorContainer() {
  //Objeto vacio para cargar una nueva escuela
  const [escuela, setEscuela] = useState({
    imagen: "",
    name: "",
    barrio: "",
    direccion: "",
    telefono: "",
  });

  //Escuelas cargadas en base de datos
  const [escuelas, setEscuelas] = useState([]);

  //Cuando se esta cargando un campo del formulario se ejecuta esta funcion y actualiza el valor para el campo especifico
  const cambiarCampo = (event) => {
    //Este metodo lo que hace es evitar que el componente se actualice por culpa de los eventos
    event.preventDefault();

    const campo = event.target.name;
    const value = event.target.value;

    setEscuela({ ...escuela, [campo]: value });
  };

  //Luego de enviar el formulario a guardar se vacia el formulario
  const vaciarFormulario = () => {
    const escuelaVacia = Object.assign(
      {},
      ...Object.keys(escuelas).map(([key]) => ({ [key]: "" }))
    );

    setEscuela(escuelaVacia);
  };

  //Guarda la escuela en base de datos
  const cargarEscuelita = async (event) => {
    event.preventDefault();

    await agregarEscuelita(escuela);
    vaciarFormulario();
  };

  const eliminarEscuelita = async (e, id) => {
    e.preventDefault();

    await eliminarEscuela(id);

    const respuesta = await obtenerEscuelas();

    setEscuelas(respuesta);
  };

  const actualizarEscuelita = async (event, id) => {
    event.preventDefault();

    await actualizarEscuela(escuela, id);
  };

  useEffect(() => {
    //Funcion asincrona que se ejecuta al cargar el componente y se trae todas las escuelas de la base de datos
    const fn = async () => {
      const respuesta = await obtenerEscuelas();

      setEscuelas(respuesta);
    };

    fn();
  }, [escuelas]);

  return (
    <>
      <Wrapper direction="column">
        <Escuelas>
          <h1>Administrador de Escuelas</h1>

          <ContenedorAgregar>
            <h2>Agregar Escuelita</h2>

            <form>
              <input onChange={cambiarCampo} type="text" name="imagen" placeholder="URL imagen" />
              <input onChange={cambiarCampo} type="text" name="name" placeholder="Nombre escuela" />
              <input onChange={cambiarCampo} type="text" name="barrio" placeholder="Barrio" />
              <input onChange={cambiarCampo} type="text" name="direccion" placeholder="Direccion" />
              <input onChange={cambiarCampo} type="text" name="telefono" placeholder="Contacto" />

              <button onClick={cargarEscuelita} id="agregar">
                Agregar
              </button>
            </form>
          </ContenedorAgregar>

          {escuelas?.map((escuela) => (
            <ContenedorEscuelita key={escuela.id}>
              <form>
                <input
                  type="text"
                  name="imagen"
                  placeholder="URL imagen"
                  defaultValue={escuela.imagen}
                  onChange={cambiarCampo}
                />
                <input
                  type="text"
                  name="name"
                  placeholder="Nombre escuela"
                  defaultValue={escuela.name}
                  onChange={cambiarCampo}
                />
                <input
                  type="text"
                  name="barrio"
                  placeholder="Barrio"
                  defaultValue={escuela.barrio}
                  onChange={cambiarCampo}
                />
                <input
                  type="text"
                  name="direccion"
                  placeholder="Direccion"
                  defaultValue={escuela.direccion}
                  onChange={cambiarCampo}
                />
                <input
                  type="text"
                  name="telefono"
                  placeholder="Contacto"
                  defaultValue={escuela.telefono}
                  onChange={cambiarCampo}
                />

                <button id="modificar" onClick={(e) => actualizarEscuelita(e, escuela.id)}>
                  Modificar
                </button>

                <button id="eliminar" onClick={(e) => eliminarEscuelita(e, escuela.id)}>
                  Eliminar
                </button>
              </form>
            </ContenedorEscuelita>
          ))}
        </Escuelas>
      </Wrapper>
    </>
  );
}
export default AdministradorContainer;

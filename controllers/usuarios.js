const { response, request } = require("express");

const usuariosGet = (req = request, res = response) => {
  const query = req.query;

  res.json({
    msg: "Get api - controlador",
    query,
  });
};

const usuariosPost = (req, res = responce) => {
  const { nombre, edad } = req.body;

  res.json({
    msg: "Post api - usuariosPost",
    nombre,
    edad,
  });
};

const usuariosPut = (req, res = responce) => {
  const { id } = req.params;

  res.json({
    msg: "Put api - usuariosPut",
    id,
  });
};

const usuariosPatch = (req, res = responce) => {
  res.json({
    msg: "Patch api - usuariosPatch",
  });
};

const usuariosDelete = (req, res = responce) => {
  res.json({
    msg: "Delete api - usuariosDelete",
  });
};

module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosPatch,
  usuariosDelete,
};

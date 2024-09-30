const { Router } = require("express");
const UsuarioController = require("../controllers/UsuarioController.js");

const usuarioController = new UsuarioController();

const router = Router();

router.get("/usuarios", (req, res) => usuarioController.pegarTodos(req, res));
router.get("/usuarios/topCincoAreas", (req, res) =>
  usuarioController.pegarUsuarios(req, res)
);
router.get("/usuarios/:uuid", (req, res) =>
  usuarioController.pegarPorId(req, res)
);
router.post("/usuarios", (req, res) => usuarioController.criarNovo(req, res));
router.put("/usuarios/:uuid", (req, res) =>
  usuarioController.atualizar(req, res)
);
router.delete("/usuarios/:uuid", (req, res) =>
  usuarioController.excluir(req, res)
);

// routes/userRoutes.js
import { updateUser } from '../controllers/userController.js';

// Atualizar usuário pelo username
router.
router.

rou
put('/users/:username', updateUser);



e
export default router;

module.exports = router;
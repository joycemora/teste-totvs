const { where } = require("sequelize");
const { Op } = require("sequelize");
const UsuarioServices = require("../services/UsuarioServices.js");
const EnvironmentsServices = require("../services/EnvironmentsServices");

class UsuarioController {
  constructor() {
    this.usuarioServices = new UsuarioServices();
    this.environmentsServices = new EnvironmentsServices();
  }

  async pegarTodos(req, res) {
    try {
      const listaDeRegistro = await this.usuarioServices.pegarTodosOsRegistros({
        where: {
          active: true,
          createdAt: {
            [Op.gte]: new Date("2024-01-01"),
            [Op.lt]: new Date("2025-01-01"),
          },
        },
      });
      return res.status(200).json(listaDeRegistro);
    } catch (erro) {
      console.error(erro);
      res.status(500).json({ mensagem: "Erro na busca." });
    }
  }

  async pegarUsuarios(req, res) {
    try {
      const listaDeUsuarios =
        await this.usuarioServices.topCincoAreasComEnvironments();
      return res.status(200).json(listaDeUsuarios);
    } catch (erro) {
      console.error(erro);
      res.status(500).json({ mensagem: "Erro na busca." });
    }
  }

  async pegarPorId(req, res) {
    const { uuid } = req.params;
    try {
      const registro = await this.usuarioServices.pegarRegistroPorId(uuid);
      return res.status(200).json(registro);
    } catch (erro) {
      console.error(erro);
      res.status(500).json({ mensagem: "Erro na busca." });
    }
  }

  async criarNovo(req, res) {
    const dadosParaCriacao = req.body;
    try {
      const novoUsuario = await this.usuarioServices.criarRegistro(
        dadosParaCriacao
      );

      if (
        dadosParaCriacao.environments &&
        Array.isArray(dadosParaCriacao.environments)
      ) {
        const environments = dadosParaCriacao.environments;
        const ambientesCriados = await Promise.all(
          environments.map(async (environment) => {
            return await this.environmentsServices.criarRegistro({
              ...environment,
              usuario_id: novoUsuario.uuid,
            });
          })
        );
        return res.status(200).json({
          usuario: novoUsuario,
          environments: ambientesCriados,
        });
      }
      return res.status(200).json(novoUsuario);
    } catch (erro) {
      console.error(erro);
      res.status(500).json({ mensagem: "Erro na criação." });
    }
  }

  async atualizar(req, res) {
    const { uuid } = req.params;
    const dadosAtualizacao = req.body;

    const camposPermitidos = [
      "squad",
      "active",
      "activeEnvironments",
      "environments",
    ];
    const dadosFiltrados = {};

    for (const campo of camposPermitidos) {
      if (dadosAtualizacao[campo] !== undefined) {
        if (
          campo === "active" &&
          typeof dadosAtualizacao[campo] !== "boolean"
        ) {
          return res
            .status(400)
            .json({ mensagem: 'O campo "active" deve ser true ou false.' });
        }
        dadosFiltrados[campo] = dadosAtualizacao[campo];
      }
    }

    try {
      const usuarioAtualizado = await this.usuarioServices.atualizarUsuario(
        uuid,
        dadosFiltrados
      );
      return res.status(200).json(usuarioAtualizado);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async excluir(req, res) {
    const { uuid } = req.params;
    try {
   

      return res
        .status(500)
        .json({ mensagem: "A exclusão de dados não está permitida!" });
    } catch (erro) {
      console.error(erro);
    }
  }
}

module.exports = UsuarioController;
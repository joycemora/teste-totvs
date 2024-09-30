// controllers/userController.js
import User from '../models/user.js';

// Atualizar o campo isActive de um usuário
export const updateUser = async (req, res) => {
  const { username } = req.params;
  const { isActive } = req.body;

  try {
    const user = await User.findOneAndUpdate(
      { username }, 
      { isActive }, 
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    res.status(200).json({
      message: `Usuário ${username} atualizado com sucesso`,
      user,
    });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar o usuário', error });
  }
};
{
    "isActive"; false
  }
  
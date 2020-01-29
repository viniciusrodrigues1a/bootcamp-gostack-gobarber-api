import User from '../models/User';

class UserController {
  async store(req, res) {
    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (!userExists) {
      const { id, name, email, provider } = await User.create(req.body);

      return res.json({
        id,
        name,
        email,
        provider,
      });
    }
    return res.json({ error: 'Email already registered' });
  }

  async update(req, res) {
    const { email, oldPassword, password } = req.body;

    const user = await User.findByPk(req.userId);

    if (email && email !== user.email) {
      const userExists = await User.findOne({ where: { email } });

      if (!userExists) {
        return res.status(401).json({ error: 'User already exists' });
      }
    }

    if (!oldPassword || !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'Wrong password' });
    }

    if (oldPassword === password) {
      return res
        .status(401)
        .json({ error: 'Old and new password are the same' });
    }

    const { id, name, provider } = await user.update(req.body);

    return res.json({
      id,
      name,
      email,
      provider,
    });
  }
}

export default new UserController();

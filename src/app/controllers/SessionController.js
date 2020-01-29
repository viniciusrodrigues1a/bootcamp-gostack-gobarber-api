import jwt from 'jsonwebtoken';
import authConfig from '../../config/auth';

import User from '../models/User';

class Session {
  async store(req, res) {
    const { name, email } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ error: 'Email not registered' });
    }

    const { id, password } = req.body;

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'Wrong password' });
    }

    return res.json({
      user: {
        id,
        name,
        email,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new Session();

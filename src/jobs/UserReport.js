import Mail from '../lib/Mail';

export default {
  key: 'UserReport',
  async handle({ data }) {
    const { user } = data;

    await Mail.sendMail({
      from: 'Queue Test <queue@queuetest.com.br>',
      to: `${user.name} <${user.email}>`,
      subject: 'User Register',
      html: `Hello, ${user.name}, Welcome to my queue system ;)`,
    });
  },
};

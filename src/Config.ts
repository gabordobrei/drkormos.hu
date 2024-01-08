export class Config {
  static get(): Config {
    return new Config(process.env);
  }

  constructor(private readonly envConfig: NodeJS.ProcessEnv) {}

  contactForm = {
    to: this.get('CONTACT_EMAIL_TO', 'gabor@dobrei.com'),
    sendgridApiKey: this.get('SENDGRID_API_KEY')
  };

  private get(name: string, defaultValue?: string): string {
    const value = this.envConfig[name] ?? defaultValue;

    if (!value) throw new Error(`Missing env: $${name}`);

    return value;
  }
}

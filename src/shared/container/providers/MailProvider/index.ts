import { container } from 'tsyringe';

import IMailProvider from './models/IMailProvider';

import MailProvider from './implementations/EtherealMailProvider';

const providers = {
    ethereal: MailProvider,
};

container.registerSingleton<IMailProvider>('MailProvider', providers.ethereal);

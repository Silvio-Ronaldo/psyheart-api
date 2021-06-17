import { container } from 'tsyringe';

import IMailTemplateProvider from './models/IMailTemplateProvider';

import HandlebarsProvider from './implementations/HandlebarsMailTemplateProvider';

const providers = {
    handlebars: HandlebarsProvider,
};

container.registerSingleton<IMailTemplateProvider>(
    'MailTemplateProvider',
    providers.handlebars,
);

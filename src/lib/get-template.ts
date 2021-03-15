import chalk from 'chalk';
import enquirer from 'enquirer';
import { ITemplate, TEMPLATES } from '../contracts';

export const getTemplate = async (): Promise<ITemplate> => {
  const availableTemplates: string[] = TEMPLATES.map((t) => t.name);

  const message = 'Select a template:';

  const { selectedTemplate } = await enquirer.prompt<{selectedTemplate: string}>({
    type: 'select',
    name: 'selectedTemplate',
    message,
    choices: availableTemplates,
  });

  const templateName = chalk.reset(selectedTemplate);

  const template = TEMPLATES.find((t) => chalk.reset(t.name) === templateName);

  if (!template) {
    throw new Error(`Can't resolve "${template}" template.`);
  }

  return template;
};

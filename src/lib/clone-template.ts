import shelljs from 'shelljs';
import { ITemplate, ProjectVars } from '../contracts';

export const cloneTemplate = (projectAbsolutePath: string, template: ITemplate) => {
  const commandToClone: string = template.exec.replace(ProjectVars.name, projectAbsolutePath);
  shelljs.exec(commandToClone);

  const commandToReInitGit: string = [
    `cd ${projectAbsolutePath}`,
    'rm -rf .git/*',
    'git init',
    'git add .',
    'git commit -m \'Initial commit\'',
  ].join(' && ');

  shelljs.exec(commandToReInitGit);
};

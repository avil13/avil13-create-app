import { Chalk } from 'chalk';
import path from 'path';
import { toKebabCase } from './utils/to-kebab-case';

export interface ITemplate {
  name: string;
  exec: string
  color: keyof Chalk;
}

export class InitDTO {
  readonly projectName: string = '';

  readonly rootDir: string = '';

  readonly targetDir: string = '';

  readonly projectAbsolutePath: string = '';

  constructor(param: {
    targetDir: string;
    rootDir: string;
  }) {
    const { rootDir, targetDir } = param;

    this.rootDir = rootDir;
    this.targetDir = targetDir;
    this.projectName = toKebabCase(path.basename(targetDir));
    this.projectAbsolutePath = path.join(this.rootDir, this.targetDir);
  }

  get projectAbsolutePathEscaped(): string {
    return this.projectAbsolutePath.replace(/(\s+)/g, '\\$1');
  }
}

export enum ProjectVars {
  name = '{project-name}',
  defaultProjectName = 'my-project',
}

export const TEMPLATES: ITemplate[] = [
  {
    name: '[ts] simple app',
    exec: `git clone git@github.com:avil13/template-ts-package.git --branch=feat/single --depth=1 ${ProjectVars.name}`,
    color: 'cyan',
  },
  {
    name: '[ts] monorepo',
    exec: `git clone git@github.com:avil13/template-ts-package.git --branch=feat/monorepo --depth=1 ${ProjectVars.name}`,
    color: 'cyan',
  },
];

export const FILES = [
  'package.json',
  'README.md',
];

export const templateTitleName = 'template-ts-package';

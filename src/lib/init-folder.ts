import { prompt } from 'enquirer';
import fs from 'fs';
import { InitDTO, ProjectVars } from '../contracts';
import { log } from '../utils/log';

/**
 *
 * @param pathToCurrentDir
 */
export const initFolder = async (pathToCurrentDir: string): Promise<InitDTO> => {
  console.log(''); // empty string

  const { name } = await prompt<{ name: string }>({
    type: 'input',
    name: 'name',
    message: 'Project name:',
    initial: ProjectVars.defaultProjectName,
  });

  if (!name || `${name}`.trim() === '') {
    throw new Error('Not valid "name"');
  }

  const targetDir = name;

  const initDto = new InitDTO({
    rootDir: pathToCurrentDir,
    targetDir,
  });

  const projectDir = initDto.projectAbsolutePath;

  log.info(`\nScaffolding project in "${projectDir}"`);

  if (fs.existsSync(projectDir)) {
    const existing = fs.readdirSync(projectDir);

    if (existing.length) {
      const { yes } = await prompt<{ yes: boolean }>({
        type: 'confirm',
        name: 'yes',
        initial: 'Y',
        message:
          `Target directory ${targetDir} is not empty.\n`
          + 'Remove existing files and continue?',
      });

      if (yes) {
        // remove folder
        // TODO: shelljs.rm('-rf', root);
        console.log('=>', 'shelljs.rm(\'-rf\', root);', projectDir);
      } else {
        process.exit();
      }
    }
  }

  fs.mkdirSync(projectDir, { recursive: true });

  return initDto;
};

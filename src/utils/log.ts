import chalk from 'chalk';
import { InitDTO } from '../contracts';

export const log = {
  info(str: string) {
    console.log(chalk.green(str));
  },
  success(dto: InitDTO) {
    console.log(chalk.bold.cyan(dto.projectName));
  },
};

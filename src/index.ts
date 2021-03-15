import { InitDTO, ITemplate, templateTitleName } from './contracts';
import {
  cloneTemplate, getTemplate, initFolder, log, renameTitleNames,
} from './lib';

const rootDir: string = process.cwd();

const run = async () => {
  const initDto: InitDTO = await initFolder(rootDir);

  const template: ITemplate = await getTemplate();

  await cloneTemplate(initDto.projectAbsolutePath, template);

  await renameTitleNames(initDto.projectAbsolutePath, templateTitleName, initDto.projectName);

  return initDto;
};

run()
  .then((dto: InitDTO) => {
    log.success(dto);
  })
  .catch((error) => {
    console.error(error);
  });

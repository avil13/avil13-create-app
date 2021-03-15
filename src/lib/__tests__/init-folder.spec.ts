import { InitDTO } from '../../contracts';
import { initFolder } from '../init-folder';

jest.mock('fs');
jest.mock('../../utils/log');

jest.mock('enquirer', () => ({
  prompt: () => Promise.resolve({name: 'path/to/My super project'}),
}));

describe('initFolder', () => {
  it('', async () => {
    const dto = await initFolder('/root/code');

    expect(dto).toEqual<InitDTO>({
      rootDir: '/root/code',
      projectAbsolutePath: '/root/code/path/to/My super project',
      projectName: 'my-super-project',
      targetDir: 'path/to/My super project',
    });
  });
});

import { renameStringInFile } from '../rename-title-names';

jest.mock('fs', () => ({
  writeFileSync() {
  },
  readFileSync() {
    return `
# template-ts-package

## template-ts-package
`;
  },
}));

describe('renameStringInFile', () => {
  it('rename', () => {
    const etalon = `
# mega code

## mega code
`;

    const res = renameStringInFile('/dit/path', 'template-ts-package', 'mega code');

    expect(res).toBe(etalon);
  });
});

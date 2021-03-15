import { getTemplate } from '..';

jest.mock('enquirer', () => ({
  prompt: () => Promise.resolve({selectedTemplate: '[ts] monorepo'}),
}));

describe('get-template', () => {
  it('getTemplate', async () => {
    const res = await getTemplate();

    expect(res).toEqual(expect.objectContaining({
      name: '[ts] monorepo',
      color: 'cyan',
      exec: expect.stringContaining('git clone'),
    }));
  });
});

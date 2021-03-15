import fs from 'fs';
import path from 'path';
import { FILES } from '../contracts';

const renameStringInFile = (filePath: string, oldTitle: string, newTitle: string) => {
  const content = fs.readFileSync(filePath, 'utf-8');
  const strings = content.split('\n');
  const reg = new RegExp(oldTitle, 'gi');
  return strings.map((str) => str.replace(reg, newTitle)).join('\n');
};

/**
 *
 * @param dirPath
 * @param oldTitle
 * @param newTitle
 */
export const renameTitleNames = (dirPath: string, oldTitle: string, newTitle: string) => {
  FILES.forEach((file) => {
    renameStringInFile(path.join(dirPath, file), oldTitle, newTitle);
  });
};

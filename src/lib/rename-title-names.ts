import fs from 'fs';
import path from 'path';
import { FILES } from '../contracts';

export const renameStringInFile = (filePath: string, oldTitle: string, newTitle: string) => {
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
    const filePath = path.join(dirPath, file);
    const text = renameStringInFile(filePath, oldTitle, newTitle);

    fs.writeFileSync(filePath, text);
  });
};

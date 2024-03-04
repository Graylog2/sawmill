import fs from 'fs';

const writeThemeFile = (fileName: string, theme: unknown) => {
  const fileContent = JSON.stringify(theme, null, 2);

  fs.writeFile(fileName, fileContent, (err) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.error(`Error writing theme ${fileName}:`, err);
    } else {
      // eslint-disable-next-line no-console
      console.log(`Theme "${fileName}" has been created.`);
    }
  });
};

export default writeThemeFile;

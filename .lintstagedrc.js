module.exports = {
  '**/*.{js,jsx,ts,tsx,md,css,scss,json}': ['yarn prettier --write'],
  '**/*.{js,jsx}': (filenames) =>
    `next lint --fix --file ${filenames
      .map((file) => file.split(process.cwd())[1])
      .join(' --file ')}`,
  '**/*.{js,jsx,ts,tsx}': [
    'yarn jest --bail --findRelatedTests --watchAll=false',
  ],
};

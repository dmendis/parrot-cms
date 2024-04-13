// @ts-check
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    {
        languageOptions: {
            parserOptions: {
                project: true,
            },
        },
    },
    {
        files: ['*.ts'],
        ...tseslint.configs.disableTypeChecked,
    },
    {
        ignores: ['dist/*']
    }
);
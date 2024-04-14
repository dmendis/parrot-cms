// @ts-check
import tseslint from 'typescript-eslint';

export default tseslint.config(
    ...tseslint.configs.stylisticTypeChecked,
    {
        extends: tseslint.configs.recommendedTypeChecked,
        rules: {
            semi: ['error', 'always'],
            quotes: [2, 'single', { 
                avoidEscape: true,
                allowTemplateLiterals: true
            }]
        }
    },
    {
        languageOptions: {
            parserOptions: {
                project: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },
    {
        ignores: ['dist/*']
    }
);
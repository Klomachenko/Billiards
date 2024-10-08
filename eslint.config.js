import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import pluginReact from "eslint-plugin-react";
import pluginImport from "eslint-plugin-import";
import pluginJsxA11y from "eslint-plugin-jsx-a11y";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      globals: globals.browser,
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
        // project: './tsconfig.json',
      },
    },
    plugins: {
      react: pluginReact,
      "@typescript-eslint": tseslint,
      import: pluginImport,
      "jsx-a11y": pluginJsxA11y,
    },
    settings: {
      react: {
        version: 'detect', // React 버전을 자동으로 감지
      },
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      "import/newline-after-import": ["error", { "count": 1 }],
      "react/jsx-filename-extension": [1, { "extensions": [".tsx", ".jsx"] }],
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          "js": "never",
          "jsx": "never",
          "ts": "always",
          "tsx": "always"
        }
      ],
      "no-use-before-define": "off",
      "@typescript-eslint/no-use-before-define": ["error"],
      "jsx-a11y/anchor-is-valid": "warn",
      "react/react-in-jsx-scope": "off", // 이 줄을 추가하여 경고 비활성화
    },
  },
  {
    rules: {
      ...tseslint.configs.recommended.rules,
      "react/react-in-jsx-scope": "off", // 추가
    },
  },
  {
    rules: {
      ...pluginReact.configs.flat.recommended.rules,
      "react/react-in-jsx-scope": "off", // 추가
      'react/prop-types': 'off', // prop-types 규칙 비활성화
    },
  },
  {
    // Airbnb 스타일 가이드 규칙 추가
    rules: {
      "import/named": "error",
      "import/default": "error",
      "import/namespace": "error",
      "import/export": "error",
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      // 여기에서 다른 Airbnb 규칙을 추가할 수 있습니다.
    },
  },
];

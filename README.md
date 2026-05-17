# @ddyscn/lint-config

个人用的 ESLint flat config，覆盖 JavaScript 和 TypeScript 项目。
*Personal ESLint flat config for both JavaScript and TypeScript projects.*

## 安装 / Install

```bash
npm install -D eslint @ddyscn/lint-config
```

需要 ESLint 9 或以上 / Requires ESLint 9+.

## 使用 / Usage

在项目根目录创建 `eslint.config.js`：
*Create `eslint.config.js` at the project root:*

```js
import config from '@ddyscn/lint-config'

export default config
```

或者扩展自定义规则 / Or extend with your own rules:

```js
import config from '@ddyscn/lint-config'

export default [
  ...config,
  {
    rules: {
      // your overrides
    },
  },
]
```

## 包含什么 / What's inside

- `@eslint/js` 推荐规则（适用于所有 JS/TS 文件）
- `typescript-eslint` 推荐规则（仅对 `*.ts` / `*.tsx` / `*.mts` / `*.cts`）
- 个人风格规则 / Personal style rules：
  - 无分号 / No semicolons
  - 单引号 / Single quotes
  - 逗号悬挂仅多行 / Trailing commas only on multiline
  - 数组/对象括号内空格 / Spaces inside array & object brackets
  - import 按字母顺序分组 / Alphabetized, grouped imports

## License

BSD-3-Clause

# mintal-utils

A high-quality utility function library based on Vue 3 + TypeScript + Vite, suitable for modern frontend projects. The original code was migrated and upgraded from the Vue2 utility library [liao_modules](https://www.npmjs.com/package/liao_modules), now fully adapted to the Vue3 ecosystem.

[English](README_EN.md) | [中文](README.md)

[![npm version](https://img.shields.io/npm/v/mintal-utils)](https://www.npmjs.com/package/mintal-utils)
[![npm downloads](https://img.shields.io/npm/dm/mintal-utils.svg)](https://www.npmjs.com/package/mintal-utils)

## Features
- All source code written in TypeScript for type safety
- Direct import support for Vite and Vue3 projects
- Rich utility functions (string, array, object, encryption, cache, time, file, money, calculation, etc.)
- Practical service classes (such as user information service)
- Minimal dependencies, ready to use out of the box

## Installation

```bash
pnpm install mintal-utils
```

or

```bash
yarn add mintal-utils
```

## Local Demo
To view the complete demo examples, please pull the source code from GitHub and run locally:
```
https://github.com/Leo-Mintal/mintal-utils.git

pnpm install

pnpm dev
```

or

```bash
yarn install

yarn dev
```

## Usage

### Utility Functions/Service Classes

```ts
import { MStringUtil, MTimeUtil, MUserInfoService, MArrayUtil } from 'mintal-utils';

const camel = MStringUtil.underline2Camel('hello_world', false);
const now = MTimeUtil.getCurrentDate();
const arr = MArrayUtil.getUnion([1,2],[2,3]);
const userInfo = MUserInfoService.getSessionUserInfo();
```

## API Documentation

### MArrayUtil (Array Utility Class)
| Method           | Description                                               | Input Parameters         | Output                  |
| ---------------- | --------------------------------------------------------- | ------------------------ | ----------------------- |
| getIntersection  | Get the intersection of two arrays, elements are numbers or strings | Array1, Array2          | Intersection of two arrays |
| getUnion         | Get the union of two arrays, elements are numbers or strings | Array1, Array2          | Union of two arrays     |
| hasOneOf         | Check if the query array has at least one element in the target array | Target array, Query array | true-includes false-not includes |
| isEmpty          | Check if array is empty                                   | Array to check           | true-yes false-no       |
| splitByProp      | Group by specific field                                   | Array to group, Field name | Returns new array       |

### MObjectUtil (Object Utility Class)
| Method          | Description                                               | Input Parameters         | Output     |
| --------------- | --------------------------------------------------------- | ------------------------ | ---------- |
| diff            | Compare two objects and return old and new values when different | New object, Old object   | object     |
| getTypeByObj    | Get data type                                             | Data to check            | Data type  |
| judgeType       | JavaScript data type checking                             | Data to check, Type to check | boolean |
| isEmptyObject   | Check if it's an empty object                             | object                   | boolean    |
| isEmpty         | Check if it's empty                                       | object                   | boolean    |
| isObject        | Whether it's an object type                               | Data to check            | boolean    |
| deepClone       | Deep copy                                                 | object                   | object     |
| equals          | Compare if two objects are the same                       | object1, object2         | boolean    |

### MStringUtil (String Utility Class)
| Method            | Description                         | Input Parameters         | Output    |
| ----------------- | ----------------------------------- | ------------------------ | --------- |
| underline2Camel   | Convert underscore to camelCase     | String, Capitalize first letter | String |
| camel2underline   | Convert camelCase to underscore     | String                   | String    |
| isBlank           | Check if string is empty             | String                   | boolean   |
| isNotBlank        | Check if string is not empty        | String                   | boolean   |
| isDecimals        | Check if it's a decimal              | String/Number            | boolean   |
| getRandom         | Generate x-digit hexadecimal string  | number                   | string    |
| base64ToHEX       | Convert base64 to hexadecimal string | string                   | string    |
| hexToBase64       | Convert hexadecimal string to base64 | string                   | string    |
| base64ToBytes     | Convert base64 to bytes              | string                   | bytes     |
| utf8ToBase64      | Convert utf8 to base64               | string                   | string    |
| isEmail           | Check if string is email format      | string                   | boolean   |
| isPhone           | Check if string is phone number format | string                  | boolean   |
| reverse           | Reverse string                       | string                   | string    |
| removeAllSpaces   | Remove all spaces from string        | string                   | string    |

### MNumberUtil (Number Utility Class)
| Method       | Description                     | Input Parameters         | Output         |
| ------------ | ------------------------------- | ------------------------ | -------------- |
| toDecimal2   | Round to 2 decimal places       | Number to process        | Processed number |

### MToolUtil (General Utility Class)
| Method           | Description               | Input Parameters                                        | Output             |
| ---------------- | ------------------------- | ------------------------------------------------------- | ------------------ |
| getExplorer      | Get current browser name  | //                                                      | string             |
| getQueryString   | Get URL parameters        | Parameter name                                          | Parameter value    |
| getNowRoute      | Get current route         | //                                                      | string             |
| getNowHost       | Get current host          | //                                                      | string             |
| getNowProtocol   | Get current protocol      | //                                                      | string             |
| addUrlParam      | Add URL parameter         | url, Parameter name, Parameter value                     | string             |
| delUrlParam      | Delete URL parameter      | url, Parameter name                                     | string             |
| urlSearch        | Parse URL parameters      | url                                                     | Object             |
| isBlank          | Check if data is empty    | Any type                                                | boolean            |
| debounce         | Function debounce wrapper | Function to debounce, Time interval (ms), Execute first then debounce | Debounced function |

### MValidateUtil (Validation Utility Class)
| Method           | Description                   | Input Parameters         | Output     |
| ---------------- | ----------------------------- | ------------------------ | ---------- |
| isEmail          | Validate email format         | String                   | boolean    |
| isPhone          | Validate phone number format  | String                   | boolean    |
| isURL            | Validate URL format           | String                   | boolean    |
| isIDCard         | Validate ID card number       | String                   | boolean    |
| isChinese        | Validate Chinese characters    | String                   | boolean    |
| isNumber         | Validate pure numbers         | String                   | boolean    |
| isIPv4           | Validate IPv4 address         | String                   | boolean    |
| isPostalCode     | Validate postal code          | String                   | boolean    |
| isPlateNumber    | Validate Chinese license plate | String                  | boolean    |

### MCacheUtil (Cache Utility Class)
| Method                | Description                                                    | Input Parameters       | Output                                      |
| --------------------- | -------------------------------------------------------------- | ---------------------- | ------------------------------------------- |
| getSessionObject      | Get sessionStorage by key, with JSON serialization. Overwrite if exists | key        | Returns JSON.parse(value) if exists, otherwise null |
| setSessionObject      | Set sessionStorage by key, with JSON serialization. Overwrite if exists | key, value | //                                          |
| removeSessionObject   | Delete sessionStorage by key                                   | key        | //                                          |
| getLocalObject        | Get localStorage by key, with JSON serialization. Overwrite if exists | key        | Returns JSON.parse(value) if exists, otherwise null |
| setLocalObject        | Set localStorage by key, with JSON serialization. Overwrite if exists | key, value | //                                          |
| removeLocalObject     | Delete localStorage by key                                     | key        | //                                          |
| setCookie             | Set Cookie                                                     | key, value, days | //                                     |
| getCookie             | Get Cookie                                                     | key        | value/null                                 |
| removeCookie          | Delete Cookie                                                  | key        | //                                          |

### MCalcUtil (Calculation Utility Class)
| Method            | Description                | Input Parameters                      | Output           |
| ----------------- | -------------------------- | ------------------------------------- | ---------------- |
| calcColumnWidth   | Table column width conversion formula | Character length, Is sort field | Calculated column width |
| plus              | Addition calculation (accepts N parameters) | Number1, Number2, ... NumberN | Number           |
| minus             | Subtraction calculation (accepts N parameters) | Number1, Number2, ... NumberN | Number           |
| times             | Multiplication calculation (accepts N parameters) | Number1, Number2, ... NumberN | Number           |
| divide            | Division calculation (accepts N parameters) | Number1, Number2, ... NumberN | Number           |
| round             | Round to N decimal places   | Number, Decimal places to round       | Number           |

### MMoneyUtil (Money Utility Class)
| Method           | Description                         | Input Parameters           | Output   |
| ---------------- | ----------------------------------- | -------------------------- | -------- |
| num2ChineseNum   | Convert amount within 10 digits to Chinese uppercase | Amount to convert | string   |
| toDecimalSplit   | Force decimal retention (truncate)  | Amount, Decimal places    | string   |
| toDecimal        | Force decimal retention, round      | Amount, Decimal places    | string   |

### MEncryptUtil (Encryption Utility Class)
| Method         | Description        | Input Parameters     | Output    |
| -------------- | ------------------ | -------------------- | --------- |
| MD5            | MD5 algorithm encryption | Source       | string    |

### MFileUtil (File Utility Class)
| Method                | Description                               | Input Parameters          | Output          |
| --------------------- | ---------------------------------------- | ------------------------- | --------------- |
| dataStreamCovertPdf   | Convert PDF data stream to PDF file and open in new window | Binary data stream | //               |
| Pdfbase64ToBlob       | Convert PDF base64 data to blob          | Pdfbase64Data            | PDF format blob |
| htmlBase64            | Convert HTML to base64                   | dom                      | base64          |

### MUserInfoService (User Information Service)
| Method                | Description                        | Input Parameters | Output   |
| --------------------- | ---------------------------------- | ---------------- | -------- |
| getUserInfo           | Get user information (reserved, to be completed) | //   | void     |
| getSessionUserInfo    | Get user information from session  | //               | object   |
| removeSessionUserInfo | Remove user information from session | //              | void     |
| getRouteInfo          | Get route information (reserved, to be completed) | // | void     |

## Dependencies
- vue@^3.x
- moment
- number-precision
- html2canvas

## Contributing
Welcome issues, PRs and suggestions!

## License
MIT

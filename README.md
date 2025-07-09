# mintal-utils

基于 Vue 3 + TypeScript + Vite 的高质量工具函数库，适用于现代前端项目。原始代码由 Vue2 工具库 [liao_modules](https://www.npmjs.com/package/liao_modules) 升级迁移而来，现已全面适配 Vue3 生态。

[![npm version](https://img.shields.io/npm/v/mintal-utils)](https://www.npmjs.com/package/mintal-utils)
[![npm downloads](https://img.shields.io/npm/dm/mintal-utils.svg)](https://www.npmjs.com/package/mintal-utils)

## 特性
- 全部源码 TypeScript 编写，类型安全
- 支持 Vite、Vue3 项目直接引入
- 丰富的工具函数（字符串、数组、对象、加密、缓存、时间、文件、金额、计算等）
- 实用服务类（如用户信息服务）
- 依赖精简，开箱即用

## 安装

```bash
pnpm install mintal-utils
```

或

```bash
yarn add mintal-utils
```

## 使用方法

### 工具函数/服务类

```ts
import { MStringUtil, MTimeUtil, MUserInfoService, MArrayUtil } from 'mintal-utils';

const camel = MStringUtil.underline2Camel('hello_world', false);
const now = MTimeUtil.getCurrentDate();
const arr = MArrayUtil.getUnion([1,2],[2,3]);
const userInfo = MUserInfoService.getSessionUserInfo();
```


## API 说明

### MArrayUtil（数组工具类）
| 方法            | 注释                                               | 入参                     | 出参                   |
| --------------- | -------------------------------------------------- | ------------------------ | ---------------------- |
| getIntersection | 得到两个数组的交集, 两个数组的元素为数值或字符串   | 数组1、数组2             | 两个数组的交集         |
| getUnion        | 得到两个数组的并集, 两个数组的元素为数值或字符串   | 数组1、数组2             | 两个数组的并集         |
| hasOneOf        | 判断要查询的数组是否至少有一个元素包含在目标数组中 | 目标数组、需要查询的数组 | true-包含 false-不包含 |
| isEmpty         | 判断数组是否为空                                   | 需要判断的数组           | true-是 false-否       |
| splitByProp     | 根据特定字段分组                                   | 需要分组数组、字段名     | 返回新的数组           |

### MObjectUtil（对象工具类）
| 方法          | 注释                                                   | 入参                       | 出参     |
| ------------- | ------------------------------------------------------ | -------------------------- | -------- |
| diff          | 比较两个object，并返回不同时的旧值和新值               | 新对象、老对象             | object   |
| getTypeByObj  | 获取数据类型                                           | 待判断的数据               | 数据类型 |
| judgeType     | js数据类型判断                                         | 等待判断的数据、判断的类型 | boolean  |
| isEmptyObject | 判断是否是空对象                                       | object                     | boolean  |
| isEmpty       | 判断是否是空                                           | object                     | boolean  |
| isObject      | 是否为对象类型                                         | 等待判断的数据             | boolean  |
| deepClone     | 深拷贝                                                 | object                     | object   |
| equals        | 比较两个object是否相同                                 | object1、object2           | boolean  |

### MStringUtil（字符串工具类）
| 方法            | 注释                         | 入参         | 出参    |
| --------------- | ---------------------------- | ------------ | ------- |
| underline2Camel | 下划线转驼峰                 | 字符串, 是否首字母大写 | 字符串 |
| camel2underline | 驼峰转下划线                 | 字符串       | 字符串  |
| isBlank         | 字符串是否为空               | 字符串       | boolean |
| isNotBlank      | 字符串是否不为空             | 字符串       | boolean |
| isDecimals      | 是否为小数                   | 字符串/数字  | boolean |
| getRandom       | 生成x位16进制字符串          | number       | string  |
| base64ToHEX     | base64转16进制字符串         | string       | string  |
| hexToBase64     | 16进制字符串转base64         | string       | string  |
| base64ToBytes   | base64转bytes                | string       | bytes   |
| utf8ToBase64    | utf8转base64                 | string       | string  |
| isEmail         | 判断字符串是否为邮箱格式      | string       | boolean |
| isPhone         | 判断字符串是否为手机号格式    | string       | boolean |
| reverse         | 反转字符串                   | string       | string  |
| removeAllSpaces | 移除字符串中所有空格         | string       | string  |

### MNumberUtil（数字工具类）
| 方法       | 注释                     | 入参         | 出参         |
| ---------- | ------------------------ | ------------ | ------------ |
| toDecimal2 | 四舍五入强制保留两位小数 | 需保留的小数 | 处理后的小数 |

### MToolUtil（通用工具类）
| 方法           | 注释               | 入参                                                | 出参             |
| -------------- | ------------------ | --------------------------------------------------- | ---------------- |
| getExplorer    | 获取当前浏览器名称 | //                                                  | string           |
| getQueryString | 获取url参数        | 参数名                                              | 参数值           |
| getNowRoute    | 获取当前路由       | //                                                  | string           |
| getNowHost     | 获取当前host       | //                                                  | string           |
| getNowProtocol | 获取当前协议       | //                                                  | string           |
| addUrlParam    | 添加url参数        | url、参数名、参数值                                 | string           |
| delUrlParam    | 删除url参数        | url、参数名                                         | string           |
| urlSearch      | 解析url参数        | url                                                 | 对象             |
| isBlank        | 判断数据是否为空   | 任意类型                                            | boolean          |
| debounce       | 函数防抖封装       | 需要防抖的函数、时间间隔（毫秒）、是否先执行后防抖  | 防抖处理后的函数 |

### MValidateUtil（校验工具类）
| 方法           | 注释                   | 入参         | 出参     |
| -------------- | ---------------------- | ------------ | -------- |
| isEmail        | 校验是否为邮箱格式     | 字符串       | boolean  |
| isPhone        | 校验是否为手机号格式   | 字符串       | boolean  |
| isURL          | 校验是否为URL          | 字符串       | boolean  |
| isIDCard       | 校验是否为身份证号     | 字符串       | boolean  |
| isChinese      | 校验是否为中文         | 字符串       | boolean  |
| isNumber       | 校验是否为纯数字       | 字符串       | boolean  |
| isIPv4         | 校验是否为IPv4地址     | 字符串       | boolean  |
| isPostalCode   | 校验是否为邮政编码     | 字符串       | boolean  |
| isPlateNumber  | 校验是否为中国车牌号   | 字符串       | boolean  |

### MCacheUtil（缓存工具类）
| 方法                | 注释                                                    | 入参       | 出参                                      |
| ------------------- | ------------------------------------------------------- | ---------- | ----------------------------------------- |
| getSessionObject    | 获取指定key的sessionStorage，经过JSON序列化。存在则覆盖 | key        | 若存在返回JSON.parse(value)，否则返回null |
| setSessionObject    | 设置指定key的sessionStorage，经过JSON序列化。存在则覆盖 | key、value | //                                        |
| removeSessionObject | 删除指定key的sessionStorage                             | key        | //                                        |
| getLocalObject      | 获取指定key的localStorage，经过JSON序列化。存在则覆盖   | key        | 若存在返回JSON.parse(value)，否则返回null |
| setLocalObject      | 设置指定key的localStorage，经过JSON序列化。存在则覆盖   | key、value | //                                        |
| removeLocalObject   | 删除指定key的localStorage                               | key        | //                                        |
| setCookie           | 设置 Cookie                                             | key、value、天数 | //                                 |
| getCookie           | 获取 Cookie                                             | key        | value/null                               |
| removeCookie        | 删除 Cookie                                             | key        | //                                        |

### MCalcUtil（计算工具类）
| 方法            | 注释                | 入参                      | 出参           |
| --------------- | ------------------- | ------------------------- | -------------- |
| calcColumnWidth | 表格列宽转换公式    | 字符长度、是否是排序字段  | 计算后的列宽值 |
| plus            | 加法计算（接受N参） | 数字1、数字2、......数字N | 数字           |
| minus           | 减法计算（接受N参） | 数字1、数字2、......数字N | 数字           |
| times           | 乘法计算（接受N参） | 数字1、数字2、......数字N | 数字           |
| divide          | 除法计算（接受N参） | 数字1、数字2、......数字N | 数字           |
| round           | 四舍五入取N位小数   | 数字、取舍的小数点位数    | 数字           |

### MMoneyUtil（金钱工具类）
| 方法           | 注释                         | 入参           | 出参   |
| -------------- | ---------------------------- | -------------- | ------ |
| num2ChineseNum | 将十位数以内金额转为大写中文 | 需要转换的金额 | string |
| toDecimalSplit | 强制保留小数（截取）         | 金额、保留位数 | string |
| toDecimal      | 强制保留小数,四舍五入        | 金额、保留位数 | string |

### MEncryptUtil（加密工具类）
| 方法         | 注释        | 入参     | 出参    |
| ------------ | ----------- | -------- | ------- |
| MD5          | MD5算法加密 | 源       | string  |

### MFileUtil（文件工具类）
| 方法                | 注释                               | 入参          | 出参          |
| ------------------- | ---------------------------------- | ------------- | ------------- |
| dataStreamCovertPdf | pdf数据流转为pdf文件并新开窗口展示 | 二进制数据流  | //            |
| Pdfbase64ToBlob     | PDFbase64数据转换为blob            | Pdfbase64Data | Pdf格式的blob |
| htmlBase64          | 将html转换为base64                 | dom           | base64        |

### MUserInfoService（用户信息服务）
| 方法                | 注释                        | 入参 | 出参   |
| ------------------- | --------------------------- | ---- | ------ |
| getUserInfo         | 获取用户信息（预留，待完善）| //   | void   |
| getSessionUserInfo  | 获取session中的用户信息      | //   | object |
| removeSessionUserInfo | 删除session中的用户信息    | //   | void   |
| getRouteInfo        | 获取路由信息（预留，待完善）| //   | void   |

## 依赖
- vue@^3.x
- moment
- number-precision
- html2canvas

## 贡献
欢迎 issue、PR 及建议！

## License
MIT

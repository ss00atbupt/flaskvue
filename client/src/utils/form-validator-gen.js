import * as Validates from './validate.js'

/* 生成表单自定义校验函数 */
export const formValidateGen = (key, msg) => (rule, value, cb) => {
  if (Validates[key](value)) {
    cb()
  } else {
    cb(new Error(msg))
  }
}

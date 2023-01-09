/* 大小写字母，数字，下划线 */
export function validateName (str) {
  const reg = /^\w+$/
  return reg.test(str)
}
/* 长度不超过6位非空白字符 */
export function validatePass (str) {
  const reg = /^\S{1,6}$/
  return reg.test(str)
}

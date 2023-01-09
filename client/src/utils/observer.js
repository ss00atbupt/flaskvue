/* eslint-disable no-new */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-proto */
class Observer {
  constructor (data) {
    this.data = data
    this.walk(data)
  }
}
const p = Observer.prototype
const arrayProto = Array.prototype
const arrayMethods = Object.create(arrayProto)

  ;[
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
].forEach(function (item) {
  Object.defineProperty(arrayMethods, item, {
    value: function mutator () {
      console.log('array被访问')
      const original = arrayProto[item]
      const args = Array.from(arguments)
      original.apply(this, args)
      // console.log(this)
    }
  })
})

p.walk = function (obj) {
  let value
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      value = obj[key]
      if (typeof value === 'object') {
        if (Array.isArray(value)) {
          const augment = value.__proto__ ? protoAugment : copyAugment
          augment(value, arrayMethods, key)
          observeArray(value)
        }
        new Observer(value)
      }
      this.convert(key, value)
    }
  }
}

p.convert = function (key, value) {
  Object.defineProperty(this.data, key, {
    enumerable: true,
    configurable: true,
    get () {
      console.log(key + '被访问')
      return value
    },
    set (newVal) {
      console.log(key + '被修改，新' + key + '=' + newVal)
      if (newVal === value) return
      value = newVal
    }
  })
}

function observeArray (items) {
  for (let i = 0, l = items.length; i < l; i++) {
    observe(items[i])
  }
}

function observe (value) {
  if (typeof (value) !== 'object') return
  const ob = new Observer(value)
  return ob
}

function def (obj, key, value) {
  Object.defineProperty(obj, key, {
    value,
    enumerable: true,
    writable: true,
    configurable: true
  })
}

// 重新赋值Array的__proto__属性
function protoAugment (target, src) {
  target.__proto__ = src
}

// 兼容不支持__proto__的方法
// 不支持__proto__的直接修改相关属性方法
function copyAugment (target, src, keys) {
  for (let i = 0, l = keys.length; i < l; i++) {
    const key = keys[i]
    def(target, key, src[key])
  }
}
export default Observer

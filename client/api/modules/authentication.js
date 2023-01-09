import request from '@/utils/request'
const qs = require('qs')

export const url = {
  login: '/login',
  register: '/register',
  permission: '/permission',
  permissionTree: '/permission/tree',
  role: '/role',
  roleAssociatedPermission: '/permission/association/role'
}

export function login (username, password) {
  return request({
    url: '/login',
    method: 'post',
    data: qs.stringify({
      username: username,
      password: password
    }),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
  })
}
export function register (username, password) {
  return request({
    url: '/register',
    method: 'post',
    data: qs.stringify({
      username: username,
      password: password
    }),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
  })
}
export function getCurrentUser () {
  return request({
    url: '/me',
    method: 'get'
  })
}
export function logout () {
  return request({
    url: '/logout',
    method: 'post'
  })
}
export function renew () {
  return request({
    url: '/renew',
    method: 'get'
  })
}

// 获取roleCodeMap
export function queryRoleMap (pageNum = 1, pageSize = 100) {
  return request({
    url: '/role',
    method: 'get',
    params: {
      pageNum,
      pageSize
    }
  })
}

// 获取不同分类的权限名称
export function queryPermissionCategoryMap ({ type = '' }) {
  return request({
    method: 'get',
    url: '/permission/code/',
    params: { type }
  })
}

// 角色关联菜单
export function linkMenus (menus) {
  return request({
    url: '/permission/menu/association/role',
    method: 'put',
    data: menus
  })
}
// 根据角色获取关联的菜单
export function getMenusByRole (roleId) {
  return request({
    url: '/permission/menu/association/role/' + roleId,
    method: 'get'
  })
}

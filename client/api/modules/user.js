import request from '@/utils/request'

export const url = {
  user: '/user',
  users: '/users'
}

export function getUserList () {
  return request({
    url: url.users,
    method: 'get'
  })
}

export function getLoginUser () {
  return request({
    url: '/me',
    method: 'get'
  })
}

export function updateUser (user) {
  return request({
    url: '/user',
    method: 'put',
    data: user
  })
}
export function viewUser (userId) {
  return request({
    url: url.user,
    method: 'get',
    params: {
      id: userId
    }
  })
}
export function deleteUser (userId) {
  return request({
    url: `${url.user}/${userId}`,
    method: 'delete'
  })
}
export function updatePassword (form) {
  return request({
    url: '/user/password',
    method: 'post',
    data: form
  })
}
export function resetPassword (userKey) {
  return request({
    url: '/user/password/reset',
    method: 'post',
    params: { userKey }
  })
}

import request from '../utils/request'
import { apiGetModuleList, apiCompany, apiCompanyWheel, apiDataField } from './api'

// 获取业务板块列表
export async function getModuleList (params) {
  return request(apiGetModuleList, {
    params
  })
}

// 获取板块详情
export async function getModuleDetail (id) {
  return request(`${apiGetModuleList}/${id}`)
}

// 获取公司列表
export async function getCompanyList (params) {
  return request(apiCompany, {
    params
  })
}

// 根据公司id获取模块负责人列表
export async function getCompanyWheelList (params) {
  return request(apiCompanyWheel, {
    params
  })
}

// 新增业务板块 提交基本信息
export async function submitBasicMessage (data) {
  return request(apiGetModuleList, {
    method: 'post',
    data
  })
}

// 获取数据域列表
export async function getDataFieldList (params) {
  return request(apiDataField, {
    params
  })
}

// 创建数据域
export async function createDataField (data) {
  return request(apiDataField, {
    method: 'post',
    data
  })
}

// 编辑数据域
export async function editDataField (data) {
  return request(apiDataField, {
    method: 'put',
    data
  })
}

// 删除数据域
export async function deleteDataField (id) {
  return request(`${apiDataField}/${id}`, {
    method: 'delete'
  })
}

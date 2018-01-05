const interfaceDetail = {
  title: '机构管理--查询列表',
  tips: ['tips'],
  group: '门户--系统管理',
  decs: '',
  state: '开发中',
  creator: '侯门霸王',
  principal: '侯门霸王',
  request: {
    url: '/sys/org/list',
    method: 'GET',
    header: [
      { name: '', value: '', decs: '' },
      { name: '', value: '', decs: '' }
    ],
    data: [
      { name: 'name', type: 'String', decs: '名称', isRequired: true, defaultValue: '', rules: '' },
      { name: 'levelCode', type: 'String', decs: '机构的LevelCode', isRequired: true, defaultValue: '', rules: '' },
    ],
    example: {
      name: "dk3zHK27Is",
	    levelCode: "h5Nq0kJSrR"
    }
  },
  response: {
    header: [
      { name: '', value: '', decs: '' },
      { name: '', value: '', decs: '' }
    ],
    data: [
      { name: 'total', type: 'Number', decs: '总数', isRequired: true, defaultValue: '', rules: '' },
      { 
        name: 'result', type: 'Object', decs: '返回状态', isRequired: true, defaultValue: '', rules: '',
        childern: [
          { name: 'resultCode', type: 'Number', decs: '返回状态码', isRequired: true, defaultValue: '', rules: '', },
          { name: 'resultMessage', type: 'String', decs: '返回状态信息', isRequired: true, defaultValue: '', rules: '', },
        ]
      },
      { name: 'sort', type: 'Number', decs: '排序', isRequired: true, defaultValue: '', rules: '', },
      { name: 'entity', type: 'Object', decs: '返回数据', isRequired: true, defaultValue: '', rules: '',
        childern: [
          { name: 'lastPage', type: 'Boolean', decs: '是否为最后一页', isRequired: true, defaultValue: false, rules: '', },
          { name: 'pageSize', type: 'Number', decs: '每页数据长度', isRequired: true, defaudefaultValuelt: 10, rules: '', },
          { name: 'pageNumber', type: 'Number', decs: '当前页码', isRequired: true, defaultValue: 1, rules: '', },
          { name: 'firstPage', type: 'String', decs: '是否为第一页', isRequired: true, defaultValue: true, rules: '', },
          { name: 'list', type: 'Array', decs: '数据List', isRequired: true, defaultValue: '2017-07-13 09:54:44', rules: '',
            childern: [
              { name: 'create_time', type: 'String', decs: '创建时间', isRequired: true, defaultValue: '2017-07-13 09:54:44', rules: '', },
              { name: 'creator', type: 'String', decs: '创建者', isRequired: true, defaultValue: '', rules: '', },
              { name: 'levelcode', type: 'String', decs: '机构的LevelCode', isRequired: true, defaultValue: '', rules: '', },
              { name: 'memo', type: 'String', decs: '备注', isRequired: true, defaultValue: '', rules: '', },
              { name: 'name', type: 'String', decs: '机构名称', isRequired: true, defaultValue: '成都集团', rules: '', },
              { name: 'orgid', type: 'Number', decs: '机构ID', isRequired: true, defaultValue: '', rules: '', }
            ]
          },
          { name: 'totalRow', type: 'Number', decs: '数据总数', isRequired: true, defaultValue: 0, rules: '', },
          { name: 'totalPage', type: 'Number', decs: '页面总数', isRequired: true, defaultValue: 0, rules: '', },
        ]
      },
      { name: 'sort', type: 'Number', decs: '排序', isRequired: true, defaultValue: '', rules: '', },
      { name: 'option', type: 'Variable', decs: '', isRequired: true, defaultValue: '', rules: '', },
      { name: 'rows', type: 'Array', decs: '排序', isRequired: true, defaultValue: '', rules: '', },
    ]
  }
}

export default {
  interfaceDetail
}
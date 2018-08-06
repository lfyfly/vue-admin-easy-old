import users from './users'
let tables

//
localStorage.removeItem('tables')

if (localStorage.tables) {
  tables = JSON.parse(localStorage.tables)
} else {
  tables = {
    users
  }
  localStorage.tables = JSON.stringify(tables)
}

export default {
  find (tableName, condition) {
    let table = this.tables[tableName]
    if (!condition) return table

    return table.filter(item => {
      return Object.keys(condition).every(key => {
        return condition[key] === item[key]
      })
    })
  },
  get (tableName, condition) {
    return this.find(tableName, condition)
  },
  post () {
    this.save()
  },
  put (tableName, condition, updateData) {
    let findData = this.find(tableName, condition)
    findData.forEach(item => {
      Object.keys(updateData).forEach(key => {
        item[key] = updateData[key]
      })
    })
    // 找出符合条件的数据
    this.save()
  },
  save () {
    localStorage.tables = JSON.stringify(this.tables)
  },
  delete () {
    this.save()
  },
  tables
}

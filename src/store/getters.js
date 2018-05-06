export default {
  members: state => {
    return state.members.sort((a, b) => {
       return a['point'] < b['point']
    })
  },
  // untuk kondisi data tunggal
  singleView: state => {
    return state.singleView
  },
  // untuk data singleview
  active_member: state => {
    return state.active_member
  }
}
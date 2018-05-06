import * as mutations from './mutation-types'

export default {
  showMember(context, member) {
    // panggil muatasi
    context.commit(mutations.SHOW_MEMBER, member)
  },
  // tampilin semua data
  showMembers(context) {
    context.commit(mutations.SHOW_MEMBERS)
  },
  addMember(context) {
    context.commit(mutations.ADD_MEMBER)
  },
  removeMember(context, id) {
    context.commit(mutations.REMOVE_MEMBER, id)
    // dispatch: untuk menjalankan/mengeksekusi actions yg lain tanpa harus menulis ulang fungsinya
    context.dispatch('showMembers') 
  }
}
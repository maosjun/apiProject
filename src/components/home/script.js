export default {
  data () {
    return {
      dialogVisible: false
    }
  },
  methods: {
    cancelLogout () {
      this.dialogVisible = false
      this.$message({
        message: '取消退出！',
        type: 'info',
        duration: 1000
      })
    },
    sureLogout () {
      this.dialogVisible = false
      this.$message({
        message: '退出成功！',
        type: 'success'
      })
      // 跳转到登录页面
      this.$router.push('/login')
    },
    dialogClose () {
      console.log('哈哈哈')
    }
  }
}

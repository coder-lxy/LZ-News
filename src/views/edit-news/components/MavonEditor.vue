<template>
  <div class="markdown">
    <div class="container">
      <mavon-editor
        v-model="content"
        ref="md"
        @imgAdd="$imgAdd"
        @change="change"
        style="min-height: 600px"
      />
    </div>
  </div>
</template>

<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
// import { uploadEditorImg } from '../services/blogService';
export default {
  props: {
    content: '',
  },
  // 注册
  components: {
    mavonEditor,
  },
  data() {
    return {
      html: '', // 及时转的html
      configs: {},
      status: false,
    }
  },

  methods: {
    // 将图片上传到服务器，返回地址替换到md中
    $imgAdd(pos, $file) {
      // alert(pos);
      // console.log($file)
      let formData = new FormData()

      formData.append('file', $file)
      uploadEditorImg(formData).then((v) => {
        console.log(v)
        this.$refs.md.$img2Url(pos, v.data.msg)
      })
      // this.$upload
      //   .post("http://10.101.76.66:8081/uploadeditorimage", formdata)
      //   .then((res) => {
      //     console.log(res.data);
      //     this.$refs.md.$img2Url(pos, res.data);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    },

    // 所有操作都会被解析重新渲染
    change(value, render) {
      // console.log(value)
      // console.log(render)
      // console.log(this.content)
      // render 为 markdown 解析后的结果[html]
      this.html = render
      this.$emit('getContent', value)
    },
  },
  mounted() {},
}
</script>

<style scoped></style>

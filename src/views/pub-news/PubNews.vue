<template>
  <div>
    <WriteBar @showModal="toShowModal" />
    <MavonEditor @getContent="setContent" />
    <Publish
      v-show="modalStatus"
      @modalChange="toChange"
      :title="this.title"
      :content="this.content"
    />
    <div v-show="modalStatus" class="mask"></div>
  </div>
</template>

<script>
import MavonEditor from "./components/MavonEditor";
import Publish from "./components/Publish";
import WriteBar from "./components/WriteBar";
// import Mask from "../components/Mask";
export default {
  data() {
    return {
      modalStatus: false,
      title:'',
      content:''
    };
  },
  components: {
    MavonEditor,
    Publish,
    WriteBar,
    // Mask,
  },
  methods: {
    toShowModal(status,title) {
      this.modalStatus = status;
      this.title=title
    },
    toChange(status) {
      this.modalStatus = status;
    },
    setContent(content) {
      this.content=content
    }
  },
};
</script>

<style scoped>
.mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: hsla(0, 0%, 63%, 0.5);
  z-index: 99999;
  /* overflow: auto; */
}
</style>
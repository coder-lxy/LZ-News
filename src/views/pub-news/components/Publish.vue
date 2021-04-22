<template>
  <!-- 模态框 -->
  <div class="modal">
    <div class="modal-content">
      <div class="modal-content-head">
        <h3>发布文章</h3>
        <button @click="modalClose()">X</button>
      </div>
      <div class="modal-content-notice">
        <i></i>
        <span
          >请勿发布涉及政治、广告、营销、翻墙、违反国家法律法规等内容，<a
            href="#"
            >详见《CSDN资源共享规范》</a
          ></span
        >
      </div>
      <div class="article-tag form-tag-box clearfix">
        <label>文章标签：</label>
        <div class="mark-selection">
          <button
            v-for="(item, index) in selectedTags"
            :key="index"
            class="add-tag"
          >
            <span>{{ item }}</span>
            <i class="add-tag-close" @click="removeTag(index)">x</i>
          </button>
          <button
            v-show="selectedTags.length < 5"
            class="add"
            @click="tagBox = true"
          >
            <i class="icon">+</i><span>添加文章标签</span>
          </button>
          <div v-show="tagBox" class="mark-selection-box">
            <button @click="tagBox = false" class="close">x</button>
            <div class="mark-selection-box-selectTag">
              <span v-show="selectedTags.length < 5" class="tag-num"
                >还可添加{{ 5 - selectedTags.length }}个标签</span
              >
              <span v-show="selectedTags.length >= 5" class="max-tag-num"
                >最多只能添加5个标签！</span
              >
            </div>
            <div class="mark-selection-box-input">
              <input
                type="text"
                v-model="inputContent"
                @keyup.enter="enterAdd()"
                placeholder="请输入文字搜索，Enter键入可添加自定义标签"
              />
            </div>
            <div class="tags-items clearfix">
              <ul>
                <li
                  v-for="(item, index) in tags"
                  :key="index"
                  :class="{ isActive: currentIndex === index }"
                  @click="changeTag(index)"
                >
                  {{ item.tagName }}
                </li>
              </ul>
            </div>
            <div class="tag-items-content">
              <!-- <div class="tab-0 no-recomend-tag">暂无推荐标签</div> -->
              <div class="tab">
                <ul>
                  <li
                    v-for="(item, index) in currentItems"
                    :key="index"
                    @click="addTag(item)"
                    :class="{
                      noRecomendTag: currentItems.length === 1,
                      commonTag: currentItems.length > 1,
                    }"
                  >
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="article-tag form-tag-box clearfix">
        <label>分类专栏：</label>
        <div class="mark-selection clearfix">
          <button
            v-for="(item, index) in classify"
            :key="index"
            class="add-tag"
          >
            <span>{{ item }}</span>
            <i class="add-tag-close" @click="removeClassify(index)">x</i>
          </button>
          <button v-show="edit" class="add-tag">
            <input v-model="newClassify" @keyup.enter="addClassify()" />
            <i class="add-tag-close" @click="closeInput()">x</i>
          </button>
          <button
            v-show="classify.length < 3"
            class="new-class"
            @click="showInput()"
          >
            <i class="icon">+</i><span>新建分类专栏</span>
          </button>
          <span v-show="classify.length >= 3" class="max-class-num"
            >您暂时不能添加分类专栏！</span
          >
          <div class="right">
            <div class="tag-options-content">
              <div class="tag-options-text">
                <span>最多选择3个分类</span>
                <span>#为二级分类</span>
              </div>
              <div class="tag-options-list clearfix">
                <ul>
                  <li v-for="(item, index) in userClassify" :key="index">
                    <input
                      type="checkbox"
                      class="checkbox"
                      v-model="classify"
                      :value="item"
                    />
                    <span>{{ item }}</span>
                  </li>
                </ul>
              </div>
              <div v-show="classify.length >= 3" class="max-class-num-mask">
                <div class="show-content">
                  <!-- <i>-</i> -->
                  <p>最多选三个专栏哦~</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-bottom">
        <button class="button" @click="modalClose()">取消</button>
        <!-- <button class="button btn-blue">保存为草稿</button> -->
        <button class="button btn-red" @click="pubArticle()">发布文章</button>
      </div>
    </div>
  </div>
</template>

<script>
import { getClassify, publish } from "@/services/newsService";
export default {
  props: {
    title: "",
    content: "",
  },
  data() {
    return {
      tagBox: false,
      status: "",
      tags: [
        {
          tagName: "推荐",
          tagItem: ["暂无推荐标签！"],
        },
        {
          tagName: "数据库",
          tagItem: [
            "mysql",
            "redis",
            "mongodb",
            "sql",
            "数据库",
            "json",
            "elasticsearch",
            "nosql",
            "memcached",
            "postgresql",
            "sqlite",
          ],
        },
        {
          tagName: "工具",
          tagItem: [
            "git",
            "github",
            "macos",
            "visual studio code",
            "windows",
            "vim",
            "sublime text",
            "intellij idea",
            "eclipse",
            "phpstorm",
            "webstorm",
            "编辑器",
            "svn",
            "visual studio",
            "pycharm",
            "emacs",
          ],
        },
        {
          tagName: "后端",
          tagItem: [
            "php",
            "node.js",
            "phthon",
            "c++",
            "c语言",
            "c#",
            "golang",
            "spring",
            "django",
            "flask",
            "spring boot",
            "swoole",
            "ruby",
            "asp.net",
            "ruby on rails",
            "scala",
            "rust",
            "lavarel",
            "爬虫",
            "后端",
          ],
        },
        {
          tagName: "移动端",
          tagItem: [
            "java",
            "android",
            "objective-c",
            "swift",
            "小程序",
            "react native",
            "xcode",
            "android studio",
            "web app",
            "flutter",
            "kotlin",
          ],
        },

        {
          tagName: "数学",
          tagItem: [
            "线性代数",
            "矩阵",
            "概率论",
            "拓扑学",
            "抽象代数",
            "几何学",
            "算法",
            "动态规划",
            "图论",
            "傅立叶分析",
            "flutter",
            "kotlin",
          ],
        },
        {
          tagName: "前端",
          tagItem: [
            "Javascript",
            "css",
            "vue.js",
            "html",
            "html5",
            "node.js",
            "reactjs",
            "jquery",
            "css3",
            "es6",
            "typescript",
            "chrome",
            "npm",
            "bootstrap",
            "sass",
            "less",
            "chrome devtools",
            "firefox",
            "angular",
            "coffeescript",
            "safari",
            "postcss",
            "postman",
            "fiddler",
            "webkit",
            "yarn",
            "firebug",
            "edge",
            "gulp",
            "webpack",
            "前端",
          ],
        },
        {
          tagName: "运维",
          tagItem: [
            "linux",
            "nginx",
            "docker",
            "apache",
            "ubuntu",
            "centos",
            "服务器",
            "负载均衡",
            "运维",
            "ssh",
            "vagrant",
            "容器",
            "jenkins",
            "devops",
            "debian",
            "fabric",
          ],
        },

        {
          tagName: "大数据",
          tagItem: [
            "talking data",
            "涛思数据",
            "kylin",
            "flink",
            "kafka",
            "tdengine",
            "hadoop",
            "spark",
            "hdfs",
            "mapreduce",
            "cloudera",
            "hive",
            "ambari",
            "sqoop",
            "zookeeper",
            "odps",
            "大数据",
          ],
        },
        {
          tagName: "其他",
          tagItem: [
            "http",
            "segmentfault",
            "https",
            "安全",
            "websocket",
            "restful",
            "xss",
            "区块链",
            "csrf",
            "graphql",
            "rpc",
            "比特币",
            "以太坊",
            "udp",
            "智能合约",
            "云计算",
            "面试",
            "程序人生",
            "恰饭",
            "经验分享",
            "数字货币",
            "其他",
          ],
        },
      ],
      userClassify: [],
      currentIndex: 0,
      currentItems: ["暂无推荐标签！"],
      selectedTags: [],
      inputContent: "",
      classify: [],
      edit: false,
      newClassify: "",
      newBlog: {
        title: "",
        article: "",
        summary: "",
        types: [],
        labels: [],
      },
      notice:{
        title:'',
        article:''
      }
    };
  },
  created() {
    getClassify(this.$store.getters['base/userInfo'].userId).then((v) => {
      this.userClassify = v.data;
      // console.log(this.userClassify);
    });
  },
  methods: {
    modalClose() {
      var status = false;
      this.$emit("modalChange", status);
    },
    addTag(tag) {
      if (
        this.selectedTags.length < 5 &&
        this.selectedTags.indexOf(tag) === -1
      ) {
        this.selectedTags.push(tag);
      }
    },
    enterAdd() {
      if (
        this.inputContent != "" &&
        this.selectedTags.length < 5 &&
        this.selectedTags.indexOf(this.inputContent) === -1
      ) {
        this.selectedTags.push(this.inputContent);
        this.inputContent = "";
      }
    },
    removeTag(index) {
      this.selectedTags.splice(index, 1);
    },
    changeTag(index) {
      this.currentIndex = index;
      this.currentItems = this.tags[index].tagItem;
    },
    showInput() {
      this.edit = true;
    },
    addClassify() {
      if (
        this.classify.indexOf(this.newClassify) &&
        this.userClassify.indexOf(this.newClassify) === -1
      ) {
        this.classify.push(this.newClassify);
        this.edit = false;
        this.newClassify = "";
      } else {
        alert("分类已存在！");
      }
    },
    closeInput() {
      this.edit = false;
      this.newClassify = "";
    },
    removeClassify(index) {
      this.classify.splice(index, 1);
    },
    pubArticle() {
      // this.notice.title = this.title;
      // this.notice.article = this.content;
      this.newBlog.title = this.title;
      this.newBlog.article = this.content;
      console.log(this.newBlog.article);
      this.newBlog.types = this.classify;
      this.newBlog.labels = this.selectedTags;
      publish(this.newBlog).then((v) => {
        this.$router.push({
          path:'/'
        })
      });
      // pubNotice(this.notice)
    },
  },
};
</script>

<style scoped>
/* 模态框 */
.modal {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  z-index: 999999;
}
.modal-content {
  position: relative;
  width: 606px;
  margin: 7% auto 100px;
  background-color: #fff;
  padding: 24px;
  border: 1px solid #e3e3e3;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
}

.modal-content-head h3 {
  margin-bottom: 16px;
  font-size: 16px;
  color: #3c3c3c;
  line-height: 24px;
}
.modal-content-head button {
  position: absolute;
  top: 16px;
  right: 16px;
  color: #ccc;
  width: 24px;
  height: 24px;
  padding: 2px;
}
.modal-content .modal-content-notice {
  width: 100%;
  height: 36px;
  line-height: 36px;
  font-size: 12px;
  background: #fff6e5;
  color: #e33e33;
  font-weight: 400;
}
.modal-content .modal-content-notice i {
  display: inline-block;
  margin-left: 13px;
  width: 14px;
  height: 14px;
  background: url("../../../assets/images/warning.png") no-repeat;
  vertical-align: -2px;
}

.form-tag-box {
  margin: 1em 0;
  line-height: 32px;
}
.form-tag-box label {
  float: left;
  margin-right: 8px;
  font-size: 0.9rem;
  color: #4d4d4d;
}
.mark-selection {
  float: left;
  position: relative;
}
.form-tag-box button {
  position: relative;
  padding: 0 8px;
  height: 28px;
  background: #fff;
  border-radius: 4px;
  border: 1px solid #e8e8ee;
  color: #555666;
  line-height: 28px;
  font-size: 12px;
}
.form-tag-box button:hover {
  color: #267dcc;
  background: rgba(38, 125, 204, 0.05);
}
.form-tag-box .add-tag {
  color: #267dcc;
  background: rgba(38, 125, 204, 0.05);
  cursor: initial;
  margin-right: 8px;
}
.form-tag-box .add-tag input {
  background: none;
  outline: none;
  border: none;
}
.add-tag .add-tag-close {
  color: #3485cf;
  display: inline-block;
  width: 16px;
  height: 16px;
  line-height: 16px;
  font-size: 12px;
  margin-left: 10px;
  cursor: pointer;
  text-align: center;
}
.add-tag .add-tag-close:hover {
  border-radius: 50%;
  background-color: #267dcc;
  color: #fff;
}
.mark-selection-box {
  position: absolute;
  left: 0;
  top: 30;
  width: 444px;
  height: auto;
  z-index: 999;
  background: #fff;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid #e3e3e3;
  padding: 10px 15px;
}
.mark-selection-box .close {
  position: absolute;
  right: 6px;
  top: 2px;
  font-size: 12px;
  color: #ccc;
  background-color: transparent;
  border: none;
}

.mark-selection-box-selectTag {
  padding-bottom: 5px;
  width: 100%;
  height: auto;
}
.mark-selection-box-selectTag span {
  font-size: 12px;
  color: #999;
  margin-left: -2px;
}
.mark-selection-box-selectTag .max-tag-num {
  color: #e70b0b;
}
.max-class-num {
  font-size: 14px;
  color: #ccc;
}
.mark-selection-box-input {
  height: 36px;
  width: 100%;
  margin-bottom: 10px;
}
.mark-selection-box-input input {
  height: 36px;
  padding-right: 30px;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  line-height: 40px;
  outline: 0;
  padding: 0 15px;
  width: 100%;
}
.mark-selection-box .tags-items li {
  float: left;
  padding: 0 5px;
  border: 1px solid transparent;
  height: 24px;
  line-height: 24px;
  font-size: 14px;
  color: #3d3d3d;
  margin-bottom: 10px;
  cursor: pointer;
}
.mark-selection-box .tags-items .isActive {
  background: #fcecea;
  border-right-color: #fff;
  border-left-color: #fff;
  color: #e33e33;
  border-radius: 2px;
  border: 1px solid #fcecea;
}
.mark-selection-box .tag-items-content ul .commonTag {
  float: left;
  padding: 0 8px;
  height: 24px;
  background: #f7f7fc;
  border-radius: 2px;
  border: 1px solid #e8e8ee;
  font-size: 12px;
  font-weight: 400;
  color: #4d4d4d;
  line-height: 24px;
  cursor: pointer;
  margin-right: 10px;
  margin-bottom: 10px;
}
.mark-selection-box .tag-items-content .noRecomendTag {
  display: block;
  pointer-events: none;
  width: 100%;
  height: 32px;
  line-height: 32px;
  font-size: 12px;
  font-weight: 400px;
  color: #999aaa;
  text-align: center;
}

.form-tag-box .icon {
  width: 14px;
  height: 18px;
  font-size: 20px;
  vertical-align: -2px;
  margin-right: 4px;
}
.form-tag-box label {
  float: left;
  font-size: 12px;
}
.form-tag-box .right {
  position: relative;
  overflow: hidden;
}
.right .add-tag span {
  border: none;
  outline: none;
}

.form-tag-box .right .max-class-num-mask {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2000;
  background-color: hsla(0, 0%, 100%, 0.9);
}
.form-tag-box .right .max-class-num-mask .show-content {
  position: absolute;
  /* margin-top: -21px; */
  width: 100%;
  text-align: center;
}
/* .max-class-num-mask .show-content i {
  font-size: 20px;
  color: #e33e33;
} */
.max-class-num-mask .show-content p {
  color: #999aaa;
  font-size: 12px;
  margin: 3px 0;
}
.form-tag-box .right .tag-options-content {
  position: relative;
  height: 160px;
  margin-top: 8px;
  border-radius: 4px;
  border: 1px solid #e8e8ee;
  padding: 0 16px;
}
.tag-options-content .tag-options-text {
  height: 36px;
  line-height: 36px;
  border-bottom: 1px solid #e8e8ee;
}
.tag-options-content .tag-options-text :nth-child(1) {
  font-size: 12px;
  font-weight: 400px;
  color: #555666;
}
.tag-options-content .tag-options-text :nth-child(2) {
  font-weight: 400;
  font-size: 12px;
  color: #ccccd8;
}
.tag-options-list {
  padding: 8px 8px 0 0;
  width: 454px;
  max-height: 117px;
  background: #fff;
  overflow-x: hidden;
  overflow-y: auto;
}
.tag-options-list li {
  float: left;
  height: 21px;
  line-height: 21px;
  font-size: 12px;
  font-weight: 400;
  color: #606266;
  margin: 0 16px 8px 0;
}
.source-input {
  width: 404px;
  height: 32px;
  border-radius: 4px;
  background: #fafafa;
  border: 1px solid #ddd;
  padding-left: 10px;
  color: #4d4d4d;
}
.form-tag-box a {
  padding: 20px 0;
  font-size: 14px;
  margin-left: 9px;
}
.modal-content .article-type {
  width: 50%;
}
.form-tag-box select {
  height: 32px;
  width: 177px;
  background: #fafafa;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  color: #999;
}
.form-tag-box .must {
  margin: 0 8px;
  font-size: 12px;
  color: #ca0c16;
}
.copyright_warning {
  margin-top: 8px;
  padding-left: 80px;
  font-size: 14px;
  color: #999aaa;
}
.copyright_warning i {
  display: inline-block;
  margin-left: 13px;
  width: 14px;
  height: 14px;
  background: url("../../../assets/images/warning1.png") no-repeat;
  vertical-align: -2px;
}
.switch-box {
  line-height: 28px;
}
.switch-box li {
  float: left;
  height: 24px;
  font-size: 14px;
  margin-right: 20px;
  color: #555666;
}
.form-tag-box .tag-help {
  font-size: 14px;
}
.form-tag-box .icon-help {
  display: inline-block;
  margin-left: 13px;
  width: 14px;
  height: 14px;
  background: url("../../../assets/images/help.png") no-repeat;
  vertical-align: -2px;
}
.modal-bottom {
  margin-top: 1.75rem;
  text-align: right;
}
.button {
  color: #333;
  background-color: transparent;
  padding: 6px 12px;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
}
.btn-blue {
  color: #3399ea;
}
.btn-red {
  padding: 6px;
  background: #fcecea;
  color: #e33e33;
}
</style>
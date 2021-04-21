
export default {
  mode:"history",
  routes:[
    // 首页
    {
      path:"/",
      name:"Home",
      component:()=>import("@/views/hot/HotNews.vue")
    },
    // 登录
    {
      path:"/login",
      name:"Login",
      component:()=>import("@/views/user/Login")
    },
    // 注册
    {
      path:"/register",
      name:"Register",
      component:()=>import("@/views/user/Register")
    },
    // 详情
    {
      path:"/detail",
      name:"Details",
      component:()=>import("@/views/details/Details.vue")
    },
    // 发布
    {
      path:"/pub",
      name:"PubNews",
      component:()=>import("@/views/pub-news/PubNews")
    },
    // 编辑
    {
      path:"/editor",
      name:"Editor",
      component:()=>import("@/views/edit-news/EditNews")
    },
    // 推荐
    {
      path:"/recommend",
      name:"recommend",
      component:()=>import("@/views/recommend/recommend-news.vue")
    },
    // 热点
    {
      path:"/hot",
      name:"hot",
      component:()=>import("@/views/hot/HotNews.vue")
    },
    // 热点
    {
      path:"/newest",
      name:"newest",
      component:()=>import("@/views/newest/newestNews.vue")
    },
    // 科技
    {
      path:"/tech",
      name:"tech",
      component:()=>import("@/views/channels/technology-news.vue")
    },
    // 娱乐
    {
      path:"/ent",
      name:"ent",
      component:()=>import("@/views/channels/entertainment-news.vue")
    },
    // 游戏
    {
      path:"/game",
      name:"game",
      component:()=>import("@/views/channels/game-news.vue")
    },
    // 体育
    {
      path:"/sports",
      name:"sports",
      component:()=>import("@/views/channels/sports-news.vue")
    },
    // 财经
    {
      path:"/finace",
      name:"finace",
      component:()=>import("@/views/channels/finance-news.vue")
    },
    // 军事
    {
      path:"/military",
      name:"military",
      component:()=>import("@/views/channels/military-news.vue")
    },
    // 时尚
    {
      path:"/fashion",
      name:"fashion",
      component:()=>import("@/views/channels/fashion-news.vue")
    },
    // 旅游
    {
      path:"/travel",
      name:"travel",
      component:()=>import("@/views/channels/travel-news.vue")
    },
    // 美食
    {
      path:"/food",
      name:"food",
      component:()=>import("@/views/channels/food-news.vue")
    },
    // 动态页
    {
      path: '/dynamic',
      name: 'dynamic',
      component: () => import('@/views/dynamic/Dynamic.vue')
    },
    // 用户中心 
    {
      path:"/user",
      name:"user",
      component:()=>import("@/views/user-center/UserCenter.vue")
    },
    // 消息中心
    {
      path: "/msg",
      name: "Msg",
      component:()=>import("@/views/message-center/MessageCenter.vue")
    },
    // 搜索文章
    {
      path: "/search",
      name: "Search",
      component:()=>import("@/views/search/SearchNews.vue")
    },
    // 发布公告
    {
      path: "/pub-notice",
      name: "PubNotice",
      component:()=>import("@/views/pub-notice/PubNotice.vue")
    },
    {
      path: "*", // 匹配所有路径
      name:"NotFound",
      component: () => import("@/views/NotFound")
    },
  ]
}
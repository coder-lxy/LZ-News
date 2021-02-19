
export default {
  mode:"history",
  routes:[
    // 首页
    {
      path:"/",
      name:"Home",
      component:()=>import("@/views/recommend/recommend-news.vue")
    },
    // 登录
    {
      path:"/login",
      name:"Login",
      component:()=>import("@/views/Login")
    },
    // 注册
    {
      path:"/register",
      name:"Register",
      component:()=>import("@/views/Register")
    },
    // 详情
    {
      path:"/detail",
      name:"Details",
      component:()=>import("@/views/Details")
    },
    // 发布·
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
    // {
    //   path:"/recommend",
    //   name:"recommend",
    //   component:()=>import("@/views/recommend/recommend-news.vue")
    // },
    // 热点
    {
      path:"/hot",
      name:"hot",
      component:()=>import("@/views/hot/hot-news.vue")
    },
    // 科技
    {
      path:"/tech",
      name:"tech",
      component:()=>import("@/views/technology/technology-news.vue")
    },
    // 娱乐
    {
      path:"/ent",
      name:"ent",
      component:()=>import("@/views/entertainment/entertainment-news.vue")
    },
    // 游戏
    {
      path:"/game",
      name:"game",
      component:()=>import("@/views/game/game-news.vue")
    },
    // 体育
    {
      path:"/sports",
      name:"sports",
      component:()=>import("@/views/sports/sports-news.vue")
    },
    // 财经
    {
      path:"/finace",
      name:"finace",
      component:()=>import("@/views/finance/finance-news.vue")
    },
    // 军事
    {
      path:"/military",
      name:"military",
      component:()=>import("@/views/military/military-news.vue")
    },
    // 时尚
    {
      path:"/fashion",
      name:"fashion",
      component:()=>import("@/views/fashion/fashion-news.vue")
    },
    // 旅游
    {
      path:"/travel",
      name:"travel",
      component:()=>import("@/views/travel/travel-news.vue")
    },
    // 美食
    {
      path:"/food",
      name:"food",
      component:()=>import("@/views/food/food-news.vue")
    },
    {
      path:"/erweima",
      name:"erweima",
      component:()=>import("@/views/erweima.vue")
    },
    // 用户中心 
    {
      path:"/user",
      name:"user",
      component:()=>import("@/views/user-center/UserCenter.vue")
    },
    // 个人主页
    {
      path: "/homepage",
      name: "homepage",
      component:()=>import("@/views/user-homepage/Homepage.vue")
    },
    {
      path: "*", // 匹配所有路径
      name:"NotFound",
      component: () => import("@/views/NotFound")
    },
  ]
}
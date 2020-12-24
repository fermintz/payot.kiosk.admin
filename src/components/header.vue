<template>
  <div id="header">
    <div class="top">
      <div class="logo">
        <a href="/"><img src="@/assets/img/logo_w.png"></a>
        <h2>무인매장 관리시스템</h2>
      </div>
      <div class="gnb">
        <div class="userInfo">
          <img src="/img/classIcon01.png">
          <label>페이오티 금정점</label>
        </div>
        <v-btn text @click="$refs.password.open(true)">비밀번호 변경</v-btn>
        <v-btn text @click="$router.push('login')">로그아웃</v-btn>
      </div>
    </div>

    <div class="navigation">
      <v-btn 
        v-for="item in nav"
        :class="{ active: $route.name === item.name }"
        :key="item.toString()"
        @click="tabChange(item.name, item.label, item.icon)"
        text
      >
        <img 
          src="/img/classIcon01_m.png"
          v-show="item.name === 'sales'"
          style="display:block;margin-right:5px;"
        >
        {{item.label}}
      </v-btn>
    </div>

    <Password ref="password"/>
  </div>
</template>

<script>

import Password from '@/components/modal/password.vue';

export default {
  components:{
    Password
  },
  data() {
    return{
      nav:[
        {
          routeName: 'Home',
          name: 'home',
          label:'이번달 전체매출',
        },
        {
          routeName: 'Shop',
          name: 'shop',
          label:'매장(현금)관리',
          icon:'home-city-outline'
        },
        {
          routeName: 'Kiosk',
          name: 'kiosk',
          label:'키오스크',
          icon:'monitor-dashboard'
        },
        {
          routeName: 'sales',
          name: 'sales',
          label:'매출통계',
          icon:'chart-bar'
        },
      ],
      active: true,

    }
  },
  mounted() {
    this.$emit('route-change', 'shop');
  },
  
  methods:{
     tabChange(name, label, icon) {
      this.$emit('route-change', name);
      this.$emit('pageLabel', label);
      this.$emit('pageIcon', icon);
      this.$router.push({name:name})
    }
  }
}
</script>

<style lang="scss" scoped>

#header{
  position:relative;
  z-index:99;
  box-shadow: 0 2px 10px rgba(0,0,0,0.15);

  .top{
    display:flex;
    justify-content: space-between;
    align-items:center;
    height:50px;
    background:#292929;
    padding:0 20px;
 
    .logo{
      display:flex;
      align-items: center;
      
      a{display:inline-block;margin-right:15px;height:30px;}
      img{height:30px;}
      h2{font-size:18px;color:#fff;font-weight:500;font-family:'SCDream'}
    }

    .gnb{
      display:flex;
      align-items: center;

      .userInfo{
        display:flex;
        align-items: center;
        
        img{
          display:block;
          margin-right:10px;
        }
        label{
          color:#fff;
          font-family:'SCDream';
          font-weight:400;
          font-size:14px;
          margin-right:15px;
        }
      }

      .v-btn{
        color:#fff;
        background:#494949;
        margin-left:5px;
        height:20px;
        padding:0 10px;
        font-size:12px;
      }
    }
  }

  .navigation{
    display:flex;
    align-items: center;
    justify-content: flex-start;
    border-bottom:1px solid #D93E97;
    background:#fff;
  
    .v-btn{
      width:200px;
      height:40px;
      border-radius:0px;
      border-right:1px solid #e2e2e2;
      color:#fff;
      font-family:'SCDream';
      font-weight:400;
      font-size:14px;
      letter-spacing:-0.4px;
      color:#292929
    }

    .v-btn.active{
      background:#D93E97;
      color:#fff;
      
    }
  }
}

</style>


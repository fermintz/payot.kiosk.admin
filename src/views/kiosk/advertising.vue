<template>
  <div class="advertising">
    <v-row>
      <v-col cols="3">
        <img src="/img/adver.png" class="adver_img">
      </v-col>
      <v-col cols="3">
        <div class="iconLine">
          <img src="/img/classIcon01.png">
        </div>
        <dl>
          <dt>
            <h4>
              메인 대기광고 기능 활성화
            </h4>
            <v-switch v-model="switch4" :label="false" inset/>
          </dt>
          <dd>키오스크 전면 지역광고를 통해 
월 광고수익을 창출 할 수 있습니다
예) 음식점, 네일샵, 카페등</dd>
        </dl>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data(){
    return{
      switch1:false
    }
  }
}
</script>

<style lang="scss" scoped>
.advertising{
  font-family:'SCDream';

  .adver_img{
    width:100%;
    display:block;
    border:1px solid #e2e2e2;
    border-radius:5px;
  }

  .iconLine{
    padding:0 20px;
    img{display:block}
  }

  dl{
    padding:0 20px;
    dt{
     display:flex;
     align-items: center;
     justify-content: space-between;

     h4{font-size:18px;}
    }
    dd{
      color:#888;
      font-size:14px;
    }
  }
}
</style>
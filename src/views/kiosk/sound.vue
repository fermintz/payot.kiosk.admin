<template>
  <div class="sound">
    <v-row>
      <v-col cols="5">
        <img src="/img/sound.png" class="adver_img">
      </v-col>
      <v-col cols="3">
        <div class="iconLine">
          <img src="/img/classIcon01.png">
        </div>
        <dl>
          <dt>
            <h4>
              경고방송 기능 활성화
            </h4>
            <v-switch v-model="switch4" :label="false" inset/>
          </dt>
          <dd>페이오티 키오스크는
각 페이지마다 안내음성을 지원하며,
별도로 경고방송을 직접 송출할 수 있습니다</dd>
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
.sound{
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
<template>
  <div class="kakao">
    <v-row>
      <v-col cols="3">
        <img src="/img/kakao1.png" class="kakao_img">
        <div class="iconLine">
          <img src="/img/classIcon01.png">
          <img src="/img/classIcon02.png">
        </div>
        <dl>
          <dt>
            <h4>
              충전/결제 알림
            </h4>
            <v-switch v-model="switch2" :label="false" inset/>
          </dt>
          <dd>
            키오스크 현금결제&카드결제 이용시 충전내역, 
            결제내역을 카톡알림으로 알려드립니다
          </dd>
        </dl>
      </v-col>
      <v-col cols="3">
        <img src="/img/kakao3.png" class="kakao_img">
        <div class="iconLine">
          <img src="/img/classIcon01.png">
          <img src="/img/classIcon02.png">
        </div>
        <dl>
          <dt>
            <h4>
              포인트 지급/차감알림
            </h4>
            <v-switch v-model="switch4" :label="false" inset/>
          </dt>
          <dd>
            관리자가 직접 사용자의 포인트를 변경하게되면 
            변동내역을 카톡으로 알려드립니다
          </dd>
        </dl>
      </v-col>
      <v-col cols="3">
        <img src="/img/kakao2.png" class="kakao_img">
        <div class="iconLine">
          <img src="/img/classIcon01.png">
        </div>
        <dl>
          <dt>
            <h4>
              장비(세탁)종료 알림
            </h4>
            <v-switch v-model="switch3" :label="false" inset/>
          </dt>
          <dd>
            세탁물 방치를 예방하기 위해 3~5분전 
            종료알림 카톡을 발송합니다
          </dd>
        </dl> 
      </v-col>
      
    </v-row>
  </div>
</template>

<script>
export default {
  data(){
    return{
      switch1:false,
      switch2:false,
      switch3:false,
      switch4:false,
    }
  }
}
</script>

<style lang="scss" scoped>
.kakao{
  font-family:'SCDream';

  .total-btn{
    display:flex;
    align-items: center;
    h3{margin-right:20px;}
  }

  .kakao_img{width:100%;display:block;}
  .iconLine{
    margin-top:20px;
    img{margin-right:5px;}
  }

  dl{
    dt{
     display:flex;
     align-items: center;
     justify-content: space-between;

     h4{font-size:18px;}
    }
    dd{color:#888;font-size:14px;}
  }
}
</style>
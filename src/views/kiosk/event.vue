<template>
  <div class="kiosk-event">
    <div class="default-event">
      <div class="top">
        <strong>기본 적립률</strong>
        <span>기본적으로 적용되는 이벤트 적립률입니다</span>
      </div>
    
      <table cellpadding="0" cellspacing="0">
        <tr>
          <th>금액구간</th>
          <th>현금적립률</th>
          <th>카드적립률</th>
        </tr>
        <tr v-for="item in 5" :key="item">
          <td>{{item}}0,000원 이상</td>
          <td><input type="text"> %</td>
          <td><input type="text"> %</td>
        </tr>
      </table>

      <v-btn outlined>기본적립률 저장하기</v-btn>      
    </div>
    <div class="custom-event">
      <div class="event-wall">
        <span class="classIcon classPremium">
          <img src="/img/classIcon01_x2.png">
        </span>
        <label>프리미엄회원 전용 기능입니다</label>
      </div>
      <div class="top">
        <div class="titleLine">
          <strong>이벤트 적립률 설정</strong>
          <span>원하는 시간대를 설정하여 추가로 이벤트를 적용할 수 있습니다.</span>
        </div>
        <v-btn outlined @click="$refs.eventAdd.open(true)"><v-icon>mdi-plus</v-icon>이벤트 추가하기</v-btn>
      </div>
  
      <div class="event-list">
        <v-row>
          <v-col cols="4" v-for="item in 0" :key="item">
            <dl class="list-item">
              <dt>
                <span>
                  <label>적용요일</label>
                  <strong>수요일</strong>
                </span>
                <span>
                  <label>적용시간</label>
                  <strong>01:00 ~ 07:00</strong>
                </span>
              </dt>
              <dd>
                <table cellpadding="0" cellspacing="0">
                  <tr>
                    <th>금액구간</th>
                    <th>현금적립률</th>
                    <th>카드적립률</th>
                  </tr>
                  <tr>
                    <td>10,000원 이상</td>
                    <td>10%</td>
                    <td>7%</td>
                  </tr>
                  <tr>
                    <td>20,000원 이상</td>
                    <td>10%</td>
                    <td>7%</td>
                  </tr>
                  <tr>
                    <td>30,000원 이상</td>
                    <td>10%</td>
                    <td>7%</td>
                  </tr>
                  <tr>
                    <td>40,000원 이상</td>
                    <td>10%</td>
                    <td>7%</td>
                  </tr>
                  <tr>
                    <td>50,000원 이상</td>
                    <td>10%</td>
                    <td>7%</td>
                  </tr>
                </table>

                <div class="btns">
                  <v-btn outlined>수정</v-btn>
                  <v-btn outlined>삭제</v-btn>
                </div>
              </dd>
            </dl>
          </v-col>
        </v-row>
      </div>
    </div>

    <EventAdd ref="eventAdd"/>
  </div>
</template>

<script>

import Article from '@/components/articleLayout.vue';
import EventAdd from '@/components/modal/eventAdd.vue';

export default {
  components:{
    Article, EventAdd
  },
  data(){
    return{
      switch1:false,
    }
  }
}
</script>

<style lang="scss" scoped>

.kiosk-event{
  display:flex;

  .top{
    strong{display:block;font-size:18px;font-family:'SCDream';font-weight:500;}
    span{display:block;font-size:14px;margin-top:5px;color:#888;}
  }

  .default-event{
    width:360px;
    border-right:1px solid #292929;
    min-height:720px;
    padding-right:30px;

    .top{
      padding-bottom:30px;
    }

    table{
      width:100%;
      text-align:center;
      border-top:1px solid #292929;
    }
    th{
      border-bottom:1px solid #e2e2e2;
      padding:10px;
      background:#f8f8f8;
      font-weight:normal;
      font-size:12px;
    }
    td{
      padding:10px;
      font-size:14px;
      border-bottom:1px solid #e2e2e2;
      input{border:1px solid #c2c2c2;width:40px;border-radius:5px;padding:0 5px;text-align:center}
    }

    .v-btn{
      width:100%;
      height:40px;
      margin-top:20px;
      background:#292929;
      color:#fff;
      border:0px;
      letter-spacing: 0px;
    }
 
  }

  .custom-event{
    position: relative;
    flex:1;
    padding-left:30px;
    
    .event-wall{
        background:rgba(0,0,0,0.5);
        position: absolute;
        top:0px;
        left:0px;
        width:100%;
        height:100%;
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 99;
        color:#fff;
        border-radius:5px;
        
        .classIcon{
          height:40px;
          line-height:40px;
          border-radius:20px;
          font-size:24px;
          font-weight:500;
          padding:0 30px;
        }

        label{
          font-family:'SCDream';
          font-size:24px;
          margin-top:15px;
        }
      }

    .top{
      display:flex;
      justify-content: space-between;
      align-items: flex-start;
      border-bottom:1px solid #292929;
      padding-bottom:30px;

      .v-btn{
        padding:0 15px;
        height:45px;
        border:0px;
        border:2px solid #EE2073;
        color:#EE2073;
        letter-spacing:0px;
        font-family:'SCDream';
        font-size:14px;

        .v-icon{font-size:18px;margin-right:10px;}
      }
    }

    .event-list{
      margin-top:20px;
      filter: blur(3px);     

      .list-item{
        border:1px solid #e2e2e2;
        border-radius:5px;
        font-size:14px;
        box-shadow: 0 0 15px rgba(0,0,0,0.07);
        overflow:hidden;

          dt{
            background:#fff;
            padding:15px;
            border-bottom:1px solid #c2c2c2;

            span{
              display:flex;
              justify-content: space-between;
              align-items: center;
              height:26px;

              label{color:#888}
              strong{font-weight:500;color:#EE2073}
            }
          }
          dd{
            table{width:100%;text-align:center;}
            th{border-bottom:1px solid #e2e2e2;padding:10px 10px;background:#f8f8f8;}
            td{padding:10px;border-bottom:1px solid #e2e2e2;}

            .btns{
              text-align:right;
              padding:15px;

              .v-btn{
                background:#fff;
                color:#292929;
                border:1px solid #c2c2c2;
                height:30px;
                margin-left:5px;
              }
            }
          }
      }
    }

  }
}

</style>
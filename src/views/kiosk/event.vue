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
        <v-row>
          <v-col cols="6">
            <div class="event_img">
              <img src="/img/event.png">
            </div>
          </v-col>
          <v-col cols="3">
            <div class="iconLine">
              <img src="/img/classIcon01.png">
            </div>
            <dl>
              <dt>
                <h4>
                  적립이벤트 설정기능
                </h4>
              </dt>
              <dd>매출이 적은 오전, 요일별, 시간대별 다양한 환경에 맞게 적립률을 설정할 수 있습니다.</dd>
              <dd>※ 프리미엄 회원 전용 기능입니다</dd>
            </dl>
          </v-col>
        </v-row>
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
      font-family:'SCDream';
      position:absolute;
      padding:0px 50px;
      padding-top:120px;
      left:0;
      top:0;
      width:100%;
      height:100%;
      background:rgba(0,0,0,0.6);
      z-index:99;

      .event_img{
        img{
          width:100%;
          display:block;
        }
      }

      .iconLine{
        padding:0 20px;
        img{display:block}
      }

      dl{
        padding-left:20px;
        margin-top:10px;

        dt{
        display:flex;
        align-items: center;
        justify-content: space-between;

        h4{
          color:#fff;
          font-size:18px;
          font-weight:400;
        }
        }
        dd{
          color:#fff;
          font-size:14px;
          margin-top:10px;
        }
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
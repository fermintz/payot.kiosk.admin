<template>
  <div class="statistics">

    <div class="search-opt">
      <table cellpadding="0" cellspacing="0">
        <tr>
          <th rowspan="2">기간선택</th>
          <td class="yearSelect">
            <v-btn @click="dateBefor()" icon>
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
            <h4>{{this.date}}</h4>
            
            <v-btn @click="dateAfter()" icon>
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </td>
        </tr>
        <tr>
          <td class="monthBtns">
            <v-btn text v-for="item in monthBtns" :key="item">
              {{item}}
            </v-btn>          
          </td>
        </tr>
      </table>
    </div>

    <v-row>
      <v-col cols="8">
        <h4>순이익 계산기</h4>
        <div class="costResultWrap">
          <div class="costResult">
            <ul>
              <li class="first">
                <span class="name">
                  선택기간 매출
                </span>
                <span class="price">1,846,300 원</span>
              </li>
              <li class="noData">
                입력된 비용이 없습니다
              </li>
              <li>
                <span class="name">
                  <v-btn text><v-icon>mdi-minus</v-icon></v-btn>전기세
                </span>
                <span class="price">24,600 원</span>
              </li>
              <li>
                <span class="name">
                  <v-btn text><v-icon>mdi-minus</v-icon></v-btn>수도세
                </span>
                <span class="price">300,000 원</span>
              </li>
              <li>
                <span class="name">
                  <v-btn text><v-icon>mdi-minus</v-icon></v-btn>비품구입비
                </span>
                <span class="price">54,000 원</span>
              </li>
              <li>
                <span class="name">
                  <v-btn text><v-icon>mdi-minus</v-icon></v-btn>환불건
                </span>
                <span class="price">15,000 원</span>
              </li>
              <li>
                <span class="name">
                  <v-btn text><v-icon>mdi-minus</v-icon></v-btn>월세
                </span>
                <span class="price">45,900 원</span>
              </li>
              <li class="totalResult">
                <span class="name">합계(순이익)</span>
                <span class="price">1,475,800원</span>
              </li>
            </ul>
          </div>
             </div>
        </v-col>
        <v-col cols="4">
          <h4>비용입력</h4>
          <div class="costAddList">
            <dl class="name">
              <dt>항목이름</dt>
              <dd>
                <input type="text" placeholder="항목의 이름을 입력해주세요">
              </dd>
            </dl>
            <dl class="price">
              <dt>금액입력</dt>
              <dd>
                <input type="number" placeholder="금액을 입력해주세요">
                <label>원</label>
              </dd>
            </dl>
            <div class="divider"/>
            <div class="btns">
              <v-btn text>항목 추가하기</v-btn>
            </div>
          </div>
     
      </v-col>
    </v-row>    
  </div>
</template>

<script>
import BarChart from '@/components/barChart.vue';
import OptionBox from '@/components/optionBox.vue';

export default {
  components:{
    BarChart, OptionBox
  },

  data() {
    return {
      date: new Date().toISOString().substr(0, 4),
      menu: false,
      monthBtns:['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
    }
  },

  computed:{
    dateRangeText(){
      return this.dates.join(' ~ ')
    },
  },

  methods:{
    dateAfter(){
      const dateNumber = Number(this.date)
      this.date = dateNumber + 1
    },
    dateBefor(){
      const dateNumber = Number(this.date)
      this.date = dateNumber - 1
    }
  }
  
}
</script>

<style lang="scss" scoped>
.statistics{

  .search-opt{
    margin-bottom:40px;
    table{
      width:100%;
      border:1px solid #e2e2e2;
      th{
        width:120px;
        padding:15px;
        text-align:center;
        font-size:14px;
      }
      td{
        h4{
          margin:0 20px;
          font-size:18px;
        }
      }
      td.yearSelect{
        display:flex;
        align-items: center;
        padding-top:10px;
      }
      td.monthBtns{
        padding-top:10px;
        padding-bottom:10px;
        .v-btn{height:30px;border:1px solid #e2e2e2;margin-right:5px;}
        .v-btn.active{
          background:#01a1dd;
          color:#fff;
          border:0px;
        }
      }
    }
  }

  h4{
    margin-bottom:10px;
    font-family:'SCDream';
    font-weight:500;
  }
  
  .costAddList{
    border:1px solid #e2e2e2;
    padding:20px;

    dl{
      display:flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom:10px;
      border:1px solid #e2e2e2;
      padding:10px;

      dt{
        width:100px;
        font-size:13px;
      }
      dd{
        flex:1;
        position: relative;
        input{
          border:1px solid #e2e2e2;
          border-radius:4px;
          height:36px;
          width:100%;
          background:#f8f8f8;
          padding:0 10px;
          font-size:13px;
        }
        label{position: absolute;top:0;right:10px;height:36px;line-height:36px;font-size:12px;}
      }
    }
    dl.price{
      input{padding-right:25px;}
    }
    .divider{margin:20px 0;height:1px;background: #e2e2e2;}
    .btns{
      text-align: right;
      .v-btn{
        background:#393939;
        color:#fff;
      }
    }
  }

  .costResultWrap{
    display:flex;
    padding:20px;
    border:1px solid #e2e2e2;  
    justify-content: space-between;
    align-items: center;

    .chart{flex:1;}

  }

  .costResult{
    flex:1;  

    li{
      display:flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom:10px;
      padding:15px;
      border:1px solid #e2e2e2;
      border-radius:4px;

      span.name{
        display:flex;
        align-items: center;
        font-size:13px;

        .v-btn{
          min-width:30px;
          width:30px;
          height:30px;
          background: #f2f2f2;
          border-radius:20px;
          margin-right:10px;

          .v-icon{font-size:18px;}
        }
      }
      span.price{
        font-size:14px;
      }
    }
    li.noData{
      justify-content: center;
      font-size:14px;
      color:#888
    }
    li.first{
      background: rgba(0,0,0,0.05);
      padding:15px;
      border-radius:4px;
      border:0px;
      
      span.name{
        font-weight:bold;
      }
      span.price{
        font-weight:bold;
        font-size:16px;
      }
    }

    li.totalResult{
      display:flex;
      align-items: center;
      justify-content: space-between;
      border:0px;
      padding:20px 15px 20px 15px;
      border-radius:0px;
      border-top:1px solid #c2c2c2;
      margin-top:20px;
      margin-bottom:0px;
      background:rgba(217,62,151,0.1);

      .name{
        font-weight:bold;
        font-size:14px;
      }
      .price{
        font-weight:bold;
        color:#D93E97;
        font-size:18px;
      }
    }
  }
}
</style>
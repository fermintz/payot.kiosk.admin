<template>
  <div class="statistics">

    <div class="search-opt">
      <table cellpadding="0" cellspacing="0">
        <tr>
          <th>기간검색</th>
          <td>
            <v-btn @click="dateBefor()" icon>
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
            <h4>{{this.date}}</h4>
            
            <v-btn @click="dateAfter()" icon>
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </td>
        </tr>
      </table>
    </div>
    <div class="total-info">
      <dl class="all">
        <dt>나의매장 평균매출</dt>
        <dd>
          <span>
            <label>일 평균매출</label>
            <strong>55,000원</strong>
          </span>
          <span>
            <label>월 평균매출</label>
            <strong>3,483,000원</strong>
          </span>
        </dd>
      </dl>
      <dl>
        <dt>전국 매장 평균매출</dt>
        <dd>
          <span>
            <label>일 평균매출</label>
            <strong>102,000원</strong>
          </span>
          <span>
            <label>월 평균매출</label>
            <strong>2,483,000원</strong>
          </span>
        </dd>
      </dl>
      <dl>
        <dt>상위(10%) 평균매출</dt>
        <dd>
          <span>
            <label>일 평균매출</label>
            <strong>55,000원</strong>
          </span>
          <span>
            <label>월 평균매출</label>
            <strong>3,483,000원</strong>
          </span>
        </dd>
      </dl>
      <dl>
        <dt>하위(10%) 평균매출</dt>
        <dd>
          <span>
            <label>일 평균매출</label>
            <strong>3,500원</strong>
          </span>
          <span>
            <label>월 평균매출</label>
            <strong>1,236,000원</strong>
          </span>
        </dd>
      </dl>
    </div>
    
    <LineChart :chartData="chart"/>

    <div class="dataTable">
      <table cellspacing="0" cellpadding="0">
        <tr>
          <th>기간</th>
          <th class="total">나의 매장 평균매출</th>
          <th>전국 평균매출</th>
          <th>상위 10% 평균매출</th>
          <th>하위 10% 평균매출</th>
        </tr>
        <tr>
          <td>1월</td>
          <td class="total">1,342,000원</td>
          <td>2,135000원</td>
          <td>3,451,000원</td>
          <td>842,000원</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import LineChart from '@/components/lineChart.vue';
import OptionBox from '@/components/optionBox.vue';

export default {
  components:{
    LineChart, OptionBox
  },

  data() {
    return {
      date: new Date().toISOString().substr(0, 4),
      menu: false,

      chart:{
        chartdata: {
          labels: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월',],
          datasets: [
            {
              label: '전국 매장 월 평균매출',
              borderWidth:1,
              borderColor:'rgba(110,30,232,1)',
              backgroundColor:'rgba(110,30,232,0)',
              data: [323000,300000,290000,280000,270000,260000,250000,240000,230000,132000,340500,240500],
            },
            {
              label: '나의 매장 월 매출',
              borderWidth:1,
              borderColor:'rgba(1,161,221,1)',
              backgroundColor:'rgba(1,161,221,0)',
              data: [248000,110000,325000,103000,99000,89000,87000,64500,45000,85000,234000,120000],
            },
          ]
        },
        
        options: {
          tooltips:{

          },
          responsive: true,
          maintainAspectRatio:false,
          scales:{
            yAxes:[{
              ticks:{
                beginAtZero:false, // 눈금자 시작을 0을 포함할것인가?
                stacked:false,
              },
            }],
            xAxes:[{
              ticks:{
                beginAtZero:false,
              }
            }]
          }
        }
      },    
    }
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
        h4{display:inline-block;margin:0 20px}
      }
    }
  }

  .total-info{
    display:flex;
    margin-bottom:40px;
    border:1px solid #e2e2e2;
    background:#f8f8f8;

    dl{
      border-right:1px solid #e2e2e2;
      flex:1;
      max-width:320px;
      background:#fff;

      dt{
        padding:15px;
        font-size:14px;
        font-family:'SCDream';
        text-align:center;
        border-bottom:1px solid #e2e2e2;
      }
      dd{
        padding:15px;
        text-align:center;
        span{
          display:flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          font-size:13px;
          margin-bottom:5px;
          label{color:#888}
          strong{}

        }
        span:last-child{margin-bottom:0px;}
      }
    }
    dl.all{
      dt{background:rgba(210,10,10,0.05)}
    }
  }

   .dataTable{
    margin-top:80px;
    table{
      border:1px solid #e2e2e2;
      border-right:0px;
      border-bottom:0px;
      font-size:13px;
      width:100%;
      th{
        border-bottom:1px solid #e2e2e2;
        border-right:1px solid #e2e2e2;
        background:#f8f8f8;
      }
      th.total{
        background:rgba(210,10,10,0.05);
      }
      td{
        text-align:center;
        border-right:1px solid #e2e2e2;
        border-bottom:1px solid #e2e2e2;
      }
      th,td{
        padding:10px;
      }
      td.total{
        font-weight:bold;
      }
    }

  }

}
</style>
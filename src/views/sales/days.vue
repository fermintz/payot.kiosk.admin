<template>
  <div class="time-statistics">
    <div class="search-opt">
      <table cellpadding="0" cellspacing="0">
        <tr>
          <th>기간검색</th>
          <td>
            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              :return-value.sync="dates"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <input
                  type="text"
                  v-model="dateRangeText"
                  label="Picker in menu"
                  prepend-icon="event"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                >
              </template>
              <v-date-picker v-model="dates" no-title scrollable range>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                <v-btn text color="primary" @click="$refs.menu.save(dates)">OK</v-btn>
              </v-date-picker>
            </v-menu>

            <div class="dateBtns">
              <v-btn text>
                7일
              </v-btn>
              <v-btn text>
                15일
              </v-btn>
              <v-btn text>
                1개월
              </v-btn>
            </div>
          </td>
        </tr>
      </table>
    </div>

    <div class="total-info">
      <dl class='all'>
        <dt>전체 일 평균</dt>
        <dd>
          <span>
            <label>이용금액</label>
            <strong>169,600원</strong>
          </span>
        </dd>
      </dl>
      
      <dl>
        <dt>장비 일 평균</dt>
        <dd>        
          <span>
            <label>금액</label>
            <strong>86,400원</strong>
          </span>
        </dd>
      </dl>
      <dl>
        <dt>키오스크(현금) 일 평균</dt>
        <dd>
          <span>
            <label>금액</label>
            <strong>22,000원</strong>
          </span>
        </dd>
      </dl>
      <dl>
        <dt>키오스크(카드) 일평균</dt>
        <dd>
          <span>
            <label>금액</label>
            <strong>61,000원</strong>
          </span>
        </dd>
      </dl>
      <dl>
        <dt>매출이 가장 많은 날짜</dt>
        <dd>
          <span>
            <label>기간</label>
            <strong>2020-10-25</strong>
          </span>
          <span>
            <label>매출액</label>
            <strong>356,400</strong>
          </span>
        </dd>
      </dl>
      <dl>
        <dt>매출이 가장 적은 날짜</dt>
        <dd>
          <span>
            <label>기간</label>
            <strong>2020-10-07</strong>
          </span>
          <span>
            <label>매출액</label>
            <strong>62,000</strong>
          </span>
        </dd>
      </dl>
    </div>

    <v-row>
      <v-col cols="9">
        <div class="lineChart">
          <BarChart :chartData="chart"/>
        </div>
      </v-col>
      <v-col cols="3">
        <div class="pieChart">
          <PieChart :chartData="pieChart"/>
        </div>
      </v-col>
    </v-row>      

    <div class="dataTable">
      <table cellpadding="0" cellspacing="0">
        <thead>
          <tr>
            <th rowspan="2">기간</th>
            <th colspan="2" class="total">전체</th>
            <th colspan="2">장비(현금)</th>
            <th colspan="2">키오스크(현금)</th>
            <th colspan="2">키오스크(카드)</th>
          </tr>
          <tr>
            <th class="total">이용횟수</th>
            <th class="total">매출액</th>
            <th>이용횟수</th>
            <th>매출액</th>
            <th>이용횟수</th>
            <th>매출액</th>
            <th>이용횟수</th>
            <th>매출액</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(items, index) in dummys" :key="index">
            <td>{{items.date}}</td>
            <td class="total">{{items.eqNumber + items.kioskCoinNum + items.kioskCardNum}}</td>
            <td class="total">{{items.eqSales + items.kioskCoinSales + items.kioskCardSales }}</td>
            <td>{{items.eqNumber}}</td>
            <td>{{items.eqSales}}</td>
            <td>{{items.kioskCoinNum}}</td>
            <td>{{items.kioskCoinSales}}</td>
            <td>{{items.kioskCardNum}}</td>
            <td>{{items.kioskCardSales}}</td>
          </tr>
          <tr class="footer">
            <td>합계</td>
            <td class="total">877</td>
            <td class="total">5,259,000원</td>
            <td>447</td>
            <td>2,680,000원</td>
            <td>114</td>
            <td>686,000원</td>
            <td>316</td>
            <td>1,893,000원</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import LineChart from '@/components/lineChart.vue';
import OptionBox from '@/components/optionBox.vue';
import PieChart from '@/components/pieChart.vue';
import BarChart from '@/components/barChart.vue';
import faker from 'faker';
import dummyData from '../sales/dummy.json';

export default {
  components:{
    LineChart, OptionBox, PieChart, BarChart
  },

  data() {
    return {
      date1:new Date().toISOString().substr(0, 10),
      date2:new Date().toISOString().substr(0, 10),
      dates: [this.date1, this.date2],
      menu: false,      
      chart:{
        chartdata: {
          labels: ['1일','2일','3일','5일','6일','7일','8일','9일','10일','11일','12일','13일','14일','15일','16일','17일','18일','19일','20일','21일','22일','23일','24일','25일','26일','27일','28일','29일','30일','31일'],
          datasets: [
            {
              label: '장비(현금)',
              backgroundColor:'rgba(0,150,255,1)',
              barPercentage:0.3,
              data: [...this.randomChartValue(7500, 204500, 31)],
            },
            {
              label: '키오스크(현금)',
              backgroundColor:'rgba(255,0,110,1)',
              barPercentage:0.3,
              data: [...this.randomChartValue(0, 75000, 31)],
            },
            {
              label: '키오스크(장비)',
              backgroundColor:'rgba(131,56,236,1)',
              barPercentage:0.3,
              data: [...this.randomChartValue(8500, 129000, 31)],
            },
          ]
        },
        
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales:{
            yAxes:[{
              stacked:true
            }],
            xAxes:[{
              stacked:true
            }]
          }
        }
      },

      pieChart:{
        chartdata:{
          labels:['장비(현금)','키오스크(현금)','키오스크(카드)'],
          datasets:[
            {
              backgroundColor:['rgba(0,150,255,1)','rgba(255,0,110,1)','rgba(131,56,236,1)'],
              borderWidth:5,
              data:[63,29,8]
            },
          ]
        },


        options: {
          responsive: true,
          maintainAspectRatio: false,
          title:{
            display:true,
            text:'전체 매출 장비별비율'
          },
          showAllTooltips: true,
          layout:{
            padding:{
              top:20,
              left:20,
              right:20,
              bottom:20,
            }
          },
        }
      }
    }
  },

  mounted(){
    console.log(this.totalSales())
  },

  methods:{
    randomChartValue(min, max, count) {
      return new Array(count).fill(0).map(() => faker.random.number({ min, max }));
    },


    totalSales(){
      const eqNumbers = this.dummys.map(items => {
        return items.eqNumber
      })
      return eqNumbers.reduce((result, arr) => result + arr)
    }

  },

  computed:{
    dateRangeText(){
      return this.dates.join(' ~ ')
    },

    dummys(){
      return dummyData.data
    },

  }, 
}

</script>

<style lang="scss" scoped>
.time-statistics{
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
        padding:15px;
        input{
          border:1px solid #aaa;
          text-align:center;
          width:250px;
          font-size:14px;
          border-radius:4px;
          height:28px;
        }
        span{margin:0 10px;color:#aaa;}
      }
    }

    .dateBtns{
      margin-left:10px;
      display:inline-block;
      border:1px solid #e2e2e2;
      border-radius:4px;

      .v-btn{
        height:28px;
        border-right:1px solid #e2e2e2;
        border:0px;;
      }
      .v-btn:last-child{
        border-right:0px;
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

      tbody{
        tr:first-child{
          td{border-top:1px solid #ccc;}
        }
      }

      th{
        border-bottom:1px solid #e2e2e2;
        border-right:1px solid #e2e2e2;
        background:#f8f8f8;
      }
      td{
        text-align:center;
        border-right:1px solid #e2e2e2;
        border-bottom:1px solid #e2e2e2;
      }
      th,td{
        padding:10px;
      }
      th.total, td.total{
        background:rgba(210,10,10,0.05);
        font-weight:500;
      }

      div{
        display:flex;
        align-items: center;
        margin-bottom:5px;

        label{color:#888;font-size:12px;width:60px;text-align:left;}
        span{font-weight:bold;font-size:13px;}
        
      }
      div:last-child{margin-bottom:0px;}

      tr.footer{
        td{border-top:1px solid #000;font-weight:bold}
      }
    }
  }

  .pieChart{
    border:1px solid #e2e2e2;
  }


}
</style>
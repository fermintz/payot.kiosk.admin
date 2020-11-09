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
              :return-value.sync="date"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <input
                  type="text"
                  v-model="date"
                  label="Picker in menu"
                  prepend-icon="event"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                >
              </template>
              <v-date-picker v-model="date" no-title scrollable type="month">
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
              </v-date-picker>
            </v-menu>          
          </td>
        </tr>
      </table>
    </div>

    <div class="total-info">
      <dl class='all'>
        <dt>전체</dt>
        <dd>
          <span>
            <label>이용횟수</label>
            <strong>75</strong>
          </span>
          <span>
            <label>이용금액</label>
            <strong>453,000원</strong>
          </span>
        </dd>
      </dl>
      <dl>
        <dt>가장 이용이 많은 요일</dt>
        <dd>
          <span>
            <label>요일</label>
            <strong>수요일</strong>
          </span>
          <span>
            <label>이용횟수</label>
            <strong>10</strong>
          </span>
          <span>
            <label>평균매출</label>
            <strong>134,000원</strong>
          </span>
        </dd>
      </dl>
      <dl>
        <dt>가장 이용이 적은 요일</dt>
        <dd>
          <span>
            <label>요일</label>
            <strong>월요일</strong>
          </span>
          <span>
            <label>이용횟수</label>
            <strong>3</strong>
          </span>
          <span>
            <label>평균매출</label>
            <strong>34,000원</strong>
          </span>
        </dd>
      </dl>
      <dl>
        <dt>세탁기 전체</dt>
        <dd>
          <span>
            <label>이용횟수</label>
            <strong>523</strong>
          </span>
          <span>
            <label>이용금액</label>
            <strong>1,584,800원</strong>
          </span>
        </dd>
      </dl>
      <dl>
        <dt>건조기 전체</dt>
        <dd>
          <span>
            <label>이용횟수</label>
            <strong>431</strong>
          </span>
          <span>
            <label>이용금액</label>
            <strong>1,251,000원</strong>
          </span>
        </dd>
      </dl>
      <dl>
        <dt>기타장비 전체</dt>
        <dd>
          <span>
            <label>이용횟수</label>
            <strong>135</strong>
          </span>
          <span>
            <label>이용금액</label>
            <strong>347,000원</strong>
          </span>
        </dd>
      </dl>
    </div>
    
    <LineChart :chartData="chart"/>

    <div class="dataTable">
      <table cellpadding="0" cellspacing="0">
        <tr>
          <th rowspan="2">요일</th>
          <th colspan="2" class="total">전체</th>
          <th colspan="2">세탁기</th>
          <th colspan="2">건조기</th>
          <th colspan="2">기타장비</th>
        </tr>
        <tr>
          <th class="total">평균이용횟수</th>
          <th class="total">평균매출액</th>
          <th>평균이용횟수</th>
          <th>평균매출액</th>
          <th>평균이용횟수</th>
          <th>평균매출액</th>
          <th>평균이용횟수</th>
          <th>평균매출액</th>
        </tr>
        <tr>
          <td>월요일</td>
          <td class="total">481</td>
          <td class="total">5,340,000원</td>
          <td>343</td>
          <td>986,000원</td>
          <td>300</td>
          <td>894,000원</td>
          <td>34</td>
          <td>164,000원</td>
        </tr>
      </table>
    </div>

  </div>
</template>

<script>
import LineChart from '@/components/lineChart.vue'
import OptionBox from '@/components/optionBox.vue';

export default {
  components:{
    LineChart, OptionBox
  },

  data() {
    return {
      date: new Date().toISOString().substr(0, 7),
      menu: false,

      chart:{
        chartdata: {
          labels: ['월요일','화요일','수요일','목요일','금요일','토요일','일요일'],
          datasets: [
            {
              label: '전체',
              borderWidth:1,
              borderColor:'rgba(110,30,232,1)',
              backgroundColor:'rgba(110,30,232,0)',
              data: [634,380,480,684,941,981,618,521,484,321,600],
            },
            {
              label: '세탁기',
              borderWidth:1,
              borderColor:'rgba(1,161,221,1)',
              backgroundColor:'rgba(1,161,221,0.00)',
              data: [343,318,422,348,541,481,362,618,521,484,321,600],
            },
            {
              label: '건조기',
              borderWidth:1,
              borderColor:'rgba(210,10,10,1)',
              backgroundColor:'rgba(210,10,10,0)',
              data: [300,12,34,151,345,332,241,151,61,45,185,112],
            },
            {
              label: '기타장비',
              borderWidth:1,
              borderColor:'rgba(255,119,0,1)',
              backgroundColor:'rgba(255,119,0,0)',
              data: [34,64,54,32,120,84,64,87,15,45,32,24],
            },
          ]
        },
        
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales:{
            yAxes:[{
              stacked:false
            }]
          }
        },
      }
      
    }
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
          width:150px;
          font-size:14px;
          border-radius:4px;
          height:28px;
        }
        span{margin:0 10px;color:#aaa;}
        .v-btn{
        background:#292929;
        color:#fff;
        height:28px;
        margin-left:10px;
      }
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
      dt{background:#f8f1f1}
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
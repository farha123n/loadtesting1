/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 1205.0, "minX": 0.0, "maxY": 21015.0, "series": [{"data": [[0.0, 1205.0], [0.1, 1205.0], [0.2, 1205.0], [0.3, 1205.0], [0.4, 1205.0], [0.5, 1205.0], [0.6, 1208.0], [0.7, 1208.0], [0.8, 1208.0], [0.9, 1208.0], [1.0, 1208.0], [1.1, 1208.0], [1.2, 1222.0], [1.3, 1222.0], [1.4, 1222.0], [1.5, 1222.0], [1.6, 1222.0], [1.7, 1222.0], [1.8, 1223.0], [1.9, 1223.0], [2.0, 1223.0], [2.1, 1223.0], [2.2, 1223.0], [2.3, 1223.0], [2.4, 1227.0], [2.5, 1227.0], [2.6, 1227.0], [2.7, 1227.0], [2.8, 1227.0], [2.9, 1227.0], [3.0, 1240.0], [3.1, 1240.0], [3.2, 1240.0], [3.3, 1240.0], [3.4, 1240.0], [3.5, 1240.0], [3.6, 1241.0], [3.7, 1241.0], [3.8, 1241.0], [3.9, 1241.0], [4.0, 1241.0], [4.1, 1241.0], [4.2, 1241.0], [4.3, 1241.0], [4.4, 1241.0], [4.5, 1241.0], [4.6, 1241.0], [4.7, 1241.0], [4.8, 1243.0], [4.9, 1243.0], [5.0, 1243.0], [5.1, 1243.0], [5.2, 1243.0], [5.3, 1247.0], [5.4, 1247.0], [5.5, 1247.0], [5.6, 1247.0], [5.7, 1247.0], [5.8, 1247.0], [5.9, 1463.0], [6.0, 1463.0], [6.1, 1463.0], [6.2, 1463.0], [6.3, 1463.0], [6.4, 1463.0], [6.5, 1582.0], [6.6, 1582.0], [6.7, 1582.0], [6.8, 1582.0], [6.9, 1582.0], [7.0, 1582.0], [7.1, 1627.0], [7.2, 1627.0], [7.3, 1627.0], [7.4, 1627.0], [7.5, 1627.0], [7.6, 1627.0], [7.7, 1728.0], [7.8, 1728.0], [7.9, 1728.0], [8.0, 1728.0], [8.1, 1728.0], [8.2, 1728.0], [8.3, 1821.0], [8.4, 1821.0], [8.5, 1821.0], [8.6, 1821.0], [8.7, 1821.0], [8.8, 1821.0], [8.9, 1896.0], [9.0, 1896.0], [9.1, 1896.0], [9.2, 1896.0], [9.3, 1896.0], [9.4, 1896.0], [9.5, 2018.0], [9.6, 2018.0], [9.7, 2018.0], [9.8, 2018.0], [9.9, 2018.0], [10.0, 2052.0], [10.1, 2052.0], [10.2, 2052.0], [10.3, 2052.0], [10.4, 2052.0], [10.5, 2052.0], [10.6, 2075.0], [10.7, 2075.0], [10.8, 2075.0], [10.9, 2075.0], [11.0, 2075.0], [11.1, 2075.0], [11.2, 2144.0], [11.3, 2144.0], [11.4, 2144.0], [11.5, 2144.0], [11.6, 2144.0], [11.7, 2144.0], [11.8, 2263.0], [11.9, 2263.0], [12.0, 2263.0], [12.1, 2263.0], [12.2, 2263.0], [12.3, 2263.0], [12.4, 2360.0], [12.5, 2360.0], [12.6, 2360.0], [12.7, 2360.0], [12.8, 2360.0], [12.9, 2360.0], [13.0, 2491.0], [13.1, 2491.0], [13.2, 2491.0], [13.3, 2491.0], [13.4, 2491.0], [13.5, 2491.0], [13.6, 2519.0], [13.7, 2519.0], [13.8, 2519.0], [13.9, 2519.0], [14.0, 2519.0], [14.1, 2519.0], [14.2, 2530.0], [14.3, 2530.0], [14.4, 2530.0], [14.5, 2530.0], [14.6, 2530.0], [14.7, 2530.0], [14.8, 2810.0], [14.9, 2810.0], [15.0, 2810.0], [15.1, 2810.0], [15.2, 2810.0], [15.3, 3013.0], [15.4, 3013.0], [15.5, 3013.0], [15.6, 3013.0], [15.7, 3013.0], [15.8, 3013.0], [15.9, 3107.0], [16.0, 3107.0], [16.1, 3107.0], [16.2, 3107.0], [16.3, 3107.0], [16.4, 3107.0], [16.5, 3112.0], [16.6, 3112.0], [16.7, 3112.0], [16.8, 3112.0], [16.9, 3112.0], [17.0, 3112.0], [17.1, 3193.0], [17.2, 3193.0], [17.3, 3193.0], [17.4, 3193.0], [17.5, 3193.0], [17.6, 3193.0], [17.7, 3207.0], [17.8, 3207.0], [17.9, 3207.0], [18.0, 3207.0], [18.1, 3207.0], [18.2, 3207.0], [18.3, 3644.0], [18.4, 3644.0], [18.5, 3644.0], [18.6, 3644.0], [18.7, 3644.0], [18.8, 3644.0], [18.9, 3658.0], [19.0, 3658.0], [19.1, 3658.0], [19.2, 3658.0], [19.3, 3658.0], [19.4, 3658.0], [19.5, 4012.0], [19.6, 4012.0], [19.7, 4012.0], [19.8, 4012.0], [19.9, 4012.0], [20.0, 4012.0], [20.1, 4045.0], [20.2, 4045.0], [20.3, 4045.0], [20.4, 4045.0], [20.5, 4045.0], [20.6, 4059.0], [20.7, 4059.0], [20.8, 4059.0], [20.9, 4059.0], [21.0, 4059.0], [21.1, 4059.0], [21.2, 4076.0], [21.3, 4076.0], [21.4, 4076.0], [21.5, 4076.0], [21.6, 4076.0], [21.7, 4076.0], [21.8, 4312.0], [21.9, 4312.0], [22.0, 4312.0], [22.1, 4312.0], [22.2, 4312.0], [22.3, 4312.0], [22.4, 4368.0], [22.5, 4368.0], [22.6, 4368.0], [22.7, 4368.0], [22.8, 4368.0], [22.9, 4368.0], [23.0, 4499.0], [23.1, 4499.0], [23.2, 4499.0], [23.3, 4499.0], [23.4, 4499.0], [23.5, 4499.0], [23.6, 4514.0], [23.7, 4514.0], [23.8, 4514.0], [23.9, 4514.0], [24.0, 4514.0], [24.1, 4514.0], [24.2, 4609.0], [24.3, 4609.0], [24.4, 4609.0], [24.5, 4609.0], [24.6, 4609.0], [24.7, 4609.0], [24.8, 4638.0], [24.9, 4638.0], [25.0, 4638.0], [25.1, 4638.0], [25.2, 4638.0], [25.3, 4680.0], [25.4, 4680.0], [25.5, 4680.0], [25.6, 4680.0], [25.7, 4680.0], [25.8, 4680.0], [25.9, 4729.0], [26.0, 4729.0], [26.1, 4729.0], [26.2, 4729.0], [26.3, 4729.0], [26.4, 4729.0], [26.5, 4754.0], [26.6, 4754.0], [26.7, 4754.0], [26.8, 4754.0], [26.9, 4754.0], [27.0, 4754.0], [27.1, 4811.0], [27.2, 4811.0], [27.3, 4811.0], [27.4, 4811.0], [27.5, 4811.0], [27.6, 4811.0], [27.7, 4815.0], [27.8, 4815.0], [27.9, 4815.0], [28.0, 4815.0], [28.1, 4815.0], [28.2, 4815.0], [28.3, 4818.0], [28.4, 4818.0], [28.5, 4818.0], [28.6, 4818.0], [28.7, 4818.0], [28.8, 4818.0], [28.9, 4907.0], [29.0, 4907.0], [29.1, 4907.0], [29.2, 4907.0], [29.3, 4907.0], [29.4, 4907.0], [29.5, 4940.0], [29.6, 4940.0], [29.7, 4940.0], [29.8, 4940.0], [29.9, 4940.0], [30.0, 4940.0], [30.1, 4994.0], [30.2, 4994.0], [30.3, 4994.0], [30.4, 4994.0], [30.5, 4994.0], [30.6, 5026.0], [30.7, 5026.0], [30.8, 5026.0], [30.9, 5026.0], [31.0, 5026.0], [31.1, 5026.0], [31.2, 5053.0], [31.3, 5053.0], [31.4, 5053.0], [31.5, 5053.0], [31.6, 5053.0], [31.7, 5053.0], [31.8, 5120.0], [31.9, 5120.0], [32.0, 5120.0], [32.1, 5120.0], [32.2, 5120.0], [32.3, 5120.0], [32.4, 5203.0], [32.5, 5203.0], [32.6, 5203.0], [32.7, 5203.0], [32.8, 5203.0], [32.9, 5203.0], [33.0, 5254.0], [33.1, 5254.0], [33.2, 5254.0], [33.3, 5254.0], [33.4, 5254.0], [33.5, 5254.0], [33.6, 5303.0], [33.7, 5303.0], [33.8, 5303.0], [33.9, 5303.0], [34.0, 5303.0], [34.1, 5303.0], [34.2, 5348.0], [34.3, 5348.0], [34.4, 5348.0], [34.5, 5348.0], [34.6, 5348.0], [34.7, 5348.0], [34.8, 5371.0], [34.9, 5371.0], [35.0, 5371.0], [35.1, 5371.0], [35.2, 5371.0], [35.3, 5408.0], [35.4, 5408.0], [35.5, 5408.0], [35.6, 5408.0], [35.7, 5408.0], [35.8, 5408.0], [35.9, 5421.0], [36.0, 5421.0], [36.1, 5421.0], [36.2, 5421.0], [36.3, 5421.0], [36.4, 5421.0], [36.5, 5460.0], [36.6, 5460.0], [36.7, 5460.0], [36.8, 5460.0], [36.9, 5460.0], [37.0, 5460.0], [37.1, 5525.0], [37.2, 5525.0], [37.3, 5525.0], [37.4, 5525.0], [37.5, 5525.0], [37.6, 5525.0], [37.7, 5638.0], [37.8, 5638.0], [37.9, 5638.0], [38.0, 5638.0], [38.1, 5638.0], [38.2, 5638.0], [38.3, 5656.0], [38.4, 5656.0], [38.5, 5656.0], [38.6, 5656.0], [38.7, 5656.0], [38.8, 5656.0], [38.9, 5687.0], [39.0, 5687.0], [39.1, 5687.0], [39.2, 5687.0], [39.3, 5687.0], [39.4, 5687.0], [39.5, 5761.0], [39.6, 5761.0], [39.7, 5761.0], [39.8, 5761.0], [39.9, 5761.0], [40.0, 5761.0], [40.1, 5787.0], [40.2, 5787.0], [40.3, 5787.0], [40.4, 5787.0], [40.5, 5787.0], [40.6, 5886.0], [40.7, 5886.0], [40.8, 5886.0], [40.9, 5886.0], [41.0, 5886.0], [41.1, 5886.0], [41.2, 5907.0], [41.3, 5907.0], [41.4, 5907.0], [41.5, 5907.0], [41.6, 5907.0], [41.7, 5907.0], [41.8, 5938.0], [41.9, 5938.0], [42.0, 5938.0], [42.1, 5938.0], [42.2, 5938.0], [42.3, 5938.0], [42.4, 5943.0], [42.5, 5943.0], [42.6, 5943.0], [42.7, 5943.0], [42.8, 5943.0], [42.9, 5943.0], [43.0, 5945.0], [43.1, 5945.0], [43.2, 5945.0], [43.3, 5945.0], [43.4, 5945.0], [43.5, 5945.0], [43.6, 5955.0], [43.7, 5955.0], [43.8, 5955.0], [43.9, 5955.0], [44.0, 5955.0], [44.1, 5955.0], [44.2, 5960.0], [44.3, 5960.0], [44.4, 5960.0], [44.5, 5960.0], [44.6, 5960.0], [44.7, 5960.0], [44.8, 6096.0], [44.9, 6096.0], [45.0, 6096.0], [45.1, 6096.0], [45.2, 6096.0], [45.3, 6098.0], [45.4, 6098.0], [45.5, 6098.0], [45.6, 6098.0], [45.7, 6098.0], [45.8, 6098.0], [45.9, 6123.0], [46.0, 6123.0], [46.1, 6123.0], [46.2, 6123.0], [46.3, 6123.0], [46.4, 6123.0], [46.5, 6134.0], [46.6, 6134.0], [46.7, 6134.0], [46.8, 6134.0], [46.9, 6134.0], [47.0, 6134.0], [47.1, 6203.0], [47.2, 6203.0], [47.3, 6203.0], [47.4, 6203.0], [47.5, 6203.0], [47.6, 6203.0], [47.7, 6271.0], [47.8, 6271.0], [47.9, 6271.0], [48.0, 6271.0], [48.1, 6271.0], [48.2, 6271.0], [48.3, 6295.0], [48.4, 6295.0], [48.5, 6295.0], [48.6, 6295.0], [48.7, 6295.0], [48.8, 6295.0], [48.9, 6321.0], [49.0, 6321.0], [49.1, 6321.0], [49.2, 6321.0], [49.3, 6321.0], [49.4, 6321.0], [49.5, 6327.0], [49.6, 6327.0], [49.7, 6327.0], [49.8, 6327.0], [49.9, 6327.0], [50.0, 6399.0], [50.1, 6399.0], [50.2, 6399.0], [50.3, 6399.0], [50.4, 6399.0], [50.5, 6399.0], [50.6, 6425.0], [50.7, 6425.0], [50.8, 6425.0], [50.9, 6425.0], [51.0, 6425.0], [51.1, 6425.0], [51.2, 6451.0], [51.3, 6451.0], [51.4, 6451.0], [51.5, 6451.0], [51.6, 6451.0], [51.7, 6451.0], [51.8, 6555.0], [51.9, 6555.0], [52.0, 6555.0], [52.1, 6555.0], [52.2, 6555.0], [52.3, 6555.0], [52.4, 6634.0], [52.5, 6634.0], [52.6, 6634.0], [52.7, 6634.0], [52.8, 6634.0], [52.9, 6634.0], [53.0, 6639.0], [53.1, 6639.0], [53.2, 6639.0], [53.3, 6639.0], [53.4, 6639.0], [53.5, 6639.0], [53.6, 6707.0], [53.7, 6707.0], [53.8, 6707.0], [53.9, 6707.0], [54.0, 6707.0], [54.1, 6707.0], [54.2, 6867.0], [54.3, 6867.0], [54.4, 6867.0], [54.5, 6867.0], [54.6, 6867.0], [54.7, 6867.0], [54.8, 6869.0], [54.9, 6869.0], [55.0, 6869.0], [55.1, 6869.0], [55.2, 6869.0], [55.3, 6870.0], [55.4, 6870.0], [55.5, 6870.0], [55.6, 6870.0], [55.7, 6870.0], [55.8, 6870.0], [55.9, 6883.0], [56.0, 6883.0], [56.1, 6883.0], [56.2, 6883.0], [56.3, 6883.0], [56.4, 6883.0], [56.5, 6894.0], [56.6, 6894.0], [56.7, 6894.0], [56.8, 6894.0], [56.9, 6894.0], [57.0, 6894.0], [57.1, 6904.0], [57.2, 6904.0], [57.3, 6904.0], [57.4, 6904.0], [57.5, 6904.0], [57.6, 6904.0], [57.7, 6911.0], [57.8, 6911.0], [57.9, 6911.0], [58.0, 6911.0], [58.1, 6911.0], [58.2, 6911.0], [58.3, 6937.0], [58.4, 6937.0], [58.5, 6937.0], [58.6, 6937.0], [58.7, 6937.0], [58.8, 6937.0], [58.9, 6939.0], [59.0, 6939.0], [59.1, 6939.0], [59.2, 6939.0], [59.3, 6939.0], [59.4, 6939.0], [59.5, 6967.0], [59.6, 6967.0], [59.7, 6967.0], [59.8, 6967.0], [59.9, 6967.0], [60.0, 6974.0], [60.1, 6974.0], [60.2, 6974.0], [60.3, 6974.0], [60.4, 6974.0], [60.5, 6974.0], [60.6, 6979.0], [60.7, 6979.0], [60.8, 6979.0], [60.9, 6979.0], [61.0, 6979.0], [61.1, 6979.0], [61.2, 7004.0], [61.3, 7004.0], [61.4, 7004.0], [61.5, 7004.0], [61.6, 7004.0], [61.7, 7004.0], [61.8, 7013.0], [61.9, 7013.0], [62.0, 7013.0], [62.1, 7013.0], [62.2, 7013.0], [62.3, 7013.0], [62.4, 7019.0], [62.5, 7019.0], [62.6, 7019.0], [62.7, 7019.0], [62.8, 7019.0], [62.9, 7019.0], [63.0, 7038.0], [63.1, 7038.0], [63.2, 7038.0], [63.3, 7038.0], [63.4, 7038.0], [63.5, 7038.0], [63.6, 7043.0], [63.7, 7043.0], [63.8, 7043.0], [63.9, 7043.0], [64.0, 7043.0], [64.1, 7043.0], [64.2, 7053.0], [64.3, 7053.0], [64.4, 7053.0], [64.5, 7053.0], [64.6, 7053.0], [64.7, 7053.0], [64.8, 7067.0], [64.9, 7067.0], [65.0, 7067.0], [65.1, 7067.0], [65.2, 7067.0], [65.3, 7167.0], [65.4, 7167.0], [65.5, 7167.0], [65.6, 7167.0], [65.7, 7167.0], [65.8, 7167.0], [65.9, 7179.0], [66.0, 7179.0], [66.1, 7179.0], [66.2, 7179.0], [66.3, 7179.0], [66.4, 7179.0], [66.5, 7188.0], [66.6, 7188.0], [66.7, 7188.0], [66.8, 7188.0], [66.9, 7188.0], [67.0, 7188.0], [67.1, 7240.0], [67.2, 7240.0], [67.3, 7240.0], [67.4, 7240.0], [67.5, 7240.0], [67.6, 7240.0], [67.7, 7273.0], [67.8, 7273.0], [67.9, 7273.0], [68.0, 7273.0], [68.1, 7273.0], [68.2, 7273.0], [68.3, 7308.0], [68.4, 7308.0], [68.5, 7308.0], [68.6, 7308.0], [68.7, 7308.0], [68.8, 7308.0], [68.9, 7313.0], [69.0, 7313.0], [69.1, 7313.0], [69.2, 7313.0], [69.3, 7313.0], [69.4, 7313.0], [69.5, 7333.0], [69.6, 7333.0], [69.7, 7333.0], [69.8, 7333.0], [69.9, 7333.0], [70.0, 7333.0], [70.1, 7333.0], [70.2, 7333.0], [70.3, 7333.0], [70.4, 7333.0], [70.5, 7333.0], [70.6, 7352.0], [70.7, 7352.0], [70.8, 7352.0], [70.9, 7352.0], [71.0, 7352.0], [71.1, 7352.0], [71.2, 7369.0], [71.3, 7369.0], [71.4, 7369.0], [71.5, 7369.0], [71.6, 7369.0], [71.7, 7369.0], [71.8, 7369.0], [71.9, 7369.0], [72.0, 7369.0], [72.1, 7369.0], [72.2, 7369.0], [72.3, 7369.0], [72.4, 7372.0], [72.5, 7372.0], [72.6, 7372.0], [72.7, 7372.0], [72.8, 7372.0], [72.9, 7372.0], [73.0, 7396.0], [73.1, 7396.0], [73.2, 7396.0], [73.3, 7396.0], [73.4, 7396.0], [73.5, 7396.0], [73.6, 7414.0], [73.7, 7414.0], [73.8, 7414.0], [73.9, 7414.0], [74.0, 7414.0], [74.1, 7414.0], [74.2, 7429.0], [74.3, 7429.0], [74.4, 7429.0], [74.5, 7429.0], [74.6, 7429.0], [74.7, 7429.0], [74.8, 7431.0], [74.9, 7431.0], [75.0, 7431.0], [75.1, 7431.0], [75.2, 7431.0], [75.3, 7440.0], [75.4, 7440.0], [75.5, 7440.0], [75.6, 7440.0], [75.7, 7440.0], [75.8, 7440.0], [75.9, 7482.0], [76.0, 7482.0], [76.1, 7482.0], [76.2, 7482.0], [76.3, 7482.0], [76.4, 7482.0], [76.5, 7524.0], [76.6, 7524.0], [76.7, 7524.0], [76.8, 7524.0], [76.9, 7524.0], [77.0, 7524.0], [77.1, 7541.0], [77.2, 7541.0], [77.3, 7541.0], [77.4, 7541.0], [77.5, 7541.0], [77.6, 7541.0], [77.7, 7558.0], [77.8, 7558.0], [77.9, 7558.0], [78.0, 7558.0], [78.1, 7558.0], [78.2, 7558.0], [78.3, 7575.0], [78.4, 7575.0], [78.5, 7575.0], [78.6, 7575.0], [78.7, 7575.0], [78.8, 7575.0], [78.9, 7601.0], [79.0, 7601.0], [79.1, 7601.0], [79.2, 7601.0], [79.3, 7601.0], [79.4, 7601.0], [79.5, 7603.0], [79.6, 7603.0], [79.7, 7603.0], [79.8, 7603.0], [79.9, 7603.0], [80.0, 7603.0], [80.1, 7645.0], [80.2, 7645.0], [80.3, 7645.0], [80.4, 7645.0], [80.5, 7645.0], [80.6, 7652.0], [80.7, 7652.0], [80.8, 7652.0], [80.9, 7652.0], [81.0, 7652.0], [81.1, 7652.0], [81.2, 7658.0], [81.3, 7658.0], [81.4, 7658.0], [81.5, 7658.0], [81.6, 7658.0], [81.7, 7658.0], [81.8, 7679.0], [81.9, 7679.0], [82.0, 7679.0], [82.1, 7679.0], [82.2, 7679.0], [82.3, 7679.0], [82.4, 7693.0], [82.5, 7693.0], [82.6, 7693.0], [82.7, 7693.0], [82.8, 7693.0], [82.9, 7693.0], [83.0, 7694.0], [83.1, 7694.0], [83.2, 7694.0], [83.3, 7694.0], [83.4, 7694.0], [83.5, 7694.0], [83.6, 7735.0], [83.7, 7735.0], [83.8, 7735.0], [83.9, 7735.0], [84.0, 7735.0], [84.1, 7735.0], [84.2, 7737.0], [84.3, 7737.0], [84.4, 7737.0], [84.5, 7737.0], [84.6, 7737.0], [84.7, 7737.0], [84.8, 7742.0], [84.9, 7742.0], [85.0, 7742.0], [85.1, 7742.0], [85.2, 7742.0], [85.3, 7743.0], [85.4, 7743.0], [85.5, 7743.0], [85.6, 7743.0], [85.7, 7743.0], [85.8, 7743.0], [85.9, 8012.0], [86.0, 8012.0], [86.1, 8012.0], [86.2, 8012.0], [86.3, 8012.0], [86.4, 8012.0], [86.5, 8017.0], [86.6, 8017.0], [86.7, 8017.0], [86.8, 8017.0], [86.9, 8017.0], [87.0, 8017.0], [87.1, 8042.0], [87.2, 8042.0], [87.3, 8042.0], [87.4, 8042.0], [87.5, 8042.0], [87.6, 8042.0], [87.7, 8218.0], [87.8, 8218.0], [87.9, 8218.0], [88.0, 8218.0], [88.1, 8218.0], [88.2, 8218.0], [88.3, 16166.0], [88.4, 16166.0], [88.5, 16166.0], [88.6, 16166.0], [88.7, 16166.0], [88.8, 16166.0], [88.9, 16226.0], [89.0, 16226.0], [89.1, 16226.0], [89.2, 16226.0], [89.3, 16226.0], [89.4, 16226.0], [89.5, 16243.0], [89.6, 16243.0], [89.7, 16243.0], [89.8, 16243.0], [89.9, 16243.0], [90.0, 16243.0], [90.1, 16245.0], [90.2, 16245.0], [90.3, 16245.0], [90.4, 16245.0], [90.5, 16245.0], [90.6, 16246.0], [90.7, 16246.0], [90.8, 16246.0], [90.9, 16246.0], [91.0, 16246.0], [91.1, 16246.0], [91.2, 16260.0], [91.3, 16260.0], [91.4, 16260.0], [91.5, 16260.0], [91.6, 16260.0], [91.7, 16260.0], [91.8, 16261.0], [91.9, 16261.0], [92.0, 16261.0], [92.1, 16261.0], [92.2, 16261.0], [92.3, 16261.0], [92.4, 16274.0], [92.5, 16274.0], [92.6, 16274.0], [92.7, 16274.0], [92.8, 16274.0], [92.9, 16274.0], [93.0, 16274.0], [93.1, 16274.0], [93.2, 16274.0], [93.3, 16274.0], [93.4, 16274.0], [93.5, 16274.0], [93.6, 16276.0], [93.7, 16276.0], [93.8, 16276.0], [93.9, 16276.0], [94.0, 16276.0], [94.1, 16276.0], [94.2, 16277.0], [94.3, 16277.0], [94.4, 16277.0], [94.5, 16277.0], [94.6, 16277.0], [94.7, 16277.0], [94.8, 16286.0], [94.9, 16286.0], [95.0, 16286.0], [95.1, 16286.0], [95.2, 16286.0], [95.3, 16290.0], [95.4, 16290.0], [95.5, 16290.0], [95.6, 16290.0], [95.7, 16290.0], [95.8, 16290.0], [95.9, 16300.0], [96.0, 16300.0], [96.1, 16300.0], [96.2, 16300.0], [96.3, 16300.0], [96.4, 16300.0], [96.5, 16304.0], [96.6, 16304.0], [96.7, 16304.0], [96.8, 16304.0], [96.9, 16304.0], [97.0, 16304.0], [97.1, 16354.0], [97.2, 16354.0], [97.3, 16354.0], [97.4, 16354.0], [97.5, 16354.0], [97.6, 16354.0], [97.7, 16392.0], [97.8, 16392.0], [97.9, 16392.0], [98.0, 16392.0], [98.1, 16392.0], [98.2, 16392.0], [98.3, 16395.0], [98.4, 16395.0], [98.5, 16395.0], [98.6, 16395.0], [98.7, 16395.0], [98.8, 16395.0], [98.9, 16468.0], [99.0, 16468.0], [99.1, 16468.0], [99.2, 16468.0], [99.3, 16468.0], [99.4, 16468.0], [99.5, 21015.0], [99.6, 21015.0], [99.7, 21015.0], [99.8, 21015.0], [99.9, 21015.0], [100.0, 21015.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 1200.0, "maxY": 12.0, "series": [{"data": [[1200.0, 10.0], [1400.0, 1.0], [1500.0, 1.0], [1600.0, 1.0], [1700.0, 1.0], [1800.0, 2.0], [2000.0, 3.0], [2100.0, 1.0], [2300.0, 1.0], [2200.0, 1.0], [2400.0, 1.0], [2500.0, 2.0], [2800.0, 1.0], [3000.0, 1.0], [3100.0, 3.0], [3200.0, 1.0], [3600.0, 2.0], [4000.0, 4.0], [4300.0, 2.0], [4600.0, 3.0], [4500.0, 1.0], [4400.0, 1.0], [4800.0, 3.0], [4700.0, 2.0], [5000.0, 2.0], [4900.0, 3.0], [5100.0, 1.0], [5300.0, 3.0], [5200.0, 2.0], [5500.0, 1.0], [5400.0, 3.0], [5600.0, 3.0], [5800.0, 1.0], [5700.0, 2.0], [5900.0, 6.0], [6100.0, 2.0], [6000.0, 2.0], [6200.0, 3.0], [6300.0, 3.0], [6600.0, 2.0], [6400.0, 2.0], [6500.0, 1.0], [6900.0, 7.0], [6800.0, 5.0], [6700.0, 1.0], [7000.0, 7.0], [7100.0, 3.0], [7200.0, 2.0], [7300.0, 9.0], [7400.0, 5.0], [7500.0, 4.0], [7600.0, 8.0], [7700.0, 4.0], [8000.0, 3.0], [8200.0, 1.0], [16200.0, 12.0], [16300.0, 5.0], [16100.0, 1.0], [16400.0, 1.0], [21000.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 21000.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 158.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 11.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 158.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 78.6941176470588, "minX": 1.64089134E12, "maxY": 78.6941176470588, "series": [{"data": [[1.64089134E12, 78.6941176470588]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64089134E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 1205.0, "minX": 1.0, "maxY": 21015.0, "series": [{"data": [[2.0, 16166.0], [3.0, 16468.0], [4.0, 16395.0], [5.0, 16392.0], [6.0, 16290.0], [7.0, 16354.0], [8.0, 16300.0], [9.0, 16277.0], [10.0, 16276.0], [11.0, 16260.0], [12.0, 16274.0], [13.0, 16274.0], [14.0, 16261.0], [15.0, 16226.0], [16.0, 16304.0], [17.0, 16243.0], [18.0, 16245.0], [19.0, 16286.0], [20.0, 16246.0], [21.0, 4818.0], [22.0, 1240.0], [23.0, 1241.0], [24.0, 1227.0], [25.0, 1241.0], [26.0, 1243.0], [27.0, 1222.0], [28.0, 1208.0], [29.0, 1247.0], [30.0, 1205.0], [31.0, 1223.0], [33.0, 5938.0], [32.0, 5907.0], [35.0, 5960.0], [34.0, 6096.0], [37.0, 5761.0], [36.0, 6098.0], [39.0, 7240.0], [38.0, 5945.0], [40.0, 6134.0], [43.0, 6123.0], [42.0, 5166.5], [45.0, 3658.0], [44.0, 5787.0], [47.0, 3112.0], [46.0, 3207.0], [49.0, 3644.0], [48.0, 2810.0], [51.0, 4076.0], [50.0, 3193.0], [53.0, 4312.0], [52.0, 8218.0], [54.0, 4680.0], [57.0, 4059.0], [56.0, 4554.0], [59.0, 4514.0], [58.0, 4368.0], [61.0, 4994.0], [60.0, 4045.0], [63.0, 5203.0], [62.0, 4754.0], [67.0, 4940.0], [66.0, 4729.0], [65.0, 4638.0], [64.0, 5053.0], [71.0, 5254.0], [70.0, 4811.0], [69.0, 5118.0], [75.0, 5026.0], [74.0, 4907.0], [73.0, 5234.0], [79.0, 8017.0], [78.0, 8042.0], [77.0, 5460.0], [76.0, 5303.0], [83.0, 7743.0], [82.0, 5955.0], [81.0, 7107.5], [80.0, 3107.0], [87.0, 6399.0], [86.0, 6911.0], [85.0, 7645.0], [84.0, 7737.0], [91.0, 5656.0], [90.0, 7742.0], [89.0, 6555.0], [88.0, 7694.0], [95.0, 5886.0], [94.0, 6451.0], [93.0, 6327.0], [92.0, 6639.0], [99.0, 6707.0], [98.0, 5687.0], [97.0, 5638.0], [96.0, 7735.0], [103.0, 7188.0], [102.0, 5943.0], [101.0, 6271.0], [100.0, 6870.0], [107.0, 7482.0], [106.0, 7693.0], [105.0, 7603.0], [104.0, 7179.0], [111.0, 4571.0], [110.0, 5332.5], [109.0, 5088.5], [108.0, 7679.0], [115.0, 6090.25], [114.0, 7243.666666666667], [113.0, 5622.0], [112.0, 5788.333333333333], [117.0, 7130.0], [116.0, 5552.666666666667], [119.0, 7055.333333333333], [118.0, 6632.5], [123.0, 1863.0], [122.0, 7025.0], [120.0, 7178.5], [121.0, 6634.0], [127.0, 5371.0], [126.0, 6869.0], [125.0, 5525.0], [124.0, 7038.0], [135.0, 6974.0], [133.0, 2360.0], [129.0, 2052.0], [140.0, 4153.555555555556], [136.0, 7067.0], [1.0, 21015.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[78.6941176470588, 6748.60588235294]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 140.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 360.53333333333336, "minX": 1.64089134E12, "maxY": 1532.35, "series": [{"data": [[1.64089134E12, 1532.35]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.64089134E12, 360.53333333333336]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64089134E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 6748.60588235294, "minX": 1.64089134E12, "maxY": 6748.60588235294, "series": [{"data": [[1.64089134E12, 6748.60588235294]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.64089134E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 6624.876470588236, "minX": 1.64089134E12, "maxY": 6624.876470588236, "series": [{"data": [[1.64089134E12, 6624.876470588236]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.64089134E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 6403.382352941178, "minX": 1.64089134E12, "maxY": 6403.382352941178, "series": [{"data": [[1.64089134E12, 6403.382352941178]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.64089134E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 1205.0, "minX": 1.64089134E12, "maxY": 16468.0, "series": [{"data": [[1.64089134E12, 16468.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.64089134E12, 16243.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.64089134E12, 16416.9]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.64089134E12, 16281.5]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.64089134E12, 1205.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.64089134E12, 6327.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64089134E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 4704.5, "minX": 1.0, "maxY": 21015.0, "series": [{"data": [[67.0, 7273.0], [19.0, 16276.0], [54.0, 4704.5], [29.0, 5525.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 21015.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 67.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 16276.0, "series": [{"data": [[67.0, 7272.0], [19.0, 16276.0], [54.0, 4704.5], [29.0, 5525.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 67.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 2.8333333333333335, "minX": 1.64089134E12, "maxY": 2.8333333333333335, "series": [{"data": [[1.64089134E12, 2.8333333333333335]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64089134E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.64089134E12, "maxY": 2.816666666666667, "series": [{"data": [[1.64089134E12, 2.816666666666667]], "isOverall": false, "label": "302", "isController": false}, {"data": [[1.64089134E12, 0.016666666666666666]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.conn.HttpHostConnectException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64089134E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.64089134E12, "maxY": 2.816666666666667, "series": [{"data": [[1.64089134E12, 2.816666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.64089134E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.64089134E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.64089134E12, "maxY": 2.816666666666667, "series": [{"data": [[1.64089134E12, 2.816666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.64089134E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.64089134E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}


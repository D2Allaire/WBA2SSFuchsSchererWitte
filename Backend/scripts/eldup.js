var fs = require('fs');

var movies = ["tt1369647","tt0938666","tt0110527","tt0319343","tt3003470","tt2355762","tt0405615","tt0105606","tt1544572","tt0457939","tt3595848","tt0137201","tt0309372","tt1708658","tt0338348","tt1910501","tt1431115","tt1572008","tt0385567","tt0304669","tt2446980","tt2325491","tt1446201","tt1125873","tt2543818","tt2112127","tt2444354","tt3341268","tt3101386","tt1790621","tt2415496","tt1579306","tt1807892","tt3169000","tt0111070","tt0328880","tt0497025","tt0089961","tt4180032","tt2838678","tt3579250","tt3911058","tt1895321","tt2417134","tt1598822","tt2479066","tt0999872","tt1699746","tt0383534","tt2665200","tt4843046","tt2362991","tt2414212","tt0950740","tt3889642","tt3131456","tt1068284","tt3118746","tt0846114","tt1327788","tt2256703","tt0330152","tt3214240","tt2964654","tt0383278","tt0480844","tt2994382","tt2374486","tt0381942","tt1893218","tt0772185","tt3289944","tt4767950","tt2415112","tt5031014","tt2622122","tt3946792","tt0783494","tt2460976","tt4766018","tt1720276","tt5056034","tt0290321","tt0080532","tt0226418","tt5156770","tt3626180","tt0329737","tt1083992","tt2228450","tt0038650","tt0095016","tt0085334","tt0044008","tt0058536","tt0097958","tt0039628","tt0099487","tt0099785","tt0307987","tt0086465","tt0096061","tt0424205","tt0107688","tt0033045","tt0338434","tt0059026","tt0314331","tt0111070","tt0060345","tt0039502","tt0087363","tt0072424","tt3530002","tt0093409","tt3850590","tt0110955","tt0218967","tt0098115","tt0066327","tt0103776","tt0114924","tt0039190","tt0084701","tt0047673","tt0071222","tt0063230","tt0032981","tt0068720","tt0897387","tt0240890","tt1150947","tt0993789","tt0116705","tt0252028","tt0497025","tt0772176","tt0762121","tt1702433","tt0433400","tt1714827","tt0037595","tt0041473","tt0388419","tt5133572","tt1430607","tt3043594","tt0089731","tt0032247","tt0043733","tt0783494","tt0111477","tt1242447","tt0064349","tt0110538","tt1268799","tt1846442","tt1151915","tt0293815","tt3004544","tt0790604","tt2374486","tt0385567","tt0498361","tt0184858","tt0369436","tt1462901","tt1327788","tt3703148","tt3801438","tt1068284","tt0226418","tt0330152","tt0950740","tt1663628","tt2994382","tt0101301","tt0256466","tt0271263","tt0141109","tt0486583","tt0251382","tt0155753"];

var uniqueArray = [];
uniqueArray = movies.filter(function(item, pos, self) {
    return self.indexOf(item) == pos;
});

fs.writeFile('../libs/christmas.json', JSON.stringify(uniqueArray), function(err) {
            if (err) throw err;
});
console.log(movies.length);
console.log(uniqueArray.length);
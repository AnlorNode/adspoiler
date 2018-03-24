'use strict';
var fs = require('fs');
const ccxt = require('ccxt');
    async function min(err, calback) {
        let items = fs.readdirSync("./node_modules/ccxt/js")
        for (let i = 0; i < items.length; i++) {
            let st = items[i],
                obj={},
                sl=st.slice(0, st.length - 3);
            if (/\.js$/gmi.test(st)) {
                try { 
                    obj[sl]=await new ccxt[sl]().loadMarkets()
                    calback(err,obj);
                } catch (er) { 
                    console.error(sl); 
                }
            }
        }     
        calback(true);
    };
module.exports = { min }
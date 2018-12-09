import toNumber from"@foldr/to-number";var ceil=Math.ceil;export default function chunk(a,b){var d=a.length;if(!d)return[];var f=0|(null!=b?toNumber(b)||0:1);if(0>=f)return[];var g=0,h=0,j=0,k=Array(ceil(d/f));k[0]=Array(d<f?d:f);while(g<d){k[h][j++]=a[g++];if(j>f-1&&g!==d){k[++h]=Array(d-g<f?d-g:f);j=0}}return k}
//# sourceMappingURL=index.js.map

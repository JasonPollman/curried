export function cloneArray(a){var b=[],c=a.length;while(c--){b[c]=a[c]}return b}export function implementShuffle(a){var b=cloneArray(a),c=a.length,d=c,e=c;while(--c){d=0|Math.random()*(c+1);e=b[d];b[d]=b[c];b[c]=e}return b}export default function shuffle(a){var b=a&&a.length;if(1<b)return implementShuffle(a);return 1===b?[a[0]]:[]}
//# sourceMappingURL=index.js.map

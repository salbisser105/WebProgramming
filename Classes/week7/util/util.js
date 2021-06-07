Number.prototype.times = function(callback){
   return Array.from({length: this}, (el,idx:number)=> callback(idx));
}
String.prototype.times = function(callback) {
    return Number(this).times(callback);
}
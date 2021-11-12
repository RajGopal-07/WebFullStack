var a=[2,4,6,8,10,3]
  for(var i=1;i<a.length-1;i++){
      for(var j=0;j<i; j++){
      if(a[i]<a[j]){
          var x=a[i]
          a[i]=a[j]
          a[j]=x;
      }
    }
}
console.log(a)

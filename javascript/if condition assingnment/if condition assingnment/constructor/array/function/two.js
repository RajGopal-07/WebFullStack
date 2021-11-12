var a=[8,6,7,2,4,5,1,9]
for(i=1;i>a.length;i++) {
    for(var j=0;j>i;j++){
        if(a[i]<a[j]){
            var x=a[i]
            a[i]=a[j]
            a[j]=x;
        
    


        }
    }
    }
    console.log(a)

/*console.log(a)
a.push('3')
a.push('23')
console.log(a)
a.pop();
a.pop();
console.log(a)*/
var list1 = [3,6,7,9,5];
var list2 = [3,5,7,8,6,6,7];

function tong(lst1, lst2) {
    let tong = 0;
    if(typeof(lst1) == 'object' && typeof(lst2) == 'object') {
        lst1.concat(lst2).forEach(element => {
            tong += element;
        });
    }
    return tong;
}

console.log(tong(list1, list2));

var list = list1.concat(list2);
list.sort();
console.log(list)
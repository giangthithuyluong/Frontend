// Bai 1
console.log(8 + "10" + "11" - "12" + "13" + "14" + 10);
// 81011 - 12 = 80999 -> 80999131410
console.log("1" + "2" + 3 - 4  + 5 * "6" + "7" + "8" + "9" + 10 * 0);
// 123 - 4 = 119 + 5*6 = 149 -> 1497890 

// Bai 2
{
    let x = 2;
    let a = 8 + x++ + ++x - --x + x++ + 7;
    // 8 + 2 + 4 - 3 + 3 + 7 = 21 : x = 4
    let b = 5 + ++x + ++x + --x - x-- - ++x  + 10;
    // 5 + 5 + 6 + 5 - 5 - 5 + 10 = 21 : x = 5
    let c = 1 + x-- + --x - ++x + --x - 11;
    // 1 + 5 + 3 - 4 + 3 - 11 = -3 : x = 3
    console.log(`${x} ${a} ${b} ${c}`);
}

// Bai 3
{
    let x = 5;
    let a = 5 + x++ + 10;
    // 5+5+10 = 20 : x = 6
    let b = 5 + ++x +10;
    // 5+7+10 = 22 : x = 7
    let c = 5 + x-- + 10;
    // 5+7+10 = 22 : x = 6
    let d = 5 + --x +10;
    // 5+5+10 = 20 : x = 5
    console.log(`${x} ${a} ${b} ${c} ${d}`);   
}

// Bai 4
{
    let array = [1,6,8,7,6,9];
    console.log(array.length);
    console.log(array[0] + " " + array[array.length-1]);
    array.push(5);
    array[0] = 10;
    array[array.length-1] = 10;
}

// Bai 5
{
    let a = 10; let b = a++; let  c = ++b; let d = --c; 
    console.log(a); // 11
    console.log(b); // 10 -> 11
    console.log(c); // 11 -> 10
    console.log(d); // 10
}

// Bai 9 
{
    let array = [3,5,4,9,8,1,10];
    console.log(array[0]+array[array.length-1]);
    array.push(20);
    console.log(array[0]+array[array.length-1]);
}


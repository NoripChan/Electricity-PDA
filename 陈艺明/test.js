sleep(2000);

let readRilePath = files.cwd() + "/" + "data.txt", writedFilePath = files.cwd() + "/" + "data.txt";
let sericalNo;
let boxerNum ;
let item = "   ", arr = [], arrData = [];
console.log(readRilePath);
console.log(files.isFile(readRilePath));
let file = open(readRilePath, "r", "utf-8");

do {
    item = file.readline();

    if (item !== null) {
        item = item.trim();
        arr = item.split(/\s+/)
        console.log(item,arr);
        arrData.push(arr[0],arr[1]);

    };

} while (item);
console.log(arrData);
file.close();

file = files.open(writedFilePath,"w","utf-8");
console.log(files.isFile(readRilePath));
console.log(arrData.length);
for (let i = 0; i < arrData.length / 2; i++) {
    file.writeline(arrData[i * 2] + "     " + arrData[i * 2 + 1] )

};
file.close ();






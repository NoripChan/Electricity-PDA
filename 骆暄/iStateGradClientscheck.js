const dataArr = [ "5701058770", "2575201", "5701058772", "2575201", "3105363461", "2634202", "3105363591", "2634101", "3105363735", "2634401", "3105362820", "2634101", "3105363139", "2634102", "3105363155", "2634102",
    "3105362846", "2634301", "3105362918", "2634301", "3105363810", "2634501"];

console.show();

for (let i = 0; i < dataArr.length / 2; i++) {
    let sericalNo = dataArr[i * 2];
    let boxerNum = dataArr[i * 2 + 1];
    let intervalTime = Math.ceil(Math.random() * 10) * 2000 + 5000;


    sleep(5000);
    text("新增").click();


    sleep(3000);
    text("户号").click();
    sleep(3000);
    className("android.widget.EditText").depth(16).findOne().setText(sericalNo);
    sleep(7000);
    className("android.widget.Button").depth(14).indexInParent(1).findOne().click();
    sleep(3000);
    text("立即查询").click();
    sleep(8000);
    text("生成普查工单").click();
    sleep(2000);
    text("确定").click();
    sleep(14000);
    if (text("生成普查工单").exists()) {
        console.log("服务器反映异常或者存在普查工单重复提交现象，请重启APP!");
        sleep(4000);
        exit();
    };




    sleep(5000);
    className("android.view.View").depth(17).findOne().click();
    console.log("className(android.view.View).depth(17).findOne().click()")

    sleep(5000);
    text("保存").click();


    sleep(5000);
    while (!text("经度 定位").boundsInside(0, 0, device.width, device.height / 5 * 4).exists()) {
        swipe(450, 1500, 450, 500, 500);
        sleep(2000);
    };
    sleep(7000);
    text("经度 定位").click();
    sleep(5000);
    text("保存").click();

    sleep(2000);
    text("电源").click();
    sleep(2000);
    text("供电电源信息").click();
    sleep(2000);
    while (!className("android.widget.Button").depth(26).indexInParent(4).boundsInside(0, 0, device.width, device.height / 4 * 3).exists()) {
        swipe(450, 1000, 450, 500, 500);
        sleep(2000);
    };
    sleep(2000);
    className("android.widget.Button").depth(26).indexInParent(4).findOne().click();
    sleep(2000);
    className("android.widget.EditText").depth(13).indexInParent(0).findOne().setText(boxerNum);
    sleep(2000);
    text("确定").click();
    sleep(2000);
    className("android.widget.Button").depth(26).indexInParent(7).findOne().click();
    console.log(device.width, device.height);

    sleep(4000);
    className("android.widget.Button").depth(11).indexInParent(21).click();
    while (!className("android.widget.Button").depth(26).indexInParent(9).boundsInside(0, 0, device.width, device.height / 10 * 9).exists()) {
        swipe(450, 1000, 450, 500, 500);
        sleep(2000);
    };
    className("android.widget.Button").depth(26).indexInParent(9).findOne().click();
    sleep(2000)
    text("低压客户开关保护(客户侧)").click();
    sleep(2000)
    className("android.widget.Button").depth(26).indexInParent(10).findOne().click();
    sleep(2000)
    text("其他").click();
    sleep(2000);
    text("保存").click();

    sleep(5000);
    text("提交").click();
    sleep(Math.ceil(intervalTime / 2));
    text("提交").click();
    sleep(Math.ceil(intervalTime / 2));
    console.log(intervalTime, text("提交").exists(), sericalNo);



}


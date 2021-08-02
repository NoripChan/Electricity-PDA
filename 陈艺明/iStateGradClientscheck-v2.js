





const dataArr = [ "7671680018", "24942-02", "5706030330", "2496102", "5706030331", "2496102", "5706030332", "2496102", "5706030333", "2496102", "7671680089", "24961-03", "5706028739", "2485103", "5706028740", "2485001", "5706028741", "2486102", "5706028801", "2486302", "5706028802", "2486302", "5706028803", "2486302", "5706028809", "2485001", "5706028810", "2485001", "5706028811", "2485001", "5706028812", "2485001", "5706028813", "2485001", "5706028814", "2485001", "5706028804", "2486302", "5706028805", "2486302", "5706028806", "2486302", "5706028807", "2486302", "5706028808", "2486302", "5706030873", "24864-02", "7671657250", "24851-03", "7671636675", "24864-01", "7671671658", "24851-03", "7671671661", "24852-01", "7671671674", "24861-02", "7671671687", "24862-02"];

console.show();

for (let i = 0; i < dataArr.length / 2; i++) {
    let sericalNo = dataArr[i * 2];
    let boxerNum = dataArr[i * 2 + 1];
    let intervalTime = Math.ceil(Math.random() * 10) * 2000 + 5000;


    sleep(5000);
    text("新增").click();


    sleep(3000);
    text("户号 ").click();
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
    className("android.widget.Button").depth(11).indexInParent(12).click();
    sleep(2000);
    text("保存").click();

    sleep(5000);
    text("提交").click();
    sleep(Math.ceil(intervalTime / 2));
    do {
        text("提交").click();
        sleep(Math.ceil(intervalTime / 2));
    } while (text("提交").exists());

    sleep(Math.ceil(intervalTime / 2));
    console.log(intervalTime, text("提交").exists(), sericalNo);

};

console.log("完成！");

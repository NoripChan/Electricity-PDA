const dataArr = ["5706035121", "6141#B04-03/5", "5705007834", "6141#B04-03/4", "5705007822", "6141#B04-02/4", "5705007833", "6141#B04-1-02/5", "5705007801", "6141#B04-1-03-5", "5705007826", "6141#B04-1-03-4", "5705007823", "6141#B04-1-03/6", "7675533462", "6142-C02-01", "5706023270", "6142#A01-02-5", "5705007831", "6141#B02-01/5", "5705007805", "6141#B02-01/4", "7544036612", "6141-A04-01", "5705007452", "6144-B02-2-02", "5705007481", "6144-B02-1-04", "5705007453", "6144-B02-1-05", "5705007444", "6144-B02-1-08", "5705007501", "6144#A03-01/5", "5705007839", "6144-A02-01", "5705007412", "6144-B02-02-4", "5705007475", "6144-B04-02", "7652684682", "6144-B03-01", "5705007462", "6144-B04-05-5", "5705007422", "6144-B04-03-4", "5705007401", "6144-B07-01-5", "5705007455", "6144-B07-01-4"];


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
        console.show();
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
    while (!text("定位").boundsInside(0, 0, device.width, device.height / 5 * 4).exists()) {
        swipe(450, 1600, 450, 500, 500);
        sleep(2000);
    };
    sleep(2000);
    text("定位").click();
    sleep(5000);
    text("保存").click();

    sleep(2000);
    text("电源").click();
    sleep(2000);
    text("供电电源信息").click();
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
    sleep(2000);
    while (!className("android.widget.Button").depth(11).indexInParent(12).boundsInside(0, 0, device.width, device.height / 20 * 19).exists()) {
        swipe(450, 1200, 450, 500, 500);
        sleep(2000);
    };
    sleep(2000);
    className("android.widget.Button").depth(11).indexInParent(12).click();
    while (!className("android.widget.Button").depth(26).indexInParent(9).boundsInside(0, 0, device.width, device.height / 4 * 3).exists()) {
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
    do {
        text("提交").click();
        sleep(Math.ceil(intervalTime / 2));
    } while (text("提交").exists());
    
    sleep(Math.ceil(intervalTime / 2));
    console.log(intervalTime, text("提交").exists(), sericalNo);

}
console.log ("完成！");



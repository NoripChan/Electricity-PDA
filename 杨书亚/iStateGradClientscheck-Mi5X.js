const dataArr = ["5705007407", "6144-B07-03-5", "5705007497", "6144-B07-03-4", "5706024277", "6144#B03-1-11/4", "5705007459", "6144-B03-1-10", "5705007405", "6144-B03-1-06-4", "7505108851", "6144-B03-1-06-1", "5705007473", "6144-B03-1-03-4", "5705007406", "6144-B03-1-04-6", "5705007485", "6144-A02-03", "5706022664", "6146-A05-02-6", "5705007465", "6146-A04-01", "5705007447", "6146-A02-02", "5705007483", "6146-A02-03", "5705007464", "6146-A05-01", "5705007403", "6146-A06-02", "5705007404", "6146-A07-03", "5705007402", "6146-A08-02", "5705007411", "6146-A08-02", "5705007835", "6146-B03-02", "5706028919", "6146-B02-03-4", "5705007446", "6146-A04-02-6", "5705007461", "6146-A04-02-5", "7528488091", "6146-A04-03-4", "5706035038", "6146-A07-10-4", "5705007437", "6146-A05-06", "5706027145", "6146-A05-04-5", "5705007502", "6146-A02-01", "5705007504", "6146-A01-2-01-4"];


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



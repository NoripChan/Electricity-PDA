
const dataArr = ["5705003895", "6075#A04-05/1", "7554030486", "6075#A03-02-6", "7541430280", "6075#A03-02-5", "5705003938", "6075#A03-02/3", "5705003926", "6075#A04-03/3", "5706025485", "6075#B01-2-01-3", "5705004013", "6079-A02-1-03", "5706021917", "6079-A02-1-06", "5705003773", "6079-A02-1-03", "5705003764", "6079-B02-1-03", "5705003972", "6079-A02-1-07", "5706020761", "6079-A02-1-01", "5705003864", "6079-A02-1-06", "5705003857", "6079-A02-1-05", "5705003976", "6079-A02-1-07", "7646047172", "6076-C01-1-01", "7660316377", "6076-B02-2-01", "5706027227", "6076-C01-1-01", "5705003922", "6076-A02-01", "7549390119", "6076-C03-01", "7571140281", "6076-A03-1-001", "7542841623", "6076-A02-01", "5705003958", "6076#C01-01/3", "5705003950", "6076-C02-02", "5705003941", "6076-C01-3-03", "5705003934", "6076-C03-01", "5705003795", "6076-C01-3-01", "5705003901", "6076-C01-3-01", "5705003870", "6076-C01-1-01", "5705003865", "6076#C01-01/4", "5705003813", "6076-c01-1-01", "5705003777", "6076-A03-1-01", "5705003772", "6076-C01-3-01", "5705003769", "6076-C01-3-02", "5705003767", "6076-A03-03", "5705003752", "6076-A03-02", "5705004045", "6076-A03-03", "5705004028", "6076-B02-1-01", "5705003977", "6076-C02-02", "7641550127", "6071-A01-01", "7629310044", "6071-B01-01", "5705003792", "6071-B03-01", "5705003863", "6071-B04-04", "5705003839", "6071-B02-02", "5705003920", "6071-C02-04", "5705003959", "6071-B03-03", "5705003878", "6071-B03-03", "5705003877", "6071-B03-02", "5705003871", "6071-C02-04", "5705003845", "6071-B01-01", "5705003817", "6071-B02-05", "5705003814", "6071-B03-02", "5706031779", "6071-C01-02", "5706020161", "6071-B01-02", "5705003759", "6071-B02-01", "5705003986", "6071-A01-1-01", "5705003996", "6071-D02-02", "5705003935", "6077#A03-01/1", "7543350933", "6077#B02-07-3", "7543671878", "6077#B04-01-3", "5705003802", "6077#B02-06-5", "5705003793", "6077#B02-02/3", "5705003963", "6077#B02-07-1", "5705003889", "6077#B03-01/1", "5705003884", "6077#B02-05/3", "5705003882", "6077#B02-06-6", "7511726115", "6077#B03-01/2", "5705003779", "6077#B02-03/3", "5705004017", "6077#B04-01/5", "5705004002", "6077#B04-06/4" ];

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
    do {
        text("提交").click();
        sleep(Math.ceil(intervalTime / 2));
    } while (text("提交").exists());

    sleep(Math.ceil(intervalTime / 2));
    console.log(intervalTime, text("提交").exists(), sericalNo);

};

console.log("完成！");

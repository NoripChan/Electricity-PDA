sleep(5000);
text("新增").click();


sleep(2000);
text("户号 ").click();
sleep(3000);
className("android.widget.EditText").depth(16).findOne().setText("5701032109");
sleep(3000);
className("android.widget.Button").depth(14).indexInParent(1).findOne().click();
sleep(2000);
text("立即查询").click();
sleep(5000);
text("生成普查工单").click();
sleep(2000);
text("确定").click();



sleep(5000);
className("android.view.View").depth(17).findOne().click();

sleep(5000);
text("保存").click();


sleep(5000);
while (!text("定位").boundsInside(0, 0, device.width, device.height / 3 * 2).exists()) {
    swipe(450, 1600, 450, 500, 500);
    sleep(2000);
};
sleep(2000);
text("定位").click();
sleep(2000);
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
className("android.widget.EditText").depth(13).indexInParent(0).findOne().setText("23031301");
sleep(2000);
text("确定").click();
sleep(2000);
className("android.widget.Button").depth(26).indexInParent(7).findOne().click();
console.log(device.width, device.height);
sleep(2000);
while (!className("android.widget.Button").depth(11).indexInParent(21).boundsInside(0, 0, device.width, device.height / 20 * 19).exists()) {
    swipe(450, 1200, 450, 500, 500);
    sleep(2000);
};
sleep(2000);
className("android.widget.Button").depth(11).indexInParent(21).click();
console.log(device.width, device.height);
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

sleep(2000);
text("提交").click();
sleep(2000);
text("提交").click();
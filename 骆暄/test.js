while (!text("经度 定位").boundsInside(0, 0, device.width, device.height / 5 * 4).exists()) {
    swipe(450, 1500, 450, 500, 500);
    sleep(2000);
};
sleep(7000);
text("经度 定位").click();
sleep(5000);
text("保存").click();


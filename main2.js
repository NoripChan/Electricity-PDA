const sericalNo ="7611076660";
const boxerNum = "80307-02";


sleep(5000);
text("新增").click();


sleep(5000);
text("用户信息").click();
sleep(3000);
id("et_user_no").setText(sericalNo);
sleep(3000);
id("bt_base_info_search").click();
sleep(3000);
while (!text("用户信息列表").exists()) {
    sleep(3000);
    id("bt_base_info_search").click();
};

sleep(3000);
id("btn_detail").click();


sleep(2000);
while (id("tvLocationValue").findOne().text().length === 1) {

    id("btnLocation").findOne().click();
    sleep(5000);
};

sleep(3000);
text("保存").click();
sleep(3000);
text("数据上传").click();
sleep(8000);
if (text("还有异常信息未整改，是否继续提交？").exists()) {
    text("确定").click();
};
sleep(5000);
if (text("异常原因").exists()) {
    text("提交").click();
};

sleep(3000);
text("现场信息").click();

text("请输入...").click();
sleep(3000);
text("请输入...").setText("0");
sleep(3000);
text("确定").click();

sleep(5000);
id("tv_scenceinfo_power").click();
sleep(2000);
id("tv_ps_cqfjd").click();
sleep(2000);

while (!text("电表出线向受电侧延伸2厘米").exists()) {
    swipe(450, 1600, 450, 500, 500);
};
sleep(1000);
text("电表出线向受电侧延伸2厘米").click();
sleep(2000);
id("tv_ps_running").click();
sleep(2000);
text("其它").click();
sleep(2000);
id("tv_ps_xlcq").click();
sleep(2000);
text("公用线路").click();
sleep(2000);
id("tv_ps_xlyw").click();
sleep(2000);
text("供电企业运维").click();
sleep(4000);
id("tv_ps_jxgh").click();
sleep(3000);
text("请输入...").setText(boxerNum);
sleep(3000);
text("确定").click();
sleep(3000);
text("保存").click();

sleep(3000);
id("tv_scenceinfo_sp_type").click();
sleep(3000);
text("箱式变").click();

sleep(3000);
id("tv_scenceinfo_powercount").click();
sleep(3000);
text("单电源").click();

sleep(3000);
text("保存").click();
sleep(3000);
text("数据上传").click();
sleep(8000);
if (text("还有异常信息未整改，是否继续提交？").exists()) {
    text("确定").click();
};
sleep(5000);
if (text("异常原因").exists()) {
    text("提交").click();
};

sleep(3000);
text("能效调研").click();

sleep(3000);
if (!id("switch_1").select()) id("switch_1").click();
sleep(3000);
if (!id("switch_4").select()) id("switch_4").click();

sleep(3000);
text("保存").click();
sleep(3000);
text("数据上传").click();

sleep(3000);
text("充换电设施").click();
sleep(3000);
text("保存").click();
sleep(3000);
text("数据上传").click();

sleep(3000);
id("tvRight").click();
sleep(2000);
text("取消").click();















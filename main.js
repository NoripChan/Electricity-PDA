const dataArr = [
    "7611085453", "80304-02", "7611075768", "80305-01", "7611090592", "80302-02", "7611075667", "80305-01", "7611071551", "80305-01", "7611070242", "80302-01", "7611092921", "80302-02", "7611096066", "80305-01", "7611070268", "80302-01", "7611076370", "80307-01", "7611088683", "80308-01", "7611090534", "80302-01", "7611069828", "80308-01", "7611096372", "80307-01", "7611070213", "80302-01", "7611070314", "80302-01", "7611068014", "80306-01", "7611092950", "80305-01", "7611088377", "80306-01", "7611076556", "80307-01", "7611075713", "80305-01", "7611076295", "80307-01", "7611067718", "80304-02", "7611070369", "80302-01", "7611098251", "80307-01", "7611098600", "80307-02", "7611098639", "80307-02", "7611098394", "80307-01", "7611092279", "80302-02", "7611092338", "80302-02", "7611079496", "80303-01", "7611178584", "80309-01", "7611173909", "80308-02", "7611173970", "80303-02", "7611174032", "80303-02", "7611231696", "80309-02", "7611126844", "80303-02", "7611079920", "80303-01", "7611079904", "80303-01", "7611176777", "80306-02", "7611128228", "80308-02", "7611128576", "80308-02", "7611107034", "80303-01", "7611106770", "80303-01", "7611106679", "80303-01", "7611155697", "80306-02", "7611159295", "80304-01", "7611152311", "80306-02", "7611157778", "80304-01", "7611128505", "80306-01", "7611128417", "80303-02", "7611173446", "80303-02", "7611126701", "80308-01", "7611173707", "80303-02", "7611153112", "80308-02", "7611116830", "80308-02", "7611159455", "80309-01", "7611178324", "80304-01", "7611080722", "80306-01", "7611257595", "80309-01", "7611259940", "80306-03", "7611126596", "80308-01", "7611178294", "80306-03", "7611128606", "80303-02", "7611260700", "80306-03", "7611107076", "80303-01", "7611159934", "80309-01", "7611117455", "80306-02", "7611113293", "80308-01", "7611176663", "80309-01", "7611124691", "80308-01", "7611152294", "80306-02", "7611106914", "80303-01", "7611108138", "80306-01", "7611117253", "80308-02", "7611117312", "80303-02", "7611080650", "80306-01", "7611080461", "80306-01", "7611231162", "80306-03", "7611231625", "80309-02", "7611178526", "80306-03", "7611117006", "80306-01", "7611117556", "80306-02", "7611157811", "80306-02", "7611259995", "80309-01", "7611261022", "80309-02", "7611116058", "80308-01", "7611152962", "80306-02", "7611152816", "80303-02", "7611260188", "80306-03", "7611257465", "80306-03", "7611174146", "80306-02", "7611178311", "80309-01", "7611178571", "80306-03", "7611259924", "80306-03", "7611116700", "80306-01", "7611107412", "80306-01", "7611259386", "80304-01", "7611230879", "80309-02", "7611128912", "80308-02", "7611128996", "80308-02", "7611230651", "80309-01", "7611230273", "80309-01", "7611176386", "80306-02", "7611152861", "80303-02", "7611155642", "80304-01", "7611106842", "80303-01", "7611107340", "80306-01", "7611257436", "80304-01", "7611126802", "80303-02", "7611126903", "80306-01", "7611159758", "80304-01", "7611113525", "80308-01", "7611260827", "80309-02", "7611156443", "80309-01", "7611157912", "80309-01", "7611116944", "80303-02", "7611230837", "80306-03", "7611175514", "80308-02", "7611079962", "80303-01", "7611156502", "80304-01", "7611178223", "80304-01", "7611178236", "80306-03", "7611124587", "80308-01", "7611080012", "80303-01", "7611152685", "80308-02", "7611257511", "80306-03", "7611260159", "80304-02", "7611259357", "80304-01", "7611157882", "80309-01", "7611116016", "80308-01", "7611116120", "80308-01", "7611174423", "80306-02", "7611174090", "80306-02", "7611126554", "80308-01", "7611152757", "80308-02", "7611155668", "80304-01", "7611152395", "80308-02", "7611230912", "80309-02", "7611260117", "80304-02", "7611257351", "80304-01", "7650420657", "80301-01", "7650336174", "80300-02", "7650336086", "80301-02", "7650418416", "80300-01", "7650420732", "80291-01", "7650418386", "80290-01", "7658634247", "80296-01", "7611286742", "80295-01", "7611286700", "80295-01", "7611272547", "80292-01", "7611286827", "80295-02", "7611286452", "80292-01", "7611286465", "80292-01", "7611230996", "80293-01", "7611272143", "80293-01", "7611286915", "80295-02", "7611286582", "80292-02", "7611286755", "80295-01", "7611278776", "80295-02", "7611278415", "80292-02", "7611272097", "80296-01", "7611286553", "80292-02", "7611272462", "80296-01", "7611286784", "80295-01", "7611278327", "80292-01", "7611298882", "80293-01", "7611341414", "80294-01", "7611366613", "80297-01", "7611401354", "80296-03", "7611401439", "80296-03", "7611343061", "80293-03", "7611345780", "80294-01", "7611409358", "80296-02", "7611409518", "80297-02", "7611385582", "80297-01", "7611401686", "80297-01", "7611342374", "80293-02", "7611355286", "80296-02", "7611300853", "80293-01", "7611300909", "80296-01", "7611401325", "80296-02", "7611386383", "80297-02", "7611401543", "80297-01", "7611409547", "80297-02", "7611317985", "80293-03", "7611367052", "80297-01", "7611318089", "80294-01", "7611300781", "80293-01", "7611341472", "80294-02", "7611354384", "80293-02", "7611342866", "80293-03", "7611321571", "80296-03", "7611354980", "80294-02", "7611368619", "80296-02", "7611342446", "80293-02", "7611341368", "80294-01", "7611402070", "80297-02", "7611409374", "80296-02", "7611401455", "80296-03", "7611319604", "80296-02", "7611318021", "80293-03", "7611409417", "80297-01", "7611317871", "80293-02", "7611401224", "80296-02", "7611402067", "80297-02", "7611318210", "80294-02", "7611355459", "80296-02", "7611306095", "80293-01", "7611367371", "80297-02", "7611367775", "80297-02", "7611318249", "80294-02", "7611354560", "80293-02", "7611401501", "80297-01", "7611318050", "80293-03", "7611310896", "80294-01", "7611307375", "80293-02", "7611308163", "80294-02", "7611367179", "80297-01", "7611402100", "80297-02", "7611409459", "80297-01", "7611354906", "80294-01", "7611355417", "80296-02", "7611350210", "80294-02", "7611301032", "80296-01", "7611342475", "80293-02", "7611336883", "80293-03", "7611358038", "80296-03", "7611340365", "80293-03", "7611345878", "80294-01", "7611376005", "80297-01", "7611376438", "80296-03", "7611308219", "80294-02", "7611307056", "80296-01", "7611306545", "80293-01", "7611354818", "80294-01", "7611358067", "80296-03", "7611342589", "80293-03", "7611409488", "80297-01", "7611342521", "80293-02", "7611354603", "80293-03", "7611376311", "80296-02", "7611368563", "80296-02", "7611375855", "80296-03", "7611409361", "80296-02", "7611300970", "80296-01", "7611311873", "80294-01", "7611335196", "80293-03", "7611307418", "80293-02", "7611317754", "80293-02", "7611308990", "80293-03", "7611376513", "80296-03", "7611376483", "80296-03", "7611307551", "80293-03", "7611354850", "80294-01", "7611376425", "80296-03", "7611376584", "80297-02", "7611329807", "80293-02", "7611301087", "80296-01", "7611355475", "80296-03", "7611409433", "80297-01", "7611341212", "80294-01", "7611333813", "80293-02", "7611341241", "80294-01", "7611313169", "80294-02", "7611313202", "80294-02", "7611305438", "80293-01", "7611306024", "80293-01", "7650335966", "80281-01", "7650303446", "80280-01", "7611743845", "80282-01", "7611745795", "80282-01", "7611745955", "80285-02", "7611745711", "80282-01", "7611745753", "80282-01", "7611745809", "80282-01", "7611745896", "80285-01", "7611710351", "80282-01", "7611773095", "80285-02", "7611773284", "80283-01", "7611745740", "80282-01", "7611745838", "80282-01", "7611745854", "80282-02", "7611745971", "80285-02", "7611765625", "80282-01", "7611745997", "80283-01", "7611641107", "80286-03", "7611644702", "80283-03", "7611644728", "80283-03", "7611641585", "80284-01", "7611598113", "80283-01", "7611600458", "80286-02", "7611624335", "80283-03", "7611646014", "80287-01", "7611645981", "80284-01", "7611646229", "80284-02", "7611582970", "80286-02", "7611582417", "80286-01", "7611646157", "80284-02", "7611624250", "80286-03", "7611624322", "80286-03", "7611646128", "80287-02", "7611646069", "80284-02", "7611641673", "80284-02", "7611641758", "80287-02", "7611600865", "80286-02", "7611623622", "80286-02", "7611624478", "80283-03", "7611644496", "80286-03", "7611646317", "80287-02", "7611745926", "80285-01", "7611598517", "80283-01", "7611637771", "80283-03", "7611637944", "80286-03", "7611644656", "80286-03", "7611644669", "80286-03", "7611580479", "80283-01", "7611582491", "80286-01", "7611582576", "80283-02", "7611639663", "80286-03", "7611646131", "80284-02", "7611598171", "80283-01", "7611598184", "80283-01", "7611600432", "80286-02", "7611645910", "80287-01", "7611645473", "80286-03", "7611641530", "80284-01", "7611600780", "80283-02", "7611639621", "80286-03", "7611637540", "80286-02", "7611582521", "80286-01", "7611641501", "80284-01", "7611637511", "80283-02", "7611641572", "80287-01", "7611646290", "80287-02", "7611646085", "80287-02", "7611645923", "80287-01", "7611646098", "80287-02", "7611646216", "80287-02", "7611644597", "80283-03", "7611646144", "80284-02", "7611646258", "80284-02", "7611646287", "80287-02", "7611582619", "80283-02", "7611582648", "80286-02", "7611646030", "80284-02", "7611641240", "80284-01", "7611641253", "80284-01", "7611641309", "80287-01", "7611641295", "80287-01", "7611641628", "80284-01", "7611641631", "80287-01", "7611580352", "80283-01", "7611582547", "80283-02", "7611645949", "80284-01", "7611578397", "80283-01", "7611645877", "80284-01", "7611645893", "80287-01", "7611583104", "80283-02", "7611583234", "80286-02", "7611644672", "80283-03", "7611645503", "80286-03", "7611580323", "80283-01", "7611580886", "80286-01", "7611582433", "80286-01", "7611646186", "80287-02", "7611641556", "80287-01", "7611614943", "80283-02", "7611624393", "80283-03", "7611646274", "80284-02", "7611641442", "80287-01", "7611600298", "80286-01", "7611765973", "80285-01", "7611746091", "80286-01", "7611773255", "80286-01", "7611776502", "80285-02", "7611768549", "80285-01", "7611598155", "80283-01", "7611644555", "80283-03", "7611583188", "80286-02", "7611644614",
    "80283-03", "7611601220", "80283-02", "7611601246", "80283-02", "7611637726", "80283-03", "7611600331",
    "80286-01", "7611623664", "80286-02", "7611623677", "80283-03", "7611645457", "80286-03", "7611598953", "80283-01", "7611602366", "80286-02", "7611602409", "80283-02", "7611600487", "80283-02", "7611645822", "80284-01", "7611646027", "80287-01", "7611645936", "80284-01", "7611645965", "80287-01", "7611645545", "80284-01", "7611600748", "80283-02", "7611600881", "80286-02", "7611599028", "80286-01"
];

for (let i = 0; i < dataArr.length / 2; i++) {
    let sericalNo = dataArr[i * 2];
    let boxerNum = dataArr[i * 2 + 1];


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
    text("确认").click();

}







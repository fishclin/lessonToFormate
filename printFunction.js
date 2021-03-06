
var socket = io();

    $(document).ready(function() 
    {
        //日期時間，設定為現在時間
        setTimeNow();

        var elemSmartCount = document.getElementById("smartCountTime-check");//智慧計算checkbox

        //當智慧計算checkbox勾選變動時
        $(elemSmartCount).change(function(){
          if(elemSmartCount.checked)
          {
              //alert("變動了，變成被勾選");
              document.getElementById("day1").disabled = true;
              document.getElementById("day2").disabled = true;
          }
          else
          {
              //alert("變動了，變不勾選");
              document.getElementById("day1").disabled = false;
              document.getElementById("day2").disabled = false;
          }
        });

        //當預備時間欄位:年月日時分欄位有被更動，則重新計算
        $('#year1').change(function(){
          if(elemSmartCount.checked)
            setDayByInput1();
        });

        $('#month1').change(function(){
          if(elemSmartCount.checked)
            setDayByInput1();
        });

        $('#date1').change(function(){
          if(elemSmartCount.checked)
            setDayByInput1();
        });
        
        $('#hr1').change(function(){
          if(elemSmartCount.checked)
            setDayByInput1();
        });

        $('#min1').change(function(){
          if(elemSmartCount.checked)
            setDayByInput1();
        });

        //當上課時間欄位:年月日時分欄位有被更動，則重新計算
        $('#year2').change(function(){
          if(elemSmartCount.checked)
            setDayByInput2();
        });

        $('#month2').change(function(){
          if(elemSmartCount.checked)
            setDayByInput2();
        });

        $('#date2').change(function(){
          if(elemSmartCount.checked)
            setDayByInput2();
        });

        $('#hr2').change(function(){
          if(elemSmartCount.checked)
            setDayByInput2();
        });

        $('#min2').change(function(){
          if(elemSmartCount.checked)
            setDayByInput2();
        });
        

        $('#place-note1').change(function(){
          if( $(this).val() != "")//若不等於空的
            document.getElementById('place-check-5').checked = true;
        });
        
        $('#place-note2').change(function(){
          if($(this).val() !="")//若不等於空的
            document.getElementById('place-check-6').checked = true;
        });
        
        $('#place-prepare-note1').change(function(){
          if($(this).val() !="")//若不等於空的
            document.getElementById('place-prepare-check-8').checked = true;
        });

        $('#class-prepare-note1').change(function(){
          if($(this).val() !="")//若不等於空的
            document.getElementById('class-prepare-check-1').checked = true;
        });

        $('#class-prepare-note2').change(function(){
          if($(this).val() !="")//若不等於空的
            document.getElementById('class-prepare-check-2').checked = true;
        });

        $('#soulBody-prepare-note1').change(function(){
          if($(this).val() !="")//若不等於空的
            document.getElementById('soulBody-prepare-check-4').checked = true;
        });
        
    });

    function setDayByInput1()
    {//透過預備時間，設定其他項目(星期幾、上課時間)

        var year = document.getElementById("year1").value; //年
        var month = document.getElementById("month1").value; //月
        var date = document.getElementById("date1").value; //日     
        var hr = document.getElementById("hr1").value; //時  
        var min = document.getElementById("min1").value; //分   

        //year, month, date, hour, minute, second, and millisecond, in that order:
        var countDate = new Date( year, month-1, date, hr, min, 0, 0);
        //建造Day物件(從使用者邏輯，轉換成電腦邏輯，一月份要變為0)

        document.getElementById("day1").value = getDayChinese(countDate.getDay());//計算預備的中文星期

        countDate.setMinutes(countDate.getMinutes()+30); //設定上課時間為30min之後

        document.getElementById("year2").value = countDate.getFullYear(); //設定上課年
        document.getElementById("month2").value = countDate.getMonth()+1; //設定上課月(返回使用者邏輯，0代表一月，要+1)
        document.getElementById("date2").value = countDate.getDate(); //設定上課日
        document.getElementById("hr2").value = countDate.getHours(); //設定上課時
        document.getElementById("min2").value = countDate.getMinutes(); //設定上課分
        document.getElementById("day2").value = getDayChinese(countDate.getDay()); //設定上課星期
    }

    function setDayByInput2()
    {//透過上課時間，設定其他項目(星期幾、上課時間)
        var year = document.getElementById("year2").value; //年
        var month = document.getElementById("month2").value; //月
        var date = document.getElementById("date2").value; //日     
        var hr = document.getElementById("hr2").value; //時  
        var min = document.getElementById("min2").value; //分   

        //year, month, date, hour, minute, second, and millisecond, in that order:
        var countDate = new Date( year, month-1, date, hr, min, 0, 0);
        //建造Day物件(從使用者邏輯，轉換成電腦邏輯，一月份要變為0)

        document.getElementById("day2").value = getDayChinese(countDate.getDay());//計算預備的中文星期

        countDate.setMinutes(countDate.getMinutes()-30); //設定上課時間為30min之後

        document.getElementById("year1").value = countDate.getFullYear(); //設定上課年
        document.getElementById("month1").value = countDate.getMonth()+1; //設定上課月(返回使用者邏輯，0代表一月，要+1)
        document.getElementById("date1").value = countDate.getDate(); //設定上課日
        document.getElementById("hr1").value = countDate.getHours(); //設定上課時
        document.getElementById("min1").value = countDate.getMinutes(); //設定上課分
        document.getElementById("day1").value = getDayChinese(countDate.getDay()); //設定上課星期

    }

    function setTimeNow()
    {//設定現在時間
        var d1 = new Date();
        var d2 = new Date();

        // var year = ; //年
        // var month = d.getMonth() + 1; //月
        // var date = d.getDate(); //日
        // var day = d.getDay(); //星期
        // var hr = d.getHours(); //時
        // var min = d.getMinutes(); //分
        //day = getDayChinese(day);



        document.getElementById("year1").value = d1.getFullYear();
        document.getElementById("month1").value = d1.getMonth()+1;
        document.getElementById("date1").value = d1.getDate();

        //alert("設定時間");

        document.getElementById("day1").value = getDayChinese( d1.getDay() );
        document.getElementById("hr1").value = d1.getHours();
        document.getElementById("min1").value = d1.getMinutes();


        d2.setMinutes(d2.getMinutes()+30); //設定上課時間為30min之後

        document.getElementById("year2").value = d2.getFullYear();
        document.getElementById("month2").value = d2.getMonth()+1;
        document.getElementById("date2").value = d2.getDate();
        document.getElementById("day2").value = getDayChinese( d2.getDay() );
        document.getElementById("hr2").value = d2.getHours();
        document.getElementById("min2").value = d2.getMinutes();

        var elem = document.getElementById("test");
        elem.innerHTML = new Date();
    }

    function getDayChinese(day)
    {//輸入數字，返回中文星期
        switch (day) 
        {
            case 0:
                day = "日";
                break;
            case 1:
                day = "一";
                break;
            case 2:
                day = "二";
                break;
            case 3:
                day = "三";
                break;
            case 4:
                day = "四";
                break;
            case 5:
                day = "五";
                break;
            case 6:
                day = "六";
        }
        return day;
    }

    function send()
    {//按送出按鈕之後

      var year1 = document.getElementById("year1").value;
      var month1 = document.getElementById("month1").value;
      var date1 = document.getElementById("date1").value;
      var day1 = document.getElementById("day1").value;
      var hr1 = document.getElementById("hr1").value;
      var min1 = document.getElementById("min1").value;
      
      var year2 = document.getElementById("year2").value;
      var month2 = document.getElementById("month2").value;
      var date2 = document.getElementById("date2").value;
      var day2 = document.getElementById("day2").value;
      var hr2 = document.getElementById("hr2").value;
      var min2 = document.getElementById("min2").value;
      
      var lessonName = document.getElementById("lessonName").value;//課名
      var studentName = document.getElementById("studentName").value;//學員人名
      var lecturerName = document.getElementById("lecturerName").value;//講師人名
      var prepareName = document.getElementById("prepareName").value;//預備人名
      var contactName = document.getElementById("contactName").value;//窗口人名

      var phone = document.getElementById("phone").value;//電話
      var lineId = document.getElementById("lineId").value;//LINE ID
      var contactNote = document.getElementById("contact-note").value;//聯絡說明

      var placeNote1 = "";//地點:7F說明
      var placeNote2 = "";//地點:其他說明
      var placePrepareNote1 = "";//場地預備:其他說明
      var classPrepareNote1 = "";//課程預習1:讀經文
      var classPrepareNote2 = "";//課程預習2:其他
      var soulBodyPrepareNote1 = "";//靈肉預備1:其他

      var checkedPlace; //地點勾選 陣列
      var checkedPlacePrepare; //場地預備項目 陣列
      var checkedClassPrepare; //課前預習 陣列
      var checkedSoulBodyPrepare; //靈肉預備 陣列

      checkedPlace = new Array(); //地點勾選 陣列
      $('input:checkbox:checked[name="placeItem"]').each(function(i) { checkedPlace[i] = this.value; });
      //取得所有打勾地點名     
      if(document.getElementById("place-check-5").checked) //若被選取，則設定文字
        placeNote1 = document.getElementById("place-note1").value; 
      if(document.getElementById("place-check-6").checked) //若被選取，則設定文字
        placeNote2 = document.getElementById("place-note2").value; 

      checkedPlacePrepare = new Array(); //場地預備項目 陣列
      $('input:checkbox:checked[name="placePrepareItem"]').each(function(i) { checkedPlacePrepare[i] = this.value; });
      //取得所有打勾地點名      
      if(document.getElementById("place-prepare-check-8").checked) //若被選取，則設定文字
        placePrepareNote1 = document.getElementById("place-prepare-note1").value; 

      checkedClassPrepare = new Array(); //課前預習 陣列
      $('input:checkbox:checked[name="classPrepareItem"]').each(function(i) { checkedClassPrepare[i] = this.value; });
      //取得所有打勾地點名     
      if(document.getElementById("class-prepare-check-1").checked) //若被選取，則設定文字
        classPrepareNote1 = document.getElementById("class-prepare-note1").value; 
      if(document.getElementById("class-prepare-check-2").checked) //若被選取，則設定文字
        classPrepareNote2 = document.getElementById("class-prepare-note2").value; 

      checkedSoulBodyPrepare = new Array(); //靈肉預備 陣列
      $('input:checkbox:checked[name="soulBodyPrepareItem"]').each(function(i) { checkedSoulBodyPrepare[i] = this.value; });
      //取得所有打勾地點名     
      if(document.getElementById("soulBody-prepare-check-4").checked) //若被選取，則設定文字
        soulBodyPrepareNote1 = document.getElementById("soulBody-prepare-note1").value; 

      // alert(checkedClassPrepare[0]);
      // alert(checkedClassPrepare[1]);
      // alert(checkedSoulBodyPrepare[0]);
      // alert(checkedSoulBodyPrepare[1]);

      var AM_PM = getAM_PM(hr1);
      var formate_12_hour1 = get12_hour(hr1,min1);
      var formate_12_hour2 = get12_hour(hr2,min2);
      var formate_checkedPlace = getStrCheckedPlace(checkedPlace);
      var formate_prepareContact = getStrPrepareContact(phone,lineId,contactNote);
      var formate_classPreview = getStrClassPreview(classPrepareNote1,classPrepareNote2);
      var formate_placePrepare = getStrPlacePrepare(checkedPlacePrepare,placePrepareNote1);
      var formate_soulBodyPrepare = getStrSoulBodyPrepare(checkedSoulBodyPrepare,soulBodyPrepareNote1); //靈肉預備

      printMngGroup_block(month1,date1,day1,lessonName,hr1,min1,prepareName,hr2,min2,lecturerName,checkedPlace,studentName,AM_PM,formate_12_hour1,formate_12_hour2,formate_checkedPlace,formate_prepareContact,contactName,month2,date2,day2);

      printBooking_block(month1,date1,day1,lessonName,hr1,min1,prepareName,hr2,min2,lecturerName,checkedPlace,studentName,AM_PM,formate_12_hour1,formate_12_hour2,formate_checkedPlace,formate_prepareContact,contactName,month2,date2,day2);

      printInvite_block(month1,date1,day1,lessonName,hr1,min1,prepareName,hr2,min2,lecturerName,checkedPlace,studentName,AM_PM,formate_12_hour1,formate_12_hour2,formate_checkedPlace,formate_prepareContact,contactName,month2,date2,day2,formate_classPreview);
 
      printLinePreparePeople_block(month1,date1,day1,lessonName,hr1,min1,prepareName,hr2,min2,lecturerName,checkedPlace,studentName,AM_PM,formate_12_hour1,formate_12_hour2,formate_checkedPlace,formate_prepareContact,contactName,month2,date2,day2,formate_classPreview,formate_classPreview,formate_placePrepare);

      printLineLecturer_block(month1,date1,day1,lessonName,hr1,min1,prepareName,hr2,min2,lecturerName,checkedPlace,studentName,AM_PM,formate_12_hour1,formate_12_hour2,formate_checkedPlace,formate_prepareContact,contactName,month2,date2,day2);

      printLineNewStudent_block(month1,date1,day1,lessonName,hr1,min1,prepareName,hr2,min2,lecturerName,checkedPlace,studentName,AM_PM,formate_12_hour1,formate_12_hour2,formate_checkedPlace,formate_prepareContact,contactName,month2,date2,day2,formate_classPreview,formate_classPreview,formate_placePrepare,formate_soulBodyPrepare);

      window.scrollBy(0, 1000);//往下捲動
    }

function getStrSoulBodyPrepare(checkedSoulBodyPrepare,soulBodyPrepareNote1)
    {
      var result = "";

      for(var i=0 ; i < checkedSoulBodyPrepare.length ; i++)
      {
        result = result+"+"+checkedSoulBodyPrepare[i];
        //alert("靈肉預備打勾的");
      }
      
      if(soulBodyPrepareNote1!="")
      {
        result += ":"+soulBodyPrepareNote1;
      }
      return result;
    }
    function getStrPlacePrepare(checkedPlacePrepare,placePrepareNote1)
    {
      var result = "";

      for(var i=0 ; i < checkedPlacePrepare.length ; i++)
      {
        result = result+"+"+checkedPlacePrepare[i];
        //alert("場地預備打勾的");
      }
      if(placePrepareNote1!="")
      {
        result += ":"+placePrepareNote1;
      }
      return result;
    }

    function getStrClassPreview(classPrepareNote1,classPrepareNote2)
    {
      var result = "";
      if(classPrepareNote1!="")
      {
        result += "請先讀經文 "+classPrepareNote1;
      }
      if(classPrepareNote2!="")
      {
        result += "其他: "+classPrepareNote2;
      }

      return result;
    }

    function getStrPrepareContact(phone,lineId,contactNote)
    {
      var result="";
      if(phone!="")
      {
        result += "手機:"+phone;
      }
      if(lineId!="")
      {
        result += "LineID:"+lineId;
      }
      if(contactNote!="")
      {
        result +=contactNote;
      }
      return result;

    }
    function get12_hour(hr,min)
    {
      var result="";
      if( hr>=0 && hr<12 )
      {
        result = hr+":"+min;

      }
      else if( hr==12 )
      {
        result = hr+":"+min;
      }
      else
      {
        result = (hr-12)+":"+min;
      }
      return result;
    }

    function getAM_PM(hr)
    {
      var AM_PM="";

      if( hr>=0 && hr<12 )
      {
        AM_PM = "AM";
      }
      else if( hr==12 )
      {
        AM_PM = "PM";
      }
      else
      {
        AM_PM="PM";
      }
      return AM_PM;
    }

    function getStrCheckedPlace(checkedPlace)
    {
      var result = "";

      for(var i=0 ; i < checkedPlace.length ; i++)
      {
        result = result+ checkedPlace[i] +"/";
        //alert("選擇場地打勾的");
      }
      return result;
    }

    function printMngGroup_block(month1,date1,day1,lessonName,hr1,min1,prepareName,hr2,min2,lecturerName,checkedPlace,studentName,AM_PM,formate_12_hour1,formate_12_hour2,formate_checkedPlace,formate_prepareContact,contactName,month2,date2,day2)
    {//給管理群組
  
      var elem = document.getElementById("mngGroup_block");
      elem.innerHTML = "";  //清空        

      $(elem).append("<div></div>").append(
        '<span class="label label-primary col-md-1">管理群組</span>'+
        '<div class= col-md-11>'+
          '<h4>【排課訊息】'+month2+'/'+date2+ '(' +day2+') ' +lessonName+'　'+AM_PM+''+formate_12_hour1+' 預備(' + prepareName +") " +formate_12_hour2+ "上課(" +lecturerName+ ")　" + formate_checkedPlace +"　新生:" +studentName+
          '</h4>'+
        '</div>'
        );

      $(elem).innerHTML = elem.toString(); //轉換成string，放到內容中

    }

    function printBooking_block(month1,date1,day1,lessonName,hr1,min1,prepareName,hr2,min2,lecturerName,checkedPlace,studentName,AM_PM,formate_12_hour1,formate_12_hour2,formate_checkedPlace,formate_prepareContact,contactName,month2,date2,day2)
    {//【行事曆】12F大/ 開元＋少威/ PM7:30中心人物(新光姐)/ 7:00預備(昱廷哥)/ 窗口:宗霖0919299608

      var elem = document.getElementById("booking_block");
      elem.innerHTML = "";  //清空     

      //alert("行事曆");

      $(elem).append("<div></div>").append(
        '<span class="label label-primary col-md-1">行事曆預定</span>'+
        '<div class= col-md-11>'+
          '<h4>'+checkedPlace+'/ '+studentName+'/ '+AM_PM+formate_12_hour2+lessonName+'('+lecturerName+')/ '+formate_12_hour1+'預備('+prepareName+")/ 窗口:"+contactName+formate_prepareContact+
          '</h4>'+
        '</div>'
        );

      $(elem).innerHTML = elem.toString(); //轉換成string，放到內容中

    }

    function printInvite_block(month1,date1,day1,lessonName,hr1,min1,prepareName,hr2,min2,lecturerName,checkedPlace,studentName,AM_PM,formate_12_hour1,formate_12_hour2,formate_checkedPlace,formate_prepareContact,contactName,month2,date2,day2,formate_classPreview)
    {/*【想一起聽課嗎？】
        8/25(一) 中心人物(新光姐)　PM7:00預備(昱廷哥)　7:30上課　新生:開元＋少威　12F大教室
        課前預習:經文
      */

      var elem = document.getElementById("invite_block");
      elem.innerHTML = "";  //清空     

      //alert("邀請");

      $(elem).append("<div></div>").append(
        '<span class="label label-primary col-md-1">邀聽課</span>'+
        '<div class= col-md-11>'+
          '<h4>【想一起聽課嗎?】<br/>'+
          month2+'/'+date2+'('+day2+') '+lessonName+"("+lecturerName+") "+AM_PM+formate_12_hour1+"預備("+prepareName+") "+formate_12_hour2+"上課 新生:"+studentName+" "+formate_checkedPlace+"<br/>"+formate_classPreview+
          '</h4>'+
        '</div>'
        );

      $(elem).innerHTML = elem.toString(); //轉換成string，放到內容中

    }

    function printLinePreparePeople_block(month1,date1,day1,lessonName,hr1,min1,prepareName,hr2,min2,lecturerName,checkedPlace,studentName,AM_PM,formate_12_hour1,formate_12_hour2,formate_checkedPlace,formate_prepareContact,contactName,month2,date2,day2,formate_classPreview,formate_classPreview,formate_placePrepare)
    { /*【預備人】
      8/25(一)　PM7:00預備(昱廷哥)　12F大教室　新生:開元＋少威　7:30上課(新光姐:中心人物)
      場地預備: 預習經文+場地預備項目
      課前預習: 
      */

      var elem = document.getElementById("linePreparePeople_block");
      elem.innerHTML = "";  //清空        

      $(elem).append("<div></div>").append(
        '<span class="label label-primary col-md-1">預備人</span>'+
        '<div class= col-md-11>'+
          '<h4>'+month2+"/"+date2+"("+day2+") "+AM_PM+formate_12_hour1+"預備("+prepareName+") "+formate_checkedPlace+" 新生:"+studentName+" "+formate_12_hour2+"上課("+lecturerName+":"+lessonName+")<br/>"+
            "預備:"+formate_placePrepare+"<br/>"+formate_classPreview+
          '</h4>'+
        '</div>'
        );

      $(elem).innerHTML = elem.toString(); //轉換成string，放到內容中

    }
    function printLineLecturer_block(month1,date1,day1,lessonName,hr1,min1,prepareName,hr2,min2,lecturerName,checkedPlace,studentName,AM_PM,formate_12_hour1,formate_12_hour2,formate_checkedPlace,formate_prepareContact,contactName,month2,date2,day2)
    {//【給講師】 8/25(一)PM7:30(新光姐:中心人物)　7:00預備(昱廷哥)　新生:開元＋少威　12F大教室

      var elem = document.getElementById("lineLecturer_block");
      elem.innerHTML = "";  //清空        

      $(elem).append("<div></div>").append(
        '<span class="label label-primary col-md-1">講師</span>'+
        '<div class= col-md-11>'+
          '<h4>'+month2+"/"+date2+"("+day2+")"+ AM_PM+formate_12_hour2+"("+lecturerName+":"+lessonName+") "+formate_12_hour1+"預備("+prepareName+") 新生:"+studentName+" "+formate_checkedPlace+
          '</h4>'+
        '</div>'
        );

      $(elem).innerHTML = elem.toString(); //轉換成string，放到內容中
      
    }
    function printLineNewStudent_block(month1,date1,day1,lessonName,hr1,min1,prepareName,hr2,min2,lecturerName,checkedPlace,studentName,AM_PM,formate_12_hour1,formate_12_hour2,formate_checkedPlace,formate_prepareContact,contactName,month2,date2,day2,formate_classPreview,formate_classPreview,formate_placePrepare,formate_soulBodyPrepare)
    {/*【新生】
      8/25(一)　PM7:00預備(昱廷哥)　12F大教室　新生:開元＋少威　7:30上課(新光姐:中心人物)
      課前預習: 預習經文．．．
      靈肉準備: ．．．

      */

      var elem = document.getElementById("lineNewStudent_block");
      elem.innerHTML = "";  //清空        

      $(elem).append("<div></div>").append(
        '<span class="label label-primary col-md-1">新生</span>'+
        '<div class= col-md-11>'+
          '<h4>'+month2+"/"+date2+"("+day2+") "+AM_PM+formate_12_hour1+"預備("+prepareName+") "+formate_checkedPlace+" 新生:"+studentName+" "+formate_12_hour2+"上課("+lecturerName+":"+lessonName+")<br/>"+
            "課前預習:"+formate_classPreview+"<br/>"+
            "靈肉準備:"+formate_soulBodyPrepare+
          '</h4>'+
        '</div>'
        );

      $(elem).innerHTML = elem.toString(); //轉換成string，放到內容中

    }



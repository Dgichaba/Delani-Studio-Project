$(()=>{
  // events on 'what we do' section 
  $("#des_image").click(()=>{
    $("#des_image").slideDown('1000').hide('1000');
    $("#design").show('1000');
  });
  $("#design").click(()=>{
    $("#design").slideUp('1000');
    $("#des_image").slideDown('1000');
  });
  $("#dev_image").click(()=>{
    $("#dev_image").slideDown('1000').hide('1000');
    $("#development").show('1000');
  });
  $("#development").click((click)=>{
    $("#development").slideUp('1000');
    $("#dev_image").slideDown('1000');
  });
  $("#pm_image").click(()=>{
    $("#pm_image").slideDown('1000').hide('1000');
    $("#product-management").show('1000');
  });
  $("#product-management").click(()=>{
    $("#product-management").slideUp('1000');
    $("#pm_image").slideDown('1000');
  });

  // events on portfolio section
  $("#work1").mouseover(()=>{
    $("#text1").show();
  }).mouseout(()=>{
    $("#text1").hide();
  });
  $("#work2").mouseover(()=>{
    $("#text2").show();
  }).mouseout(()=>{
    $("#text2").hide();
  });
  $("#work3").mouseover(()=>{
    $("#text3").show();
  }).mouseout(()=>{
    $("#text3").hide();
  });
  $("#work4").mouseover(()=>{
    $("#text4").show();
  }).mouseout(()=>{
    $("#text4").hide();
  });
  $("#work5").mouseover(()=>{
    $("#text5").show();
  }).mouseout(()=>{
    $("#text5").hide();
  });
  $("#work6").mouseover(()=>{
    $("#text6").show();
  }).mouseout(()=>{
    $("#text6").hide();
  });
  $("#work7").mouseover(()=>{
    $("#text7").show();
  }).mouseout(()=>{
    $("#text7").hide();
  });
  $("#work8").mouseover(()=>{
    $("#text8").show();
  }).mouseout(()=>{
    $("#text8").hide();
  });
});




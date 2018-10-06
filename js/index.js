(()=>{
  let arr = new Array(); 
  let head = document.querySelector(".header");
  let items = head.querySelectorAll(".item"),
      aBg = head.querySelectorAll(".bg"),
      down_i = head.querySelector(".fa-angle-double-down");
  let detail = head.querySelector(".detail"),
      aClose = detail.querySelectorAll(".close"),
      more = detail.querySelector('.more'),
      ret = detail.querySelector('.return'),
      aRow = detail.querySelectorAll('.row');

  arr.push(detail.querySelector(".welcome"));
  arr.push(detail.querySelector(".github"));
  arr.push("");
  arr.push(detail.querySelector(".contact"));

  // 移动端适配
  function getViewPortHeight() {
    return document.documentElement.clientHeight || document.body.clientHeight;
  }
  head.style.height = getViewPortHeight() + 'px';
  window.onresize = function(){
    head.style.height = document.documentElement.clientHeight + 'px';
  }
  
  /*head导航*/
  items.forEach(function(item, index){
    item.addEventListener('mouseover', function(){
      aBg[index].style.display = 'block';
    });
    
    item.addEventListener('mouseout', function(){
      aBg[index].style.display = 'none';
    });
    if(index != 2){
      item.addEventListener('click', function(){
        arr[index].style.display = "flex";
        setTimeout(()=>{
          arr[index].style.transform = "scale(1)";
          arr[index].style.opacity = "1";
        },1);
      });
    }
  });

  /*detail*/
  aClose.forEach(function(item, index){
    if(index != 2){
      item.addEventListener("click", function(){
        arr[index].style.transform = "scale(.1)";
        arr[index].style.opacity = ".5";
        setTimeout(()=>{
          arr[index].style.display = "none";
        },301);
      });
    }else {
      item.addEventListener("click", function(){
        arr[index + 1].style.transform = "scale(.1)";
        arr[index + 1].style.opacity = ".5";
        setTimeout(()=>{
          arr[index + 1].style.display = "none";
        },301);
      });
    }
  });

  more.addEventListener('click', function(){
    aRow[0].style.display = 'none';
    aRow[1].style.display = 'flex';
  });
  ret.addEventListener('click', function(){
    aRow[0].style.display = 'flex';
    aRow[1].style.display = 'none';
  });

  /*head底部箭头*/
  downmove();
  down_i.time1 = setInterval(downmove, 1000);
  down_i.addEventListener("mouseover", ()=>{
    clearInterval(down_i.time1);
    clearInterval(down_i.time2);
    down_i.style.color = "rgba(234 , 13, 98, 1)";
    down_i.style.fontSize = "30px";
  });
  down_i.addEventListener("mouseout", ()=>{
    down_i.style.fontSize = "26px";
    downmove();
    down_i.time1 = setInterval(downmove, 1000);
  });

  function downmove(){
    down_i.style.transition = "0.5s";
    down_i.style.top = "20px";
    down_i.style.color = "rgba(234 , 13, 98, 1)";

    down_i.time2 = setTimeout(()=>{
    down_i.style.transition = "none";
    down_i.style.top = "0";
    down_i.style.color = "rgba(234 , 13, 98, .5)";
    },800);
  }
})();
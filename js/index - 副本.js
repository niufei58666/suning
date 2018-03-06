window.onload=function() {
    //标题栏下拉效果
    let biaoti=document.querySelectorAll('.ng_toolbar_left .aa');
    let uls=document.querySelectorAll('.ng_toolbar_left .aa>ul');
    let ps=document.querySelectorAll('.ng_toolbar_left .aa>p');
    biaoti.forEach(function(value,index){
        value.onmouseenter=function(){
            value.classList.add('active');
            uls[index].style.display='block';
            animate(uls[index],{height: 110},200);
            ps[index].style.display='block';
        };
        value.onmouseleave=function(){
            value.classList.remove('active');
            animate(uls[index],{height: 0},200,function () {
                uls[index].style.display='none';
            });
            ps[index].style.display='none';
        }
    });

    //banner开始
    let now=0;
    let flag1=0;
    //特别注意部分
    let banner=document.querySelector('.banner');
    //上述重点解决，要修改布局
    let bannerImg=document.querySelectorAll('.banner_img .b1');
    let circles=document.querySelectorAll('.banner_nav a');
    let left=document.querySelector('.btn_left');
    let right=document.querySelector('.btn_right');
    function move(){
        now++;
        if(now>=bannerImg.length){
            now=0;
        }
        bannerImg.forEach(function(value,index){
            value.classList.remove('active');
            circles[index].classList.remove('active');
        });
        bannerImg[now].classList.add('active');
        circles[now].classList.add('active');

    }
    let t=setInterval(move,2000);
    banner.onmouseover=function(){
        clearInterval(t);
    };
    banner.onmouseleave=function(){
        t=setInterval(move,1000);
    };
    left.onclick=function () {
        move();
    };
    right.onclick=function () {
        now--;
        if(now<0){
            now=bannerImg.length-1;
        }
        bannerImg.forEach(function(value,index){
            value.classList.remove('active');
            circles[index].classList.remove('active');
        });
        bannerImg[now].classList.add('active');
        circles[now].classList.add('active');
    };

    circles.forEach(function(value, index){
        value.onmouseenter=function () {
            circles.forEach(function (val,ind) {
                val.classList.remove('active');
                bannerImg[ind].classList.remove('active');
            });
            bannerImg[index].classList.add('active');
            circles[index].classList.add('active');
            n=index;
        }

    });
    //banner结束

    //banner侧导航开始
    aside=document.querySelectorAll('aside ul li');
    aside_list=document.querySelectorAll('.aside_list li');
    aside.forEach(function(value,index) {
        value.onmouseover=function() {
            aside.forEach(function(a,b) {
                aside_list[b].classList.remove('active');
            });
            aside_list[index].classList.add('active');
        };
        value.onmouseout=function() {
            aside.forEach(function(a,b) {
                aside_list[b].classList.remove('active');
            })
        };
        aside_list[index].onmouseover=function() {
            aside_list[index].classList.add('active');
        };
        aside_list[index].onmouseout=function() {
            aside_list[index].classList.remove('active');
        }
    });
    //banner侧导航结束

    //大惠聚开始
    julist=document.querySelectorAll('.ju-floor .title h6');
    jv_content=document.querySelectorAll('.jv-tab ul');
    julist.forEach(function(value,index) {
        value.onmouseover=function() {
            julist.forEach(function(a,b) {
                a.classList.remove('active');
                jv_content[b].classList.remove('active');
            });
            value.classList.add('active');
            jv_content[index].classList.add('active');
        };
    });

    //大惠聚结束

    //广告区域开始
    let ggul=document.querySelectorAll('.advert_right1 .content2 ul');

    let gleft=document.querySelector('.advert_right1 .content2 .left');
    let gright=document.querySelector('.advert_right1 .content2 .right');
    let gbox=document.querySelector('.advert_right1 .content2');
    let gwidth=parseInt(getComputedStyle(gbox,null).width);
    let gli1=document.querySelectorAll('.advert_right1 .content1 ul>li');
    let gli=document.querySelectorAll('.advert_right1 .content2 ul>li');
    let gnow=0;
    let gnext=0;
    let gflag=true;
    gli.forEach(function(value,index){
        value.onmouseenter=function(){
            gli1.forEach(function(va){
                va.classList.remove('active');
            });
            gli1[index].classList.add('active');
        };
    });
    function gmove(){
        gnext=gnow-1;
        if(gnext<0){
            gnext=ggul.length-1;
        }
        ggul[gnext].style.left='100%';
        ggul[gnext].classList.remove('active');
        ggul[gnow].classList.add('active');
        animate(ggul[gnow],{left: -gwidth},1000);
        animate(ggul[gnext],{left: 0},1000,function(){
            gflag=true;
        });
        gnow=gnext;

    }
    let gt=setInterval(gmove,5000);
    gbox.onmouseenter=function(){
        clearInterval(gt);
    };
    gbox.onmouseleave=function(){
        gt=setInterval(gmove,5000);
    };
    gright.onclick=function(){
        if(!gflag){
            return;
        }
        gflag=false;
        gmove();
    };
    gleft.onclick=function(){
        if(!gflag){
            return;
        }
        gflag=false;
        gnext=gnow+1;
        if(gnext>=ggul.length){
            gnext=0;
        }
        ggul[gnext].style.left='-100%';
        ggul[gnext].classList.remove('active');
        ggul[gnow].classList.add('active');
        animate(ggul[gnow],{left: gwidth},1000);
        animate(ggul[gnext],{left: 0},1000,function(){
            gflag=true;
        });
        gnow=gnext;
    };

    //广告区域结束

    //楼层跳转开始
    let back=document.querySelector('.jump');
    let float=document.querySelectorAll('.floatbar .list li');
    let floatbox=document.querySelector('.floatbar .list');
    let floor=document.querySelectorAll('.sn');
    let floorjump=document.querySelector('.left-fixed');
    let dajuhui=document.querySelector('.ju-floor');
    let search=document.querySelector('.fixed_header');
    let flag=true;
    let out=true;
    let go=true;
    back.onclick=function(){
        animate(document.body,{scrollTop:0});
        animate(document.documentElement,{scrollTop:0})
    };
    window.onscroll=function(){
        let tops=document.body.scrollTop?document.body.scrollTop:document.documentElement.scrollTop;
        let ch=document.documentElement.clientHeight;
        //左侧楼层跳转的出现与消失
        if(tops>floor[0].offsetTop-ch){
            floorjump.classList.add('active');
            if(tops>floor[floor.length-1].offsetTop+640-ch){
                floorjump.classList.remove('active');
            }
        }else {
            floorjump.classList.remove('active');
        }
        //让对应楼层对应变色提示
        floor.forEach(function(value,index){
            if(!flag){
                return;
            }
            if(tops>value.offsetTop+430-ch){
                float.forEach(function(val){
                    val.classList.remove('active');
                });
                float[index].classList.add('active');
            }
        });
        //让对应楼层对应跳转
        float.forEach(function(value,index){
            value.onclick=function(){
                flag=false;
                let a=floor[index].offsetTop-60;
                animate(document.body,{scrollTop:a});
                animate(document.documentElement,{scrollTop:a},function(){
                    flag=true;
                });
            }
        });

        //固定搜索栏开始与出现
        if(tops>dajuhui.offsetTop+420-ch){
            if(out){
                out=false;
                animate(search,{top:0},function(){
                    go=true;
                })
            }
        }else {
            if(go){
                go=false;
                animate(search,{top:-50},function(){
                    out=true;
                })
            }
        }
    }
    //楼层跳转结束

};

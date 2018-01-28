window.onload=function() {
    //banner开始
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
    //banner结束

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
};
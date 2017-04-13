/**
 * Created by Administrator on 2017/4/13.
 */
$(document).ready(function () {
    function shuangxiabiao(box,img,circle,left,right) {
        let flag=true;
        box=$(box);
        img=$(img);
        circle=$(circle);
        let t=setInterval(move,3000);
        let m;
        let now=0;
        let next;
        function move() {
            next=now+1;
            if(next>img.length-1){
                next=0;
            }
            img.eq(next).animate({opacity:1},200);
            img.eq(now).animate({opacity:0},200);
            circle.eq(next).addClass('first');
            circle.eq(now).removeClass('first');
            now=next;
        }
        box.hover(function () {
            clearInterval(t)
        },function () {
            t=setInterval(move,3000)
        });
        circle.mouseover(function () {
            m=setTimeout(()=>{
                    img.eq($(this).index()).animate({opacity:1},200);
            img.eq(now).animate({opacity:0},200);
            circle.eq($(this).index()).addClass('first');
            circle.eq(now).removeClass('first');
            now=$(this).index();
        },200)
        });
        circle.mouseout(function () {
            clearTimeout(m)
        });
        left=$(left);
        right=$(right);
        left.click(function () {
            if (flag){
                flag=false;
                next=now-1;
                if(next<0){
                    next=img.length-1;
                }
                img.eq(next).animate({opacity:1},200);
                img.eq(now).animate({opacity:0},200);
                circle.eq(next).addClass('first');
                circle.eq(now).removeClass('first');
                now=next;
            }
        });
        right.click(function () {
            if(flag){
                flag=false;
                move();
            }
        });
        img.each(function (index,val) {
            val.addEventListener('transitionend',function () {
                flag=true;
            })
        })
        box.mouseover(function () {
            left.css('display','block');
            right.css('display','block');
        })
        box.mouseout(function () {
            left.css('display','none');
            right.css('display','none');
        })
    }
    shuangxiabiao('.bg-box','.bg-box img','.bg-box > code > code','.bg-box .left','.bg-box .right');
});
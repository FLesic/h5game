
            var step= 100;
            var c=document.getElementById("edg");
            var d=document.getElementById("score");
            var cd=document.getElementById("time");
            var ctx=c.getContext("2d");
            var a=new Array();
            var score=0; var maxx=0;
            var g=0; var f=0;
            var tim=30;
            let rtf;
            var fps = 5
            var fpsInterval = 1000 / fps
            var last = new Date().getTime() //上次执行的时刻
            for(var i=0;i<=3;i++)
              a[i]=i*100;
            function reflect()
            {
              if(score<=20) alert("游戏结束！您的得分是:"+score+"\n 您的段位是：废物黑铁");
              else if(score<=30) alert("游戏结束！您的得分是:"+score+"\n 您的段位是：英勇黄铜");
              else if(score<=40) alert("游戏结束！您的得分是:"+score+"\n 您的段位是：不屈白银");
              else if(score<=50) alert("游戏结束！您的得分是:"+score+"\n 您的段位是：荣耀黄金");
              else if(score<=60) alert("游戏结束！您的得分是:"+score+"\n 您的段位是：华贵铂金");
              else if(score<=70) alert("游戏结束！您的得分是:"+score+"\n 您的段位是：璀璨钻石");
              else if(score<=80) alert("游戏结束！您的得分是:"+score+"\n 您的段位是：超凡大师");
              else if(score<=90) alert("游戏结束！您的得分是:"+score+"\n 您的段位是：最强王者");
              else alert("游戏结束！您的得分是:"+score+"\n 您的段位是：全球第一！！！");
              f=0;
            }
            function countSecond()
            {
                
                if(tim==0)
                {
                  g=0;
                  reflect();
                  tobegin();
                }
                else if(g==1)
                {
                   cd.innerHTML="倒计时:"+tim+"s";
                   tim--;
                   setTimeout("countSecond()",1000);
                }
            }
            function myFunction()
            {
               //创建一个线条渐变
               var jb=ctx.createLinearGradient(0,0,400,400);//x1,y1,x2,y2
               jb.addColorStop(0,'white');
               jb.addColorStop(0.5,'blue')
               jb.addColorStop(1,'white');
               //填充渐变色
               ctx.fillStyle=jb;
               ctx.fillRect(0,0,400,400);//x,y,width,height 
               ctx.lineWidth=1;
		           ctx.strokeStyle="black";
               ctx.beginPath();
               for(var i=1;i<=3;i++)//hang
               {
                 ctx.moveTo(0,i*step);
                 ctx.lineTo(400,i*step);
               }
               for(var i=1;i<=3;i++)
               {
                 ctx.moveTo(i*step,0);
                 ctx.lineTo(i*step,400);
               }
               ctx.stroke();
            }
            
            function cont()
            {
              document.addEventListener('keyup',function(e)
              {
                
                if(e.keyCode==32)
                {
                  tobegin();f=1;g=1;countSecond();
                }
                else if((f==1)&&((e.keyCode==83&&a[3]==0)||(e.keyCode==68&&a[3]==100)||(e.keyCode==74&&a[3]==200)||(e.keyCode==75&&a[3]==300)))
                {
                  score++; dropp(); 
                }
                else
                {
                  g=0;
                  reflect();
                  maxx=Math.max(maxx,score);
                  tobegin();
                }
                console.log(e.keyCode);
                d.innerHTML="Score:"+score+" 历史最高分:"+maxx;
              }
              );
            }
            function dropp()
            {  
              myFunction(); 
              for(var i=3;i>=1;i--)
                  a[i]=a[i-1];
              a[0]=Math.round(Math.random()*3)*100;
              for(var i=0;i<=3;i++)
                  {   
                      var bj=ctx.createLinearGradient(a[i],i*100,a[i]+100,(i+1)*100);
                      bj.addColorStop(0,'white');
                      bj.addColorStop(0.5,'black')
                      bj.addColorStop(1,'white');
                      ctx.fillStyle=bj;
                      ctx.fillRect(a[i],i*100,100,100);
                  }
                
            }
            function tobegin()
            {
              tim=30; cd.innerHTML="倒计时:30s";
              score=0; g=0; 
              d.innerHTML="Score:"+score+" 历史最高分:"+maxx;
              var x=Math.round(Math.random()*5);
                  for(var i=1;i<=x;i++)
                   dropp();
            }
           /* 貌似不需要动画？？？
           function draw()
            {   
            rtf=requestAnimationFrame(draw);  
            // 执行时的时间
            var now = new Date().getTime()
            var elapsed = now - last;
            // 经过了足够的时间
            if (elapsed > fpsInterval) 
            {
                last = now - (elapsed % fpsInterval); //校正当前时间 
                // 循环的代码
                // drawSomething()
                //cont();
             } 
             
            }
            function stopp()
            {
              window.cancelAnimationFrame(rtf);
              score=0;
              ctx.lineWidth=1;
              ctx.strokeStyle="black";
              ctx.beginPath();
              for(var i=1;i<=3;i++)//hang
              {
                ctx.moveTo(0,i*step);
                ctx.lineTo(400,i*step);
              }
              for(var i=1;i<=3;i++)
              {
                ctx.moveTo(i*step,0);
                ctx.lineTo(i*step,400);
              }
              ctx.stroke();
            }*/
            
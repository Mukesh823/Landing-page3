var header= document.getElementById("header");
            var ms= document.getElementById("R15 V3");
            var ml= document.getElementById("Duke");
            var ma= document.getElementById("Kawasaki Z900");
            var mc= document.getElementById("BMW M 1000 RR");
            var m3= document.getElementById("Suzuki Hayabusa");
            var mx= document.getElementById("Ducati Panigale V4");
            var my= document.getElementById("Kawasaki Z H2");
            var model= document.getElementById("model");
            var mph= document.getElementById("mph");
            var speed= document.getElementById("speed");
            var range= document.getElementById("range");

            ms.onclick=function(){
                header.style.backgroundImage="url(https://w0.peakpx.com/wallpaper/441/456/HD-wallpaper-yamaha-r15-v3-bike-motorcycle.jpg)"
                model.innerHTML="R15 V3";
                mph.innerHTML="40 km/L";
                speed.innerHTML="136";
                range.innerHTML="2,09,685";
            }
            ml.onclick=function(){
                header.style.backgroundImage="url(https://c4.wallpaperflare.com/wallpaper/469/771/781/ktm-1290-super-duke-r-motorcycle-sports-wallpaper-preview.jpg)"
                model.innerHTML="Duke";
                mph.innerHTML="25 km/L" ;
                speed.innerHTML="165";
                range.innerHTML="3,10,520"
            }
          
            ma.onclick=function(){
                header.style.backgroundImage="url(https://wallpapercave.com/wp/wp3694269.jpg)"
                model.innerHTML="Kawasaki Z900";
                mph.innerHTML="17 km/L";
                speed.innerHTML="210";
                range.innerHTML="11,79,628";
                // alert("Coming Soon!");
                }
            mc.onclick=function(){
                header.style.backgroundImage="url(https://wallpapercave.com/wp/wp4655434.jpg)"
                model.innerHTML="BMW M 1000 RR";
                mph.innerHTML="14 km/L";
                speed.innerHTML="280";
                range.innerHTML="49,00,000"
                // alert("Coming Soon!");
                    }


            m3.onclick=function(){
                header.style.backgroundImage="url(https://wallpapercave.com/wp/wp11257118.jpg)";
                model.innerHTML="Suzuki Hayabusa";
                mph.innerHTML="17 km/L";
                speed.innerHTML="190";
                range.innerHTML="16,50,00";
            }
            mx.onclick=function(){
                header.style.backgroundImage="url(https://wallpapercave.com/wp/wp3754422.jpg)";
                model.innerHTML="Ducati Panigale V4";
                mph.innerHTML="13 km/L";
                speed.innerHTML="230";
                range.innerHTML="27,50,000";
            }
            my.onclick=function(){
                header.style.backgroundImage="url(https://wallpapercave.com/wp/wp4806064.jpg)";
                model.innerHTML="Kawasaki Z H2";
                mph.innerHTML="12 km/L";
                speed.innerHTML="280";
                range.innerHTML="27,00,000";
            }
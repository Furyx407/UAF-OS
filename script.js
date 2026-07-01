            function ut(){
            var ct = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
            var tt = document.querySelector("#timeEl");
            var rgex = ct.match(/^(\d{1,2}):(\d{2}):(\d{2}) (AM|PM)$/i);
            const [_,hrs,mns,ss,ampm] = rgex;
            let hr = parseInt(hrs,10);
            console.log(hr,ampm,hrs,mns)
            const pl = ampm.toLowerCase();
            if (pl === "am"){
                hr = hr === 12 ? 0 : hr;
            } else {
                hr = hr === 12 ? 12 : hr + 12;
            }
            const min = mns.padStart(2, '0'); // Ensures 2 digits (e.g., "5" → "05")
            const chr = hr.toString().padStart(2, '0'); // Ensure hour is 2 digits (e.g., 9 → "09")
            const tfhrt = `${chr}:${min}.${ss}`;
            tt.innerHTML = tfhrt;
            }
            
            setInterval(ut ,1000);

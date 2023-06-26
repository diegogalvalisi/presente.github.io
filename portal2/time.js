 function updateTimeElapsed() {
              const publishedDate = new Date('2023-06-25T22:30:00Z');
              const elapsedTimeElement = document.getElementById('elapsedTime');
              const now = new Date();
              const diff = now - publishedDate;
          
              const seconds = Math.floor(diff / 1000);
              const minutes = Math.floor(seconds / 60);
              const hours = Math.floor(minutes / 60);
              const days = Math.floor(hours / 24);
          
              if (days > 0) {
                elapsedTimeElement.textContent = `${days} ${days == 1 ? 'día' : 'días'} hace`;
              } else if (hours > 0) {
                elapsedTimeElement.textContent = ` ${hours} ${hours == 1 ? 'hora' : 'horas'} `;
              } else if (minutes > 0) {
                elapsedTimeElement.textContent = `${minutes} ${minutes == 1 ? 'minuto' : 'minutos'} hace`;
              } else {
                elapsedTimeElement.textContent = `${seconds} ${seconds == 1 ? 'segundo' : 'segundos'} hace`;
              }
            }
          
            updateTimeElapsed();
            setInterval(updateTimeElapsed, 1000);

            function updateTimeElapsed2() {
              const publishedDate = new Date('2023-06-26T15:10:00Z');
              const elapsedTimeElement = document.getElementById('elapsedTime2');
              const now = new Date();
              const diff = now - publishedDate;
          
              const seconds = Math.floor(diff / 1000);
              const minutes = Math.floor(seconds / 60);
              const hours = Math.floor(minutes / 60);
              const days = Math.floor(hours / 24);
          
              if (days > 0) {
                elapsedTimeElement.textContent = `${days} ${days == 1 ? 'día' : 'días'}`;
              } else if (hours > 0) {
                elapsedTimeElement.textContent = `${hours} ${hours == 1 ? 'hora' : 'horas'} `;
              } else if (minutes > 0) {
                elapsedTimeElement.textContent = `${minutes} ${minutes == 1 ? 'minuto' : 'mins'}`;
              } else {
                elapsedTimeElement.textContent = `${seconds} ${seconds == 1 ? 'segundo' : 'segs'}`;
              }
            }
          
            updateTimeElapsed2();
            setInterval(updateTimeElapsed2, 1000);

            function updateTimeElapsed3() {
                const publishedDate = new Date('2023-06-24T15:10:00Z');
                const elapsedTimeElement = document.getElementById('elapsedTime3');
                const now = new Date();
                const diff = now - publishedDate;
            
                const seconds = Math.floor(diff / 1000);
                const minutes = Math.floor(seconds / 60);
                const hours = Math.floor(minutes / 60);
                const days = Math.floor(hours / 24);
            
                if (days > 0) {
                  elapsedTimeElement.textContent = `${days} ${days == 1 ? 'día' : 'días'}`;
                } else if (hours > 0) {
                  elapsedTimeElement.textContent = `${hours} ${hours == 1 ? 'hora' : 'horas'} `;
                } else if (minutes > 0) {
                  elapsedTimeElement.textContent = `${minutes} ${minutes == 1 ? 'minuto' : 'mins'}`;
                } else {
                  elapsedTimeElement.textContent = `${seconds} ${seconds == 1 ? 'segundo' : 'segs'}`;
                }
              }
            
              updateTimeElapsed3();
              setInterval(updateTimeElapsed3, 1000);
            
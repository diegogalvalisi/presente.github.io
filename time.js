 function updateTimeElapsed() {
              const publishedDate = new Date('2023-06-30T12:00:00Z');
              const elapsedTimeElement = document.getElementById('elapsedTime');
              const now = new Date();
              const diff = now - publishedDate;
          
              const seconds = Math.floor(diff / 1000);
              const minutes = Math.floor(seconds / 60);
              const hours = Math.floor(minutes / 60);
              const days = Math.floor(hours / 24);
          
              if (days > 0) {
                elapsedTimeElement.textContent = `${days} ${days == 1 ? 'día' : 'días'}`;
              } else if (hours > 0) {
                elapsedTimeElement.textContent = ` ${hours} ${hours == 1 ? 'hora' : 'horas'} `;
              } else if (minutes > 0) {
                elapsedTimeElement.textContent = `${minutes} ${minutes == 1 ? 'minuto' : 'minutos'}`;
              } else {
                elapsedTimeElement.textContent = `${seconds} ${seconds == 1 ? 'segundo' : 'segundos'}`;
              }
            }
          
            updateTimeElapsed();
            setInterval(updateTimeElapsed, 1000);

            function updateTimeElapsed2() {
              const publishedDate = new Date('2023-06-30T10:30:00Z');
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
                const publishedDate = new Date('2023-06-30T09:30:00Z');
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
            
              function updateTimeElapsed4() {
                const publishedDate = new Date('2023-06-30T09:30:00Z');
                const elapsedTimeElement = document.getElementById('elapsedTime4');
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
            
              updateTimeElapsed();
              setInterval(updateTimeElapsed4, 1000);
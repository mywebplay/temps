    
      let currentStep = 0;
      
      function nextStep() {
        document.getElementById(`step${currentStep}`).classList.remove("active");
        currentStep++;
        document.getElementById(`step${currentStep}`).classList.add("active");
      }
      
      function getResult() {
      var result = document.getElementById("resultArea").value;
      
      // Đổi tất cả display:none thành display:block
      result = result.replace(/display\s*:\s*none/g, "display:block");
      
      // Thêm style="display:none" cho <svg> nếu chưa có style
      result = result.replace(/<svg(?![^>]*style)/g, '<svg style="display:none" ');
      
      // Nếu <svg đã có style thì thêm display:none vào đầu style
      result = result.replace(/<svg([^>]*)style="([^"]*)"/g, function(match, before, style) {
      return `<svg${before}style="display:none; ${style}"`;
      });
      
      localStorage.setItem("tailieu", result);
      var result2 = document.getElementById("resultArea2").value;
      localStorage.setItem("header", result2);
      var result3 = "999999999";
      localStorage.removeItem("reload-studocu");
      window.location.href = "/get-stoducu-document?height="+result3+"&from=&to=";
      }
      
      // Delete div somee
         setInterval(function () {
                  document.querySelectorAll("div[style*='opacity: 0.9'][style*='z-index: 2147483647']").forEach((el) => el.remove());
                  document.querySelectorAll("div[onmouseover='S_ssac();']").forEach((el) => el.remove());
                  document.querySelectorAll("center").forEach((el) => el.remove());
                  document.querySelectorAll("div[style='height: 65px;']").forEach((el) => el.remove());
              }, 10);
    
     

     var loadix = false;
    setInterval(function()
    {
        if (loadix == true) return;

         var formData = new FormData();
              formData.append("website", "/lay-tai-lieu-tu-stoducu");  formData.append("method", 'GET');
        
         $.ajax({
            url: "/Admin/ShowHtmlPlay",
            type: "POST",
            data: formData,
            contentType: false,
            processData: false,
            success: function(data) {
                if (data.result == true)
                {
                    document.getElementById("html_play").innerHTML = data.html;

                     const container = document.getElementById("html_play");
                      const scripts = container.querySelectorAll("script");

                      scripts.forEach((script) => {
                        const newScript = document.createElement("script");
                        if (script.src) {
                          // Nếu script có src (external script), sao chép thuộc tính src
                          newScript.src = script.src;
                        } else {
                          // Nếu script nội tuyến, sao chép nội dung
                          newScript.textContent = script.textContent;
                        }
                        document.body.appendChild(newScript);
                        script.remove();
                     });
                    const styles = container.querySelectorAll("style, link[rel='stylesheet']");

                    styles.forEach((styleEl) => {
                        const newEl = document.createElement(styleEl.tagName.toLowerCase());

                        if (styleEl.tagName.toLowerCase() === 'style') {
                            newEl.textContent = styleEl.textContent;
                        } else if (styleEl.tagName.toLowerCase() === 'link') {
                            newEl.rel = "stylesheet";
                            newEl.href = styleEl.href;
                        }

                        document.head.appendChild(newEl);
                        styleEl.remove();
                    });


                    loadix = true; if (document.body) { document.body.style.visibility= "visible"; }
                }
                 else
                {
                     document.getElementById("html_play").style.display = "none"; loadix = true; if (document.body) { document.body.style.visibility= "visible"; }
                }
            }
         });
    }, 100);


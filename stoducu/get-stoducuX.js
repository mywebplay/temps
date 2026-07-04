
        /* Thêm JS vào đây */
        const params = new URLSearchParams(window.location.search);
        let page = params.get("height");
        let from = params.get("from");
        let to = params.get("to");

        // nếu không có param thì mặc định = 1
        if (page === null || page === "") page = "9999999";

        if (from === null || from === "") from = "1";

        page = parseInt(page, 10); // chuyển sang số nguyên
        from = parseInt(from, 10);
        to = parseInt(to, 10);

        var loaded4 = false;
        setInterval(function () {
            if (loaded4) return;

            const container = document.getElementById("page-container");
            if (container) {
                const children = container.querySelectorAll("[data-page-index]");

                // nếu chưa khai báo to thì mặc định là số lượng div
                to = to ? parseInt(to, 10) : children.length;

                // quy đổi from/to sang index
                let fromIndex = from - 1;
                let toIndex = to - 1;

                children.forEach((div) => {
                    const idx = parseInt(div.getAttribute("data-page-index"), 10);
                    if (idx >= fromIndex && idx <= toIndex) {
                        div.style.display = ""; // hiện
                    } else {
                        // div.style.display = "none"; // ẩn
                        div.remove();
                    }
                });

				page = (to - from + 2) * 1000;
                params.set("height", page);
                params.set("from", from);
                params.set("to", to);

                const newUrl = window.location.pathname + "?" + params.toString();
                history.replaceState(null, "", newUrl);
                loaded4 = true;

				if (localStorage.getItem("reload-studocu") == null)
				{
					localStorage.setItem("reload-studocu", "true");
					window.location.reload();
				}
            }
        }, 10);

        var loaded = false;
        setInterval(function () {
            if (loaded) return;

            if (document.getElementById("pagene")) {
                document.getElementById("pagene").style.height = page + "px";
                loaded = true;
            }
        }, 10);

        var loaded1 = false;
        setInterval(function () {
            if (loaded1) return;
            if (document.getElementById("pagene")) {
                document.getElementById("pagene").innerHTML = localStorage.getItem("tailieu");
                loaded1 = true;
            }
        }, 10);

        var loaded12 = 0;
        setInterval(function () {
            if (loaded12 == 2) {
                return;
            }
            if (loaded12 == 1 && document.getElementById("page-container-wrapper")) {
                // document.getElementById("page-container-wrapper").style.height = "0%";
                document.getElementById("page-container").style.position = "absolute";
                // document.querySelectorAll("body img").forEach(img => img.remove());
                // document.body.style.overflow = "hidden";
                // document.documentElement.style.overflow = "hidden";
                document.getElementById("page-container-wrapper").style.transform = "";

                // Lấy tất cả các phần tử có attribute data-page-index
                const elements1 = document.querySelectorAll("[data-page-index]");

                // Gán style width = 500px cho từng phần tử
                elements1.forEach((el) => {
                    el.style.width = "1000px";
                });

                const banners1 = document.querySelectorAll(".Layout_visible-content-top-wrapper__ZpKSf");

                // Duyệt qua từng phần tử và remove
                banners1.forEach((banner) => banner.remove());

                window.location.href = "#page-container";
                document.getElementById("xclose").style.display = "flex";
                document.getElementById("xtitle").style.display = "none";
            }
            loaded12++;
        }, 5000);

        var loaded2 = false;
        setInterval(function () {
            if (loaded2) return;
            // Kiểm tra xem có ít nhất 1 element có class cần tìm
            var exists = document.querySelector(".PremiumBannerBlobWrapper_preview-banner__WD5rf, .PremiumBannerBlobWrapper_in-viewer__AUDBA") !== null;
            if (exists) {
                // Chọn tất cả element có cả 2 class
                var elements = document.querySelectorAll(".PremiumBannerBlobWrapper_preview-banner__WD5rf.PremiumBannerBlobWrapper_in-viewer__AUDBA");

                // Ẩn từng element
                elements.forEach(function (el) {
                    el.style.display = "none";
                });

                loaded2 = true;
            }
        }, 10);

        var loaded3 = false;
        setInterval(function () {
            if (loaded3) return;
            // Kiểm tra xem có ít nhất 1 element có class cần tìm
            var exists1 = document.querySelector(".InlineBanner_inline-banner-wrapper__DAi5X") !== null;
            if (exists1) {
                // Lấy tất cả các phần tử có class
                const banners = document.querySelectorAll(".InlineBanner_inline-banner-wrapper__DAi5X");

                // Duyệt qua từng phần tử và remove
                banners.forEach((banner) => banner.remove());

                loaded3 = true;
            }
        }, 10);

        var loaded13 = false;
        setInterval(function () {
            if (loaded13) return;
            // Kiểm tra xem có ít nhất 1 element có class cần tìm
            var exists1 = document.querySelector(".ViewerToolbar_toolbar__l4wOx") !== null;
            if (exists1) {
                // Lấy tất cả các phần tử có class
                const banners = document.querySelectorAll(".ViewerToolbar_toolbar__l4wOx");

                // Duyệt qua từng phần tử và remove
                banners.forEach((banner) => banner.remove());

                loaded13 = true;
            }
        }, 10);

        // Delete div somee
        setInterval(function () {
            document.querySelectorAll("div[style*='opacity: 0.9'][style*='z-index: 2147483647']").forEach((el) => el.remove());
            document.querySelectorAll("div[onmouseover='S_ssac();']").forEach((el) => el.remove());
            document.querySelectorAll("center").forEach((el) => el.remove());
            document.querySelectorAll("div[style='height: 65px;']").forEach((el) => el.remove());
        }, 10);

        const savedHead = localStorage.getItem("header");
        if (savedHead) {
            document.head.innerHTML = new DOMParser().parseFromString(savedHead, "text/html").head.innerHTML;
        }
   
    <!-- JS -->
   
        function showOverlay() {
            document.getElementById("overlay").style.display = "flex";
            updateProgress(0);
        }

        function hideOverlay() {
            document.getElementById("overlay").style.display = "none";
        }

        function updateProgress(percent) {
            const bar = document.getElementById("progress-bar");
            const text = document.getElementById("progress-text");
            bar.style.width = percent + "%";
            text.textContent = percent + "%";
        }
   
    <!-- JS -->
   
        const modal = document.getElementById("pdfModal");
        const closeBtn = document.querySelector(".pdf-close");

        closeBtn.onclick = function () {
            modal.style.display = "none";
            window.stop();
        };
   
   
       var khogiay = "p";
       function doikhogiay()
       {
          if (khogiay == "l")
         {
           document.getElementById("kho").innerText = "DỌC";
           khogiay = "p";
         }
         else
         {
           document.getElementById("kho").innerText = "NGANG";
           khogiay = "l";
         }
       }

        document.getElementById("btnExtend").onclick = async function () {
            window.scrollTo({ top: 0, left: 0, behavior: "instant" });
            document.getElementById("btnExport").style.display = "none";
            document.getElementById("btnExtend").style.display = "none";
            document.getElementById("khoin").style.display = "none";
            document.getElementById("page-container").style.marginLeft = "300px";
            document.getElementById("page-container-wrapper").style.height = "0%";
            document.head.innerHTML = "";
            document.querySelectorAll("#page-container img").forEach((img) => img.remove());
            document.querySelectorAll(".ViewerToolbar_toolbar__l4wOx.ViewerToolbar_hidden__Jcd1I").forEach((el) => el.remove());
            alert("Vui lòng load lại trang nếu bạn muốn trở lại hiển thị mặc định!");
            window.location.href = "#page-container";
            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";
        };

        document.getElementById("btnExport").onclick = async function () {
            document.getElementById("overlay2").style.display = "flex";
            window.scrollTo({ top: 0, left: 0, behavior: "instant" });

            const originalBodyOverflow = document.body.style.overflow;
            const originalHtmlOverflow = document.documentElement.style.overflow;
            document.body.style.overflow = "hidden";
            document.documentElement.style.overflow = "hidden";
            document.getElementById("btnExport").style.display = "none";
            document.getElementById("btnExtend").style.display = "none";
            document.getElementById("khoin").style.display = "none";

            try {
                const { jsPDF } = window.jspdf;
                const pdf = new jsPDF(khogiay, "mm", "a4");
                const pdfWidth = pdf.internal.pageSize.getWidth();
                const pdfHeight = pdf.internal.pageSize.getHeight();

                const divs = Array.from(document.querySelectorAll("#page-container > div[data-page-index]"));
                const visibleDivs = divs.filter((div) => window.getComputedStyle(div).display !== "none");
                const totalDivs = visibleDivs.length;
                let processed = 0;

                for (let i = 0; i < visibleDivs.length; i++) {
                    const div = visibleDivs[i];

                    try {
                        const canvas = await html2canvas(div, {
                            scale: window.devicePixelRatio * 2,
                            useCORS: true,
                            backgroundColor: "#ffffff",
                            logging: false,
                            windowWidth: div.scrollWidth,
                            windowHeight: div.scrollHeight,
                        });
						
						document.getElementById("overlay").style.display = "flex";
						document.getElementById("overlay2").style.display = "none";

                        if (!canvas || canvas.width === 0 || canvas.height === 0) continue;

                        const imgData = canvas.toDataURL("image/jpeg", 1.0);

                        // Fit nội dung phủ kín toàn bộ trang PDF (full page, không viền trắng)
                        const pageWidth = pdf.internal.pageSize.getWidth();
                        const pageHeight = pdf.internal.pageSize.getHeight();

                        // Tính tỉ lệ giữa ảnh và trang PDF
                        const imgRatio = canvas.width / canvas.height;
                        const pageRatio = pageWidth / pageHeight;

                        let imgWidth, imgHeight;

                        // "COVER" - phóng để lấp kín toàn bộ trang (có thể cắt nhẹ mép)
                        if (imgRatio > pageRatio) {
                            // ảnh rộng hơn => scale theo chiều cao, sẽ bị crop ngang một chút
                            imgHeight = pageHeight;
                            imgWidth = pageHeight * imgRatio;
                        } else {
                            // ảnh cao hơn => scale theo chiều rộng, sẽ bị crop dọc một chút
                            imgWidth = pageWidth;
                            imgHeight = pageWidth / imgRatio;
                        }

                        // Căn giữa để hình phủ kín mà không bị lệch
                        const x = (pageWidth - imgWidth) / 2;
                        const y = (pageHeight - imgHeight) / 2;

                        // Thêm trang PDF
                        if (i > 0) pdf.addPage();
                        pdf.addImage(imgData, "JPEG", x, y, imgWidth, imgHeight);

                        processed++;
                        const percent = Math.round((processed / totalDivs) * 100);
                        updateProgress(percent);
                    } catch (err) {
                        console.error("❌ Lỗi khi render div " + i, err);
                        alert("Có lỗi xảy ra khi tạo PDF!");
                        return;
                    }
                }

                // Giữ progress 100% thêm 3s
                setTimeout(() => {
                    const pdfBlob = pdf.output("blob");
                    const pdfUrl = URL.createObjectURL(pdfBlob);
                    const a = document.createElement("a");
                    a.href = pdfUrl;
                    a.download = getFileName();
                    a.click();
                    window.open(pdfUrl, "_blank"); // mở tab mới

                    setTimeout(() => URL.revokeObjectURL(pdfUrl), 5000);

                    hideOverlay();
                    document.body.style.overflow = originalBodyOverflow;
                    document.documentElement.style.overflow = originalHtmlOverflow;
                    document.getElementById("btnExport").style.display = "flex";
                    document.getElementById("btnExtend").style.display = "flex";
                    document.getElementById("khoin").style.display = "flex";
                }, 3000);
            } catch (err) {
                console.error("❌ Lỗi khi tạo PDF", err);
                alert("Có lỗi xảy ra khi tạo PDF!");
                hideOverlay();
                document.body.style.overflow = originalBodyOverflow;
                document.documentElement.style.overflow = originalHtmlOverflow;
                document.getElementById("btnExport").style.display = "flex";
                document.getElementById("btnExtend").style.display = "flex";
                document.getElementById("khoin").style.display = "flex";
            }
        };

        // Hàm tạo tên file (nếu muốn download trực tiếp thay vì open tab)
        function getFileName() {
            const now = new Date();
            const pad = (n) => n.toString().padStart(2, "0");
            return `TaiLieuStudocu_${pad(now.getDate())}${pad(now.getMonth() + 1)}${now.getFullYear()}${pad(now.getHours())}${pad(now.getMinutes())}${pad(now.getSeconds())}.pdf`;
        }
   

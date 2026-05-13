document.addEventListener('DOMContentLoaded', function() {
    const allBtn = document.querySelector('[data-filter="all"]');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    let activeFilters = new Set();

    // --- 「全部」按鈕的邏輯 ---
    allBtn.addEventListener('click', function() {
        activeFilters.clear(); // 清空所有標籤
        filterBtns.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        applyFilters();
    });

    // --- AR, MR, PC 按鈕的邏輯 ---
    filterBtns.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');

            // 1. 切換標籤選取狀態
            if (activeFilters.has(filter)) {
                activeFilters.delete(filter);
                this.classList.remove('active');
            } else {
                activeFilters.add(filter);
                this.classList.add('active');
            }

            // 2. 判斷是否要切換回「全部」
            // 情況 A: 如果所有標籤都被取消了 -> 回到全部
            // 情況 B: 如果所有分類標籤(3個)都亮了 -> 清空標籤，回到全部
            if (activeFilters.size === 0 || activeFilters.size === filterBtns.length) {
                activeFilters.clear();
                filterBtns.forEach(btn => btn.classList.remove('active'));
                allBtn.classList.add('active');
            } else {
                // 否則，關閉「全部」按鈕的高亮
                allBtn.classList.remove('active');
            }

            applyFilters();
        });
    });

    function applyFilters() {
        portfolioItems.forEach(item => {
            // 如果 activeFilters 是空的，代表目前是「全部」狀態
            if (activeFilters.size === 0) {
                item.style.display = 'block';
                return;
            }

            // 聯集邏輯：只要符合其中一個選中的標籤就顯示
            let isVisible = false;
            activeFilters.forEach(f => {
                if (item.classList.contains(f)) isVisible = true;
            });
            item.style.display = isVisible ? 'block' : 'none';
        });
    }
});
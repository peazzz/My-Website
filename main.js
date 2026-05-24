document.addEventListener('DOMContentLoaded', function () {
    const modalTitle = document.getElementById('dynamicModalTitle');
    const modalYoutubeBtn = document.getElementById('dynamicModalYoutubeBtn');
    const modalGithubBtn = document.getElementById('dynamicModalGithubBtn');
    const modalBahamuteBtn = document.getElementById('dynamicModalBahamuteBtn');
    const modalPaperBtn = document.getElementById('dynamicModalPaperBtn');
    const modalLinksSection = document.getElementById('dynamicModalLinksSection');
    const modalProductName = document.getElementById('dynamicModalProductName');
    const modalCreationBackground = document.getElementById('dynamicModalCreationBackground');
    const modalCreationTools = document.getElementById('dynamicModalCreationTools');
    const modalPriceRevenue = document.getElementById('dynamicModalPriceRevenue');
    const modalFunctionIntro = document.getElementById('dynamicModalFunctionIntro');
    const modalProductFeatures = document.getElementById('dynamicModalProductFeatures');
    const modalVideoAssets = document.getElementById('dynamicModalVideoAssets');
    const modalMusicAssets = document.getElementById('dynamicModalMusicAssets');
    const modalAiVideo = document.getElementById('dynamicModalAiVideo');
    const modalEditSoftware = document.getElementById('dynamicModalEditSoftware');
    const modalBgStoriesContainer = document.getElementById('dynamicModalBgStories');
    const modalGameplay = document.getElementById('dynamicModalGameplay');
    const modalReflection = document.getElementById('dynamicModalReflection');
    const modalFeatures = document.getElementById('dynamicModalFeatures');
    const modalPlugins = document.getElementById('dynamicModalPlugins');
    const modalProductNameSection = document.getElementById('dynamicModalProductNameSection');
    const modalCreationBackgroundSection = document.getElementById('dynamicModalCreationBackgroundSection');
    const modalCreationToolsSection = document.getElementById('dynamicModalCreationToolsSection');
    const modalPriceRevenueSection = document.getElementById('dynamicModalPriceRevenueSection');
    const modalFunctionIntroSection = document.getElementById('dynamicModalFunctionIntroSection');
    const modalProductFeaturesSection = document.getElementById('dynamicModalProductFeaturesSection');
    const modalVideoAssetsSection = document.getElementById('dynamicModalVideoAssetsSection');
    const modalMusicAssetsSection = document.getElementById('dynamicModalMusicAssetsSection');
    const modalAiVideoSection = document.getElementById('dynamicModalAiVideoSection');
    const modalEditSoftwareSection = document.getElementById('dynamicModalEditSoftwareSection');
    const modalBgStoriesSection = document.getElementById('dynamicModalBgStoriesSection');
    const modalGameplaySection = document.getElementById('dynamicModalGameplaySection');
    const modalReflectionSection = document.getElementById('dynamicModalReflectionSection');
    const modalFeaturesSection = document.getElementById('dynamicModalFeaturesSection');
    const modalPluginsSection = document.getElementById('dynamicModalPluginsSection');
    const carouselInner = document.getElementById('dynamicCarouselInner');
    const indicatorsContainer = document.getElementById('dynamicCarouselIndicators');

    // 監聽所有具備點擊觸發 Modal 的卡片
    const portfolioCards = document.querySelectorAll('.portfolio-card-click');

    const allBtn = document.querySelector('[data-filter="all"]');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    let activeFilters = new Set();

    // 點擊卡片動態塞入資料
    portfolioCards.forEach(card => {
        card.addEventListener('click', function () {
            const projectId = this.getAttribute('data-project-id');
            const project = projectsData[projectId];

            if (project) {
                // 1. 設定標題與 Youtube 按鈕連結
                modalTitle.textContent = project.title || "";
                
                const ytLink = project.youtubeUrl || project.youtubeLink;
                const githubLink = project.githubLink || project.githubUrl;
                const bahamuteLink = project.bahamuteLink || project.bahamuteUrl;
                const paperLink = project.paperLink || project.paperUrl;

                const anyLinkVisible = [ytLink, githubLink, bahamuteLink, paperLink].some(link => !!link);
                if (modalLinksSection) {
                    modalLinksSection.style.display = anyLinkVisible ? "" : "none";
                }

                if (modalYoutubeBtn) {
                    if (ytLink) {
                        modalYoutubeBtn.href = ytLink;
                        modalYoutubeBtn.style.display = "inline-block";
                    } else {
                        modalYoutubeBtn.style.display = "none";
                    }
                }

                if (modalGithubBtn) {
                    if (githubLink) {
                        modalGithubBtn.href = githubLink;
                        modalGithubBtn.style.display = "inline-block";
                    } else {
                        modalGithubBtn.style.display = "none";
                    }
                }

                if (modalBahamuteBtn) {
                    if (bahamuteLink) {
                        modalBahamuteBtn.href = bahamuteLink;
                        modalBahamuteBtn.style.display = "inline-block";
                    } else {
                        modalBahamuteBtn.style.display = "none";
                    }
                }

                if (modalPaperBtn) {
                    if (paperLink) {
                        modalPaperBtn.href = paperLink;
                        modalPaperBtn.style.display = "inline-block";
                    } else {
                        modalPaperBtn.style.display = "none";
                    }
                }

                // 2. 設定純文字區塊：開發心得
                if (modalProductName) modalProductName.textContent = project.productName || "";
                if (modalReflection) modalReflection.textContent = project.reflection || "";

                // 2.3 動態渲染【創作背景】- 支援分段
                if (modalCreationBackground && modalCreationBackgroundSection) {
                    modalCreationBackground.innerHTML = "";
                    if (project.creationBackground) {
                        modalCreationBackgroundSection.style.display = "";
                        if (typeof project.creationBackground === 'string') {
                            // 如果是字符串，直接顯示
                            const p = document.createElement('p');
                            p.classList.add('mb-3');
                            p.style.textAlign = "justify";
                            p.textContent = project.creationBackground;
                            modalCreationBackground.appendChild(p);
                        } else if (Array.isArray(project.creationBackground)) {
                            // 如果是陣列，遍歷並渲染每個段落
                            project.creationBackground.forEach(paragraph => {
                                const p = document.createElement('p');
                                p.classList.add('mb-0');
                                p.style.textAlign = "justify";
                                p.textContent = paragraph;
                                modalCreationBackground.appendChild(p);
                            });
                        }
                    } else {
                        modalCreationBackgroundSection.style.display = "none";
                    }
                }

                // 2.5 動態渲染【售價&收入】- 支援分段
                if (modalPriceRevenue && modalPriceRevenueSection) {
                    modalPriceRevenue.innerHTML = "";
                    if (project.priceRevenue) {
                        modalPriceRevenueSection.style.display = "";
                        if (typeof project.priceRevenue === 'string') {
                            // 如果是字符串，直接顯示
                            const p = document.createElement('p');
                            p.classList.add('mb-3');
                            p.style.textAlign = "justify";
                            p.textContent = project.priceRevenue;
                            modalPriceRevenue.appendChild(p);
                        } else if (Array.isArray(project.priceRevenue)) {
                            // 如果是陣列，遍歷並依據類型渲染
                            project.priceRevenue.forEach(item => {
                                if (typeof item === 'string') {
                                    // 字符串：普通段落
                                    const p = document.createElement('p');
                                    p.classList.add('mb-0');
                                    p.style.textAlign = "justify";
                                    p.textContent = item;
                                    modalPriceRevenue.appendChild(p);
                                } else if (typeof item === 'object' && item.title && item.items) {
                                    // 對象 {title, items}：標題+列表
                                    const titleElem = document.createElement('p');
                                    titleElem.classList.add('fw-bold', 'mb-0', 'mt-3');
                                    titleElem.textContent = item.title;
                                    modalPriceRevenue.appendChild(titleElem);

                                    const ul = document.createElement('ul');
                                    ul.classList.add('mb-3');
                                    item.items.forEach(itemText => {
                                        const li = document.createElement('li');
                                        li.textContent = itemText;
                                        ul.appendChild(li);
                                    });
                                    modalPriceRevenue.appendChild(ul);
                                }
                            });
                        }
                    } else {
                        modalPriceRevenueSection.style.display = "none";
                    }
                }

                // 3. 動態渲染【故事背景】- 支援分段
                if (modalBgStoriesContainer && modalBgStoriesSection) {
                    modalBgStoriesContainer.innerHTML = "";
                    if (project.story && project.story.length > 0) {
                        modalBgStoriesSection.style.display = "";
                        project.story.forEach(story => {
                            // 處理純字符串（不需要subtitle）
                            if (typeof story === 'string') {
                                const p = document.createElement('p');
                                p.classList.add('mb-3');
                                p.style.textAlign = "justify";
                                p.textContent = story;
                                modalBgStoriesContainer.appendChild(p);
                                return;
                            }

                            // 處理物件 {subtitle, text}
                            if (story.subtitle) {
                                const h6 = document.createElement('h6');
                                h6.classList.add('fw-bold', 'mt-3', 'mb-1');
                                h6.textContent = story.subtitle;
                                modalBgStoriesContainer.appendChild(h6);
                            }

                            // 支援 text 為字符串或數組
                            if (Array.isArray(story.text)) {
                                // 如果是陣列，遍歷每個段落
                                story.text.forEach(paragraph => {
                                    const p = document.createElement('p');
                                    p.classList.add('mb-0');
                                    p.style.textAlign = "justify";
                                    p.textContent = paragraph;
                                    modalBgStoriesContainer.appendChild(p);
                                });
                            } else if (story.text) {
                                // 如果是字符串，直接顯示
                                const p = document.createElement('p');
                                p.classList.add('mb-3');
                                p.style.textAlign = "justify";
                                p.textContent = story.text;
                                modalBgStoriesContainer.appendChild(p);
                            }
                        });
                    } else {
                        modalBgStoriesSection.style.display = "none";
                    }
                }

                // 3.2 動態渲染【遊戲玩法】- 支援分段及小標題
                if (modalGameplay && modalGameplaySection) {
                    modalGameplay.innerHTML = "";
                    if (project.gameplay) {
                        modalGameplaySection.style.display = "";
                        if (typeof project.gameplay === 'string') {
                            // 如果是字符串，直接顯示
                            const p = document.createElement('p');
                            p.classList.add('mb-3');
                            p.style.textAlign = "justify";
                            p.textContent = project.gameplay;
                            modalGameplay.appendChild(p);
                        } else if (Array.isArray(project.gameplay)) {
                            // 如果是陣列，遍歷並依據類型渲染
                            project.gameplay.forEach(item => {
                                if (typeof item === 'string') {
                                    // 字符串：普通段落
                                    const p = document.createElement('p');
                                    p.classList.add('mb-0');
                                    p.style.textAlign = "justify";
                                    p.textContent = item;
                                    modalGameplay.appendChild(p);
                                } else if (typeof item === 'object' && item.title && item.items) {
                                    // 對象 {title, items}：標題+列表
                                    const titleElem = document.createElement('p');
                                    titleElem.classList.add('fw-bold', 'mb-0', 'mt-3');
                                    titleElem.textContent = item.title;
                                    modalGameplay.appendChild(titleElem);

                                    const ul = document.createElement('ul');
                                    ul.classList.add('mb-3');
                                    item.items.forEach(itemText => {
                                        const li = document.createElement('li');
                                        li.textContent = itemText;
                                        ul.appendChild(li);
                                    });
                                    modalGameplay.appendChild(ul);
                                } else if (typeof item === 'object' && item.text) {
                                    // 對象 {text}：普通段落
                                    const p = document.createElement('p');
                                    p.classList.add('mb-0');
                                    p.style.textAlign = "justify";
                                    p.textContent = item.text;
                                    modalGameplay.appendChild(p);
                                }
                            });
                        }
                    } else {
                        modalGameplaySection.style.display = "none";
                    }
                }

                // 3.5 動態渲染【功能介紹】- 支援分段、標題與列表
                if (modalFunctionIntro && modalFunctionIntroSection) {
                    modalFunctionIntro.innerHTML = "";
                    if (project.functionIntro) {
                        modalFunctionIntroSection.style.display = "";
                        if (Array.isArray(project.functionIntro)) {
                            // 如果是陣列，遍歷並依據類型渲染
                            project.functionIntro.forEach(intro => {
                                if (typeof intro === 'string') {
                                    // 字符串：普通段落
                                    const p = document.createElement('p');
                                    p.classList.add('mb-3');
                                    p.style.textAlign = "justify";
                                    p.textContent = intro;
                                    modalFunctionIntro.appendChild(p);
                                } else if (typeof intro === 'object' && intro.title && intro.items) {
                                    // 對象 {title, items}：標題+列表
                                    const titleElem = document.createElement('p');
                                    titleElem.classList.add('fw-bold', 'mb-0', 'mt-3');
                                    titleElem.textContent = intro.title;
                                    modalFunctionIntro.appendChild(titleElem);

                                    const ul = document.createElement('ul');
                                    ul.classList.add('mb-3');
                                    intro.items.forEach(item => {
                                        const li = document.createElement('li');
                                        li.textContent = item;
                                        ul.appendChild(li);
                                    });
                                    modalFunctionIntro.appendChild(ul);
                                } else if (typeof intro === 'object' && intro.text) {
                                    // 對象 {text}：普通段落
                                    const p = document.createElement('p');
                                    p.classList.add('mb-3');
                                    p.style.textAlign = "justify";
                                    p.textContent = intro.text;
                                    modalFunctionIntro.appendChild(p);
                                }
                            });
                        } else if (typeof project.functionIntro === 'string') {
                            // 字符串：單行段落
                            const p = document.createElement('p');
                            p.classList.add('mb-4');
                            p.style.textAlign = "justify";
                            p.textContent = project.functionIntro;
                            modalFunctionIntro.appendChild(p);
                        }
                    } else {
                        modalFunctionIntroSection.style.display = "none";
                    }
                }

                // 4. 動態渲染【遊戲特色】
                if (modalProductNameSection) {
                    modalProductNameSection.style.display = project.productName ? "" : "none";
                }
                if (modalCreationBackgroundSection) {
                    modalCreationBackgroundSection.style.display = project.creationBackground ? "" : "none";
                }
                if (modalCreationToolsSection) {
                    modalCreationToolsSection.style.display = project.creationTools ? "" : "none";
                }
                if (modalPriceRevenueSection) {
                    modalPriceRevenueSection.style.display = project.priceRevenue ? "" : "none";
                }
                if (modalFunctionIntroSection) {
                    modalFunctionIntroSection.style.display = project.functionIntro ? "" : "none";
                }
                if (modalProductFeaturesSection) {
                    modalProductFeaturesSection.style.display = project.productFeatures ? "" : "none";
                }
                if (modalVideoAssetsSection) {
                    modalVideoAssetsSection.style.display = project.videoAssets ? "" : "none";
                }
                if (modalMusicAssetsSection) {
                    modalMusicAssetsSection.style.display = project.musicAssets ? "" : "none";
                }
                if (modalAiVideoSection) {
                    modalAiVideoSection.style.display = project.aiVideo ? "" : "none";
                }
                if (modalEditSoftwareSection) {
                    modalEditSoftwareSection.style.display = project.editSoftware ? "" : "none";
                }

                if (modalFeatures && modalFeaturesSection) {
                    modalFeatures.innerHTML = "";
                    if (project.features && project.features.length > 0) {
                        modalFeaturesSection.style.display = "";
                        project.features.forEach(feature => {
                            const li = document.createElement('li');
                            li.textContent = feature;
                            modalFeatures.appendChild(li);
                        });
                    } else {
                        modalFeaturesSection.style.display = "none";
                    }
                }
                if (modalPlugins && modalPluginsSection) {
                    modalPlugins.innerHTML = "";
                    if (project.plugins && project.plugins.length > 0) {
                        modalPluginsSection.style.display = "";
                        project.plugins.forEach(plugin => {
                            const li = document.createElement('li');
                            li.textContent = plugin;
                            modalPlugins.appendChild(li);
                        });
                    } else {
                        modalPluginsSection.style.display = "none";
                    }
                }

                // 5. 動態渲染列表項目【產品特色、創作工具、影片素材等】
                if (modalProductFeatures && modalProductFeaturesSection) {
                    modalProductFeatures.innerHTML = "";
                    if (project.productFeatures && project.productFeatures.length > 0) {
                        modalProductFeaturesSection.style.display = "";
                        project.productFeatures.forEach(feature => {
                            const li = document.createElement('li');
                            li.textContent = feature;
                            modalProductFeatures.appendChild(li);
                        });
                    } else {
                        modalProductFeaturesSection.style.display = "none";
                    }
                }

                if (modalCreationTools && modalCreationToolsSection) {
                    modalCreationTools.innerHTML = "";
                    if (project.creationTools && project.creationTools.length > 0) {
                        modalCreationToolsSection.style.display = "";
                        project.creationTools.forEach(tool => {
                            const li = document.createElement('li');
                            li.textContent = tool;
                            modalCreationTools.appendChild(li);
                        });
                    } else {
                        modalCreationToolsSection.style.display = "none";
                    }
                }

                if (modalVideoAssets && modalVideoAssetsSection) {
                    modalVideoAssets.innerHTML = "";
                    if (project.videoAssets && project.videoAssets.length > 0) {
                        modalVideoAssetsSection.style.display = "";
                        project.videoAssets.forEach(asset => {
                            const li = document.createElement('li');
                            li.textContent = asset;
                            modalVideoAssets.appendChild(li);
                        });
                    } else {
                        modalVideoAssetsSection.style.display = "none";
                    }
                }

                if (modalMusicAssets && modalMusicAssetsSection) {
                    modalMusicAssets.innerHTML = "";
                    if (project.musicAssets && project.musicAssets.length > 0) {
                        modalMusicAssetsSection.style.display = "";
                        project.musicAssets.forEach(asset => {
                            const li = document.createElement('li');
                            li.textContent = asset;
                            modalMusicAssets.appendChild(li);
                        });
                    } else {
                        modalMusicAssetsSection.style.display = "none";
                    }
                }

                if (modalAiVideo && modalAiVideoSection) {
                    modalAiVideo.innerHTML = "";
                    if (project.aiVideo && project.aiVideo.length > 0) {
                        modalAiVideoSection.style.display = "";
                        project.aiVideo.forEach(item => {
                            const li = document.createElement('li');
                            li.textContent = item;
                            modalAiVideo.appendChild(li);
                        });
                    } else {
                        modalAiVideoSection.style.display = "none";
                    }
                }

                if (modalEditSoftware && modalEditSoftwareSection) {
                    modalEditSoftware.innerHTML = "";
                    if (project.editSoftware && project.editSoftware.length > 0) {
                        modalEditSoftwareSection.style.display = "";
                        project.editSoftware.forEach(software => {
                            const li = document.createElement('li');
                            li.textContent = software;
                            modalEditSoftware.appendChild(li);
                        });
                    } else {
                        modalEditSoftwareSection.style.display = "none";
                    }
                }

                if (modalGameplaySection) {
                    modalGameplaySection.style.display = project.gameplay ? "" : "none";
                }
                if (modalReflectionSection) {
                    modalReflectionSection.style.display = project.reflection ? "" : "none";
                }

                // 6. 動態渲染【圖片輪播區】- 支援圖片、GIF 和 YouTube 嵌入
                if (indicatorsContainer && carouselInner) {
                    indicatorsContainer.innerHTML = "";
                    carouselInner.innerHTML = "";

                    const carouselControls = document.querySelectorAll('#dynamicCarousel .carousel-control-prev, #dynamicCarousel .carousel-control-next');

                    if (project.carouselImages && project.carouselImages.length > 0) {
                        const isSingleItem = project.carouselImages.length === 1;

                        // 根據是否只有單張，切換指示器容器與控制按鈕的顯示狀態
                        indicatorsContainer.style.display = isSingleItem ? "none" : "";
                        carouselControls.forEach(control => {
                            control.style.display = isSingleItem ? "none" : "";
                        });

                        project.carouselImages.forEach((item, index) => {
                            // 只有在多張圖片時，才需要渲染下方的指示器點點
                            if (!isSingleItem) {
                                const indicator = document.createElement('button');
                                indicator.type = "button";
                                indicator.setAttribute('data-bs-target', '#dynamicCarousel');
                                indicator.setAttribute('data-bs-slide-to', index);
                                if (index === 0) {
                                    indicator.classList.add('active');
                                    indicator.setAttribute('aria-current', 'true');
                                }
                                indicatorsContainer.appendChild(indicator);
                            }

                            const carouselItem = document.createElement('div');
                            carouselItem.classList.add('carousel-item');
                            if (index === 0) carouselItem.classList.add('active');

                            // 判斷媒體類型
                            if (typeof item === 'object' && item.type === 'youtube') {
                                // YouTube 嵌入
                                const iframe = document.createElement('iframe');
                                iframe.src = item.url;
                                iframe.classList.add('d-block', 'w-100', 'img-fluid');
                                iframe.style.aspectRatio = '16 / 9';
                                iframe.setAttribute('allowFullscreen', '');
                                iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
                                carouselItem.appendChild(iframe);
                            } else {
                                // 圖片或 GIF
                                const imgSrc = typeof item === 'string' ? item : item.url;
                                const img = document.createElement('img');
                                img.src = imgSrc;
                                img.classList.add('d-block', 'w-100', 'img-fluid'); 
                                img.alt = project.title || "Project Image";
                                carouselItem.appendChild(img);
                            }

                            carouselInner.appendChild(carouselItem);
                        });
                    } else {
                        // 如果完全沒有圖片，把控制項也都隱藏
                        indicatorsContainer.style.display = "none";
                        carouselControls.forEach(control => control.style.display = "none");
                    }
                }
            }
        });
    });

    // 💡 2. 修正：關閉燈箱時清除 href（如果是按鈕）或 src（如果是 iframe），並加上防呆
    const universalModalEl = document.getElementById('universalProjectModal');
    if (universalModalEl) {
        universalModalEl.addEventListener('hidden.bs.modal', function () {
            if (modalYoutubeBtn) {
                modalYoutubeBtn.href = "";
            }
        });
    }

    // --- 「全部」按鈕的邏輯 ---
    if (allBtn) {
        allBtn.addEventListener('click', function () {
            activeFilters.clear();
            filterBtns.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            applyFilters();
        });
    }

    // --- 分類按鈕的邏輯 ---
    filterBtns.forEach(button => {
        button.addEventListener('click', function () {
            const filter = this.getAttribute('data-filter');

            if (activeFilters.has(filter)) {
                activeFilters.delete(filter);
                this.classList.remove('active');
            } else {
                activeFilters.add(filter);
                this.classList.add('active');
            }

            if (activeFilters.size === 0 || activeFilters.size === filterBtns.length) {
                activeFilters.clear();
                filterBtns.forEach(btn => btn.classList.remove('active'));
                if (allBtn) allBtn.classList.add('active');
            } else {
                if (allBtn) allBtn.classList.remove('active');
            }

            applyFilters();
        });
    });

    function applyFilters() {
        portfolioItems.forEach(item => {
            if (activeFilters.size === 0) {
                item.style.display = 'block';
                return;
            }

            let isVisible = false;
            activeFilters.forEach(f => {
                if (item.classList.contains(f)) isVisible = true;
            });
            item.style.display = isVisible ? 'block' : 'none';
        });
    }
});
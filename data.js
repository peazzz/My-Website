// 可新增的資料欄位：
// carouselImages: 輪播圖片
// youtubeLink: Youtube連結
// githubLink: GitHub連結
// bahamuteLink: 巴哈姆特報導
// paperLink: 論文連結
// demoLink: Demo連結
// title: 專案標題
// productName: 產品名稱

// story: 故事背景
// gameplay: 遊戲玩法
// reflection: 開發心得
// creationBackground: 創作背景
// functionIntro: 功能介紹

// creationTools: 創作工具
// priceRevenue: 售價 & 收入
// videoAssets: 影片素材
// musicAssets: 音樂素材
// aiVideo: AI 影片生成
// editSoftware: 剪輯軟體 & 轉場效果

// productFeatures: 產品特色
// features: 遊戲特色
// plugins: 第三方套件或外部套件列表
// responsible: 負責項目

// technologies: 使用技術
const projectsData = {
    "project1": {
        title: "影片作品集 (2026/05)",

        carouselImages: [
            { type: 'youtube', url: 'https://www.youtube.com/embed/EYXsVJSOZk8?si=ypkovLJm-cIaeNJM' },
        ],
        videoAssets:[
            "爬塔塔",
            "Leave Me Alone",
            "You Shall Not Pass",
            "毛毛與BUBU",
            "AR創作平台",
            "AR雕刻工具",
            "MR互動繪本"
        ],
        musicAssets: [
            "Gaiety in the Golden Age - Aaron Kenny"
        ],
        aiVideo: [
            "Google Vids"
        ],
        editSoftware: [
            "Unity",
            "Premiere Pro 2019"
        ],
        responsible: [
            "素材錄製(含Google Vids)",
            "轉場效果(Unity、Premiere Pro)",
            "影片剪輯(Premiere Pro)"
        ]
    },
    "project2": {
        title: "MR互動繪本 (2024/03~2025/04, 2025/09~2026/02)",
        youtubeLink: "https://youtu.be/1KlCKZ9EN9c", //Youtube 連結

        carouselImages: [
            "img/webp/MR_Book_7.webp",
            "img/webp/MR_Book_2.webp",
            "img/webp/MR_Book_3.webp",
            "img/webp/MR_Book_4.webp",
            "img/webp/MR_Book_5.webp",
            "img/webp/MR_Book_6.webp"
        ],
        story: [
            {
                subtitle: "《阿婆的時光寶盒》",
                text: "阿婆與恩恩透過搭乘時光機回到過去，一一找回時光寶盒中珍藏的記憶精靈的旅程故事。認識客家祭儀的重要文化特色，並呈現客家族群在推動性別平權上所做的努力與祭儀文化的演變歷程。"
            },
            {
                subtitle: "《Guji Guji》",
                text: "一隻名叫Guji Guji的鱷魚因鴨媽媽的照顧下一直以為自己是隻鴨子，直到碰上三隻不懷好意的鱷魚，在經歷自我懷疑後，最終選擇擁抱自己的獨特性，成為一隻「鱷魚鴨」。"
            },
            {
                subtitle: "《小威的眼睛》",
                text: "一位名叫小威的男孩，他雖然看不見，但卻以獨特的方式感知世界。故事展現了視障孩子的生活情境，讓孩子們理解視障朋友的日常，並學會尊重和平等對待他們。"
            }
        ],
        gameplay:
            "主畫面提供「單一關卡」或「全篇繪本」兩種演出方式。操作方法主要利用手勢以及VR頭盔進行互動，少數關卡由VR手把操作。同時畫面結合虛擬手語老師，為手語使用者提供即時的說明與引導。",
        reflection:
            "算是我花最久時間在處理的專案，該專案主要分兩次進行開發，第一次是我還在碩一的時候，當時開發項目為《阿婆的時光寶盒》和《Guji Guji》，第二次是我剛碩士畢業，開發項目為《小威的眼睛》。不巧，剛碩士畢業的我很快就當兵了，導致開發的時間極度壓縮，每次放假幾乎沒有休息的時間，都在處理該專案，幸好有學弟願意幫忙開發，否則在結案前無法完成。 這兩次專案即使結案後，依然會根據遊玩體驗持續修正內容與Bug，為呈現最好的作品。",
        features: [
            "遊戲時間排行榜",
            "Socket.IO即時通訊架構",
            "Addressables資源管理"
        ],
        plugins: [
            "Meta XR All-in-One SDK",
            "socket.io-client-csharp(by doghappy)"
        ],
        responsible: [
            "程式撰寫(影片展示內容)",
            "水面特效(Shader)",
            "路線提示(Particle)",
            "串接Socket.IO",
            "Addressables資源管理"
        ]
    },
    "project3": {
        title: "AR雕刻工具 (2025/06~2025/07)",
        youtubeUrl: "https://youtu.be/ktRKj_eE0fA?si=bUyTwBxfwnJVntld",
        githubLink: "https://github.com/peazzz/ARTool_test",
        paperLink: "https://hdl.handle.net/11296/d687re",

        carouselImages: [
            "img/webp/AR_Tool_1.webp",
            "img/webp/AR_Tool_2.webp",
            "img/webp/AR_Tool_3.webp",
            "img/webp/AR_Tool_4.webp",
            "img/webp/AR_Tool_5.webp"
        ],
        functionIntro:
            "為碩士論文之AR工具，本工具主要提供雕刻、修補與上色等基礎建模功能；此外，使用者可於3D空間或平面上以線條(Line Renderer)進行繪製，亦能切換至粒子(Particle)筆刷進行動態效果的創作。",
        reflection:
            "為了在畢業前的有限時間內完成開發，過程中大量使用AI輔助程式撰寫，以提升開發效率。儘管該工具在程式架構、儲存系統等設計仍有改進空間，但最終順利趕在畢業之際完成開發並得以口試，同時感謝我的指導教授與口試委員。",
        productFeatures: [
            "簡單易用、直覺操作",
            "DTO紀錄模型狀態"
        ],
        plugins: [
            "AR Foundation",
            "Niantic Spatial SDK",
            "Unity Simple File Browser(by yasirkula)",
            "Unity Native Gallery(by yasirkula)",
            "Flexible Color Picker(by Ward Dehairs)",
            "AR-Drawing(by Rathod)"
        ],
        responsible: [
            "程式撰寫",
            "論文撰寫",
            "UI編排"
        ]
    },
    "project4": {
        title: "AR衛生教育 (2024/12~2025/05)",
        youtubeUrl: "https://youtu.be/jKjdNjArOqI?si=e2RMQeIAOoRBQVGL",

        carouselImages: [
            "img/webp/AR_HE_1.webp",
            "img/webp/AR_HE_2.webp",
            "img/webp/AR_HE_3.webp",
            "img/webp/AR_HE_4.webp"
        ],
        functionIntro:
            "開發於Android與iOS的AR醫療教育應用程式。 運用3D立體視覺化呈現心導管與乳癌的相關知識與構造，將醫療專業資訊轉化為易於理解的內容。",
        reflection:
            "開發過程中，印象比較深的是影片來源的取得。 最一開始是打算從Youtube上抓影片下來，但由於技術問題無法做到直接在unity顯示，所以改從Google雲端抓影片。 從Google雲端雖然可行，但影片撥放不流暢，最終還是連同影片打包進程式。",
        productFeatures: [
            "AR Foundation平面檢測(Plane Detection)",
            "透過Google Apps Script串接Google Sheets，計入乳癌QA各個單元的點擊次數",
            "Timeline 3D動畫"
        ],
        responsible: [
            "程式撰寫",
            "Google Sheets串接"
        ]
    },
    "project5": {
        title: "AR創作平台 (2023/11~)",
        youtubeUrl: "https://youtu.be/s4wV1jTPUqE?si=y8ICMEVq27lTkoKv",

        carouselImages: [
            "img/webp/AR_Platform_1.webp",
            "img/webp/AR_Platform_2.webp",
            "img/webp/AR_Platform_3.webp"
        ],
        functionIntro: [
            "使用Niantic VPS進行定位，完成定位後可進行AR創作，創作內容將永久保存。 創作工具主要提供畫3D線、留言、上傳圖片、聲音、3D模型，同時可對創作物件進行色彩與座標上的編輯。",
            {
                title: "後端(PC)AR內容創作：",
                items: [
                    "1.分策展人、藝術家、觀眾三種權限",
                    "2.可劃定不同創作區域",
                    "3.不同區域可賦予不同創作工具"
                ]
            },
            {
                title: "前端(Android、iOS)AR內容創作：",
                items: [
                    "1.可依策展人、藝術家、觀眾三種權限登入",
                    "2.不同區域有不同權限的創作工具"
                ]
            }
        ],
        reflection:
            "這項專案對我而言學到不少，不管是AR的技術應用還是功能開發，都花了相當的時間去了解與磨練。 從最初利用Google Apps Script串接Google Sheets作為資料庫，到後期導入Firebase進行後端整合，這段技術遷移與優化的過程，也讓我感受到與專案共同成長的踏實感。",
        productFeatures: [
            "AssetBundles動態載入模型",
            "JSON存取Firebase資料",
            "由多個定位地圖組成一個大地圖，提高AR定位速度"
        ],
        plugins: [
            "Niantic Spatial SDK",
            "Firebase",
            "Runtime Transform Handle(by pshtif)",
            "Unity Simple File Browser(by yasirkula)",
            "Flexible Color Picker(by Ward Dehairs)"
        ],
        responsible: [
            "程式撰寫",
            "定位地圖建立",
            "資源AssetBundle化",
            "Firebase串接",
            "技術報告撰寫"
        ]
    },
    "project6": {
        title: "You Shall Not Pass (2023/07)",
        youtubeUrl: "https://youtu.be/NWuz8SooNpE?si=sTmgHhPM0N4hYuXk",
        githubLink: "https://github.com/peazzz/2023GameJam_TeamC",
        demoLink: "https://drive.google.com/file/d/1BvikY_TZghz5lwAPB3hNjYd7lfV72zJ2/view?usp=sharing",

        carouselImages: [
            "img/webp/PC_GameJam2_1.webp",
            "img/webp/PC_GameJam2_2.webp",
            "img/webp/PC_GameJam2_3.webp",
            "img/webp/PC_GameJam2_4.webp"
        ],
        story: [
            "此為Game Jam作品，發想到完成共計3天。",
            {
                text: [
                    "遊戲題目供有三點，分別是：",
                    "1.操作只能用一顆按鈕",
                    "2.中世紀歐洲的美術風格",
                    "3.至少精雕一個3D動畫"
                ]
            }
        ],
        gameplay:
            "透過點擊空白鍵，形成相對應顏色的盾牌阻止敵人攻擊。",
        reflection:
            "與Leave Me Alone同樣只有三天的開發時間，但此次更耗費我的精力去處理遊戲內容。除了基本的遊戲運作外，為了豐富遊戲與滿足企劃的需求，也處理了不少Animation以及效果(村民回饋、教學角色)。",
        features: [
            "2D與3D結合的遊戲體驗",
            "OneButton遊戲操作"
        ],
        responsible: [
            "程式撰寫(除結尾)",
            "燈光效果(Light)",
            "轉場運鏡(Animation)"
        ]
    },
    "project7": {
        title: "Leave Me Alone (2023/07)",
        youtubeUrl: "https://youtu.be/DgXuJA7vNWY?si=O2PpRqe1b9-uB7wM",
        githubLink: "https://github.com/peazzz/2023GameJam_TeamD",
        demoLink: "https://drive.google.com/file/d/1I9yFjIsp41_DafCXP6zNcIAKHyqCErlp/view?usp=sharing",

        carouselImages: [
            "img/webp/PC_GameJam1_1.webp",
            "img/webp/PC_GameJam1_2.webp",
            "img/webp/PC_GameJam1_3.webp"
        ],
        story: [
            "此為Game Jam作品，發想到完成共計3天。",
            "遊戲題目以「再一次」、「恢復」、「繼承」與「繼續」這四個題目中選擇展開。 最終遊戲以「被中斷，但我們會一直再開」作為主題進行開發。"
        ],
        gameplay:
            "玩家需交替敲擊鍵盤A、D鍵累積進度，過程中會有多樣化的隨機干擾事件，玩家必須同時利用滑鼠進行排除。 進度達成後，將結算並顯示本次的通關總耗時。",
        reflection:
            "這是我第一次參加Game Jam，也是目前為止讓我最有成就感且滿意的作品。 同時感謝當時的組員以及組長，得以在短短的三天內完成高品質的小遊戲。",
        features: [
            "2D與3D結合的遊戲體驗",
            "以計時器與switch語法觸發多樣化事件",
            "場景畫面效果(Post-Processing)"
        ],
        responsible: [
            "程式撰寫",
            "漏電特效(Particle System)"
        ]
    },
    "project8": {
        title: "毛毛與BUBU (2023/07~2023/10)",
        youtubeUrl: "https://youtu.be/6ciWyIw7j7g?si=hxPdeB7_j3m9-U7L",

        carouselImages: [
            "img/webp/PC_Butterfly_1.webp",
            "img/webp/PC_Butterfly_2.webp",
            "img/webp/PC_Butterfly_3.webp",
            "img/webp/PC_Butterfly_4.webp"
        ],
        story: [
            "今天在外面玩耍的毛毛發現了一個還未孵化的卵，便打算把他帶回家飼養，回到家發現家裡變的怪怪的，然後發現了一個奇怪的盒子...。"
        ],
        gameplay:
            "由許多小遊戲組成。以滑鼠點擊與拖曳的方式，進行解謎與探索蝴蝶的相關知識。也可透過「百科全書」閱覽過往獲取的蝴蝶知識",
        reflection:
            "大學畢業後跟指導教授接的第一項專案，需要在暑假期間完成。也多虧AI逐漸普及，得以協助我完成這項緊急的專案。",
        features: [
            "PlayerPrefs儲存玩家資料",
            "單例模式資源管理",
            "支援WebGL"
        ],
        responsible: [
            "程式撰寫",
            "首頁粉塵特效(Particle System)",
            "轉場運鏡(Animation)"
        ]
    },
    "project9": {
        title: "爬塔塔 (2022/03~2023/05)",
        youtubeUrl: "https://youtu.be/V-lfkk3TaBk?si=AGYILCGcRaOAwrb0",
        githubLink: "https://github.com/peazzz/Patata",
        bahamuteLink: "https://gnn.gamer.com.tw/detail.php?sn=250463",
        demoLink: "https://drive.google.com/file/d/1939KK1t5ZUftFtGM7aOnmmW4Bc-k1TZM/view?usp=sharing",

        carouselImages: [
            "img/webp/PC_Patata_1.webp",
            "img/webp/PC_Patata_2.webp",
            "img/webp/PC_Patata_3.webp",
            "img/webp/PC_Patata_4.webp"
        ],
        story: [
            "傳說神明在創造世界之後留下一顆供應這世界能量的寶珠。 有天怪物出現帶走了這顆寶珠並躲在高塔裡，從此世界缺少了生機。 有人提倡應該爬上塔頂奪寶珠，於是一位名叫「皮茲」的少年站了出來。"
        ],
        gameplay: [
            "2D平台遊戲，參考遊戲為Celeste，可進行單人或雙人遊玩。",
            {
                title: "單人模式：",
                items: [
                    "採雙角色切換機制。玩家需交互操作主角「皮茲」與助手「QQ」，利用各自的特性進行解謎與闖關。"
                ]
            },
            {
                title: "雙人模式：",
                items: [
                    "玩家A使用鍵盤扮演主角「皮茲」的行動，玩家B則以滑鼠控制「QQ」進行協助。雙方透過不同的操作邏輯，根據默契程度展現出1+1>2或1+1<2的效果。"
                ]
            }
        ],
        reflection:
            "此為畢業遊戲專題，因個人喜好與過往的遊戲經驗選擇2D平台遊戲作為開發方向。 但在遊戲開發階段的前中期都沒能跳脫出傳統的2D平台遊戲既有的玩法，因此也沒能受到青睞。 好在後期加入強調互助的雙人合作玩法，得以在放視大賞與新一代設計展的展出中受大眾喜愛，甚至收到企業名片與巴哈姆特專訪。",
        features: [
            "單雙人模式即時切換",
            "遊戲手感(土狼時間、跳躍緩衝、慣性)",
            "主角的披風布料效果(Cloth Component)",
            "場景畫面效果(Post-Processing)"
        ],
        responsible: [
            "程式撰寫",
            "衝刺、沙塵特效(Line Renderer、Particle System)",
            "披風布料效果(Cloth)",
            "轉場運鏡(Animation)",
            "燈光效果(Light)",
            "後處理(Post Processing)",
            "Tilemap關卡設計"
        ]
    },
    "project10": {
        title: "可愛小狗吉娃娃 (2025/05)",

        carouselImages: [
            "img/video/2D_Avatar1.gif"
        ],
        productName:
            "Cute little dog Chihuahua",
        creationBackground:
            "2025年4月時，Nexon宣布開放全球服MapleStory Worlds，當時全臺陷入了懷舊版楓之谷的風潮(Artale)。 受到這股風潮的影響，我也嘗試在MapleStory Worlds中創作屬於自己的2D紙娃娃，花費了約兩個禮拜的時間完成。",
        priceRevenue: [
            {
                title: "售價：",
                items: [
                    "100W(約台幣15元)。"
                ]
            },
            {
                title: "收入：",
                items: [
                    "0.175美金(約台幣5.5元)。"
                ]
            },
            "截至2026/05，目前收入超過100美金。"
        ],
        responsible: [
            "動作設計",
            "繪畫",
            "上架"
        ]
    },
    "project11": {
        title: "加油站 (2021/05)",

        carouselImages: [
            "img/webp/3D_GasStation.webp",
            "img/webp/3D_GasStation_AO.webp",
            "img/webp/3D_GasStation_Detail.webp"
        ],
        creationBackground:[
            "此為大學課堂作業，主題為建築物。",
            "本作品以《GTA 5》的加油站建築為參考對象，從建模、拆UV到上材質的3D建模實作。"
        ],
        creationTools: [
            "Maya 2020",
            "Substance"
        ],
        responsible: [
            "建模",
            "拆UV",
            "上材質"
        ]
    }
};
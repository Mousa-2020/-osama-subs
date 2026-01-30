// متغيرات لتتبع حالة الطلب
let currentOrder = {
    service: "",
    category: "",
    plan: "",
    billing: "",
    package: null
};

// بيانات Instagram
const instagramData = {
    followers: {
        title: "باقات المتابعين",
        description: "اختر الجنسية ثم اختر الباقة المناسبة",
        type: "category",
        categories: [
            { id: "saudi", name: "سعوديين %100", color: "#1a237e" },
            { id: "iraqi", name: "عراقيين %100", color: "#4fc3f7" },
            { id: "foreign", name: " أجانب وهميين", color: "#8e24aa" }
        ],
        packages: {
            saudi: [
                { id: "saudi_1k", name: "١٠٠٠ متابع", price: " 45$", featured: true },
                { id: "saudi_3k", name: "٣٠٠٠ متابع", price: "130$" },
                { id: "saudi_5k", name: "٥٠٠٠ متابع", price: "215$" },
                { id: "saudi_10k", name: "١٠٠٠٠ متابع", price: "400$" }
            ],
            iraqi: [
                { id: "iraqi_1k", name: "١٠٠٠ متابع", price: "15$", featured: true },
                { id: "iraqi_3k", name: "٣٠٠٠ متابع", price: "40$" },
                { id: "iraqi_5k", name: "٥٠٠٠ متابع", price: " 70$" },
                { id: "iraqi_10k", name: "١٠٠٠٠ متابع", price: "160$" }
            ],
            foreign: [
                { id: "foreign_1k", name: "١٠٠٠ متابع", price: "3$", featured: true },
                { id: "foreign_3k", name: "٣٠٠٠ متابع", price: "9$" },
                { id: "foreign_5k", name: "٥٠٠٠ متابع", price: "15$" },
                { id: "foreign_10k", name: "١٠٠٠٠ متابع", price: "29$" }
            ]
        }
    },
    likes: {
        title: "لايكات المنشورات",
        description: "اختر نوع اللايكات ثم اختر الباقة",
        type: "category",
        categories: [
            { id: "arabic", name: "عربية", color: "#E4405F" },
            { id: "foreign", name: "أجنبية", color: "#8e24aa" }
        ],
        packages: {
            arabic: [
                { id: "arabic_1k", name: "١٠٠٠ لايك", price: "4$" },
                { id: "arabic_2k", name: "٢٠٠٠ لايك", price: "8$", featured: true },
                { id: "arabic_5k", name: "٥٠٠٠ لايك", price: "20$" },
                { id: "arabic_10k", name: "١٠٠٠٠ لايك", price: "39$" }
            ],
            foreign: [
                { id: "foreign_1k", name: "١٠٠٠ لايك", price: "1.5$" },
                { id: "foreign_2k", name: "٢٠٠٠ لايك", price: "3$" },
                { id: "foreign_5k", name: "٥٠٠٠ لايك", price: "7$", featured: true },
                { id: "foreign_10k", name: "١٠٠٠٠ لايك", price: "10$" }
            ]
        }
    },
    comments: {
        title: "تعليقات المنشورات",
        description: "اختر نوع التعليقات ثم اختر الباقة",
        type: "category",
        categories: [
            { id: "arabic", name: "مخصصة", color: "#E4405F" },
            { id: "foreign", name: "أجنبية", color: "#8e24aa" }
        ],
        packages: {
            arabic: [
                { id: "arabic_1k", name: "١٠٠٠ تعليق", price: "7$" },
                { id: "arabic_2k", name: "٢٠٠٠ تعليق", price: "13$", featured: true },
                { id: "arabic_5k", name: "٥٠٠٠ تعليق", price: "33$" },
                { id: "arabic_10k", name: "١٠٠٠٠ تعليق", price: "60$" }
            ],
            foreign: [
                { id: "foreign_1k", name: "١٠٠٠ تعليق", price: "6$" },
                { id: "foreign_2k", name: "٢٠٠٠ تعليق", price: "12$" },
                { id: "foreign_5k", name: "٥٠٠٠ تعليق", price: "30$", featured: true },
                { id: "foreign_10k", name: "١٠٠٠٠ تعليق", price: "60$" }
            ]
        }
    },
    reels: {
        title: "مشاهدات الريلز",
        description: "اختر الباقة المناسبة لمشاهدات الريلز",
        type: "direct",
        packages: [
            { id: "reels_100k", name: "١٠٠٬٠٠٠ مشاهدة", price: "2$", featured: true },
            { id: "reels_500k", name: "٥٠٠٬٠٠٠ مشاهدة", price: "5$" },
            { id: "reels_1m", name: "١٬٠٠٠٬٠٠٠ مشاهدة", price: "10$" },
            { id: "reels_5m", name: "٥٬٠٠٠٬٠٠٠ مشاهدة", price: "25$" }
        ]
    },
    repost: {
        title: "إعادة نشر",
        description: "اختر الباقة المناسبة لإعادة النشر",
        type: "direct",
        packages: [
            { id: "repost_10k", name: "١٠٠٠ إعادة نشر", price: "2$", featured: true },
            { id: "repost_30k", name: "٣٠٠٠ إعادة نشر", price: "6$" },
            { id: "repost_50k", name: "٥٠٠٠ إعادة نشر", price: "9$" },
            { id: "repost_100k", name: "١٠٠٠٠ إعادة نشر", price: "15$" }
        ]
    },
    share: {
        title: "مشاركة المنشور",
        description: "اختر الباقة المناسبة للمشاركة",
        type: "direct",
        packages: [
            { id: "share_100k", name: "١٠٠٬٠٠٠ مشاركة", price: "3$", featured: true },
            { id: "share_500k", name: "٥٠٠٬٠٠٠ مشاركة", price: "10$" },
            { id: "share_1m", name: "١٬٠٠٠٬٠٠٠ مشاركة", price: "19$" }
        ]
    },
    verification: {
        title: "توثيق الحساب (العلامة الزرقاء)",
        description: "خدمة استشارية للمساعدة في تقديم طلب التوثيق",
        type: "contact",
        contactMessage: "أريد الاستفسار عن خدمة التوثيق (العلامة الزرقاء) على Instagram"
    }
};

// بيانات Facebook
const facebookData = {
    "fb-followers": {
        title: "متابعين صفحة Facebook",
        description: "اختر الجنسية ثم اختر الباقة المناسبة",
        type: "category",
        categories: [
            { id: "yemeni", name: "يمنيين", color: "#1877F2" },
            { id: "foreign", name: "أجانب", color: "#8e24aa" }
        ],
        packages: {
            yemeni: [
                { id: "yemeni_1k", name: "١٠٠٠ متابع", price: "9$", featured: true },
                { id: "yemeni_3k", name: "٣٠٠٠ متابع", price: "25" },
                { id: "yemeni_5k", name: "٥٠٠٠ متابع", price: "40$" },
                { id: "yemeni_10k", name: "١٠٠٠٠ متابع", price: "75$" }
            ],
            foreign: [
                { id: "foreign_1k", name: "١٠٠٠ متابع", price: "2.5$", featured: true },
                { id: "foreign_3k", name: "٣٠٠٠ متابع", price: "7$" },
                { id: "foreign_5k", name: "٥٠٠٠ متابع", price: "12$" },
                { id: "foreign_10k", name: "١٠٠٠٠ متابع", price: "22$" }
            ]
        }
    },
    "fb-likes": {
        title: "لايكات منشور Facebook",
        description: "اختر احد باقات اللايكات ",
        type: "category",
        categories: [
          //  { id: "arabic", name: "عربية", color: "#E4405F" },
            { id: "foreign", name: "أجنبية", color: "#8e24aa" }
        ],
        packages: {
          /*  arabic: [
                { id: "arabic_1k", name: "١٠٠٠ لايك", price: "" },
                { id: "arabic_2k", name: "٢٠٠٠ لايك", price: "", featured: true },
                { id: "arabic_5k", name: "٥٠٠٠ لايك", price: "" },
                { id: "arabic_10k", name: "١٠٠٠٠ لايك", price: "" }
            ],*/
            foreign: [
                { id: "foreign_1k", name: "١٠٠٠ لايك", price: "1.5$" },
                { id: "foreign_2k", name: "٢٠٠٠ لايك", price: "3$" },
                { id: "foreign_5k", name: "٥٠٠٠ لايك", price: "7$", featured: true },
                { id: "foreign_10k", name: "١٠٠٠٠ لايك", price: "14$" }
            ]
        }
    },
    "fb-comments": {
        title: "تعليقات منشور Facebook",
        description: "اختر نوع التعليقات ثم اختر الباقة",
        type: "category",
        categories: [
            { id: "arabic", name: "عربية", color: "#E4405F" },
            { id: "foreign", name: "أجنبية", color: "#8e24aa" }
        ],
        packages: {
            arabic: [
                { id: "arabic_1k", name: "١٠٠٠ تعليق", price: "10$" },
                { id: "arabic_2k", name: "٢٠٠٠ تعليق", price: "20$", featured: true },
                { id: "arabic_5k", name: "٥٠٠٠ تعليق", price: "50$" },
                { id: "arabic_10k", name: "١٠٠٠٠ تعليق", price: "100$" }
            ],
            foreign: [
                { id: "foreign_1k", name: "١٠٠٠ تعليق", price: "" },
                { id: "foreign_2k", name: "٢٠٠٠ تعليق", price: "" },
                { id: "foreign_5k", name: "٥٠٠٠ تعليق", price: "", featured: true },
                { id: "foreign_10k", name: "١٠٠٠٠ تعليق", price: "" }
            ]
        }
    },
    "fb-views": {
        title: "مشاهدات فيديو Facebook",
        description: "اختر الباقة المناسبة لمشاهدات الفيديو",
        type: "direct",
        packages: [
            { id: "views_100k", name: "١٠٠٬٠٠٠ مشاهدة", price: "", featured: true },
            { id: "views_500k", name: "٥٠٠٬٠٠٠ مشاهدة", price: "٩ دولار" },
            { id: "views_1m", name: "١٬٠٠٠٬٠٠٠ مشاهدة", price: "١٤ دولار" },
            { id: "views_5m", name: "٥٬٠٠٠٬٠٠٠ مشاهدة", price: "٣٥ دولار" }
        ]
    },
    "fb-verification": {
        title: "توثيق صفحة Facebook (العلامة الزرقاء)",
        description: "خدمة استشارية للمساعدة في توثيق صفحة الفيسبوك",
        type: "contact",
        contactMessage: "أريد الاستفسار عن خدمة التوثيق (العلامة الزرقاء) لصفحة Facebook"
    }
};

// بيانات TikTok
const tiktokData = {
    "tk-followers": {
        title: "متابعين TikTok",
        description: "اختر الباقة المناسبة لمتابعين عرب",
        type: "arab-only",
        packages: [
            { id: "arab_1k", name: "١٠٠٠ متابع", price: "١٥ دولار", featured: true },
            { id: "arab_2k", name: "٢٠٠٠ متابع", price: "٢٥ دولار" },
            { id: "arab_5k", name: "٥٠٠٠ متابع", price: "٥٠ دولار" },
            { id: "arab_10k", name: "١٠٠٠٠ متابع", price: "٩٠ دولار" },
            { id: "arab_25k", name: "٢٥٠٠٠ متابع", price: "٢٠٠ دولار" },
            { id: "arab_50k", name: "٥٠٠٠٠ متابع", price: "٣٥٠ دولار" }
        ]
    },
    "tk-likes": {
        title: "لايكات TikTok",
        description: "اختر الباقة المناسبة للايكات",
        type: "direct",
        packages: [
            { id: "likes_1k", name: "١٠٠٠ لايك", price: "٣ دولار", featured: true },
            { id: "likes_2k", name: "٢٠٠٠ لايك", price: "٥ دولار" },
            { id: "likes_5k", name: "٥٠٠٠ لايك", price: "١٠ دولار" },
            { id: "likes_10k", name: "١٠٠٠٠ لايك", price: "١٨ دولار" },
            { id: "likes_25k", name: "٢٥٠٠٠ لايك", price: "٤٠ دولار" },
            { id: "likes_50k", name: "٥٠٠٠٠ لايك", price: "٧٠ دولار" }
        ]
    },
    "tk-comments": {
        title: "تعليقات TikTok",
        description: "اختر الباقة المناسبة للتعليقات",
        type: "direct",
        packages: [
            { id: "comments_1k", name: "١٠٠٠ تعليق", price: "٢٥ دولار", featured: true },
            { id: "comments_2k", name: "٢٠٠٠ تعليق", price: "٤٠ دولار" },
            { id: "comments_5k", name: "٥٠٠٠ تعليق", price: "٨٥ دولار" },
            { id: "comments_10k", name: "١٠٠٠٠ تعليق", price: "١٦٠ دولار" },
            { id: "comments_25k", name: "٢٥٠٠٠ تعليق", price: "٣٥٠ دولار" },
            { id: "comments_50k", name: "٥٠٠٠٠ تعليق", price: "٦٥٠ دولار" }
        ]
    },
    "tk-views": {
        title: "مشاهدات TikTok",
        description: "اختر الباقة المناسبة للمشاهدات",
        type: "direct",
        packages: [
            { id: "views_100k", name: "١٠٠٬٠٠٠ مشاهدة", price: "٥ دولار", featured: true },
            { id: "views_500k", name: "٥٠٠٬٠٠٠ مشاهدة", price: "٨ دولار" },
            { id: "views_1m", name: "١٬٠٠٠٬٠٠٠ مشاهدة", price: "١٢ دولار" },
            { id: "views_5m", name: "٥٬٠٠٠٬٠٠٠ مشاهدة", price: "٣٠ دولار" }
        ]
    },
    "tk-shares": {
        title: "مشاركات TikTok",
        description: "اختر الباقة المناسبة للمشاركات",
        type: "direct",
        packages: [
            { id: "shares_100k", name: "١٠٠٬٠٠٠ مشاركة", price: "٦ دولار", featured: true },
            { id: "shares_500k", name: "٥٠٠٬٠٠٠ مشاركة", price: "١٠ دولار" },
            { id: "shares_1m", name: "١٬٠٠٠٬٠٠٠ مشاركة", price: "١٥ دولار" },
            { id: "shares_5m", name: "٥٬٠٠٠٬٠٠٠ مشاركة", price: "٤٠ دولار" }
        ]
    },
    "tk-consultation": {
        title: "استشارة نمو حساب TikTok",
        description: "خدمة استشارية متخصصة لتحسين ونمو حسابك على TikTok",
        type: "contact",
        contactMessage: "أريد الاستفسار عن خدمة استشارة نمو حساب TikTok"
    }
};

// بيانات اشتراكات تشات
const chatData = {
    go: {
        name: "جو (Go)",
        monthly: { price: "٢٥ دولار", description: "اشتراك شهري" },
        yearly: { price: "٢٠٠ دولار", description: "اشتراك سنوي", save: "وفر ٤٠ دولار" }
    },
    plus: {
        name: "بلس (Plus)",
        monthly: { price: "٥٠ دولار", description: "اشتراك شهري" },
        yearly: { price: "٤٠٠ دولار", description: "اشتراك سنوي", save: "وفر ٢٠٠ دولار" }
    },
    pro: {
        name: "برو (Pro)",
        monthly: { price: "١٠٠ دولار", description: "اشتراك شهري" },
        yearly: { price: "٨٠٠ دولار", description: "اشتراك سنوي", save: "وفر ٤٠٠ دولار" }
    },
    business: {
        name: "بزنس (Business)",
        monthly: { price: "٢٠٠ دولار", description: "اشتراك شهري" },
        yearly: { price: "١٦٠٠ دولار", description: "اشتراك سنوي", save: "وفر ٨٠٠ دولار" }
    }
};

// بيانات اشتراكات جيمناي
const geminiData = {
    basic: {
        name: "الأساسية",
        type: "monthly-only",
        price: "٥٠ دولار",
        description: "اشتراك شهري - 1000 طلب/شهر"
    },
    advanced: {
        name: "المتقدمة",
        type: "monthly-only", 
        price: "٨٠ دولار",
        description: "اشتراك شهري - 5000 طلب/شهر"
    },
    pro: {
        name: "برو (Pro)",
        type: "yearly-only",
        price: "١٠٠٠ دولار",
        description: "اشتراك سنوي - طلب غير محدود",
        save: "وفر ٢٠٠ دولار"
    },
    ultra: {
        name: "التري (Ultra)",
        type: "monthly-only",
        price: "٣٠٠ دولار",
        description: "اشتراك شهري - طلب غير محدود + دعم مخصص"
    }
};

// وظائف التحكم الأساسية
function setupNavigation() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
        });
    }
    
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                mainNav.classList.remove('active');
            }
        });
    });
}

// وظائف Instagram
function setupInstagramSection() {
    const mainContent = document.getElementById('main-content');
    const instagramSection = document.getElementById('instagram-section');
    const backToMainBtn = document.querySelector('.back-to-main');
    const subserviceCards = instagramSection.querySelectorAll('.subservice-card');
    
    function showInstagramSection() {
        mainContent.classList.add('hidden');
        instagramSection.classList.remove('hidden');
        window.scrollTo(0, 0);
    }
    
    function showMainContent() {
        instagramSection.classList.add('hidden');
        mainContent.classList.remove('hidden');
        window.scrollTo(0, 0);
        document.getElementById('instagram-detail').classList.add('hidden');
        instagramSection.querySelector('.subservices-grid').classList.remove('hidden');
    }
    
    function handleSubserviceClick(serviceId) {
        currentOrder.service = serviceId;
        const serviceData = instagramData[serviceId];
        
        if (!serviceData) return;
        
        instagramSection.querySelector('.subservices-grid').classList.add('hidden');
        const detailContainer = document.getElementById('instagram-detail');
        detailContainer.innerHTML = '';
        detailContainer.classList.remove('hidden');
        
        if (serviceData.type === 'contact') {
            buildContactService(serviceData, detailContainer);
        } else if (serviceData.type === 'category') {
            buildCategoryService(serviceData, detailContainer);
        } else {
            buildDirectPackages(serviceData, detailContainer);
        }
        
        const backBtn = document.createElement('button');
        backBtn.className = 'back-to-services';
        backBtn.innerHTML = '<i class="fas fa-arrow-right"></i> العودة لقائمة الخدمات';
        backBtn.addEventListener('click', function() {
            detailContainer.classList.add('hidden');
            instagramSection.querySelector('.subservices-grid').classList.remove('hidden');
            window.scrollTo(0, 0);
        });
        detailContainer.appendChild(backBtn);
        
        window.scrollTo(0, 0);
    }
    
    function buildCategoryService(serviceData, container) {
        const header = document.createElement('div');
        header.className = 'detail-header';
        header.innerHTML = `<h3>${serviceData.title}</h3><p>${serviceData.description}</p>`;
        container.appendChild(header);
        
        const categoriesDiv = document.createElement('div');
        categoriesDiv.className = 'categories-buttons';
        
        serviceData.categories.forEach(category => {
            const btn = document.createElement('button');
            btn.className = 'category-btn';
            btn.textContent = category.name;
            btn.dataset.category = category.id;
            btn.style.borderColor = category.color;
            
            btn.addEventListener('click', function() {
                container.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                currentOrder.category = category.id;
                showPackages(serviceData.packages[category.id], container, category.name);
            });
            
            categoriesDiv.appendChild(btn);
        });
        
        container.appendChild(categoriesDiv);
        
        if (serviceData.categories.length > 0) {
            const firstBtn = categoriesDiv.querySelector('.category-btn');
            firstBtn.click();
        }
    }
    
    function showPackages(packages, container, categoryName) {
        const oldPackages = container.querySelector('.packages-grid');
        if (oldPackages) oldPackages.remove();
        
        if (!packages || packages.length === 0) return;
        
        const packagesGrid = document.createElement('div');
        packagesGrid.className = 'packages-grid';
        
        packages.forEach(pkg => {
            const packageCard = document.createElement('div');
            packageCard.className = `package-card ${pkg.featured ? 'featured' : ''}`;
            
            packageCard.innerHTML = `
                ${pkg.featured ? '<div class="package-badge">الأكثر طلباً</div>' : ''}
                <h4 class="package-title">${pkg.name}</h4>
                <div class="package-price">${pkg.price}</div>
                <button class="select-package-btn" data-package='${JSON.stringify(pkg)}'>
                    اختر هذه الباقة
                </button>
            `;
            
            const selectBtn = packageCard.querySelector('.select-package-btn');
            selectBtn.addEventListener('click', function() {
                const pkgData = JSON.parse(this.dataset.package);
                currentOrder.package = pkgData;
                completeOrder();
            });
            
            packagesGrid.appendChild(packageCard);
        });
        
        const backBtn = container.querySelector('.back-to-services');
        container.insertBefore(packagesGrid, backBtn);
    }
    
    function buildDirectPackages(serviceData, container) {
        const header = document.createElement('div');
        header.className = 'detail-header';
        header.innerHTML = `<h3>${serviceData.title}</h3><p>${serviceData.description}</p>`;
        container.appendChild(header);
        
        if (serviceData.packages && serviceData.packages.length > 0) {
            showPackages(serviceData.packages, container, "");
        }
    }
    
    function buildContactService(serviceData, container) {
        const header = document.createElement('div');
        header.className = 'detail-header';
        header.innerHTML = `
            <h3>${serviceData.title}</h3>
            <p>${serviceData.description}</p>
            <div style="margin-top: 20px; padding: 20px; background-color: #f0f9ff; border-radius: 10px;">
                <p style="color: var(--color-navy); margin-bottom: 15px;">
                    <i class="fas fa-info-circle"></i> هذه خدمة استشارية. للمناقشة والتسعير، يرجى التواصل معنا مباشرة.
                </p>
                <button id="contact-consultation-btn" class="select-package-btn" style="max-width: 300px;">
                    <i class="fab fa-whatsapp"></i> تواصل معنا للاستفسار
                </button>
            </div>
        `;
        
        container.appendChild(header);
        
        document.getElementById('contact-consultation-btn').addEventListener('click', function() {
            const message = encodeURIComponent(serviceData.contactMessage);
            const whatsappUrl = `https:///967776440357?text=${message}`;
            window.open(whatsappUrl, '_blank');
        });
    }
    
    function completeOrder() {
        if (!currentOrder.service || !currentOrder.package) return;
        
        const serviceName = instagramData[currentOrder.service].title;
        const packageName = currentOrder.package.name;
        const packagePrice = currentOrder.package.price;
        
        let message = `أريد شراء الخدمة التالية من LAZAROS STORE:%0A%0A`;
        message += `📱 *الخدمة:* ${serviceName}%0A`;
        
        if (currentOrder.category) {
            const categoryName = instagramData[currentOrder.service].categories
                .find(c => c.id === currentOrder.category).name;
            message += `🌍 *النوع:* ${categoryName}%0A`;
        }
        
        message += `📦 *الباقة:* ${packageName}%0A`;
        message += `💰 *السعر:* ${packagePrice}%0A%0A`;
        message += `---%0Aتم إرسال هذا الطلب عبر موقع LAZAROS STORE`;
        
        const whatsappUrl = `https:///967776440357?text=${message}`;
        window.open(whatsappUrl, '_blank');
        
        setTimeout(() => {
            currentOrder = { service: "", category: "", package: null };
            showMainContent();
        }, 2000);
    }
    
    document.querySelectorAll('[data-section="instagram"]').forEach(element => {
        element.addEventListener('click', function(e) {
            e.preventDefault();
            showInstagramSection();
        });
    });
    
    backToMainBtn.addEventListener('click', showMainContent);
    subserviceCards.forEach(card => {
        card.addEventListener('click', function() {
            const serviceId = this.dataset.service;
            handleSubserviceClick(serviceId);
        });
    });
}

// وظائف Facebook
function setupFacebookSection() {
    const mainContent = document.getElementById('main-content');
    const facebookSection = document.getElementById('facebook-section');
    const backToMainBtn = document.querySelector('[data-back="facebook"]');
    const subserviceCards = facebookSection.querySelectorAll('.subservice-card');
    
    function showFacebookSection() {
        mainContent.classList.add('hidden');
        facebookSection.classList.remove('hidden');
        window.scrollTo(0, 0);
    }
    
    function showMainContentFromFB() {
        facebookSection.classList.add('hidden');
        mainContent.classList.remove('hidden');
        window.scrollTo(0, 0);
        document.getElementById('facebook-detail').classList.add('hidden');
        facebookSection.querySelector('.subservices-grid').classList.remove('hidden');
    }
    
    function handleFBSubserviceClick(serviceId) {
        currentOrder.service = serviceId;
        const serviceData = facebookData[serviceId];
        
        if (!serviceData) return;
        
        facebookSection.querySelector('.subservices-grid').classList.add('hidden');
        const detailContainer = document.getElementById('facebook-detail');
        detailContainer.innerHTML = '';
        detailContainer.classList.remove('hidden');
        
        if (serviceData.type === 'contact') {
            buildContactService(serviceData, detailContainer);
        } else if (serviceData.type === 'category') {
            buildFBCategoryService(serviceData, detailContainer);
        } else {
            buildFBDirectPackages(serviceData, detailContainer);
        }
        
        const backBtn = document.createElement('button');
        backBtn.className = 'back-to-services';
        backBtn.innerHTML = '<i class="fas fa-arrow-right"></i> العودة لقائمة الخدمات';
        backBtn.addEventListener('click', function() {
            detailContainer.classList.add('hidden');
            facebookSection.querySelector('.subservices-grid').classList.remove('hidden');
            window.scrollTo(0, 0);
        });
        detailContainer.appendChild(backBtn);
        
        window.scrollTo(0, 0);
    }
    
    function buildFBCategoryService(serviceData, container) {
        const header = document.createElement('div');
        header.className = 'detail-header';
        header.innerHTML = `<h3>${serviceData.title}</h3><p>${serviceData.description}</p>`;
        container.appendChild(header);
        
        const categoriesDiv = document.createElement('div');
        categoriesDiv.className = 'categories-buttons';
        
        serviceData.categories.forEach(category => {
            const btn = document.createElement('button');
            btn.className = 'category-btn';
            btn.textContent = category.name;
            btn.dataset.category = category.id;
            btn.style.borderColor = category.color;
            
            btn.addEventListener('click', function() {
                container.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                currentOrder.category = category.id;
                showFBPackages(serviceData.packages[category.id], container, category.name);
            });
            
            categoriesDiv.appendChild(btn);
        });
        
        container.appendChild(categoriesDiv);
        
        if (serviceData.categories.length > 0) {
            const firstBtn = categoriesDiv.querySelector('.category-btn');
            firstBtn.click();
        }
    }
    
    function buildFBDirectPackages(serviceData, container) {
        const header = document.createElement('div');
        header.className = 'detail-header';
        header.innerHTML = `<h3>${serviceData.title}</h3><p>${serviceData.description}</p>`;
        container.appendChild(header);
        
        if (serviceData.packages && serviceData.packages.length > 0) {
            showFBPackages(serviceData.packages, container, "");
        }
    }
    
    function showFBPackages(packages, container, categoryName) {
        const oldPackages = container.querySelector('.packages-grid');
        if (oldPackages) oldPackages.remove();
        
        if (!packages || packages.length === 0) return;
        
        const packagesGrid = document.createElement('div');
        packagesGrid.className = 'packages-grid';
        
        packages.forEach(pkg => {
            const packageCard = document.createElement('div');
            packageCard.className = `package-card ${pkg.featured ? 'featured' : ''}`;
            
            packageCard.innerHTML = `
                ${pkg.featured ? '<div class="package-badge">الأكثر طلباً</div>' : ''}
                <h4 class="package-title">${pkg.name}</h4>
                <div class="package-price">${pkg.price}</div>
                <button class="select-package-btn" data-package='${JSON.stringify(pkg)}'>
                    اختر هذه الباقة
                </button>
            `;
            
            const selectBtn = packageCard.querySelector('.select-package-btn');
            selectBtn.addEventListener('click', function() {
                const pkgData = JSON.parse(this.dataset.package);
                currentOrder.package = pkgData;
                completeFBOrder();
            });
            
            packagesGrid.appendChild(packageCard);
        });
        
        const backBtn = container.querySelector('.back-to-services');
        container.insertBefore(packagesGrid, backBtn);
    }
    
    function completeFBOrder() {
        if (!currentOrder.service || !currentOrder.package) return;
        
        const serviceName = facebookData[currentOrder.service].title;
        const packageName = currentOrder.package.name;
        const packagePrice = currentOrder.package.price;
        
        let message = `أريد شراء الخدمة التالية من LAZAROS STORE:%0A%0A`;
        message += `📱 *الخدمة:* ${serviceName} (Facebook)%0A`;
        
        if (currentOrder.category) {
            const categoryName = facebookData[currentOrder.service].categories
                .find(c => c.id === currentOrder.category).name;
            message += `🌍 *النوع:* ${categoryName}%0A`;
        }
        
        message += `📦 *الباقة:* ${packageName}%0A`;
        message += `💰 *السعر:* ${packagePrice}%0A%0A`;
        message += `---%0Aتم إرسال هذا الطلب عبر موقع LAZAROS STORE`;
        
        const whatsappUrl = `https:///+967776440357?text=${message}`;
        window.open(whatsappUrl, '_blank');
        
        setTimeout(() => {
            currentOrder = { service: "", category: "", package: null };
            showMainContentFromFB();
        }, 2000);
    }
    
    document.querySelectorAll('[data-section="facebook"]').forEach(element => {
        element.addEventListener('click', function(e) {
            e.preventDefault();
            showFacebookSection();
        });
    });
    
    backToMainBtn.addEventListener('click', showMainContentFromFB);
    subserviceCards.forEach(card => {
        card.addEventListener('click', function() {
            const serviceId = this.dataset.service;
            handleFBSubserviceClick(serviceId);
        });
    });
}

// وظائف TikTok
function setupTikTokSection() {
    const mainContent = document.getElementById('main-content');
    const tiktokSection = document.getElementById('tiktok-section');
    const backToMainBtn = document.querySelector('[data-back="tiktok"]');
    const subserviceCards = tiktokSection.querySelectorAll('.subservice-card');
    
    function showTikTokSection() {
        mainContent.classList.add('hidden');
        tiktokSection.classList.remove('hidden');
        window.scrollTo(0, 0);
    }
    
    function showMainContentFromTK() {
        tiktokSection.classList.add('hidden');
        mainContent.classList.remove('hidden');
        window.scrollTo(0, 0);
        document.getElementById('tiktok-detail').classList.add('hidden');
        tiktokSection.querySelector('.subservices-grid').classList.remove('hidden');
    }
    
    function handleTKSubserviceClick(serviceId) {
        currentOrder.service = serviceId;
        const serviceData = tiktokData[serviceId];
        
        if (!serviceData) return;
        
        tiktokSection.querySelector('.subservices-grid').classList.add('hidden');
        const detailContainer = document.getElementById('tiktok-detail');
        detailContainer.innerHTML = '';
        detailContainer.classList.remove('hidden');
        
        if (serviceData.type === 'contact') {
            buildContactService(serviceData, detailContainer);
        } else if (serviceData.type === 'arab-only') {
            buildTKArabOnlyService(serviceData, detailContainer);
        } else {
            buildTKDirectPackages(serviceData, detailContainer);
        }
        
        const backBtn = document.createElement('button');
        backBtn.className = 'back-to-services';
        backBtn.innerHTML = '<i class="fas fa-arrow-right"></i> العودة لقائمة الخدمات';
        backBtn.addEventListener('click', function() {
            detailContainer.classList.add('hidden');
            tiktokSection.querySelector('.subservices-grid').classList.remove('hidden');
            window.scrollTo(0, 0);
        });
        detailContainer.appendChild(backBtn);
        
        window.scrollTo(0, 0);
    }
    
    function buildTKArabOnlyService(serviceData, container) {
        const header = document.createElement('div');
        header.className = 'detail-header';
        header.innerHTML = `
            <h3>${serviceData.title}</h3>
            <p>${serviceData.description} <strong>(عرب)</strong></p>
        `;
        container.appendChild(header);
        
        if (serviceData.packages && serviceData.packages.length > 0) {
            showTKPackages(serviceData.packages, container);
        }
    }
    
    function buildTKDirectPackages(serviceData, container) {
        const header = document.createElement('div');
        header.className = 'detail-header';
        header.innerHTML = `<h3>${serviceData.title}</h3><p>${serviceData.description}</p>`;
        container.appendChild(header);
        
        if (serviceData.packages && serviceData.packages.length > 0) {
            showTKPackages(serviceData.packages, container);
        }
    }
    
    function showTKPackages(packages, container) {
        const oldPackages = container.querySelector('.packages-grid');
        if (oldPackages) oldPackages.remove();
        
        if (!packages || packages.length === 0) return;
        
        const packagesGrid = document.createElement('div');
        packagesGrid.className = 'packages-grid';
        
        packages.forEach(pkg => {
            const packageCard = document.createElement('div');
            packageCard.className = `package-card ${pkg.featured ? 'featured' : ''}`;
            
            packageCard.innerHTML = `
                ${pkg.featured ? '<div class="package-badge">الأكثر طلباً</div>' : ''}
                <h4 class="package-title">${pkg.name}</h4>
                <div class="package-price">${pkg.price}</div>
                <button class="select-package-btn" data-package='${JSON.stringify(pkg)}'>
                    اختر هذه الباقة
                </button>
            `;
            
            const selectBtn = packageCard.querySelector('.select-package-btn');
            selectBtn.addEventListener('click', function() {
                const pkgData = JSON.parse(this.dataset.package);
                currentOrder.package = pkgData;
                completeTKOrder();
            });
            
            packagesGrid.appendChild(packageCard);
        });
        
        const backBtn = container.querySelector('.back-to-services');
        container.insertBefore(packagesGrid, backBtn);
    }
    
    function completeTKOrder() {
        if (!currentOrder.service || !currentOrder.package) return;
        
        const serviceName = tiktokData[currentOrder.service].title;
        const packageName = currentOrder.package.name;
        const packagePrice = currentOrder.package.price;
        
        let message = `أريد شراء الخدمة التالية من LAZAROS STORE:%0A%0A`;
        message += `📱 *الخدمة:* ${serviceName} (TikTok)%0A`;
        
        if (currentOrder.service === 'tk-followers') {
            message += `🌍 *النوع:* عرب%0A`;
        }
        
        message += `📦 *الباقة:* ${packageName}%0A`;
        message += `💰 *السعر:* ${packagePrice}%0A%0A`;
        message += `---%0Aتم إرسال هذا الطلب عبر موقع LAZAROS STORE`;
        
        const whatsappUrl = `https:///+967776440357?text=${message}`;
        window.open(whatsappUrl, '_blank');
        
        setTimeout(() => {
            currentOrder = { service: "", category: "", package: null };
            showMainContentFromTK();
        }, 2000);
    }
    
    document.querySelectorAll('[data-section="tiktok"]').forEach(element => {
        element.addEventListener('click', function(e) {
            e.preventDefault();
            showTikTokSection();
        });
    });
    
    backToMainBtn.addEventListener('click', showMainContentFromTK);
    subserviceCards.forEach(card => {
        card.addEventListener('click', function() {
            const serviceId = this.dataset.service;
            handleTKSubserviceClick(serviceId);
        });
    });
}

// وظائف Chat
function setupChatSection() {
    const mainContent = document.getElementById('main-content');
    const chatSection = document.getElementById('chat-section');
    const backToMainBtn = document.querySelector('[data-back="chat"]');
    const selectPlanBtns = chatSection.querySelectorAll('.select-plan-btn');
    
    function showChatSection() {
        mainContent.classList.add('hidden');
        chatSection.classList.remove('hidden');
        window.scrollTo(0, 0);
    }
    
    function showMainContentFromChat() {
        chatSection.classList.add('hidden');
        mainContent.classList.remove('hidden');
        window.scrollTo(0, 0);
    }
    
    function handlePlanSelection(planId, billingType) {
        const plan = chatData[planId];
        if (!plan) return;
        
        const billing = plan[billingType];
        const billingText = billingType === 'monthly' ? 'شهري' : 'سنوي';
        
        currentOrder.service = "chat";
        currentOrder.plan = planId;
        currentOrder.billing = billingType;
        currentOrder.package = {
            name: `${plan.name} - ${billingText}`,
            price: billing.price
        };
        
        completeChatOrder();
    }
    
    function completeChatOrder() {
        if (!currentOrder.service || !currentOrder.package) return;
        
        const planName = chatData[currentOrder.plan].name;
        const packageName = currentOrder.package.name;
        const packagePrice = currentOrder.package.price;
        
        let message = `أريد شراء الخدمة التالية من LAZAROS STORE:%0A%0A`;
        message += `💬 *الخدمة:* اشتراك تشات%0A`;
        message += `📋 *الخطة:* ${planName}%0A`;
        message += `📅 *الفترة:* ${currentOrder.billing === 'monthly' ? 'شهري' : 'سنوي'}%0A`;
        message += `💰 *السعر:* ${packagePrice}%0A%0A`;
        message += `---%0Aتم إرسال هذا الطلب عبر موقع LAZAROS STORE`;
        
        const whatsappUrl = `https:///+967776440357?text=${message}`;
        window.open(whatsappUrl, '_blank');
        
        setTimeout(() => {
            currentOrder = { service: "", plan: "", billing: "", package: null };
            showMainContentFromChat();
        }, 2000);
    }
    
    document.querySelectorAll('[data-section="chat"]').forEach(element => {
        element.addEventListener('click', function(e) {
            e.preventDefault();
            showChatSection();
        });
    });
    
    backToMainBtn.addEventListener('click', showMainContentFromChat);
    
    selectPlanBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const priceOption = this.closest('.price-option');
            const planCard = this.closest('.chat-plan-card');
            
            const planId = planCard.dataset.plan;
            const billingType = priceOption.dataset.billing;
            
            handlePlanSelection(planId, billingType);
        });
    });
}

// وظائف Gemini
function setupGeminiSection() {
    const mainContent = document.getElementById('main-content');
    const geminiSection = document.getElementById('gemini-section');
    const backToMainBtn = document.querySelector('[data-back="gemini"]');
    const selectPlanBtns = geminiSection.querySelectorAll('.select-plan-btn');
    
    function showGeminiSection() {
        mainContent.classList.add('hidden');
        geminiSection.classList.remove('hidden');
        window.scrollTo(0, 0);
    }
    
    function showMainContentFromGemini() {
        geminiSection.classList.add('hidden');
        mainContent.classList.remove('hidden');
        window.scrollTo(0, 0);
    }
    
    function handleGeminiPlanSelection(planId) {
        const plan = geminiData[planId];
        if (!plan) return;
        
        let billingType = "";
        let billingText = "";
        
        if (plan.type === "monthly-only") {
            billingType = "monthly";
            billingText = "شهري";
        } else if (plan.type === "yearly-only") {
            billingType = "yearly";
            billingText = "سنوي";
        }
        
        currentOrder.service = "gemini";
        currentOrder.plan = planId;
        currentOrder.billing = billingType;
        currentOrder.package = {
            name: `${plan.name} - ${billingText}`,
            price: plan.price,
            description: plan.description
        };
        
        completeGeminiOrder();
    }
    
    function completeGeminiOrder() {
        if (!currentOrder.service || !currentOrder.package) return;
        
        const planName = geminiData[currentOrder.plan].name;
        const packageName = currentOrder.package.name;
        const packagePrice = currentOrder.package.price;
        const packageDesc = currentOrder.package.description;
        
        let message = `أريد شراء الخدمة التالية من LAZAROS STORE:%0A%0A`;
        message += `🤖 *الخدمة:* اشتراك Gemini%0A`;
        message += `📋 *الخطة:* ${planName}%0A`;
        message += `📅 *الفترة:* ${currentOrder.billing === 'monthly' ? 'شهري' : 'سنوي'}%0A`;
        message += `💰 *السعر:* ${packagePrice}%0A`;
        message += `📝 *التفاصيل:* ${packageDesc}%0A%0A`;
        message += `---%0Aتم إرسال هذا الطلب عبر موقع LAZAROS STORE`;
        
        const whatsappUrl = `https:///+967776440357?text=${message}`;
        window.open(whatsappUrl, '_blank');
        
        setTimeout(() => {
            currentOrder = { service: "", plan: "", billing: "", package: null };
            showMainContentFromGemini();
        }, 2000);
    }
    
    document.querySelectorAll('[data-section="gemini"]').forEach(element => {
        element.addEventListener('click', function(e) {
            e.preventDefault();
            showGeminiSection();
        });
    });
    
    backToMainBtn.addEventListener('click', showMainContentFromGemini);
    
    selectPlanBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const planCard = this.closest('.gemini-plan-card');
            const planId = planCard.dataset.plan;
            
            handleGeminiPlanSelection(planId);
        });
    });
}

// تهيئة الصفحة
document.addEventListener('DOMContentLoaded', function() {
    setupNavigation();
    setupInstagramSection();
    setupFacebookSection();
    setupTikTokSection();
    setupChatSection();
    setupGeminiSection();
});

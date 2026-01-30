// أضف هذا الكود داخل أو بعد دالة DOMContentLoaded

// بيانات Instagram (الأسعار الافتراضية - يمكنك تعديلها لاحقاً)
const instagramData = {
    followers: {
        title: "باقات المتابعين",
        description: "اختر الجنسية ثم اختر الباقة المناسبة",
        type: "category", // له تصنيفات فرعية
        categories: [
            { id: "saudi", name: "سعوديون", color: "#1a237e" },
            { id: "iraqi", name: "عراقيون", color: "#4fc3f7" },
            { id: "foreign", name: "أجانب", color: "#8e24aa" }
        ],
        packages: {
            saudi: [
                { id: "saudi_1k", name: "١٠٠٠ متابع", price: "٤٠ دولار", featured: true },
                { id: "saudi_3k", name: "٣٠٠٠ متابع", price: "١٠٠ دولار" },
                { id: "saudi_5k", name: "٥٠٠٠ متابع", price: "١٥٠ دولار" },
                { id: "saudi_10k", name: "١٠٠٠٠ متابع", price: "٢٨٠ دولار" }
            ],
            iraqi: [
                { id: "iraqi_1k", name: "١٠٠٠ متابع", price: "٢٥ دولار", featured: true },
                { id: "iraqi_3k", name: "٣٠٠٠ متابع", price: "٦٠ دولار" },
                { id: "iraqi_5k", name: "٥٠٠٠ متابع", price: "٩٠ دولار" },
                { id: "iraqi_10k", name: "١٠٠٠٠ متابع", price: "١٦٠ دولار" }
            ],
            foreign: [
                { id: "foreign_1k", name: "١٠٠٠ متابع", price: "١٥ دولار", featured: true },
                { id: "foreign_3k", name: "٣٠٠٠ متابع", price: "٣٥ دولار" },
                { id: "foreign_5k", name: "٥٠٠٠ متابع", price: "٥٠ دولار" },
                { id: "foreign_10k", name: "١٠٠٠٠ متابع", price: "٩٠ دولار" }
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
                { id: "arabic_1k", name: "١٠٠٠ لايك", price: "٢ دولار" },
                { id: "arabic_2k", name: "٢٠٠٠ لايك", price: "٣ دولار", featured: true },
                { id: "arabic_5k", name: "٥٠٠٠ لايك", price: "٦ دولار" },
                { id: "arabic_10k", name: "١٠٠٠٠ لايك", price: "١٠ دولار" }
            ],
            foreign: [
                { id: "foreign_1k", name: "١٠٠٠ لايك", price: "١.٥ دولار" },
                { id: "foreign_2k", name: "٢٠٠٠ لايك", price: "٢.٥ دولار" },
                { id: "foreign_5k", name: "٥٠٠٠ لايك", price: "٥ دولار", featured: true },
                { id: "foreign_10k", name: "١٠٠٠٠ لايك", price: "٨ دولار" }
            ]
        }
    },
    // ... يمكن إضافة بقية الخدمات (comments, reels, إلخ) بنفس الهيكل
    verification: {
        title: "توثيق الحساب (العلامة الزرقاء)",
        description: "خدمة استشارية للمساعدة في تقديم طلب التوثيق",
        type: "contact", // نوع خاص - يفتح نموذج تواصل مباشر
        contactMessage: "أريد الاستفسار عن خدمة التوثيق (العلامة الزرقاء) على Instagram"
    }
};

// متغيرات لتتبع حالة الطلب
let currentOrder = {
    service: "",
    category: "",
    package: null
};

// وظائف التحكم في واجهة Instagram
function setupInstagramSection() {
    const mainContent = document.getElementById('main-content');
    const instagramSection = document.getElementById('instagram-section');
    const backToMainBtn = document.querySelector('.back-to-main');
    const subserviceCards = document.querySelectorAll('.subservice-card');
    
    // الانتقال من الرئيسية إلى Instagram
    function showInstagramSection() {
        mainContent.classList.add('hidden');
        instagramSection.classList.remove('hidden');
        window.scrollTo(0, 0);
    }
    
    // العودة من Instagram إلى الرئيسية
    function showMainContent() {
        instagramSection.classList.add('hidden');
        mainContent.classList.remove('hidden');
        window.scrollTo(0, 0);
        // إعادة ضبط التفاصيل إذا كانت ظاهرة
        document.getElementById('instagram-detail').classList.add('hidden');
        document.querySelector('.subservices-grid').classList.remove('hidden');
    }
    
    // عند النقر على بطاقة خدمة فرعية
    function handleSubserviceClick(serviceId) {
        currentOrder.service = serviceId;
        const serviceData = instagramData[serviceId];
        
        if (!serviceData) return;
        
        // إخفاء قائمة الخدمات الفرعية
        document.querySelector('.subservices-grid').classList.add('hidden');
        
        // عرض تفاصيل الخدمة
        const detailContainer = document.getElementById('instagram-detail');
        detailContainer.innerHTML = '';
        detailContainer.classList.remove('hidden');
        
        // بناء واجهة الخدمة حسب نوعها
        if (serviceData.type === 'contact') {
            buildContactService(serviceData, detailContainer);
        } else if (serviceData.type === 'category') {
            buildCategoryService(serviceData, detailContainer);
        } else {
            buildDirectPackages(serviceData, detailContainer);
        }
        
        // إضافة زر العودة
        const backBtn = document.createElement('button');
        backBtn.className = 'back-to-services';
        backBtn.innerHTML = '<i class="fas fa-arrow-right"></i> العودة لقائمة الخدمات';
        backBtn.addEventListener('click', function() {
            detailContainer.classList.add('hidden');
            document.querySelector('.subservices-grid').classList.remove('hidden');
            window.scrollTo(0, 0);
        });
        detailContainer.appendChild(backBtn);
        
        window.scrollTo(0, 0);
    }
    
    // بناء واجهة الخدمات ذات التصنيفات (مثل المتابعين)
    function buildCategoryService(serviceData, container) {
        const header = document.createElement('div');
        header.className = 'detail-header';
        header.innerHTML = `
            <h3>${serviceData.title}</h3>
            <p>${serviceData.description}</p>
        `;
        container.appendChild(header);
        
        // أزرار التصنيفات
        const categoriesDiv = document.createElement('div');
        categoriesDiv.className = 'categories-buttons';
        
        serviceData.categories.forEach(category => {
            const btn = document.createElement('button');
            btn.className = 'category-btn';
            btn.textContent = category.name;
            btn.dataset.category = category.id;
            btn.style.borderColor = category.color;
            
            btn.addEventListener('click', function() {
                // إزالة النشط من جميع الأزرار
                document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
                // تفعيل الزر الحالي
                this.classList.add('active');
                // عرض باقات هذا التصنيف
                currentOrder.category = category.id;
                showPackages(serviceData.packages[category.id], container, category.name);
            });
            
            categoriesDiv.appendChild(btn);
        });
        
        container.appendChild(categoriesDiv);
        
        // تفعيل الزر الأول افتراضياً
        if (serviceData.categories.length > 0) {
            const firstBtn = categoriesDiv.querySelector('.category-btn');
            firstBtn.click();
        }
    }
    
    // عرض الباقات
    function showPackages(packages, container, categoryName) {
        // إزالة الباقات القديمة إذا كانت موجودة
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
            
            // إضافة مستمع الحدث للزر
            const selectBtn = packageCard.querySelector('.select-package-btn');
            selectBtn.addEventListener('click', function() {
                const pkgData = JSON.parse(this.dataset.package);
                currentOrder.package = pkgData;
                completeOrder();
            });
            
            packagesGrid.appendChild(packageCard);
        });
        
        // إدراج الباقات قبل زر العودة
        const backBtn = container.querySelector('.back-to-services');
        container.insertBefore(packagesGrid, backBtn);
    }
    
    // بناء واجهة الخدمات الاستشارية (مثل التوثيق)
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
        
        // زر التواصل
        document.getElementById('contact-consultation-btn').addEventListener('click', function() {
            const message = encodeURIComponent(serviceData.contactMessage);
            const whatsappUrl = `https://wa.me/00967776440357?text=${message}`;
            window.open(whatsappUrl, '_blank');
        });
    }
    
    // إكمال الطلب وفتح واتساب
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
        
        const whatsappUrl = `https://wa.me/00967776440357?text=${message}`;
        window.open(whatsappUrl, '_blank');
        
        // إعادة تعيين الطلب بعد ثانيتين
        setTimeout(() => {
            currentOrder = { service: "", category: "", package: null };
            showMainContent();
        }, 2000);
    }
    
    // ربط الأحداث
    // 1. عند النقر على "Instagram" من القائمة الرئيسية أو البطاقة
    document.querySelectorAll('[data-section="instagram"]').forEach(element => {
        element.addEventListener('click', function(e) {
            e.preventDefault();
            showInstagramSection();
        });
    });
    
    // 2. زر العودة للرئيسية
    backToMainBtn.addEventListener('click', showMainContent);
    
    // 3. بطاقات الخدمات الفرعية
    subserviceCards.forEach(card => {
        card.addEventListener('click', function() {
            const serviceId = this.dataset.service;
            handleSubserviceClick(serviceId);
        });
    });
}

// استدعاء الدالة بعد تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    // ... الكود السابق يبقى هنا
    
    // إعداد قسم Instagram
    setupInstagramSection();
});

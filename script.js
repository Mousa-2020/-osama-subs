// بيانات الأسعار (يمكنك تعديلها)
const prices = {
    "go": { 
        monthly: "٥٠,٠٠٠ دينار",
        yearly: "٤٠٠,٠٠٠ دينار"
    },
    "plus": { 
        monthly: "٧٥,٠٠٠ دينار", 
        yearly: "٦٠٠,٠٠٠ دينار"
    },
    "pro": { 
        monthly: "١٠٠,٠٠٠ دينار", 
        yearly: "٨٠٠,٠٠٠ دينار"
    },
    "ultra": { 
        monthly: "١٥٠,٠٠٠ دينار", 
        yearly: "١,٢٠٠,٠٠٠ دينار"
    }
};

// متغيرات لتتبع حالة الطلب
let currentOrder = {
    serviceType: "", // "chat", "instagram", "gemini"
    planType: "",    // نوع الاشتراك
    planName: "",    // اسم الاشتراك المعروض
    billingType: "", // "monthly", "yearly"
    price: "",       // السعر النهائي
    quantity: 1      // الكمية (لمتابعين الانستجرام)
};

// وظيفة الانتقال بين الأقسام
function switchSection(sectionId) {
    // إخفاء كل الأقسام
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active-section');
    });
    
    // إخفاء أقسام الفترة والنموذج إذا كانت ظاهرة
    document.getElementById('billing-section').classList.add('hidden-section');
    document.getElementById('order-form-section').classList.add('hidden-section');
    
    // إظهار القسم المطلوب
    document.getElementById(sectionId).classList.add('active-section');
    
    // تحديث القائمة النشطة في شريط التنقل
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === sectionId) {
            link.classList.add('active');
        }
    });
}

// تهيئة الموقع عند التحميل
document.addEventListener('DOMContentLoaded', function() {
    // إضافة مستمعي الأحداث لأزرار التنقل
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('data-section');
            switchSection(sectionId);
        });
    });
    
    // الانتقال للأقسام من الصفحة الرئيسية
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', function() {
            const sectionId = this.getAttribute('data-section');
            switchSection(sectionId);
        });
    });
    
    // اختيار اشتراك تشات
    document.querySelectorAll('.select-plan-btn').forEach(button => {
        button.addEventListener('click', function() {
            const planType = this.getAttribute('data-plan-type');
            const planName = this.getAttribute('data-plan-name');
            
            // حفظ بيانات الطلب
            currentOrder.serviceType = "chat";
            currentOrder.planType = planType;
            currentOrder.planName = planName;
            
            // تحديث واجهة اختيار الفترة
            document.getElementById('selected-plan-title').textContent = `لـ ${planName}`;
            
            // تعبئة الأسعار
            if (prices[planType]) {
                document.getElementById('price-monthly').textContent = prices[planType].monthly;
                document.getElementById('price-yearly').textContent = prices[planType].yearly;
            }
            
            // الانتقال لقسم اختيار الفترة
            document.querySelector('.active-section').classList.remove('active-section');
            document.getElementById('billing-section').classList.remove('hidden-section');
        });
    });
    
    // اختيار باقة انستجرام
    document.querySelectorAll('.select-insta-btn').forEach(button => {
        button.addEventListener('click', function() {
            const followers = this.getAttribute('data-followers');
            const price = this.getAttribute('data-price');
            
            // حفظ بيانات الطلب
            currentOrder.serviceType = "instagram";
            currentOrder.planType = "followers";
            currentOrder.planName = `${followers} متابع انستجرام`;
            currentOrder.price = `${price} دينار`;
            currentOrder.quantity = followers;
            
            // تحديث ملخص الطلب
            document.getElementById('order-summary-text').textContent = 
                `${followers} متابع انستجرام بسعر ${price} دينار`;
            
            // الانتقال مباشرة لنموذج الطلب (لا يوجد شهري/سنوي)
            document.querySelector('.active-section').classList.remove('active-section');
            document.getElementById('order-form-section').classList.remove('hidden-section');
        });
    });
    
    // اختيار اشتراك جيمناي
    document.querySelectorAll('.select-gemini-btn').forEach(button => {
        button.addEventListener('click', function() {
            const plan = this.getAttribute('data-plan');
            const planName = this.getAttribute('data-plan-name');
            const price = this.getAttribute('data-price');
            
            // حفظ بيانات الطلب
            currentOrder.serviceType = "gemini";
            currentOrder.planType = plan;
            currentOrder.planName = planName;
            currentOrder.price = `${price} دينار`;
            currentOrder.billingType = "monthly"; // جيمناي فقط شهري حسب التصميم
            
            // تحديث ملخص الطلب
            document.getElementById('order-summary-text').textContent = 
                `${planName} بسعر ${price} دينار شهرياً`;
            
            // الانتقال مباشرة لنموذج الطلب
            document.querySelector('.active-section').classList.remove('active-section');
            document.getElementById('order-form-section').classList.remove('hidden-section');
        });
    });
    
    // اختيار الفترة (شهري/سنوي) لاشتراكات التشات
    document.querySelectorAll('.select-billing-btn').forEach(button => {
        button.addEventListener('click', function() {
            const billingType = this.getAttribute('data-billing');
            const priceElement = this.closest('.billing-card').querySelector('.billing-price');
            const price = priceElement.textContent;
            
            // حفظ بيانات الطلب
            currentOrder.billingType = billingType;
            currentOrder.price = price;
            
            // بناء نص ملخص الطلب
            const billingText = billingType === 'monthly' ? 'شهري' : 'سنوي';
            document.getElementById('order-summary-text').textContent = 
                `${currentOrder.planName} - اشتراك ${billingText} بسعر ${price}`;
            
            // الانتقال لنموذج الطلب
            document.getElementById('billing-section').classList.add('hidden-section');
            document.getElementById('order-form-section').classList.remove('hidden-section');
        });
    });
    
    // العودة من اختيار الفترة لاختيار النوع
    document.getElementById('back-to-plans').addEventListener('click', function() {
        document.getElementById('billing-section').classList.add('hidden-section');
        document.getElementById('chat').classList.add('active-section');
    });
    
    // العودة من نموذج الطلب لاختيار الفترة
    document.getElementById('back-to-billing').addEventListener('click', function() {
        if (currentOrder.serviceType === "chat") {
            document.getElementById('order-form-section').classList.add('hidden-section');
            document.getElementById('billing-section').classList.remove('hidden-section');
        } else {
            // للخدمات الأخرى، العودة للقسم الخاص بها
            document.getElementById('order-form-section').classList.add('hidden-section');
            document.getElementById(currentOrder.serviceType).classList.add('active-section');
        }
    });
    
    // معالجة إرسال نموذج الطلب
    document.getElementById('final-order-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // جمع بيانات النموذج
        const name = document.getElementById('customer-name').value.trim();
        const phone = document.getElementById('customer-phone').value.trim();
        const notes = document.getElementById('customer-notes').value.trim();
        
        if (!name || !phone) {
            alert('الرجاء إدخال الاسم ورقم الهاتف');
            return;
        }
        
        // بناء رسالة الواتساب
        let whatsappMessage = `مرحبًا، أريد شراء الخدمة التالية:\n\n`;
        whatsappMessage += `📦 *الخدمة:* ${currentOrder.planName}\n`;
        
        if (currentOrder.serviceType === "chat") {
            const billingText = currentOrder.billingType === 'monthly' ? 'شهري' : 'سنوي';
            whatsappMessage += `📅 *الفترة:* اشتراك ${billingText}\n`;
        }
        
        whatsappMessage += `💰 *السعر:* ${currentOrder.price}\n`;
        whatsappMessage += `👤 *اسم العميل:* ${name}\n`;
        whatsappMessage += `📱 *رقم الواتساب:* ${phone}\n`;
        
        if (notes) {
            whatsappMessage += `📝 *ملاحظات إضافية:* ${notes}\n`;
        }
        
        whatsappMessage += `\n---\nتم إرسال هذا الطلب عبر موقع اشتراكات أسامة`;
        
        // ترميز الرسالة لعمل رابط واتساب
        const encodedMessage = encodeURIComponent(whatsappMessage);
        const whatsappNumber = "9647717538315"; // رقمك
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
        
        // فتح واتساب في نافذة جديدة
        window.open(whatsappURL, '_blank');
        
        // إظهار رسالة تأكيد
        alert('سيتم فتح واتساب لإرسال طلبك. تأكد من إرسال الرسالة.');
        
        // إعادة تعيين النموذج والعودة للصفحة الرئيسية بعد 3 ثواني
        setTimeout(() => {
            document.getElementById('final-order-form').reset();
            document.getElementById('order-form-section').classList.add('hidden-section');
            document.getElementById('home').classList.add('active-section');
            document.querySelector('.nav-link.active').classList.remove('active');
            document.querySelector('.nav-link[data-section="home"]').classList.add('active');
        }, 3000);
    });
    
    // تهيئة الصفحة لتبدأ بالصفحة الرئيسية
    switchSection('home');
});
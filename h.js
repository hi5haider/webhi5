(() => {
  "use strict";

  // ========== إعدادات SUPABASE ==========
  const SUPABASE_URL = "https://gwdkjgipbbwlaxfokkug.supabase.co";
  const SUPABASE_ANON_KEY = "sb_publishable_yuRVmCNAoDpzh5gde4kJzw_MFTIuuh7";

  const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  const strings = {
    en:{
      navShop:"Shop",navCategories:"Categories",navAbout:"About",cart:"Cart",eyebrow:"THE FUTURE, IN YOUR HANDS",heroTitle:'Make room for<br><span>better living.</span>',
      heroText:"Thoughtfully picked tech and everyday essentials, designed to make life feel a little more effortless.",explore:"Explore collection",trusted:"Loved by 2,400+ happy customers",curated:"Curated tech",madeForLife:"Made for real life",rating:"customer rating",
      benefitOne:"Thoughtfully picked",benefitOneText:"Only the good stuff",benefitTwo:"Fast delivery",benefitTwoText:"At your doorstep, quick",benefitThree:"Easy returns",benefitThreeText:"30 days, no stress",benefitFour:"Here for you",benefitFourText:"Real people, real help",
      shopEyebrow:"GOOD THINGS, RIGHT THIS WAY",shopTitle:'Find your next <span>favorite.</span>',search:"Search anything...",manageProducts:"Manage products",nothingFound:"Nothing found just yet",tryAnother:"Try another search or category.",
      newsletterEyebrow:"A LITTLE SOMETHING EXTRA",newsletterTitle:'Good tech. <span>Good inbox.</span>',newsletterText:"Get the occasional good thing: new drops, thoughtful picks, and offers worth opening.",email:"Your email address",subscribe:"Count me in ↗",newsletterFine:"No noise, ever. Unsubscribe whenever.",footerText:"A little more joy in every day.",
      yourBag:"YOUR LITTLE BAG",subtotal:"Subtotal",shippingNote:"Shipping and any applicable taxes are calculated at checkout.",checkout:"Continue to checkout ↗",adminAccess:"STORE MANAGEMENT",welcomeBack:"Welcome back.",loginHint:"Sign in with your Supabase admin account.",
      adminEmail:"Email address",adminPassword:"Password",adminSignInError:"Could not sign in. Check your email and password, then try again.",adminRoleRequired:"This account is not authorized to manage the store.",storeLoadError:"An error occurred while loading store data.",switchToArabic:"Switch to Arabic",switchToEnglish:"Switch to English",signIn:"Sign in ↗",storeControl:"STORE CONTROL",dashboard:"Dashboard",products:"Products",orders:"Orders",settings:"Store settings",addProduct:"+ Add product",
      editProduct:"Edit product",newProduct:"New product",productName:"Product name",nameArabic:"Arabic name (optional)",category:"Category",categoryArabic:"Arabic category (optional)",price:"Price",comparePrice:"Compare-at price (optional)",stock:"Stock quantity",image:"Product image",imageUrl:"Image URL (optional)",description:"Description",descriptionArabic:"Arabic description (optional)",
      saveProduct:"Save product",cancel:"Cancel",uploadHint:"Upload an image, or paste an image URL below. Images are resized and compressed before saving.",product:"Product",stockLabel:"Stock",actions:"Actions",edit:"Edit",delete:"Delete",sale:"Sale",all:"All",storeName:"Store name",storeNameArabic:"Arabic store name",logo:"Store logo",logoHint:"Upload a small square logo (optional).",saveSettings:"Save settings",
      productDetails:"PRODUCT DETAILS",inStock:"In stock",outOfStock:"Out of stock",addToCart:"Add to cart",
      productsTotal:"Products",orderCount:"Orders",inventoryValue:"Inventory value",noProducts:"No products yet.",noOrders:"No orders yet. Customer orders will show up here.",orderSearch:"Search by order number...",noOrderMatches:"No orders match those filters.",fromDate:"From date",toDate:"To date",returnToStock:"Return to stock",returnedToStock:"Stock restored",inventoryRestored:"Returned items have been restored to stock.",order:"Order",customer:"Customer",date:"Date",total:"Total",status:"Status",statusCompleted:"Completed",statusOutForDelivery:"Out for Delivery",statusReturned:"Returned",orderStatusUpdated:"Order status updated.",
      categoriesTab:"Categories",addCategory:"Add category",categoryName:"Category name",categoryNameArabic:"Arabic name (optional)",saveCategory:"Save category",categoryCreated:"Category created.",categoryExists:"A category with this name already exists.",categoryInUse:"Remove or reassign products in this category before deleting it.",categoryDeleted:"Category deleted.",whatsappFallback:"Your order was saved. Open WhatsApp to send it to the store.",sendWhatsApp:"Send order on WhatsApp ↗",whatsappNote:"Your order is complete. Send the details to the store on WhatsApp if you wish.",printReceipt:"Print receipt",receiptTitle:"ORDER RECEIPT",receiptNumber:"Receipt",receiptDate:"Date",receiptCustomer:"Customer",receiptPhone:"Phone",receiptAddress:"Delivery address",receiptItem:"Item",receiptQuantity:"Qty",receiptTotal:"Total paid",receiptThanks:"Thank you for shopping with us.",
      whatsappNumber:"WhatsApp phone number",whatsappNumberHint:"Include the country code, or enter an Iraqi mobile number starting with 07.",invalidWhatsAppNumber:"Enter a valid phone number with its country code.",
      newsletterSuccess:"Thanks! You're on the list.",addedToCart:"Added to your bag.",productSaved:"Product saved.",productDeleted:"Product deleted.",settingsSaved:"Store settings saved.",productDeleteConfirm:"Delete this product?",
      checkoutName:"Your name",phone:"Phone number",address:"Delivery address",placeOrder:"Place order",orderReceived:"Thanks! Your order has been received.",checkoutTitle:"Almost yours.",checkoutText:"Add your contact details to place your order.",
      invalidImage:"Please select an image file.",imageTooLarge:"Please choose an image smaller than 20 MB.",imageError:"Could not read or compress the selected image.",siteSettings:"Give your storefront its own name and logo.",stockLow:"Low stock",currency:"IQD",checkoutRequired:"Please add your name, phone number, and delivery address.",
      categoryElectronics:"Electronics",categoryAccessories:"Accessories",categoryAppliances:"Home appliances"
    },
    ar:{
      navShop:"المتجر",navCategories:"التصنيفات",navAbout:"من نحن",cart:"السلة",eyebrow:"المستقبل بين يديك",heroTitle:'مساحة أكبر لـ<br><span>حياة أفضل.</span>',
      heroText:"تقنيات أساسية ومنتجات يومية مختارة بعناية، لتجعل تفاصيل حياتك أسهل وأجمل.",explore:"اكتشف مجموعتنا",trusted:"اختيار أكثر من ٢٬٤٠٠ عميل سعيد",curated:"تقنية مختارة",madeForLife:"مصممة لحياتك",rating:"تقييم العملاء",
      benefitOne:"اختيارات بعناية",benefitOneText:"الأفضل فقط",benefitTwo:"توصيل سريع",benefitTwoText:"حتى باب منزلك",benefitThree:"استرجاع سهل",benefitThreeText:"٣٠ يوماً بكل سهولة",benefitFour:"نحن هنا لأجلك",benefitFourText:"فريق حقيقي، مساعدة حقيقية",
      shopEyebrow:"اختيارات رائعة بانتظارك",shopTitle:'اعثر على <span>منتجك المفضل.</span>',search:"ابحث عن أي شيء...",manageProducts:"إدارة المنتجات",nothingFound:"لم نعثر على نتائج",tryAnother:"جرّب بحثاً أو تصنيفاً آخر.",
      newsletterEyebrow:"شيء جميل إضافي",newsletterTitle:'تقنية رائعة. <span>وبريد ممتع.</span>',newsletterText:"اكتشف أحدث المنتجات والاختيارات المميزة والعروض التي تستحق وقتك.",email:"بريدك الإلكتروني",subscribe:"سجّلني ↗",newsletterFine:"بلا رسائل مزعجة. ألغِ الاشتراك متى شئت.",footerText:"متعة أكثر في كل يوم.",
      yourBag:"حقيبتك الصغيرة",subtotal:"المجموع الفرعي",shippingNote:"تُحسب تكاليف الشحن والضرائب عند إتمام الطلب.",checkout:"تابع لإتمام الطلب ↗",adminAccess:"إدارة المتجر",welcomeBack:"أهلاً بعودتك.",loginHint:"سجّل الدخول باستخدام حساب إدارة Supabase.",
      adminEmail:"البريد الإلكتروني",adminPassword:"كلمة المرور",adminSignInError:"تعذر تسجيل الدخول. تحقق من البريد الإلكتروني وكلمة المرور ثم حاول مجدداً.",adminRoleRequired:"هذا الحساب غير مخوّل لإدارة المتجر.",storeLoadError:"حدث خطأ أثناء تحميل بيانات المتجر.",switchToArabic:"التبديل إلى العربية",switchToEnglish:"التبديل إلى الإنجليزية",signIn:"تسجيل الدخول ↗",storeControl:"التحكم بالمتجر",dashboard:"لوحة الإدارة",products:"المنتجات",orders:"الطلبات",settings:"إعدادات المتجر",addProduct:"+ أضف منتجاً",
      editProduct:"تعديل المنتج",newProduct:"منتج جديد",productName:"اسم المنتج",nameArabic:"الاسم بالعربية",category:"التصنيف",categoryArabic:"التصنيف بالعربية",price:"السعر",comparePrice:"السعر قبل الخصم (اختياري)",stock:"الكمية المتوفرة",image:"صورة المنتج",imageUrl:"رابط الصورة (اختياري)",description:"الوصف",descriptionArabic:"الوصف بالعربية",
      saveProduct:"حفظ المنتج",cancel:"إلغاء",uploadHint:"ارفع صورة أو ألصق رابط الصورة بالأسفل. سيتم تغيير حجم الصور وضغطها قبل الحفظ.",product:"المنتج",stockLabel:"المخزون",actions:"الإجراءات",edit:"تعديل",delete:"حذف",sale:"تخفيض",all:"الكل",storeName:"اسم المتجر",storeNameArabic:"اسم المتجر بالعربية",logo:"شعار المتجر",logoHint:"ارفع شعاراً مربعاً صغيراً (اختياري).",saveSettings:"حفظ الإعدادات",
      productDetails:"تفاصيل المنتج",inStock:"متوفر",outOfStock:"غير متوفر",addToCart:"أضف إلى السلة",
      productsTotal:"المنتجات",orderCount:"الطلبات",inventoryValue:"قيمة المخزون",noProducts:"لا توجد منتجات بعد.",noOrders:"لا توجد طلبات بعد. ستظهر طلبات العملاء هنا.",orderSearch:"ابحث برقم الطلب...",noOrderMatches:"لا توجد طلبات تطابق عوامل التصفية.",fromDate:"من تاريخ",toDate:"إلى تاريخ",returnToStock:"إرجاع للمخزون",returnedToStock:"أُعيد للمخزون",inventoryRestored:"تمت إعادة المنتجات المرتجعة إلى المخزون.",order:"الطلب",customer:"العميل",date:"التاريخ",total:"الإجمالي",status:"الحالة",statusCompleted:"مكتمل",statusOutForDelivery:"قيد التوصيل",statusReturned:"مرتجع",orderStatusUpdated:"تم تحديث حالة الطلب.",
      categoriesTab:"التصنيفات",addCategory:"إضافة تصنيف",categoryName:"اسم التصنيف",categoryNameArabic:"الاسم بالعربية (اختياري)",saveCategory:"حفظ التصنيف",categoryCreated:"تمت إضافة التصنيف.",categoryExists:"يوجد تصنيف بهذا الاسم مسبقاً.",categoryInUse:"انقل المنتجات في هذا التصنيف أو احذفها أولاً.",categoryDeleted:"تم حذف التصنيف.",whatsappFallback:"تم حفظ طلبك. افتح واتساب لإرساله إلى المتجر.",sendWhatsApp:"إرسال الطلب عبر واتساب ↗",whatsappNote:"اكتمل طلبك. يمكنك إرسال التفاصيل إلى المتجر عبر واتساب إذا رغبت.",printReceipt:"طباعة الإيصال",receiptTitle:"إيصال الطلب",receiptNumber:"رقم الإيصال",receiptDate:"التاريخ",receiptCustomer:"العميل",receiptPhone:"الهاتف",receiptAddress:"عنوان التوصيل",receiptItem:"المنتج",receiptQuantity:"الكمية",receiptTotal:"الإجمالي المدفوع",receiptThanks:"شكراً لتسوقك معنا.",
      whatsappNumber:"رقم واتساب",whatsappNumberHint:"أدخل رقم الهاتف مع رمز الدولة، أو رقم موبايل عراقي يبدأ بـ 07.",invalidWhatsAppNumber:"أدخل رقم هاتف صحيحاً مع رمز الدولة.",
      newsletterSuccess:"شكراً لك! تمت إضافتك إلى القائمة.",addedToCart:"أُضيف المنتج إلى حقيبتك.",productSaved:"تم حفظ المنتج.",productDeleted:"تم حذف المنتج.",settingsSaved:"تم حفظ إعدادات المتجر.",productDeleteConfirm:"هل تريد حذف هذا المنتج؟",
      checkoutName:"اسمك",phone:"رقم الهاتف",address:"عنوان التوصيل",placeOrder:"تأكيد الطلب",orderReceived:"شكراً لك! استلمنا طلبك.",checkoutTitle:"بقيت خطوة بسيطة.",checkoutText:"أدخل بيانات التواصل لتأكيد طلبك.",
      invalidImage:"الرجاء اختيار ملف صورة.",imageTooLarge:"اختر صورة أصغر من ٢٠ ميغابايت.",imageError:"تعذرت قراءة الصورة المحددة أو ضغطها.",siteSettings:"اختر اسماً وشعاراً مميزين لمتجرك.",stockLow:"مخزون منخفض",currency:"د.ع",checkoutRequired:"أدخل الاسم ورقم الهاتف وعنوان التوصيل.",
      categoryElectronics:"إلكترونيات",categoryAccessories:"إكسسوارات",categoryAppliances:"أجهزة منزلية"
    }
  };

  let products=[],orders=[],categories=[],settings={name:"Volt House",nameAr:"ڤولت هاوس",logo:"",whatsappNumber:"07862250964"},cart=[];
  let language=localStorage.getItem("volt-house-language")||"ar",activeCategory="all",editingId=null,orderSearchTerm="",orderDateFrom="",orderDateTo="",toastTimer;

  try {
    cart=JSON.parse(localStorage.getItem("volt-house-cart")||"[]");
    if(!Array.isArray(cart))cart=[];
  } catch(error){cart=[];}

  const t=key=>strings[language][key]||strings.en[key]||key;
  const esc=value=>String(value??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const money=value=>`${new Intl.NumberFormat(language==="ar"?"ar-IQ":"en-IQ",{maximumFractionDigits:0}).format(Number(value||0))} ${t("currency")}`;
  const nameOf=item=>language==="ar"?(item.nameAr||item.name):item.name;
  const descOf=item=>language==="ar"?(item.descriptionAr||item.description||""):(item.description||"");

  function categoryOf(category=""){
    const known=categories.find(item=>item.name===category||item.nameAr===category);
    if(known)return language==="ar"?(known.nameAr||known.name):known.name;
    const value=String(category).toLowerCase();
    if(value.includes("accessor")||value.includes("إكسس"))return t("categoryAccessories");
    if(value.includes("appliance")||value.includes("منزل")||value.includes("أجهزة"))return t("categoryAppliances");
    if(value.includes("electronic")||value.includes("إلكترون"))return t("categoryElectronics");
    return category;
  }

  function normalizePhoneNumber(value){
    let number=String(value||"").replace(/[^\d+]/g,"");
    if(number.startsWith("+"))number=number.slice(1);
    if(number.startsWith("00"))number=number.slice(2);
    if(number.startsWith("0"))number=`964${number.slice(1)}`;
    if(!/^\d{8,15}$/.test(number))throw new Error(t("invalidWhatsAppNumber"));
    return number;
  }

  function report(error){console.error("Store operation failed:",error);toast(error.message||"Something went wrong. Please try again.");}

  // ========== جلب البيانات من SUPABASE ==========
  async function fetchProducts(){
    const { data, error } = await supabase.from('products').select('*').order('created_at', { ascending: false });
    if(error) throw error;
    products = (data || []).map(p => ({
      id: p.id,
      name: p.name,
      nameAr: p.name_ar,
      category: p.category,
      categoryAr: p.category_ar,
      price: Number(p.price),
      comparePrice: p.compare_price ? Number(p.compare_price) : null,
      stock: Number(p.stock),
      badge: p.badge || "",
      description: p.description || "",
      descriptionAr: p.description_ar || "",
      image: p.image || ""
    }));
  }

  async function fetchCategories(){
    const { data, error } = await supabase.from('categories').select('*').order('name');
    if(error) throw error;
    categories = (data || []).map(c => ({ id: c.id, name: c.name, nameAr: c.name_ar }));
    if(!categories.length){
      const defaults=[{name:"Electronics",name_ar:"إلكترونيات"},{name:"Accessories",name_ar:"إكسسوارات"},{name:"Home appliances",name_ar:"أجهزة منزلية"}];
      await supabase.from('categories').insert(defaults);
      const { data: inserted } = await supabase.from('categories').select('*').order('name');
      categories = (inserted || []).map(c => ({ id: c.id, name: c.name, nameAr: c.name_ar }));
    }
  }

  async function fetchOrders(){
    const { data, error } = await supabase.from('orders').select('*').order('created_at', { ascending: false });
    if(error) throw error;
    orders = (data || []).map(o => ({
      id: o.id,
      createdAt: o.created_at,
      status: o.status || 'outForDelivery',
      inventoryRestored: Boolean(o.inventory_restored),
      customer: { name: o.customer_name, phone: o.customer_phone, address: o.customer_address },
      items: o.items || [],
      total: Number(o.total)
    }));
  }

  async function updateOrderStatus(orderId, status){
    const { error } = await supabase.from('orders').update({ status }).eq('id', orderId);
    if(error) throw error;
    const order = orders.find(o => o.id === orderId);
    if(order) order.status = status;
  }

  async function restockReturnedOrder(orderId){
    const order = orders.find(o => o.id === orderId);
    if(!order) throw new Error("Order not found.");
    if(order.status !== "returned") throw new Error("Only returned orders can be restored to stock.");
    if(order.inventoryRestored) throw new Error("This order has already been restored to stock.");

    for(const item of order.items){
      const prod = products.find(p => p.id === item.id);
      if(prod){
        const newStock = Number(prod.stock || 0) + Number(item.quantity || 0);
        await supabase.from('products').update({ stock: newStock }).eq('id', item.id);
        prod.stock = newStock;
      }
    }

    const { error } = await supabase.from('orders').update({ inventory_restored: true }).eq('id', orderId);
    if(error) throw error;
    order.inventoryRestored = true;
  }

  async function init(){
    try{
      const savedSettings = JSON.parse(localStorage.getItem("volt-house-settings") || "{}");
      settings = { ...settings, ...savedSettings };
      bind();
      applyLanguage();
      applySettings();
      renderProducts();
      renderCart();
      $("#current-year").textContent = new Date().getFullYear();

      await Promise.all([fetchProducts(), fetchCategories()]);

      applyLanguage();
    }catch(error){
      console.error("Store initialization failed:", error);
      toast(t("storeLoadError"));
    }
  }

  function applyLanguage(){
    document.documentElement.lang=language;
    document.documentElement.dir=language==="ar"?"rtl":"ltr";
    document.body.dir=language==="ar"?"rtl":"ltr";
    $$("[data-i18n]").forEach(element=>element.innerHTML=t(element.dataset.i18n));     $$
("[data-i18n-placeholder]").forEach(element=>element.placeholder=t(element.dataset.i18nPlaceholder));
    $("#language-toggle").textContent=language==="en"?"عربي":"English";
    $("#language-toggle").setAttribute("aria-label",t(language==="en"?"switchToArabic":"switchToEnglish"));
    const storeName=language==="ar"?(settings.nameAr||settings.name):settings.name;
    $("#brand-name").textContent=storeName;
    $("#footer-brand-name").textContent=storeName;
    $("#footer-copy-name").textContent=storeName;
    document.title=`${storeName} — ${language==="ar"?"تقنية لحياة أفضل":"Smart living, powered"}`;
    renderCategories();
    renderProducts();
    renderCart();
    if(!$("#admin-panel").classList.contains("hidden"))renderTab($(".admin-tab.active")?.dataset.tab||"products");
  }

  function applySettings(){
    const logo=settings.logo?`<img src="${esc(settings.logo)}" alt="" style="width:100%;height:100%;object-fit:cover;border-radius:inherit">`:"V";
    ["#brand-mark",".site-footer .brand-mark",".admin-title .brand-mark"].forEach(selector=>$(selector).innerHTML=logo);
    const storeName=language==="ar"?(settings.nameAr||settings.name):settings.name;
    $("#brand-name").textContent=storeName;
    $("#footer-brand-name").textContent=storeName;
    $("#footer-copy-name").textContent=storeName;
    document.title=`${storeName} — ${language==="ar"?"تقنية لحياة أفضل":"Smart living, powered"}`;
  }

  function renderCategories(){
    $("#category-list").innerHTML=[{value:"all",label:t("all")},...categories.map(item=>({value:item.name,label:categoryOf(item.name)}))]
      .map(item=>`<button class="category-chip ${activeCategory===item.value?"selected":""}" data-category="${esc(item.value)}" type="button">${esc(item.label)}</button>`).join("");
  }

  function renderProducts(){
    const query=$("#product-search").value.trim().toLowerCase();
    const filtered=products.filter(product=>(activeCategory==="all"||product.category===activeCategory)&&
      (!query||[product.name,product.nameAr,product.category,product.categoryAr,product.description,product.descriptionAr].some(value=>String(value||"").toLowerCase().includes(query))));
    $("#product-grid").innerHTML=filtered.map(product=>`<article class="product-card" data-product="${esc(product.id)}"><div class="product-image-wrap">
      <img class="product-image" src="${esc(product.image||"")}" alt="${esc(nameOf(product))}" loading="lazy" onerror="this.style.opacity='.18'">
      ${product.badge?`<span class="product-badge">${esc(product.badge)}</span>`:""}<button class="wishlist" type="button" aria-label="Add to wishlist">♡</button></div>
      <div class="product-info"><span class="product-category">${esc(categoryOf(language==="ar"?(product.categoryAr||product.category):product.category))}</span>
      <h3 class="product-name" title="${esc(descOf(product))}"><button class="product-detail-trigger" type="button" aria-haspopup="dialog" aria-label="${esc(nameOf(product))}. ${esc(t("productDetails"))}">${esc(nameOf(product))}</button></h3><div class="product-bottom">
      <span class="product-price">${money(product.price)} ${product.comparePrice>product.price?`<del>${money(product.comparePrice)}</del>`:""}</span>
      <button class="add-button" type="button" data-add="${esc(product.id)}" aria-label="Add ${esc(nameOf(product))} to cart" ${Number(product.stock)<=0?"disabled":""}>${Number(product.stock)<=0?"−":"+"}</button></div></div></article>`).join("");
    $("#empty-state").classList.toggle("hidden",filtered.length>0);
  }

  function saveCart(){localStorage.setItem("volt-house-cart",JSON.stringify(cart));renderCart();}

  function addToCart(product){
    if(!product||product.stock<=0)return;
    const line=cart.find(item=>item.id===product.id);
    if(line){if(line.quantity>=product.stock)return toast(t("stockLow"));line.quantity++;}
    else cart.push({id:product.id,quantity:1});
    saveCart();toast(t("addedToCart"));
  }

  function openProductDetails(product){
    const modal=$("#product-detail-modal");
    modal.innerHTML=`<button class="icon-button modal-close" data-close-modal type="button" aria-label="Close">×</button>
      <div class="eyebrow muted-eyebrow">${t("productDetails")}</div><img class="product-detail-image" src="${esc(product.image||"")}" alt="${esc(nameOf(product))}" onerror="this.style.opacity='.18'">
      <span class="product-category">${esc(categoryOf(language==="ar"?(product.categoryAr||product.category):product.category))}</span><h2 id="product-detail-title">${esc(nameOf(product))}</h2>
      ${descOf(product)?`<p class="product-detail-description">${esc(descOf(product))}</p>`:""}
      <div class="product-detail-footer"><div><strong class="product-detail-price">${money(product.price)}</strong>${product.comparePrice>product.price?` <del>${money(product.comparePrice)}</del>`:""}
      <span class="product-detail-stock">${t(Number(product.stock)>0?"inStock":"outOfStock")} (${Number(product.stock)})</span></div>
      <button class="primary-button" data-detail-add="${esc(product.id)}" type="button" ${Number(product.stock)<=0?"disabled":""}>${t("addToCart")}</button></div>`;
    $("#modal-backdrop").classList.remove("hidden");modal.classList.remove("hidden");$(".modal-close",modal).focus();
  }

  function renderCart(){
    cart=cart.filter(item=>products.some(product=>product.id===item.id));
    const count=cart.reduce((sum,item)=>sum+item.quantity,0),total=cart.reduce((sum,item)=>sum+(Number(products.find(product=>product.id===item.id)?.price)||0)*item.quantity,0);
    $("#cart-count").textContent=count;$("#panel-cart-count").textContent=`(${count})`;$("#cart-subtotal").textContent=money(total);
    $("#cart-items").innerHTML=cart.length?cart.map(item=>{const product=products.find(entry=>entry.id===item.id);return `<article class="cart-item"><img src="${esc(product.image||"")}" alt=""><div><h3>${esc(nameOf(product))}</h3><span class="cart-item-price">${money(product.price)}</span>
      <div class="quantity-control"><button type="button" data-quantity="${esc(item.id)}" data-delta="-1" aria-label="Decrease quantity">−</button><span>${item.quantity}</span>
      <button type="button" data-quantity="${esc(item.id)}" data-delta="1" aria-label="Increase quantity" ${item.quantity>=product.stock?"disabled":""}>+</button></div></div>
      <button class="remove-item" type="button" data-remove="${esc(item.id)}" aria-label="Remove item">×</button></article>`;}).join(""):`<div class="cart-empty">${t("cart")}<br>${t("nothingFound")}</div>`;
    $("#checkout-open").disabled=count===0;
  }

  function toast(message){const element=$("#toast");element.textContent=message;element.classList.add("visible");clearTimeout(toastTimer);toastTimer=setTimeout(()=>element.classList.remove("visible"),2800);}
  function openCart(){$("#cart-overlay").classList.remove("hidden");$("#cart-panel").classList.add("open");$("#cart-panel").setAttribute("aria-hidden","false");}
  function closeCart(){$("#cart-overlay").classList.add("hidden");$("#cart-panel").classList.remove("open");$("#cart-panel").setAttribute("aria-hidden","true");}
  function openLogin(){$("#modal-backdrop").classList.remove("hidden");$("#login-modal").classList.remove("hidden");$("#checkout-modal").classList.add("hidden");$("#login-error").classList.add("hidden");$("#admin-email").value="";$("#admin-password").value="";$("#admin-email").focus();}
  function closeModal(){$("#modal-backdrop").classList.add("hidden");$("#login-modal").classList.add("hidden");$("#checkout-modal").classList.add("hidden");$("#product-detail-modal").classList.add("hidden");}
  function openCheckout(){$("#modal-backdrop").classList.remove("hidden");$("#login-modal").classList.add("hidden");$("#checkout-success").classList.add("hidden");$("#checkout-form").classList.remove("hidden");$("#checkout-form").reset();$("#whatsapp-link").href="#";$("#receipt-content").innerHTML="";$("#checkout-modal").classList.remove("hidden");}

  function renderReceipt(order){
    const storeName=language==="ar"?(settings.nameAr||settings.name):settings.name;
    const orderNumber=order.id.slice(-6).toUpperCase();
    $("#receipt-content").innerHTML=`<header class="receipt-header"><span class="receipt-mark">V</span><div><div class="receipt-eyebrow">${t("receiptTitle")}</div><h3>${esc(storeName)}</h3></div><span class="receipt-sparkle">✳</span></header>
      <div class="receipt-meta"><div><span>${t("receiptNumber")}</span><strong>#${esc(orderNumber)}</strong></div><div><span>${t("receiptDate")}</span><strong>${new Date(order.createdAt).toLocaleString(language==="ar"?"ar-IQ":"en-IQ")}</strong></div></div>
      <div class="receipt-customer"><strong>${esc(order.customer.name)}</strong><span>${t("receiptPhone")}: ${esc(order.customer.phone)}</span><span>${t("receiptAddress")}: ${esc(order.customer.address)}</span></div>
      <div class="receipt-items">${order.items.map(item=>`<div class="receipt-item"><div><strong>${esc(item.name)}</strong><span>${t("receiptQuantity")}: ${Number(item.quantity)}</span></div><strong>${money(item.price*item.quantity)}</strong></div>`).join("")}</div>
      <div class="receipt-total"><span>${t("receiptTotal")}</span><strong>${money(order.total)}</strong></div>
      <p class="receipt-thanks">${t("receiptThanks")}</p>`;
  }

  function printReceipt(){
    document.body.classList.add("printing-receipt");
    window.addEventListener("afterprint",()=>document.body.classList.remove("printing-receipt"),{once:true});
    try{window.print();}
    catch(error){document.body.classList.remove("printing-receipt");report(error);}
  }

  function renderTab(tab){$$(".admin-tab").forEach(button=>button.classList.toggle("active",button.dataset.tab===tab));if(tab==="products")renderAdminProducts();if(tab==="categories")renderAdminCategories();if(tab==="orders")renderAdminOrders();if(tab==="settings")renderAdminSettings();}

  function renderAdminProducts(){
    const value=products.reduce((sum,item)=>sum+Number(item.price||0)*Number(item.stock||0),0);
    const stats=`<div class="settings-summary"><div class="stat-card"><span>${t("productsTotal")}</span><strong>${products.length}</strong></div><div class="stat-card"><span>${t("orderCount")}</span><strong>${orders.length}</strong></div><div class="stat-card"><span>${t("inventoryValue")}</span><strong>${money(value)}</strong></div></div>`;
    const heading=`<div class="admin-section-heading"><div><h3>${t("products")}</h3><p>${language==="ar"?"أضف منتجات المتجر وحدّثها.":"Add new products or update your collection."}</p></div><button class="primary-button" id="add-product" type="button">${t("addProduct")}</button></div>`;
    const rows=products.map(item=>`<tr><td><div class="table-product"><img src="${esc(item.image||"")}" alt=""><span><strong>${esc(nameOf(item))}</strong><small>${esc(item.category)}</small></span></div></td><td>${money(item.price)}</td><td>${Number(item.stock)<=3?`<span style="color:#ffc48a">${t("stockLow")}: ${Number(item.stock)}</span>`:Number(item.stock)}</td><td><div class="table-actions"><button class="small-button" data-edit="${esc(item.id)}" type="button">${t("edit")}</button><button class="small-button danger" data-delete="${esc(item.id)}" type="button">${t("delete")}</button></div></td></tr>`).join("");
    $("#admin-content").innerHTML=`${stats}${heading}<div id="product-form-container"></div>${products.length?`<div class="admin-table-wrap"><table class="admin-table"><thead><tr><th>${t("product")}</th><th>${t("price")}</th><th>${t("stockLabel")}</th><th>${t("actions")}</th></tr></thead><tbody>${rows}</tbody></table></div>`:`<div class="admin-empty">${t("noProducts")}</div>`}`;
  }

  function renderAdminCategories(){
    const rows=categories.map(item=>`<tr><td>${esc(item.name)}</td><td>${esc(item.nameAr||"—")}</td><td><button class="small-button danger" data-delete-category="${esc(item.id)}" type="button">${t("delete")}</button></td></tr>`).join("");
    $("#admin-content").innerHTML=`<div class="admin-section-heading"><div><h3>${t("categoriesTab")}</h3><p>${language==="ar"?"أنشئ تصنيفاتك لتظهر في المتجر ونموذج المنتج.":"Create categories for your storefront and product forms."}</p></div></div>
      <form class="admin-form" id="category-form"><div class="form-grid"><div class="form-field"><label for="category-name">${t("categoryName")} *</label><input id="category-name" name="name" required maxlength="60"></div>
      <div class="form-field"><label for="category-name-ar">${t("categoryNameArabic")}</label><input id="category-name-ar" name="nameAr" maxlength="60"></div></div>
      <div class="form-actions"><button class="primary-button" type="submit">${t("saveCategory")}</button></div></form>
      ${categories.length?`<div class="admin-table-wrap category-admin-list"><table class="admin-table"><thead><tr><th>${t("categoryName")}</th><th>${t("categoryNameArabic")}</th><th>${t("actions")}</th></tr></thead><tbody>${rows}</tbody></table></div>`:`<div class="admin-empty">${t("noProducts")}</div>`}`;
  }

  function renderProductForm(item=null){
    editingId=item?.id||null;
    const options=categories.map(value=>`<option value="${esc(value.name)}" ${item?.category===value.name?"selected":""}>${esc(categoryOf(value.name))}</option>`).join("");
    $("#product-form-container").innerHTML=`<form class="admin-form" id="product-form"><h4>${t(item?"editProduct":"newProduct")}</h4><div class="form-grid">
      <div class="form-field"><label for="product-name">${t("productName")} *</label><input id="product-name" name="name" required maxlength="100" value="${esc(item?.name||"")}"></div>
      <div class="form-field"><label for="product-name-ar">${t("nameArabic")}</label><input id="product-name-ar" name="nameAr" maxlength="100" value="${esc(item?.nameAr||"")}"></div>
      <div class="form-field"><label for="product-category">${t("category")} *</label><select id="product-category" name="category" required>${options}${item?.category&&!categories.some(c=>c.name===item.category)?`<option value="${esc(item.category)}" selected>${esc(item.category)}</option>`:""}</select></div>
      <div class="form-field"><label for="product-category-ar">${t("categoryArabic")}</label><input id="product-category-ar" name="categoryAr" value="${esc(item?.categoryAr||categories.find(value=>value.name===item?.category)?.nameAr||"")}"></div>
      <div class="form-field"><label for="product-price">${t("price")} *</label><input id="product-price" name="price" type="number" min="0" step="0.01" required value="${esc(item?.price??"")}"></div>
      <div class="form-field"><label for="product-compare">${t("comparePrice")}</label><input id="product-compare" name="comparePrice" type="number" min="0" step="0.01" value="${esc(item?.comparePrice??"")}"></div>
      <div class="form-field"><label for="product-stock">${t("stock")} *</label><input id="product-stock" name="stock" type="number" min="0" step="1" required value="${esc(item?.stock??"0")}"></div>
      <div class="form-field"><label for="product-badge">Badge / label</label><input id="product-badge" name="badge" maxlength="20" value="${esc(item?.badge||"")}"></div>
      <div class="form-field full"><label for="product-description">${t("description")}</label><textarea id="product-description" name="description" maxlength="500">${esc(item?.description||"")}</textarea></div>
      <div class="form-field full"><label for="product-description-ar">${t("descriptionArabic")}</label><textarea id="product-description-ar" name="descriptionAr" maxlength="500">${esc(item?.descriptionAr||"")}</textarea></div>
      <div class="form-field full"><label for="product-image">${t("image")}</label><input id="product-image" name="imageFile" type="file" accept="image/*"><span class="upload-hint">${t("uploadHint")}</span></div>
      <div class="form-field full"><label for="product-image-url">${t("imageUrl")}</label><input id="product-image-url" name="imageUrl" type="url" value="${esc(item?.image?.startsWith("data:")?"":item?.image||"")}" placeholder="https://..."></div></div>
      <div class="form-actions"><button class="primary-button" type="submit">${t("saveProduct")}</button><button class="small-button" id="cancel-product" type="button">${t("cancel")}</button></div></form>`;
    $("#product-form").scrollIntoView({behavior:"smooth",block:"start"});
  }

  async function readImage(file){
    if(!file)return null;
    if(!file.type.startsWith("image/"))throw new Error(t("invalidImage"));
    if(file.size>20*1024*1024)throw new Error(t("imageTooLarge"));
    const bitmap=await createImageBitmap(file);
    try{
      const scale=Math.min(1,1400/Math.max(bitmap.width,bitmap.height)),canvas=document.createElement("canvas");
      canvas.width=Math.max(1,Math.round(bitmap.width*scale));canvas.height=Math.max(1,Math.round(bitmap.height*scale));
      const context=canvas.getContext("2d");
      if(!context)throw new Error(t("imageError"));
      context.drawImage(bitmap,0,0,canvas.width,canvas.height);
      const compressed=await new Promise((resolve,reject)=>canvas.toBlob(blob=>blob?resolve(blob):reject(new Error(t("imageError"))),"image/webp",0.8));
      const output=compressed.size<file.size?compressed:file;
      return await new Promise((resolve,reject)=>{
        const reader=new FileReader();
        reader.onload=()=>typeof reader.result==="string"?resolve(reader.result):reject(new Error(t("imageError")));
        reader.onerror=()=>reject(new Error(t("imageError")));
        reader.readAsDataURL(output);
      });
    }finally{bitmap.close();}
  }

  function renderAdminOrders(){
    const rows=[...orders].sort((a,b)=>b.createdAt.localeCompare(a.createdAt)).map(order=>{
      const orderNumber=order.id.slice(-6).toUpperCase(),status=order.status||"outForDelivery",date=new Date(order.createdAt),localDate=`${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,"0")}-${String(date.getDate()).padStart(2,"0")}`;
      return `<tr data-order-number="${esc(orderNumber)}" data-order-date="${localDate}"><td>#${esc(orderNumber)}</td><td><strong>${esc(order.customer.name)}</strong><small style="display:block;color:var(--muted);margin-top:3px">${esc(order.customer.phone)}</small></td><td>${order.items.reduce((sum,item)=>sum+item.quantity,0)}</td><td>${money(order.total)}</td><td>${date.toLocaleDateString(language==="ar"?"ar":"en")}</td><td><select class="order-status-select" data-order-status="${esc(order.id)}" aria-label="${esc(t("status"))} #${esc(orderNumber)}">
        <option value="completed" ${status==="completed"?"selected":""}>${t("statusCompleted")}</option>
        <option value="outForDelivery" ${status==="outForDelivery"?"selected":""}>${t("statusOutForDelivery")}</option>
        <option value="returned" ${status==="returned"?"selected":""}>${t("statusReturned")}</option>
      </select>${status==="returned"?(order.inventoryRestored?`<small class="restock-note">${t("returnedToStock")}</small>`:`<button class="small-button restock-button" type="button" data-restock-order="${esc(order.id)}">${t("returnToStock")}</button>`):""}</td></tr>`;
    }).join("");
    $("#admin-content").innerHTML=`<div class="admin-section-heading"><div><h3>${t("orders")}</h3><p>${language==="ar"?"طلبات العملاء المحفوظة في المتجر.":"Customer orders placed through your store."}</p></div></div>${orders.length?`<div class="admin-order-filters"><label class="search-box admin-order-search"><span>⌕</span><input id="order-search" type="search" aria-label="${esc(t("orderSearch"))}" placeholder="${esc(t("orderSearch"))}" value="${esc(orderSearchTerm)}"></label><label class="admin-date-filter"><span>${t("fromDate")}</span><input id="order-date-from" type="date" value="${esc(orderDateFrom)}"></label><label class="admin-date-filter"><span>${t("toDate")}</span><input id="order-date-to" type="date" value="${esc(orderDateTo)}"></label></div><div class="admin-table-wrap"><table class="admin-table"><thead><tr><th>${t("order")}</th><th>${t("customer")}</th><th>${t("products")}</th><th>${t("total")}</th><th>${t("date")}</th><th>${t("status")}</th></tr></thead><tbody>${rows}<tr id="order-search-empty" class="hidden"><td colspan="6">${t("noOrderMatches")}</td></tr></tbody></table></div>`:`<div class="admin-empty">${t("noOrders")}</div>`}`;
    applyOrderFilters();
  }

  function applyOrderFilters(){
    const query=orderSearchTerm.replace(/^#\s*/,"").replace(/\s/g,"").toUpperCase();
    const rows=$$("#admin-content [data-order-number]");
    let visibleCount=0;
    rows.forEach(row=>{
      const matchesNumber=row.dataset.orderNumber.includes(query);
      const matchesFrom=!orderDateFrom||row.dataset.orderDate>=orderDateFrom;
      const matchesTo=!orderDateTo||row.dataset.orderDate<=orderDateTo;
      const matches=matchesNumber&&matchesFrom&&matchesTo;
      row.classList.toggle("hidden",!matches);
      if(matches)visibleCount++;
    });
    $("#order-search-empty")?.classList.toggle("hidden",visibleCount>0);
  }

  function renderAdminSettings(){
    $("#admin-content").innerHTML=`<div class="admin-section-heading"><div><h3>${t("settings")}</h3><p>${t("siteSettings")}</p></div></div><form class="admin-form" id="settings-form"><div class="form-grid">
      <div class="form-field"><label for="store-name">${t("storeName")} *</label><input id="store-name" name="name" maxlength="60" required value="${esc(settings.name)}"></div>
      <div class="form-field"><label for="store-name-ar">${t("storeNameArabic")}</label><input id="store-name-ar" name="nameAr" maxlength="60" value="${esc(settings.nameAr||"")}"></div>
      <div class="form-field"><label for="store-whatsapp">${t("whatsappNumber")} *</label><input id="store-whatsapp" name="whatsappNumber" type="tel" inputmode="tel" autocomplete="tel" maxlength="20" required value="${esc(settings.whatsappNumber||"07702556311")}"><span class="upload-hint">${t("whatsappNumberHint")}</span></div>
      <div class="form-field full"><label for="store-logo">${t("logo")}</label><input id="store-logo" name="logoFile" type="file" accept="image/*"><span class="upload-hint">${t("logoHint")}</span></div></div>
      <div class="form-actions"><button class="primary-button" type="submit">${t("saveSettings")}</button></div></form>`;
  }

  function bind(){
    $("#language-toggle").addEventListener("click",()=>{language=language==="en"?"ar":"en";localStorage.setItem("volt-house-language",language);applyLanguage();});
    $("#theme-toggle").addEventListener("click",()=>{const light=document.body.classList.toggle("light-mode");localStorage.setItem("volt-house-theme",light?"light":"dark");$("#theme-icon").textContent=light?"☾":"☼";$("#theme-toggle").setAttribute("aria-label",light?"Toggle dark mode":"Toggle light mode");$('meta[name="theme-color"]').content=light?"#f1eef7":"#0b0912";});
    if(localStorage.getItem("volt-house-theme")==="light"){document.body.classList.add("light-mode");$("#theme-icon").textContent="☾";$('meta[name="theme-color"]').content="#f1eef7";}
    $("#cart-open").addEventListener("click",openCart);$("#cart-overlay").addEventListener("click",closeCart);$$('[data-close="cart"]').forEach(button=>button.addEventListener("click",closeCart));
    $("#admin-open").addEventListener("click",openLogin);$("#admin-link").addEventListener("click",openLogin);$("#modal-backdrop").addEventListener("click",closeModal);$$("[data-close-modal]").forEach(button=>button.addEventListener("click",closeModal));

    $("#login-form").addEventListener("submit",async event=>{
      event.preventDefault();
      const errorMessage=$("#login-error");
      errorMessage.classList.add("hidden");
      try{
        const { data, error } = await supabase.auth.signInWithPassword({
          email: $("#admin-email").value.trim(),
          password: $("#admin-password").value
        });
        if(error) throw error;
        if(data.user?.app_metadata?.role!=="admin"){
          const { error: signOutError } = await supabase.auth.signOut();
          if(signOutError) throw signOutError;
          errorMessage.textContent=t("adminRoleRequired");
          errorMessage.classList.remove("hidden");
          return;
        }
        await fetchOrders();
        closeModal();$("#admin-panel").classList.remove("hidden");renderTab("products");
      }catch(error){
        console.error("Admin sign-in failed:",error);
        errorMessage.textContent=error.message||t("adminSignInError");
        errorMessage.classList.remove("hidden");
      }
    });

    $("#admin-close").addEventListener("click",()=>$("#admin-panel").classList.add("hidden"));     $$(".admin-tab").forEach(button=>button.addEventListener("click",()=>renderTab(button.dataset.tab)));
    $("#product-search").addEventListener("input",renderProducts);

    $("#category-list").addEventListener("click",event=>{
      const button=event.target.closest("[data-category]");if(!button)return;
      activeCategory=button.dataset.category;renderCategories();renderProducts();
    });

    $("#product-grid").addEventListener("click",event=>{
      if(event.target.closest(".wishlist"))return;
      const addButton=event.target.closest("[data-add]");
      if(addButton){addToCart(products.find(item=>item.id===addButton.dataset.add));return;}
      const card=event.target.closest("[data-product]");
      if(card){const product=products.find(item=>item.id===card.dataset.product);if(product)openProductDetails(product);}
    });

    $("#product-detail-modal").addEventListener("click",event=>{
      if(event.target.closest("[data-close-modal]"))closeModal();
      const addButton=event.target.closest("[data-detail-add]");
      if(addButton){addToCart(products.find(item=>item.id===addButton.dataset.detailAdd));closeModal();}
    });

    $("#cart-items").addEventListener("click",event=>{
      const removeButton=event.target.closest("[data-remove]"),qtyButton=event.target.closest("[data-quantity]");
      if(removeButton)cart=cart.filter(item=>item.id!==removeButton.dataset.remove);
      if(qtyButton){
        const line=cart.find(item=>item.id===qtyButton.dataset.quantity),product=products.find(item=>item.id===qtyButton.dataset.quantity);
        if(line){line.quantity=Math.max(0,Math.min(Number(product?.stock||0),line.quantity+Number(qtyButton.dataset.delta)));cart=cart.filter(item=>item.quantity>0);}
      }
      saveCart();
    });

    $("#checkout-open").addEventListener("click",()=>{closeCart();openCheckout();});
    $("#print-receipt").addEventListener("click",printReceipt);
    $("#newsletter-form").addEventListener("submit",event=>{event.preventDefault();toast(t("newsletterSuccess"));event.currentTarget.reset();});

    // إرسال الطلب وحفظه في SUPABASE
    $("#checkout-form").addEventListener("submit",async event=>{
      event.preventDefault();const form=event.currentTarget;if(!form.reportValidity())return;
      const whatsappWindow=window.open("about:blank","_blank");
      if(whatsappWindow)whatsappWindow.opener=null;
      try{
        const data=new FormData(form),items=cart.map(line=>{
          const product=products.find(row=>row.id===line.id);
          return product?{id:line.id,name:nameOf(product),price:Number(product.price),quantity:line.quantity}:null;
        }).filter(Boolean);
        if(!items.length)return;

        const { data: insertedOrder, error: orderError } = await supabase.rpc("place_order", {
          p_customer_name: String(data.get("name")).trim(),
          p_customer_phone: String(data.get("phone")).trim(),
          p_customer_address: String(data.get("address")).trim(),
          p_items: cart.map(line=>({id:line.id,quantity:line.quantity}))
        }).single();
        if(orderError) throw orderError;
        if(!insertedOrder) throw new Error("Supabase did not return the created order.");

        const order = {
          id: insertedOrder.id,
          createdAt: insertedOrder.created_at,
          status: insertedOrder.status,
          inventoryRestored: insertedOrder.inventory_restored,
          customer: { name: insertedOrder.customer_name, phone: insertedOrder.customer_phone, address: insertedOrder.customer_address },
          items: insertedOrder.items.map(item=>({
            ...item,
            name: items.find(localItem=>localItem.id===item.id)?.name||item.name
          })),
          total: Number(insertedOrder.total)
        };
        orders.unshift(order);

        for(const line of cart){
          const product=products.find(row=>row.id===line.id);
          if(product)product.stock=Math.max(0,Number(product.stock)-line.quantity);
        }

        const message=[
          `${language==="ar"?"طلب جديد":"New order"} #${order.id.slice(-6).toUpperCase()}`,
          `${t("checkoutName")}: ${order.customer.name}`,
          `${t("phone")}: ${order.customer.phone}`,
          `${t("address")}: ${order.customer.address}`,
          `${t("products")}:`,
          ...order.items.map(item=>`- ${item.name} × ${item.quantity} — ${money(item.price*item.quantity)}`),
          `${t("total")}: ${money(order.total)}`
        ].join("\n");

        const whatsappUrl=`https://wa.me/${normalizePhoneNumber(settings.whatsappNumber)}?text=${encodeURIComponent(message)}`;

        cart=[];saveCart();form.reset();renderProducts();renderCategories();
        $("#whatsapp-link").href=whatsappUrl;renderReceipt(order);form.classList.add("hidden");$("#checkout-success").classList.remove("hidden");
        if(whatsappWindow){whatsappWindow.location.href=whatsappUrl;toast(t("orderReceived"));}
        else toast(t("whatsappFallback"));
      }catch(error){
        if(whatsappWindow&&!whatsappWindow.closed)whatsappWindow.close();
        report(error);
      }
    });

    // لوحة التحكم - إضافة وحذف وتعديل
    $("#admin-content").addEventListener("click",async event=>{
      const restock=event.target.closest("[data-restock-order]");
      if(restock){
        try{
          await restockReturnedOrder(restock.dataset.restockOrder);
          renderProducts();renderCart();renderAdminOrders();toast(t("inventoryRestored"));
        }catch(error){report(error);}
        return;
      }
      const add=event.target.closest("#add-product"),cancel=event.target.closest("#cancel-product"),edit=event.target.closest("[data-edit]"),deleteButton=event.target.closest("[data-delete]"),deleteCategory=event.target.closest("[data-delete-category]");
      if(add)renderProductForm();
      if(cancel){editingId=null;$("#product-form-container").innerHTML="";}
      if(edit)renderProductForm(products.find(item=>item.id===edit.dataset.edit));

      if(deleteButton&&window.confirm(t("productDeleteConfirm"))){
        const prodId = deleteButton.dataset.delete;
        try{
          const { error } = await supabase.from('products').delete().eq('id', prodId);
          if(error) throw error;
          products=products.filter(item=>item.id!==prodId);
          cart=cart.filter(item=>item.id!==prodId);
          saveCart();renderProducts();renderCategories();renderAdminProducts();toast(t("productDeleted"));
        }catch(error){report(error);}
      }

      if(deleteCategory){
        const category=categories.find(item=>item.id===deleteCategory.dataset.deleteCategory);
        if(!category)return;
        if(products.some(item=>item.category===category.name))return toast(t("categoryInUse"));
        try{
          const { error } = await supabase.from('categories').delete().eq('id', category.id);
          if(error) throw error;
          categories=categories.filter(item=>item.id!==category.id);
          if(activeCategory===category.name)activeCategory="all";
          renderCategories();renderAdminCategories();toast(t("categoryDeleted"));
        }catch(error){report(error);}
      }
    });

    $("#admin-content").addEventListener("input",event=>{
      if(event.target.matches("#order-search"))orderSearchTerm=event.target.value;
      else if(event.target.matches("#order-date-from"))orderDateFrom=event.target.value;
      else if(event.target.matches("#order-date-to"))orderDateTo=event.target.value;
      else return;
      applyOrderFilters();
    });

    $("#admin-content").addEventListener("change",async event=>{
      const select=event.target.closest("[data-order-status]");
      if(!select)return;
      try{
        await updateOrderStatus(select.dataset.orderStatus,select.value);
        renderAdminOrders();toast(t("orderStatusUpdated"));
      }catch(error){report(error);renderAdminOrders();}
    });

    $("#admin-content").addEventListener("submit",async event=>{
      const form=event.target;
      if(form.id==="product-form"){
        event.preventDefault();const data=new FormData(form);
        try{
          const previous=editingId?products.find(item=>item.id===editingId):null;
          const image=await readImage(form.elements.imageFile.files[0]);
          const payload = {
            name: String(data.get("name")).trim(),
            name_ar: String(data.get("nameAr")||"").trim(),
            category: String(data.get("category")),
            category_ar: String(data.get("categoryAr")||"").trim(),
            price: Number(data.get("price")),
            compare_price: data.get("comparePrice")?Number(data.get("comparePrice")):null,
            stock: Number(data.get("stock")),
            badge: String(data.get("badge")||"").trim(),
            description: String(data.get("description")||"").trim(),
            description_ar: String(data.get("descriptionAr")||"").trim(),
            image: image || String(data.get("imageUrl")||"").trim() || previous?.image || ""
          };

          if(editingId){
            const { data: updated, error } = await supabase.from('products').update(payload).eq('id', editingId).select().single();
            if(error) throw error;
            products = products.map(p => p.id === editingId ? {
              ...payload,
              id: updated.id,
              nameAr: updated.name_ar,
              categoryAr: updated.category_ar,
              comparePrice: updated.compare_price,
              descriptionAr: updated.description_ar
            } : p);
          } else {
            const { data: inserted, error } = await supabase.from('products').insert([payload]).select().single();
            if(error) throw error;
            products.unshift({
              ...payload,
              id: inserted.id,
              nameAr: inserted.name_ar,
              categoryAr: inserted.category_ar,
              comparePrice: inserted.compare_price,
              descriptionAr: inserted.description_ar
            });
          }

          editingId=null;renderProducts();renderCategories();renderAdminProducts();toast(t("productSaved"));
        }catch(error){report(error);}
      }

      if(form.id==="category-form"){
        event.preventDefault();
        const data=new FormData(form),name=String(data.get("name")||"").trim(),nameAr=String(data.get("nameAr")||"").trim();
        if(categories.some(item=>item.name.toLowerCase()===name.toLowerCase()))return toast(t("categoryExists"));
        try{
          const { data: cat, error } = await supabase.from('categories').insert([{ name, name_ar: nameAr }]).select().single();
          if(error) throw error;
          categories.push({ id: cat.id, name: cat.name, nameAr: cat.name_ar });
          categories.sort((a,b)=>a.name.localeCompare(b.name));
          activeCategory="all";renderCategories();renderAdminCategories();toast(t("categoryCreated"));
        }catch(error){report(error);}
      }

      if(form.id==="settings-form"){
        event.preventDefault();const data=new FormData(form);
        try{
          const whatsappNumber=String(data.get("whatsappNumber")||"").trim();
          normalizePhoneNumber(whatsappNumber);
          const logo=await readImage(form.elements.logoFile.files[0]),updated={name:String(data.get("name")).trim(),nameAr:String(data.get("nameAr")||"").trim(),logo:logo||settings.logo||"",whatsappNumber};
          localStorage.setItem("volt-house-settings", JSON.stringify(updated));
          settings=updated;applySettings();renderAdminSettings();toast(t("settingsSaved"));
        }catch(error){report(error);}
      }

    });

    document.addEventListener("keydown",event=>{if(event.key==="Escape"){closeCart();closeModal();$("#admin-panel").classList.add("hidden");}});
  }

  init();
})();

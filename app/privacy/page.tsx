import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "سياسة الخصوصية وشروط الاستخدام - نِبراس",
  description: "اقرأ سياسة الخصوصية وشروط الاستخدام لتطبيق نِبراس. تعرف على كيفية حماية بياناتك والتزامنا بخصوصيتك.",
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4">
              سياسة الخصوصية وشروط الاستخدام
            </h1>
            <p className="text-muted-foreground">
              آخر تحديث: {new Date().toLocaleDateString('ar-SA', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            {/* Privacy Policy Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-6 pb-2 border-b border-border">
                سياسة الخصوصية
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                    ١. مقدمة
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    مرحباً بكم في نِبراس. نحن ملتزمون بحماية خصوصيتكم وضمان تجربة إيجابية عند استخدام تطبيقنا.
                    توضح سياسة الخصوصية هذه كيفية تعاملنا مع معلوماتكم عند استخدام تطبيقنا المتاح على متجر Google Play.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                    ٢. المعلومات التي نجمعها
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong className="text-foreground">نحن لا نجمع أي بيانات شخصية من المستخدمين.</strong> التزامنا بخصوصيتكم
                    يعني أننا صممنا تطبيقنا لتقليل جمع البيانات مع تقديم تجربة مخصصة.
                  </p>
                  <div className="bg-secondary rounded-lg p-4 border border-border">
                    <h4 className="font-semibold text-foreground mb-2">معلومات المصادقة</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      نستخدم تسجيل الدخول عبر Google كطريقة المصادقة الوحيدة. عند تسجيل الدخول بحساب Google الخاص بك،
                      نتلقى فقط معلومات الملف الشخصي الأساسية (الاسم والبريد الإلكتروني وصورة الملف الشخصي)
                      للتعرف عليك داخل التطبيق. تُستخدم هذه المعلومات فقط من أجل:
                    </p>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>إنشاء حسابك والحفاظ عليه</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>السماح للتطبيق بالتعرف عليك عبر الجلسات</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>تمكين توصيات المحتوى المخصصة</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                    ٣. كيف نستخدم معلوماتك
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    يُستخدم نشاطك داخل التطبيق (مثل الكتب التي تتصفحها والفيديوهات التي تشاهدها والمحتوى الذي تتفاعل معه)
                    محلياً لإنشاء تجربة مخصصة. هذا يسمح لنا بـ:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>التوصية بكتب وفيديوهات ذات صلة باهتماماتك</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>إنشاء صفحة رئيسية مخصصة حسب تفضيلاتك</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>تذكر سجل القراءة والمشاهدة للوصول السهل</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>تحسين تجربتك الشاملة مع التطبيق</span>
                    </li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    تعمل هذه التخصيص بشكل مشابه لمنصات مثل YouTube، حيث يساعد نشاطك التطبيق على فهم اهتماماتك
                    وتقديم محتوى أكثر صلة.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                    ٤. البيانات التي لا نجمعها
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    نريد أن نكون شفافين تماماً بشأن ممارسات البيانات لدينا. نحن لا نجمع:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>معلومات شخصية تتجاوز بيانات تسجيل الدخول الأساسية عبر Google</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>بيانات الموقع</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>معلومات جهات الاتصال أو دفاتر العناوين</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>المعلومات المالية</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>معرّفات الجهاز لأغراض الإعلان</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>البيانات الصحية أو اللياقة البدنية</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>الرسائل أو الصور أو الملفات الشخصية الأخرى</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                    ٥. مشاركة البيانات والإفصاح عنها
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">نحن لا نبيع أو نتاجر أو ننقل معلوماتك إلى أطراف ثالثة.</strong> بيانات
                    المصادقة من تسجيل الدخول عبر Google تُستخدم فقط لغرض تقديم خدماتنا لك. قد نفصح عن المعلومات
                    فقط إذا كان القانون يتطلب ذلك أو لحماية حقوقنا وسلامة مستخدمينا.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                    ٦. أمان البيانات
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    نطبق التدابير التقنية والتنظيمية المناسبة لحماية المعلومات المحدودة التي نتعامل معها.
                    يوفر تسجيل الدخول عبر Google أماناً بمعايير صناعية للمصادقة، ونتبع أفضل الممارسات
                    لضمان بقاء حسابك آمناً.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                    ٧. خصوصية الأطفال
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    تطبيقنا مصمم للجمهور العام الذي يسعى للمعرفة. نحن لا نجمع عن قصد معلومات شخصية
                    من الأطفال دون سن ١٣ عاماً. إذا كنت والداً أو وصياً وتعتقد أن طفلك قد قدم لنا
                    معلومات شخصية، يرجى التواصل معنا حتى نتمكن من اتخاذ الإجراء المناسب.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                    ٨. حقوقك
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    لديك الحق في:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>الوصول إلى المعلومات الشخصية التي نحتفظ بها عنك</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>طلب حذف حسابك والبيانات المرتبطة به</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>إلغاء الاشتراك في ميزات التخصيص</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>إلغاء أذونات تسجيل الدخول عبر Google في أي وقت من خلال إعدادات حساب Google الخاص بك</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                    ٩. التغييرات على سياسة الخصوصية
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    قد نحدث سياسة الخصوصية هذه من وقت لآخر. سنخطرك بأي تغييرات عن طريق نشر سياسة الخصوصية
                    الجديدة على هذه الصفحة وتحديث تاريخ {'"'}آخر تحديث{'"'}. نشجعك على مراجعة سياسة الخصوصية
                    هذه دورياً لمعرفة أي تغييرات.
                  </p>
                </div>
              </div>
            </section>

            {/* Terms of Service Section */}
            <section id="terms" className="scroll-mt-24">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-6 pb-2 border-b border-border">
                شروط الاستخدام
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                    ١. قبول الشروط
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    بتحميل أو تثبيت أو استخدام تطبيق نِبراس، فإنك توافق على الالتزام بشروط الاستخدام هذه.
                    إذا كنت لا توافق على هذه الشروط، يرجى عدم استخدام تطبيقنا.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                    ٢. وصف الخدمة
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    نِبراس هو منصة لمشاركة المعرفة توفر الوصول إلى محتوى تعليمي يشمل الكتب والفيديوهات
                    ومواد أخرى تتعلق بالمعارف الدينية من مختلف المذاهب الإسلامية، بالإضافة إلى العلوم الدنيوية.
                    مكتبة المحتوى لدينا في نمو وتطور مستمر لخدمة مجتمع المتعلمين.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                    ٣. حسابات المستخدمين
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    للوصول إلى الميزات المخصصة، يجب عليك تسجيل الدخول باستخدام حساب Google الخاص بك.
                    بإنشاء حساب، فإنك توافق على:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>تقديم معلومات دقيقة وكاملة</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>الحفاظ على أمان بيانات اعتماد حسابك</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>تحمل المسؤولية عن جميع الأنشطة التي تحدث تحت حسابك</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>إخطارنا فوراً بأي استخدام غير مصرح به لحسابك</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                    ٤. الاستخدام المقبول
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    أنت توافق على استخدام نِبراس فقط للأغراض المشروعة ووفقاً لهذه الشروط.
                    أنت توافق على عدم:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>استخدام التطبيق بأي طريقة تنتهك القوانين أو اللوائح المعمول بها</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>محاولة الوصول غير المصرح به إلى أي جزء من التطبيق</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>التدخل في سلامة التطبيق أو أدائه أو تعطيله</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>نسخ أو تعديل أو توزيع أو إنشاء أعمال مشتقة من محتوانا دون إذن</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>استخدام أنظمة أو برامج آلية لاستخراج البيانات من التطبيق</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                    ٥. الملكية الفكرية
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    المحتوى المتاح عبر نِبراس، بما في ذلك على سبيل المثال لا الحصر النصوص والرسومات
                    والشعارات والصور والمحتوى الصوتي والمرئي، محمي بموجب قوانين حقوق النشر والعلامات التجارية
                    وقوانين الملكية الفكرية الأخرى. يُقدم المحتوى للاستخدام التعليمي الشخصي غير التجاري فقط.
                    لا يجوز لك إعادة إ��تاج أو توزيع أو إنشاء أعمال مشتقة دون إذن كتابي صريح.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                    ٦. إخلاء مسؤولية المحتوى
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    يقدم نِبراس محتوى من مختلف المذاهب الإسلامية والعلوم الدنيوية لأغراض تعليمية.
                    وجود أي محتوى لا يشكل تأييداً لأي وجهة نظر معينة. نشجع المستخدمين على التعامل مع
                    جميع المحتوى بتفكير نقدي واستشارة العلماء المؤهلين للإرشاد الديني.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                    ٧. التوفر والتحديثات
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    نسعى للحفاظ على توفر نِبراس في جميع الأوقات، لكننا لا نضمن الوصول المتواصل إلى خدماتنا.
                    قد نعدل أو نعلق أو نوقف أي جزء من التطبيق في أي وقت دون إشعار. بما أن أرشيفنا في نمو
                    مستمر، سيُضاف محتوى جديد بانتظام، وقد يُحدث المحتوى الحالي أو يُزال.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                    ٨. تحديد المسؤولية
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    إلى أقصى حد يسمح به القانون، لن يكون نِبراس ومطوروه مسؤولين عن أي أضرار غير مباشرة
                    أو عرضية أو خاصة أو تبعية أو عقابية، بما في ذلك على سبيل المثال لا الحصر خسارة الأرباح
                    أو البيانات أو الخسائر غير الملموسة الأخرى الناتجة عن استخدامك أو عدم قدرتك على استخدام التطبيق.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                    ٩. التعويض
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    أنت توافق على تعويض نِبراس ومطوريه والمسؤولين والموظفين والدفاع عنهم وحمايتهم من أي
                    مطالبات أو أضرار أو التزامات أو تكاليف تنشأ عن استخدامك للتطبيق أو انتهاكك لهذه الشروط.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                    ١٠. التغييرات على الشروط
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    نحتفظ بالحق في تعديل هذه الشروط في أي وقت. سيتم نشر التغييرات على هذه الصفحة مع
                    تاريخ {'"'}آخر تحديث{'"'} محدث. استمرارك في استخدام التطبيق بعد إجراء التغييرات يشكل
                    قبولاً للشروط المعدلة.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                    ١١. التواصل معنا
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    إذا كانت لديك أي أسئلة أو مخاوف بشأن سياسة الخصوصية أو شروط الاستخدام هذه،
                    يرجى التواصل معنا عبر البريد الإلكتروني:
                  </p>
                  <a 
                    href="mailto:oroekekdkdjjddjjdke@gmail.com" 
                    className="inline-block mt-2 text-primary hover:text-primary/80 transition-colors font-medium"
                    dir="ltr"
                  >
                    oroekekdkdjjddjjdke@gmail.com
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  )
}

import { BookOpen, Video, User, Sparkles, Library, Globe, Lightbulb, TrendingUp, Rocket, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-32 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-32 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Islamic Greeting */}
        <div className="mb-8">
          <p className="text-2xl sm:text-3xl font-serif text-primary mb-2">
            السَّلامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُه
          </p>
          <p className="text-lg text-muted-foreground">
            أهلاً وسهلاً بكم في تطبيق نِبراس
          </p>
        </div>
        
        {/* Launch Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 mb-8">
          <Rocket className="h-5 w-5 text-primary" />
          <span className="text-sm font-medium text-primary">إطلاق جديد - أرشيف متنامٍ باستمرار</span>
          <Star className="h-4 w-4 text-accent fill-accent" />
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold text-foreground leading-tight mb-6 text-balance">
          اكتشف نور
          <span className="block text-primary mt-2">المعرفة</span>
        </h1>
        
        <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-4 text-pretty">
          <strong className="text-foreground">نِبراس</strong> هو أرشيف علمي <span className="text-primary font-semibold">ناشئ ومتنامٍ باستمرار</span>،
          يُعنى بجمع المعارف الدينية والدنيوية من مختلف المذاهب الإسلامية والعلوم الطبيعية وغيرها.
        </p>
        
        <p className="text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-10">
          ليس مجرد كتب فحسب! بل فيديوهات تعليمية ومحتوى متنوع يُضاف إليه باستمرار،
          مع تجربة مخصصة تتكيف مع اهتماماتك.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button size="lg" className="px-8 py-6 text-lg" asChild>
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
              حمّل من Google Play
            </a>
          </Button>
          <Button variant="outline" size="lg" className="px-8 py-6 text-lg" asChild>
            <a href="#features">
              اكتشف المميزات
            </a>
          </Button>
        </div>
        
        {/* Key highlights without numbers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { icon: BookOpen, label: "كتب متنوعة", desc: "أرشيف متنامٍ" },
            { icon: Video, label: "فيديوهات تعليمية", desc: "محتوى مرئي" },
            { icon: Globe, label: "مذاهب متعددة", desc: "تنوع فكري" },
            { icon: User, label: "تجربة مخصصة", desc: "حسب اهتماماتك" },
          ].map((item, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/30 transition-colors">
              <CardContent className="p-4 text-center">
                <item.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-base font-semibold text-foreground mb-1">{item.label}</div>
                <div className="text-xs text-muted-foreground">{item.desc}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export function FeaturesSection() {
  const features = [
    {
      icon: Library,
      title: "أرشيف علمي شامل",
      description: "مجموعة واسعة من الكتب تشمل النصوص الدينية والفقه والعقيدة والفلسفة والعلوم الطبيعية من مختلف المذاهب والمدارس الفكرية."
    },
    {
      icon: Video,
      title: "فيديوهات تعليمية",
      description: "نِبراس ليس مجرد كتب! استمتع بمحتوى مرئي متنوع يشمل محاضرات ودروس ونقاشات من علماء ومفكرين بارزين."
    },
    {
      icon: User,
      title: "تجربة مخصصة لك",
      description: "سجّل الدخول بحساب Google الخاص بك لتجربة تعلّم مخصصة. يتعرف التطبيق على اهتماماتك من خلال الكتب التي تتصفحها والفيديوهات التي تشاهدها."
    },
    {
      icon: Globe,
      title: "تعدد المذاهب والمدارس",
      description: "احتضان لثراء المعرفة الإسلامية من مختلف المذاهب الفقهية والمدارس الفكرية، مع تقديمها بموضوعية واحترام."
    },
    {
      icon: Lightbulb,
      title: "العلوم الدنيوية",
      description: "بالإضافة إلى المعارف الدينية، اكتشف محتوى في العلوم الطبيعية والرياضيات والفلك والطب وغيرها من المجالات التي أثرت الحضارة الإسلامية."
    },
    {
      icon: TrendingUp,
      title: "محتوى متنامٍ باستمرار",
      description: "أرشيفنا في نمو مستمر! كتب وفيديوهات ومصادر جديدة تُضاف بانتظام. عُد دائماً لاكتشاف المزيد من المحتوى الذي يُعمّق فهمك."
    }
  ]

  return (
    <section id="features" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">مميزات التطبيق</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            كل ما تحتاجه للتعلم
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            نِبراس يجمع لك أفضل ما في التراث العلمي والمعرفة الحديثة في منصة واحدة جميلة وسهلة الاستخدام.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-xl hover:border-primary/20 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export function PersonalizationSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <User className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-accent">تجربة شخصية</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              رفيقك الشخصي
              <span className="block text-primary mt-2">في رحلة التعلم</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              مثل YouTube والمنصات الحديثة الأخرى، يُنشئ نِبراس تجربة مخصصة تتكيف مع اهتماماتك الفريدة ورحلتك في طلب العلم.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "سجّل الدخول بسهولة عبر حساب Google الخاص بك",
                "تصفّح الكتب وشاهد الفيديوهات التي تهمك",
                "احصل على توصيات مخصصة بناءً على نشاطك",
                "ابنِ مكتبتك الخاصة من المحتوى المحفوظ",
                "تابع تقدمك في رحلة التعلم"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-secondary rounded-xl p-5 border border-border">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">خصوصيتك أولاً:</strong> نستخدم تسجيل الدخول عبر Google للمصادقة فقط.
                نشاطك داخل التطبيق يساعد في تخصيص تجربتك، لكننا <span className="text-primary font-medium">لا نجمع أو نبيع بياناتك الشخصية</span>.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/10 via-secondary to-accent/10 rounded-3xl p-8 border border-border shadow-2xl">
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">مُوصى به لك</div>
                    <div className="text-sm text-muted-foreground">بناءً على اهتماماتك</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-card rounded-xl border border-border shadow-sm">
                    <TrendingUp className="h-5 w-5 text-primary mb-2" />
                    <div className="text-sm text-muted-foreground">محتوى جديد</div>
                    <div className="text-base font-semibold text-foreground">يُضاف يومياً</div>
                  </div>
                  <div className="p-4 bg-card rounded-xl border border-border shadow-sm">
                    <Sparkles className="h-5 w-5 text-accent mb-2" />
                    <div className="text-sm text-muted-foreground">توصيات</div>
                    <div className="text-base font-semibold text-foreground">مُخصصة لك</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["فقه", "حديث", "علوم", "تاريخ", "عقيدة", "فلسفة"].map((tag) => (
                    <span key={tag} className="px-3 py-1.5 bg-secondary rounded-full text-sm text-muted-foreground border border-border">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-6">
          ما معنى نِبراس؟
        </h2>
        <p className="text-xl max-w-3xl mx-auto leading-relaxed mb-8 opacity-90">
          <em className="not-italic font-serif text-2xl">نِبراس</em> كلمة عربية تعني <strong>{'"'}المصباح{'"'}</strong> أو <strong>{'"'}النور{'"'}</strong>.
          وكما يُنير المصباح الظلام، يهدف تطبيقنا إلى إنارة العقول بنور المعرفة،
          وإرشاد طالبي العلم عبر بحر الحكمة الدينية والدنيوية الواسع.
        </p>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { title: "نُنير", description: "نُسلط الضوء على المواضيع المعقدة من خلال محتوى منتقى بعناية" },
            { title: "نُرشد", description: "نُساعدك على التنقل في عالم المعرفة الإسلامية والدنيوية الواسع" },
            { title: "نُلهم", description: "نُشعل شرارة الفضول وحب التعلم مدى الحياة" }
          ].map((item, index) => (
            <div key={index} className="text-center p-6 rounded-2xl bg-primary-foreground/5">
              <h3 className="text-2xl font-serif font-semibold mb-3">{item.title}</h3>
              <p className="opacity-80 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function GrowthSection() {
  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <Rocket className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-accent">تطبيق ناشئ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            أرشيف في نمو مستمر
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            نِبراس في مراحله الأولى ويتطور باستمرار. انضم إلينا في هذه الرحلة وكن جزءاً من مجتمع طالبي العلم.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-card border-border text-center p-6">
            <CardContent className="p-0">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-2">محتوى متزايد</h3>
              <p className="text-muted-foreground">كتب وفيديوهات جديدة تُضاف بانتظام إلى الأرشيف</p>
            </CardContent>
          </Card>
          
          <Card className="bg-card border-border text-center p-6">
            <CardContent className="p-0">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-2">تحديثات مستمرة</h3>
              <p className="text-muted-foreground">مميزات جديدة وتحسينات دورية لتجربة أفضل</p>
            </CardContent>
          </Card>
          
          <Card className="bg-card border-border text-center p-6">
            <CardContent className="p-0">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-2">جودة عالية</h3>
              <p className="text-muted-foreground">محتوى منتقى بعناية من مصادر موثوقة ومعتمدة</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export function CTASection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-br from-primary/5 via-secondary to-accent/5 rounded-3xl p-10 border border-border">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            ابدأ رحلتك اليوم
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            انضم إلى طالبي العلم الذين اكتشفوا نور المعرفة عبر نِبراس.
            حمّل التطبيق الآن وابدأ الاستكشاف.
          </p>
          <Button size="lg" className="px-10 py-6 text-lg" asChild>
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
              حمّل من Google Play
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-serif text-xl font-bold">ن</span>
              </div>
              <span className="text-2xl font-serif font-bold text-foreground">نِبراس</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
              نُنير العقول بنور العلم والمعرفة من خلال تراث العلماء والمفكرين.
              رحلتك نحو المعرفة تبدأ من هنا.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif font-semibold text-foreground mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  المميزات
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  عن نِبراس
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif font-semibold text-foreground mb-4">قانوني</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  سياسة الخصوصية
                </Link>
              </li>
              <li>
                <Link href="/privacy#terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  شروط الاستخدام
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif font-semibold text-foreground mb-4">تواصل معنا</h4>
            <a 
              href="mailto:oroekekdkdjjddjjdke@gmail.com" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              dir="ltr"
            >
              oroekekdkdjjddjjdke@gmail.com
            </a>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            جميع الحقوق محفوظة &copy; {new Date().getFullYear()} نِبراس
          </p>
        </div>
      </div>
    </footer>
  )
}

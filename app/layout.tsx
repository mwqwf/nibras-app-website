import type { Metadata } from 'next'
import { Noto_Naskh_Arabic, Tajawal } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const notoNaskhArabic = Noto_Naskh_Arabic({ 
  subsets: ['arabic'],
  variable: '--font-naskh',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const tajawal = Tajawal({ 
  subsets: ['arabic'],
  variable: '--font-tajawal',
  display: 'swap',
  weight: ['300', '400', '500', '700', '800'],
})

export const metadata: Metadata = {
  title: 'نِبراس - بوابتك إلى عالم المعرفة',
  description: 'نِبراس هو أرشيف علمي ناشئ ومتنامٍ باستمرار، يُعنى بجمع المعارف الدينية والدنيوية من مختلف المذاهب الإسلامية والعلوم الطبيعية وغيرها. استكشف الكتب والفيديوهات والمحتوى المخصص لك.',
  keywords: ['نبراس', 'كتب إسلامية', 'أرشيف علمي', 'المذاهب الإسلامية', 'فيديوهات تعليمية', 'العلوم الطبيعية', 'تطبيق إسلامي'],
  openGraph: {
    title: 'نِبراس - بوابتك إلى عالم المعرفة',
    description: 'استكشف مجموعة واسعة من المعارف الدينية والدنيوية من خلال الكتب والفيديوهات.',
    type: 'website',
  },
}

export const viewport = {
  themeColor: '#1a5f4a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${notoNaskhArabic.variable} ${tajawal.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

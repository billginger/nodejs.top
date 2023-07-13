import Link from 'next/link'
import PageTitle from './components/page-title'
import Category from './components/category'
import './page.css'

const Home = () => (
  <>
    <PageTitle>Home Page</PageTitle>
    <div className="blog-summary relative pb-14 sm:pl-36">
      <div className="absolute -top-2 left-0 w-20 h-full text-center hidden sm:block">
        <div className="text-6xl text-[--theme-color]">07</div>
        <div className="mt-1 font-[MarcellusSC]">JULY</div>
      </div>
      <h2 className="text-2xl font-[MarcellusSC]">
        <Link className="hover:text-[--theme-color]" href="/blog/2023-07-07/second-blog-post">第二篇博客文章</Link>
      </h2>
      <div className="text-sm text-neutral-500 mt-2 mb-4">
        <Category>软件</Category> / July 7, 2023
      </div>
      <div className="text-neutral-600">
        <p>第一自然段。第一自然段。第一自然段。第一自然段。第一自然段。第一自然段。第一自然段。第一自然段。第一自然段。第一自然段。
          第一自然段。第一自然段。第一自然段。第一自然段。第一自然段。第一自然段。第一自然段。第一自然段。第一自然段。第一自然段。
          第一自然段。第一自然段。</p>
      </div>
      <div className="text-sm text-neutral-400">&lt;还有123字&gt;</div>
    </div>
    <div className="blog-summary relative pb-14 sm:pl-36">
      <div className="absolute -top-2 left-0 w-20 h-full text-center hidden sm:block" />
      <h2 className="text-2xl font-[MarcellusSC]">
        <Link className="hover:text-[--theme-color]" href="/blog/2023-07-07/hello-vercel">Hello Vercel</Link>
      </h2>
      <div className="text-sm text-neutral-500 mt-2 mb-4">
        <Category>随笔</Category> / July 7, 2023
      </div>
      <div className="text-neutral-600">
        <p>第一自然段。第一自然段。第一自然段。第一自然段。第一自然段。第一自然段。第一自然段。第一自然段。</p>
      </div>
      <div className="text-sm text-neutral-400">&lt;还有456字&gt;</div>
    </div>
  </>
)

export default Home

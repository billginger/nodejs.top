import Link from 'next/link'
import PageTitle from '../components/page-title'
import NavCategory from '../components/nav-category'
import Category from '../components/category'
import Pagination from '../components/pagination'

const Blog = () => (
  <>
    <PageTitle>Blog List</PageTitle>
    <div className="flex">
      <div className="w-64">
        <div className="pb-4 font-[MarcellusSC]">Category</div>
        <NavCategory />
      </div>
      <div className="grow">
        <div className="pb-4 font-[MarcellusSC]">全部</div>
        <div className="py-3 flex justify-between border-t border-neutral-200">
          <div>
            <Category>软件</Category>
            <h2 className="inline-block pl-3 text-lg font-[MarcellusSC]">
              <Link className="hover:text-[--theme-color]" href="/blog/2023-07-07/second-blog-post">第二篇博客文章</Link>
            </h2>
          </div>
          <div className="text-sm leading-6 text-neutral-500">2023-07-07</div>
        </div>
        <div className="py-3 flex justify-between border-t border-neutral-200">
          <div>
            <Category>随笔</Category>
            <h2 className="inline-block pl-3 text-lg font-[MarcellusSC]">
              <Link className="hover:text-[--theme-color]" href="/blog/2023-07-07/hello-vercel">Hello Vercel</Link>
            </h2>
          </div>
          <div className="text-sm leading-6 text-neutral-500">2023-07-07</div>
        </div>
        <Pagination />
      </div>
    </div>
  </>
)

export const metadata = {
  title: 'Blog List - Nodejs.top',
}

export default Blog

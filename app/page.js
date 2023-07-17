import Link from 'next/link'
import getPosts from '/lib/posts'
import PageTitle from './components/page-title'
import Category from './components/category'
import './page.css'

const Home = () => {
  // TODO: 只读取最新的 10 篇，点击“Load More”按钮加载更多
  const { posts } = getPosts()
  return (
    <>
      <PageTitle>Home Page</PageTitle>
      {posts.map(({ date, slug, dateDay, dateMonth, title, category, summary, wordsLeft }, index) => (
        <div className="blog-summary relative pb-14 sm:pl-36" key={slug}>
          <div className="absolute -top-2 left-0 w-20 h-full text-center hidden sm:block">
            {index > 0 && posts[index - 1].date == date ? '' : (
              <>
                <div className="text-6xl text-[--theme-color]">{dateDay}</div>
                <div className="mt-1 font-[MarcellusSC]">{dateMonth}</div>
              </>
            )}
          </div>
          <h2 className="text-2xl font-[MarcellusSC]">
            <Link className="hover:text-[--theme-color]" href={`/blog/${date}/${slug}`}>{title}</Link>
          </h2>
          <div className="text-sm text-neutral-500 mt-2 mb-4">
            <Category>{category}</Category> / {date}
          </div>
          <div className="text-neutral-600">
            <p>{summary}</p>
          </div>
          <div className="text-sm text-neutral-400">&lt;还有{wordsLeft}字&gt;</div>
        </div>
      ))}
    </>
  )
}

export default Home

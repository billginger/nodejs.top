import dynamic from 'next/dynamic'
import PageTitle from '../components/page-title'

// Disable pre-rendering for anti-scraping
const Email = dynamic(() => import('../components/email'), { ssr: false })

const About = () => (
  <>
    <PageTitle>About Me</PageTitle>
    <div>
      <p>时光荏苒，岁月如梭。曾经我还是一个即将踏出校园的孩子，用 ASP 和 Flash 鼓捣着自己的个人网站，并在自己的网站上嬉笑怒骂，评古论今，转眼已过去了 20 多年。</p>
      <p>20 年来，从 ASP 到 PHP，再到 React 和 Node.js，我还是一个默默无闻的码农。20 年来，也想过要跳脱出码农这个身份，奈何自己玩不转人情世故，只知道 if 和 else。20 年来，也曾走出去看了看外面的世界，兜兜转转，最终还是没有离开自己的故乡。</p>
      <p>回首过往，平淡如水。展望未来，心中亦无波澜。</p>
      <p>现在，我是一名无业游民，说好听点叫自由职业者。假如互联网是街头巷尾，我就是游走在街头巷尾的那个老码农，骑着一辆破旧的自行车，车把上挂着一个扩音器，扩音器反复播放着：软件开发，网页制作，小程序……</p>
      <p className="italic"><br />项目外包/技术合作/雇佣招募，欢迎电邮联系：<Email /></p>
    </div>
  </>
)

export const metadata = {
  title: 'About Me - Nodejs.top',
}

export default About

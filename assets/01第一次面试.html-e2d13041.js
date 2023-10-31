import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as c,c as l,b as n,d as s,e,a as t}from"./app-02a05be4.js";const u={},i=n("h1",{id:"关于我第一次面试的这件事",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#关于我第一次面试的这件事","aria-hidden":"true"},"#"),s(" 关于我第一次面试的这件事")],-1),r={href:"http://localhost:8080/blogs/",target:"_blank",rel:"noopener noreferrer"},d=t('<h3 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h3><p>在一个水群的一天，我认识了一个正在字节实习大牛，为什么说他是大牛。因为同样大三，我还在学校苦逼，大牛以及是第二段实习（太强啦）。然后他在群里说他现在的部门还有个hc，ohh，我刚好前两天查了我在字节的流程锁以及解了——因为在牛客上乱搞，然后被锁住了:(——于是，我找上了这位大牛，在他的建议下，开启了海投！</p><blockquote><p>hhh，由于我简历太la，被这个大牛内推后，直接简历就挂了</p></blockquote><h3 id="关于海投" tabindex="-1"><a class="header-anchor" href="#关于海投" aria-hidden="true">#</a> 关于海投</h3><p>在进行海投后，大部分都是石城大海的，Boss上基本上没人鸟我这个蒻冀，但是一下子投上瘾了。除开在Boss上丢，我还去了牛客上头，应该是运气好，遇到了个字节内推和滴滴内推的。然后我就约到面试了。</p><blockquote><p>这个时候的我是比较激动的，毕竟是第一次，有面试，至少不是简历挂。（这说明我也不是太拉嘛）</p></blockquote><h3 id="滴滴一面-二面" tabindex="-1"><a class="header-anchor" href="#滴滴一面-二面" aria-hidden="true">#</a> 滴滴一面，二面</h3><p>讲真的，滴滴的面试并不是很难。两位面试官都很友好（日常实习只有两面，今天还没出结果，应该是寄了）。面试跟我在牛客上的看的面经差不多，开始先来个自我介绍，然后开始抓我项目里面的细节问，比如我写了一些优化的东西，<code>monorepo</code>，对于一些工具的封装。基本上是把我列在项目亮点里的全部提出来问了一遍qwq（我丝毫不慌，巴拉巴拉能说一大把）。然后就到了经典八股了，比如什么作用域和作用域链，原型和原型链。大部分都是顺着我讲到什么，面试官就问什么，所以整个面试过程很舒服。</p><p>二面就有点小痛苦了，这归咎于我是还没准备就开始投，然后八股文看的少（因为问的基本上都是八股文）。二面问了二十多分钟的项目，然后面试官突然来一句“我看你一面没问过css，那就来点css吧”，我内心是裂开的qwq。对于我这种<code>flex</code>重度用户来说。结果也很明显，答的一团糟。两轮面试我都贴下面了，真的很简单。</p>',9),k={href:"https://www.nowcoder.com/discuss/547146116937146368?sourceSSR=users",target:"_blank",rel:"noopener noreferrer"},h={href:"https://www.nowcoder.com/discuss/549022030604013568?sourceSSR=users",target:"_blank",rel:"noopener noreferrer"},m=t(`<h3 id="字节一面" tabindex="-1"><a class="header-anchor" href="#字节一面" aria-hidden="true">#</a> 字节一面</h3><p>跟滴滴一样，先自我介绍和项目走一套，抓了我项目里的几个点问了一下，配置化表单和配置化表格这些，项目问我是丝毫不带一点慌的，不过问优化我估计就得噶qwq。然后这位面试官也喜欢问css，也是一顿折磨，问了一些什么<code>position</code>的属性，然后应用场景等等，也问了垂直居中，不过没加条件（不知宽高），还问了选择器，包括优先级这些。因为我提前示弱了，我八股拉，是<code>flex</code>重度使用者，然后他问我个<code>flex</code>是由哪三个属性组合的，然后我就噶了qwq。然后就到了笔试环节~</p><h5 id="第一题-事件循环的题" tabindex="-1"><a class="header-anchor" href="#第一题-事件循环的题" aria-hidden="true">#</a> 第一题：事件循环的题</h5><p>这种题都是典中典了，把事假循环玩明白随便答，不过出题者要是想ex人，也是个ex人的方法。然后回答完肯定会问事假循环的~</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10000</span><span class="token punctuation">;</span> i <span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>i <span class="token operator">===</span> <span class="token number">9999</span><span class="token punctuation">)</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 结果：2,3,5,4，1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="第二题-三栏布局" tabindex="-1"><a class="header-anchor" href="#第二题-三栏布局" aria-hidden="true">#</a> 第二题：三栏布局</h5><p>对于一个盒子左中右，左右<code>100px</code>，中间自适应。如果宽度小于<code>360px</code>就换成上中下。</p><p>我是<code>flex</code>直接弄的（毕竟我是<code>flex</code>重度用户）。然后也用到了媒体查询，但是具体细节不知道咋写了，面试官很好，没有追究我qwq</p><h5 id="第三问-链表的倒数第k个元素" tabindex="-1"><a class="header-anchor" href="#第三问-链表的倒数第k个元素" aria-hidden="true">#</a> 第三问：链表的倒数第k个元素</h5><p>qwq这个题我是直接暴力的，就是遍历一遍拿到链表长度，此时要么提前存入数组，然后返回<code>arr[arr.length - k]</code>,要么在遍历到达第k位置返回</p><p>我这个写法给面试官干沉默了，不过也没说啥</p><blockquote><p>我后面问面评的时候，提了一嘴这种写法，他笑了笑说：重在思路嘛。我：内心很慌qwq。因为好像一下子真不晓得怎么写起来优雅了。能跑就行</p></blockquote><h5 id="第四问-函数柯里化" tabindex="-1"><a class="header-anchor" href="#第四问-函数柯里化" aria-hidden="true">#</a> 第四问：函数柯里化</h5><p>这个题其实我是没写出来的，只写了两层，也就是<code>sum(1,2,3)</code> =&gt; <code>sum(1)(2,3)</code>,并没有把<code>sum(1)(2)(3)</code>写出来。写的时候，沉默震耳欲聋，好慌，然后脑子就发抽了。</p><p>题解我丢着了，我们一起再学学。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 多参数柯里化；</span>
<span class="token keyword">const</span> <span class="token function-variable function">curry</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token function">curriedFn</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>args<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> fn<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 我知道要递归，但是一时半会不晓得怎么递归了qwq</span>
      <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">curriedFn</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>arguments<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z<span class="token punctuation">,</span> a</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> x <span class="token operator">+</span> y <span class="token operator">+</span> z <span class="token operator">+</span> a
<span class="token keyword">const</span> myfn <span class="token operator">=</span> <span class="token function">curry</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">myfn</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>字节大概问的就这些，回想起来也不是很难，没有问网络，没有问框架源码，没有问计算机系统，算法给的也不是那么难。同滴滴面试一样，是个人准备不足qwq。不过我很满意，至少三个面试，两个面评还可以，嘿嘿。而且，我目前学校大三不放人，真要实习，还得旷课qwq。所以接下来就先不投简历了。这三次面试给的收货很大，让我意识到我本身缺陷在哪，需要补哪。虽然大部分是八股，但是有些确实可以多学学。技多不压身嘛。</p><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3><p>不管是滴滴还是字节，八股占比还是很多的，我个人在工作室开发来说，crud经历的有点多，久而久之对于这种本来应该是很基础的东西，却忘一干二净（我相信大部分人也是这样）。在业务不断添加的情况下，大部分都是直接组件库一把嗦，更别说我面对的大部分是后台这类的了。这也是我突然相投实习的一个原因。想去扩展自己，换个地方锻炼自己。不想总在舒适圈呆着，就跟我写算法一样，一个简单的<code>dfs</code>我一下子就能秒了，简单的<code>dp</code>，<code>贪心</code>等我都能写的很快，但是我却只是拿着滚瓜烂熟的思想去写的（暴搜/遍历）。一遇见没写过，或者不熟的，就很痛苦。比如最近看到的<code>子序列问题</code>。这些都需要我慢慢去探索，慢慢去学习。</p><p>大致就这么点想法了，后期会开始抓着薄弱项慢慢去补。一步步完善自己。</p><blockquote><p>如果有想一起刷算法的可以加我，互相交流题目的思路~</p></blockquote>`,21);function v(b,f){const a=o("ExternalLinkIcon");return c(),l("div",null,[i,n("blockquote",null,[n("p",null,[n("a",r,[s("Jsweet的博客"),e(a)])])]),d,n("blockquote",null,[n("p",null,[n("a",k,[s("滴滴一面_牛客网 (nowcoder.com)"),e(a)])]),n("p",null,[n("a",h,[s("滴滴二面_牛客网 (nowcoder.com)"),e(a)])])]),m])}const g=p(u,[["render",v],["__file","01第一次面试.html.vue"]]);export{g as default};

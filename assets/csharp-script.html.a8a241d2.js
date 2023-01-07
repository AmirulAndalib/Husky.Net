import{r as p,o,c,b as s,a as e,F as l,d as n,e as t}from"./app.a9e60a39.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const u={},i=n(`<h1 id="using-c-code-in-your-git-hooks" tabindex="-1"><a class="header-anchor" href="#using-c-code-in-your-git-hooks" aria-hidden="true">#</a> Using C# code in your git hooks</h1><p>You can use task runner <code>exec</code> command to execute a C# script.</p><p>e.g</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>dotnet husky <span class="token builtin class-name">exec</span> <span class="token operator">&lt;</span>csx-file-path<span class="token operator">&gt;</span>
<span class="token comment"># e.g</span>
<span class="token comment"># dotnet husky exec .husky/csx/hello.csx</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Also, you can use your csx scripts in your tasks.</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
   <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dotnet&quot;</span><span class="token punctuation">,</span>
   <span class="token property">&quot;args&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;husky&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;exec&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;.husky/csx/hello.csx&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><h3 id="simple-commit-message-linter" tabindex="-1"><a class="header-anchor" href="#simple-commit-message-linter" aria-hidden="true">#</a> Simple commit message linter</h3><p>This repo is using a csharp script to lint the commit messages, you can check it here:</p>`,9),k={href:"https://github.com/alirezanet/Husky.Net/blob/master/.husky/csx/commit-lint.csx",target:"_blank",rel:"noopener noreferrer"},m=t("commit-lint.csx"),b=n(`<div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token namespace">System<span class="token punctuation">.</span>Text<span class="token punctuation">.</span>RegularExpressions</span><span class="token punctuation">;</span>

<span class="token keyword">private</span> <span class="token class-name"><span class="token keyword">var</span></span> pattern <span class="token operator">=</span> <span class="token string">@&quot;^(?=.{1,90}$)(?:build|feat|ci|chore|docs|fix|perf|refactor|revert|style|test)(?:\\(.+\\))*(?::).{4,}(?:#\\d+)*(?&lt;![\\.\\s])$&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">private</span> <span class="token class-name"><span class="token keyword">var</span></span> msg <span class="token operator">=</span> File<span class="token punctuation">.</span><span class="token function">ReadAllLines</span><span class="token punctuation">(</span>Args<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>Regex<span class="token punctuation">.</span><span class="token function">IsMatch</span><span class="token punctuation">(</span>msg<span class="token punctuation">,</span> pattern<span class="token punctuation">)</span><span class="token punctuation">)</span>
   <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>

Console<span class="token punctuation">.</span>ForegroundColor <span class="token operator">=</span> ConsoleColor<span class="token punctuation">.</span>Red<span class="token punctuation">;</span>
Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;Invalid commit message&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Console<span class="token punctuation">.</span><span class="token function">ResetColor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;e.g: &#39;feat(scope): subject&#39; or &#39;fix: subject&#39;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Console<span class="token punctuation">.</span>ForegroundColor <span class="token operator">=</span> ConsoleColor<span class="token punctuation">.</span>Gray<span class="token punctuation">;</span>
Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;more info: https://www.conventionalcommits.org/en/v1.0.0/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div>`,1),d={href:"https://github.com/alirezanet/Husky.Net/blob/master/.husky/commit-msg",target:"_blank",rel:"noopener noreferrer"},h=t("commit-msg "),g=s("em",null,"hook",-1),q=n(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/sh</span>
<span class="token builtin class-name">.</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">dirname</span> <span class="token string">&quot;<span class="token variable">$0</span>&quot;</span><span class="token variable">)</span></span>/_/husky.sh&quot;</span>

dotnet husky run --name <span class="token string">&quot;commit-message-linter&quot;</span> --args <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span>
<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> Great work<span class="token operator">!</span> \u{1F942}
<span class="token builtin class-name">echo</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,1),x={href:"https://github.com/alirezanet/Husky.Net/blob/master/.husky/task-runner.json",target:"_blank",rel:"noopener noreferrer"},y=t("task-runner.json"),_=n(`<div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>   <span class="token property">&quot;tasks&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
         <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;commit-message-linter&quot;</span><span class="token punctuation">,</span>
         <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dotnet&quot;</span><span class="token punctuation">,</span>
         <span class="token property">&quot;args&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;husky&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;exec&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;.husky/csx/commit-lint.csx&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;--args&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\${args}&quot;</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,1);function v(f,C){const a=p("ExternalLinkIcon");return o(),c(l,null,[i,s("p",null,[s("a",k,[m,e(a)])]),b,s("p",null,[s("a",d,[h,g,e(a)])]),q,s("p",null,[s("a",x,[y,e(a)])]),_],64)}var N=r(u,[["render",v]]);export{N as default};

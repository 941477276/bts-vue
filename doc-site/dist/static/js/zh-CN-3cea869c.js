const t="反馈",n="feedback",d="Loading",s="加载中",a="loading",o=`<p>加载数据时显示动效，以提示用户数据正在加载中。</p>
`,e=`<h2 class="api-h2" id="API_h2">服务模式调用</h2>
<p>BsLoading除了可以以指令方式调用外，还可以以服务模式调，如：</p>
<pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> BsLoading <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'bs-vue'</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> loadingInstance <span class="token operator">=</span> <span class="token function">BsLoading</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 显示loading</span>
<span class="token comment">// loadingInstance.show();</span>

<span class="token comment">// 隐藏loading</span>
<span class="token comment">// loadingInstance.hide();</span>
</code></pre>
<p><code>options</code>对象属性如下</p>
<div class="table-responsive"><table class="api-table table table-hover">
<thead class="thead-light">
<tr>
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>text</td>
<td>提示文字</td>
<td>stirng</td>
<td></td>
</tr>
<tr>
<td>lock</td>
<td>是否锁定容器滚动条</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>grow</td>
<td>是否为增长式旋转器</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>vertical</td>
<td>是否垂直对齐</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>fullscreen</td>
<td>是否为全局loading</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>target</td>
<td>Loading 需要覆盖的 DOM 节点，当以服务模式调用时比天</td>
<td><code>string(css selector)</code>/<code>object(dom)</code></td>
<td></td>
</tr>
<tr>
<td>color</td>
<td>字体颜色</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>background</td>
<td>背景色</td>
<td>vnode</td>
<td></td>
</tr>
<tr>
<td>customClass</td>
<td>自定义class类名</td>
<td>vnode</td>
<td></td>
</tr>
<tr>
<td>style</td>
<td>自定义样式</td>
<td>object</td>
<td>{}</td>
</tr>
<tr>
<td>transitionName</td>
<td>过渡效果名称</td>
<td>string</td>
<td>fade</td>
</tr>
<tr>
<td>dangerouslyUseHTMLString</td>
<td>是否将 message 属性作为 HTML 片段处理</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>duration</td>
<td>显示时间，单位为毫秒。 设为 0 则不会自动关闭</td>
<td>number</td>
<td>3000</td>
</tr>
<tr>
<td>customClass</td>
<td>自定义classname</td>
<td>string</td>
<td></td>
</tr>
</tbody>
</table></div>
<h3>BsLoading 实例方法</h3>
<div class="table-responsive"><table class="api-table table table-hover">
<thead class="thead-light">
<tr>
<th>函数名称</th>
<th>说明</th>
<th>参数</th>
</tr>
</thead>
<tbody>
<tr>
<td>show</td>
<td>显示Loading</td>
<td></td>
</tr>
<tr>
<td>hide</td>
<td>隐藏Loading</td>
<td></td>
</tr>
<tr>
<td>destroy</td>
<td>销毁loading</td>
<td></td>
</tr>
<tr>
<td>updateProps</td>
<td>更新options</td>
<td>(newProps: options)</td>
</tr>
</tbody>
</table></div>
`,r={type:t,typeCode:n,title:d,subtitle:s,componentName:a,description:o,apiContent:e};export{e as apiContent,a as componentName,r as default,o as description,s as subtitle,d as title,t as type,n as typeCode};

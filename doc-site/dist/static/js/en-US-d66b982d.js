const t="feedback",n="feedback",d="Loading",e="Loading",a="loading",s=`<p>Display animation when loading data to remind users that data is loading.</p>
`,o=`<h2 class="api-h2" id="API_h2">Service mode call</h2>
<p>BsLoading can be invoked not only in command mode, but also in service mode, such as:</p>
<pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> BsLoading <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'bts-vue'</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> loadingInstance <span class="token operator">=</span> <span class="token function">BsLoading</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// display loading</span>
<span class="token comment">// loadingInstance. show();</span>

<span class="token comment">// hide loading</span>
<span class="token comment">// loadingInstance.hide();</span>
</code></pre>
<p>The <code>options</code> object properties are as follows</p>
<div class="table-responsive"><table class="api-table table table-hover">
<thead class="thead-light">
<tr>
<th>Parameter</th>
<th>Description</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody>
<tr>
<td>text</td>
<td>prompt text</td>
<td>stirng</td>
<td></td>
</tr>
<tr>
<td>lock</td>
<td>Whether to lock the scroll bar of the container</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>grow</td>
<td>whether it is a growing spinner</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>vertical</td>
<td>Whether to align vertically</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>fullscreen</td>
<td>whether it is global loading</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>target</td>
<td>The DOM node that Loading needs to cover, when called in service mode</td>
<td><code>string(css selector)</code>/<code>object(dom)</code></td>
<td></td>
</tr>
<tr>
<td>color</td>
<td>font color</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>background</td>
<td>background color</td>
<td>vnode</td>
<td></td>
</tr>
<tr>
<td>customClass</td>
<td>custom class name</td>
<td>vnode</td>
<td></td>
</tr>
<tr>
<td>style</td>
<td>custom style</td>
<td>object</td>
<td>{}</td>
</tr>
<tr>
<td>transitionName</td>
<td>transition effect name</td>
<td>string</td>
<td>fade</td>
</tr>
<tr>
<td>dangerouslyUseHTMLString</td>
<td>Whether to treat the message attribute as an HTML fragment</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>duration</td>
<td>Display time in milliseconds. Set to 0 will not automatically close</td>
<td>number</td>
<td>3000</td>
</tr>
<tr>
<td>customClass</td>
<td>custom classname</td>
<td>string</td>
<td></td>
</tr>
</tbody>
</table></div>
<h3>BsLoading instance method</h3>
<div class="table-responsive"><table class="api-table table table-hover">
<thead class="thead-light">
<tr>
<th>function name</th>
<th>description</th>
<th>parameters</th>
</tr>
</thead>
<tbody>
<tr>
<td>show</td>
<td>Show Loading</td>
<td></td>
</tr>
<tr>
<td>hide</td>
<td>Hide Loading</td>
<td></td>
</tr>
<tr>
<td>destroy</td>
<td>destroy loading</td>
<td></td>
</tr>
<tr>
<td>updateProps</td>
<td>update options</td>
<td>(newProps: options)</td>
</tr>
</tbody>
</table></div>
`,r={type:t,typeCode:n,title:d,subtitle:e,componentName:a,description:s,apiContent:o};export{o as apiContent,a as componentName,r as default,s as description,e as subtitle,d as title,t as type,n as typeCode};

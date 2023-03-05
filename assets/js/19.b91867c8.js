(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{292:function(e,t,a){"use strict";a.r(t);var r=a(14),s=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"认识vue3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#认识vue3"}},[e._v("#")]),e._v(" 认识vue3")]),e._v(" "),t("p",[e._v("vue3模板中可以不需要根标签")]),e._v(" "),t("h1",{attrs:{id:"setup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[e._v("#")]),e._v(" setup")]),e._v(" "),t("h2",{attrs:{id:"setup细节"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#setup细节"}},[e._v("#")]),e._v(" setup细节")]),e._v(" "),t("h3",{attrs:{id:"执行时机"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#执行时机"}},[e._v("#")]),e._v(" 执行时机")]),e._v(" "),t("ul",[t("li",[e._v("setup在生命周期beforeCreate之前就执行了，只执行一次")]),e._v(" "),t("li",[e._v("可推断出，setup执行的时候，组件还没有创建出来，组件实例对象this不能用")]),e._v(" "),t("li",[e._v("this是undefined，那么data/computed/methodspros也不能调用")])]),e._v(" "),t("h3",{attrs:{id:"setup返回值"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#setup返回值"}},[e._v("#")]),e._v(" setup返回值")]),e._v(" "),t("ul",[t("li",[e._v("返回值是一个对象，内部属性方法是给html模板使用的")]),e._v(" "),t("li",[e._v("vue3中尽量不要混合使用，优先setup中的")]),e._v(" "),t("li",[e._v("参数props：包含props配置声明且传入了所有属性的对象")]),e._v(" "),t("li",[e._v("context参数：是一个对象，里面有attrs对象（获取当前组件标签上的所有的属性的对象，但是该属性是在props中没有声明接收的所有声明对象），相当于this.$attrs，emit方法，slot对象")])]),e._v(" "),t("br"),e._v(" "),t("h2",{attrs:{id:"ref"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ref"}},[e._v("#")]),e._v(" ref")]),e._v(" "),t("ul",[t("li",[e._v("组合API中第一个要使用的函数")]),e._v(" "),t("li",[e._v("只执行一次")]),e._v(" "),t("li",[e._v("ref是一个函数：定义一个响应式数据，返回一个ref对象，有一个value属性需要对数据进行操作的话，需要操作其value值；而在html中不需要使用value值")]),e._v(" "),t("li",[e._v("用来定义基本类型的响应式数据")]),e._v(" "),t("li",[e._v("count是一个ref对象")]),e._v(" "),t("li",[e._v("如果将ref里传入对象，就会变成Proxy类型对象")]),e._v(" "),t("li",[e._v("ref另一个作用是获取网页元素标签")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("  setup(){\n    // let count = 1  // 不是响应式数据\n    // 变量\n    const count = ref(0)\n    // 方法\n    function add(){\n      // count是一个ref对象。不能进行++操作\n      \n      count.value++\n    }\n    return {\n      count,\n      add\n    }\n  }\n")])])]),t("h2",{attrs:{id:"reactive"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reactive"}},[e._v("#")]),e._v(" reactive")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("定义多个响应式数据")])]),e._v(" "),t("li",[t("p",[e._v("返回的是一个Proxy代理对象，被代理的目标对象是obj对象")])]),e._v(" "),t("li",[t("p",[e._v("user是代理对象，obj是目标对象")])]),e._v(" "),t("li",[t("blockquote",[t("p",[e._v("const  user = reactive(obj)")])])]),e._v(" "),t("li",[t("p",[e._v("直接使用目标obj对象方式更新数据不是响应式的，只能使用代理")])]),e._v(" "),t("li",[t("p",[e._v("如果操作代理对象，目标对象中数据也会随之变化，同时如果想要操作数据的时候，界面动态渲染，那么也是操作代理对象")])])]),e._v(" "),t("h1",{attrs:{id:"vue2和vue3响应式对比"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue2和vue3响应式对比"}},[e._v("#")]),e._v(" vue2和vue3响应式对比")]),e._v(" "),t("h2",{attrs:{id:"vue2的响应式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue2的响应式"}},[e._v("#")]),e._v(" vue2的响应式")]),e._v(" "),t("blockquote",[t("p",[e._v("问题：直接添加或者删除已有的属性，界面不会自动更新；直接通过下表替换元素或者更新length，界面不会自动更新arr[1] = { }")])]),e._v(" "),t("h2",{attrs:{id:"vue3的响应式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue3的响应式"}},[e._v("#")]),e._v(" vue3的响应式")]),e._v(" "),t("ul",[t("li",[e._v("Proxy代理")])]),e._v(" "),t("blockquote",[t("p",[e._v("new Proxy(参数1，参数2)")])]),e._v(" "),t("p",[e._v("参数1：user--》target目标对象")]),e._v(" "),t("p",[e._v("参数2handler：--》处理器对象，用来监视数据")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("const userProxy = new Proxy(user,{\n  get(target,props){\n    console.log('get方法调用了',target,props);\n    return Reflect.get(target,props) // 目标对象，操作的key键\n  },\n  // 可以动态修改添加目标对象的属性\n  set(target,props,val){\n    console.log('set方法调用了');\n    return Reflect.set(target,props,val) // 目标对象，操作的key键，传入的value值\n  },\n  deleteProperty(target,props){\n    console.log('删除了');\n    return Reflect.deleteProperty(target,props)\n  }\n})\n")])])]),t("br"),e._v(" "),t("ul",[t("li",[e._v("reflect反射")])]),e._v(" "),t("h1",{attrs:{id:"计算属性与监视"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#计算属性与监视"}},[e._v("#")]),e._v(" 计算属性与监视")]),e._v(" "),t("h2",{attrs:{id:"计算属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#计算属性"}},[e._v("#")]),e._v(" 计算属性")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("computed")])]),e._v(" "),t("li",[e._v("如果计算属性只传入一个回调函数，表示的是`get")]),e._v(" "),t("li",[e._v("返回的是一个ref对象")])]),e._v(" "),t("h2",{attrs:{id:"监视"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#监视"}},[e._v("#")]),e._v(" 监视")]),e._v(" "),t("ul",[t("li",[t("p",[t("code",[e._v("watch")]),e._v(" 监视的数据变化时会触发，加载完成不会触发")])]),e._v(" "),t("li",[t("p",[t("code",[e._v("watchEffect")]),e._v(" 会立即执行。不需要配置"),t("code",[e._v("immediate:true")])])]),e._v(" "),t("li",[t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("watch(user,({firstName, lastName})=>{ // 监视user\n        fullName3.value = firstName+'_'+lastName\n      },{immediate:true,deep:true}) //立马执行。深度监视\n")])])])]),e._v(" "),t("li",[t("p",[e._v("监视非响应式数据的时候，需要用回调才能监视到，如果直接写 "),t("code",[e._v("user.firstName")]),e._v(" 无法监视到")])])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("watch([()=>user.firstName,()=>user.lastName],()=>{\n        console.log('1112');\n      })\n")])])]),t("h1",{attrs:{id:"生命周期对比"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#生命周期对比"}},[e._v("#")]),e._v(" 生命周期对比")]),e._v(" "),t("ul",[t("li",[e._v("3.0要比2.x中对应的生命周期限制性，比如 "),t("code",[e._v("onMouted")]),e._v(" 比 "),t("code",[e._v("mouted")]),e._v(" 先执行")])]),e._v(" "),t("h1",{attrs:{id:"自定义hook函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自定义hook函数"}},[e._v("#")]),e._v(" 自定义hook函数")]),e._v(" "),t("ul",[t("li",[e._v("类似vue2中的混入 "),t("code",[e._v("mixin")])])]),e._v(" "),t("h1",{attrs:{id:"torefs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#torefs"}},[e._v("#")]),e._v(" toRefs")]),e._v(" "),t("ul",[t("li",[e._v("如果在 "),t("code",[e._v("return")]),e._v(" 中返回一个 "),t("code",[e._v("reactive")]),e._v(" 解构赋值的值，那么这个值不是响应式的")]),e._v(" "),t("li",[e._v("用 "),t("code",[e._v("toRefs")]),e._v(" 在 "),t("code",[e._v("return")]),e._v(" 时返回的每个对象都会变成响应式的"),t("code",[e._v("ref")])]),e._v(" "),t("li",[e._v("或者返回"),t("code",[e._v("return {...toRefs(state)}")])])]),e._v(" "),t("h1",{attrs:{id:"shallowref和shallowreactive"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#shallowref和shallowreactive"}},[e._v("#")]),e._v(" shallowRef和shallowReactive")]),e._v(" "),t("ul",[t("li",[e._v("这两都是浅响应式")])])])}),[],!1,null,null,null);t.default=s.exports}}]);
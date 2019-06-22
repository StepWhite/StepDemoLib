






    起步
        基本模板
            <!DOCTYPE html>
            <html lang="zh-CN">
            <head>
                <meta charset="utf-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                注释头 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ 注释尾
                <title>Bootstrap 101 Template</title>
                注释头 Bootstrap 注释尾
                <link href="css/bootstrap.min.css" rel="stylesheet">
                注释头 HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries 注释尾
                注释头 WARNING: Respond.js doesn't work if you view the page via file:// 注释尾
                注释头[if lt IE 9]>
                <script src="https://cdn.bootcss.com/html5shiv/3.7.3/html5shiv.min.js"></script>
                <script src="https://cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
                <![endif]注释尾
            </head>
            <body>
                <h1>你好，世界！</h1>
                注释头 jQuery (necessary for Bootstrap's JavaScript plugins) 注释尾
                <script src="https://cdn.bootcss.com/jquery/1.12.4/jquery.min.js"></script>
                注释头 Include all compiled plugins (below), or include individual files as needed 注释尾
                <script src="js/bootstrap.min.js"></script>
            </body>
            </html>
    
        npm包包名：bootstrap


    全局CSS样式
        栅格系统
            概览：
                超小屏幕xs：手机 (<768px)；小屏幕sm：平板 (≥768px)； 中等屏幕md：桌面 (≥992px)；大屏幕lg：桌面 (≥1200px)
                一共分为12列，col-(xs/sm/md/lg)-N(1~12)
                .container和.container-fluid的区别：都有左右内补且水平居中，区别在于.conntainer在大于某个屏幕宽度后会有特定宽度，而.container-fluid始终弹性宽度
                .row 是具有左右负外边距的容器
                列偏移：col-(xs/sm/md/lg)-offset-N(1~12)
                列排序：col-(xs/sm/md/lg)-(pull/push)-N(1~12)
                实例：<div class="col-xs-12 col-sm-6"></div> // 屏幕在小于750px时宽度使用col-xs-12的值，否则使用col-sm-6的值
    
        排版
            标题  h1~h6  在标题内还可以包含 <small> 标签或赋予 .small 类的元素，可以用来标记副标题。
            页面主题    p, p.lead   通过添加 .lead 类可以让段落突出显示。
            内联文本元素      强调文本<mark>,带删除线文本<del>,无用文本<s>,插入文本<ins>,带下划线文本<u>,小号字文本<small>或.small,加粗文本<strong>,斜体文本<em>
            对齐      .text-left, .text-center, .text-right, .text-justify, .text-nowrap
            改变大小写   .text-lowercase, .text-uppercase, .text-capitalize
            缩略语
                基本缩略语   <abbr title="attribute">attr</abbr>
                首字母缩略语     <abbr title="HyperText Markup Language" class="initialism">HTML</abbr> // 为缩略语添加 .initialism 类
            地址  <address>
            引用(将任何 HTML 元素包裹在 <blockquote> 中即可表现为引用样式)      <blockquote><p>...</p></blockquote>
            列表  <ul>, <ol>, <dl>(<dt><dd>), 无样式列表.list-unstyled, 内联列表.list-inline, 水平排列的描述dl.dl-horizontal
    
        代码  内联代码<code>, 用户输入<kbd>, 代码块<pre>, 变量<var>, 程序输出<sample>
        
        表格  <table class="table">为任意 <table> 标签添加 .table 类后才会赋予预定的样式
            带间隔条纹状.table-striped, 带边框.table-bordered, 鼠标悬停.table-hover, 紧缩表格.table-condensed, 赋予到tr上面的状态类.active/.info/.success/.warning/.danger
            响应式表格：将任何 .table 元素包裹在 .table-responsive 元素内，即可创建响应式表格，其会在小屏幕设备上（小于768px）水平滚动。当屏幕大于 768px 宽度时，水平滚动条消失。
        
        表单  
            单独的表单控件会被自动赋予一些全局样式。所有设置了 .form-control 类的 <input>、<textarea> 和 <select> 元素都将被默认设置宽度属性为 width: 100%;。 将 label 元素和前面提到的控件包裹在 .form-group 中可以获得最好的排列。
            内联表单    为 <form> 元素添加 .form-inline 类可使其内容左对齐并且表现为 inline-block 级别的控件。只适用于视口（viewport）至少在 768px 宽度时（视口宽度再小的话就会使表单折叠）。
            水平排列的表单     通过为表单添加 .form-horizontal 类，并联合使用 Bootstrap 预置的栅格类，可以将 label 标签和控件组水平并排布局。
            被支持的控件  
                输入框input  包括大部分表单控件、文本输入域控件，还支持所有 HTML5 类型的输入控件，设置input的type属性即可： text、password、datetime、datetime-local、date、month、time、week、number、email、url、search、tel 和 color。
                文本域     <textarea row="3" class="form-control"></textarea>
                单选和多选   内联单选和多选，通过将 .checkbox-inline 或 .radio-inline 类应用到一系列的多选框（checkbox）或单选框（radio）控件上，可以使这些控件排列在一行。
                下拉列表    select 
            禁用状态    为输入框设置 disabled 属性可以禁止其与用户有任何交互（焦点、输入等）。
            只读状态    为输入框设置 readonly 属性可以禁止用户修改输入框中的内容。
            校验状态    Bootstrap 对表单控件的校验状态，如 error、warning 和 success 状态，都定义了样式。使用时，添加 .has-warning、.has-error 或 .has-success 类到这些控件的父元素即可。任何包含在此元素之内的 .control-label、.form-control 和 .help-block 元素都将接受这些校验状态的样式。
                给input添加额外的反馈图标：只需设置相应的 .has-feedback 类并在图标上添加form-control-feedback类。
            控件尺寸
                总体方法：通过 .input-lg/.input-sm/.form-group-lg/.form-group-sm 等类可以为控件设置高度，通过 .col-lg-* 类似的类可以为控件设置宽度。
                输入框尺寸控制，在input中
        
        按钮
            适用的标签和元素：为 <a>、<button> 或 <input> 元素添加按钮类（button class）即可使用 Bootstrap 提供的样式。
               注意：1.虽然按钮类可以应用到 <a> 和 <button> 元素上，但是，导航和导航条组件只支持 <button> 元素。
                    2.如果 <a> 元素被作为按钮使用, 并用于在当前页面触发某些功能, 而不是用于链接其他页面或链接当前页面中的其他部分，那么，务必为其设置 role="button" 属性。
                    3.建议尽可能使用 <button> 元素
            预定义样式 .btn-default, .btn-primary, .btn-success, .btn-info, .btn-warning, .btn-danger-link
            尺寸  .btn-lg、.btn-sm 或 .btn-xs；通过给按钮添加 .btn-block 类可以将其拉伸至父元素100%的宽度，而且按钮也变为了块级（block）元素。
            激活和禁用状态     .active, disabled属性
        图片
            响应式图片  .img-responsive 注意：如果需要让使用了 .img-responsive 类的图片水平居中，请使用 .center-block 类，不要用 .text-center。
            图片形状    .img-rounded, .img-circle, .img-thumbnail
        
        辅助类
            情景文字颜色      .text-muted  .text-primary  .text-success  .text-info .text-warning .text-danger
            情境背景颜色      .bg-primary .bg-success  .bg-info  .bg-warning   .bg-danger 
            关闭按钮        通过使用一个象征关闭的图标，可以让模态框和警告框消失。<button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            三角符号        <span class="caret"></span>
            快速浮动        .pull-left, .pull-right
            让内容块居中      .center-block
            清楚浮动        .clearfix
            显示和隐藏       .show, .hidden, .invisible
            屏幕阅读器和键盘导航  .sr-only 类可以对屏幕阅读器以外的设备隐藏内容。.sr-only 和 .sr-only-focusable 联合使用的话可以在元素有焦点的时候再次显示出来（例如，使用键盘导航的用户）。
            ? 图片替换    使用 .text-hide 类或对应的 mixin 可以用来将元素的文本内容替换为一张背景图。


    组件
    
        Glyphicons图标    
            <span class="glyphicon glyphicon-search" aria-hidden="true"></span> // 所有图标都需要一个基类和对应每个图标的类；图标类只能应用在不包含任何文本内容或子元素的元素上；aria-hidden="true"为了避免 屏幕识读设备抓取非故意的和可能产生混淆的输出内容
            <button type="button" class="btn btn-default btn-lg">
                <span class="glyphicon glyphicon-star" aria-hidden="true"></span> Star // 为了设置正确的内补，务必在图标和文本之间添加一个空格
            </button>
    
        下/上 拉菜单 
            实例：
                <div class="dropdown">// 将下拉菜单触发器和下拉菜单都包裹在 .dropdown (上拉则是.dropup,) 里，或者另一个声明了 position: relative; 的元素。
                    // 给控制菜单显示隐藏的按钮添加属性data-toggle="dropdown"
                    <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">btnToggle<span class="caret"></span></button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">// 给菜单添加类.dropdown-menu
                        <li><a href="#">Action</a></li>
                        <li role="separator" class="divider"></li>
                        <li><a href="#">Separated link</a></li>
                    </ul>
                </div>
            右对齐：给菜单添加.dropdown-menu-right类
            标题：在任何下拉菜单中均可通过添加标题来标明一组动作。<li class="dropdown-header">Dropdown header</li>
            分割线：为下拉菜单添加一条分割线，用于将多个链接分组。<li role="separator" class="divider"></li>
            禁用的菜单项：为下拉菜单中的 <li> 元素添加 .disabled 类，从而禁用相应的菜单项。<li class="disabled"><a href="#">Disabled link</a></li>
            JS方法
                .dropdown('toggle')     运用在 [data-toggle="dropdown"]元素上
            JS事件
                show.bs.dropdown	shown.bs.dropdown	hide.bs.dropdown	hidden.bs.dropdown	
    
        按钮组     通过按钮组容器把一组按钮放在同一行里。
            基本实例：把一系列带有.btn类的元素包裹在.btn-group类的容器里   <div class="btn-group" role="group" aria-label="..."><button type="button" class="btn btn-default">Left</button>...</div>
            按钮工具栏： 把一组 <div class="btn-group"> 组合进一个 <div class="btn-toolbar"> 中就可以做成更复杂的组件。
            尺寸： 给 .btn-group 加上 .btn-group-(xs/sm/lg) 类
            嵌套：把下拉菜单混合到一系列按钮中，只须把 .btn-group 放入另一个 .btn-group 中。
            垂直排列：<div class="btn-group-vertical" role="group" aria-label="...">
            两端对齐排列的按钮组(存在一些兼容问题)：让一组按钮拉长为相同的尺寸，填满父元素的宽度。对于按钮组中的按钮式下拉菜单也同样适用。
                关于a元素：只须将一系列 .btn 元素包裹到 .btn-group.btn-group-justified 中即可
                关于button元素：必须将每个按钮包裹进一个按钮组中。
                    <div class="btn-group btn-group-justified" role="group" aria-label="...">
                        <div class="btn-group" role="group"><button type="button" class="btn btn-default">Left</button></div>
                        <div class="btn-group" role="group"><button type="button" class="btn btn-default">Middle</button></div>
                    </div>
    
        按钮式下拉菜单
            基本实例：把任意一个按钮放入 .btn-group 中，然后加入适当的菜单标签，就可以让按钮作为菜单的触发器了。
                <div class="btn-group">
                    <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Action <span class="caret"></span></button>
                    <ul class="dropdown-menu"><li><a href="#">Action</a></li>...</ul>
                </div>
            分裂式按钮下拉菜单，尺寸，向上弹出式菜单等都和上一节按钮组类似


        输入框组
            通过在文本输入框 <input> 前面、后面或是两边加上文字或按钮，可以实现对表单控件的扩展。为 .input-group 赋予 .input-group-addon 或 .input-group-btn 类，可以给 .form-control 的前面或后面添加额外的元素。
            实例：
                <div class="input-group">
                    <span class="input-group-addon">$</span>
                    <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
                    <span class="input-group-addon">.00</span>
                </div>
            尺寸  为 .input-group 添加相应的尺寸类.input-group-lg, .input-group-sm
            作为额外元素的多选框和单选框      可以将多选框或单选框作为额外元素添加到输入框组中。
                <div class="input-group">
                    <span class="input-group-addon"><input type="checkbox" aria-label="..."></span>
                    <input type="text" class="form-control" aria-label="...">
                </div>
            作为额外元素的按钮       为输入框组添加按钮需要额外添加一层嵌套，不是 .input-group-addon，而是添加 .input-group-btn 来包裹按钮元素。
            作为额外元素的按钮式下拉菜单
            作为额外元素的分裂式按钮下拉菜单
            嵌入多个按钮


        导航标签      ul .nav (nav-tabs/nav-pills)
            标签页 .nav-tabs
                <ul class="nav nav-tabs" role="tablist">
                    <li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Home</a></li>
                    <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Profile</a></li>
                    <li role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">Messages</a></li>
                    <li role="presentation"><a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">Settings</a></li>
                </ul>
                <div class="tab-content">
                    <div role="tabpanel" class="tab-pane active" id="home">...</div>
                    <div role="tabpanel" class="tab-pane" id="profile">...</div>
                    <div role="tabpanel" class="tab-pane" id="messages">...</div>
                    <div role="tabpanel" class="tab-pane" id="settings">...</div>
                </div>
            胶囊式标签页  .nav-pills ,用法同上
                胶囊是标签页也是可以垂直方向堆叠排列的，只需添加 .nav-stacked 类
            两端对齐的标签页    在大于 768px 的屏幕上，通过 .nav-justified 类可以很容易的让标签页或胶囊式标签呈现出同等宽度。在小屏幕上，导航链接呈现堆叠样式。
            禁用的链接   添加 .disabled
            添加淡出效果  To make tabs fade in, add .fade to each .tab-pane. The first tab pane must also have .in to make the initial content visible.
            添加下拉菜单
                <li role="presentation" class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
                    <ul class="dropdown-menu">...</ul>
                </li>
            JS方法
                $().tab()       初始化,$([data-toggle="tab"]).tab();
                .tab('show')    激活某个标签页，运用在 [data-toggle="dropdown"]元素上
            JS事件
                hide.bs.tab      show.bs.tab    hidden.bs.tab       shown.bs.tab 


        导航条     nav .navbar
            品牌图标    .navbar-brand
            表单        .navbar-form
            按钮        .navbar-btn 
            文本        p .navbar-text
            非导航的链接      .navbar-link
            固定在顶/底部     通过添加 .navbar-fixed-top, .navbar-fixed-bottom 类
            组件排列    通过添加 .navbar-left 和 .navbar-right 工具类让导航链接、表单、按钮或文本对齐。
            静止在顶部    通过添加 .navbar-static-top 类即可创建一个与页面等宽度的导航条，它会随着页面向下滚动而消失。
            反色的导航条      通过添加 .navbar-inverse 类可以改变导航条的外观。
            实例：
                <nav class="navbar navbar-default">
                    <div class="container-fluid">
                        注释 Brand and toggle get grouped for better mobile display 
                        <div class="navbar-header">
                            // 菜单按钮
                            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span class="sr-only">Toggle navigation</span>
                                <span class="icon-bar"></span> // 菜单按钮的3条横线
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                            <a class="navbar-brand" href="#">Brand</a>
                        </div>
    
                        注释 Collect the nav links, forms, and other content for toggling 
                        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul class="nav navbar-nav">
                                <li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li>
                                <li><a href="#">Link</a></li>
                                <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
                                <ul class="dropdown-menu">
                                    <li><a href="#">Action</a></li>
                                    <li><a href="#">Another action</a></li>
                                    <li><a href="#">Something else here</a></li>
                                    <li role="separator" class="divider"></li>
                                    <li><a href="#">Separated link</a></li>
                                    <li role="separator" class="divider"></li>
                                    <li><a href="#">One more separated link</a></li>
                                </ul>
                                </li>
                            </ul>
                            <form class="navbar-form navbar-left">
                                <div class="form-group">
                                <input type="text" class="form-control" placeholder="Search">
                                </div>
                                <button type="submit" class="btn btn-default">Submit</button>
                            </form>
                            <ul class="nav navbar-nav navbar-right">
                                <li><a href="#">Link</a></li>
                                <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
                                <ul class="dropdown-menu">
                                    <li><a href="#">Action</a></li>
                                    <li><a href="#">Another action</a></li>
                                    <li><a href="#">Something else here</a></li>
                                    <li role="separator" class="divider"></li>
                                    <li><a href="#">Separated link</a></li>
                                </ul>
                                </li>
                            </ul>
                        </div> 注释.navbar-collapse 
                    </div> 注释.container-fluid 
                    </nav>


        路径导航    
            在一个带有层次的导航结构中标明当前页面的位置。
            实例：<ol class="breadcrumb"><li><a href="#">Home</a></li>...</ol>
    
        分页
            基本实例：
                <nav aria-label="Page navigation">
                    <ul class="pagination">
                        <li>
                            <a href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li><a href="#">1</a></li>
                        ...
                        <li>
                            <a href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            禁用和激活状态     .disabled, .active
            尺寸      .pagination-lg .pagination-sm
    
        标签      .label
            实例：     .label <span class="label label-default">New</span>
            标签背景颜色：     .label-(default/info/warning/success/danger/primary)
    
        徽章      .badge
            给链接、导航等元素嵌套 <span class="badge"> 元素，可以很醒目的展示新的或未读的信息条目。
            实例：      <button class="btn btn-primary" type="button">Messages <span class="badge">4</span></button>
    
        巨幕      .jumbotron
            如果需要让巨幕组件的宽度与浏览器宽度一致并且没有圆角，请把此组件放在所有 .container 元素的外面，并在组件内部添加一个 .container 元素。
    
        页头      .page-header    
            页头组件能够为 h1 标签增加适当的空间，并且与页面的其他部分形成一定的分隔。


        缩略图


        警告框     .alert
            基本实例：将任意文本和一个可选的关闭按钮组合在一起就能组成一个警告框，.alert 类是必须要设置的。另外我们还提供了有特殊意义的4个类(.alert-success,.alert-warning,.alert-info,.alert-danger)，代表不同的警告信息。
                <div class="alert alert-success" role="alert">...</button></div>
            可关闭的警告框     为警告框添加一个可选的 .alert-dismissible 类和一个关闭按钮。
                <div class="alert alert-warning alert-dismissible" role="alert">
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>...
                </div>
            给警告框中的链接添加.alert-link工具类，可以为链接设置与当前警告框相符的颜色。
            JS方法
                $().alert()         让警告框监听具有 data-dismiss="alert" 属性的后裔元素的点击（click）事件。（如果是通过 data 属性进行的初始化则无需使用）
                .alert('close')
            JS事件
                close.bs.alert     closed.bs.alert
    
        进度条     .progress-bar
            基本实例：
                <div class="progress">// 给进度条的容器添加.progress
                    <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">// 给进度条添加.progress-bar,设置最值和当前值
                        <span class="sr-only"> Complete</span>
                    </div>
                </div>
            带有提示标签的进度条  将设置了 .sr-only 类的 <span> 标签从进度条组件中移除 类，从而让当前进度显示出来。在展示很低的百分比时，如果需要让文本提示能够清晰可见，可以为进度条设置 min-width 属性。
            情景颜色  给进度条添加 .progress-bar-(success/info/warning/danger)
            条纹效果    给进度条添加 .progress-bar-striped 
            动画效果    为 .progress-bar-striped 添加 .active 类，使其呈现出由右向左运动的动画效果。
            堆叠效果    把多个进度条放入同一个 .progress 中，使它们呈现堆叠的效果。




        媒体对象


        列表组     .list-group
            基本实例：    <ul class="list-group"><li class="list-group-item">Cras justo odio</li>...</ul>
            徽章  给列表组加入徽章组件，它会自动被放在右边。   <li class="list-group-item"><span class="badge">14</span>Cras justo odio</li>
            链接  用 <a> 标签代替 <li> 标签可以组成一个全部是链接的列表组（还要注意的是，我们需要将 <ul> 标签替换为 <div> 标签）。
            按钮  列表组中的元素也可以直接就是按钮（也同时意味着父元素必须是 <div> 而不能用 <ul> 了），并且无需为每个按钮单独包裹一个父元素。注意不要使用标准的 .btn 类！<button type="button" class="list-group-item">Cras justo odio</button>
            被禁用的条目  为 .list-group-item 添加 .disabled 类
            情景颜色    .list-group-item-success, .list-group-item-info, .list-group-item-warning, .list-group-item-danger
            定制内容    列表组中的每个元素都可以是任何 HTML 内容
    
        面板      .panel
            基本实例：
                <div class="panel panel-default">
                    <div class="panel-heading">Panel heading</div>
                    <div class="panel-body"> Basic panel example</div>
                    <div class="panel-footer">Panel footer</div>
                </div>
            带标题的面版  
                通过 .panel-heading 可以很简单地为面板加入一个标题容器。你也可以通过添加设置了 .panel-title 类的 <h1>-<h6> 标签，添加一个预定义样式的标题。不过，<h1>-<h6> 标签的字体大小将被 .panel-heading 的样式所覆盖。
            带脚注的面版
                把按钮或次要的文本放入 .panel-footer 容器内
            情景颜色    .panel-default, .panel-info, .panel-warning, .panel-success, .panel-primary
            带表格的面板 
                当需要表格的宽度跟面板相同时可以把表格放到与.panel-body平行
            带列表组的面版
    
        井容器     .well
            效果：把 Well 用在元素上，就能有嵌入（inset）的简单效果。
            尺寸  .well-lg, .well-sm


        具有响应式特性的嵌入内容


    插件
    
        概览


        模态框     .modal-dialog
            实例：带有data-target和data-toggle属性的点击打开模态框的按钮, 模态框容器.modal(添加.fade则会给模态框添加淡入淡出效果), 模态框.modal-dialog, 模态框下的内容容器.modal-content, 包含了模态框的头.modal-header、体.modal-body和底部.modal-footer
                <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">Launch demo modal</button>
                <div class="modal fade" id="myModal" tabindex="-1" role="dialog">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                <h4 class="modal-title">Modal title</h4>
                            </div>
                            <div class="modal-body">
                                <p>One fine body&hellip;</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
    
            可选尺寸
                为.modal-dialog 增加一个样式调整类bs-example-modal-(lg/sm)
            JS方法
                .modal(options{backdrop:boolean或'static', keyboard:boolean, show:boolean, remote:boolean})
                .modal('toggle')
                .modal('show') / .modal('hide')
                .modal('handleUpdate')
            JS事件
                hide.bs.modal      show.bs.modal    hidden.bs.modal       shown.bs.modal        inserted.bs.modal
    
        滚动监听


        工具提示    .tooltip
            实例  
                <a href="#" data-toggle="tooltip" title="Some tooltip text!">Hover over me</a>  // title不能漏
                <div class="tooltip top" role="tooltip">
                    <div class="tooltip-arrow"></div>
                    <div class="tooltip-inner">Some tooltip text!</div>
                </div>
            工具位置设置   data-placement="left/top/bottom/right"
            注意      要在使用前手动初始化插件 $([data-toggle="tooltip"]).tooltip();
            JS方法
                $().tooltip(options)
                .tooltip('show')
                .tooltip('hide')
                .tooltip('toggle')
                .tooltip('destroy')
            JS事件
                hide.bs.tooltip      show.bs.tooltip    hidden.bs.tooltip       shown.bs.tooltip 
                inserted.bs.tooltip     This event is fired after the show.bs.tooltip event when the tooltip template has been added to the DOM.
        
        弹出框     .popover
            实例
                <button type="button" class="btn btn-default" data-container="body" data-toggle="popover" data-placement="left" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
                    Popover on 左侧
                </button>
                <div class="tooltip top" role="tooltip">
                    <div class="tooltip-arrow"></div>
                    <div class="tooltip-inner">Some tooltip text!</div>
                </div>
            弹出框位置设置   data-placement="left/top/bottom/right"
            注意      要在使用前手动初始化插件 $([data-toggle="popover"]).popover();
            点击任意位置让弹出框消失    添加data-trigger="focus" 
                注意：为了更好的跨浏览器和跨平台效果，你必须使用 <a> 标签，不能使用 <button> 标签，并且，还必须包含 role="button" 和 tabindex 属性。
            JS方法
                $().popover(options)
                .popover('show')
                .popover('hide')
                .popover('toggle')
                .popover('destroy')
            JS事件
                hide.bs.popover      show.bs.popover    hidden.bs.popover       shown.bs.popover        inserted.bs.popover
    
        折叠  .collapse
            基本实例：
                <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">Button with data-target</button>
                <div class="collapse" id="collapseExample">
                    <div class="well">...</div>
                </div>
            折叠组 class="panel-group" role="tablist"
                实例：
                    <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                        <div class="panel panel-default">
                            <div class="panel-heading" role="tab" id="headingOne">
                            <h4 class="panel-title">
                                <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Collapsible Group Item #1
                                </a>
                            </h4>
                            </div>
                            <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                            <div class="panel-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                            </div>
                            </div>
                        </div>
                        <div class="panel panel-default">
                            <div class="panel-heading" role="tab" id="headingThree">
                            <h4 class="panel-title">
                                <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Collapsible Group Item #3
                                </a>
                            </h4>
                            </div>
                            <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                            <div class="panel-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                            </div>
                            </div>
                        </div>
                    </div>
            JS方法
                .collapse(options)
                .collapse('toggle')
            JS事件
                hide.bs.collapse      show.bs.collapse    hidden.bs.collapse       shown.bs.collapse
    
        滚播  .carousel
            实例：
                <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
                    注释 Indicators 
                    <ol class="carousel-indicators">
                        <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                    </ol>
                    注释 Wrapper for slides 
                    <div class="carousel-inner" role="listbox">
                        <div class="item active">
                            <img src="bg_start.png" alt="...">
                            <div class="carousel-caption">
                                ...1
                            </div>
                        </div>
                        <div class="item">
                            <img src="bg_start.png" alt="...">
                            <div class="carousel-caption">
                                ...2
                            </div>
                        </div>
                        <div class="item">
                            <img src="bg_start.png" alt="...">
                            <div class="carousel-caption">
                                ...3
                            </div>
                        </div>
                    </div>
                    注释 Controls 
                    <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
    
            JS方法
                .carousel(options)
                .carousel('cycle')
                .carousel('pause')
                .carousel('prev')
                .carousel('next')
                .carousel(numIndex)
            JS事件
                slide.bs.carousel
                slid.bs.carousel    slide的完成式slid





module egret {

    export class index {
    }

    /** 要玩开发规范 */
    class GuideYaoWan{
        constructor(){
            /**
             * 事件注册与派发
             *      控制层与显示层之间通信：
             *          事件在XXController.ts文件里面注册与响应处理
             *          AGame.R .registerRouter/notifyObservers/notifyView
             *
             *      控制层与显示层之间的通信
             *          事件在XXView.ts文件里面注册
             *
             *      服务器层与数据层之间通信：
             *          在XXModel.ts文件里面注册与响应处理
             *          ServiceBuilder.
             *
             *      数据层与显示层之间通信
             *          ServiceBuilder.sendMessage
             *
             *      触摸事件的绑定与移除
             *          EventManager
             *
             *
             */
        }
    }

    class EUI {
        constructor(){

            /** EXML
             *      使用EXML：
             *          直接引用EXML文件
             *          动态加载EXML文件
             *          嵌入EXML到代码
             *
             *      EXML基本语法：
             *          根节点
             *              格式：<?xml version="1.0" encoding="utf-8"?>
             *                  <e:Skin class="" states="" xmlns:e="http://ns.egret.com/eui">...</e:Skin>
             *          添加子项
             *          设置属性
             *          ID属性
             *          属性语法糖
             *          节点默认属性
             *          数据绑定
             *              需要在EXML节点中加入{data.属性名}并与ItemRender的数据刷新结合使用
             *          内部类
             *              创建一个EXML文件用于描述皮肤，在另一个EXML文件中使用skinName属性引用它的类名
             *          视图状态
             *              绑定皮肤状态：
             *                  在<e:Skin>添加states属性，以逗号隔开各个状态值
             *                  在其子节点中添加includeIn和excludeIn属性,其值从states属性值中选取
             *                  在其子节点中设置某个状态值时某个属性的值的方法： 子节点属性.状态值 = ""
             *              切换状态方法：设置皮肤的currentState属性为states中的某个值，即可切换状态 skin.currentState = "";
             *
             * 
             *  皮肤
             *      皮肤部件
             *
             *      视图状态
             *
             *      配置主题
             *          在xxx.thm.json中配置主题
             *              skins, exmls, autoGenerateExmlsList, styles
             *          EXML 设置版本号
             *              配置加载 EXML 文件时加入后缀?=20151211来设置版本号，eg："resource/eui_skins/ButtonSkin.exml?v=20151211"
             *          启用主题
             *              new eui.Theme("resource/default.thm.json", this.stage);
             *                  创建了Theme之后，它会开始异步加载指定的主题文件并解析，
             *                  在加载的过程中，如果已经有组件在创建，也不需要额外处理，这部分组件在主题加载完成后会自动重新查询一次默认皮肤。
             *
             *      自定义加载根目录
             *          如果你想改变皮肤文件的根文件夹的位置，可以使用 EXML.prefixURL = xxxx 这个方法来实现。
             *
             *  自动布局
             *      原理
             *
             * 使用布局类
             *
             *      基本布局
             *          应用到的属性：
             *             绝对定位 [x, y]
             *             居中定位 [horizontalCenter, verticalCenter]
             *             边距定位 [top, left , bottom, right]
             *             百分比设定 [percentWidth, percentHeight]
             *
             *      水平布局
             *          应用到的属性：
             *              [gap, horizontalAlign, verticalAlign, padding(paddingTop, paddingBottom, paddingLeft, paddingRight)]
             *      垂直布局
             *          应用到的属性同水平布局
             *
             *      网格布局
             *          应用到的属性：
             *              [horizontalGap, verticalGap, columnAlign, rowAlign, padding, requestedColumnCount]
             *
             *      自定义布局
             *
             * 
             * 
             * 控件
             *      文本 eui.Label，继承egret.TextField
             *          style属性的支持
             *              在引擎eui 3.2.1 版本后label增加了style属性的支持，有点像css的样式。
             *              在default.thm.json中增加style的设置，然后在exml中给label设置style样式
             *
             *      图片 eui.Image，继承自egret.Bitmap
             *
             *      按钮
             *
             *      复选框
             *
             *      单选框
             *
             *      状态切换按钮
             *
             *      滑动选择器
             *
             *      进度条
             *
             *      输入文本
             *
             * 
             *  容器
             *      简单容器 eui.Group
             *          操作对象方法
             *              和 Sprite 基本一致，只是增加了2个方法getElementAt 和 numElements
             *              需要覆盖父类的 createChildren 方法
             *          常用属性
             *              layout：布局类实例
             *              contentWidth,contentHeight：内部内容实际宽高
             *              scrollEnabled: 是否启用容器滚动。
             *              scrollH/scrollW：可视区域竖直/水平方向起始点
             *
             *      层叠容器 eui.ViewStack
             *          特点：可以在 ViewStack 这个容器中添加多个子项，但只能显示其中的一个。
             *          控制当前应该显示的子项：通过设置 selectedIndex 或者 selectedChild 属性。
             *
             *      面板 eui.Panel
             *          id子部件所具有的默认功能
             *              moveArea：点中这个id的部件区域可以拖拽整个面板
             *              titleDisplay：面板标题
             *              closeButton：关闭按钮
             *
             *      滚动控制容器 eui.Scroller
             *          关键属性: width,height,viewport
             *          获取和控制滚动的位置: viewport属性对象的scrollV和scrollH
             *          停止滚动: stopAnimation()
             *          滚动条显示策略: verticalScrollBar/horizontalScrollBar的autoVisibility属性和visible属性
             *
             * 
             *  数据集合
             *
             *      数据容器 eui.DataGroup
             *          创建步骤
             *              首先创建任意类型的数据源数组并创建一个数据集合对象包装数据源
             *              然后创建DataGroup的实例，并设置数据源(属性名称是dataProvider)
             *              接着自定义一个继承自ItemRenderer的类，在这个类里面的data对象属性会被数据源填充
             *              最后我们将自定义的 ItemRenderer 类赋值给数据容器的 itemRenderer 属性
             *          列表创建内部对象的策略设置，需集合Scroller使用
             *              eui.DataGroup 中的一个属性 useVirtualLayout ,默认为true，
             *
             *      数据集合 eui.ArrayCollection
             *
             *      列表
             *
             *      选项卡
             *
             *
             */

            /** 进阶技巧
             *
             *
             */

            /**
             *
             * 在滚动条显示方面横纵方向只能显示其中一个，即HScrollBar和VScrollBar只能添加其中的一个，滚动条下面的e:Image的id只能是thumb.
             *<e:Scroller id="scrListDemo" height="207" width="150" horizontalCenter="0" y="100">
             *    <e:viewport>
             *        <e:List id="listDemo" itemRendererSkinName="unit_list_demo" height="110">
             *            <e:layout>
             *               <e:VerticalLayout/>
             *            </e:layout>
             *        </e:List>
             *    </e:viewport>
             *
             *    <e:Skin>
             *        <e:HScrollBar id="horizontalScrollBar" width="100%" height="8" bottom="0" autoVisibility="false" visible="true">
             *            <e:Skin>
             *               <e:Image id="thumb" width="28" height="8" source="b10_4_png" scale9Grid="1,1,4,4"/>
             *            </e:Skin>
             *        </e:HScrollBar>
             *    </e:Skin>
             *
             *    <e:Skin>
             *        <e:VScrollBar id="verticalScrollBar" width="8" minHeight="100%" height="100%" right="0" autoVisibility="false" visible="true">
             *            <e:Skin>
             *               <e:Image id="thumb" width="8" height="50" source="b10_2_png" scale9Grid="1,1,4,4"/>
             *            </e:Skin>
             *        </e:VScrollBar>
             *    </e:Skin>
             *</e:Scroller>
             *
             *
             */
/**

 原生打包
    1. 编译 egret build --runtime native -e
    2. 发布 egret publish --runtime native -compile

 安装特定版本的egret到指定目录：

     1: npm init

     2: npm install http://...(egret engine core 的tar.gz链接)   [如果是npm install -g http://... 的话，就表示全局安装]

     3:在项目内新建一个文件egret.cmd,内容如下

         @IF EXIST "%~dp0\node.exe" (
             "%~dp0\node.exe"
             "%~dp0\node_modules\egret\tools\bin\egret" %*
         ) ELSE (
             @SETLOCAL  @SET PATHEXT=%PATHEXT:;.JS;=;%
             node  "%~dp0\node_modules\egret\tools\bin\egret" %*
         )


 */
        }
    }


}
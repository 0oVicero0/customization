
# 2015.01.15  加入鼠標滾動設置
# 2015.01.14  精簡設置

# pref(key,value) 会覆盖默认设置,在删除之后会恢复默认设置.
# user_pref(key,value)等同于从about:config修改,删除之后,修改的设置仍然有效.

/*==========FX29 Panel面板参数==========*/
//user_pref("browser.uiCustomization.state", "");

/*==========选项卡里的设置==========*/
user_pref("browser.shell.checkDefaultBrowser", true);//启动时检查是否为默认浏览器
user_pref("signon.rememberSignons", false);//不保存密码
user_pref("general.smoothScroll",false);//禁用平滑滚动，多图会卡顿 
user_pref("security.OCSP.enabled", 0); //禁用OCSP安全驗證
//字体设置
user_pref("font.minimum-size.zh-CN", 12);//最小字体大小
user_pref("font.size.variable.zh-CN", 16);//比例字体大小
user_pref("font.size.fixed.zh-CN", 16);//等宽字体大小
user_pref("font.minimum-size.zh-TW", 12);//最小字体大小
user_pref("font.size.variable.zh-TW", 16);//比例字体大小
user_pref("font.size.fixed.zh-TW", 16);//等宽字体大小
//语言区域设置
user_pref("intl.accept_languages","unicode,zh-CN,zh-cn,zh,zh-hk,zh-sg,zh-tw,en-us,en,en-gb,ja");
user_pref("intl.charset.detector", "universal_charset_detector");
user_pref("intl.charsetmenu.browser.cache", "UTF-8, windows-1252, EUC-JP, gbk, GB2312");
//禁用硬件加速
user_pref("gfx.direct2d.disabled", true);//禁止使用D2D渲染网页文字内容
user_pref("layers.acceleration.disabled", true);//禁用硬件加速，关闭网页图层绘制的gpu加速
//拼写检查
user_pref("spellchecker.dictionary", "en-US");//字典
user_pref("layout.spellcheckDefault", 2);//开启单行和全文的拼写检查

/*==========Browser==========*/
user_pref("browser.tabs.warnOnClose", false);//關閉時不提示
user_pref("extensions.autoDisableScopes", 0);//第一次运行不禁止任何扩展
user_pref("browser.startup.homepage_override.mstone", "ignore");//启动时不检测版本，不弹欢迎页面
user_pref("signed.applets.codebase_principal_support", true);//一些网站的下载协议支持
user_pref("browser.urlbar.trimURLs", false);//地址栏显示 http://
user_pref("extensions.blocklist.enabled", false);//关闭启动时插件检查窗口
user_pref("ui.scrollToClick", 1); //点击滚动条将能够直接让你调转到页面上你想要查看的那点
user_pref("privacy.popups.showBrowserMessage", false);//弹窗不提示消息
user_pref("view_source.wrap_long_lines", true);//页面源代码--将较长的行自动换行
user_pref("startup.homepage_welcome_url", "");
//附加組件
user_pref("extensions.getAddons.cache.enabled", false);//阻止每天更新附加组件元数据
user_pref("extensions.webservice.discoverURL","http://127.0.0.1");//禁用附加组件建议
user_pref("extensions.ui.lastCategory", "addons://list/extension");//打开附加组件时默认打开“扩展”项
//字体渲染
user_pref("layout.paint_rects_separately", true);//重启浏览器，完美解决。。而且性能比关硬件加速要好很多。
//缓存位置
user_pref("browser.cache.disk.parent_directory", "D:\Temp\Cache-FX");
user_pref("browser.cache.offline.parent_directory", "D:\Temp\Cache-FX.offline");
//书签
user_pref("browser.bookmarks.autoExportHTML", true);//书签生成html
user_pref("browser.bookmarks.max_backups", 0);//最大备份数目
user_pref("browser.places.smartBookmarksVersion", -1);//禁用智能书签
//关闭安全检测健康中心类
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.enabled", false);
//关闭烦人提示
user_pref("browser.rights.3.shown", false);//火狐首次启动时是否已显示的权利通知
//主页
user_pref("browser.startup.homepage", "chrome://userchromejs/content/myNewTab/index.html");//首页
user_pref("browser.newtab.url", "chrome://userchromejs/content/myNewTab/index.html");//本地Html
//鼠標滾動設置
user_pref("mousewheel.withnokey.sysnumlines",false);//首先禁用系统滚动步长 
user_pref("mousewheel.min_line_scroll_amount", 30); //控制滚轮速度，小屏幕建议不超过55。默认值5，恢复时备用。
user_pref("mousewheel.acceleration.factor", 4);//使滚动幅度增大、减小.卷动加速为几倍
user_pref("mousewheel.acceleration.start", 3);//鼠标滚轮连续滚动几次之后会启动加速功能,调到0-5微调有明显变化

/*==========Plugin==========*/
user_pref("plugins.click_to_play", false);//关闭点击才运行插件
user_pref("dom.ipc.plugins.unloadASAP", true);//当插件空闲时自动关闭进程
user_pref("plugins.hide_infobar_for_missing_plugin", true);//隐藏信息栏缺失插件消息提醒
user_pref("plugins.hide_infobar_for_outdated_plugin", true);//过期插件不提示
user_pref("plugins.hide_infobar_for_blocked_plugin", true);//插件屏蔽选择不提示

/*==========扩展设置==========*/
//adblockplus
user_pref("extensions.adblockplus.hideContributeButton", true);//隐藏助力abp项
user_pref("extensions.adblockplus.patternsbackups", 0);
user_pref("extensions.adblockplus.subscriptions_exceptionscheckbox", false);//非入侵式广告
user_pref("extensions.adblockplus.subscriptions_exceptionsurl", "");//删除非入侵式广告订阅网址
user_pref("extensions.adblockplus.subscriptions_antiadblockurl", "");//去掉自带的反-反ADP列表
user_pref("extensions.adblockplus.please_kill_startup_performance", true);//关闭延迟启动
user_pref("extensions.adblockplus.frameobjects", false);//在Java和Flash上显示标签 - 否

//LastPass
user_pref("extensions.lastpass.hidecontextmenu", true);
user_pref("extensions.lastpass.showHomepageAfterLogin", false);//不登入密码库
user_pref("extensions.lastpass.0a148091163b8a7de3368af449db2947c700bea1552b01964d4ae55f930562e0.toplevelmatchingsites", true);//将匹配网站移动到顶部菜单
user_pref("extensions.lastpass.loginpws", "");//不保存密码
user_pref("extensions.lastpass.loginusers", "dupontjoy%40163.com");//用戶名

//FlashGot
user_pref("flashgot.hide-all", true);
user_pref("flashgot.hide-buildGallery", true);
user_pref("flashgot.hide-icons", true);
user_pref("flashgot.hide-it", true);
user_pref("flashgot.hide-media", true);
user_pref("flashgot.hide-options", true);
user_pref("flashgot.hide-sel", true);
user_pref("flashgot.altClick", false);//禁用 Alt+Click
user_pref("flashgot.includeImages", true);//包含当前页面的图片
user_pref("flashgot.autoStart", false);//取消 自动下载已监视的文件
user_pref("flashgot.interceptAll", true);//接管所有下载
user_pref("flashgot.logEnabled", false);//禁用日志
user_pref("flashgot.firstRunRedirection", false);//重建配置不弹FlashGot首页

//Greasemonkey
user_pref("extensions.greasemonkey.stats.prompted", true);//不弹改进建议提示
user_pref("extensions.greasemonkey.installDelay", 0);//安裝時的倒計時
user_pref("extensions.greasemonkey.sync.enabled", false); //禁止同步

/*==========脚本设置==========*/

//SmartProxyforChina代理
/*user_pref("userChromeJS.SmartProxy.proxyMode", "auto");
user_pref("userChromeJS.SmartProxy.default_proxy", 6);
user_pref("userChromeJS.SmartProxy.knownProxy", "Free Gate;127.0.0.1;8580;http$Puff;127.0.0.1;1984;http$ssh -D;127.0.0.1;7070;socks$Toonel;127.0.0.1;8080;http$Tor;127.0.0.1;9050;socks$Shadowsocks;127.0.0.1;1080;http$Goagent;127.0.0.1;8087;http");*/

//rebuild_userChrome脚本管理器
user_pref("userChromeJS.rebuildUI.menues", "addMenu-rebuild,anobtn_set,toolsbar_KeyChanger_rebuild,ucjsMouseGestures,RefererChanger,uc-movebutton,InspectElement-menuitem,EncodeTool,GrabScroll_optionsMenu,redirector-icon,ucjs_UserAgentChanger,usercssloader_Tools_Menu,UserScriptLoader_Tools_Menu,abp-menuitem,gm_general_menu,noscript-context-menu");

//UserCSSLoader引导器
user_pref("UserCSSLoader.innereditor", false);//使用外部编辑器
user_pref("UserCSSLoader.showtoolbutton", false);//显示为菜单

//UserScriptLoader引导器
user_pref("UserScriptLoader.showtoolbutton", false);//显示为菜单

//InspectElementModY
user_pref("userChromeJS.InspectElement.contentType", 2);//查看页面:Dom Inspector
user_pref("userChromeJS.InspectElement.mainWinType", 2);//查看窗口:Dom Inspector

//AddmenuPlus
user_pref("addMenu.FILE_PATH", "local\_addMenu.js");//配置路径

//GrabScroll
user_pref("grabScroll.button", 1);//使用GrabScroll抓取的键位：中键
user_pref("grabScroll.clickable", false);//能够在链接上使用GrabScroll


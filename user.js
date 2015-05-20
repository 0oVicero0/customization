﻿
//2015.05.19 18:00  加入一些參數，分組整理
//2015.05.18 11:00  關閉WebRTC
//2015.05.14 20:00  加入AutoClick設置
//2015.04.16 13:00  加入新的平滑設置
//2015.04.14 17:00  使用SimpleWhite主題
//2015.04.05 09:00  調整UC管理器菜單
//2015.04.04 08:00  加入江3省电版火狐
//2015.03.20 18:00  調整Flashgot和DTA设置
//2015.03.03 10:00  加入阻止此页面创建更多对话框
//2015.02.17 18:00  加入DTA設置
//2015.01.23 00:00  加入DNT，保存位置
//2015.01.18 00:00  加入鼠標滾動設置，NoScript參數

# pref(key,value) 会覆盖默认设置,在删除之后会恢复默认设置.
# user_pref(key,value)等同于从about:config修改,删除之后,修改的设置仍然有效.

/*==========實驗參數==========*/
//user_pref("browser.uiCustomization.state", "");
//user_pref("browser.tabs.remote", true);//开启标签独立进程模式？默认false，需重启FF生效
//user_pref("browser.tabs.remote.autostart", true);//自动开启全局多进程框架？默认false；
//user_pref("browser.tabs.remote.autostart.1", false);

/*==========选项卡里的设置==========*/
//user_pref("browser.shell.checkDefaultBrowser", true);//启动时检查是否为默认浏览器
user_pref("browser.preferences.inContent", false);//選項 使用老版彈窗
user_pref("signon.rememberSignons", false);//不保存密码
user_pref("privacy.donottrackheader.enabled", true);//告訴網站不想被追蹤
user_pref("browser.download.useDownloadDir", false);//每次訊問我要存到何處
user_pref("security.OCSP.enabled", 0); //禁用OCSP安全驗證
//硬件加速
user_pref("layers.acceleration.disabled", false);//选項卡中『可用時開啟硬體加速』
user_pref("webgl.force-enabled", true);//强制启用 WebGL
user_pref("webgl.msaa-force", true);//强制启用 WebGL 的抗锯齿
user_pref("layers.acceleration.force-enabled", true);//强制启用硬件渲染（无视黑名单/白名单），最重要的设置！
user_pref("gfx.direct2d.force-enabled", true);//在 Windows 平台上强制使用 D2D 加速页面内容渲染
user_pref("gfx.direct2d.disabled", true);//禁用字体硬件加速，开启后标题会模糊，字体显示不一致
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
//拼写检查
user_pref("spellchecker.dictionary", "en-US");//字典
user_pref("layout.spellcheckDefault", 2);//开启单行和全文的拼写检查

/*==========標籤相關==========*/
user_pref("browser.tabs.insertRelatedAfterCurrent", true);//紧邻当前标签打开相关标签
user_pref("browser.tabs.animate", false);//關閉标签页动画
user_pref("browser.tabs.warnOnClose", false);//關閉時不提示

/*==========書籤相關==========*/
user_pref("browser.bookmarks.autoExportHTML", true);//书签生成html
user_pref("browser.bookmarks.max_backups", 0);//最大备份数目
user_pref("browser.places.smartBookmarksVersion", -1);//禁用智能书签

/*==========緩存相關==========*/
user_pref("browser.cache.disk.enable", true);//是否使用磁盘缓存
user_pref("browser.cache.disk_cache_ssl", false);//开启ssl磁盘缓存
user_pref("browser.cache.disk.smart_size.enabled", false);//关闭磁盘缓存容量自动管理
user_pref("browser.cache.disk.smart_size.first_run", false);//标记是否属于首次smart sizing？默认true
user_pref("browser.cache.disk.smart_size.use_old_max", false);//使用旧的磁盘缓存？
user_pref("browser.cache.disk.capacity", 51200);//最大缓存文件大小(50MB)       
user_pref("browser.cache.disk.max_entry_size", 4096);//最大磁盘缓存元素大小？暗月设为4MB，任何大于4MB的元素都不建议缓存
user_pref("browser.cache.memory.capacity", 1048576);//设置内存使用(1GB)
user_pref("browser.cache.memory.max_entry_size", 5120);//单个文件內存缓存上限(5MB) 
user_pref("nglayout.debug.disable_xul_cache", false);//关闭XUL缓存？如果使用内存盘的话，应该可以删除

/*==========圖片相關==========*/
user_pref("layout.imagevisibility.enabled", true);//仅解码可见区域的图片
user_pref("image.mem.decodeondraw", false);//不解码非激活标签的图片
user_pref("permissions.default.image", 1);//默认站点权限-图片 1 允许所有图片；2 阻止所有图片；3 阻止第三方服务器图片
user_pref("image.mem.min_discard_timeout_ms", 1000);//释放图片所佔用的记忆体，越小时间越短，但太短则会造成图片不能显示
user_pref("image.mem.decode_bytes_at_a_time", 16384);//图片解码器一次调用多大数据块
user_pref("image.mem.max_ms_before_yield", 250);//Image decoding tweaks
user_pref("image.mem.max_decoded_image_kb", 256000);//解码的图片（decoded images）的内存缓存大小; 256MB 足矣

/*==========Javascript相關==========*/
user_pref("javascript.options.xml.content", true);//总是 jit 加速 javascript，改善JS内存占用
user_pref("javascript.options.methodjit_always", true);//始终采用JIT编译器编译JS，即使这些JS利用率很低
user_pref("javascript.options.mem.gc_incremental_slice_ms", 25);//add IGC and adjust time slice
user_pref("capability.policy.maonoscript.javascript.enabled", "allAccess");//允许JS？

/*==========網路相關==========*/
user_pref("network.prefetch-next", false); //默认关闭预读引擎
user_pref("network.http.pipelining" , true); //默认开启流水线，目前没有出现问题
user_pref("network.http.pipelining.ssl" , true);
user_pref("network.http.proxy.pipelining", false); // 代理流水线- 会造成一些代理失败 (406)
user_pref("network.http.pipelining.maxrequests", 12); // 最大流水线请求数
user_pref("network.http.max-connections", 48); // 不要最大化网络层，以保证家庭网络和无线网络! (FF=256)
user_pref("network.http.max-connections-per-server", 8); // 使用了流水线，这个值应该小一点儿 (FF=15)
user_pref("network.http.max-persistent-connections-per-proxy", 8);
user_pref("network.http.max-persistent-connections-per-server", 6);
user_pref("network.dns.disablePrefetch", true); //禁用DNS预读，防止路由阻塞
user_pref("network.dnsCacheEntries", 1024); //cache 1024 instead of 20
user_pref("network.dnsCacheExpiration", 3600); //TTL 1 hour

/*==========平滑滾動==========*/
user_pref("general.smoothScroll.durationToIntervalRatio", 500);
user_pref("mousewheel.min_line_scroll_amount", 35);

/*==========字體渲染==========*/
user_pref("gfx.font_rendering.cleartype.always_use_for_content ", true);
user_pref("gfx.font_rendering.cleartype.use_for_downloadable_fonts", true);
user_pref("gfx.font_rendering.cleartype_params.cleartype_level", 100);//[cleartype 级别，0 到 100 ，100 最大]
user_pref("gfx.font_rendering.cleartype_params.pixel_structure", 1);//渲染像素结构,0 = flat, 1 = RGB, 2 = BGR 液晶就用RGB
user_pref("gfx.font_rendering.cleartype_params.rendering_mode", 5);//字體渲染的模式，設定中最重要的項目: 1= Aliased, 2= GDI Classic, 3 = GDI Natural Widths, 4 = Natural, 5 = Natural Symmetric
user_pref("layout.paint_rects_separately", true);//重启浏览器，完美解决。。而且性能比关硬件加速要好很多。

/*==========插件相關==========*/
user_pref("plugins.click_to_play", false);//关闭点击才运行插件
user_pref("dom.ipc.plugins.unloadASAP", true);//当插件空闲时自动关闭进程
user_pref("plugins.hide_infobar_for_missing_plugin", true);//隐藏信息栏缺失插件消息提醒
user_pref("plugins.hide_infobar_for_outdated_plugin", true);//过期插件不提示
user_pref("plugins.hide_infobar_for_blocked_plugin", true);//插件屏蔽选择不提示
user_pref("dom.ipc.plugins.flash.disable-protected-mode", true);//直接用火狐禁用flash保护模式
user_pref("microsoft.CLR.auto_install", false);//好像是和mic相关的东西自动安装

/*==========关闭自动更新类==========*/
user_pref("app.update.auto", false);
user_pref("app.update.enabled", false);
user_pref("app.update.service.enabled", false);
user_pref("browser.search.update", false);
user_pref("app.update.disable_button.showUpdateHistory", false);

/*==========关闭安全检测健康中心类==========*/
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.enabled", false);
user_pref("browser.safebrowsing.downloads.enabled", false);//自带下载出问题时，有人推荐禁用此参数
user_pref("browser.safebrowsing.dataProvider", 1);
user_pref("datareporting.healthreport.logging.consoleEnabled", false);
user_pref("datareporting.healthreport.pendingDeleteRemoteData", true);
user_pref("datareporting.healthreport.service.enabled", false);
user_pref("datareporting.healthreport.service.firstRun", true);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);

/*==========主页==========*/
user_pref("startup.homepage_welcome_url", "");
user_pref("browser.startup.homepage", "chrome://userchromejs/content/myNewTab/index.html");//首页
user_pref("browser.newtab.url", "chrome://userchromejs/content/myNewTab/index.html");//本地Html

/*==========附加組件==========*/
user_pref("extensions.getAddons.cache.enabled", false);//阻止每天更新附加组件元数据
user_pref("extensions.webservice.discoverURL","http://127.0.0.1");//禁用附加组件建议
user_pref("extensions.ui.lastCategory", "addons://list/extension");//打开附加组件时默认打开“扩展”项

/*==========FX其它类==========*/
user_pref("general.skins.selectedSkin", "simplewhite");//使用SimpleWhite主題
user_pref("general.warnOnAboutConfig", false);//AboutConfig警告
user_pref("browser.urlbar.trimURLs", false);//地址栏显示 http://
user_pref("view_source.wrap_long_lines", true);//页面源代码--将较长的行自动换行
user_pref("privacy.popups.showBrowserMessage", false);//弹窗不提示消息
user_pref("dom.successive_dialog_time_limit", 0);//避免此页面产生更多对话框
user_pref("browser.download.manager.scanWhenDone", false);//关闭下载结束后扫描
user_pref("signed.applets.codebase_principal_support", true);//一些网站的下载协议支持
user_pref("browser.turbo.enabled", true);//用“turbo mode"加载浏览器
user_pref("nglayout.initialpaint.delay", 0);//当浏览器收到信息后等待的时间
user_pref("extensions.autoDisableScopes", 0);//第一次运行不禁止任何扩展
user_pref("browser.startup.homepage_override.mstone", "ignore");//启动时不检测版本，不弹欢迎页面
user_pref("browser.rights.3.shown", false);//火狐首次启动时是否已显示的权利通知
user_pref("extensions.blocklist.enabled", false);//关闭启动时插件检查窗口
user_pref("ui.scrollToClick", 1); //点击滚动条将能够直接让你调转到页面上你想要查看的那点
user_pref("browser.taskbar.lists.enabled", false);//开启jump list？默认true
user_pref("browser.sessionstore.interval", 999999999);//保存会话的时间间隔，不能关闭，我取了能取的最大值
user_pref("browser.pagethumbnails.capturing_disabled", true);//禁止截图最新访问页面的缩略图
user_pref("security.tls.version.fallback-limit", 0);//SSLv3 error messages
user_pref("security.tls.version.min", 0);//SSLv3 error messages
user_pref("layout.css.vertical-text.enabled", true);//开启用 writing-mode 产生竖排文字的排版效果。FX38以後有效
user_pref("network.http.spdy.enabled.http2draft", false);//目前浏览器默认还没有启用 HTTP/2 的支持。所以暫時關閉此項。
user_pref("media.peerconnection.enabled", false);//關閉WebRTC，因爲webrtc的漏洞可以获取真实ip（FQ時不安全）

/*==========来自江3省电版火狐==========*/
//http://bbs.kafan.cn/thread-1442684-1-1.html：关闭DNS预读，链接预读，流水线，钓鱼数据库，历史，插件，磁盘缓存，SSL磁盘缓存...关闭自动更新、开发工具、插件容器、自带pdf.js、各种平滑，动画，闪图
//去掉（禁止插件扫描和历史，及一些重复项）
user_pref("network.http.keep-alive", false);  
user_pref("network.http.proxy.keep-alive", false);  
user_pref("devtools.debugger.enabled", false);
user_pref("devtools.errorconsole.enabled", false);
user_pref("devtools.inspector.enabled", false);
user_pref("devtools.layoutview.enabled", false);
user_pref("devtools.responsiveUI.enabled", false);
user_pref("devtools.ruleview.enabled", false); //
user_pref("devtools.scratchpad.enabled", false);
user_pref("devtools.styleeditor.enabled", false); //
user_pref("devtools.styleinspector.enabled", false);
user_pref("devtools.tilt.enabled", false);  //
user_pref("devtools.toolbar.enabled", false); //
user_pref("devtools.webconsole.filter.log", false);
user_pref("javascript.options.showInConsole", false);
user_pref("javascript.options.strict", false);
user_pref("layout.css.report_errors", false);  
user_pref("browser.dom.window.dump.enabled", false);
user_pref("pdfjs.disabled", true);
user_pref("dom.ipc.plugins.enabled", false); 

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
user_pref("flashgot.includeImages", true);//包含当前页面的图片
user_pref("flashgot.autoStart", false);//取消 自动下载已监视的文件（開啟後所有下載自動調用DTA）
user_pref("flashgot.interceptAll", true);//接管所有下载
user_pref("flashgot.logEnabled", false);//禁用日志
user_pref("flashgot.firstRunRedirection", false);//重建配置不弹FlashGot首页

//Greasemonkey
user_pref("extensions.greasemonkey.stats.prompted", true);//不弹改进建议提示
user_pref("extensions.greasemonkey.installDelay", 0);//安裝時的倒計時
user_pref("extensions.greasemonkey.sync.enabled", false); //禁止同步

//Stylish
user_pref("extensions.stylish.firstRun", 3);//重建配置不弹首页

//Noscript
user_pref("noscript.autoAllow", 3); //自動允許第二層網域
user_pref("noscript.autoReload.allTabs", false); //只重載當前頁面
user_pref("noscript.forbidFonts", false); //不禁止@font-face
user_pref("noscript.showAbout", false); //不顯示關於
user_pref("noscript.notify.hideDelay", 30); //xx秒後隱藏
user_pref("noscript.notify.hide", true); //時間到後自動隱藏
user_pref("noscript.xss.notify", false); //不顯示被封鎖的META重定向
user_pref("noscript.forbidMetaRefresh.notify", false); //不顯示XSS通知
user_pref("noscript.firstRunRedirection", false); //不顯示更新發行公告
user_pref("noscript.ABE.enabled", false); //禁用ABE
user_pref("noscript.default", "");//默认白名单，可删除之
user_pref("noscript.mandatory", ""); //固定白名单，可修改之
user_pref("noscript.subscription.checkInterval", 24);//更新检查周期间隔
user_pref("noscript.subscription.trustedURL", "https://raw.githubusercontent.com/dupontjoy/customization/master/NoScript-Whitelist.txt");//可信名单的订阅URL，在线订阅的黑白名单会定期自动同步到本地，并与本地名单合并


/*==========脚本设置==========*/
//SmartProxyforChina代理
//user_pref("userChromeJS.SmartProxy.proxyMode", "auto");
//user_pref("userChromeJS.SmartProxy.default_proxy", 6);
//user_pref("userChromeJS.SmartProxy.knownProxy", "Free Gate;127.0.0.1;8580;http$Lantern;127.0.0.1;8787;http$ssh -D;127.0.0.1;7070;socks$Toonel;127.0.0.1;8080;http$Tor;127.0.0.1;9050;socks$Shadowsocks;127.0.0.1;1080;http$Goagent;127.0.0.1;8087;http");

//rebuild_userChrome脚本管理器
user_pref("userChromeJS.rebuildUI.menues", "more-tools-menu");

//UserCSSLoader引导器
user_pref("UserCSSLoader.innereditor", false);//使用外部编辑器
user_pref("UserCSSLoader.showtoolbutton", false);//显示为菜单

//InspectElementModY
user_pref("userChromeJS.InspectElement.contentType", 2);//查看页面:Dom Inspector
user_pref("userChromeJS.InspectElement.mainWinType", 2);//查看窗口:Dom Inspector

//AddmenuPlus
user_pref("addMenu.FILE_PATH", "local\_addMenu.js");//配置路径

//GrabScroll
user_pref("grabScroll.button", 1);//使用GrabScroll抓取的键位：中键
user_pref("grabScroll.clickable", false);//能够在链接上使用GrabScroll

//ShowFlagS
user_pref("userChromeJS.showFlagS.RefChanger", true);//開啟圖片反盜鏈
user_pref("userChromeJS.showFlagS.UAChanger", true);//開啟UA切換
user_pref("userChromeJS.showFlagS.Reacquire", true);//自動重新获取
user_pref("userChromeJS.showFlagS.libIconPath", "Local\\ShowFlagS\\countryflags.js");//國旗圖標庫
user_pref("userChromeJS.showFlagS.LocalFlags", "Local\\ShowFlagS\\LocalFlags\\");//本地PNG圖標文件夾

//AutoClick
user_pref("userChromeJS.AutoClick.enable", false);//默認關閉
user_pref("userChromeJS.AutoClick.BUTTON_TYPE", 2);//顯示为菜單
user_pref("userChromeJS.AutoClick.hovering_time", 800);//悬停xx毫秒開始點擊


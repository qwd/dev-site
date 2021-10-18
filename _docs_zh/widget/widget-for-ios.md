---
title: iOS天气插件
version: 1.0
tag: widget
description: 和风天气免费iOS天气插件SDK，包括实况天气、分钟级降水、空气质量、灾害预警、30天预报、生活指数、台风路径等天气内容，支持在iOS应用任意位置加入天气内容，并可生成天气频道页面。
ref: 4-widget-ios
---

iOS天气插件SDK，包括实况天气、分钟级降水、空气质量、灾害预警、30天预报、生活指数、台风路径等天气内容，支持在iOS应用任意位置加入天气内容，并可生成天气频道页面。

## 下载

请访问[iOS天气插件产品页]({{ site.exturl.widget }}{% if page.lang == "en" %}/en{% endif %}/create-sdk/)下载最新版本

## 适配版本

iOS 9.0 及以上

## 工程配置

**手动安装**

- 1.1 将QWeather_Plugin.frameWork拖入到工程中
- 1.2 info.plist添加**Allow Arbitrary Loads**元素，同时设为 **YES**
- 1.3 本项目依赖于**SDWebImage**和**Masonry**，请确保您的项目中已经安装这两个类库
- 1.4 sdk需要开启定位权限，请在工程plist.info文件中添加NSLocationAlwaysAndWhenInUseUsageDescription和NSLocationWhenInUseUsageDescription

## 调用说明

**引入头文件** 

在所需位置引入头文件

```objective-c
#import <QWeather_Plugin/QWeather_Plugin.h>
```

### 显示横向单排

![sample](/assets/images/content/wd-sample-h.png)

```objc
//显示横向单排
-(void)setQWeatherPluginViewTypeHorizontal{
    NSArray *typeArray =  @[@(QWeatherConfigModelTypeLocation),
                            @(QWeatherConfigModelTypeAlarmIcon),
                            @(QWeatherConfigModelTypeAlarm),
                            @(QWeatherConfigModelTypeTemp),
                            @(QWeatherConfigModelTypeWeatherStateIcon),
                            @(QWeatherConfigModelTypeWeatherState),
                            @(QWeatherConfigModelTypeWindDirIcon),
                            @(QWeatherConfigModelTypeWindSC),
                            @(QWeatherConfigModelTypeAqiTitle),
                            @(QWeatherConfigModelTypeQlty),
                            @(QWeatherConfigModelTypeAqi),
                            @(QWeatherConfigModelTypePcpnIcon),
                            @(QWeatherConfigModelTypePcpn),
                            ];
    //初始化视图
    QWeatherPluginView *view = [[QWeatherPluginView alloc] initWithFrame:CGRectMake(0,  [[UIApplication sharedApplication] statusBarFrame].size.height + 44.f, self.view.frame.size.width, 20) ViewType:QWeatherPluginViewTypeHorizontal UserKey:@"用户key" Location:@"北京"];
    
    //视图属性设置
    NSMutableArray *configarray = [NSMutableArray array];
    [typeArray enumerateObjectsUsingBlock:^(id   obj, NSUInteger idx, BOOL * _Nonnull stop) {
        NSMutableArray *modelarray = [NSMutableArray array];
        if ([obj isKindOfClass:[NSArray class]]) {
            [obj enumerateObjectsUsingBlock:^(id  _Nonnull arrayobj, NSUInteger idx, BOOL * _Nonnull stop) {
                QWeatherConfigModel *model = [QWeatherConfigModel new];
                if (idx==0&&[arrayobj integerValue]==QWeatherConfigModelTypeTemp&&[obj count]==1) {
                    model.textFont = [UIFont systemFontOfSize:40];
                }
                if (idx==0&&[arrayobj integerValue]==QWeatherConfigModelTypeWeatherStateIcon&&[obj count]==1) {
                    model.iconSize = 32;
                }
                model.type = [arrayobj integerValue];
                model.padding = UIEdgeInsetsMake(4, 8, 4, 8);
                [modelarray addObject:model];
            }];
            [configarray addObject:modelarray];
        }else{
            QWeatherConfigModel *model = [QWeatherConfigModel new];
            model.type = [obj integerValue];
            model.padding =UIEdgeInsetsMake(4, 8, 4, 8);
            [configarray addObject:model];
        }
    }];
    view.configArray = configarray;
    view.contentViewAlignmen = QWeatherContentViewAlignmentCenter;
    //    view.themType = QWeatherPluginViewThemeTypeAuto;
    view.padding = UIEdgeInsetsZero;
    view.backgroundImageTitle = @"";
    view.borderColor = [UIColor greenColor];
    view.borderWidth =2;
    view.cornerRadius = 2;
    view.isShowBorder = NO;
    view.isShowConer = NO;
    //拖拽设置
    view.dragEnable = YES;
    view.freeRect = self.view.frame;
    view.dragDirection = QWeatherPluginViewDragDirectionAny;
    view.isKeepBounds = NO;
    //导航栏设置
    //    view.navigationBarBackgroundColor = [UIColor redColor];
    //    view.progressColor = [UIColor blueColor];
    view.navBarBackImage = [UIImage imageNamed:@""];
    view.navBarCloseImage = [UIImage imageNamed:@""];
    [self.view addSubview:view];
}

```
### 左1右2横向布局

![sample](/assets/images/content/wd-sample-l1r2.png)

```objc
-(void)setQWeatherPluginViewTypeLeftLarge{
    
    NSArray *typeArray = @[@[@(QWeatherConfigModelTypeWeatherStateIcon)],
                           @[@(QWeatherConfigModelTypeTemp),
                             @(QWeatherConfigModelTypeAlarmIcon),
                             @(QWeatherConfigModelTypeAlarm),
                             @(QWeatherConfigModelTypeAqiTitle),
                             @(QWeatherConfigModelTypeQlty),
                             @(QWeatherConfigModelTypeAqi),
                             @(QWeatherConfigModelTypeLocation)],
                           @[@(QWeatherConfigModelTypeWeatherState),
                             @(QWeatherConfigModelTypeWindDirIcon),
                             @(QWeatherConfigModelTypeWindSC),
                             @(QWeatherConfigModelTypePcpnIcon),
                             @(QWeatherConfigModelTypePcpn)]];
    //初始化视图
    QWeatherPluginView *view = [[QWeatherPluginView alloc] initWithFrame:CGRectMake(0, 200, self.view.frame.size.width, 40) ViewType:QWeatherPluginViewTypeLeftLarge UserKey:@"用户key" Location:@"北京"];
    
    //视图属性设置
    NSMutableArray *configarray = [NSMutableArray array];
    [typeArray enumerateObjectsUsingBlock:^(id   obj, NSUInteger idx, BOOL * _Nonnull stop) {
        NSMutableArray *modelarray = [NSMutableArray array];
        if ([obj isKindOfClass:[NSArray class]]) {
            [obj enumerateObjectsUsingBlock:^(id  _Nonnull arrayobj, NSUInteger idx, BOOL * _Nonnull stop) {
                QWeatherConfigModel *model = [QWeatherConfigModel new];
                if (idx==0&&[arrayobj integerValue]==QWeatherConfigModelTypeTemp&&[obj count]==1) {
                    model.textFont = [UIFont systemFontOfSize:40];
                }
                if (idx==0&&[arrayobj integerValue]==QWeatherConfigModelTypeWeatherStateIcon&&[obj count]==1) {
                    model.iconSize = 32;
                }
                model.type = [arrayobj integerValue];
                model.padding = UIEdgeInsetsMake(4, 8, 4, 8);
                [modelarray addObject:model];
            }];
            [configarray addObject:modelarray];
        }else{
            QWeatherConfigModel *model = [QWeatherConfigModel new];
            model.type = [obj integerValue];
            model.padding =UIEdgeInsetsMake(4, 8, 4, 8);
            [configarray addObject:model];
        }
    }];
    view.configArray = configarray;
    view.contentViewAlignmen = QWeatherContentViewAlignmentCenter;
    view.themType = QWeatherPluginViewThemeTypeLight;
    view.padding = UIEdgeInsetsZero;
    view.backgroundColor = QWeatherColorFromRGB(0xECECEC);
    view.backgroundImageTitle = @"";
    view.borderColor = [UIColor greenColor];
    view.borderWidth =2;
    view.cornerRadius = 4;
    view.isShowBorder = NO;
    view.isShowConer = YES;
    //拖拽设置
    view.dragEnable = YES;
    view.freeRect = self.view.frame;
    view.dragDirection = QWeatherPluginViewDragDirectionAny;
    view.isKeepBounds = NO;
    //导航栏设置
    //    view.navigationBarBackgroundColor = [UIColor redColor];
    //    view.progressColor = [UIColor blueColor];
    view.navBarBackImage = [UIImage imageNamed:@""];
    view.navBarCloseImage = [UIImage imageNamed:@""];
    [self.view addSubview:view];
}
```
### 右1左2横向布局

![sample](/assets/images/content/wd-sample-l2r1.png)

```objc
-(void)setQWeatherPluginViewTypeRightLarge{
    NSArray *typeArray = @[
                           @[@(QWeatherConfigModelTypeTemp)],
                           @[
                               @(QWeatherConfigModelTypeLocation),
                               @(QWeatherConfigModelTypeAqiTitle),
                               @(QWeatherConfigModelTypeQlty),
                               @(QWeatherConfigModelTypeAqi),
                               @(QWeatherConfigModelTypeAlarmIcon),
                               @(QWeatherConfigModelTypeAlarm),
                               @(QWeatherConfigModelTypeWeatherStateIcon)],
                           @[
                               @(QWeatherConfigModelTypePcpnIcon),
                               @(QWeatherConfigModelTypePcpn),
                               @(QWeatherConfigModelTypeWindDirIcon),
                               @(QWeatherConfigModelTypeWindSC),
                               @(QWeatherConfigModelTypeWeatherState)]
                           ];
    //初始化视图
    QWeatherPluginView *view = [[QWeatherPluginView alloc] initWithFrame:CGRectMake(0, 320, self.view.frame.size.width, 40) ViewType:QWeatherPluginViewTypeRightLarge UserKey:@"用户key" Location:@"北京"];
    
    //视图属性设置
    NSMutableArray *configarray = [NSMutableArray array];
    [typeArray enumerateObjectsUsingBlock:^(id   obj, NSUInteger idx, BOOL * _Nonnull stop) {
        NSMutableArray *modelarray = [NSMutableArray array];
        if ([obj isKindOfClass:[NSArray class]]) {
            [obj enumerateObjectsUsingBlock:^(id  _Nonnull arrayobj, NSUInteger idx, BOOL * _Nonnull stop) {
                QWeatherConfigModel *model = [QWeatherConfigModel new];
                if (idx==0&&[arrayobj integerValue]==QWeatherConfigModelTypeTemp&&[obj count]==1) {
                    model.textFont = [UIFont systemFontOfSize:40];
                    model.textColor = QWeatherColorFromRGB(0xFAFAFA);
                }
                if (idx==0&&[arrayobj integerValue]==QWeatherConfigModelTypeWeatherStateIcon&&[obj count]==1) {
                    model.iconSize = 32;
                }
                model.type = [arrayobj integerValue];
                model.padding = UIEdgeInsetsMake(4, 8, 4, 8);
                model.textColor = QWeatherColorFromRGB(0xFAFAFA);
                [modelarray addObject:model];
            }];
            [configarray addObject:modelarray];
        }else{
            QWeatherConfigModel *model = [QWeatherConfigModel new];
            model.type = [obj integerValue];
            model.padding =UIEdgeInsetsMake(4, 8, 4, 8);
            model.textColor = QWeatherColorFromRGB(0xFAFAFA);
            [configarray addObject:model];
        }
    }];
    view.configArray = configarray;
    view.contentViewAlignmen = QWeatherContentViewAlignmentCenter;
    view.themType = QWeatherPluginViewThemeTypeAuto;
    view.padding = UIEdgeInsetsZero;
    view.backgroundColor = QWeatherColorFromRGB(0xFAFAFA);
    view.backgroundImageTitle = @"";
    view.borderColor = [UIColor greenColor];
    view.borderWidth =2;
    view.cornerRadius = 4;
    view.isShowBorder = NO;
    view.isShowConer = YES;
    //拖拽设置
    view.dragEnable = YES;
    view.freeRect = self.view.frame;
    view.dragDirection = QWeatherPluginViewDragDirectionAny;
    view.isKeepBounds = NO;
    //导航栏设置
    //    view.navigationBarBackgroundColor = [UIColor redColor];
    //    view.progressColor = [UIColor blueColor];
    view.navBarBackImage = [UIImage imageNamed:@""];
    view.navBarCloseImage = [UIImage imageNamed:@""];
    [self.view addSubview:view];
}
```
### 纵向布局

![sample](/assets/images/content/wd-sample-v.png)

```objc
-(void)setQWeatherPluginViewTypeVertical{
    NSArray *typeArray = @[@(QWeatherConfigModelTypeLocation),
                           @(QWeatherConfigModelTypeTemp),
                           @(QWeatherConfigModelTypeWeatherStateIcon),
                           @(QWeatherConfigModelTypeWeatherState),
                           @(QWeatherConfigModelTypeWindDirIcon),
                           @(QWeatherConfigModelTypeWindSC),
                           @(QWeatherConfigModelTypeAqiTitle),
                           @(QWeatherConfigModelTypeQlty),
                           @(QWeatherConfigModelTypeAqi),
                           @(QWeatherConfigModelTypeAlarmIcon),
                           @(QWeatherConfigModelTypeAlarm),
                           @(QWeatherConfigModelTypePcpnIcon),
                           @(QWeatherConfigModelTypePcpn),
                           ];
    //初始化视图
    QWeatherPluginView *view = [[QWeatherPluginView alloc] initWithFrame:CGRectMake(0, 420, 50, 300) ViewType:QWeatherPluginViewTypeVertical UserKey:@"用户key" Location:@"武汉"];
    
    //视图属性设置
    NSMutableArray *configarray = [NSMutableArray array];
    [typeArray enumerateObjectsUsingBlock:^(id   obj, NSUInteger idx, BOOL * _Nonnull stop) {
        NSMutableArray *modelarray = [NSMutableArray array];
        if ([obj isKindOfClass:[NSArray class]]) {
            [obj enumerateObjectsUsingBlock:^(id  _Nonnull arrayobj, NSUInteger idx, BOOL * _Nonnull stop) {
                QWeatherConfigModel *model = [QWeatherConfigModel new];
                if (idx==0&&[arrayobj integerValue]==QWeatherConfigModelTypeTemp&&[obj count]==1) {
                    model.textFont = [UIFont systemFontOfSize:40];
                }
                if (idx==0&&[arrayobj integerValue]==QWeatherConfigModelTypeWeatherStateIcon&&[obj count]==1) {
                    model.iconSize = 32;
                }
                model.type = [arrayobj integerValue];
                model.padding =UIEdgeInsetsMake(8, 4, 8, 4);
                [modelarray addObject:model];
            }];
            [configarray addObject:modelarray];
        }else{
            QWeatherConfigModel *model = [QWeatherConfigModel new];
            model.type = [obj integerValue];
            model.padding =UIEdgeInsetsMake(8, 4, 8, 4);
            [configarray addObject:model];
        }
    }];
    view.configArray = configarray;
    view.contentViewAlignmen = QWeatherContentViewAlignmentCenter;
    //    view.themType = QWeatherPluginViewThemeTypeAuto;
    view.padding = UIEdgeInsetsZero;
    //    view.backgroundColor = QWeatherColorFromRGB(0xFAFAFA);
    view.backgroundImageTitle = @"";
    view.borderColor = [UIColor greenColor];
    view.borderWidth =2;
    view.cornerRadius = 2;
    view.isShowBorder = NO;
    view.isShowConer = NO;
    //拖拽设置
    view.dragEnable = YES;
    view.freeRect = self.view.frame;
    view.dragDirection = QWeatherPluginViewDragDirectionAny;
    view.isKeepBounds = NO;
    //导航栏设置
    //    view.navigationBarBackgroundColor = [UIColor redColor];
    //    view.progressColor = [UIColor blueColor];
    view.navBarBackImage = [UIImage imageNamed:@""];
    view.navBarCloseImage = [UIImage imageNamed:@""];
    [self.view addSubview:view];
    
}

```


## 属性方法参照

### 类初始化方法

```objc
/**
@param frame 视图frame
@param type 浮窗样式枚举
@param userKey 用户key 必填
@param location 城市或地区，可输入以下值：
1. 城市ID：城市列表
2. 经纬度格式：经度,纬度（经度在前纬度在后，英文,分隔，十进制格式，北纬东经为正，南纬西经为负
3. 城市名称，支持中英文和汉语拼音
4. 城市名称，上级城市 或 省 或 国家，英文,分隔，此方式可以在重名的情况下只获取想要的地区的天气数据，例如 西安,陕西
5. IP
6. 根据请求自动判断，根据用户的请求获取IP，通过 IP 定位并获取城市数据
7. 可为空，系统自动获取当前设备所在经纬度，然后将获取到的经纬度作为location参数调用传location的接口
@return QWeatherPluginView 插件视图
*/
+(instancetype)initWithFrame:(CGRect)frame ViewType:(QWeatherPluginViewType)type UserKey:(NSString *)userKey Location:(NSString *)location;

/**
@param frame 视图frame
@param type 浮窗样式枚举
@param userKey 用户key 必填
@param location 城市或地区，可输入以下值：
1. 城市ID：城市列表
2. 经纬度格式：经度,纬度（经度在前纬度在后，英文,分隔，十进制格式，北纬东经为正，南纬西经为负
3. 可为空，系统自动获取当前设备所在经纬度，然后将获取到的经纬度作为location参数调用传location的接口
@return QWeatherPluginView 插件视图
*/
-(instancetype)initWithFrame:(CGRect)frame ViewType:(QWeatherPluginViewType)type UserKey:(NSString *)userKey Location:(NSString *)location;
```

### QWeatherPluginViewType

| 枚举                           | 布局样式                    |     |
| ------------------------------ | --------------------------- | --- |
| QWeatherPluginViewTypeHorizontal | 横向水平                    |     |
| QWeatherPluginViewTypeLeftLarge  | 横向三块布局 单独大布局在左 |     |
| QWeatherPluginViewTypeRightLarge | 横向三块布局 单独大布局在右 |     |
| QWeatherPluginViewTypeVertical   | 垂直布局                    |     |

### location说明

{{ site.data.p.location[page.lang] }}

### 属性介绍

| 属性                         | 说明                                                                                                                                                                                                                      | 类型                                                                        | 默认                                                                  |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| [configArray](#configarray)  | 视图属性配置数组                                                                                                                                                                                                          | NSArray                                                                     |                                                                       |
| contentViewAlignmen          | 内容水平方向显示对齐方式                                                                                                                                                                                                  | [QWeatherContentViewAlignment](#qweathercontentviewalignment)（枚举类型）       | QWeatherContentViewAlignmentCenter                                      |
| themType                     | 主题样式                                                                                                                                                                                                                  | [QWeatherPluginViewThemeType](#qweatherpluginviewthemetype)（枚举类型）         | 无 背景颜色透明                                                       |
| padding                      | QWeatherPluginView的内边距                                                                                                                                                                                                  | UIEdgeInsets                                                                | UIEdgeInsetsZero                                                      |
| backgroundColor              | 视图背景颜色                                                                                                                                                                                                              | UIColor                                                                     | [UIColor clearColor]                                                  |
| backgroundImageTitle         | 自定义视图背景图片标题:当themType的值为QWeatherPluginViewThemeTypeAuto时设置有效,图片命名规则为白天xxx_code_d，夜晚xxx_code_n 其中code参看和[风天气状况代码]({% if page.lang == " en" %}/en{% endif %}/docs/resource/icons/) 传入xxx前缀即可 |                                                                             |                                                                       |
|                              | NSString                                                                                                                                                                                                                  | 无                                                                          |                                                                       |
| borderColor                  | 边框颜色                                                                                                                                                                                                                  | UIColor                                                                     | #F5F5F5                                                               |
| borderWidth                  | 边框宽度                                                                                                                                                                                                                  | CGFloat                                                                     | 2.0                                                                   |
| cornerRadius                 | 圆角                                                                                                                                                                                                                      | CGFloat                                                                     | 4.0                                                                   |
| isShowBorder                 | 是否显示边框                                                                                                                                                                                                              | BOOL                                                                        | YES                                                                   |
| isShowConer                  | 是否显示圆角                                                                                                                                                                                                              | BOOL                                                                        | YES                                                                   |
| dragEnable                   | 是不是能拖曳                                                                                                                                                                                                              | BOOL                                                                        | NO                                                                    |
| freeRect                     | 拖拽范围                                                                                                                                                                                                                  | CGRect                                                                      | 无                                                                    |
| dragDirection                | 拖拽的方向                                                                                                                                                                                                                | [qweatherpluginviewrragrirection](#QWeatherpluginviewdragdirection)（枚举类型） | QWeatherPluginViewDragDirectionAny                                      |
| isKeepBounds                 | 黏贴边界效果                                                                                                                                                                                                              | BOOL                                                                        | NO                                                                    |
| navigationBarBackgroundColor | 导航条背景颜色                                                                                                                                                                                                            | UIColor                                                                     | [UIColor colorWithRed:6.0/225 green:79.0/225 blue:171.0/225 alpha:1]] |
| progressColor                | 进度条颜色                                                                                                                                                                                                                | UIColor                                                                     | [UIColor greenColor]                                                  |
| navBarBackImage              | 导航栏返回按钮                                                                                                                                                                                                            | UIImage                                                                     | 使用自带图片                                                          |
| navBarCloseImage             | 导航栏关闭图片                                                                                                                                                                                                            | UIImage                                                                     | 使用自带图片                                                          |
| loadCompleted                | 加载完数据后的回调返回视图自适应size                                                                                                                                                                                      | QWeatherPluginViewLoadCompleted                                               | 无                                                                    |



#### configArray

- 此数组用于配置插件内部视图属性如字体，字色等，数组内部可装QWeatherConfigModel，也可以嵌套QWeatherConfigModel数组用于多个子布局视图的情况。数组添加的顺序决定了控件摆放的顺序。
- 当视图类型为QWeatherPluginViewTypeLeftLarge时，configArray[0]内元素会被放在左边大布局上, configArray[1]内元素会被放在右边上部分布局上, configArray[2]内元素会被放在右边下部分布局上
- 当视图类型为QWeatherPluginViewTypeRightLarge时，configArray[0]内元素会被放在右边大布局上, configArray[1]内元素会被放在左边上部分布局上, configArray[2]内元素会被放在左边下部分布局上
- 以下是对QWeatherConfigModel各个属性的说明。

| 属性                | 说明                                                                                                                                                                                                                                                                                                                                                                                               | 类型                                            | 默认                          |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- | ----------------------------- |
| textFont            | 文字大小,设置范围6-36                                                                                                                                                                                                                                                                                                                                                                              | UIFont                                          | 12                            |
| textAlignment       | 文字对齐样式                                                                                                                                                                                                                                                                                                                                                                                       | NSTextAlignment                                 | NSTextAlignmentCenter         |
| textColor           | 文字颜色                                                                                                                                                                                                                                                                                                                                                                                           | UIColor                                         | #4a4a4a                       |
| airTextColorArray   | 空气质量颜色数组只对 QWeatherConfigModelTypeQlty QWeatherConfigModelTypeAqi类型有效 数组按顺序存放颜色，对应的顺序为优、良、轻度、中度、重度、严重， 六个等级都要设置才有效否则使用默认                                                                                                                                                                                                                | NSArray< UIColor*>                              | 自带颜色数组                  |
| alarmTextColorArray | 预警文字颜色数组只对 QWeatherConfigModelTypeAlarm类型有效 数组按顺序存放颜色，对应的顺序为白色、蓝色、黄色、橙色、红色， 五个等级都要设置才有效否则使用默认                                                                                                                                                                                                                                          | NSArray< UIColor*>                              | 自带颜色数组                  |
| iconSize            | 天气状况图片大小，可调范围6-32                                                                                                                                                                                                                                                                                                                                                                     | CGFloat                                         | 12                            |
| iconImageTitle      | 自定义图标名:1.自定义天气状况图标名：图片命名规则为白天xxx_code_d，夜晚xxx_code_n 其中code参看[风天气状况代码](/docs/resource/icons/) 传入xxx前缀即可 2.自定义湿度图片:直接使用图片名 3.自定义风向图片:图片命名规范为xxx_wind_nodirection(无持续风向图标)，xxx_wind_rotate(旋转风图标)，xxx_wind_normal(普通风向图标，图片指向北方即可，内部做了旋转处理)，传入前缀xxx即可 | NSString                                        | 无，使用默认图片              |
| type                | 配置样式的控件类型                                                                                                                                                                                                                                                                                                                                                                                 | [QWeatherConfigModelType](#qweatherconfigmodeltype) | QWeatherConfigModelTypeLocation |
| padding             | 子视图与父视图和其他子视图的边距、间距,遵从线性布局 比如横向布局第二个控件距离第一个控件的间距为第二个控件的padding.left，第一个控件的padding.right无效。纵向布局则第二个控件间距第一个控件的底部距离为第二个控件的padding.top，第一个控件的padding.bottom无效                                                                                                                                     | UIEdgeInsets                                    | UIEdgeInsetsMake(2, 5, 2, 5)  |

#### QWeatherConfigModelType

| 枚举                                  | 说明                  |     |
| ------------------------------------- | --------------------- | --- |
| QWeatherConfigModelTypeLocation         | 所在城市名称          |     |
| QWeatherConfigModelTypeTemp             | 温度                  |     |
| QWeatherConfigModelTypeWeatherState     | 天气状况文字          |     |
| QWeatherConfigModelTypeWeatherStateIcon | 天气状况图标          |     |
| QWeatherConfigModelTypeWindSC           | 风力                  |     |
| QWeatherConfigModelTypeWindDirIcon      | 风向图标              |     |
| QWeatherConfigModelTypeAlarmIcon        | 灾害预警图标          |     |
| QWeatherConfigModelTypeAlarm            | 灾害预警              |     |
| QWeatherConfigModelTypePcpnIcon         | 分钟降雨图标          |     |
| QWeatherConfigModelTypePcpn             | 分钟降雨              |     |
| QWeatherConfigModelTypeAqiTitle         | 空气质量文字标题：AQI |     |
| QWeatherConfigModelTypeQlty             | 空气质量等级          |     |
| QWeatherConfigModelTypeAqi              | 空气质量              |     |

#### QWeatherContentViewAlignment

| 枚举                             | 插件内容水平方向显示对齐方式 |
| -------------------------------- | ---------------------------- |
| QWeatherContentViewAlignmentCenter | 内容居中                     |
| QWeatherContentViewAlignmentTop    | 内容居上                     |
| QWeatherContentViewAlignmentLeft   | 内容居左                     |
| QWeatherContentViewAlignmentDown   | 内容居下                     |
| QWeatherContentViewAlignmentRight  | 内容居右                     |

#### QWeatherPluginViewThemeType

| 枚举                          | 图标颜色样式 |
| ----------------------------- | ------------ |
| QWeatherPluginViewThemeTypeAuto | 随天气变化   |
| QWeatherPluginViewIconTypeLight | 亮色系       |
| QWeatherPluginViewIconTypeDark  | 暗色系       |

#### QWeatherPluginViewDragDirection

| 枚举                                    | 可拖拽方向 |
| --------------------------------------- | ---------- |
| QWeatherPluginViewDragDirectionAny        | 任意方向   |
| QWeatherPluginViewDragDirectionHorizontal | 水平方向   |
| QWeatherPluginViewDragDirectionVertical   | 垂直方向   |




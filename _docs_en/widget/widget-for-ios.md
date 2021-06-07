---
title: Widget for iOS
version: 1.0
tag: widget
description: QWeather Widget iOS SDK makes it simple to embed weather content into your android APP, supporting various layouts and styles.
ref: 4-widget-ios
---

## Download

See [Create Widget SDK]({{ site.exturl.widget }}{% if page.lang == "en" %}/en{% endif %}/create-sdk/) to download the latest version.

## OS Requirements

iOS 9.0+

## Configuration

**Manual installation**

1. Drag **QWeather_Plugin.frameWork** into the project
2. Add **Allow Arbitrary Loads** element to info.plist and set it to **YES**
3. This project depends on **SDWebImage** and **Masonry**, please make sure these two libraries have been installed in your project
4. SDK needs to enable location permission, please add `NSLocationAlwaysAndWhenInUseUsageDescription` and `NSLocationWhenInUseUsageDescription` to the project plist.info file

## Instructions

Introduce the header file in the required location

```objective-c
#import <QWeather_Plugin/QWeather_Plugin.h>
```

### Horizontal layout

![sample](/assets/images/content/wd-sample-h.png)

```objc
//Display horizontal single row
-(void)setQWeatherPluginViewTypeHorizontal{
    NSArray *typeArray = @[@(QWeatherConfigModelTypeLocation),
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
    //Initialize the view
    QWeatherPluginView *view = [[QWeatherPluginView alloc] initWithFrame:CGRectMake(0, [[UIApplication sharedApplication] statusBarFrame].size.height + 44.f, self.view.frame.size.width, 20) ViewType:QWeatherPluginViewTypeHorizontal UserKey:@" User key" Location:@"北京"];
    
    //View attribute settings
    NSMutableArray *configarray = [NSMutableArray array];
    [typeArray enumerateObjectsUsingBlock:^(id obj, NSUInteger idx, BOOL * _Nonnull stop) {
        NSMutableArray *modelarray = [NSMutableArray array];
        if ([obj isKindOfClass:[NSArray class]]) {
            [obj enumerateObjectsUsingBlock:^(id _Nonnull arrayobj, NSUInteger idx, BOOL * _Nonnull stop) {
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
    // view.themType = QWeatherPluginViewThemeTypeAuto;
    view.padding = UIEdgeInsetsZero;
    view.backgroundImageTitle = @"";
    view.borderColor = [UIColor greenColor];
    view.borderWidth = 2;
    view.cornerRadius = 2;
    view.isShowBorder = NO;
    view.isShowConer = NO;
    //Drag and drop settings
    view.dragEnable = YES;
    view.freeRect = self.view.frame;
    view.dragDirection = QWeatherPluginViewDragDirectionAny;
    view.isKeepBounds = NO;
    //Navigation bar settings
    // view.navigationBarBackgroundColor = [UIColor redColor];
    // view.progressColor = [UIColor blueColor];
    view.navBarBackImage = [UIImage imageNamed:@""];
    view.navBarCloseImage = [UIImage imageNamed:@""];
    [self.view addSubview:view];
}
```
### Horizontal layout - 12

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
                             @(QWeatherConfigModelTypePcpnI
con),
                             @(QWeatherConfigModelTypePcpn)]];
    //Initialize the view
    QWeatherPluginView *view = [[QWeatherPluginView alloc] initWithFrame:CGRectMake(0, 200, self.view.frame.size.width, 40) ViewType:QWeatherPluginViewTypeLeftLarge UserKey:@"Userkey" Location:@"北京"];
    
    //View attribute settings
    NSMutableArray *configarray = [NSMutableArray array];
    [typeArray enumerateObjectsUsingBlock:^(id obj, NSUInteger idx, BOOL * _Nonnull stop) {
        NSMutableArray *modelarray = [NSMutableArray array];
        if ([obj isKindOfClass:[NSArray class]]) {
            [obj enumerateObjectsUsingBlock:^(id _Nonnull arrayobj, NSUInteger idx, BOOL * _Nonnull stop) {
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
    view.borderWidth = 2;
    view.cornerRadius = 4;
    view.isShowBorder = NO;
    view.isShowConer = YES;
    //Drag and drop settings
    view.dragEnable = YES;
    view.freeRect = self.view.frame;
    view.dragDirection = QWeatherPluginViewDragDirectionAny;
    view.isKeepBounds = NO;
    //Navigation bar settings
    // view.navigationBarBackgroundColor = [UIColor redColor];
    // view.progressColor = [UIColor blueColor];
    view.navBarBackImage = [UIImage imageNamed:@""];
    view.navBarCloseImage = [UIImage imageNamed:@""];
    [self.view addSubview:view];
}
```
### Horizontal layout - 21

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
    //Initialize the view
    QWeatherPluginView *view = [[QWeatherPluginView alloc] initWithFrame:CGRectMake(0, 320, self.view.frame.size.width, 40) ViewType:QWeatherPluginViewTypeRightLarge UserKey:@"Userkey" Location:@"北京"];
    
    //View attribute settings
    NSMutableArray *configarray = [NSMutableArray array];
    [typeArray enumerateObjectsUsingBlock:^(id obj, NSUInteger idx, BOOL * _Nonnull stop) {
        NSMutableArray *modelarray = [NSMutableArray array];
        if ([obj isKindOfClass:[NSArray class]]) {
            [obj enumerateObjectsUsingBlock:^(id _Nonnull arrayobj, NSUInteger idx, BOOL * _Nonnull stop) {
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
            QWeatherConfigMode
l *model = [QWeatherConfigModel new];
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
    view.borderWidth = 2;
    view.cornerRadius = 4;
    view.isShowBorder = NO;
    view.isShowConer = YES;
    //Drag and drop settings
    view.dragEnable = YES;
    view.freeRect = self.view.frame;
    view.dragDirection = QWeatherPluginViewDragDirectionAny;
    view.isKeepBounds = NO;
    //Navigation bar settings
    // view.navigationBarBackgroundColor = [UIColor redColor];
    // view.progressColor = [UIColor blueColor];
    view.navBarBackImage = [UIImage imageNamed:@""];
    view.navBarCloseImage = [UIImage imageNamed:@""];
    [self.view addSubview:view];
}
```
### Vertical layout

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
    //Initialize the view
    QWeatherPluginView *view = [[QWeatherPluginView alloc] initWithFrame:CGRectMake(0, 420, 50, 300) ViewType:QWeatherPluginViewTypeVertical UserKey:@"Userkey" Location:@"武汉"];
    
    //View attribute settings
    NSMutableArray *configarray = [NSMutableArray array];
    [typeArray enumerateObjectsUsingBlock:^(id obj, NSUInteger idx, BOOL * _Nonnull stop) {
        NSMutableArray *modelarray = [NSMutableArray array];
        if ([obj isKindOfClass:[NSArray class]]) {
            [obj enumerateObjectsUsingBlock:^(id _Nonnull arrayobj, NSUInteger idx, BOOL * _Nonnull stop) {
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
    // view.themType = QWeatherPluginViewThemeTypeAuto;
    view.padding = UIEdgeInsetsZero;
    // view.backgroundColor = QWeatherColorFromRGB(0xFAFAFA);
    view.backgroundImageTitle = @"";
    view.borderColor = [UIColor greenColor];
    view.borderWidth = 2;
    view.cornerRadius = 2;
    view.isShowBorder = NO;
    view.isShowConer = NO;
    //Drag and drop settings
    view.dragEnable = YES;
    view.freeRect = self.view.frame;
    view.dragDirection = QWeatherPluginViewDragDirectionAny;
    view.isKeepBounds = NO;
    //Navigation bar settings
    // view.navigationBarBackgroundColor = [UIColor redColor];
    // view.progressColor = [UIColor blueColor];
    view.navBarBackImage = [UIImage imageNamed:@""];
    view.navBarCloseImage = [UIImage imageNamed:@""];
    [self.view addSubview:view];
    
}

```


## Attribute

### Class initialization

```objc
/**
@param frame: view frame
@param type: floating window style enumeration
@param userKey: User key is required
@param location: City or region, using Location ID, city name, and comma-separated longitude and latitude, ADCode (Chinese cities only). Leave blank to use system positioning.
@return QWeatherPluginView: Widget view
*/
+(instancetype)initWithFrame:(CGRect)frame ViewType:(QWeatherPluginViewType)type UserKey:(NSSt
ring *)userKey Location:(NSString *)location;

-(instancetype)initWithFrame:(CGRect)frame ViewType:(QWeatherPluginViewType)type UserKey:(NSString *)userKey Location:(NSString *)location;
```

### QWeatherPluginViewType

| Enumeration | Layout style | 
| ------------------------------ | -------- | 
| QWeatherPluginViewTypeHorizontal | Horizontal |
| QWeatherPluginViewTypeLeftLarge | Horizontal - 12 | 
| QWeatherPluginViewTypeRightLarge | Horizontal - 21 | 
| QWeatherPluginViewTypeVertical | Vertical | 

### Location

{{ site.data.p.location[page.lang] }}

### Properties

| Property | Description | Type | Default |
| ---------------------------- | ---------------------------------------- | ------------ | ------------------------------- |
| [configArray](#configarray) | View attribute configuration array | NSArray | |
| contentViewAlignmen | Horizontal content display alignment | [QWeatherContentViewAlignment](#qweathercontentviewalignment) (enumeration type) | QWeatherContentViewAlignmentCenter |
| themType | Theme style | [QWeatherPluginViewThemeType](#qweatherpluginviewthemetype) (enumeration type) | No background color transparent |
| padding | QWeatherPluginView's inner margin | UIEdgeInsets | UIEdgeInsetsZero |
| backgroundColor | View background color | UIColor | [UIColor clearColor]
|
| backgroundImageTitle | Custom view background image title: set effective when the value of theirType is QWeatherPluginViewThemeTypeAuto, the image naming rule is xxx_code_d during the day and xxx_code_n at night where the code is referenced [Qweather icon code](/en/docs/start/icons/) is passed in xxx Just prefix | | |
| | NSString | None | |
| borderColor | Border color | UIColor | #F5F5F5 |
| borderWidth | Border width | CGFloat | 2.0 |
| cornerRadius | Fillet | CGFloat | 4.0 |
| isShowBorder | Whether to show the border | BOOL | YES |
| isShowConer | Whether to show rounded corners | BOOL | YES |
| dragEnable | Can it be dragged | BOOL | NO |
| freeRect | Drag range | CGRect | None |
| dragDirection | Drag direction | [QWeatherPluginViewDragDirection](#QWeatherpluginviewdragdirection) (enumeration type) | QWeatherPluginViewDragDirectionAny |
| isKeepBounds | Paste border effect | BOOL | NO |
| navigationBarBackgroundColor | Navigation bar background color | UIColor | [UIColor colorWithRed:6.0/225 green:79.0/225 blue:171.0/225 alpha:1]] |
| progressColor | progress bar color
| UIColor | [UIColor greenColor] |
| navBarBackImage | Navigation bar back button | UIImage | Use own image |
| navBarCloseImage | Navigation bar close image | UIImage | Use own image |
| loadCompleted | The callback after loading the data returns the view adaptive size | QWeatherPluginViewLoadCompleted | None |



#### configArray

- This array is used to configure the internal view properties of the plug-in, such as font, font color, etc. The QWeatherConfigModel can be installed in the array, or the QWeatherConfigModel array can be nested for multiple sub-layout views. The order in which the array is added determines the order in which the controls are placed.
- When the view type is QWeatherPluginViewTypeLeftLarge, the elements in configArray[0] will be placed on the left large layout, the elements in configArray[1] will be placed on the upper right layout, and the elements in configArray[2] will be placed on the right The lower part of the layout
- When the view type is QWeatherPluginViewTypeRightLarge, the elements in configArray[0] will be placed on the large layout on the right, the elements in configArray[1] will be placed on the upper left layout, and the elements in configArray[2] will be placed on the left The lower part of the layout
- The following is the description of each attribute of QWeatherConfigModel.

| Property | Description | Type | Default |
| ------------------- | -------------------------------------- | ----------------- | ----------------------------- |
| textFont | Text size, setting range 6-36 | UIFont | 12 |
| textAlignment | Text alignment style | NSTextAlignment | NSTextAlignmentCenter |
| textColor | Text Color | UIColor | #4a4a4a |
| airTextColorArray | The air quality color array is only valid for the QWeatherConfigModelTypeQlty QWeatherConfigModelTypeAqi type. The array stores the colors in order, the corresponding order is excellent, good, mild, moderate, severe, severe, all six levels must be set to be effective, otherwise use the default | NSArray <UIColor*> | Built-in color array |
| alarmTextColorArray | The alarm text color array is only valid for the QWeatherConfigModelTypeAlarm type. The array stores the colors in order, and the corresponding order is white, blue, yellow, orange, red. All five levels must be set to be effective, otherwise the default
| NSArray< UIColor*> | Built-in color array |
| iconSize | Weather condition picture size, adjustable range 6-32 | CGFloat | 12 |
| iconImageTitle | Custom icon name: 1. Custom weather condition icon name: The picture naming rule is xxx_code_d during the day and xxx_code_n at night, where the code is [QWeather icon code](/en/docs/start/icons/) and the xxx prefix can be input 2 .Customized humidity picture: use the picture name directly 3. Customize the wind direction picture: the picture naming convention is xxx_wind_nodirection (no continuous wind direction icon), xxx_wind_rotate (rotating wind icon), xxx_wind_normal (normal wind direction icon, the picture points to the north, just do it internally Rotation processing), just pass in the prefix xxx | NSString | None, use the default image |
| type | Configuration style control type | [QWeatherConfigModelType](#qweatherconfigmodeltype) | QWeatherConfigModelTypeLocation |
| padding | The margins and spacing between the subview and the parent view and other subviews follow the linear layout. For example, the spacing between the second control and the first control in the horizontal layout is the padding.left of the second control and the padding.left of the first control. padding.right is invalid. For vertical layout, the distance between the second control and the bottom of the first control is the padding.top of the second control, and the padding.bottom of the first control is invalid | UIEdgeInsets | UIEdgeInsetsMake(2, 5, 2, 5) |

#### QWeatherConfigModelType

| Enumeration | Description | 
| ------------------------------------- | ---------- |
| QWeatherConfigModelTypeLocation | City name | 
| QWeatherConfigModelTypeTemp | Temperature | 
| QWeatherConfigModelTypeWeatherState | Weather condition text | 
| QWeatherConfigModelTypeWeatherStateIcon | Weather Condition Icon | 
| QWeatherConfigModelTypeWindSC | Wind | 
| QWeatherConfigModelTypeWindDirIcon | Wind direction icon | 
| QWeatherConfigModelTypeAlarmIcon | Disaster warning icon | 
| QWeatherConfigModelTypeAlarm | Disaster Warning | 
| QWeatherConfigModelTypePcpnIcon | Minute Rain Icon | 
| QWeatherConfigModelTypePcpn | minutes of rain | 
| QWeatherConfigModelTypeAqiTitle | Air Quality Text Title: AQI | 
| QWeatherConfigModelTypeQlty | Air Quality Level | 
| QWeatherConfigModelTypeAqi | Air Quality | 

#### QWeatherContentViewAlignment

| Enumeration | Horizontal display alignment of plug-in content |
| -------------------------------- | ----------------- |
| QWeatherContentViewAlignmentCenter | Content Center |
| QWeatherContentViewAlignmentTop | Content Top |
| QWeatherContentViewAlignmentLeft | Content is to the left |
| QWeatherContentViewAlignmentDown | Content AlignmentDown |
| QWeatherContentViewAlignmentRight | Content is right |

#### QWeatherPluginViewThemeType

| Enumeration | Icon Color Style |
| ----------------------------- | ------------ |
| QWeatherPluginViewThemeTypeAuto | Changes with the weather |
| QWeatherPluginViewIconTypeLight | Bright Color |
| QWeatherPluginViewIconTypeDark | Dark Color |

#### QWeatherPluginViewDragDirection

| Enumeration | Draggable Direction |
| --------------------------------------- | --------- |
| QWeatherPluginViewDragDirectionAny | Any direction |
| QWeatherPluginViewDragDirectionHorizontal | Horizontal Direction |
| QWeatherPluginViewDragDirectionVertical | Vertical Direction |
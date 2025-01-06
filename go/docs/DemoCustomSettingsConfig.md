# DemoCustomSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CustomTemplate** | Pointer to **string** | A custom template using the functions we provide to generate demo data | [optional] 
**Rate** | Pointer to **int32** | The rate at which to generate records (between 1 and 1000) per second | [optional] 

## Methods

### NewDemoCustomSettingsConfig

`func NewDemoCustomSettingsConfig() *DemoCustomSettingsConfig`

NewDemoCustomSettingsConfig instantiates a new DemoCustomSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDemoCustomSettingsConfigWithDefaults

`func NewDemoCustomSettingsConfigWithDefaults() *DemoCustomSettingsConfig`

NewDemoCustomSettingsConfigWithDefaults instantiates a new DemoCustomSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCustomTemplate

`func (o *DemoCustomSettingsConfig) GetCustomTemplate() string`

GetCustomTemplate returns the CustomTemplate field if non-nil, zero value otherwise.

### GetCustomTemplateOk

`func (o *DemoCustomSettingsConfig) GetCustomTemplateOk() (*string, bool)`

GetCustomTemplateOk returns a tuple with the CustomTemplate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomTemplate

`func (o *DemoCustomSettingsConfig) SetCustomTemplate(v string)`

SetCustomTemplate sets CustomTemplate field to given value.

### HasCustomTemplate

`func (o *DemoCustomSettingsConfig) HasCustomTemplate() bool`

HasCustomTemplate returns a boolean if a field has been set.

### GetRate

`func (o *DemoCustomSettingsConfig) GetRate() int32`

GetRate returns the Rate field if non-nil, zero value otherwise.

### GetRateOk

`func (o *DemoCustomSettingsConfig) GetRateOk() (*int32, bool)`

GetRateOk returns a tuple with the Rate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRate

`func (o *DemoCustomSettingsConfig) SetRate(v int32)`

SetRate sets Rate field to given value.

### HasRate

`func (o *DemoCustomSettingsConfig) HasRate() bool`

HasRate returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



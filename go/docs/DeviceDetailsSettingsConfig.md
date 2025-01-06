# DeviceDetailsSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CloudType** | Pointer to **string** | Your cloud type for CrowdStrike. Ex: &#39;autodiscover&#39;, &#39;us-1&#39;, &#39;us-2&#39;, &#39;eu-1&#39;, &#39;us-gov-1&#39;. | [optional] 
**Cron** | Pointer to **string** | Cron string for scheduling the ingest of your input | [optional] 

## Methods

### NewDeviceDetailsSettingsConfig

`func NewDeviceDetailsSettingsConfig() *DeviceDetailsSettingsConfig`

NewDeviceDetailsSettingsConfig instantiates a new DeviceDetailsSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDeviceDetailsSettingsConfigWithDefaults

`func NewDeviceDetailsSettingsConfigWithDefaults() *DeviceDetailsSettingsConfig`

NewDeviceDetailsSettingsConfigWithDefaults instantiates a new DeviceDetailsSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCloudType

`func (o *DeviceDetailsSettingsConfig) GetCloudType() string`

GetCloudType returns the CloudType field if non-nil, zero value otherwise.

### GetCloudTypeOk

`func (o *DeviceDetailsSettingsConfig) GetCloudTypeOk() (*string, bool)`

GetCloudTypeOk returns a tuple with the CloudType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCloudType

`func (o *DeviceDetailsSettingsConfig) SetCloudType(v string)`

SetCloudType sets CloudType field to given value.

### HasCloudType

`func (o *DeviceDetailsSettingsConfig) HasCloudType() bool`

HasCloudType returns a boolean if a field has been set.

### GetCron

`func (o *DeviceDetailsSettingsConfig) GetCron() string`

GetCron returns the Cron field if non-nil, zero value otherwise.

### GetCronOk

`func (o *DeviceDetailsSettingsConfig) GetCronOk() (*string, bool)`

GetCronOk returns a tuple with the Cron field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCron

`func (o *DeviceDetailsSettingsConfig) SetCron(v string)`

SetCron sets Cron field to given value.

### HasCron

`func (o *DeviceDetailsSettingsConfig) HasCron() bool`

HasCron returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



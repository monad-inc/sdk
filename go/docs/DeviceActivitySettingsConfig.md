# DeviceActivitySettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AuthType** | Pointer to **string** | Authentication type (service_account or oauth) | [optional] 
**Email** | Pointer to **string** | Email address to use for authenticating with Google Cloud (required for service_account auth). | [optional] 
**UseSyntheticData** | Pointer to **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Methods

### NewDeviceActivitySettingsConfig

`func NewDeviceActivitySettingsConfig() *DeviceActivitySettingsConfig`

NewDeviceActivitySettingsConfig instantiates a new DeviceActivitySettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDeviceActivitySettingsConfigWithDefaults

`func NewDeviceActivitySettingsConfigWithDefaults() *DeviceActivitySettingsConfig`

NewDeviceActivitySettingsConfigWithDefaults instantiates a new DeviceActivitySettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAuthType

`func (o *DeviceActivitySettingsConfig) GetAuthType() string`

GetAuthType returns the AuthType field if non-nil, zero value otherwise.

### GetAuthTypeOk

`func (o *DeviceActivitySettingsConfig) GetAuthTypeOk() (*string, bool)`

GetAuthTypeOk returns a tuple with the AuthType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthType

`func (o *DeviceActivitySettingsConfig) SetAuthType(v string)`

SetAuthType sets AuthType field to given value.

### HasAuthType

`func (o *DeviceActivitySettingsConfig) HasAuthType() bool`

HasAuthType returns a boolean if a field has been set.

### GetEmail

`func (o *DeviceActivitySettingsConfig) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *DeviceActivitySettingsConfig) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *DeviceActivitySettingsConfig) SetEmail(v string)`

SetEmail sets Email field to given value.

### HasEmail

`func (o *DeviceActivitySettingsConfig) HasEmail() bool`

HasEmail returns a boolean if a field has been set.

### GetUseSyntheticData

`func (o *DeviceActivitySettingsConfig) GetUseSyntheticData() bool`

GetUseSyntheticData returns the UseSyntheticData field if non-nil, zero value otherwise.

### GetUseSyntheticDataOk

`func (o *DeviceActivitySettingsConfig) GetUseSyntheticDataOk() (*bool, bool)`

GetUseSyntheticDataOk returns a tuple with the UseSyntheticData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseSyntheticData

`func (o *DeviceActivitySettingsConfig) SetUseSyntheticData(v bool)`

SetUseSyntheticData sets UseSyntheticData field to given value.

### HasUseSyntheticData

`func (o *DeviceActivitySettingsConfig) HasUseSyntheticData() bool`

HasUseSyntheticData returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



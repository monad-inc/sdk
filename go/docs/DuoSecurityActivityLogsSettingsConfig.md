# DuoSecurityActivityLogsSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Host** | Pointer to **string** | The API hostname for your Duo Security integration. | [optional] 
**UseSyntheticData** | Pointer to **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Methods

### NewDuoSecurityActivityLogsSettingsConfig

`func NewDuoSecurityActivityLogsSettingsConfig() *DuoSecurityActivityLogsSettingsConfig`

NewDuoSecurityActivityLogsSettingsConfig instantiates a new DuoSecurityActivityLogsSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDuoSecurityActivityLogsSettingsConfigWithDefaults

`func NewDuoSecurityActivityLogsSettingsConfigWithDefaults() *DuoSecurityActivityLogsSettingsConfig`

NewDuoSecurityActivityLogsSettingsConfigWithDefaults instantiates a new DuoSecurityActivityLogsSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHost

`func (o *DuoSecurityActivityLogsSettingsConfig) GetHost() string`

GetHost returns the Host field if non-nil, zero value otherwise.

### GetHostOk

`func (o *DuoSecurityActivityLogsSettingsConfig) GetHostOk() (*string, bool)`

GetHostOk returns a tuple with the Host field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHost

`func (o *DuoSecurityActivityLogsSettingsConfig) SetHost(v string)`

SetHost sets Host field to given value.

### HasHost

`func (o *DuoSecurityActivityLogsSettingsConfig) HasHost() bool`

HasHost returns a boolean if a field has been set.

### GetUseSyntheticData

`func (o *DuoSecurityActivityLogsSettingsConfig) GetUseSyntheticData() bool`

GetUseSyntheticData returns the UseSyntheticData field if non-nil, zero value otherwise.

### GetUseSyntheticDataOk

`func (o *DuoSecurityActivityLogsSettingsConfig) GetUseSyntheticDataOk() (*bool, bool)`

GetUseSyntheticDataOk returns a tuple with the UseSyntheticData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseSyntheticData

`func (o *DuoSecurityActivityLogsSettingsConfig) SetUseSyntheticData(v bool)`

SetUseSyntheticData sets UseSyntheticData field to given value.

### HasUseSyntheticData

`func (o *DuoSecurityActivityLogsSettingsConfig) HasUseSyntheticData() bool`

HasUseSyntheticData returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



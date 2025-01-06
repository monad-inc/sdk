# SplunkSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AllowInsecure** | Pointer to **bool** | Whether to allow insecure connections (not recommended for production). | [optional] 
**Port** | Pointer to **string** | The port of the Splunk instance. | [optional] 
**Url** | Pointer to **string** | The URL of the Splunk instance (must start with http or https). | [optional] 

## Methods

### NewSplunkSettingsConfig

`func NewSplunkSettingsConfig() *SplunkSettingsConfig`

NewSplunkSettingsConfig instantiates a new SplunkSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSplunkSettingsConfigWithDefaults

`func NewSplunkSettingsConfigWithDefaults() *SplunkSettingsConfig`

NewSplunkSettingsConfigWithDefaults instantiates a new SplunkSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAllowInsecure

`func (o *SplunkSettingsConfig) GetAllowInsecure() bool`

GetAllowInsecure returns the AllowInsecure field if non-nil, zero value otherwise.

### GetAllowInsecureOk

`func (o *SplunkSettingsConfig) GetAllowInsecureOk() (*bool, bool)`

GetAllowInsecureOk returns a tuple with the AllowInsecure field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowInsecure

`func (o *SplunkSettingsConfig) SetAllowInsecure(v bool)`

SetAllowInsecure sets AllowInsecure field to given value.

### HasAllowInsecure

`func (o *SplunkSettingsConfig) HasAllowInsecure() bool`

HasAllowInsecure returns a boolean if a field has been set.

### GetPort

`func (o *SplunkSettingsConfig) GetPort() string`

GetPort returns the Port field if non-nil, zero value otherwise.

### GetPortOk

`func (o *SplunkSettingsConfig) GetPortOk() (*string, bool)`

GetPortOk returns a tuple with the Port field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPort

`func (o *SplunkSettingsConfig) SetPort(v string)`

SetPort sets Port field to given value.

### HasPort

`func (o *SplunkSettingsConfig) HasPort() bool`

HasPort returns a boolean if a field has been set.

### GetUrl

`func (o *SplunkSettingsConfig) GetUrl() string`

GetUrl returns the Url field if non-nil, zero value otherwise.

### GetUrlOk

`func (o *SplunkSettingsConfig) GetUrlOk() (*string, bool)`

GetUrlOk returns a tuple with the Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrl

`func (o *SplunkSettingsConfig) SetUrl(v string)`

SetUrl sets Url field to given value.

### HasUrl

`func (o *SplunkSettingsConfig) HasUrl() bool`

HasUrl returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



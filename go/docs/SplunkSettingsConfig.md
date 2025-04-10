# SplunkSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AllowInsecure** | Pointer to **bool** | Whether to allow insecure connections (not recommended for production). | [optional] 
**Index** | Pointer to **string** | The index you want to send data to. If left empty, data is sent to the default index associated with the token. If specified, please read our docs for more context on Splunk token &amp; Index scoping. | [optional] 
**Port** | Pointer to **string** | The port of the Splunk instance. | [optional] 
**ToCreate** | Pointer to **bool** | Ensure this is selected if you want Monad to create the index for you. If you are using a pre-existing index, please leave this deselected. Read our docs for more context on Splunk token &amp; Index scoping. | [optional] 
**Url** | Pointer to **string** | The URL of the Splunk instance (must start with http or https). | [optional] 
**Username** | Pointer to **string** | Represents an administrative account to manage indices. Used to create an index, hence can be left empty if default index is to be used. | [optional] 

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

### GetIndex

`func (o *SplunkSettingsConfig) GetIndex() string`

GetIndex returns the Index field if non-nil, zero value otherwise.

### GetIndexOk

`func (o *SplunkSettingsConfig) GetIndexOk() (*string, bool)`

GetIndexOk returns a tuple with the Index field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIndex

`func (o *SplunkSettingsConfig) SetIndex(v string)`

SetIndex sets Index field to given value.

### HasIndex

`func (o *SplunkSettingsConfig) HasIndex() bool`

HasIndex returns a boolean if a field has been set.

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

### GetToCreate

`func (o *SplunkSettingsConfig) GetToCreate() bool`

GetToCreate returns the ToCreate field if non-nil, zero value otherwise.

### GetToCreateOk

`func (o *SplunkSettingsConfig) GetToCreateOk() (*bool, bool)`

GetToCreateOk returns a tuple with the ToCreate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetToCreate

`func (o *SplunkSettingsConfig) SetToCreate(v bool)`

SetToCreate sets ToCreate field to given value.

### HasToCreate

`func (o *SplunkSettingsConfig) HasToCreate() bool`

HasToCreate returns a boolean if a field has been set.

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

### GetUsername

`func (o *SplunkSettingsConfig) GetUsername() string`

GetUsername returns the Username field if non-nil, zero value otherwise.

### GetUsernameOk

`func (o *SplunkSettingsConfig) GetUsernameOk() (*string, bool)`

GetUsernameOk returns a tuple with the Username field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsername

`func (o *SplunkSettingsConfig) SetUsername(v string)`

SetUsername sets Username field to given value.

### HasUsername

`func (o *SplunkSettingsConfig) HasUsername() bool`

HasUsername returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# SplunkSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AllowInsecure** | Pointer to **bool** | Whether to allow insecure connections (not recommended for production). | [optional] 
**Host** | Pointer to **string** | The host set on every event, used as-is. If left empty, the token&#39;s default host applies. | [optional] 
**Index** | Pointer to **string** | The index you want to send data to. If left empty, data is sent to the default index associated with the token. If specified, please read our docs for more context on Splunk token &amp; Index scoping. | [optional] 
**Port** | **string** | The port of the Splunk instance. | 
**Source** | Pointer to **string** | The source set on every event, used as-is. If left empty, the token&#39;s default source applies. | [optional] 
**Sourcetype** | Pointer to **string** | The sourcetype set on every event, used as-is. If left empty, the token&#39;s default sourcetype applies. | [optional] 
**TimestampField** | Pointer to **string** | Optional JSON path to the event timestamp in each record, sent as the event&#39;s time. Records where it is missing, unparseable or out of range are sent without a time, so Splunk uses the time it received them. | [optional] 
**ToCreate** | Pointer to **bool** | Ensure this is selected if you want the connector to create the index for you. If you are using a pre-existing index, please leave this deselected. Read our docs for more context on Splunk token &amp; Index scoping. | [optional] 
**Url** | **string** | The URL of the Splunk instance (must start with http or https). | 
**Username** | Pointer to **string** | Represents an administrative account to manage indices. Used to create an index, hence can be left empty if default index is to be used. | [optional] 

## Methods

### NewSplunkSettingsConfig

`func NewSplunkSettingsConfig(port string, url string, ) *SplunkSettingsConfig`

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

### GetHost

`func (o *SplunkSettingsConfig) GetHost() string`

GetHost returns the Host field if non-nil, zero value otherwise.

### GetHostOk

`func (o *SplunkSettingsConfig) GetHostOk() (*string, bool)`

GetHostOk returns a tuple with the Host field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHost

`func (o *SplunkSettingsConfig) SetHost(v string)`

SetHost sets Host field to given value.

### HasHost

`func (o *SplunkSettingsConfig) HasHost() bool`

HasHost returns a boolean if a field has been set.

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


### GetSource

`func (o *SplunkSettingsConfig) GetSource() string`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *SplunkSettingsConfig) GetSourceOk() (*string, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *SplunkSettingsConfig) SetSource(v string)`

SetSource sets Source field to given value.

### HasSource

`func (o *SplunkSettingsConfig) HasSource() bool`

HasSource returns a boolean if a field has been set.

### GetSourcetype

`func (o *SplunkSettingsConfig) GetSourcetype() string`

GetSourcetype returns the Sourcetype field if non-nil, zero value otherwise.

### GetSourcetypeOk

`func (o *SplunkSettingsConfig) GetSourcetypeOk() (*string, bool)`

GetSourcetypeOk returns a tuple with the Sourcetype field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourcetype

`func (o *SplunkSettingsConfig) SetSourcetype(v string)`

SetSourcetype sets Sourcetype field to given value.

### HasSourcetype

`func (o *SplunkSettingsConfig) HasSourcetype() bool`

HasSourcetype returns a boolean if a field has been set.

### GetTimestampField

`func (o *SplunkSettingsConfig) GetTimestampField() string`

GetTimestampField returns the TimestampField field if non-nil, zero value otherwise.

### GetTimestampFieldOk

`func (o *SplunkSettingsConfig) GetTimestampFieldOk() (*string, bool)`

GetTimestampFieldOk returns a tuple with the TimestampField field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimestampField

`func (o *SplunkSettingsConfig) SetTimestampField(v string)`

SetTimestampField sets TimestampField field to given value.

### HasTimestampField

`func (o *SplunkSettingsConfig) HasTimestampField() bool`

HasTimestampField returns a boolean if a field has been set.

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



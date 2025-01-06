# OpensearchSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Index** | Pointer to **string** | The name of the OpenSearch index to use. | [optional] 
**InsecureSkipVerify** | Pointer to **bool** | Whether to skip TLS certificate verification (not recommended for production). | [optional] 
**Url** | Pointer to **string** | The URL of the OpenSearch instance (must start with https). | [optional] 
**Username** | Pointer to **string** | The username for authenticating with OpenSearch. | [optional] 

## Methods

### NewOpensearchSettingsConfig

`func NewOpensearchSettingsConfig() *OpensearchSettingsConfig`

NewOpensearchSettingsConfig instantiates a new OpensearchSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOpensearchSettingsConfigWithDefaults

`func NewOpensearchSettingsConfigWithDefaults() *OpensearchSettingsConfig`

NewOpensearchSettingsConfigWithDefaults instantiates a new OpensearchSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIndex

`func (o *OpensearchSettingsConfig) GetIndex() string`

GetIndex returns the Index field if non-nil, zero value otherwise.

### GetIndexOk

`func (o *OpensearchSettingsConfig) GetIndexOk() (*string, bool)`

GetIndexOk returns a tuple with the Index field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIndex

`func (o *OpensearchSettingsConfig) SetIndex(v string)`

SetIndex sets Index field to given value.

### HasIndex

`func (o *OpensearchSettingsConfig) HasIndex() bool`

HasIndex returns a boolean if a field has been set.

### GetInsecureSkipVerify

`func (o *OpensearchSettingsConfig) GetInsecureSkipVerify() bool`

GetInsecureSkipVerify returns the InsecureSkipVerify field if non-nil, zero value otherwise.

### GetInsecureSkipVerifyOk

`func (o *OpensearchSettingsConfig) GetInsecureSkipVerifyOk() (*bool, bool)`

GetInsecureSkipVerifyOk returns a tuple with the InsecureSkipVerify field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInsecureSkipVerify

`func (o *OpensearchSettingsConfig) SetInsecureSkipVerify(v bool)`

SetInsecureSkipVerify sets InsecureSkipVerify field to given value.

### HasInsecureSkipVerify

`func (o *OpensearchSettingsConfig) HasInsecureSkipVerify() bool`

HasInsecureSkipVerify returns a boolean if a field has been set.

### GetUrl

`func (o *OpensearchSettingsConfig) GetUrl() string`

GetUrl returns the Url field if non-nil, zero value otherwise.

### GetUrlOk

`func (o *OpensearchSettingsConfig) GetUrlOk() (*string, bool)`

GetUrlOk returns a tuple with the Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrl

`func (o *OpensearchSettingsConfig) SetUrl(v string)`

SetUrl sets Url field to given value.

### HasUrl

`func (o *OpensearchSettingsConfig) HasUrl() bool`

HasUrl returns a boolean if a field has been set.

### GetUsername

`func (o *OpensearchSettingsConfig) GetUsername() string`

GetUsername returns the Username field if non-nil, zero value otherwise.

### GetUsernameOk

`func (o *OpensearchSettingsConfig) GetUsernameOk() (*string, bool)`

GetUsernameOk returns a tuple with the Username field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsername

`func (o *OpensearchSettingsConfig) SetUsername(v string)`

SetUsername sets Username field to given value.

### HasUsername

`func (o *OpensearchSettingsConfig) HasUsername() bool`

HasUsername returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



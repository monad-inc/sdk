# WazuhSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AuthMode** | Pointer to **string** | Not exposed in the config meta; present only to reject AWS role auth submitted via the API. | [optional] 
**Index** | **string** | The name of the index to write to. | 
**InsecureSkipVerify** | Pointer to **bool** | Whether to skip TLS certificate verification (not recommended for production). | [optional] 
**Url** | **string** | The URL of the Wazuh indexer API (must start with https). | 
**Username** | **string** | The username for authenticating with the Wazuh indexer. | 

## Methods

### NewWazuhSettingsConfig

`func NewWazuhSettingsConfig(index string, url string, username string, ) *WazuhSettingsConfig`

NewWazuhSettingsConfig instantiates a new WazuhSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWazuhSettingsConfigWithDefaults

`func NewWazuhSettingsConfigWithDefaults() *WazuhSettingsConfig`

NewWazuhSettingsConfigWithDefaults instantiates a new WazuhSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAuthMode

`func (o *WazuhSettingsConfig) GetAuthMode() string`

GetAuthMode returns the AuthMode field if non-nil, zero value otherwise.

### GetAuthModeOk

`func (o *WazuhSettingsConfig) GetAuthModeOk() (*string, bool)`

GetAuthModeOk returns a tuple with the AuthMode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthMode

`func (o *WazuhSettingsConfig) SetAuthMode(v string)`

SetAuthMode sets AuthMode field to given value.

### HasAuthMode

`func (o *WazuhSettingsConfig) HasAuthMode() bool`

HasAuthMode returns a boolean if a field has been set.

### GetIndex

`func (o *WazuhSettingsConfig) GetIndex() string`

GetIndex returns the Index field if non-nil, zero value otherwise.

### GetIndexOk

`func (o *WazuhSettingsConfig) GetIndexOk() (*string, bool)`

GetIndexOk returns a tuple with the Index field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIndex

`func (o *WazuhSettingsConfig) SetIndex(v string)`

SetIndex sets Index field to given value.


### GetInsecureSkipVerify

`func (o *WazuhSettingsConfig) GetInsecureSkipVerify() bool`

GetInsecureSkipVerify returns the InsecureSkipVerify field if non-nil, zero value otherwise.

### GetInsecureSkipVerifyOk

`func (o *WazuhSettingsConfig) GetInsecureSkipVerifyOk() (*bool, bool)`

GetInsecureSkipVerifyOk returns a tuple with the InsecureSkipVerify field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInsecureSkipVerify

`func (o *WazuhSettingsConfig) SetInsecureSkipVerify(v bool)`

SetInsecureSkipVerify sets InsecureSkipVerify field to given value.

### HasInsecureSkipVerify

`func (o *WazuhSettingsConfig) HasInsecureSkipVerify() bool`

HasInsecureSkipVerify returns a boolean if a field has been set.

### GetUrl

`func (o *WazuhSettingsConfig) GetUrl() string`

GetUrl returns the Url field if non-nil, zero value otherwise.

### GetUrlOk

`func (o *WazuhSettingsConfig) GetUrlOk() (*string, bool)`

GetUrlOk returns a tuple with the Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrl

`func (o *WazuhSettingsConfig) SetUrl(v string)`

SetUrl sets Url field to given value.


### GetUsername

`func (o *WazuhSettingsConfig) GetUsername() string`

GetUsername returns the Username field if non-nil, zero value otherwise.

### GetUsernameOk

`func (o *WazuhSettingsConfig) GetUsernameOk() (*string, bool)`

GetUsernameOk returns a tuple with the Username field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsername

`func (o *WazuhSettingsConfig) SetUsername(v string)`

SetUsername sets Username field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



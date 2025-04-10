# SplunkSecretsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Password** | Pointer to [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**Token** | Pointer to [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Methods

### NewSplunkSecretsConfig

`func NewSplunkSecretsConfig() *SplunkSecretsConfig`

NewSplunkSecretsConfig instantiates a new SplunkSecretsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSplunkSecretsConfigWithDefaults

`func NewSplunkSecretsConfigWithDefaults() *SplunkSecretsConfig`

NewSplunkSecretsConfigWithDefaults instantiates a new SplunkSecretsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPassword

`func (o *SplunkSecretsConfig) GetPassword() ModelsSecret`

GetPassword returns the Password field if non-nil, zero value otherwise.

### GetPasswordOk

`func (o *SplunkSecretsConfig) GetPasswordOk() (*ModelsSecret, bool)`

GetPasswordOk returns a tuple with the Password field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPassword

`func (o *SplunkSecretsConfig) SetPassword(v ModelsSecret)`

SetPassword sets Password field to given value.

### HasPassword

`func (o *SplunkSecretsConfig) HasPassword() bool`

HasPassword returns a boolean if a field has been set.

### GetToken

`func (o *SplunkSecretsConfig) GetToken() ModelsSecret`

GetToken returns the Token field if non-nil, zero value otherwise.

### GetTokenOk

`func (o *SplunkSecretsConfig) GetTokenOk() (*ModelsSecret, bool)`

GetTokenOk returns a tuple with the Token field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetToken

`func (o *SplunkSecretsConfig) SetToken(v ModelsSecret)`

SetToken sets Token field to given value.

### HasToken

`func (o *SplunkSecretsConfig) HasToken() bool`

HasToken returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



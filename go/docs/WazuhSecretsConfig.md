# WazuhSecretsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CaCertificate** | Pointer to [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**Password** | [**ModelsSecret**](ModelsSecret.md) |  | 

## Methods

### NewWazuhSecretsConfig

`func NewWazuhSecretsConfig(password ModelsSecret, ) *WazuhSecretsConfig`

NewWazuhSecretsConfig instantiates a new WazuhSecretsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWazuhSecretsConfigWithDefaults

`func NewWazuhSecretsConfigWithDefaults() *WazuhSecretsConfig`

NewWazuhSecretsConfigWithDefaults instantiates a new WazuhSecretsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCaCertificate

`func (o *WazuhSecretsConfig) GetCaCertificate() ModelsSecret`

GetCaCertificate returns the CaCertificate field if non-nil, zero value otherwise.

### GetCaCertificateOk

`func (o *WazuhSecretsConfig) GetCaCertificateOk() (*ModelsSecret, bool)`

GetCaCertificateOk returns a tuple with the CaCertificate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCaCertificate

`func (o *WazuhSecretsConfig) SetCaCertificate(v ModelsSecret)`

SetCaCertificate sets CaCertificate field to given value.

### HasCaCertificate

`func (o *WazuhSecretsConfig) HasCaCertificate() bool`

HasCaCertificate returns a boolean if a field has been set.

### GetPassword

`func (o *WazuhSecretsConfig) GetPassword() ModelsSecret`

GetPassword returns the Password field if non-nil, zero value otherwise.

### GetPasswordOk

`func (o *WazuhSecretsConfig) GetPasswordOk() (*ModelsSecret, bool)`

GetPasswordOk returns a tuple with the Password field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPassword

`func (o *WazuhSecretsConfig) SetPassword(v ModelsSecret)`

SetPassword sets Password field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



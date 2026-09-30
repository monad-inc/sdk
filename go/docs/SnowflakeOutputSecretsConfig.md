# SnowflakeOutputSecretsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Password** | Pointer to [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**PrivateKey** | Pointer to [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Methods

### NewSnowflakeOutputSecretsConfig

`func NewSnowflakeOutputSecretsConfig() *SnowflakeOutputSecretsConfig`

NewSnowflakeOutputSecretsConfig instantiates a new SnowflakeOutputSecretsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSnowflakeOutputSecretsConfigWithDefaults

`func NewSnowflakeOutputSecretsConfigWithDefaults() *SnowflakeOutputSecretsConfig`

NewSnowflakeOutputSecretsConfigWithDefaults instantiates a new SnowflakeOutputSecretsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPassword

`func (o *SnowflakeOutputSecretsConfig) GetPassword() ModelsSecret`

GetPassword returns the Password field if non-nil, zero value otherwise.

### GetPasswordOk

`func (o *SnowflakeOutputSecretsConfig) GetPasswordOk() (*ModelsSecret, bool)`

GetPasswordOk returns a tuple with the Password field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPassword

`func (o *SnowflakeOutputSecretsConfig) SetPassword(v ModelsSecret)`

SetPassword sets Password field to given value.

### HasPassword

`func (o *SnowflakeOutputSecretsConfig) HasPassword() bool`

HasPassword returns a boolean if a field has been set.

### GetPrivateKey

`func (o *SnowflakeOutputSecretsConfig) GetPrivateKey() ModelsSecret`

GetPrivateKey returns the PrivateKey field if non-nil, zero value otherwise.

### GetPrivateKeyOk

`func (o *SnowflakeOutputSecretsConfig) GetPrivateKeyOk() (*ModelsSecret, bool)`

GetPrivateKeyOk returns a tuple with the PrivateKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrivateKey

`func (o *SnowflakeOutputSecretsConfig) SetPrivateKey(v ModelsSecret)`

SetPrivateKey sets PrivateKey field to given value.

### HasPrivateKey

`func (o *SnowflakeOutputSecretsConfig) HasPrivateKey() bool`

HasPrivateKey returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



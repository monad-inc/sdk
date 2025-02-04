# SnowflakeSecretsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Password** | Pointer to [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**PrivateKey** | Pointer to [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Methods

### NewSnowflakeSecretsConfig

`func NewSnowflakeSecretsConfig() *SnowflakeSecretsConfig`

NewSnowflakeSecretsConfig instantiates a new SnowflakeSecretsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSnowflakeSecretsConfigWithDefaults

`func NewSnowflakeSecretsConfigWithDefaults() *SnowflakeSecretsConfig`

NewSnowflakeSecretsConfigWithDefaults instantiates a new SnowflakeSecretsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPassword

`func (o *SnowflakeSecretsConfig) GetPassword() ModelsSecret`

GetPassword returns the Password field if non-nil, zero value otherwise.

### GetPasswordOk

`func (o *SnowflakeSecretsConfig) GetPasswordOk() (*ModelsSecret, bool)`

GetPasswordOk returns a tuple with the Password field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPassword

`func (o *SnowflakeSecretsConfig) SetPassword(v ModelsSecret)`

SetPassword sets Password field to given value.

### HasPassword

`func (o *SnowflakeSecretsConfig) HasPassword() bool`

HasPassword returns a boolean if a field has been set.

### GetPrivateKey

`func (o *SnowflakeSecretsConfig) GetPrivateKey() ModelsSecret`

GetPrivateKey returns the PrivateKey field if non-nil, zero value otherwise.

### GetPrivateKeyOk

`func (o *SnowflakeSecretsConfig) GetPrivateKeyOk() (*ModelsSecret, bool)`

GetPrivateKeyOk returns a tuple with the PrivateKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrivateKey

`func (o *SnowflakeSecretsConfig) SetPrivateKey(v ModelsSecret)`

SetPrivateKey sets PrivateKey field to given value.

### HasPrivateKey

`func (o *SnowflakeSecretsConfig) HasPrivateKey() bool`

HasPrivateKey returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



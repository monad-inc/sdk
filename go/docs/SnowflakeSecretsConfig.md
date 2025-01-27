# SnowflakeSecretsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Password** | Pointer to **string** | The Users password if using password authentication. It is reccomended that you use service account authentication with a private key. | [optional] 
**PrivateKey** | Pointer to **string** | Your private KEY | [optional] 

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

`func (o *SnowflakeSecretsConfig) GetPassword() string`

GetPassword returns the Password field if non-nil, zero value otherwise.

### GetPasswordOk

`func (o *SnowflakeSecretsConfig) GetPasswordOk() (*string, bool)`

GetPasswordOk returns a tuple with the Password field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPassword

`func (o *SnowflakeSecretsConfig) SetPassword(v string)`

SetPassword sets Password field to given value.

### HasPassword

`func (o *SnowflakeSecretsConfig) HasPassword() bool`

HasPassword returns a boolean if a field has been set.

### GetPrivateKey

`func (o *SnowflakeSecretsConfig) GetPrivateKey() string`

GetPrivateKey returns the PrivateKey field if non-nil, zero value otherwise.

### GetPrivateKeyOk

`func (o *SnowflakeSecretsConfig) GetPrivateKeyOk() (*string, bool)`

GetPrivateKeyOk returns a tuple with the PrivateKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrivateKey

`func (o *SnowflakeSecretsConfig) SetPrivateKey(v string)`

SetPrivateKey sets PrivateKey field to given value.

### HasPrivateKey

`func (o *SnowflakeSecretsConfig) HasPrivateKey() bool`

HasPrivateKey returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



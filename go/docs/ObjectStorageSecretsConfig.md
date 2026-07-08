# ObjectStorageSecretsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessKey** | Pointer to [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**SecretKey** | Pointer to [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Methods

### NewObjectStorageSecretsConfig

`func NewObjectStorageSecretsConfig() *ObjectStorageSecretsConfig`

NewObjectStorageSecretsConfig instantiates a new ObjectStorageSecretsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewObjectStorageSecretsConfigWithDefaults

`func NewObjectStorageSecretsConfigWithDefaults() *ObjectStorageSecretsConfig`

NewObjectStorageSecretsConfigWithDefaults instantiates a new ObjectStorageSecretsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccessKey

`func (o *ObjectStorageSecretsConfig) GetAccessKey() ModelsSecret`

GetAccessKey returns the AccessKey field if non-nil, zero value otherwise.

### GetAccessKeyOk

`func (o *ObjectStorageSecretsConfig) GetAccessKeyOk() (*ModelsSecret, bool)`

GetAccessKeyOk returns a tuple with the AccessKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessKey

`func (o *ObjectStorageSecretsConfig) SetAccessKey(v ModelsSecret)`

SetAccessKey sets AccessKey field to given value.

### HasAccessKey

`func (o *ObjectStorageSecretsConfig) HasAccessKey() bool`

HasAccessKey returns a boolean if a field has been set.

### GetSecretKey

`func (o *ObjectStorageSecretsConfig) GetSecretKey() ModelsSecret`

GetSecretKey returns the SecretKey field if non-nil, zero value otherwise.

### GetSecretKeyOk

`func (o *ObjectStorageSecretsConfig) GetSecretKeyOk() (*ModelsSecret, bool)`

GetSecretKeyOk returns a tuple with the SecretKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSecretKey

`func (o *ObjectStorageSecretsConfig) SetSecretKey(v ModelsSecret)`

SetSecretKey sets SecretKey field to given value.

### HasSecretKey

`func (o *ObjectStorageSecretsConfig) HasSecretKey() bool`

HasSecretKey returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



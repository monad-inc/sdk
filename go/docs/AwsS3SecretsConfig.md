# AwsS3SecretsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessKey** | Pointer to [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**SecretKey** | Pointer to [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Methods

### NewAwsS3SecretsConfig

`func NewAwsS3SecretsConfig() *AwsS3SecretsConfig`

NewAwsS3SecretsConfig instantiates a new AwsS3SecretsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAwsS3SecretsConfigWithDefaults

`func NewAwsS3SecretsConfigWithDefaults() *AwsS3SecretsConfig`

NewAwsS3SecretsConfigWithDefaults instantiates a new AwsS3SecretsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccessKey

`func (o *AwsS3SecretsConfig) GetAccessKey() ModelsSecret`

GetAccessKey returns the AccessKey field if non-nil, zero value otherwise.

### GetAccessKeyOk

`func (o *AwsS3SecretsConfig) GetAccessKeyOk() (*ModelsSecret, bool)`

GetAccessKeyOk returns a tuple with the AccessKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessKey

`func (o *AwsS3SecretsConfig) SetAccessKey(v ModelsSecret)`

SetAccessKey sets AccessKey field to given value.

### HasAccessKey

`func (o *AwsS3SecretsConfig) HasAccessKey() bool`

HasAccessKey returns a boolean if a field has been set.

### GetSecretKey

`func (o *AwsS3SecretsConfig) GetSecretKey() ModelsSecret`

GetSecretKey returns the SecretKey field if non-nil, zero value otherwise.

### GetSecretKeyOk

`func (o *AwsS3SecretsConfig) GetSecretKeyOk() (*ModelsSecret, bool)`

GetSecretKeyOk returns a tuple with the SecretKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSecretKey

`func (o *AwsS3SecretsConfig) SetSecretKey(v ModelsSecret)`

SetSecretKey sets SecretKey field to given value.

### HasSecretKey

`func (o *AwsS3SecretsConfig) HasSecretKey() bool`

HasSecretKey returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# ElasticsearchSecretsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApiKey** | Pointer to [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**Password** | Pointer to [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Methods

### NewElasticsearchSecretsConfig

`func NewElasticsearchSecretsConfig() *ElasticsearchSecretsConfig`

NewElasticsearchSecretsConfig instantiates a new ElasticsearchSecretsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewElasticsearchSecretsConfigWithDefaults

`func NewElasticsearchSecretsConfigWithDefaults() *ElasticsearchSecretsConfig`

NewElasticsearchSecretsConfigWithDefaults instantiates a new ElasticsearchSecretsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApiKey

`func (o *ElasticsearchSecretsConfig) GetApiKey() ModelsSecret`

GetApiKey returns the ApiKey field if non-nil, zero value otherwise.

### GetApiKeyOk

`func (o *ElasticsearchSecretsConfig) GetApiKeyOk() (*ModelsSecret, bool)`

GetApiKeyOk returns a tuple with the ApiKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApiKey

`func (o *ElasticsearchSecretsConfig) SetApiKey(v ModelsSecret)`

SetApiKey sets ApiKey field to given value.

### HasApiKey

`func (o *ElasticsearchSecretsConfig) HasApiKey() bool`

HasApiKey returns a boolean if a field has been set.

### GetPassword

`func (o *ElasticsearchSecretsConfig) GetPassword() ModelsSecret`

GetPassword returns the Password field if non-nil, zero value otherwise.

### GetPasswordOk

`func (o *ElasticsearchSecretsConfig) GetPasswordOk() (*ModelsSecret, bool)`

GetPasswordOk returns a tuple with the Password field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPassword

`func (o *ElasticsearchSecretsConfig) SetPassword(v ModelsSecret)`

SetPassword sets Password field to given value.

### HasPassword

`func (o *ElasticsearchSecretsConfig) HasPassword() bool`

HasPassword returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



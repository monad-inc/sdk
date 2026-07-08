# ElasticsearchAuthConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApiKey** | Pointer to [**ElasticsearchSecretVariant**](ElasticsearchSecretVariant.md) |  | [optional] 
**Password** | Pointer to [**ElasticsearchSecretVariant**](ElasticsearchSecretVariant.md) |  | [optional] 
**Type** | **string** |  | 

## Methods

### NewElasticsearchAuthConfig

`func NewElasticsearchAuthConfig(type_ string, ) *ElasticsearchAuthConfig`

NewElasticsearchAuthConfig instantiates a new ElasticsearchAuthConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewElasticsearchAuthConfigWithDefaults

`func NewElasticsearchAuthConfigWithDefaults() *ElasticsearchAuthConfig`

NewElasticsearchAuthConfigWithDefaults instantiates a new ElasticsearchAuthConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApiKey

`func (o *ElasticsearchAuthConfig) GetApiKey() ElasticsearchSecretVariant`

GetApiKey returns the ApiKey field if non-nil, zero value otherwise.

### GetApiKeyOk

`func (o *ElasticsearchAuthConfig) GetApiKeyOk() (*ElasticsearchSecretVariant, bool)`

GetApiKeyOk returns a tuple with the ApiKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApiKey

`func (o *ElasticsearchAuthConfig) SetApiKey(v ElasticsearchSecretVariant)`

SetApiKey sets ApiKey field to given value.

### HasApiKey

`func (o *ElasticsearchAuthConfig) HasApiKey() bool`

HasApiKey returns a boolean if a field has been set.

### GetPassword

`func (o *ElasticsearchAuthConfig) GetPassword() ElasticsearchSecretVariant`

GetPassword returns the Password field if non-nil, zero value otherwise.

### GetPasswordOk

`func (o *ElasticsearchAuthConfig) GetPasswordOk() (*ElasticsearchSecretVariant, bool)`

GetPasswordOk returns a tuple with the Password field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPassword

`func (o *ElasticsearchAuthConfig) SetPassword(v ElasticsearchSecretVariant)`

SetPassword sets Password field to given value.

### HasPassword

`func (o *ElasticsearchAuthConfig) HasPassword() bool`

HasPassword returns a boolean if a field has been set.

### GetType

`func (o *ElasticsearchAuthConfig) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ElasticsearchAuthConfig) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ElasticsearchAuthConfig) SetType(v string)`

SetType sets Type field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



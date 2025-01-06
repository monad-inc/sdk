# HttpSecretsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AuthHeaders** | Pointer to **map[string]string** | Authentication headers | [optional] 

## Methods

### NewHttpSecretsConfig

`func NewHttpSecretsConfig() *HttpSecretsConfig`

NewHttpSecretsConfig instantiates a new HttpSecretsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHttpSecretsConfigWithDefaults

`func NewHttpSecretsConfigWithDefaults() *HttpSecretsConfig`

NewHttpSecretsConfigWithDefaults instantiates a new HttpSecretsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAuthHeaders

`func (o *HttpSecretsConfig) GetAuthHeaders() map[string]string`

GetAuthHeaders returns the AuthHeaders field if non-nil, zero value otherwise.

### GetAuthHeadersOk

`func (o *HttpSecretsConfig) GetAuthHeadersOk() (*map[string]string, bool)`

GetAuthHeadersOk returns a tuple with the AuthHeaders field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthHeaders

`func (o *HttpSecretsConfig) SetAuthHeaders(v map[string]string)`

SetAuthHeaders sets AuthHeaders field to given value.

### HasAuthHeaders

`func (o *HttpSecretsConfig) HasAuthHeaders() bool`

HasAuthHeaders returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



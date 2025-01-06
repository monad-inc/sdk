# CriblHttpSecretsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AuthToken** | Pointer to **string** | The authentication token value you&#39;ve set for your HTTP Source. This token is used to authenticate requests to your Cribl endpoint. | [optional] 

## Methods

### NewCriblHttpSecretsConfig

`func NewCriblHttpSecretsConfig() *CriblHttpSecretsConfig`

NewCriblHttpSecretsConfig instantiates a new CriblHttpSecretsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCriblHttpSecretsConfigWithDefaults

`func NewCriblHttpSecretsConfigWithDefaults() *CriblHttpSecretsConfig`

NewCriblHttpSecretsConfigWithDefaults instantiates a new CriblHttpSecretsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAuthToken

`func (o *CriblHttpSecretsConfig) GetAuthToken() string`

GetAuthToken returns the AuthToken field if non-nil, zero value otherwise.

### GetAuthTokenOk

`func (o *CriblHttpSecretsConfig) GetAuthTokenOk() (*string, bool)`

GetAuthTokenOk returns a tuple with the AuthToken field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthToken

`func (o *CriblHttpSecretsConfig) SetAuthToken(v string)`

SetAuthToken sets AuthToken field to given value.

### HasAuthToken

`func (o *CriblHttpSecretsConfig) HasAuthToken() bool`

HasAuthToken returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



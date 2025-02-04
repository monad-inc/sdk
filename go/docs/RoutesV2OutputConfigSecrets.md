# RoutesV2OutputConfigSecrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AuthToken** | Pointer to [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**ApiKey** | Pointer to [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**Password** | Pointer to [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**AuthHeaders** | Pointer to [**map[string]ModelsSecret**](ModelsSecret.md) | Authentication headers | [optional] 
**ClientId** | Pointer to [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**ClientSecret** | Pointer to [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**TenantId** | Pointer to [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**PrivateKey** | Pointer to [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**Token** | Pointer to [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**AccessId** | Pointer to [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**AccessKey** | Pointer to [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Methods

### NewRoutesV2OutputConfigSecrets

`func NewRoutesV2OutputConfigSecrets() *RoutesV2OutputConfigSecrets`

NewRoutesV2OutputConfigSecrets instantiates a new RoutesV2OutputConfigSecrets object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoutesV2OutputConfigSecretsWithDefaults

`func NewRoutesV2OutputConfigSecretsWithDefaults() *RoutesV2OutputConfigSecrets`

NewRoutesV2OutputConfigSecretsWithDefaults instantiates a new RoutesV2OutputConfigSecrets object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAuthToken

`func (o *RoutesV2OutputConfigSecrets) GetAuthToken() ModelsSecret`

GetAuthToken returns the AuthToken field if non-nil, zero value otherwise.

### GetAuthTokenOk

`func (o *RoutesV2OutputConfigSecrets) GetAuthTokenOk() (*ModelsSecret, bool)`

GetAuthTokenOk returns a tuple with the AuthToken field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthToken

`func (o *RoutesV2OutputConfigSecrets) SetAuthToken(v ModelsSecret)`

SetAuthToken sets AuthToken field to given value.

### HasAuthToken

`func (o *RoutesV2OutputConfigSecrets) HasAuthToken() bool`

HasAuthToken returns a boolean if a field has been set.

### GetApiKey

`func (o *RoutesV2OutputConfigSecrets) GetApiKey() ModelsSecret`

GetApiKey returns the ApiKey field if non-nil, zero value otherwise.

### GetApiKeyOk

`func (o *RoutesV2OutputConfigSecrets) GetApiKeyOk() (*ModelsSecret, bool)`

GetApiKeyOk returns a tuple with the ApiKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApiKey

`func (o *RoutesV2OutputConfigSecrets) SetApiKey(v ModelsSecret)`

SetApiKey sets ApiKey field to given value.

### HasApiKey

`func (o *RoutesV2OutputConfigSecrets) HasApiKey() bool`

HasApiKey returns a boolean if a field has been set.

### GetPassword

`func (o *RoutesV2OutputConfigSecrets) GetPassword() ModelsSecret`

GetPassword returns the Password field if non-nil, zero value otherwise.

### GetPasswordOk

`func (o *RoutesV2OutputConfigSecrets) GetPasswordOk() (*ModelsSecret, bool)`

GetPasswordOk returns a tuple with the Password field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPassword

`func (o *RoutesV2OutputConfigSecrets) SetPassword(v ModelsSecret)`

SetPassword sets Password field to given value.

### HasPassword

`func (o *RoutesV2OutputConfigSecrets) HasPassword() bool`

HasPassword returns a boolean if a field has been set.

### GetAuthHeaders

`func (o *RoutesV2OutputConfigSecrets) GetAuthHeaders() map[string]ModelsSecret`

GetAuthHeaders returns the AuthHeaders field if non-nil, zero value otherwise.

### GetAuthHeadersOk

`func (o *RoutesV2OutputConfigSecrets) GetAuthHeadersOk() (*map[string]ModelsSecret, bool)`

GetAuthHeadersOk returns a tuple with the AuthHeaders field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthHeaders

`func (o *RoutesV2OutputConfigSecrets) SetAuthHeaders(v map[string]ModelsSecret)`

SetAuthHeaders sets AuthHeaders field to given value.

### HasAuthHeaders

`func (o *RoutesV2OutputConfigSecrets) HasAuthHeaders() bool`

HasAuthHeaders returns a boolean if a field has been set.

### GetClientId

`func (o *RoutesV2OutputConfigSecrets) GetClientId() ModelsSecret`

GetClientId returns the ClientId field if non-nil, zero value otherwise.

### GetClientIdOk

`func (o *RoutesV2OutputConfigSecrets) GetClientIdOk() (*ModelsSecret, bool)`

GetClientIdOk returns a tuple with the ClientId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientId

`func (o *RoutesV2OutputConfigSecrets) SetClientId(v ModelsSecret)`

SetClientId sets ClientId field to given value.

### HasClientId

`func (o *RoutesV2OutputConfigSecrets) HasClientId() bool`

HasClientId returns a boolean if a field has been set.

### GetClientSecret

`func (o *RoutesV2OutputConfigSecrets) GetClientSecret() ModelsSecret`

GetClientSecret returns the ClientSecret field if non-nil, zero value otherwise.

### GetClientSecretOk

`func (o *RoutesV2OutputConfigSecrets) GetClientSecretOk() (*ModelsSecret, bool)`

GetClientSecretOk returns a tuple with the ClientSecret field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientSecret

`func (o *RoutesV2OutputConfigSecrets) SetClientSecret(v ModelsSecret)`

SetClientSecret sets ClientSecret field to given value.

### HasClientSecret

`func (o *RoutesV2OutputConfigSecrets) HasClientSecret() bool`

HasClientSecret returns a boolean if a field has been set.

### GetTenantId

`func (o *RoutesV2OutputConfigSecrets) GetTenantId() ModelsSecret`

GetTenantId returns the TenantId field if non-nil, zero value otherwise.

### GetTenantIdOk

`func (o *RoutesV2OutputConfigSecrets) GetTenantIdOk() (*ModelsSecret, bool)`

GetTenantIdOk returns a tuple with the TenantId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTenantId

`func (o *RoutesV2OutputConfigSecrets) SetTenantId(v ModelsSecret)`

SetTenantId sets TenantId field to given value.

### HasTenantId

`func (o *RoutesV2OutputConfigSecrets) HasTenantId() bool`

HasTenantId returns a boolean if a field has been set.

### GetPrivateKey

`func (o *RoutesV2OutputConfigSecrets) GetPrivateKey() ModelsSecret`

GetPrivateKey returns the PrivateKey field if non-nil, zero value otherwise.

### GetPrivateKeyOk

`func (o *RoutesV2OutputConfigSecrets) GetPrivateKeyOk() (*ModelsSecret, bool)`

GetPrivateKeyOk returns a tuple with the PrivateKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrivateKey

`func (o *RoutesV2OutputConfigSecrets) SetPrivateKey(v ModelsSecret)`

SetPrivateKey sets PrivateKey field to given value.

### HasPrivateKey

`func (o *RoutesV2OutputConfigSecrets) HasPrivateKey() bool`

HasPrivateKey returns a boolean if a field has been set.

### GetToken

`func (o *RoutesV2OutputConfigSecrets) GetToken() ModelsSecret`

GetToken returns the Token field if non-nil, zero value otherwise.

### GetTokenOk

`func (o *RoutesV2OutputConfigSecrets) GetTokenOk() (*ModelsSecret, bool)`

GetTokenOk returns a tuple with the Token field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetToken

`func (o *RoutesV2OutputConfigSecrets) SetToken(v ModelsSecret)`

SetToken sets Token field to given value.

### HasToken

`func (o *RoutesV2OutputConfigSecrets) HasToken() bool`

HasToken returns a boolean if a field has been set.

### GetAccessId

`func (o *RoutesV2OutputConfigSecrets) GetAccessId() ModelsSecret`

GetAccessId returns the AccessId field if non-nil, zero value otherwise.

### GetAccessIdOk

`func (o *RoutesV2OutputConfigSecrets) GetAccessIdOk() (*ModelsSecret, bool)`

GetAccessIdOk returns a tuple with the AccessId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessId

`func (o *RoutesV2OutputConfigSecrets) SetAccessId(v ModelsSecret)`

SetAccessId sets AccessId field to given value.

### HasAccessId

`func (o *RoutesV2OutputConfigSecrets) HasAccessId() bool`

HasAccessId returns a boolean if a field has been set.

### GetAccessKey

`func (o *RoutesV2OutputConfigSecrets) GetAccessKey() ModelsSecret`

GetAccessKey returns the AccessKey field if non-nil, zero value otherwise.

### GetAccessKeyOk

`func (o *RoutesV2OutputConfigSecrets) GetAccessKeyOk() (*ModelsSecret, bool)`

GetAccessKeyOk returns a tuple with the AccessKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessKey

`func (o *RoutesV2OutputConfigSecrets) SetAccessKey(v ModelsSecret)`

SetAccessKey sets AccessKey field to given value.

### HasAccessKey

`func (o *RoutesV2OutputConfigSecrets) HasAccessKey() bool`

HasAccessKey returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



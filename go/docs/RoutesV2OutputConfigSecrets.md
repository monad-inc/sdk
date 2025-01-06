# RoutesV2OutputConfigSecrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AuthToken** | Pointer to **string** | The authentication token value you&#39;ve set for your HTTP Source. This token is used to authenticate requests to your Cribl endpoint. | [optional] 
**ApiKey** | Pointer to **string** | API key for authenticating with the Elasticsearch cluster. Required when auth type is set to &#39;api_key&#39;. | [optional] 
**Password** | Pointer to **string** | The Users password | [optional] 
**AuthHeaders** | Pointer to **map[string]string** | Authentication headers | [optional] 
**ClientId** | Pointer to **string** | The application (client) ID registered in Azure Active Directory. | [optional] 
**ClientSecret** | Pointer to **string** | The client secret associated with the registered application in Azure AD. | [optional] 
**TenantId** | Pointer to **string** | The Azure Active Directory tenant (directory) ID. | [optional] 
**Token** | Pointer to **string** | The token for authenticating with Splunk. | [optional] 
**AccessId** | Pointer to **string** | The Access ID for authenticating with Sumo Logic. | [optional] 
**AccessKey** | Pointer to **string** | The Access Key for authenticating with Sumo Logic. | [optional] 

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

`func (o *RoutesV2OutputConfigSecrets) GetAuthToken() string`

GetAuthToken returns the AuthToken field if non-nil, zero value otherwise.

### GetAuthTokenOk

`func (o *RoutesV2OutputConfigSecrets) GetAuthTokenOk() (*string, bool)`

GetAuthTokenOk returns a tuple with the AuthToken field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthToken

`func (o *RoutesV2OutputConfigSecrets) SetAuthToken(v string)`

SetAuthToken sets AuthToken field to given value.

### HasAuthToken

`func (o *RoutesV2OutputConfigSecrets) HasAuthToken() bool`

HasAuthToken returns a boolean if a field has been set.

### GetApiKey

`func (o *RoutesV2OutputConfigSecrets) GetApiKey() string`

GetApiKey returns the ApiKey field if non-nil, zero value otherwise.

### GetApiKeyOk

`func (o *RoutesV2OutputConfigSecrets) GetApiKeyOk() (*string, bool)`

GetApiKeyOk returns a tuple with the ApiKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApiKey

`func (o *RoutesV2OutputConfigSecrets) SetApiKey(v string)`

SetApiKey sets ApiKey field to given value.

### HasApiKey

`func (o *RoutesV2OutputConfigSecrets) HasApiKey() bool`

HasApiKey returns a boolean if a field has been set.

### GetPassword

`func (o *RoutesV2OutputConfigSecrets) GetPassword() string`

GetPassword returns the Password field if non-nil, zero value otherwise.

### GetPasswordOk

`func (o *RoutesV2OutputConfigSecrets) GetPasswordOk() (*string, bool)`

GetPasswordOk returns a tuple with the Password field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPassword

`func (o *RoutesV2OutputConfigSecrets) SetPassword(v string)`

SetPassword sets Password field to given value.

### HasPassword

`func (o *RoutesV2OutputConfigSecrets) HasPassword() bool`

HasPassword returns a boolean if a field has been set.

### GetAuthHeaders

`func (o *RoutesV2OutputConfigSecrets) GetAuthHeaders() map[string]string`

GetAuthHeaders returns the AuthHeaders field if non-nil, zero value otherwise.

### GetAuthHeadersOk

`func (o *RoutesV2OutputConfigSecrets) GetAuthHeadersOk() (*map[string]string, bool)`

GetAuthHeadersOk returns a tuple with the AuthHeaders field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthHeaders

`func (o *RoutesV2OutputConfigSecrets) SetAuthHeaders(v map[string]string)`

SetAuthHeaders sets AuthHeaders field to given value.

### HasAuthHeaders

`func (o *RoutesV2OutputConfigSecrets) HasAuthHeaders() bool`

HasAuthHeaders returns a boolean if a field has been set.

### GetClientId

`func (o *RoutesV2OutputConfigSecrets) GetClientId() string`

GetClientId returns the ClientId field if non-nil, zero value otherwise.

### GetClientIdOk

`func (o *RoutesV2OutputConfigSecrets) GetClientIdOk() (*string, bool)`

GetClientIdOk returns a tuple with the ClientId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientId

`func (o *RoutesV2OutputConfigSecrets) SetClientId(v string)`

SetClientId sets ClientId field to given value.

### HasClientId

`func (o *RoutesV2OutputConfigSecrets) HasClientId() bool`

HasClientId returns a boolean if a field has been set.

### GetClientSecret

`func (o *RoutesV2OutputConfigSecrets) GetClientSecret() string`

GetClientSecret returns the ClientSecret field if non-nil, zero value otherwise.

### GetClientSecretOk

`func (o *RoutesV2OutputConfigSecrets) GetClientSecretOk() (*string, bool)`

GetClientSecretOk returns a tuple with the ClientSecret field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientSecret

`func (o *RoutesV2OutputConfigSecrets) SetClientSecret(v string)`

SetClientSecret sets ClientSecret field to given value.

### HasClientSecret

`func (o *RoutesV2OutputConfigSecrets) HasClientSecret() bool`

HasClientSecret returns a boolean if a field has been set.

### GetTenantId

`func (o *RoutesV2OutputConfigSecrets) GetTenantId() string`

GetTenantId returns the TenantId field if non-nil, zero value otherwise.

### GetTenantIdOk

`func (o *RoutesV2OutputConfigSecrets) GetTenantIdOk() (*string, bool)`

GetTenantIdOk returns a tuple with the TenantId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTenantId

`func (o *RoutesV2OutputConfigSecrets) SetTenantId(v string)`

SetTenantId sets TenantId field to given value.

### HasTenantId

`func (o *RoutesV2OutputConfigSecrets) HasTenantId() bool`

HasTenantId returns a boolean if a field has been set.

### GetToken

`func (o *RoutesV2OutputConfigSecrets) GetToken() string`

GetToken returns the Token field if non-nil, zero value otherwise.

### GetTokenOk

`func (o *RoutesV2OutputConfigSecrets) GetTokenOk() (*string, bool)`

GetTokenOk returns a tuple with the Token field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetToken

`func (o *RoutesV2OutputConfigSecrets) SetToken(v string)`

SetToken sets Token field to given value.

### HasToken

`func (o *RoutesV2OutputConfigSecrets) HasToken() bool`

HasToken returns a boolean if a field has been set.

### GetAccessId

`func (o *RoutesV2OutputConfigSecrets) GetAccessId() string`

GetAccessId returns the AccessId field if non-nil, zero value otherwise.

### GetAccessIdOk

`func (o *RoutesV2OutputConfigSecrets) GetAccessIdOk() (*string, bool)`

GetAccessIdOk returns a tuple with the AccessId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessId

`func (o *RoutesV2OutputConfigSecrets) SetAccessId(v string)`

SetAccessId sets AccessId field to given value.

### HasAccessId

`func (o *RoutesV2OutputConfigSecrets) HasAccessId() bool`

HasAccessId returns a boolean if a field has been set.

### GetAccessKey

`func (o *RoutesV2OutputConfigSecrets) GetAccessKey() string`

GetAccessKey returns the AccessKey field if non-nil, zero value otherwise.

### GetAccessKeyOk

`func (o *RoutesV2OutputConfigSecrets) GetAccessKeyOk() (*string, bool)`

GetAccessKeyOk returns a tuple with the AccessKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessKey

`func (o *RoutesV2OutputConfigSecrets) SetAccessKey(v string)`

SetAccessKey sets AccessKey field to given value.

### HasAccessKey

`func (o *RoutesV2OutputConfigSecrets) HasAccessKey() bool`

HasAccessKey returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



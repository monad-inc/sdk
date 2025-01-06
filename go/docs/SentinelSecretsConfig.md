# SentinelSecretsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ClientId** | Pointer to **string** | The application (client) ID registered in Azure Active Directory. | [optional] 
**ClientSecret** | Pointer to **string** | The client secret associated with the registered application in Azure AD. | [optional] 
**TenantId** | Pointer to **string** | The Azure Active Directory tenant (directory) ID. | [optional] 

## Methods

### NewSentinelSecretsConfig

`func NewSentinelSecretsConfig() *SentinelSecretsConfig`

NewSentinelSecretsConfig instantiates a new SentinelSecretsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSentinelSecretsConfigWithDefaults

`func NewSentinelSecretsConfigWithDefaults() *SentinelSecretsConfig`

NewSentinelSecretsConfigWithDefaults instantiates a new SentinelSecretsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetClientId

`func (o *SentinelSecretsConfig) GetClientId() string`

GetClientId returns the ClientId field if non-nil, zero value otherwise.

### GetClientIdOk

`func (o *SentinelSecretsConfig) GetClientIdOk() (*string, bool)`

GetClientIdOk returns a tuple with the ClientId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientId

`func (o *SentinelSecretsConfig) SetClientId(v string)`

SetClientId sets ClientId field to given value.

### HasClientId

`func (o *SentinelSecretsConfig) HasClientId() bool`

HasClientId returns a boolean if a field has been set.

### GetClientSecret

`func (o *SentinelSecretsConfig) GetClientSecret() string`

GetClientSecret returns the ClientSecret field if non-nil, zero value otherwise.

### GetClientSecretOk

`func (o *SentinelSecretsConfig) GetClientSecretOk() (*string, bool)`

GetClientSecretOk returns a tuple with the ClientSecret field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientSecret

`func (o *SentinelSecretsConfig) SetClientSecret(v string)`

SetClientSecret sets ClientSecret field to given value.

### HasClientSecret

`func (o *SentinelSecretsConfig) HasClientSecret() bool`

HasClientSecret returns a boolean if a field has been set.

### GetTenantId

`func (o *SentinelSecretsConfig) GetTenantId() string`

GetTenantId returns the TenantId field if non-nil, zero value otherwise.

### GetTenantIdOk

`func (o *SentinelSecretsConfig) GetTenantIdOk() (*string, bool)`

GetTenantIdOk returns a tuple with the TenantId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTenantId

`func (o *SentinelSecretsConfig) SetTenantId(v string)`

SetTenantId sets TenantId field to given value.

### HasTenantId

`func (o *SentinelSecretsConfig) HasTenantId() bool`

HasTenantId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



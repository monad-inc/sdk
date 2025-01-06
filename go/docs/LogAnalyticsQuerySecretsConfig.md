# LogAnalyticsQuerySecretsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ClientId** | Pointer to **string** | The client ID of the Azure AD application | [optional] 
**ClientSecret** | Pointer to **string** | The client secret of the Azure AD application | [optional] 

## Methods

### NewLogAnalyticsQuerySecretsConfig

`func NewLogAnalyticsQuerySecretsConfig() *LogAnalyticsQuerySecretsConfig`

NewLogAnalyticsQuerySecretsConfig instantiates a new LogAnalyticsQuerySecretsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLogAnalyticsQuerySecretsConfigWithDefaults

`func NewLogAnalyticsQuerySecretsConfigWithDefaults() *LogAnalyticsQuerySecretsConfig`

NewLogAnalyticsQuerySecretsConfigWithDefaults instantiates a new LogAnalyticsQuerySecretsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetClientId

`func (o *LogAnalyticsQuerySecretsConfig) GetClientId() string`

GetClientId returns the ClientId field if non-nil, zero value otherwise.

### GetClientIdOk

`func (o *LogAnalyticsQuerySecretsConfig) GetClientIdOk() (*string, bool)`

GetClientIdOk returns a tuple with the ClientId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientId

`func (o *LogAnalyticsQuerySecretsConfig) SetClientId(v string)`

SetClientId sets ClientId field to given value.

### HasClientId

`func (o *LogAnalyticsQuerySecretsConfig) HasClientId() bool`

HasClientId returns a boolean if a field has been set.

### GetClientSecret

`func (o *LogAnalyticsQuerySecretsConfig) GetClientSecret() string`

GetClientSecret returns the ClientSecret field if non-nil, zero value otherwise.

### GetClientSecretOk

`func (o *LogAnalyticsQuerySecretsConfig) GetClientSecretOk() (*string, bool)`

GetClientSecretOk returns a tuple with the ClientSecret field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientSecret

`func (o *LogAnalyticsQuerySecretsConfig) SetClientSecret(v string)`

SetClientSecret sets ClientSecret field to given value.

### HasClientSecret

`func (o *LogAnalyticsQuerySecretsConfig) HasClientSecret() bool`

HasClientSecret returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



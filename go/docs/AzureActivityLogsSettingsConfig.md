# AzureActivityLogsSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CorrelationId** | Pointer to **string** | The correlation ID of the log | [optional] 
**ResourceGroupName** | Pointer to **string** | The name of the resource group | [optional] 
**ResourceProvider** | Pointer to **string** | The provider of the resource | [optional] 
**ResourceUri** | Pointer to **string** | The URI of the resource | [optional] 
**SubscriptionId** | Pointer to **string** | The subscription ID of the Azure subscription | [optional] 
**TenantId** | Pointer to **string** | The tenant ID of the Azure AD application | [optional] 
**UseSyntheticData** | Pointer to **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Methods

### NewAzureActivityLogsSettingsConfig

`func NewAzureActivityLogsSettingsConfig() *AzureActivityLogsSettingsConfig`

NewAzureActivityLogsSettingsConfig instantiates a new AzureActivityLogsSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAzureActivityLogsSettingsConfigWithDefaults

`func NewAzureActivityLogsSettingsConfigWithDefaults() *AzureActivityLogsSettingsConfig`

NewAzureActivityLogsSettingsConfigWithDefaults instantiates a new AzureActivityLogsSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCorrelationId

`func (o *AzureActivityLogsSettingsConfig) GetCorrelationId() string`

GetCorrelationId returns the CorrelationId field if non-nil, zero value otherwise.

### GetCorrelationIdOk

`func (o *AzureActivityLogsSettingsConfig) GetCorrelationIdOk() (*string, bool)`

GetCorrelationIdOk returns a tuple with the CorrelationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCorrelationId

`func (o *AzureActivityLogsSettingsConfig) SetCorrelationId(v string)`

SetCorrelationId sets CorrelationId field to given value.

### HasCorrelationId

`func (o *AzureActivityLogsSettingsConfig) HasCorrelationId() bool`

HasCorrelationId returns a boolean if a field has been set.

### GetResourceGroupName

`func (o *AzureActivityLogsSettingsConfig) GetResourceGroupName() string`

GetResourceGroupName returns the ResourceGroupName field if non-nil, zero value otherwise.

### GetResourceGroupNameOk

`func (o *AzureActivityLogsSettingsConfig) GetResourceGroupNameOk() (*string, bool)`

GetResourceGroupNameOk returns a tuple with the ResourceGroupName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResourceGroupName

`func (o *AzureActivityLogsSettingsConfig) SetResourceGroupName(v string)`

SetResourceGroupName sets ResourceGroupName field to given value.

### HasResourceGroupName

`func (o *AzureActivityLogsSettingsConfig) HasResourceGroupName() bool`

HasResourceGroupName returns a boolean if a field has been set.

### GetResourceProvider

`func (o *AzureActivityLogsSettingsConfig) GetResourceProvider() string`

GetResourceProvider returns the ResourceProvider field if non-nil, zero value otherwise.

### GetResourceProviderOk

`func (o *AzureActivityLogsSettingsConfig) GetResourceProviderOk() (*string, bool)`

GetResourceProviderOk returns a tuple with the ResourceProvider field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResourceProvider

`func (o *AzureActivityLogsSettingsConfig) SetResourceProvider(v string)`

SetResourceProvider sets ResourceProvider field to given value.

### HasResourceProvider

`func (o *AzureActivityLogsSettingsConfig) HasResourceProvider() bool`

HasResourceProvider returns a boolean if a field has been set.

### GetResourceUri

`func (o *AzureActivityLogsSettingsConfig) GetResourceUri() string`

GetResourceUri returns the ResourceUri field if non-nil, zero value otherwise.

### GetResourceUriOk

`func (o *AzureActivityLogsSettingsConfig) GetResourceUriOk() (*string, bool)`

GetResourceUriOk returns a tuple with the ResourceUri field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResourceUri

`func (o *AzureActivityLogsSettingsConfig) SetResourceUri(v string)`

SetResourceUri sets ResourceUri field to given value.

### HasResourceUri

`func (o *AzureActivityLogsSettingsConfig) HasResourceUri() bool`

HasResourceUri returns a boolean if a field has been set.

### GetSubscriptionId

`func (o *AzureActivityLogsSettingsConfig) GetSubscriptionId() string`

GetSubscriptionId returns the SubscriptionId field if non-nil, zero value otherwise.

### GetSubscriptionIdOk

`func (o *AzureActivityLogsSettingsConfig) GetSubscriptionIdOk() (*string, bool)`

GetSubscriptionIdOk returns a tuple with the SubscriptionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubscriptionId

`func (o *AzureActivityLogsSettingsConfig) SetSubscriptionId(v string)`

SetSubscriptionId sets SubscriptionId field to given value.

### HasSubscriptionId

`func (o *AzureActivityLogsSettingsConfig) HasSubscriptionId() bool`

HasSubscriptionId returns a boolean if a field has been set.

### GetTenantId

`func (o *AzureActivityLogsSettingsConfig) GetTenantId() string`

GetTenantId returns the TenantId field if non-nil, zero value otherwise.

### GetTenantIdOk

`func (o *AzureActivityLogsSettingsConfig) GetTenantIdOk() (*string, bool)`

GetTenantIdOk returns a tuple with the TenantId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTenantId

`func (o *AzureActivityLogsSettingsConfig) SetTenantId(v string)`

SetTenantId sets TenantId field to given value.

### HasTenantId

`func (o *AzureActivityLogsSettingsConfig) HasTenantId() bool`

HasTenantId returns a boolean if a field has been set.

### GetUseSyntheticData

`func (o *AzureActivityLogsSettingsConfig) GetUseSyntheticData() bool`

GetUseSyntheticData returns the UseSyntheticData field if non-nil, zero value otherwise.

### GetUseSyntheticDataOk

`func (o *AzureActivityLogsSettingsConfig) GetUseSyntheticDataOk() (*bool, bool)`

GetUseSyntheticDataOk returns a tuple with the UseSyntheticData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseSyntheticData

`func (o *AzureActivityLogsSettingsConfig) SetUseSyntheticData(v bool)`

SetUseSyntheticData sets UseSyntheticData field to given value.

### HasUseSyntheticData

`func (o *AzureActivityLogsSettingsConfig) HasUseSyntheticData() bool`

HasUseSyntheticData returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



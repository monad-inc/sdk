# AzureVnetFlowLogsSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Prefix** | Pointer to **string** |  | [optional] 
**Region** | Pointer to **string** | The Azure region where the virtual network is located | [optional] 
**ResourceGroupName** | Pointer to **string** | The name of the resource group containing the virtual network | [optional] 
**StorageAccountUrl** | Pointer to **string** | The Azure storage account URL where flow logs are stored | [optional] 
**SubscriptionId** | Pointer to **string** | The Azure subscription ID where the virtual network and storage account are located | [optional] 
**TenantId** | Pointer to **string** | The Azure Entra ID tenant (directory) ID. | [optional] 
**VirtualNetworkName** | Pointer to **string** | The name of the virtual network for which flow logs are being collected | [optional] 

## Methods

### NewAzureVnetFlowLogsSettingsConfig

`func NewAzureVnetFlowLogsSettingsConfig() *AzureVnetFlowLogsSettingsConfig`

NewAzureVnetFlowLogsSettingsConfig instantiates a new AzureVnetFlowLogsSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAzureVnetFlowLogsSettingsConfigWithDefaults

`func NewAzureVnetFlowLogsSettingsConfigWithDefaults() *AzureVnetFlowLogsSettingsConfig`

NewAzureVnetFlowLogsSettingsConfigWithDefaults instantiates a new AzureVnetFlowLogsSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPrefix

`func (o *AzureVnetFlowLogsSettingsConfig) GetPrefix() string`

GetPrefix returns the Prefix field if non-nil, zero value otherwise.

### GetPrefixOk

`func (o *AzureVnetFlowLogsSettingsConfig) GetPrefixOk() (*string, bool)`

GetPrefixOk returns a tuple with the Prefix field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrefix

`func (o *AzureVnetFlowLogsSettingsConfig) SetPrefix(v string)`

SetPrefix sets Prefix field to given value.

### HasPrefix

`func (o *AzureVnetFlowLogsSettingsConfig) HasPrefix() bool`

HasPrefix returns a boolean if a field has been set.

### GetRegion

`func (o *AzureVnetFlowLogsSettingsConfig) GetRegion() string`

GetRegion returns the Region field if non-nil, zero value otherwise.

### GetRegionOk

`func (o *AzureVnetFlowLogsSettingsConfig) GetRegionOk() (*string, bool)`

GetRegionOk returns a tuple with the Region field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegion

`func (o *AzureVnetFlowLogsSettingsConfig) SetRegion(v string)`

SetRegion sets Region field to given value.

### HasRegion

`func (o *AzureVnetFlowLogsSettingsConfig) HasRegion() bool`

HasRegion returns a boolean if a field has been set.

### GetResourceGroupName

`func (o *AzureVnetFlowLogsSettingsConfig) GetResourceGroupName() string`

GetResourceGroupName returns the ResourceGroupName field if non-nil, zero value otherwise.

### GetResourceGroupNameOk

`func (o *AzureVnetFlowLogsSettingsConfig) GetResourceGroupNameOk() (*string, bool)`

GetResourceGroupNameOk returns a tuple with the ResourceGroupName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResourceGroupName

`func (o *AzureVnetFlowLogsSettingsConfig) SetResourceGroupName(v string)`

SetResourceGroupName sets ResourceGroupName field to given value.

### HasResourceGroupName

`func (o *AzureVnetFlowLogsSettingsConfig) HasResourceGroupName() bool`

HasResourceGroupName returns a boolean if a field has been set.

### GetStorageAccountUrl

`func (o *AzureVnetFlowLogsSettingsConfig) GetStorageAccountUrl() string`

GetStorageAccountUrl returns the StorageAccountUrl field if non-nil, zero value otherwise.

### GetStorageAccountUrlOk

`func (o *AzureVnetFlowLogsSettingsConfig) GetStorageAccountUrlOk() (*string, bool)`

GetStorageAccountUrlOk returns a tuple with the StorageAccountUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStorageAccountUrl

`func (o *AzureVnetFlowLogsSettingsConfig) SetStorageAccountUrl(v string)`

SetStorageAccountUrl sets StorageAccountUrl field to given value.

### HasStorageAccountUrl

`func (o *AzureVnetFlowLogsSettingsConfig) HasStorageAccountUrl() bool`

HasStorageAccountUrl returns a boolean if a field has been set.

### GetSubscriptionId

`func (o *AzureVnetFlowLogsSettingsConfig) GetSubscriptionId() string`

GetSubscriptionId returns the SubscriptionId field if non-nil, zero value otherwise.

### GetSubscriptionIdOk

`func (o *AzureVnetFlowLogsSettingsConfig) GetSubscriptionIdOk() (*string, bool)`

GetSubscriptionIdOk returns a tuple with the SubscriptionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubscriptionId

`func (o *AzureVnetFlowLogsSettingsConfig) SetSubscriptionId(v string)`

SetSubscriptionId sets SubscriptionId field to given value.

### HasSubscriptionId

`func (o *AzureVnetFlowLogsSettingsConfig) HasSubscriptionId() bool`

HasSubscriptionId returns a boolean if a field has been set.

### GetTenantId

`func (o *AzureVnetFlowLogsSettingsConfig) GetTenantId() string`

GetTenantId returns the TenantId field if non-nil, zero value otherwise.

### GetTenantIdOk

`func (o *AzureVnetFlowLogsSettingsConfig) GetTenantIdOk() (*string, bool)`

GetTenantIdOk returns a tuple with the TenantId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTenantId

`func (o *AzureVnetFlowLogsSettingsConfig) SetTenantId(v string)`

SetTenantId sets TenantId field to given value.

### HasTenantId

`func (o *AzureVnetFlowLogsSettingsConfig) HasTenantId() bool`

HasTenantId returns a boolean if a field has been set.

### GetVirtualNetworkName

`func (o *AzureVnetFlowLogsSettingsConfig) GetVirtualNetworkName() string`

GetVirtualNetworkName returns the VirtualNetworkName field if non-nil, zero value otherwise.

### GetVirtualNetworkNameOk

`func (o *AzureVnetFlowLogsSettingsConfig) GetVirtualNetworkNameOk() (*string, bool)`

GetVirtualNetworkNameOk returns a tuple with the VirtualNetworkName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVirtualNetworkName

`func (o *AzureVnetFlowLogsSettingsConfig) SetVirtualNetworkName(v string)`

SetVirtualNetworkName sets VirtualNetworkName field to given value.

### HasVirtualNetworkName

`func (o *AzureVnetFlowLogsSettingsConfig) HasVirtualNetworkName() bool`

HasVirtualNetworkName returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



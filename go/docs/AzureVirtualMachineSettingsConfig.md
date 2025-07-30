# AzureVirtualMachineSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Cron** | Pointer to **string** | Cron expression for scheduling the input | [optional] 
**SubscriptionId** | Pointer to **string** | The subscription ID of Azure subscription | [optional] 
**TenantId** | Pointer to **string** | Tenant ID of the registered application on Azure Entra ID | [optional] 
**UseSyntheticData** | Pointer to **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Methods

### NewAzureVirtualMachineSettingsConfig

`func NewAzureVirtualMachineSettingsConfig() *AzureVirtualMachineSettingsConfig`

NewAzureVirtualMachineSettingsConfig instantiates a new AzureVirtualMachineSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAzureVirtualMachineSettingsConfigWithDefaults

`func NewAzureVirtualMachineSettingsConfigWithDefaults() *AzureVirtualMachineSettingsConfig`

NewAzureVirtualMachineSettingsConfigWithDefaults instantiates a new AzureVirtualMachineSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCron

`func (o *AzureVirtualMachineSettingsConfig) GetCron() string`

GetCron returns the Cron field if non-nil, zero value otherwise.

### GetCronOk

`func (o *AzureVirtualMachineSettingsConfig) GetCronOk() (*string, bool)`

GetCronOk returns a tuple with the Cron field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCron

`func (o *AzureVirtualMachineSettingsConfig) SetCron(v string)`

SetCron sets Cron field to given value.

### HasCron

`func (o *AzureVirtualMachineSettingsConfig) HasCron() bool`

HasCron returns a boolean if a field has been set.

### GetSubscriptionId

`func (o *AzureVirtualMachineSettingsConfig) GetSubscriptionId() string`

GetSubscriptionId returns the SubscriptionId field if non-nil, zero value otherwise.

### GetSubscriptionIdOk

`func (o *AzureVirtualMachineSettingsConfig) GetSubscriptionIdOk() (*string, bool)`

GetSubscriptionIdOk returns a tuple with the SubscriptionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubscriptionId

`func (o *AzureVirtualMachineSettingsConfig) SetSubscriptionId(v string)`

SetSubscriptionId sets SubscriptionId field to given value.

### HasSubscriptionId

`func (o *AzureVirtualMachineSettingsConfig) HasSubscriptionId() bool`

HasSubscriptionId returns a boolean if a field has been set.

### GetTenantId

`func (o *AzureVirtualMachineSettingsConfig) GetTenantId() string`

GetTenantId returns the TenantId field if non-nil, zero value otherwise.

### GetTenantIdOk

`func (o *AzureVirtualMachineSettingsConfig) GetTenantIdOk() (*string, bool)`

GetTenantIdOk returns a tuple with the TenantId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTenantId

`func (o *AzureVirtualMachineSettingsConfig) SetTenantId(v string)`

SetTenantId sets TenantId field to given value.

### HasTenantId

`func (o *AzureVirtualMachineSettingsConfig) HasTenantId() bool`

HasTenantId returns a boolean if a field has been set.

### GetUseSyntheticData

`func (o *AzureVirtualMachineSettingsConfig) GetUseSyntheticData() bool`

GetUseSyntheticData returns the UseSyntheticData field if non-nil, zero value otherwise.

### GetUseSyntheticDataOk

`func (o *AzureVirtualMachineSettingsConfig) GetUseSyntheticDataOk() (*bool, bool)`

GetUseSyntheticDataOk returns a tuple with the UseSyntheticData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseSyntheticData

`func (o *AzureVirtualMachineSettingsConfig) SetUseSyntheticData(v bool)`

SetUseSyntheticData sets UseSyntheticData field to given value.

### HasUseSyntheticData

`func (o *AzureVirtualMachineSettingsConfig) HasUseSyntheticData() bool`

HasUseSyntheticData returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



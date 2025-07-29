# CloudAssetInventorySettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AssetTypes** | Pointer to **[]string** | The type of assets to scan for.  If left empty, will scan all assets | [optional] 
**Cron** | Pointer to **string** | Cron expression for scheduling the input | [optional] 
**ResourceNames** | Pointer to **[]string** | The names of the resources to scan. can be organizations, projects or folders. | [optional] 
**UseSyntheticData** | Pointer to **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Methods

### NewCloudAssetInventorySettingsConfig

`func NewCloudAssetInventorySettingsConfig() *CloudAssetInventorySettingsConfig`

NewCloudAssetInventorySettingsConfig instantiates a new CloudAssetInventorySettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCloudAssetInventorySettingsConfigWithDefaults

`func NewCloudAssetInventorySettingsConfigWithDefaults() *CloudAssetInventorySettingsConfig`

NewCloudAssetInventorySettingsConfigWithDefaults instantiates a new CloudAssetInventorySettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAssetTypes

`func (o *CloudAssetInventorySettingsConfig) GetAssetTypes() []string`

GetAssetTypes returns the AssetTypes field if non-nil, zero value otherwise.

### GetAssetTypesOk

`func (o *CloudAssetInventorySettingsConfig) GetAssetTypesOk() (*[]string, bool)`

GetAssetTypesOk returns a tuple with the AssetTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssetTypes

`func (o *CloudAssetInventorySettingsConfig) SetAssetTypes(v []string)`

SetAssetTypes sets AssetTypes field to given value.

### HasAssetTypes

`func (o *CloudAssetInventorySettingsConfig) HasAssetTypes() bool`

HasAssetTypes returns a boolean if a field has been set.

### GetCron

`func (o *CloudAssetInventorySettingsConfig) GetCron() string`

GetCron returns the Cron field if non-nil, zero value otherwise.

### GetCronOk

`func (o *CloudAssetInventorySettingsConfig) GetCronOk() (*string, bool)`

GetCronOk returns a tuple with the Cron field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCron

`func (o *CloudAssetInventorySettingsConfig) SetCron(v string)`

SetCron sets Cron field to given value.

### HasCron

`func (o *CloudAssetInventorySettingsConfig) HasCron() bool`

HasCron returns a boolean if a field has been set.

### GetResourceNames

`func (o *CloudAssetInventorySettingsConfig) GetResourceNames() []string`

GetResourceNames returns the ResourceNames field if non-nil, zero value otherwise.

### GetResourceNamesOk

`func (o *CloudAssetInventorySettingsConfig) GetResourceNamesOk() (*[]string, bool)`

GetResourceNamesOk returns a tuple with the ResourceNames field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResourceNames

`func (o *CloudAssetInventorySettingsConfig) SetResourceNames(v []string)`

SetResourceNames sets ResourceNames field to given value.

### HasResourceNames

`func (o *CloudAssetInventorySettingsConfig) HasResourceNames() bool`

HasResourceNames returns a boolean if a field has been set.

### GetUseSyntheticData

`func (o *CloudAssetInventorySettingsConfig) GetUseSyntheticData() bool`

GetUseSyntheticData returns the UseSyntheticData field if non-nil, zero value otherwise.

### GetUseSyntheticDataOk

`func (o *CloudAssetInventorySettingsConfig) GetUseSyntheticDataOk() (*bool, bool)`

GetUseSyntheticDataOk returns a tuple with the UseSyntheticData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseSyntheticData

`func (o *CloudAssetInventorySettingsConfig) SetUseSyntheticData(v bool)`

SetUseSyntheticData sets UseSyntheticData field to given value.

### HasUseSyntheticData

`func (o *CloudAssetInventorySettingsConfig) HasUseSyntheticData() bool`

HasUseSyntheticData returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



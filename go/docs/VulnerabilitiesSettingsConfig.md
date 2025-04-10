# VulnerabilitiesSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CloudType** | Pointer to **string** | Your cloud type for CrowdStrike. Ex: &#39;autodiscover&#39;, &#39;us-1&#39;, &#39;us-2&#39;, &#39;eu-1&#39;, &#39;us-gov-1&#39;. | [optional] 
**Cron** | Pointer to **string** | Cron expression to schedule the data collection. | [optional] 
**FullSync** | Pointer to **bool** | Boolean to control weather the input performs full syncs or incremental syncs | [optional] 

## Methods

### NewVulnerabilitiesSettingsConfig

`func NewVulnerabilitiesSettingsConfig() *VulnerabilitiesSettingsConfig`

NewVulnerabilitiesSettingsConfig instantiates a new VulnerabilitiesSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewVulnerabilitiesSettingsConfigWithDefaults

`func NewVulnerabilitiesSettingsConfigWithDefaults() *VulnerabilitiesSettingsConfig`

NewVulnerabilitiesSettingsConfigWithDefaults instantiates a new VulnerabilitiesSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCloudType

`func (o *VulnerabilitiesSettingsConfig) GetCloudType() string`

GetCloudType returns the CloudType field if non-nil, zero value otherwise.

### GetCloudTypeOk

`func (o *VulnerabilitiesSettingsConfig) GetCloudTypeOk() (*string, bool)`

GetCloudTypeOk returns a tuple with the CloudType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCloudType

`func (o *VulnerabilitiesSettingsConfig) SetCloudType(v string)`

SetCloudType sets CloudType field to given value.

### HasCloudType

`func (o *VulnerabilitiesSettingsConfig) HasCloudType() bool`

HasCloudType returns a boolean if a field has been set.

### GetCron

`func (o *VulnerabilitiesSettingsConfig) GetCron() string`

GetCron returns the Cron field if non-nil, zero value otherwise.

### GetCronOk

`func (o *VulnerabilitiesSettingsConfig) GetCronOk() (*string, bool)`

GetCronOk returns a tuple with the Cron field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCron

`func (o *VulnerabilitiesSettingsConfig) SetCron(v string)`

SetCron sets Cron field to given value.

### HasCron

`func (o *VulnerabilitiesSettingsConfig) HasCron() bool`

HasCron returns a boolean if a field has been set.

### GetFullSync

`func (o *VulnerabilitiesSettingsConfig) GetFullSync() bool`

GetFullSync returns the FullSync field if non-nil, zero value otherwise.

### GetFullSyncOk

`func (o *VulnerabilitiesSettingsConfig) GetFullSyncOk() (*bool, bool)`

GetFullSyncOk returns a tuple with the FullSync field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFullSync

`func (o *VulnerabilitiesSettingsConfig) SetFullSync(v bool)`

SetFullSync sets FullSync field to given value.

### HasFullSync

`func (o *VulnerabilitiesSettingsConfig) HasFullSync() bool`

HasFullSync returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



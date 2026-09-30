# CloudResourceInventorySettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BackfillStartTime** | Pointer to **string** | Date to start fetching data from. If not specified, A Wiz report is generated on the first sync. All syncs thereafter will be of incremental data. | [optional] 
**CloudPlatform** | Pointer to [**[]WizCloudPlatform**](WizCloudPlatform.md) | Cloud Platform types for Wiz. Ex: &#39;AWS&#39;, &#39;AZURE&#39;, &#39;GCP&#39;. | [optional] 
**EndpointUrl** | **string** | Endpoint URL for the Wiz API. Ex: &#39;https://api.wiz.io/v1/cloud-resource-inventory&#39;. | 
**EntityType** | [**[]WizEntityType**](WizEntityType.md) | Entity types for Wiz. | 
**FullSnapshot** | Pointer to **bool** | FullSnapshot indicates whether to fetch a full snapshot of the cloud resource inventory. | [optional] 
**Interval** | Pointer to **int32** | Defines how frequently (in hours) the system polls the Wiz API to retrieve updated data. Only applicable when full_snapshot is enabled. The interval timer begins after each sync operation completes. | [optional] 
**RateLimit** | Pointer to [**ModelsInputRateLimit**](ModelsInputRateLimit.md) |  | [optional] 
**UseSyntheticData** | Pointer to **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Methods

### NewCloudResourceInventorySettingsConfig

`func NewCloudResourceInventorySettingsConfig(endpointUrl string, entityType []WizEntityType, ) *CloudResourceInventorySettingsConfig`

NewCloudResourceInventorySettingsConfig instantiates a new CloudResourceInventorySettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCloudResourceInventorySettingsConfigWithDefaults

`func NewCloudResourceInventorySettingsConfigWithDefaults() *CloudResourceInventorySettingsConfig`

NewCloudResourceInventorySettingsConfigWithDefaults instantiates a new CloudResourceInventorySettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBackfillStartTime

`func (o *CloudResourceInventorySettingsConfig) GetBackfillStartTime() string`

GetBackfillStartTime returns the BackfillStartTime field if non-nil, zero value otherwise.

### GetBackfillStartTimeOk

`func (o *CloudResourceInventorySettingsConfig) GetBackfillStartTimeOk() (*string, bool)`

GetBackfillStartTimeOk returns a tuple with the BackfillStartTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBackfillStartTime

`func (o *CloudResourceInventorySettingsConfig) SetBackfillStartTime(v string)`

SetBackfillStartTime sets BackfillStartTime field to given value.

### HasBackfillStartTime

`func (o *CloudResourceInventorySettingsConfig) HasBackfillStartTime() bool`

HasBackfillStartTime returns a boolean if a field has been set.

### GetCloudPlatform

`func (o *CloudResourceInventorySettingsConfig) GetCloudPlatform() []WizCloudPlatform`

GetCloudPlatform returns the CloudPlatform field if non-nil, zero value otherwise.

### GetCloudPlatformOk

`func (o *CloudResourceInventorySettingsConfig) GetCloudPlatformOk() (*[]WizCloudPlatform, bool)`

GetCloudPlatformOk returns a tuple with the CloudPlatform field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCloudPlatform

`func (o *CloudResourceInventorySettingsConfig) SetCloudPlatform(v []WizCloudPlatform)`

SetCloudPlatform sets CloudPlatform field to given value.

### HasCloudPlatform

`func (o *CloudResourceInventorySettingsConfig) HasCloudPlatform() bool`

HasCloudPlatform returns a boolean if a field has been set.

### GetEndpointUrl

`func (o *CloudResourceInventorySettingsConfig) GetEndpointUrl() string`

GetEndpointUrl returns the EndpointUrl field if non-nil, zero value otherwise.

### GetEndpointUrlOk

`func (o *CloudResourceInventorySettingsConfig) GetEndpointUrlOk() (*string, bool)`

GetEndpointUrlOk returns a tuple with the EndpointUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndpointUrl

`func (o *CloudResourceInventorySettingsConfig) SetEndpointUrl(v string)`

SetEndpointUrl sets EndpointUrl field to given value.


### GetEntityType

`func (o *CloudResourceInventorySettingsConfig) GetEntityType() []WizEntityType`

GetEntityType returns the EntityType field if non-nil, zero value otherwise.

### GetEntityTypeOk

`func (o *CloudResourceInventorySettingsConfig) GetEntityTypeOk() (*[]WizEntityType, bool)`

GetEntityTypeOk returns a tuple with the EntityType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntityType

`func (o *CloudResourceInventorySettingsConfig) SetEntityType(v []WizEntityType)`

SetEntityType sets EntityType field to given value.


### GetFullSnapshot

`func (o *CloudResourceInventorySettingsConfig) GetFullSnapshot() bool`

GetFullSnapshot returns the FullSnapshot field if non-nil, zero value otherwise.

### GetFullSnapshotOk

`func (o *CloudResourceInventorySettingsConfig) GetFullSnapshotOk() (*bool, bool)`

GetFullSnapshotOk returns a tuple with the FullSnapshot field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFullSnapshot

`func (o *CloudResourceInventorySettingsConfig) SetFullSnapshot(v bool)`

SetFullSnapshot sets FullSnapshot field to given value.

### HasFullSnapshot

`func (o *CloudResourceInventorySettingsConfig) HasFullSnapshot() bool`

HasFullSnapshot returns a boolean if a field has been set.

### GetInterval

`func (o *CloudResourceInventorySettingsConfig) GetInterval() int32`

GetInterval returns the Interval field if non-nil, zero value otherwise.

### GetIntervalOk

`func (o *CloudResourceInventorySettingsConfig) GetIntervalOk() (*int32, bool)`

GetIntervalOk returns a tuple with the Interval field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterval

`func (o *CloudResourceInventorySettingsConfig) SetInterval(v int32)`

SetInterval sets Interval field to given value.

### HasInterval

`func (o *CloudResourceInventorySettingsConfig) HasInterval() bool`

HasInterval returns a boolean if a field has been set.

### GetRateLimit

`func (o *CloudResourceInventorySettingsConfig) GetRateLimit() ModelsInputRateLimit`

GetRateLimit returns the RateLimit field if non-nil, zero value otherwise.

### GetRateLimitOk

`func (o *CloudResourceInventorySettingsConfig) GetRateLimitOk() (*ModelsInputRateLimit, bool)`

GetRateLimitOk returns a tuple with the RateLimit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateLimit

`func (o *CloudResourceInventorySettingsConfig) SetRateLimit(v ModelsInputRateLimit)`

SetRateLimit sets RateLimit field to given value.

### HasRateLimit

`func (o *CloudResourceInventorySettingsConfig) HasRateLimit() bool`

HasRateLimit returns a boolean if a field has been set.

### GetUseSyntheticData

`func (o *CloudResourceInventorySettingsConfig) GetUseSyntheticData() bool`

GetUseSyntheticData returns the UseSyntheticData field if non-nil, zero value otherwise.

### GetUseSyntheticDataOk

`func (o *CloudResourceInventorySettingsConfig) GetUseSyntheticDataOk() (*bool, bool)`

GetUseSyntheticDataOk returns a tuple with the UseSyntheticData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseSyntheticData

`func (o *CloudResourceInventorySettingsConfig) SetUseSyntheticData(v bool)`

SetUseSyntheticData sets UseSyntheticData field to given value.

### HasUseSyntheticData

`func (o *CloudResourceInventorySettingsConfig) HasUseSyntheticData() bool`

HasUseSyntheticData returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# EntraIdSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BackfillStartTime** | Pointer to **string** | The date to start fetching data from on first sync | [optional] 
**Category** | **string** | The Category of logs to query | 
**IngestionDelay** | Pointer to **int32** | The ingestion delay in seconds for the data source | [optional] 
**RateLimit** | Pointer to [**ModelsInputRateLimit**](ModelsInputRateLimit.md) |  | [optional] 
**TenantId** | **string** | The tenant ID of the Azure AD application | 
**UseSyntheticData** | Pointer to **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 
**WorkspaceId** | **string** | The workspace ID of the Log Analytics workspace | 

## Methods

### NewEntraIdSettingsConfig

`func NewEntraIdSettingsConfig(category string, tenantId string, workspaceId string, ) *EntraIdSettingsConfig`

NewEntraIdSettingsConfig instantiates a new EntraIdSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntraIdSettingsConfigWithDefaults

`func NewEntraIdSettingsConfigWithDefaults() *EntraIdSettingsConfig`

NewEntraIdSettingsConfigWithDefaults instantiates a new EntraIdSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBackfillStartTime

`func (o *EntraIdSettingsConfig) GetBackfillStartTime() string`

GetBackfillStartTime returns the BackfillStartTime field if non-nil, zero value otherwise.

### GetBackfillStartTimeOk

`func (o *EntraIdSettingsConfig) GetBackfillStartTimeOk() (*string, bool)`

GetBackfillStartTimeOk returns a tuple with the BackfillStartTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBackfillStartTime

`func (o *EntraIdSettingsConfig) SetBackfillStartTime(v string)`

SetBackfillStartTime sets BackfillStartTime field to given value.

### HasBackfillStartTime

`func (o *EntraIdSettingsConfig) HasBackfillStartTime() bool`

HasBackfillStartTime returns a boolean if a field has been set.

### GetCategory

`func (o *EntraIdSettingsConfig) GetCategory() string`

GetCategory returns the Category field if non-nil, zero value otherwise.

### GetCategoryOk

`func (o *EntraIdSettingsConfig) GetCategoryOk() (*string, bool)`

GetCategoryOk returns a tuple with the Category field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCategory

`func (o *EntraIdSettingsConfig) SetCategory(v string)`

SetCategory sets Category field to given value.


### GetIngestionDelay

`func (o *EntraIdSettingsConfig) GetIngestionDelay() int32`

GetIngestionDelay returns the IngestionDelay field if non-nil, zero value otherwise.

### GetIngestionDelayOk

`func (o *EntraIdSettingsConfig) GetIngestionDelayOk() (*int32, bool)`

GetIngestionDelayOk returns a tuple with the IngestionDelay field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIngestionDelay

`func (o *EntraIdSettingsConfig) SetIngestionDelay(v int32)`

SetIngestionDelay sets IngestionDelay field to given value.

### HasIngestionDelay

`func (o *EntraIdSettingsConfig) HasIngestionDelay() bool`

HasIngestionDelay returns a boolean if a field has been set.

### GetRateLimit

`func (o *EntraIdSettingsConfig) GetRateLimit() ModelsInputRateLimit`

GetRateLimit returns the RateLimit field if non-nil, zero value otherwise.

### GetRateLimitOk

`func (o *EntraIdSettingsConfig) GetRateLimitOk() (*ModelsInputRateLimit, bool)`

GetRateLimitOk returns a tuple with the RateLimit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateLimit

`func (o *EntraIdSettingsConfig) SetRateLimit(v ModelsInputRateLimit)`

SetRateLimit sets RateLimit field to given value.

### HasRateLimit

`func (o *EntraIdSettingsConfig) HasRateLimit() bool`

HasRateLimit returns a boolean if a field has been set.

### GetTenantId

`func (o *EntraIdSettingsConfig) GetTenantId() string`

GetTenantId returns the TenantId field if non-nil, zero value otherwise.

### GetTenantIdOk

`func (o *EntraIdSettingsConfig) GetTenantIdOk() (*string, bool)`

GetTenantIdOk returns a tuple with the TenantId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTenantId

`func (o *EntraIdSettingsConfig) SetTenantId(v string)`

SetTenantId sets TenantId field to given value.


### GetUseSyntheticData

`func (o *EntraIdSettingsConfig) GetUseSyntheticData() bool`

GetUseSyntheticData returns the UseSyntheticData field if non-nil, zero value otherwise.

### GetUseSyntheticDataOk

`func (o *EntraIdSettingsConfig) GetUseSyntheticDataOk() (*bool, bool)`

GetUseSyntheticDataOk returns a tuple with the UseSyntheticData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseSyntheticData

`func (o *EntraIdSettingsConfig) SetUseSyntheticData(v bool)`

SetUseSyntheticData sets UseSyntheticData field to given value.

### HasUseSyntheticData

`func (o *EntraIdSettingsConfig) HasUseSyntheticData() bool`

HasUseSyntheticData returns a boolean if a field has been set.

### GetWorkspaceId

`func (o *EntraIdSettingsConfig) GetWorkspaceId() string`

GetWorkspaceId returns the WorkspaceId field if non-nil, zero value otherwise.

### GetWorkspaceIdOk

`func (o *EntraIdSettingsConfig) GetWorkspaceIdOk() (*string, bool)`

GetWorkspaceIdOk returns a tuple with the WorkspaceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWorkspaceId

`func (o *EntraIdSettingsConfig) SetWorkspaceId(v string)`

SetWorkspaceId sets WorkspaceId field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



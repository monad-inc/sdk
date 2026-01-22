# PaloAltoDataSecurityAlertsSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BackfillStartTime** | Pointer to **string** | Date to start fetching data from. If not specified, a full sync of is fetched on the first sync. All syncs thereafter will be incremental. | [optional] 
**BaseUrl** | Pointer to **string** | URL of the organization | [optional] 
**UseSyntheticData** | Pointer to **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Methods

### NewPaloAltoDataSecurityAlertsSettingsConfig

`func NewPaloAltoDataSecurityAlertsSettingsConfig() *PaloAltoDataSecurityAlertsSettingsConfig`

NewPaloAltoDataSecurityAlertsSettingsConfig instantiates a new PaloAltoDataSecurityAlertsSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPaloAltoDataSecurityAlertsSettingsConfigWithDefaults

`func NewPaloAltoDataSecurityAlertsSettingsConfigWithDefaults() *PaloAltoDataSecurityAlertsSettingsConfig`

NewPaloAltoDataSecurityAlertsSettingsConfigWithDefaults instantiates a new PaloAltoDataSecurityAlertsSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBackfillStartTime

`func (o *PaloAltoDataSecurityAlertsSettingsConfig) GetBackfillStartTime() string`

GetBackfillStartTime returns the BackfillStartTime field if non-nil, zero value otherwise.

### GetBackfillStartTimeOk

`func (o *PaloAltoDataSecurityAlertsSettingsConfig) GetBackfillStartTimeOk() (*string, bool)`

GetBackfillStartTimeOk returns a tuple with the BackfillStartTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBackfillStartTime

`func (o *PaloAltoDataSecurityAlertsSettingsConfig) SetBackfillStartTime(v string)`

SetBackfillStartTime sets BackfillStartTime field to given value.

### HasBackfillStartTime

`func (o *PaloAltoDataSecurityAlertsSettingsConfig) HasBackfillStartTime() bool`

HasBackfillStartTime returns a boolean if a field has been set.

### GetBaseUrl

`func (o *PaloAltoDataSecurityAlertsSettingsConfig) GetBaseUrl() string`

GetBaseUrl returns the BaseUrl field if non-nil, zero value otherwise.

### GetBaseUrlOk

`func (o *PaloAltoDataSecurityAlertsSettingsConfig) GetBaseUrlOk() (*string, bool)`

GetBaseUrlOk returns a tuple with the BaseUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBaseUrl

`func (o *PaloAltoDataSecurityAlertsSettingsConfig) SetBaseUrl(v string)`

SetBaseUrl sets BaseUrl field to given value.

### HasBaseUrl

`func (o *PaloAltoDataSecurityAlertsSettingsConfig) HasBaseUrl() bool`

HasBaseUrl returns a boolean if a field has been set.

### GetUseSyntheticData

`func (o *PaloAltoDataSecurityAlertsSettingsConfig) GetUseSyntheticData() bool`

GetUseSyntheticData returns the UseSyntheticData field if non-nil, zero value otherwise.

### GetUseSyntheticDataOk

`func (o *PaloAltoDataSecurityAlertsSettingsConfig) GetUseSyntheticDataOk() (*bool, bool)`

GetUseSyntheticDataOk returns a tuple with the UseSyntheticData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseSyntheticData

`func (o *PaloAltoDataSecurityAlertsSettingsConfig) SetUseSyntheticData(v bool)`

SetUseSyntheticData sets UseSyntheticData field to given value.

### HasUseSyntheticData

`func (o *PaloAltoDataSecurityAlertsSettingsConfig) HasUseSyntheticData() bool`

HasUseSyntheticData returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



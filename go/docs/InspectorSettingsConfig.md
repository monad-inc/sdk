# InspectorSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BackfillStartTime** | Pointer to **string** | Date to start fetching data from. If not specified, a full sync is fetched on the first sync. All syncs thereafter will be incremental. | [optional] 
**Region** | Pointer to **string** | The AWS region where Inspector is enabled. | [optional] 
**RoleArn** | Pointer to **string** | The ARN of the IAM role to assume for accessing Inspector. | [optional] 
**Severities** | Pointer to **[]string** | Minimum severity level of findings to fetch. | [optional] 
**SeverityFilter** | Pointer to [**[]TypesStringFilter**](TypesStringFilter.md) |  | [optional] 
**UseSyntheticData** | Pointer to **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Methods

### NewInspectorSettingsConfig

`func NewInspectorSettingsConfig() *InspectorSettingsConfig`

NewInspectorSettingsConfig instantiates a new InspectorSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInspectorSettingsConfigWithDefaults

`func NewInspectorSettingsConfigWithDefaults() *InspectorSettingsConfig`

NewInspectorSettingsConfigWithDefaults instantiates a new InspectorSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBackfillStartTime

`func (o *InspectorSettingsConfig) GetBackfillStartTime() string`

GetBackfillStartTime returns the BackfillStartTime field if non-nil, zero value otherwise.

### GetBackfillStartTimeOk

`func (o *InspectorSettingsConfig) GetBackfillStartTimeOk() (*string, bool)`

GetBackfillStartTimeOk returns a tuple with the BackfillStartTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBackfillStartTime

`func (o *InspectorSettingsConfig) SetBackfillStartTime(v string)`

SetBackfillStartTime sets BackfillStartTime field to given value.

### HasBackfillStartTime

`func (o *InspectorSettingsConfig) HasBackfillStartTime() bool`

HasBackfillStartTime returns a boolean if a field has been set.

### GetRegion

`func (o *InspectorSettingsConfig) GetRegion() string`

GetRegion returns the Region field if non-nil, zero value otherwise.

### GetRegionOk

`func (o *InspectorSettingsConfig) GetRegionOk() (*string, bool)`

GetRegionOk returns a tuple with the Region field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegion

`func (o *InspectorSettingsConfig) SetRegion(v string)`

SetRegion sets Region field to given value.

### HasRegion

`func (o *InspectorSettingsConfig) HasRegion() bool`

HasRegion returns a boolean if a field has been set.

### GetRoleArn

`func (o *InspectorSettingsConfig) GetRoleArn() string`

GetRoleArn returns the RoleArn field if non-nil, zero value otherwise.

### GetRoleArnOk

`func (o *InspectorSettingsConfig) GetRoleArnOk() (*string, bool)`

GetRoleArnOk returns a tuple with the RoleArn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoleArn

`func (o *InspectorSettingsConfig) SetRoleArn(v string)`

SetRoleArn sets RoleArn field to given value.

### HasRoleArn

`func (o *InspectorSettingsConfig) HasRoleArn() bool`

HasRoleArn returns a boolean if a field has been set.

### GetSeverities

`func (o *InspectorSettingsConfig) GetSeverities() []string`

GetSeverities returns the Severities field if non-nil, zero value otherwise.

### GetSeveritiesOk

`func (o *InspectorSettingsConfig) GetSeveritiesOk() (*[]string, bool)`

GetSeveritiesOk returns a tuple with the Severities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSeverities

`func (o *InspectorSettingsConfig) SetSeverities(v []string)`

SetSeverities sets Severities field to given value.

### HasSeverities

`func (o *InspectorSettingsConfig) HasSeverities() bool`

HasSeverities returns a boolean if a field has been set.

### GetSeverityFilter

`func (o *InspectorSettingsConfig) GetSeverityFilter() []TypesStringFilter`

GetSeverityFilter returns the SeverityFilter field if non-nil, zero value otherwise.

### GetSeverityFilterOk

`func (o *InspectorSettingsConfig) GetSeverityFilterOk() (*[]TypesStringFilter, bool)`

GetSeverityFilterOk returns a tuple with the SeverityFilter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSeverityFilter

`func (o *InspectorSettingsConfig) SetSeverityFilter(v []TypesStringFilter)`

SetSeverityFilter sets SeverityFilter field to given value.

### HasSeverityFilter

`func (o *InspectorSettingsConfig) HasSeverityFilter() bool`

HasSeverityFilter returns a boolean if a field has been set.

### GetUseSyntheticData

`func (o *InspectorSettingsConfig) GetUseSyntheticData() bool`

GetUseSyntheticData returns the UseSyntheticData field if non-nil, zero value otherwise.

### GetUseSyntheticDataOk

`func (o *InspectorSettingsConfig) GetUseSyntheticDataOk() (*bool, bool)`

GetUseSyntheticDataOk returns a tuple with the UseSyntheticData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseSyntheticData

`func (o *InspectorSettingsConfig) SetUseSyntheticData(v bool)`

SetUseSyntheticData sets UseSyntheticData field to given value.

### HasUseSyntheticData

`func (o *InspectorSettingsConfig) HasUseSyntheticData() bool`

HasUseSyntheticData returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



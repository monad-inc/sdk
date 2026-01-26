# AivenServiceLogsSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BackfillStartTime** | Pointer to **string** | Date to start fetching data from. If not specified, a full sync is fetched on the first sync. All syncs thereafter will be incremental. | [optional] 
**Project** | Pointer to **string** | The Aiven project name | [optional] 
**Service** | Pointer to **string** | The Aiven service name | [optional] 
**UseSyntheticData** | Pointer to **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Methods

### NewAivenServiceLogsSettingsConfig

`func NewAivenServiceLogsSettingsConfig() *AivenServiceLogsSettingsConfig`

NewAivenServiceLogsSettingsConfig instantiates a new AivenServiceLogsSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAivenServiceLogsSettingsConfigWithDefaults

`func NewAivenServiceLogsSettingsConfigWithDefaults() *AivenServiceLogsSettingsConfig`

NewAivenServiceLogsSettingsConfigWithDefaults instantiates a new AivenServiceLogsSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBackfillStartTime

`func (o *AivenServiceLogsSettingsConfig) GetBackfillStartTime() string`

GetBackfillStartTime returns the BackfillStartTime field if non-nil, zero value otherwise.

### GetBackfillStartTimeOk

`func (o *AivenServiceLogsSettingsConfig) GetBackfillStartTimeOk() (*string, bool)`

GetBackfillStartTimeOk returns a tuple with the BackfillStartTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBackfillStartTime

`func (o *AivenServiceLogsSettingsConfig) SetBackfillStartTime(v string)`

SetBackfillStartTime sets BackfillStartTime field to given value.

### HasBackfillStartTime

`func (o *AivenServiceLogsSettingsConfig) HasBackfillStartTime() bool`

HasBackfillStartTime returns a boolean if a field has been set.

### GetProject

`func (o *AivenServiceLogsSettingsConfig) GetProject() string`

GetProject returns the Project field if non-nil, zero value otherwise.

### GetProjectOk

`func (o *AivenServiceLogsSettingsConfig) GetProjectOk() (*string, bool)`

GetProjectOk returns a tuple with the Project field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProject

`func (o *AivenServiceLogsSettingsConfig) SetProject(v string)`

SetProject sets Project field to given value.

### HasProject

`func (o *AivenServiceLogsSettingsConfig) HasProject() bool`

HasProject returns a boolean if a field has been set.

### GetService

`func (o *AivenServiceLogsSettingsConfig) GetService() string`

GetService returns the Service field if non-nil, zero value otherwise.

### GetServiceOk

`func (o *AivenServiceLogsSettingsConfig) GetServiceOk() (*string, bool)`

GetServiceOk returns a tuple with the Service field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetService

`func (o *AivenServiceLogsSettingsConfig) SetService(v string)`

SetService sets Service field to given value.

### HasService

`func (o *AivenServiceLogsSettingsConfig) HasService() bool`

HasService returns a boolean if a field has been set.

### GetUseSyntheticData

`func (o *AivenServiceLogsSettingsConfig) GetUseSyntheticData() bool`

GetUseSyntheticData returns the UseSyntheticData field if non-nil, zero value otherwise.

### GetUseSyntheticDataOk

`func (o *AivenServiceLogsSettingsConfig) GetUseSyntheticDataOk() (*bool, bool)`

GetUseSyntheticDataOk returns a tuple with the UseSyntheticData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseSyntheticData

`func (o *AivenServiceLogsSettingsConfig) SetUseSyntheticData(v bool)`

SetUseSyntheticData sets UseSyntheticData field to given value.

### HasUseSyntheticData

`func (o *AivenServiceLogsSettingsConfig) HasUseSyntheticData() bool`

HasUseSyntheticData returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# ModelsStorageTypeTimeSeries

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StorageType** | Pointer to **string** |  | [optional] 
**Values** | Pointer to [**[]ModelsPipelineMetricsValue**](ModelsPipelineMetricsValue.md) |  | [optional] 

## Methods

### NewModelsStorageTypeTimeSeries

`func NewModelsStorageTypeTimeSeries() *ModelsStorageTypeTimeSeries`

NewModelsStorageTypeTimeSeries instantiates a new ModelsStorageTypeTimeSeries object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewModelsStorageTypeTimeSeriesWithDefaults

`func NewModelsStorageTypeTimeSeriesWithDefaults() *ModelsStorageTypeTimeSeries`

NewModelsStorageTypeTimeSeriesWithDefaults instantiates a new ModelsStorageTypeTimeSeries object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStorageType

`func (o *ModelsStorageTypeTimeSeries) GetStorageType() string`

GetStorageType returns the StorageType field if non-nil, zero value otherwise.

### GetStorageTypeOk

`func (o *ModelsStorageTypeTimeSeries) GetStorageTypeOk() (*string, bool)`

GetStorageTypeOk returns a tuple with the StorageType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStorageType

`func (o *ModelsStorageTypeTimeSeries) SetStorageType(v string)`

SetStorageType sets StorageType field to given value.

### HasStorageType

`func (o *ModelsStorageTypeTimeSeries) HasStorageType() bool`

HasStorageType returns a boolean if a field has been set.

### GetValues

`func (o *ModelsStorageTypeTimeSeries) GetValues() []ModelsPipelineMetricsValue`

GetValues returns the Values field if non-nil, zero value otherwise.

### GetValuesOk

`func (o *ModelsStorageTypeTimeSeries) GetValuesOk() (*[]ModelsPipelineMetricsValue, bool)`

GetValuesOk returns a tuple with the Values field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValues

`func (o *ModelsStorageTypeTimeSeries) SetValues(v []ModelsPipelineMetricsValue)`

SetValues sets Values field to given value.

### HasValues

`func (o *ModelsStorageTypeTimeSeries) HasValues() bool`

HasValues returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



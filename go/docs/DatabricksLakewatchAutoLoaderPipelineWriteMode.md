# DatabricksLakewatchAutoLoaderPipelineWriteMode

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PipelineInterval** | **int32** | How often the ingestion Job runs, in minutes. Range: 5 to 1440 (24h). | 
**Table** | **string** | The target table to ingest staged files into | 
**Volume** | **string** | The Unity Catalog Volume used for staging JSONL files | 

## Methods

### NewDatabricksLakewatchAutoLoaderPipelineWriteMode

`func NewDatabricksLakewatchAutoLoaderPipelineWriteMode(pipelineInterval int32, table string, volume string, ) *DatabricksLakewatchAutoLoaderPipelineWriteMode`

NewDatabricksLakewatchAutoLoaderPipelineWriteMode instantiates a new DatabricksLakewatchAutoLoaderPipelineWriteMode object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDatabricksLakewatchAutoLoaderPipelineWriteModeWithDefaults

`func NewDatabricksLakewatchAutoLoaderPipelineWriteModeWithDefaults() *DatabricksLakewatchAutoLoaderPipelineWriteMode`

NewDatabricksLakewatchAutoLoaderPipelineWriteModeWithDefaults instantiates a new DatabricksLakewatchAutoLoaderPipelineWriteMode object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPipelineInterval

`func (o *DatabricksLakewatchAutoLoaderPipelineWriteMode) GetPipelineInterval() int32`

GetPipelineInterval returns the PipelineInterval field if non-nil, zero value otherwise.

### GetPipelineIntervalOk

`func (o *DatabricksLakewatchAutoLoaderPipelineWriteMode) GetPipelineIntervalOk() (*int32, bool)`

GetPipelineIntervalOk returns a tuple with the PipelineInterval field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPipelineInterval

`func (o *DatabricksLakewatchAutoLoaderPipelineWriteMode) SetPipelineInterval(v int32)`

SetPipelineInterval sets PipelineInterval field to given value.


### GetTable

`func (o *DatabricksLakewatchAutoLoaderPipelineWriteMode) GetTable() string`

GetTable returns the Table field if non-nil, zero value otherwise.

### GetTableOk

`func (o *DatabricksLakewatchAutoLoaderPipelineWriteMode) GetTableOk() (*string, bool)`

GetTableOk returns a tuple with the Table field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTable

`func (o *DatabricksLakewatchAutoLoaderPipelineWriteMode) SetTable(v string)`

SetTable sets Table field to given value.


### GetVolume

`func (o *DatabricksLakewatchAutoLoaderPipelineWriteMode) GetVolume() string`

GetVolume returns the Volume field if non-nil, zero value otherwise.

### GetVolumeOk

`func (o *DatabricksLakewatchAutoLoaderPipelineWriteMode) GetVolumeOk() (*string, bool)`

GetVolumeOk returns a tuple with the Volume field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVolume

`func (o *DatabricksLakewatchAutoLoaderPipelineWriteMode) SetVolume(v string)`

SetVolume sets Volume field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



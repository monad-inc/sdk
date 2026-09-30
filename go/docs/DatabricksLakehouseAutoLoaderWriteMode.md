# DatabricksLakehouseAutoLoaderWriteMode

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BatchConfig** | Pointer to [**BatchConfigBatchConfig**](BatchConfigBatchConfig.md) |  | [optional] 
**Pipeline** | Pointer to [**DatabricksLakehousePipelineConfig**](DatabricksLakehousePipelineConfig.md) |  | [optional] 
**Volume** | **string** | The Unity Catalog Volume used for staging JSONL files | 

## Methods

### NewDatabricksLakehouseAutoLoaderWriteMode

`func NewDatabricksLakehouseAutoLoaderWriteMode(volume string, ) *DatabricksLakehouseAutoLoaderWriteMode`

NewDatabricksLakehouseAutoLoaderWriteMode instantiates a new DatabricksLakehouseAutoLoaderWriteMode object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDatabricksLakehouseAutoLoaderWriteModeWithDefaults

`func NewDatabricksLakehouseAutoLoaderWriteModeWithDefaults() *DatabricksLakehouseAutoLoaderWriteMode`

NewDatabricksLakehouseAutoLoaderWriteModeWithDefaults instantiates a new DatabricksLakehouseAutoLoaderWriteMode object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBatchConfig

`func (o *DatabricksLakehouseAutoLoaderWriteMode) GetBatchConfig() BatchConfigBatchConfig`

GetBatchConfig returns the BatchConfig field if non-nil, zero value otherwise.

### GetBatchConfigOk

`func (o *DatabricksLakehouseAutoLoaderWriteMode) GetBatchConfigOk() (*BatchConfigBatchConfig, bool)`

GetBatchConfigOk returns a tuple with the BatchConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBatchConfig

`func (o *DatabricksLakehouseAutoLoaderWriteMode) SetBatchConfig(v BatchConfigBatchConfig)`

SetBatchConfig sets BatchConfig field to given value.

### HasBatchConfig

`func (o *DatabricksLakehouseAutoLoaderWriteMode) HasBatchConfig() bool`

HasBatchConfig returns a boolean if a field has been set.

### GetPipeline

`func (o *DatabricksLakehouseAutoLoaderWriteMode) GetPipeline() DatabricksLakehousePipelineConfig`

GetPipeline returns the Pipeline field if non-nil, zero value otherwise.

### GetPipelineOk

`func (o *DatabricksLakehouseAutoLoaderWriteMode) GetPipelineOk() (*DatabricksLakehousePipelineConfig, bool)`

GetPipelineOk returns a tuple with the Pipeline field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPipeline

`func (o *DatabricksLakehouseAutoLoaderWriteMode) SetPipeline(v DatabricksLakehousePipelineConfig)`

SetPipeline sets Pipeline field to given value.

### HasPipeline

`func (o *DatabricksLakehouseAutoLoaderWriteMode) HasPipeline() bool`

HasPipeline returns a boolean if a field has been set.

### GetVolume

`func (o *DatabricksLakehouseAutoLoaderWriteMode) GetVolume() string`

GetVolume returns the Volume field if non-nil, zero value otherwise.

### GetVolumeOk

`func (o *DatabricksLakehouseAutoLoaderWriteMode) GetVolumeOk() (*string, bool)`

GetVolumeOk returns a tuple with the Volume field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVolume

`func (o *DatabricksLakehouseAutoLoaderWriteMode) SetVolume(v string)`

SetVolume sets Volume field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



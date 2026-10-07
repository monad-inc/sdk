# DatabricksLakehousePipelineConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Mode** | **string** |  | 
**MonadManaged** | Pointer to [**DatabricksLakehouseMonadManagedPipeline**](DatabricksLakehouseMonadManagedPipeline.md) |  | [optional] 

## Methods

### NewDatabricksLakehousePipelineConfig

`func NewDatabricksLakehousePipelineConfig(mode string, ) *DatabricksLakehousePipelineConfig`

NewDatabricksLakehousePipelineConfig instantiates a new DatabricksLakehousePipelineConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDatabricksLakehousePipelineConfigWithDefaults

`func NewDatabricksLakehousePipelineConfigWithDefaults() *DatabricksLakehousePipelineConfig`

NewDatabricksLakehousePipelineConfigWithDefaults instantiates a new DatabricksLakehousePipelineConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMode

`func (o *DatabricksLakehousePipelineConfig) GetMode() string`

GetMode returns the Mode field if non-nil, zero value otherwise.

### GetModeOk

`func (o *DatabricksLakehousePipelineConfig) GetModeOk() (*string, bool)`

GetModeOk returns a tuple with the Mode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMode

`func (o *DatabricksLakehousePipelineConfig) SetMode(v string)`

SetMode sets Mode field to given value.


### GetMonadManaged

`func (o *DatabricksLakehousePipelineConfig) GetMonadManaged() DatabricksLakehouseMonadManagedPipeline`

GetMonadManaged returns the MonadManaged field if non-nil, zero value otherwise.

### GetMonadManagedOk

`func (o *DatabricksLakehousePipelineConfig) GetMonadManagedOk() (*DatabricksLakehouseMonadManagedPipeline, bool)`

GetMonadManagedOk returns a tuple with the MonadManaged field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMonadManaged

`func (o *DatabricksLakehousePipelineConfig) SetMonadManaged(v DatabricksLakehouseMonadManagedPipeline)`

SetMonadManaged sets MonadManaged field to given value.

### HasMonadManaged

`func (o *DatabricksLakehousePipelineConfig) HasMonadManaged() bool`

HasMonadManaged returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



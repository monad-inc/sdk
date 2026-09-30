# DatabricksLakehouseMonadManagedPipeline

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Interval** | Pointer to **int32** | How often the pipeline runs, in minutes; defaults to 60 | [optional] 
**TableName** | Pointer to **string** | The bronze table the pipeline writes into; defaults to bronze_&lt;volume&gt; | [optional] 

## Methods

### NewDatabricksLakehouseMonadManagedPipeline

`func NewDatabricksLakehouseMonadManagedPipeline() *DatabricksLakehouseMonadManagedPipeline`

NewDatabricksLakehouseMonadManagedPipeline instantiates a new DatabricksLakehouseMonadManagedPipeline object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDatabricksLakehouseMonadManagedPipelineWithDefaults

`func NewDatabricksLakehouseMonadManagedPipelineWithDefaults() *DatabricksLakehouseMonadManagedPipeline`

NewDatabricksLakehouseMonadManagedPipelineWithDefaults instantiates a new DatabricksLakehouseMonadManagedPipeline object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetInterval

`func (o *DatabricksLakehouseMonadManagedPipeline) GetInterval() int32`

GetInterval returns the Interval field if non-nil, zero value otherwise.

### GetIntervalOk

`func (o *DatabricksLakehouseMonadManagedPipeline) GetIntervalOk() (*int32, bool)`

GetIntervalOk returns a tuple with the Interval field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterval

`func (o *DatabricksLakehouseMonadManagedPipeline) SetInterval(v int32)`

SetInterval sets Interval field to given value.

### HasInterval

`func (o *DatabricksLakehouseMonadManagedPipeline) HasInterval() bool`

HasInterval returns a boolean if a field has been set.

### GetTableName

`func (o *DatabricksLakehouseMonadManagedPipeline) GetTableName() string`

GetTableName returns the TableName field if non-nil, zero value otherwise.

### GetTableNameOk

`func (o *DatabricksLakehouseMonadManagedPipeline) GetTableNameOk() (*string, bool)`

GetTableNameOk returns a tuple with the TableName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTableName

`func (o *DatabricksLakehouseMonadManagedPipeline) SetTableName(v string)`

SetTableName sets TableName field to given value.

### HasTableName

`func (o *DatabricksLakehouseMonadManagedPipeline) HasTableName() bool`

HasTableName returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



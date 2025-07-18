# ModelsPipelineList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Pagination** | Pointer to [**ModelsPagination**](ModelsPagination.md) |  | [optional] 
**Pipelines** | Pointer to [**[]ModelsPipeline**](ModelsPipeline.md) |  | [optional] 

## Methods

### NewModelsPipelineList

`func NewModelsPipelineList() *ModelsPipelineList`

NewModelsPipelineList instantiates a new ModelsPipelineList object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewModelsPipelineListWithDefaults

`func NewModelsPipelineListWithDefaults() *ModelsPipelineList`

NewModelsPipelineListWithDefaults instantiates a new ModelsPipelineList object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPagination

`func (o *ModelsPipelineList) GetPagination() ModelsPagination`

GetPagination returns the Pagination field if non-nil, zero value otherwise.

### GetPaginationOk

`func (o *ModelsPipelineList) GetPaginationOk() (*ModelsPagination, bool)`

GetPaginationOk returns a tuple with the Pagination field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPagination

`func (o *ModelsPipelineList) SetPagination(v ModelsPagination)`

SetPagination sets Pagination field to given value.

### HasPagination

`func (o *ModelsPipelineList) HasPagination() bool`

HasPagination returns a boolean if a field has been set.

### GetPipelines

`func (o *ModelsPipelineList) GetPipelines() []ModelsPipeline`

GetPipelines returns the Pipelines field if non-nil, zero value otherwise.

### GetPipelinesOk

`func (o *ModelsPipelineList) GetPipelinesOk() (*[]ModelsPipeline, bool)`

GetPipelinesOk returns a tuple with the Pipelines field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPipelines

`func (o *ModelsPipelineList) SetPipelines(v []ModelsPipeline)`

SetPipelines sets Pipelines field to given value.

### HasPipelines

`func (o *ModelsPipelineList) HasPipelines() bool`

HasPipelines returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# RoutesListOutputsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Outputs** | Pointer to [**[]RoutesOutputWithMetadata**](RoutesOutputWithMetadata.md) |  | [optional] 
**Pagination** | Pointer to [**ModelsPagination**](ModelsPagination.md) |  | [optional] 

## Methods

### NewRoutesListOutputsResponse

`func NewRoutesListOutputsResponse() *RoutesListOutputsResponse`

NewRoutesListOutputsResponse instantiates a new RoutesListOutputsResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoutesListOutputsResponseWithDefaults

`func NewRoutesListOutputsResponseWithDefaults() *RoutesListOutputsResponse`

NewRoutesListOutputsResponseWithDefaults instantiates a new RoutesListOutputsResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOutputs

`func (o *RoutesListOutputsResponse) GetOutputs() []RoutesOutputWithMetadata`

GetOutputs returns the Outputs field if non-nil, zero value otherwise.

### GetOutputsOk

`func (o *RoutesListOutputsResponse) GetOutputsOk() (*[]RoutesOutputWithMetadata, bool)`

GetOutputsOk returns a tuple with the Outputs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOutputs

`func (o *RoutesListOutputsResponse) SetOutputs(v []RoutesOutputWithMetadata)`

SetOutputs sets Outputs field to given value.

### HasOutputs

`func (o *RoutesListOutputsResponse) HasOutputs() bool`

HasOutputs returns a boolean if a field has been set.

### GetPagination

`func (o *RoutesListOutputsResponse) GetPagination() ModelsPagination`

GetPagination returns the Pagination field if non-nil, zero value otherwise.

### GetPaginationOk

`func (o *RoutesListOutputsResponse) GetPaginationOk() (*ModelsPagination, bool)`

GetPaginationOk returns a tuple with the Pagination field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPagination

`func (o *RoutesListOutputsResponse) SetPagination(v ModelsPagination)`

SetPagination sets Pagination field to given value.

### HasPagination

`func (o *RoutesListOutputsResponse) HasPagination() bool`

HasPagination returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



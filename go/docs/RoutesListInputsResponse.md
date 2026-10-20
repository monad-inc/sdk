# RoutesListInputsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Inputs** | Pointer to [**[]RoutesInputWithMetadata**](RoutesInputWithMetadata.md) |  | [optional] 
**Pagination** | Pointer to [**ModelsPagination**](ModelsPagination.md) |  | [optional] 

## Methods

### NewRoutesListInputsResponse

`func NewRoutesListInputsResponse() *RoutesListInputsResponse`

NewRoutesListInputsResponse instantiates a new RoutesListInputsResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoutesListInputsResponseWithDefaults

`func NewRoutesListInputsResponseWithDefaults() *RoutesListInputsResponse`

NewRoutesListInputsResponseWithDefaults instantiates a new RoutesListInputsResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetInputs

`func (o *RoutesListInputsResponse) GetInputs() []RoutesInputWithMetadata`

GetInputs returns the Inputs field if non-nil, zero value otherwise.

### GetInputsOk

`func (o *RoutesListInputsResponse) GetInputsOk() (*[]RoutesInputWithMetadata, bool)`

GetInputsOk returns a tuple with the Inputs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInputs

`func (o *RoutesListInputsResponse) SetInputs(v []RoutesInputWithMetadata)`

SetInputs sets Inputs field to given value.

### HasInputs

`func (o *RoutesListInputsResponse) HasInputs() bool`

HasInputs returns a boolean if a field has been set.

### GetPagination

`func (o *RoutesListInputsResponse) GetPagination() ModelsPagination`

GetPagination returns the Pagination field if non-nil, zero value otherwise.

### GetPaginationOk

`func (o *RoutesListInputsResponse) GetPaginationOk() (*ModelsPagination, bool)`

GetPaginationOk returns a tuple with the Pagination field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPagination

`func (o *RoutesListInputsResponse) SetPagination(v ModelsPagination)`

SetPagination sets Pagination field to given value.

### HasPagination

`func (o *RoutesListInputsResponse) HasPagination() bool`

HasPagination returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# RoutesV3SharedResourceListResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Pagination** | Pointer to [**ModelsPagination**](ModelsPagination.md) |  | [optional] 
**SharedResources** | Pointer to [**[]RoutesV3SharedResourceWithMetadata**](RoutesV3SharedResourceWithMetadata.md) |  | [optional] 

## Methods

### NewRoutesV3SharedResourceListResponse

`func NewRoutesV3SharedResourceListResponse() *RoutesV3SharedResourceListResponse`

NewRoutesV3SharedResourceListResponse instantiates a new RoutesV3SharedResourceListResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoutesV3SharedResourceListResponseWithDefaults

`func NewRoutesV3SharedResourceListResponseWithDefaults() *RoutesV3SharedResourceListResponse`

NewRoutesV3SharedResourceListResponseWithDefaults instantiates a new RoutesV3SharedResourceListResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPagination

`func (o *RoutesV3SharedResourceListResponse) GetPagination() ModelsPagination`

GetPagination returns the Pagination field if non-nil, zero value otherwise.

### GetPaginationOk

`func (o *RoutesV3SharedResourceListResponse) GetPaginationOk() (*ModelsPagination, bool)`

GetPaginationOk returns a tuple with the Pagination field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPagination

`func (o *RoutesV3SharedResourceListResponse) SetPagination(v ModelsPagination)`

SetPagination sets Pagination field to given value.

### HasPagination

`func (o *RoutesV3SharedResourceListResponse) HasPagination() bool`

HasPagination returns a boolean if a field has been set.

### GetSharedResources

`func (o *RoutesV3SharedResourceListResponse) GetSharedResources() []RoutesV3SharedResourceWithMetadata`

GetSharedResources returns the SharedResources field if non-nil, zero value otherwise.

### GetSharedResourcesOk

`func (o *RoutesV3SharedResourceListResponse) GetSharedResourcesOk() (*[]RoutesV3SharedResourceWithMetadata, bool)`

GetSharedResourcesOk returns a tuple with the SharedResources field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSharedResources

`func (o *RoutesV3SharedResourceListResponse) SetSharedResources(v []RoutesV3SharedResourceWithMetadata)`

SetSharedResources sets SharedResources field to given value.

### HasSharedResources

`func (o *RoutesV3SharedResourceListResponse) HasSharedResources() bool`

HasSharedResources returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



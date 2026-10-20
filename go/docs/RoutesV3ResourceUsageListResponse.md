# RoutesV3ResourceUsageListResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Pagination** | Pointer to [**ModelsPagination**](ModelsPagination.md) |  | [optional] 
**Usages** | Pointer to [**[]RoutesV3ResourceUsageWithMetadata**](RoutesV3ResourceUsageWithMetadata.md) |  | [optional] 

## Methods

### NewRoutesV3ResourceUsageListResponse

`func NewRoutesV3ResourceUsageListResponse() *RoutesV3ResourceUsageListResponse`

NewRoutesV3ResourceUsageListResponse instantiates a new RoutesV3ResourceUsageListResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoutesV3ResourceUsageListResponseWithDefaults

`func NewRoutesV3ResourceUsageListResponseWithDefaults() *RoutesV3ResourceUsageListResponse`

NewRoutesV3ResourceUsageListResponseWithDefaults instantiates a new RoutesV3ResourceUsageListResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPagination

`func (o *RoutesV3ResourceUsageListResponse) GetPagination() ModelsPagination`

GetPagination returns the Pagination field if non-nil, zero value otherwise.

### GetPaginationOk

`func (o *RoutesV3ResourceUsageListResponse) GetPaginationOk() (*ModelsPagination, bool)`

GetPaginationOk returns a tuple with the Pagination field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPagination

`func (o *RoutesV3ResourceUsageListResponse) SetPagination(v ModelsPagination)`

SetPagination sets Pagination field to given value.

### HasPagination

`func (o *RoutesV3ResourceUsageListResponse) HasPagination() bool`

HasPagination returns a boolean if a field has been set.

### GetUsages

`func (o *RoutesV3ResourceUsageListResponse) GetUsages() []RoutesV3ResourceUsageWithMetadata`

GetUsages returns the Usages field if non-nil, zero value otherwise.

### GetUsagesOk

`func (o *RoutesV3ResourceUsageListResponse) GetUsagesOk() (*[]RoutesV3ResourceUsageWithMetadata, bool)`

GetUsagesOk returns a tuple with the Usages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsages

`func (o *RoutesV3ResourceUsageListResponse) SetUsages(v []RoutesV3ResourceUsageWithMetadata)`

SetUsages sets Usages field to given value.

### HasUsages

`func (o *RoutesV3ResourceUsageListResponse) HasUsages() bool`

HasUsages returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


